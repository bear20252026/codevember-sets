import * as THREE from 'three/webgpu';
import {
  Fn, Loop, If, Break, Continue, uniform, uniformArray, float, int, vec2, vec3, vec4, select,
  abs, max, min, dot, length, normalize, mix, smoothstep, step, exp, pow, sin, fract, floor, clamp, reflect,
  screenUV, pass, positionWorld, positionLocal, positionGeometry, normalLocal, normalGeometry, cameraPosition,
  instancedBufferAttribute, uv, reflector, atan, cos, pmremTexture, refract, normalWorld, fwidth, vogelDiskSample, luminance, screenSize, convertToTexture
} from 'three/tsl';
import { bloom } from 'three/addons/tsl/display/BloomNode.js';
import { fxaa } from 'three/addons/tsl/display/FXAANode.js';
import { lensflare } from 'three/addons/tsl/display/LensflareNode.js';
import { gaussianBlur } from 'three/addons/tsl/display/GaussianBlurNode.js';
import { ao } from 'three/addons/tsl/display/GTAONode.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const BUILD = 'v2.6-tesseract';
console.log('%c' + BUILD, 'color:#9fc4ff');

////////////////////////////////////////////////////////////////
//// PARAMS
////////////////////////////////////////////////////////////////

const QS = new URLSearchParams(location.search);
const LOWQ = QS.has('low') || /Android|iPhone|iPad/i.test(navigator.userAgent);
const GREEBLES = LOWQ ? 260 : 400;
const STEPS = LOWQ ? 90 : 130;
const SH_STEPS = LOWQ ? 18 : 30;

const uTime = uniform(0);
const uRes = uniform(new THREE.Vector2(1, 1));
const uTan = uniform(Math.tan(THREE.MathUtils.degToRad(15)));
const uCamPos = uniform(new THREE.Vector3(0, 0, 8.4));
const uR0 = uniform(new THREE.Vector3(1, 0, 0));
const uR1 = uniform(new THREE.Vector3(0, 1, 0));
const uR2 = uniform(new THREE.Vector3(0, 0, 1));
const KEY = new THREE.Vector3(0.62, 0.62, 0.48).normalize();
const uKey = uniform(KEY.clone());
const uEnvOff = uniform(new THREE.Vector2(0, 0));
const uBox = uniform(new THREE.Vector3(7, 8, 5).normalize());
const uRim = uniform(new THREE.Vector3(-8, 2, -5).normalize());

////////////////////////////////////////////////////////////////
//// HASH / NOISE
////////////////////////////////////////////////////////////////

const hash13 = Fn(([q]) => {
  const p3 = fract(q.mul(0.1031)).toVar();
  p3.addAssign(dot(p3, p3.zyx.add(31.32)));
  return fract(p3.x.add(p3.y).mul(p3.z));
}).setLayout({ name: 'h13', type: 'float', inputs: [{ name: 'q', type: 'vec3' }] });

const hash33 = Fn(([q]) => {
  const p3 = fract(q.mul(vec3(0.1031, 0.1030, 0.0973))).toVar();
  p3.addAssign(dot(p3, p3.yxz.add(33.33)));
  return fract(p3.xxy.add(p3.yxx).mul(p3.zyx));
}).setLayout({ name: 'h33', type: 'vec3', inputs: [{ name: 'q', type: 'vec3' }] });

const vnoise = Fn(([x]) => {
  const i = floor(x);
  const f = fract(x);
  const u = f.mul(f).mul(f.mul(-2.0).add(3.0));
  const a = hash13(i);
  const b = hash13(i.add(vec3(1, 0, 0)));
  const c = hash13(i.add(vec3(0, 1, 0)));
  const d = hash13(i.add(vec3(1, 1, 0)));
  const e = hash13(i.add(vec3(0, 0, 1)));
  const g = hash13(i.add(vec3(1, 0, 1)));
  const h = hash13(i.add(vec3(0, 1, 1)));
  const k = hash13(i.add(vec3(1, 1, 1)));
  const z0 = mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  const z1 = mix(mix(e, g, u.x), mix(h, k, u.x), u.y);
  return mix(z0, z1, u.z).mul(2.0).sub(1.0);
}).setLayout({ name: 'vn', type: 'float', inputs: [{ name: 'x', type: 'vec3' }] });

let seed = 9;
const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
const vn2 = (x, y) => {
  const h = (i, j) => { const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453; return s - Math.floor(s); };
  const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const a = h(ix, iy), b = h(ix + 1, iy), c = h(ix, iy + 1), d = h(ix + 1, iy + 1);
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
};

////////////////////////////////////////////////////////////////
//// SPACE
////////////////////////////////////////////////////////////////

const dustLayer = (uv, k, dens, rad, drift, s) => {
  const q = uv.mul(k).add(vec2(uTime.mul(drift), uTime.mul(drift * -0.6)));
  const c = floor(q);
  const h = hash33(vec3(c, s));
  const f = fract(q).sub(0.5).sub(h.xy.sub(0.5).mul(0.8));
  const d = length(f);
  const on = step(h.z, dens);
  const tw = sin(uTime.mul(h.x.mul(1.5).add(0.3)).add(h.y.mul(30.0))).mul(0.35).add(0.65);
  return smoothstep(rad, 0.0, d).mul(on).mul(tw).mul(h.x.mul(0.7).add(0.3));
};

const bokehLayer = (uv, k, dens, rad, drift, s) => {
  const q = uv.mul(k).add(vec2(uTime.mul(drift), uTime.mul(drift * 0.35)));
  const c = floor(q);
  const h = hash33(vec3(c, s));
  const wob = vec2(sin(uTime.mul(0.11).add(h.x.mul(40.0))), sin(uTime.mul(0.09).add(h.y.mul(40.0)))).mul(0.12);
  const f = fract(q).sub(0.5).sub(h.xy.sub(0.5).mul(0.5)).sub(wob);
  const d = length(f);
  const r = rad.mul(h.z.mul(0.5).add(0.6));
  const disc = smoothstep(r, r.mul(0.82), d);
  const rim = smoothstep(r.mul(0.2), 0.0, abs(d.sub(r.mul(0.86)))).mul(0.5);
  const on = step(fract(h.x.mul(13.7).add(h.y.mul(7.1))), dens);
  const life = sin(uTime.mul(h.y.mul(0.2).add(0.06)).add(h.z.mul(20.0))).mul(0.5).add(0.5);
  return disc.mul(0.7).add(rim).mul(on).mul(life.mul(life));
};

const fbm3 = Fn(([x]) => {
  const v = float(0).toVar();
  const a = float(0.5).toVar();
  const q = vec3(x).toVar();
  Loop(4, () => {
    v.addAssign(vnoise(q).mul(a));
    q.assign(q.mul(2.03).add(vec3(1.7, 9.2, 3.1)));
    a.mulAssign(0.5);
  });
  return v;
}).setLayout({ name: 'fbm3', type: 'float', inputs: [{ name: 'x', type: 'vec3' }] });

const starCells = (d, k, dens, gain, sd) => {
  const q = d.mul(k);
  const c = floor(q);
  const h = hash33(c.add(sd));
  const f = fract(q).sub(0.5).sub(h.sub(0.5).mul(0.7));
  const on = step(h.z, dens);
  const tw = sin(uTime.mul(h.x.mul(2.5).add(0.6)).add(h.y.mul(40.0))).mul(0.3).add(0.7);
  return exp(dot(f, f).mul(-110.0)).mul(on).mul(pow(h.x, 3.0).mul(gain).add(0.35)).mul(tw);
};

const bubbles = (uv) => {
  const o = uEnvOff;
  return vec3(0.55, 0.65, 1.0).mul(bokehLayer(uv.sub(o.mul(0.9)), 4.5, 0.22, float(0.09), 0.006, 4.0).mul(0.035)
    .add(bokehLayer(uv.sub(o.mul(1.6)), 2.6, 0.18, float(0.12), 0.004, 5.0).mul(0.025))
    .add(bokehLayer(uv.sub(o.mul(2.6)), 1.6, 0.15, float(0.14), 0.003, 6.0).mul(0.018)));
};

const space = Fn(([uv, d]) => {
  const col = mix(vec3(0.005, 0.006, 0.016), vec3(0.016, 0.018, 0.042), smoothstep(-0.8, 0.6, d.y)).toVar();
  const n1 = fbm3(d.mul(1.7).add(vec3(2.0, 7.0, uTime.mul(0.004))));
  const n2 = fbm3(d.mul(4.0).add(vec3(n1, 3.0, 9.0)));
  const neb = smoothstep(-0.05, 0.55, n1.add(n2.mul(0.35)));
  col.addAssign(mix(vec3(0.03, 0.02, 0.07), vec3(0.05, 0.035, 0.1), smoothstep(0.0, 0.5, n2)).mul(neb));
  col.addAssign(vec3(0.012, 0.02, 0.045).mul(smoothstep(-0.2, 0.4, n2)));
  col.addAssign(bubbles(uv));
  col.addAssign(vec3(0.6, 0.68, 0.9).mul(starCells(d, 120.0, 0.12, 2.5, 1.0).mul(0.45).add(starCells(d, 260.0, 0.16, 1.5, 4.0).mul(0.25)).add(starCells(d, 50.0, 0.03, 5.0, 7.0).mul(0.8))));
  return col;
});

const shellParticles = Fn(([ro, rd, tHit, tm, gain]) => {
  const acc = vec3(0).toVar();
  const b = dot(ro, rd);
  for (let k = 0; k < 6; k++) {
    const R = 1.3 + k * 0.5;
    const h = b.mul(b).sub(dot(ro, ro).sub(R * R));
    If(h.greaterThan(0.0), () => {
      const sq = h.sqrt();
      for (const sgn of [-1, 1]) {
        const t = b.negate().add(sq.mul(sgn));
        If(t.greaterThan(0.0).and(t.lessThan(tHit)), () => {
          const p = ro.add(rd.mul(t));
          const a = tm.mul(0.025 + k * 0.006).mul(k % 2 ? 1 : -1);
          const pr = vec3(p.x.mul(a.cos()).sub(p.z.mul(a.sin())), p.y.add(sin(tm.mul(0.11).add(k)).mul(0.08)), p.x.mul(a.sin()).add(p.z.mul(a.cos())));
          const q = pr.mul(5.5);
          const c = floor(q);
          const hh = hash33(c.add(float(k * 17 + 3)));
          const f = fract(q).sub(0.5).sub(hh.sub(0.5).mul(0.6));
          const d2 = dot(f, f);
          const on = step(hh.z, 0.03);
          const tw = sin(tm.mul(hh.x.mul(1.7).add(0.4)).add(hh.y.mul(30.0))).mul(0.35).add(0.65);
          acc.addAssign(vec3(0.7, 0.8, 1.0).mul(exp(d2.mul(-5000.0))).mul(on).mul(pow(hh.x, 3.0).mul(1.4).add(0.1)).mul(tw));
          const bub = step(hh.z, 0.012).mul(step(0.5, hh.y));
          const br = hh.x.mul(0.12).add(0.1);
          const disc = smoothstep(br, br.mul(0.8), d2.sqrt()).mul(0.6).add(smoothstep(br.mul(0.18), 0.0, abs(d2.sqrt().sub(br.mul(0.88)))).mul(0.5));
        });
      }
    });
  }
  return acc.mul(gain);
}).setLayout({ name: 'shellParticles', type: 'vec3', inputs: [{ name: 'ro', type: 'vec3' }, { name: 'rd', type: 'vec3' }, { name: 'tHit', type: 'float' }, { name: 'tm', type: 'float' }, { name: 'gain', type: 'float' }] });


const starLayer = (d, k, dens, gain, sd) => {
  const q = d.mul(k);
  const c = floor(q);
  const h = hash33(c.add(sd));
  const f = fract(q).sub(0.5).sub(h.sub(0.5).mul(0.7));
  const d2 = dot(f, f);
  const on = step(h.z, dens);
  const tw = sin(uTime.mul(h.x.mul(2.0).add(0.4)).add(h.y.mul(40.0))).mul(0.35).add(0.65);
  return exp(d2.mul(-260.0)).mul(on).mul(pow(h.x, 4.0).mul(gain).add(0.25)).mul(tw);
};


const envBands = (d, tm) => {
  const az = atan(d.z, d.x).add(tm.mul(0.012));
  const e = d.y;
  const band = (ec, w, azc, azw, col, sd) => {
    const v = exp(e.sub(ec).div(w).mul(e.sub(ec).div(w)).negate());
    const da = abs(fract(az.sub(azc).div(6.2831853).add(0.5)).sub(0.5)).mul(6.2831853);
    const am = smoothstep(azw, azw * 0.25, da);
    const st = vnoise(vec3(d.x.mul(2.2), d.y.mul(34.0), d.z.mul(2.2).add(sd.mul(7.0)))).mul(0.5).add(0.5);
    const st2 = vnoise(vec3(d.x.mul(0.9), d.y.mul(11.0).add(sd), d.z.mul(0.9))).mul(0.5).add(0.5);
    return col.mul(v).mul(am).mul(st.mul(st).mul(0.75).add(st2.mul(0.35)).add(0.1));
  };
  const cols = [vec3(0.55, 0.7, 1.0), vec3(0.5, 0.36, 0.95), vec3(0.35, 0.5, 0.95), vec3(0.62, 0.66, 0.98)];
  let sum = vec3(0.0);
  for (let k = 0; k < 9; k++) {
    const ec = -0.92 + k * 0.23;
    const r1 = Math.abs(Math.sin(k * 12.9898) * 43758.5453) % 1, r2 = Math.abs(Math.sin(k * 78.233) * 12345.678) % 1;
    sum = sum.add(band(ec, 0.05 + r1 * 0.05, r2 * 6.28, 0.7 + r1 * 0.9, cols[k % 4].mul(0.05 + r2 * r2 * 0.32), float(k + 1)));
  }
  return sum;
};

const screenNdc = () => vec2(screenUV.x.mul(2.0).sub(1.0).mul(uRes.x.div(uRes.y)), screenUV.y.mul(-2.0).add(1.0));

////////////////////////////////////////////////////////////////
//// SURFACES
////////////////////////////////////////////////////////////////

const triUV = Fn(([q, n]) => {
  const a = abs(n);
  const fx = a.x.greaterThanEqual(a.y).and(a.x.greaterThanEqual(a.z));
  const fy = a.y.greaterThan(a.z);
  const sx = n.x.sign(), sy = n.y.sign(), sz = n.z.sign();
  return select(fx, vec3(q.z.mul(sx), q.y, sx.add(1.0)), select(fy, vec3(q.x, q.z.mul(sy), sy.add(3.0)), vec3(q.x.mul(sz), q.y, sz.add(5.0))));
}).setLayout({ name: 'triUV', type: 'vec3', inputs: [{ name: 'q', type: 'vec3' }, { name: 'n', type: 'vec3' }] });

const frameTex = Fn(([uv, sd]) => {
  const cl = vnoise(vec3(uv.mul(1.6), sd.mul(2.3))).mul(0.5).add(0.5).toVar();
  cl.assign(cl.add(vnoise(vec3(uv.mul(4.1), sd.add(7.0))).mul(0.18)));
  const b1 = hash13(vec3(floor(uv.mul(7.0)), sd.add(11.0)));
  const b2 = hash13(vec3(floor(uv.mul(15.0)), sd.add(12.0)));
  const b3 = hash13(vec3(floor(uv.mul(31.0)), sd.add(13.0)));
  const b4 = hash13(vec3(floor(uv.mul(58.0)), sd.add(14.0)));
  const fr = step(cl.mul(-1.2).add(1.45), b1).mul(0.55)
    .add(step(cl.mul(-1.1).add(1.38), b2).mul(0.4))
    .add(step(cl.mul(-1.0).add(1.3), b3).mul(0.3))
    .add(step(cl.mul(-0.9).add(1.22), b4).mul(0.2));
  const streak = vnoise(vec3(uv.x.mul(110.0), uv.y.mul(2.0), sd)).mul(0.35).add(vnoise(vec3(uv.x.mul(30.0), uv.y.mul(1.2), sd.add(4.0))).mul(0.15)).add(0.5);
  const blue = step(0.96, hash13(vec3(floor(uv.mul(vec2(20.0, 26.0))), sd.add(40.0)))).mul(step(cl, 0.55));
  return vec3(clamp(fr, 0.0, 1.0), streak, blue);
}).setLayout({ name: 'frameTex', type: 'vec3', inputs: [{ name: 'uv', type: 'vec2' }, { name: 'sd', type: 'float' }] });

const frameAlbedo = (ft) => mix(vec3(0.12, 0.135, 0.165), vec3(0.17, 0.19, 0.23), ft.x).mul(ft.y.mul(0.22).add(0.89)).add(vec3(0.0, 0.01, 0.04).mul(ft.z));

const glassTex = Fn(([uv, sd]) => {
  const g = uv.mul(24.0);
  const c = floor(g);
  const f = fract(g);
  const h = hash13(vec3(c, sd));
  const lh = smoothstep(0.14, 0.05, abs(f.y.sub(0.5))).mul(step(0.62, h));
  const lv = smoothstep(0.14, 0.05, abs(f.x.sub(0.5))).mul(step(h, 0.26));
  const maze = max(lh, lv).mul(step(0.35, hash13(vec3(floor(uv.mul(6.0)), sd.add(3.0)))));
  const blk = hash13(vec3(floor(uv.mul(9.0)), sd.add(5.0)));
  const smooth = vnoise(vec3(uv.mul(3.0), sd)).mul(0.6).add(vnoise(vec3(uv.mul(8.0), sd.add(2.0))).mul(0.4)).mul(0.5).add(0.5);
  return vec2(smooth.mul(0.7).add(blk.mul(0.3)), maze);
}).setLayout({ name: 'glassTex', type: 'vec2', inputs: [{ name: 'uv', type: 'vec2' }, { name: 'sd', type: 'float' }] });

////////////////////////////////////////////////////////////////
//// LANTERN GLOW
////////////////////////////////////////////////////////////////

const lantern = Fn(([p, rd, frost]) => {
  const along = dot(p, rd);
  const off = p.sub(rd.mul(along));
  const d2 = dot(off, off);
  const behind = smoothstep(0.25, -0.35, along);
  const core = exp(d2.mul(-4.5)).mul(2.6).add(exp(d2.mul(-1.3)).mul(0.42));
  return mix(vec3(0.35, 0.5, 0.85), vec3(0.85, 0.92, 1.0), smoothstep(0.2, 1.2, core)).mul(core).mul(behind.mul(0.75).add(0.25)).mul(frost.mul(0.8).add(0.6));
}).setLayout({ name: 'lantern', type: 'vec3', inputs: [{ name: 'p', type: 'vec3' }, { name: 'rd', type: 'vec3' }, { name: 'frost', type: 'float' }] });

const uLDisp = uniform(0.18);
const uLIrid = uniform(0.8);
const lanternDisp = (p, rd, n, frost) => {
  const o = n.mul(uLDisp);
  return vec3(
    lantern(p, normalize(rd.sub(o)), frost).x,
    lantern(p, rd, frost).y,
    lantern(p, normalize(rd.add(o)), frost).z
  );
};
const thinFilm = (cosT, thick) => mix(vec3(1.0), cos(vec3(0.0, 2.1, 4.2).add(cosT.mul(7.0).add(thick.mul(6.0)))).mul(0.5).add(0.5).mul(1.5), uLIrid);

////////////////////////////////////////////////////////////////
//// RENDERER
////////////////////////////////////////////////////////////////

const renderer = new THREE.WebGPURenderer({ antialias: false, forceWebGL: QS.has('webgl') });
const PR_MAX = Math.min(window.devicePixelRatio, LOWQ ? 1.25 : 1.5) * (parseFloat(QS.get('scale')) || 1);
const PR_MIN = LOWQ ? 0.5 : 0.65;
let pr = PR_MAX;
renderer.setPixelRatio(pr);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.appendChild(renderer.domElement);
await renderer.init();

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);

////////////////////////////////////////////////////////////////
//// MESH : STUDIO
////////////////////////////////////////////////////////////////

const meshScene = new THREE.Scene();
meshScene.backgroundNode = Fn(() => {
  const ndc = screenNdc();
  const rdW = normalize(vec3(ndc.x.mul(uTan), ndc.y.mul(uTan), -1.0));
  const d = vec3(dot(rdW, uR0), dot(rdW, uR1), dot(rdW, uR2));
  return vec4(space(ndc, d).add(envBands(d, uTime)), 1.0);
})();

const envScene = new THREE.Scene();
const dome = new THREE.Mesh(new THREE.SphereGeometry(20, 32, 16), new THREE.MeshBasicNodeMaterial({ side: THREE.BackSide }));
dome.material.colorNode = mix(vec3(0.004, 0.005, 0.012), vec3(0.025, 0.03, 0.06), smoothstep(-0.6, 0.8, normalize(positionWorld).y));
envScene.add(dome);
const softbox = (w, h, pos, c) => {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicNodeMaterial({ color: c, side: THREE.DoubleSide }));
  m.position.copy(pos);
  m.lookAt(0, 0, 0);
  envScene.add(m);
};
softbox(9, 5, new THREE.Vector3(7, 8, 5), new THREE.Color(2.2, 2.5, 3.0));
softbox(3, 10, new THREE.Vector3(-8, 2, -5), new THREE.Color(0.7, 0.5, 1.3));
softbox(12, 2, new THREE.Vector3(0, -7, 6), new THREE.Color(0.12, 0.13, 0.22));
const pmrem = new THREE.PMREMGenerator(renderer);
meshScene.environment = pmrem.fromScene(envScene, 0.03).texture;

const key = new THREE.DirectionalLight(0xdfe8ff, 3.0);
key.position.copy(KEY).multiplyScalar(6);
key.castShadow = true;
key.shadow.mapSize.setScalar(LOWQ ? 1024 : 2048);
key.shadow.camera.left = key.shadow.camera.bottom = -1.9;
key.shadow.camera.right = key.shadow.camera.top = 1.9;
key.shadow.camera.near = 2; key.shadow.camera.far = 10;
key.shadow.bias = -0.0004;
key.shadow.normalBias = 0.01;
meshScene.add(key);
meshScene.add(new THREE.HemisphereLight(0x6070a8, 0x120a1c, 0.3));

////////////////////////////////////////////////////////////////
//// MESH : MATERIALS
////////////////////////////////////////////////////////////////

const frameMat = new THREE.MeshPhysicalNodeMaterial({ clearcoat: 0.2, clearcoatRoughness: 0.35 });
const greebleMat = frameMat;

const glassMat = new THREE.MeshPhysicalNodeMaterial({ metalness: 0.0, roughness: 0.42, clearcoat: 1.0, clearcoatRoughness: 0.12, ior: 1.5, thickness: 0.6, iridescence: 0.85, iridescenceIOR: 1.35, iridescenceThicknessRange: [180, 520] });

const coreMat = new THREE.MeshStandardNodeMaterial({ color: 0x020308, roughness: 0.9, metalness: 0.0 });

////////////////////////////////////////////////////////////////
//// MESH : CUBE
////////////////////////////////////////////////////////////////

const B = 0.14;
const rbox = (w, h, d, x, y, z, r = 0.007) => new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w * 0.45, h * 0.45, d * 0.45)).translate(x, y, z);
const ring = (o, i, z0, z1, out, r) => {
  const zc = (z0 + z1) / 2, dz = z1 - z0, t = o - i, m = (o + i) / 2;
  out.push(rbox(2 * o, t, dz, 0, m, zc, r), rbox(2 * o, t, dz, 0, -m, zc, r));
  out.push(rbox(t, 2 * i, dz, m, 0, zc, r), rbox(t, 2 * i, dz, -m, 0, zc, r));
};
const FACES = [
  new THREE.Euler(0, 0, 0), new THREE.Euler(0, Math.PI, 0),
  new THREE.Euler(0, Math.PI / 2, 0), new THREE.Euler(0, -Math.PI / 2, 0),
  new THREE.Euler(-Math.PI / 2, 0, 0), new THREE.Euler(Math.PI / 2, 0, 0)
];
const onFaces = (parts) => {
  const all = [];
  for (const e of FACES) {
    const m = new THREE.Matrix4().makeRotationFromEuler(e);
    for (const g of parts) all.push(g.clone().applyMatrix4(m));
  }
  return mergeGeometries(all);
};

const beams = [];
const c = 1 - B / 2;
for (const s1 of [-1, 1]) for (const s2 of [-1, 1]) {
  beams.push(rbox(2, B, B, 0, s1 * c, s2 * c, 0.012));
  beams.push(rbox(B, 2 - 2 * B, B, s1 * c, 0, s2 * c, 0.012));
  beams.push(rbox(B, B, 2 - 2 * B, s1 * c, s2 * c, 0, 0.012));
}
const frameFace = [];
ring(0.86, 0.76, 0.70, 0.975, frameFace);
ring(0.76, 0.68, 0.70, 0.95, frameFace);
ring(0.68, 0.60, 0.70, 0.885, frameFace);
const glassFace = [];
glassFace.push(rbox(1.12, 1.12, 0.06, 0, 0, 0.73, 0.006));
ring(0.56, 0.47, 0.70, 0.83, glassFace, 0.01);
ring(0.47, 0.33, 0.70, 0.795, glassFace, 0.01);

const cube = new THREE.Group();
const addMesh = (geo, mat) => {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = m.receiveShadow = true;
  cube.add(m);
  return m;
};
addMesh(mergeGeometries([...beams, onFaces(frameFace)]), frameMat);
addMesh(onFaces(glassFace), glassMat);
addMesh(new THREE.BoxGeometry(1.4, 1.4, 1.4), coreMat);
meshScene.add(cube);

////////////////////////////////////////////////////////////////
//// MESH : GREEBLES
////////////////////////////////////////////////////////////////

const BANDS = [
  { lo: 0.864, hi: 0.996, z: 1.0, n: 0.75 },
  { lo: 0.764, hi: 0.856, z: 0.975, n: 0.5 },
  { lo: 0.684, hi: 0.756, z: 0.95, n: 0.35 },
  { lo: 0.604, hi: 0.676, z: 0.885, n: 0.2 }
];
const G = 1 / 72;
const items = [];
for (let f = 0; f < 6; f++) {
  const fm = new THREE.Matrix4().makeRotationFromEuler(FACES[f]);
  for (const band of BANDS) {
    const want = Math.round(GREEBLES * band.n);
    let tries = 0, got = 0;
    while (got < want && tries++ < want * 30) {
      const x = Math.round((rnd() * 2 - 1) / G) * G, y = Math.round((rnd() * 2 - 1) / G) * G;
      const w = (1 + Math.floor(rnd() * rnd() * 6)) * G, h = (1 + Math.floor(rnd() * rnd() * 6)) * G;
      const ax = Math.max(Math.abs(x) + w / 2, Math.abs(y) + h / 2), an = Math.max(Math.abs(x) - w / 2, Math.abs(y) - h / 2);
      if (ax > band.hi || an < band.lo) continue;
      const cl = vn2(x * 3.1 + f * 7.3, y * 3.1 + band.z * 11.0);
      if (rnd() > cl * cl * 1.3 + 0.04) continue;
      const d = 0.003 + rnd() * rnd() * 0.012;
      const r = rnd();
      const col = r < 0.035 ? [0.1, 0.22, 0.7] : r < 0.17 ? [0.5, 0.55, 0.66] : [0.17, 0.2, 0.27];
      items.push({ m: new THREE.Matrix4().compose(new THREE.Vector3(x, y, band.z + d / 2), new THREE.Quaternion(), new THREE.Vector3(w * 0.92, h * 0.92, d)).premultiply(fm), col });
      got++;
    }
  }
}
const greebles = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), greebleMat, items.length);
const _c = new THREE.Color();
items.forEach((it, i) => { greebles.setMatrixAt(i, it.m); });
greebles.castShadow = greebles.receiveShadow = true;
cube.add(greebles);

////////////////////////////////////////////////////////////////
//// RAY : SDF
////////////////////////////////////////////////////////////////

const toObj = (v) => vec3(dot(v, uR0), dot(v, uR1), dot(v, uR2));

const sdBox = Fn(([p, b]) => {
  const q = abs(p).sub(b);
  return length(max(q, 0.0)).add(min(max(q.x, max(q.y, q.z)), 0.0));
}).setLayout({ name: 'sdBox', type: 'float', inputs: [{ name: 'p', type: 'vec3' }, { name: 'b', type: 'vec3' }] });

const faceFrame = Fn(([q]) => {
  const a = abs(q);
  const fx = a.x.greaterThanEqual(a.y).and(a.x.greaterThanEqual(a.z));
  const fy = a.y.greaterThan(a.z);
  return select(fx, vec3(q.y, q.z, a.x), select(fy, vec3(q.z, q.x, a.y), vec3(q.x, q.y, a.z)));
}).setLayout({ name: 'faceFrame', type: 'vec3', inputs: [{ name: 'q', type: 'vec3' }] });

const faceSeed = Fn(([q]) => {
  const a = abs(q);
  const fx = a.x.greaterThanEqual(a.y).and(a.x.greaterThanEqual(a.z));
  const fy = a.y.greaterThan(a.z);
  return select(fx, q.x.sign().add(1.0), select(fy, q.y.sign().add(3.0), q.z.sign().add(5.0)));
}).setLayout({ name: 'faceSeed', type: 'float', inputs: [{ name: 'q', type: 'vec3' }] });

const greebleLayer = (uv, sd, k, off, thr, base, amp, cl) => {
  const q = uv.mul(k).add(off);
  const cc = floor(q);
  const f = fract(q);
  const h = hash33(vec3(cc, sd));
  const on = step(cl.mul(-0.35).add(thr), h.x);
  const e = min(min(f.x, f.x.oneMinus()), min(f.y, f.y.oneMinus()));
  const bev = smoothstep(0.02, 0.16, e);
  return vec2(on.mul(bev).mul(h.y.mul(h.y).mul(amp).add(base)), on.mul(h.z));
};

const greeble = Fn(([uv, sd]) => {
  const cl = vnoise(vec3(uv.mul(2.4), sd.mul(3.1)));
  const g1 = greebleLayer(uv, sd.add(1.0), vec2(18.0, 26.0), vec2(0.0), 0.86, 0.0015, 0.004, cl);
  const g2 = greebleLayer(uv, sd.add(9.0), vec2(48.0, 36.0), vec2(0.37, 0.21), 0.9, 0.001, 0.002, cl);
  return select(g1.x.greaterThan(g2.x), g1, g2);
}).setLayout({ name: 'greeble', type: 'vec2', inputs: [{ name: 'uv', type: 'vec2' }, { name: 'sd', type: 'float' }] });

const frostTex = Fn(([q]) => {
  const f = faceFrame(q);
  const sd = faceSeed(q);
  const cell = hash13(vec3(floor(f.xy.mul(vec2(22.0, 30.0))), sd));
  const big = hash13(vec3(floor(f.xy.mul(vec2(7.0, 9.0)).add(0.3)), sd.add(5.0)));
  const smooth = vnoise(q.mul(4.0)).mul(0.6).add(vnoise(q.mul(9.0)).mul(0.4)).mul(0.5).add(0.5);
  return smooth.mul(0.55).add(cell.mul(0.25)).add(big.mul(0.2));
}).setLayout({ name: 'frostTex', type: 'float', inputs: [{ name: 'q', type: 'vec3' }] });

const viewDirW = normalize(positionWorld.sub(cameraPosition));
const setFrame = (mat, uvw, spill) => {
  const ft = frameTex(uvw.xy, uvw.z);
  mat.colorNode = frameAlbedo(ft);
  mat.roughnessNode = mix(float(0.27), float(0.4), ft.x).add(ft.y.mul(0.06));
  mat.metalnessNode = float(0.92);
  mat.emissiveNode = lantern(positionWorld, viewDirW, float(0.6)).mul(spill).mul(ft.x.mul(0.6).add(0.4));
};
{
  const ff = faceFrame(positionLocal);
  const m = max(abs(ff.x), abs(ff.y));
  setFrame(frameMat, triUV(positionLocal, normalLocal), smoothstep(0.8, 0.58, m).mul(0.22));
  const gF = faceFrame(positionLocal);
  const gt = glassTex(gF.xy.mul(0.9), faceSeed(positionLocal));
  const fr = gt.x;
  const ring = smoothstep(0.012, 0.0, abs(max(abs(gF.x), abs(gF.y)).sub(0.47))).add(smoothstep(0.012, 0.0, abs(max(abs(gF.x), abs(gF.y)).sub(0.33))));
  glassMat.colorNode = mix(vec3(0.06, 0.075, 0.11), vec3(0.2, 0.24, 0.32), fr);
  glassMat.emissiveNode = lanternDisp(positionWorld, viewDirW, normalWorld, fr).mul(float(1.0).sub(gt.y.mul(0.45))).add(vec3(0.6, 0.7, 0.9).mul(gt.y.add(ring).mul(0.12)));
}

////////////////////////////////////////////////////////////////
//// TESSERACT : 4D
////////////////////////////////////////////////////////////////

const WD = 3.0, TSC = 0.62;
const T_MOVE = 4.2, T_HOLD = 1.8, T_STEP = T_MOVE + T_HOLD;
const PLANES = [0, 1, 2, 0, 2, 1];
const V4 = [];
for (let i = 0; i < 16; i++) V4.push(new THREE.Vector4(i & 1 ? 1 : -1, i & 2 ? 1 : -1, i & 4 ? 1 : -1, i & 8 ? 1 : -1));
const EDGES = [];
for (let i = 0; i < 16; i++) for (let k = 0; k < 4; k++) { const j = i ^ (1 << k); if (j > i) EDGES.push([i, j]); }
const QUADS = [];
for (let a = 0; a < 4; a++) for (let b = a + 1; b < 4; b++) {
  const rest = [0, 1, 2, 3].filter((k) => k !== a && k !== b);
  for (let r = 0; r < 4; r++) {
    let base = 0;
    if (r & 1) base |= 1 << rest[0];
    if (r & 2) base |= 1 << rest[1];
    QUADS.push([base, base | (1 << a), base | (1 << a) | (1 << b), base | (1 << b)]);
  }
}
const planeRot = (axis, ang) => {
  const m = new THREE.Matrix4(), c = Math.cos(ang), s = Math.sin(ang), e = m.elements;
  e[axis * 4 + axis] = c; e[15] = c;
  e[3 * 4 + axis] = -s; e[axis * 4 + 3] = s;
  return m;
};
const smoother = (x) => { x = THREE.MathUtils.clamp(x, 0, 1); return x * x * x * (x * (x * 6 - 15) + 10); };
const R4 = new THREE.Matrix4();
const tessRot = (tt, skew = true) => {
  const k = Math.floor(tt / T_STEP), f = smoother((tt - k * T_STEP) / T_MOVE);
  R4.identity();
  for (let i = 0; i < k; i++) R4.premultiply(planeRot(PLANES[i % PLANES.length], Math.PI / 2));
  R4.premultiply(planeRot(PLANES[k % PLANES.length], Math.PI / 2 * f));
  if (skew) R4.premultiply(planeRot(1, 0.32));
};
const P3 = V4.map(() => new THREE.Vector3()), PK = new Float32Array(16);
const _v4 = new THREE.Vector4();
const tessProject = (tt) => {
  tessRot(tt);
  for (let i = 0; i < 16; i++) {
    _v4.copy(V4[i]).applyMatrix4(R4);
    const k = WD / (WD - _v4.w);
    PK[i] = k;
    P3[i].set(_v4.x, _v4.y, _v4.z).multiplyScalar(k * TSC);
  }
};
const BEAM_W = 0.052;
const beamFrames = EDGES.map(() => ({ c: new THREE.Vector3(), a: new THREE.Vector3(), u: new THREE.Vector3(), v: new THREE.Vector3(), hl: 0, th: 0 }));
const quadFrames = QUADS.map(() => ({ n: new THREE.Vector3(), d: 0, e: [0, 1, 2, 3].map(() => new THREE.Vector4()), pts: [0, 1, 2, 3].map(() => new THREE.Vector3()), cen: new THREE.Vector3() }));
const _t = new THREE.Vector3(), _t2 = new THREE.Vector3();
const tessFrames = () => {
  EDGES.forEach(([i, j], n) => {
    const B = beamFrames[n];
    B.c.addVectors(P3[i], P3[j]).multiplyScalar(0.5);
    B.a.subVectors(P3[j], P3[i]);
    const len = B.a.length();
    B.a.divideScalar(len);
    B.th = BEAM_W * 0.5 * (PK[i] + PK[j]);
    B.hl = len / 2 + B.th;
    _t.copy(B.c).negate();
    _t.addScaledVector(B.a, -_t.dot(B.a));
    if (_t.lengthSq() < 1e-6) _t.set(B.a.y, -B.a.x, 0.3);
    B.u.copy(_t).normalize();
    B.v.crossVectors(B.a, B.u);
  });
  QUADS.forEach((q, n) => {
    const Q = quadFrames[n];
    Q.cen.set(0, 0, 0);
    q.forEach((i) => Q.cen.add(P3[i]));
    Q.cen.multiplyScalar(0.25);
    q.forEach((i, k) => Q.pts[k].copy(P3[i]).sub(Q.cen).multiplyScalar(0.84).add(Q.cen));
    _t.subVectors(Q.pts[1], Q.pts[0]); _t2.subVectors(Q.pts[3], Q.pts[0]);
    Q.n.crossVectors(_t, _t2).normalize();
    Q.d = Q.n.dot(Q.pts[0]);
    for (let k = 0; k < 4; k++) {
      const a = Q.pts[k], b = Q.pts[(k + 1) % 4];
      _t.subVectors(b, a).cross(Q.n).normalize();
      _t2.subVectors(Q.cen, a);
      if (_t.dot(_t2) > 0) _t.negate();
      Q.e[k].set(_t.x, _t.y, _t.z, _t.dot(a));
    }
  });
};

////////////////////////////////////////////////////////////////
//// TESSERACT : MESH
////////////////////////////////////////////////////////////////

const tess = new THREE.Group();
tess.visible = false;
meshScene.add(tess);

const dimAttr = new THREE.InstancedBufferAttribute(new Float32Array(EDGES.length * 3), 3);
const beamMat = new THREE.MeshPhysicalNodeMaterial({ clearcoat: 0.2, clearcoatRoughness: 0.35 });
{
  const lp = positionGeometry.mul(instancedBufferAttribute(dimAttr));
  setFrame(beamMat, triUV(lp.mul(1.4), normalGeometry), float(0.0));
}
const beamMesh = new THREE.InstancedMesh(new RoundedBoxGeometry(1, 1, 1, 2, 0.06), beamMat, EDGES.length);
beamMesh.castShadow = beamMesh.receiveShadow = true;
beamMesh.frustumCulled = false;
tess.add(beamMesh);

const tGlassMat = new THREE.MeshPhysicalNodeMaterial({ transparent: true, depthWrite: false, side: THREE.DoubleSide, roughness: 0.45, metalness: 0.0, clearcoat: 1.0, clearcoatRoughness: 0.15, ior: 1.5, thickness: 0.4, iridescence: 0.9, iridescenceIOR: 1.35, iridescenceThicknessRange: [180, 520] });
{
  const gt = glassTex(uv().mul(1.6), float(3.0));
  const qm = max(abs(uv().x.sub(0.5)), abs(uv().y.sub(0.5))).mul(2.0);
  const ring = smoothstep(0.02, 0.0, abs(qm.sub(0.78))).add(smoothstep(0.02, 0.0, abs(qm.sub(0.54)))).add(smoothstep(0.9, 1.0, qm));
  tGlassMat.colorNode = mix(vec3(0.03, 0.035, 0.05), vec3(0.09, 0.11, 0.15), gt.x);
  tGlassMat.emissiveNode = lanternDisp(positionWorld, viewDirW, normalWorld, gt.x).mul(0.45).mul(float(1.0).sub(gt.y.mul(0.45))).add(vec3(0.6, 0.7, 0.9).mul(gt.y.mul(0.12).add(ring.mul(0.3))));
  tGlassMat.opacityNode = float(0.28).add(ring.mul(0.3)).add(gt.x.mul(0.1));
}
const quadMeshes = QUADS.map(() => {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(12), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), 2));
  g.setIndex([0, 1, 2, 0, 2, 3]);
  const m = new THREE.Mesh(g, tGlassMat);
  m.frustumCulled = false;
  m.receiveShadow = true;
  tess.add(m);
  return m;
});
const coreMesh = new THREE.Mesh(new THREE.SphereGeometry(0.12, 32, 16), new THREE.MeshBasicNodeMaterial({ color: new THREE.Color(4.0, 4.4, 5.2) }));
tess.add(coreMesh);

const _m4 = new THREE.Matrix4(), _cw = new THREE.Vector3();
const updateTessMesh = () => {
  beamFrames.forEach((B, n) => {
    _m4.makeBasis(B.u, B.v, B.a).scale(_t.set(2 * B.th, 2 * B.th, 2 * B.hl)).setPosition(B.c);
    beamMesh.setMatrixAt(n, _m4);
    dimAttr.setXYZ(n, 2 * B.th, 2 * B.th, 2 * B.hl);
  });
  beamMesh.instanceMatrix.needsUpdate = true;
  dimAttr.needsUpdate = true;
  const camL = tess.worldToLocal(_cw.copy(camera.position));
  const order = quadFrames.map((Q, n) => [Q.cen.distanceTo(camL), n]).sort((a, b) => b[0] - a[0]);
  order.forEach(([, n], r) => {
    const Q = quadFrames[n], g = quadMeshes[n].geometry;
    const pa = g.attributes.position, na = g.attributes.normal;
    Q.pts.forEach((pt, k) => { pa.setXYZ(k, pt.x, pt.y, pt.z); na.setXYZ(k, Q.n.x, Q.n.y, Q.n.z); });
    pa.needsUpdate = na.needsUpdate = true;
    quadMeshes[n].renderOrder = r + 10;
  });
};

const STEPS_F = [[0.86, 0.025], [0.76, 0.05], [0.68, 0.115], [0.60, 0.30]];

const carveFace = Fn(([p]) => {
  const c = p.sub(vec3(0, 0, 1));
  const d = float(-1e3).toVar();
  for (const [h, dep] of STEPS_F) d.assign(max(d, sdBox(c, vec3(h, h, dep)).negate()));
  return d;
}).setLayout({ name: 'carveFace', type: 'float', inputs: [{ name: 'p', type: 'vec3' }] });

const glassFaceSd = Fn(([p]) => {
  const c = p.sub(vec3(0, 0, 1));
  const d = sdBox(p.sub(vec3(0, 0, 0.765)), vec3(0.55, 0.55, 0.065)).sub(0.01).toVar();
  d.assign(max(d, sdBox(c, vec3(0.47, 0.47, 0.205)).negate()));
  d.assign(max(d, sdBox(c, vec3(0.33, 0.33, 0.24)).negate()));
  return d;
}).setLayout({ name: 'glassFaceSd', type: 'float', inputs: [{ name: 'p', type: 'vec3' }] });

const glassSd = Fn(([q]) => {
  const a = abs(q);
  return min(min(glassFaceSd(vec3(a.y, a.z, a.x)), glassFaceSd(vec3(a.z, a.x, a.y))), glassFaceSd(a));
}).setLayout({ name: 'glassSd', type: 'float', inputs: [{ name: 'q', type: 'vec3' }] });

const frameSd = Fn(([q]) => {
  const a = abs(q);
  const d = sdBox(q, vec3(0.988)).sub(0.012).toVar();
  d.assign(max(d, carveFace(vec3(a.y, a.z, a.x))));
  d.assign(max(d, carveFace(vec3(a.z, a.x, a.y))));
  d.assign(max(d, carveFace(a)));
  If(d.lessThan(0.04), () => {
    const f = faceFrame(q);
    const m = max(abs(f.x), abs(f.y));
    d.subAssign(greeble(f.xy, faceSeed(q)).x.mul(step(0.602, m)));
  });
  return d;
}).setLayout({ name: 'frameSd', type: 'float', inputs: [{ name: 'q', type: 'vec3' }] });

const mapO = Fn(([q]) => min(frameSd(q), glassSd(q)))
  .setLayout({ name: 'mapO', type: 'float', inputs: [{ name: 'q', type: 'vec3' }] });

const calcNormal = Fn(([p, e]) => {
  const k1 = vec3(1, -1, -1), k2 = vec3(-1, -1, 1), k3 = vec3(-1, 1, -1), k4 = vec3(1, 1, 1);
  return normalize(
    k1.mul(mapO(p.add(k1.mul(e)))).add(k2.mul(mapO(p.add(k2.mul(e)))))
      .add(k3.mul(mapO(p.add(k3.mul(e))))).add(k4.mul(mapO(p.add(k4.mul(e)))))
  );
}).setLayout({ name: 'calcNormal', type: 'vec3', inputs: [{ name: 'p', type: 'vec3' }, { name: 'e', type: 'float' }] });

const calcAO = Fn(([p, n]) => {
  const occ = float(0).toVar();
  const sca = float(1).toVar();
  Loop(5, ({ i }) => {
    const h = float(i).mul(0.04).add(0.01);
    occ.addAssign(h.sub(mapO(p.add(n.mul(h)))).mul(sca));
    sca.mulAssign(0.75);
  });
  return clamp(occ.mul(-3.5).add(1.0), 0.0, 1.0);
}).setLayout({ name: 'calcAO', type: 'float', inputs: [{ name: 'p', type: 'vec3' }, { name: 'n', type: 'vec3' }] });

const softShadow = Fn(([ro, rd]) => {
  const res = float(1).toVar();
  const t = float(0.02).toVar();
  Loop(SH_STEPS, () => {
    const h = mapO(ro.add(rd.mul(t)));
    res.assign(min(res, h.mul(12.0).div(t)));
    t.addAssign(clamp(h, 0.008, 0.1));
    If(res.lessThan(0.002).or(t.greaterThan(2.5)), () => { Break(); });
  });
  return clamp(res, 0.0, 1.0);
}).setLayout({ name: 'softShadow', type: 'float', inputs: [{ name: 'ro', type: 'vec3' }, { name: 'rd', type: 'vec3' }] });

////////////////////////////////////////////////////////////////
//// RAY : SHADING
////////////////////////////////////////////////////////////////

const studio = Fn(([r, bx, rm, gl]) => {
  const col = mix(vec3(0.004, 0.005, 0.012), vec3(0.025, 0.03, 0.06), smoothstep(-0.6, 0.8, r.y)).toVar();
  col.addAssign(vec3(2.2, 2.5, 3.0).mul(pow(max(dot(r, bx), 0.0), gl)));
  col.addAssign(vec3(0.7, 0.5, 1.3).mul(pow(max(dot(r, rm), 0.0), gl.mul(1.6))));
  return col;
}).setLayout({ name: 'studio', type: 'vec3', inputs: [{ name: 'r', type: 'vec3' }, { name: 'bx', type: 'vec3' }, { name: 'rm', type: 'vec3' }, { name: 'gl', type: 'float' }] });

const shadeFrame = (ft, r, bx, rm, dif, nh, edge, ao, sh, spill) => {
  const alb = frameAlbedo(ft);
  const gloss = mix(float(18.0), float(9.0), ft.x);
  const spec = alb.mul(1.3);
  return alb.mul(dif.mul(0.12).add(0.01))
    .add(spec.mul(studio(r, bx, rm, gloss)).mul(sh.mul(0.6).add(0.4)))
    .add(spec.mul(pow(nh, 70.0)).mul(dif).mul(3.5))
    .add(vec3(0.55, 0.65, 0.9).mul(edge).mul(dif.mul(0.35).add(0.015)))
    .mul(ao.mul(0.85).add(0.15))
    .add(spill.mul(ft.x.mul(0.6).add(0.4)));
};

const shadeGlass = (gt, p, rd, r, bx, rm, ndv, dif, nh, edge, m, rings, glowK = float(1.0), milkK = float(1.0)) => {
  const fre = pow(ndv.oneMinus(), 5.0).mul(0.96).add(0.04);
  const milky = mix(vec3(0.06, 0.075, 0.11), vec3(0.2, 0.24, 0.32), gt.x);
  const ring = smoothstep(0.012, 0.0, abs(m.sub(rings.x))).add(smoothstep(0.012, 0.0, abs(m.sub(rings.y))));
  const nn = normalize(r.sub(rd));
  const film = thinFilm(ndv, gt.x);
  return milky.mul(milkK).mul(dif.mul(0.9).add(0.05))
    .add(lanternDisp(p, rd, nn, gt.x).mul(glowK).mul(float(1.0).sub(gt.y.mul(0.45))))
    .add(vec3(0.6, 0.7, 0.9).mul(gt.y.add(ring).mul(0.12)))
    .add(studio(r, bx, rm, float(60.0)).mul(fre.mul(1.6).add(0.03)).mul(film))
    .add(film.mul(pow(nh, 160.0)).mul(dif).mul(2.0))
    .add(vec3(0.6, 0.7, 0.9).mul(edge).mul(0.25));
};

const rayRender = Fn(() => {
  const ndc = screenNdc();
  const rdW = normalize(vec3(ndc.x.mul(uTan), ndc.y.mul(uTan), -1.0));
  const ro = toObj(uCamPos).toVar();
  const rd = toObj(rdW).toVar();
  const col = space(ndc, rd).add(envBands(rd, uTime)).toVar();
  const tHit = float(1e9).toVar();

  const inv = vec3(1.0).div(rd);
  const t0 = ro.negate().sub(1.03).mul(inv);
  const t1 = ro.negate().add(1.03).mul(inv);
  const tn = max(max(min(t0.x, t1.x), min(t0.y, t1.y)), min(t0.z, t1.z));
  const tf = min(min(max(t0.x, t1.x), max(t0.y, t1.y)), max(t0.z, t1.z));

  If(tn.lessThan(tf).and(tf.greaterThan(0.0)), () => {
    const t = max(tn, 0.0).toVar();
    const hit = float(0).toVar();
    Loop(STEPS, () => {
      const d = mapO(ro.add(rd.mul(t)));
      If(d.lessThan(t.mul(0.00012).add(0.0003)), () => { hit.assign(1.0); Break(); });
      t.addAssign(d.mul(0.8));
      If(t.greaterThan(tf), () => { Break(); });
    });

    If(hit.greaterThan(0.5), () => { tHit.assign(t); });
    If(hit.greaterThan(0.5), () => {
      const p = ro.add(rd.mul(t));
      const n = calcNormal(p, float(0.0009));
      const nB = calcNormal(p, float(0.008));
      const edge = smoothstep(0.15, 0.9, length(n.sub(nB)));
      const isGlass = step(glassSd(p), frameSd(p));
      const f = faceFrame(p);
      const sd = faceSeed(p);
      const kL = toObj(uKey);
      const bx = toObj(uBox);
      const rm = toObj(uRim);
      const v = rd.negate();
      const ndv = max(dot(n, v), 0.0);
      const ao = pow(calcAO(p, n), 1.6);
      const sh = softShadow(p.add(n.mul(0.003)), kL);
      const dif = max(dot(n, kL), 0.0).mul(sh);
      const nh = max(dot(n, normalize(kL.add(v))), 0.0);
      const r = reflect(rd, n);

      const ft = frameTex(triUV(p, n).xy, triUV(p, n).z);
      const m = max(abs(f.x), abs(f.y));
      const frame = shadeFrame(ft, r, bx, rm, dif, nh, edge, ao, sh, lantern(p, rd, float(0.6)).mul(smoothstep(0.8, 0.58, m).mul(0.22)));
      const gt = glassTex(f.xy.mul(0.9), sd);
      const glass = shadeGlass(gt, p, rd, r, bx, rm, ndv, dif, nh, edge, max(abs(f.x), abs(f.y)), vec2(0.47, 0.33)).mul(ao.mul(0.5).add(0.5));

      const core = vec3(0.004, 0.005, 0.01).mul(dif.add(0.2));
      const deep = step(0.0, sdBox(p, vec3(0.71)).negate()).mul(isGlass.oneMinus());
      col.assign(mix(mix(frame, glass, isGlass), core, deep));
    });
  });
  col.addAssign(shellParticles(ro, rd, tHit, uTime, float(1.0)));
  return vec4(col, 1.0);
});

const rayScene = new THREE.Scene();
rayScene.backgroundNode = rayRender();

////////////////////////////////////////////////////////////////
//// TESSERACT : RAY
////////////////////////////////////////////////////////////////

const NB = EDGES.length, NQ = QUADS.length;
const beamData = Array.from({ length: NB * 4 }, () => new THREE.Vector4());
const quadData = Array.from({ length: NQ * 5 }, () => new THREE.Vector4());
const uBeams = uniformArray(beamData, 'vec4');
const uQuads = uniformArray(quadData, 'vec4');
const CORE_R = 0.12;

const updateTessRay = () => {
  beamFrames.forEach((B, n) => {
    beamData[n * 4].set(B.c.x, B.c.y, B.c.z, B.hl);
    beamData[n * 4 + 1].set(B.a.x, B.a.y, B.a.z, B.th);
    beamData[n * 4 + 2].set(B.u.x, B.u.y, B.u.z, 0);
    beamData[n * 4 + 3].set(B.v.x, B.v.y, B.v.z, 0);
  });
  quadFrames.forEach((Q, n) => {
    quadData[n * 5].set(Q.n.x, Q.n.y, Q.n.z, Q.d);
    for (let k = 0; k < 4; k++) quadData[n * 5 + 1 + k].copy(Q.e[k]);
  });
};

const beamLocal = Fn(([p, i]) => {
  const b0 = uBeams.element(i.mul(4));
  const q = p.sub(b0.xyz);
  return vec3(dot(q, uBeams.element(i.mul(4).add(2)).xyz), dot(q, uBeams.element(i.mul(4).add(3)).xyz), dot(q, uBeams.element(i.mul(4).add(1)).xyz));
}).setLayout({ name: 'beamLocal', type: 'vec3', inputs: [{ name: 'p', type: 'vec3' }, { name: 'i', type: 'int' }] });

const mapBeams = Fn(([p]) => {
  const res = vec2(length(p).sub(CORE_R), 200.0).toVar();
  Loop(NB, ({ i }) => {
    const b0 = uBeams.element(i.mul(4));
    const th = uBeams.element(i.mul(4).add(1)).w;
    If(length(p.sub(b0.xyz)).sub(b0.w.add(th.mul(1.5))).lessThan(res.x), () => {
      const l = beamLocal(p, i);
      const d = sdBox(l, vec3(th.sub(0.008), th.sub(0.008), b0.w.sub(0.008))).sub(0.008);
      If(d.lessThan(res.x), () => { res.assign(vec2(d, float(i))); });
    });
  });
  return res;
}).setLayout({ name: 'mapBeams', type: 'vec2', inputs: [{ name: 'p', type: 'vec3' }] });

const mapQuads = Fn(([p]) => {
  const res = vec2(1e3, -1.0).toVar();
  Loop(NQ, ({ i }) => {
    const n = uQuads.element(i.mul(5));
    const d = abs(dot(p, n.xyz).sub(n.w)).sub(0.003).toVar();
    for (let k = 1; k <= 4; k++) {
      const e = uQuads.element(i.mul(5).add(k));
      d.assign(max(d, dot(p, e.xyz).sub(e.w)));
    }
    If(d.lessThan(res.x), () => { res.assign(vec2(d, float(i))); });
  });
  return res;
}).setLayout({ name: 'mapQuads', type: 'vec2', inputs: [{ name: 'p', type: 'vec3' }] });

const beamsN = Fn(([p, e]) => {
  const k1 = vec3(1, -1, -1), k2 = vec3(-1, -1, 1), k3 = vec3(-1, 1, -1), k4 = vec3(1, 1, 1);
  return normalize(
    k1.mul(mapBeams(p.add(k1.mul(e))).x).add(k2.mul(mapBeams(p.add(k2.mul(e))).x))
      .add(k3.mul(mapBeams(p.add(k3.mul(e))).x)).add(k4.mul(mapBeams(p.add(k4.mul(e))).x))
  );
}).setLayout({ name: 'beamsN', type: 'vec3', inputs: [{ name: 'p', type: 'vec3' }, { name: 'e', type: 'float' }] });

const beamShadow = Fn(([ro, rd]) => {
  const res = float(1).toVar();
  const t = float(0.02).toVar();
  Loop(LOWQ ? 10 : 16, () => {
    const h = mapBeams(ro.add(rd.mul(t))).x;
    res.assign(min(res, h.mul(10.0).div(t)));
    t.addAssign(clamp(h, 0.01, 0.15));
    If(res.lessThan(0.002).or(t.greaterThan(2.5)), () => { Break(); });
  });
  return clamp(res, 0.0, 1.0);
}).setLayout({ name: 'beamShadow', type: 'float', inputs: [{ name: 'ro', type: 'vec3' }, { name: 'rd', type: 'vec3' }] });

const quadEdge = Fn(([p, i]) => {
  const d = float(-1e3).toVar();
  for (let k = 1; k <= 4; k++) {
    const e = uQuads.element(i.mul(5).add(k));
    d.assign(max(d, dot(p, e.xyz).sub(e.w)));
  }
  return d;
}).setLayout({ name: 'quadEdge', type: 'float', inputs: [{ name: 'p', type: 'vec3' }, { name: 'i', type: 'int' }] });

const rayTessRender = Fn(() => {
  const ndc = screenNdc();
  const rdW = normalize(vec3(ndc.x.mul(uTan), ndc.y.mul(uTan), -1.0));
  const ro = toObj(uCamPos).toVar();
  const rd = toObj(rdW).toVar();
  const bg = space(ndc, rd).add(envBands(rd, uTime));
  const acc = vec3(0).toVar();
  const trans = float(1).toVar();
  const tHit = float(1e9).toVar();
  const kL = toObj(uKey), bx = toObj(uBox), rm = toObj(uRim);

  const bR = float(1.85);
  const b = dot(ro, rd);
  const cc = dot(ro, ro).sub(bR.mul(bR));
  const disc = b.mul(b).sub(cc);
  If(disc.greaterThan(0.0), () => {
    const sq = disc.sqrt();
    const t = max(b.negate().sub(sq), 0.0).toVar();
    const tf = b.negate().add(sq);
    const hitId = float(-1).toVar();
    Loop(STEPS, () => {
      const p = ro.add(rd.mul(t));
      const rb = mapBeams(p);
      const rq = mapQuads(p);
      const d = min(rb.x, rq.x);
      If(d.lessThan(0.0006), () => {
        If(rb.x.lessThan(rq.x), () => { hitId.assign(rb.y); Break(); });
        const qi = int(rq.y);
        const qn = uQuads.element(qi.mul(5)).xyz;
        const n = qn.mul(dot(qn, rd).sign().negate());
        const ndv = max(dot(n, rd.negate()), 0.0);
        const em = quadEdge(p, qi);
        const qu = vec2(dot(p, normalize(uQuads.element(qi.mul(5).add(1)).xyz)), dot(p, normalize(uQuads.element(qi.mul(5).add(2)).xyz)));
        const gt = glassTex(qu.mul(1.6), float(3.0));
        const dif = max(dot(n, kL), 0.0);
        const nh = max(dot(n, normalize(kL.sub(rd))), 0.0);
        const ring = smoothstep(0.012, 0.0, abs(em.add(0.03))).add(smoothstep(0.012, 0.0, abs(em.add(0.09)))).add(smoothstep(-0.012, 0.0, em));
        const gc = shadeGlass(gt, p, rd, reflect(rd, n), bx, rm, ndv, dif, nh, ring.mul(0.6), float(-1.0), vec2(0.0), float(0.45), float(0.45));
        const al = float(0.28).add(ring.mul(0.3)).add(gt.x.mul(0.1)).min(0.95);
        acc.addAssign(gc.mul(al).mul(trans));
        trans.mulAssign(al.oneMinus());
        t.addAssign(float(0.012).div(max(ndv, 0.25)));
        Continue();
      });
      t.addAssign(d.mul(0.85));
      If(t.greaterThan(tf).or(trans.lessThan(0.02)), () => { Break(); });
    });

    If(hitId.greaterThan(-0.5), () => { tHit.assign(t); });
    If(hitId.greaterThan(-0.5), () => {
      const p = ro.add(rd.mul(t));
      const c = vec3(0).toVar();
      If(hitId.greaterThan(199.0), () => {
        c.assign(vec3(4.0, 4.4, 5.2));
      }).Else(() => {
        const n = beamsN(p, float(0.0008));
        const nB = beamsN(p, float(0.007));
        const edge = smoothstep(0.15, 0.9, length(n.sub(nB)));
        const bi = int(hitId);
        const l = beamLocal(p, bi);
        const ln = vec3(dot(n, uBeams.element(bi.mul(4).add(2)).xyz), dot(n, uBeams.element(bi.mul(4).add(3)).xyz), dot(n, uBeams.element(bi.mul(4).add(1)).xyz));
        const tu = triUV(l, ln);
        const ft = frameTex(tu.xy, tu.z);
        const sh = beamShadow(p.add(n.mul(0.004)), kL);
        const dif = max(dot(n, kL), 0.0).mul(sh);
        const nh = max(dot(n, normalize(kL.sub(rd))), 0.0);
        const ao = pow(clamp(mapBeams(p.add(n.mul(0.05))).x.div(0.05), 0.0, 1.0).mul(clamp(mapBeams(p.add(n.mul(0.15))).x.div(0.15), 0.0, 1.0)), 1.4).mul(0.8).add(0.2);
        c.assign(shadeFrame(ft, reflect(rd, n), bx, rm, dif, nh, edge, ao, sh, lantern(p, rd, float(0.6)).mul(0.08)).mul(0.72));
      });
      acc.addAssign(c.mul(trans));
      trans.assign(0.0);
    });
  });
  return vec4(acc.add(bg.mul(trans)).add(shellParticles(ro, rd, tHit, uTime, float(1.0))), 1.0);
});

const rayTessScene = new THREE.Scene();
rayTessScene.backgroundNode = rayTessRender();

////////////////////////////////////////////////////////////////
//// TUMBLE
////////////////////////////////////////////////////////////////

const spin = { yaw: 0, pitch: 0, vy: 0, vp: 0, down: false, x: 0, y: 0 };
renderer.domElement.addEventListener('pointerdown', (e) => { spin.down = true; spin.x = e.clientX; spin.y = e.clientY; renderer.domElement.setPointerCapture(e.pointerId); });
renderer.domElement.addEventListener('pointermove', (e) => {
  if (!spin.down) return;
  spin.vy = (e.clientX - spin.x) * 0.006;
  spin.vp = (e.clientY - spin.y) * 0.006;
  spin.yaw += spin.vy; spin.pitch += spin.vp;
  spin.x = e.clientX; spin.y = e.clientY;
});
const release = () => { spin.down = false; };
renderer.domElement.addEventListener('pointerup', release);
renderer.domElement.addEventListener('pointercancel', release);

const BASE = new THREE.Euler(0.62, -0.72, 0.18, 'XYZ');
const orient = (tt) => {
  cube.rotation.set(
    BASE.x + Math.sin(tt * 0.11) * 0.12 + spin.pitch,
    BASE.y + tt * 0.06 + spin.yaw,
    BASE.z + Math.sin(tt * 0.07) * 0.06, 'XYZ');
  tess.rotation.copy(cube.rotation);
  uEnvOff.value.set(-(tt * 0.06 + spin.yaw) * 1.2, (Math.sin(tt * 0.11) * 0.12 + spin.pitch) * 1.2);
  cube.updateMatrixWorld();
  tess.updateMatrixWorld();
  const e = cube.matrixWorld.elements;
  uR0.value.set(e[0], e[1], e[2]);
  uR1.value.set(e[4], e[5], e[6]);
  uR2.value.set(e[8], e[9], e[10]);
};

////////////////////////////////////////////////////////////////
//// POST
////////////////////////////////////////////////////////////////

const vig = smoothstep(1.25, 0.3, length(screenUV.sub(0.5).mul(vec2(1.0, 1.1))));
const BOKEH_N = LOWQ ? 24 : 44;
const uBokehR = uniform(16.0);
const bokehGather = (tex, thr, gain) => Fn(() => {
  const acc = vec3(0).toVar();
  Loop(BOKEH_N, ({ i }) => {
    const v = vogelDiskSample(i, int(BOKEH_N), float(0.0));
    const r2 = dot(v, v);
    const c = tex.sample(screenUV.add(v.mul(uBokehR).div(screenSize))).rgb;
    const w = smoothstep(thr, thr.add(0.8), luminance(c));
    acc.addAssign(c.mul(w).mul(r2.mul(r2).mul(0.9).add(0.55)));
  });
  return acc.div(float(BOKEH_N)).mul(gain);
})();

const STREAK_N = LOWQ ? 12 : 20;
const streakGather = (tex, thr, gain) => Fn(() => {
  const acc = vec3(0).toVar();
  Loop(STREAK_N, ({ i }) => {
    const f = float(i).div(float(STREAK_N - 1)).mul(2.0).sub(1.0);
    const c = tex.sample(screenUV.add(vec2(f.mul(uBokehR).mul(7.0).div(screenSize.x), 0.0))).rgb;
    acc.addAssign(c.mul(smoothstep(thr, thr.add(1.0), luminance(c))).mul(float(1.0).sub(abs(f)).pow(2.0)));
  });
  return acc.div(float(STREAK_N)).mul(gain).mul(vec3(0.55, 0.7, 1.0));
})();

const GHOSTS = [[-0.55, [0.5, 0.75, 1.0], 0.18], [-1.1, [0.9, 0.6, 1.0], 0.26], [1.4, [1.0, 0.75, 0.5], 0.3], [-1.9, [0.55, 0.65, 1.0], 0.36]];
const ghostFlare = (tex, thr, gain) => Fn(() => {
  const acc = vec3(0).toVar();
  const c0 = screenUV.sub(0.5);
  for (const [k, tint, blur] of GHOSTS) {
    const g = vec3(0).toVar();
    for (let j = 0; j < 8; j++) {
      const a = j / 8 * Math.PI * 2 + k;
      const r = j % 2 ? 0.6 : 1.0;
      const uvg = vec2(0.5).add(c0.mul(k)).add(vec2(Math.cos(a), Math.sin(a)).mul(blur * 0.25 * r));
      const c = tex.sample(uvg).rgb;
      g.addAssign(c.mul(smoothstep(thr, thr.add(1.2), luminance(c))));
    }
    const edge = smoothstep(0.75, 0.2, length(c0.mul(k)));
    acc.addAssign(g.div(8.0).mul(vec3(...tint)).mul(edge));
  }
  const ringUv = vec2(0.5).sub(normalize(c0.add(vec2(1e-4))).mul(0.32));
  const hc = tex.sample(ringUv).rgb;
  acc.addAssign(hc.mul(smoothstep(thr, thr.add(1.2), luminance(hc))).mul(smoothstep(0.08, 0.0, abs(length(c0).sub(0.32)))).mul(vec3(0.6, 0.8, 1.0)).mul(0.6));
  return acc.mul(gain);
})();

const uLens = uniform(1.0);
const LENS_SPEC = [];
{
  const N = LOWQ ? 5 : 9, raw = [];
  for (let k = 0; k < N; k++) {
    const t = k / (N - 1);
    raw.push([Math.abs(t * 6 - 3) - 1, 2 - Math.abs(t * 6 - 2), 2 - Math.abs(t * 6 - 4)].map((x) => Math.min(Math.max(x, 0), 1)));
  }
  const sum = [0, 1, 2].map((c) => raw.reduce((a, r) => a + r[c], 0));
  raw.forEach((r, k) => LENS_SPEC.push({ off: k / (N - 1) - 0.5, col: vec3(r[0] / sum[0], r[1] / sum[1], r[2] / sum[2]) }));
}
const lensRainbow = (tex) => Fn(() => {
  const asp = uRes.x.div(uRes.y);
  const c = screenUV.sub(0.5);
  const ca = vec2(c.x.mul(asp), c.y);
  const r2 = dot(ca, ca);
  const wob = sin(uTime.mul(0.23)).mul(0.15).add(1.0);
  const barrel = r2.mul(-0.08).add(1.0);
  const disp = r2.mul(0.16).mul(uLens).mul(wob);
  let acc = vec3(0.0);
  for (const sp of LENS_SPEC) acc = acc.add(tex.sample(vec2(0.5).add(c.mul(barrel.mul(disp.mul(sp.off).add(1.0))))).rgb.mul(sp.col));
  return acc;
})();

let TRACK = null;
const tr = (n) => { if (TRACK) TRACK.push(n); return n; };
const finish = (col0, o) => {
  const col = col0.isTextureNode ? col0 : tr(convertToTexture(col0));
  const gb = tr(gaussianBlur(col, null, 2));
  const soft = gb.getTextureNode();
  const bk = bokehGather(soft, float(o.bkThr), float(o.bkGain)).add(streakGather(soft, float(o.bkThr + 0.4), float(o.streak)));
  const bl = tr(bloom(col, o.bloom, 0.55, o.bloomThr));
  const fl = ghostFlare(col, float(o.flThr), 1.0);
  const comp = tr(convertToTexture(col.add(bk).add(bl).add(fl.mul(o.fl))));
  return lensRainbow(comp).mul(vig.mul(o.vig).add(1.0 - o.vig));
};

const LANTERN_POST = { bkThr: 0.5, bkGain: 1.6, streak: 3.4, bloom: 0.26, bloomThr: 0.8, flThr: 1.8, fl: 0.1, vig: 0.45 };
const makePipeline = (sc, samples, withAO) => {
  TRACK = [];
  const pl = new THREE.RenderPipeline(renderer);
  const sp = tr(pass(sc, camera, { samples }));
  let col = sp.getTextureNode('output');
  if (withAO) {
    const aoPass = tr(ao(sp.getTextureNode('depth'), null, camera));
    aoPass.resolutionScale = 0.5;
    aoPass.radius.value = 0.3;
    aoPass.thickness.value = 0.6;
    aoPass.distanceExponent.value = 1.5;
    aoPass.scale.value = 1.8;
    col = col.mul(pow(aoPass.getTextureNode().r, 1.5).mul(0.9).add(0.1));
    const ndc = screenNdc();
    const rdW = normalize(vec3(ndc.x.mul(uTan), ndc.y.mul(uTan), -1.0));
    const tHit = sp.getViewZNode().negate().div(rdW.z.negate());
    col = tr(fxaa(col.add(shellParticles(toObj(uCamPos), toObj(rdW), tHit, uTime, float(1.0)))));
  }
  pl.outputNode = finish(col, LANTERN_POST);
  pl.__trash = TRACK;
  TRACK = null;
  return pl;
};
const PIPE_DEF = { mesh: () => makePipeline(meshScene, 0, true), ray: () => makePipeline(rayScene, 0), rayTess: () => makePipeline(rayTessScene, 0) };
const pipes = {};
const getPipe = (k) => pipes[k] || (pipes[k] = PIPE_DEF[k]());
const dropPipe = (k) => {
  const pl = pipes[k];
  if (!pl) return;
  for (const n of pl.__trash) { try { n.dispose(); } catch (e) {} }
  try { pl.dispose(); } catch (e) {}
  delete pipes[k];
};
let activePipe = null;
const usePipe = (k) => {
  if (activePipe === k) return getPipe(k);
  for (const key of Object.keys(pipes)) if (key !== k) dropPipe(key);
  activePipe = k;
  pr = PR_MAX; renderer.setPixelRatio(pr); renderer.setSize(vw, vh);
  ema = 16; tune = 0;
  return getPipe(k);
};

////////////////////////////////////////////////////////////////
//// TOGGLE
////////////////////////////////////////////////////////////////

let mode = QS.get('mode') === 'ray' ? 'ray' : 'mesh';
let shape = QS.get('shape') === 'tess' ? 'tess' : 'cube';
const modeBtns = [...document.querySelectorAll('[data-mode]')];
const shapeBtns = [...document.querySelectorAll('[data-shape]')];
const sync = () => {
  modeBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
  shapeBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.shape === shape)));
  cube.visible = shape === 'cube';
  tess.visible = shape === 'tess';
  ema = 16; tune = 0;
};
modeBtns.forEach((b) => b.addEventListener('click', () => { mode = b.dataset.mode; sync(); }));
shapeBtns.forEach((b) => b.addEventListener('click', () => { shape = b.dataset.shape; sync(); }));
window.addEventListener('keydown', (e) => {
  if (e.key === 't' || e.key === 'T') { mode = mode === 'mesh' ? 'ray' : 'mesh'; sync(); }
  if (e.key === 's' || e.key === 'S') { shape = shape === 'cube' ? 'tess' : 'cube'; sync(); }
});

////////////////////////////////////////////////////////////////
//// AUDIO · LANTERN
////////////////////////////////////////////////////////////////

const Sound = (() => {
  let ctx = null, out, master, roomIn, echo, padLP, shimmerG, enabled = true, chord = 0, lastStep = -1;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);

  const roomIR = (sec) => {
    const len = Math.floor(ctx.sampleRate * sec), b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c); let lp = 0;
      for (let i = 0; i < len; i++) { const t = i / len; lp = lp * 0.55 + (Math.random() * 2 - 1) * 0.45; d[i] = lp * Math.pow(1 - t, 2.6) * (1 - Math.exp(-i / 900)); }
    }
    return b;
  };

  const bus = () => {
    master = ctx.createGain(); master.gain.value = 0;
    out = ctx.createGain(); out.gain.value = 1;
    const lim = ctx.createDynamicsCompressor(); lim.threshold.value = -16; lim.ratio.value = 5; lim.attack.value = 0.006;
    out.connect(master).connect(lim).connect(ctx.destination);
    const room = ctx.createConvolver(); room.buffer = roomIR(8.5);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 160;
    const rg = ctx.createGain(); rg.gain.value = 1.0;
    roomIn = ctx.createGain();
    roomIn.connect(hp).connect(room).connect(rg).connect(out);
    const eL = ctx.createDelay(4), eR = ctx.createDelay(4), fL = ctx.createGain(), fR = ctx.createGain(), mg = ctx.createChannelMerger(2), tone = ctx.createBiquadFilter();
    eL.delayTime.value = 0.857 * 1.5; eR.delayTime.value = 0.857 * 2.25; fL.gain.value = 0.56; fR.gain.value = 0.56;
    tone.type = 'lowpass'; tone.frequency.value = 2200;
    echo = ctx.createGain(); echo.gain.value = 0.9;
    const e2 = ctx.createDelay(6), f2 = ctx.createGain(), t2 = ctx.createBiquadFilter();
    e2.delayTime.value = 0.857 * 4; f2.gain.value = 0.45; t2.type = 'lowpass'; t2.frequency.value = 1200;
    echo.connect(t2).connect(e2); e2.connect(f2).connect(t2); e2.connect(roomIn);
    echo.connect(tone); tone.connect(eL); tone.connect(eR);
    eL.connect(fL).connect(eR); eR.connect(fR).connect(eL);
    eL.connect(mg, 0, 0); eR.connect(mg, 0, 1); mg.connect(roomIn); mg.connect(out);
  };

  const send = (node, dry, wet, ech = 0) => {
    const d = ctx.createGain(); d.gain.value = dry; node.connect(d).connect(out);
    const w = ctx.createGain(); w.gain.value = wet; node.connect(w).connect(roomIn);
    if (ech) { const e = ctx.createGain(); e.gain.value = ech; node.connect(e).connect(echo); }
  };

  //// harmony: slow modal cycle in C# dorian, one chord every ~24 s
  const CHORDS = [
    { root: 37, pad: [49, 56, 61, 64, 68], glint: [73, 75, 80, 83, 85] },
    { root: 33, pad: [45, 52, 57, 61, 64], glint: [69, 73, 76, 80, 81] },
    { root: 40, pad: [52, 56, 59, 63, 66], glint: [75, 78, 80, 83, 87] },
    { root: 35, pad: [47, 54, 59, 61, 66], glint: [71, 73, 78, 80, 83] }
  ];

  //// glass lantern pad: detuned sine/triangle voices, breathing through a slow filter
  const voices = [];
  const pad = () => {
    padLP = ctx.createBiquadFilter(); padLP.type = 'lowpass'; padLP.frequency.value = 900; padLP.Q.value = 0.4;
    const pg = ctx.createGain(); pg.gain.value = 0.07;
    padLP.connect(pg); send(pg, 0.4, 1.0, 0.3);
    const lfo = ctx.createOscillator(), lg = ctx.createGain();
    lfo.frequency.value = 0.045; lg.gain.value = 420; lfo.connect(lg).connect(padLP.frequency); lfo.start();
    for (let i = 0; i < 5; i++) {
      const g = ctx.createGain(); g.gain.value = 0;
      const pan = ctx.createStereoPanner(); pan.pan.value = (i / 4) * 1.4 - 0.7;
      const a = ctx.createOscillator(), b = ctx.createOscillator();
      a.type = 'sine'; b.type = 'triangle';
      a.connect(g); b.connect(g); g.connect(pan).connect(padLP);
      a.start(); b.start();
      voices.push({ g, a, b });
    }
  };
  const setChord = (t) => {
    const C = CHORDS[chord % CHORDS.length];
    voices.forEach((v, i) => {
      const f = hz(C.pad[i]);
      v.a.frequency.setTargetAtTime(f, t, 2.2);
      v.b.frequency.setTargetAtTime(f * 1.0035 + rnd(-0.2, 0.2), t, 2.2);
      v.g.gain.cancelScheduledValues(t);
      v.g.gain.setTargetAtTime(rnd(0.5, 0.9), t + i * 0.6, 4.5);
    });
    bowlTo(hz(C.root + 12), t);
    sub.frequency.setTargetAtTime(hz(C.root), t, 3);
    subM.frequency.setTargetAtTime(hz(C.root) * 1.414, t, 3);
  };

  //// choir: breathy formant voices, an "ooh" drifting over the chords
  let bowl = null;
  const makeBowl = () => {
    const g = ctx.createGain(); g.gain.value = 0;
    send(g, 0.2, 1.0, 0.5);
    const FORM = [[350, 6, 1.0], [640, 8, 0.35], [2400, 10, 0.08]];
    const mix = ctx.createGain(); mix.gain.value = 1;
    FORM.forEach(([f, q, a]) => { const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = q; const ag = ctx.createGain(); ag.gain.value = a * 0.5; mix.connect(bp).connect(ag).connect(g); });
    const parts = [0, 7, 12].map((iv, k) => {
      const o = ctx.createOscillator(), o2 = ctx.createOscillator(), pg = ctx.createGain();
      o.type = 'sawtooth'; o2.type = 'sawtooth'; pg.gain.value = 0.05 / (k + 1);
      const vib = ctx.createOscillator(), vg = ctx.createGain(); vib.frequency.value = rnd(4.2, 5.4); vg.gain.value = rnd(1.5, 3); vib.connect(vg); vg.connect(o.frequency); vg.connect(o2.frequency); vib.start();
      o.connect(pg); o2.connect(pg); pg.connect(mix); o.start(); o2.start();
      return { a: o, b: o2, r: Math.pow(2, iv / 12) };
    });
    bowl = { g, parts };
  };
  const bowlTo = (f, t) => {
    bowl.parts.forEach((p) => {
      p.a.frequency.setTargetAtTime(f * p.r, t, 2.5);
      p.b.frequency.setTargetAtTime(f * p.r * 1.006, t, 2.5);
    });
    bowl.g.gain.cancelScheduledValues(t);
    bowl.g.gain.setTargetAtTime(0.55, t + 2, 5);
    bowl.g.gain.setTargetAtTime(0.18, t + 14, 6);
  };

  //// metal hum: dark FM drone, the frame resonating
  let sub, subM;
  const hum = () => {
    sub = ctx.createOscillator(); subM = ctx.createOscillator();
    const mg = ctx.createGain(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
    sub.frequency.value = hz(37); subM.frequency.value = hz(37) * 1.414; mg.gain.value = 14;
    lp.type = 'lowpass'; lp.frequency.value = 200;
    const lfo = ctx.createOscillator(), lg = ctx.createGain();
    lfo.frequency.value = 0.06; lg.gain.value = 0.035; g.gain.value = 0.06;
    lfo.connect(lg).connect(g.gain);
    subM.connect(mg).connect(sub.frequency); sub.connect(lp).connect(g); send(g, 0.8, 0.25);
    sub.start(); subM.start(); lfo.start();
  };

  //// light shimmer: airy filtered noise that follows the glow
  const shimmer = () => {
    const len = ctx.sampleRate * 4, b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = b.getChannelData(c); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1; }
    const src = ctx.createBufferSource(); src.buffer = b; src.loop = true;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 5200; bp.Q.value = 1.4;
    shimmerG = ctx.createGain(); shimmerG.gain.value = 0.012;
    const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = 0.11; lg.gain.value = 1800;
    lfo.connect(lg).connect(bp.frequency); lfo.start();
    src.connect(bp).connect(shimmerG); send(shimmerG, 0.3, 0.9);
    src.start();
  };

  //// breath: soft blown tones from the chord, swelling in and dissolving into the echoes
  const breath = (m, t, gain, pan) => {
    const f = hz(m), dur = rnd(3.5, 6);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + dur * 0.4); g.gain.linearRampToValueAtTime(0, t + dur);
    const p = ctx.createStereoPanner(); p.pan.value = pan;
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
    const vib = ctx.createOscillator(), vg = ctx.createGain(); vib.frequency.value = 3.2; vg.gain.value = f * 0.004; vib.connect(vg).connect(o.frequency);
    const nlen = ctx.sampleRate * dur, nb = ctx.createBuffer(1, nlen, ctx.sampleRate), nd = nb.getChannelData(0);
    for (let i = 0; i < nlen; i++) nd[i] = Math.random() * 2 - 1;
    const ns = ctx.createBufferSource(); ns.buffer = nb;
    const nbp = ctx.createBiquadFilter(); nbp.type = 'bandpass'; nbp.frequency.value = f * 2; nbp.Q.value = 3;
    const ng = ctx.createGain(); ng.gain.value = 0.25;
    o.connect(g); ns.connect(nbp).connect(ng).connect(g);
    g.connect(p); send(p, 0.25, 0.9, 0.8);
    o.start(t); vib.start(t); ns.start(t); o.stop(t + dur + 0.1); vib.stop(t + dur + 0.1);
  };
  const glints = () => {
    const C = CHORDS[chord % CHORDS.length], t = ctx.currentTime + 0.05;
    const m = C.glint[Math.floor(Math.random() * C.glint.length)] - 12;
    breath(m, t, rnd(0.03, 0.05), rnd(-0.7, 0.7));
    if (Math.random() < 0.35) breath(C.glint[Math.floor(Math.random() * C.glint.length)] - 12, t + rnd(1.5, 3), rnd(0.02, 0.035), rnd(-0.7, 0.7));
    setTimeout(glints, rnd(5, 11) * 1000);
  };

  //// grumble: grumpy low impulses, growling up from below and drowning in the echo
  const shaper = (k) => { const n = 1024, c = new Float32Array(n); for (let i = 0; i < n; i++) { const x = i / (n - 1) * 2 - 1; c[i] = Math.tanh(x * k); } return c; };
  let CURVE = null;
  const grumble = (t, depth = 1) => {
    const C = CHORDS[chord % CHORDS.length];
    const f = hz(C.root - 12 + (Math.random() < 0.3 ? 7 : 0));
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), sub = ctx.createOscillator();
    o.type = 'sawtooth'; o2.type = 'square'; sub.type = 'sine';
    o.frequency.setValueAtTime(f * 1.06, t); o.frequency.exponentialRampToValueAtTime(f * 0.94, t + 1.2);
    o2.frequency.setValueAtTime(f * 0.5 * 1.01, t); sub.frequency.setValueAtTime(f, t); sub.frequency.exponentialRampToValueAtTime(f * 0.9, t + 1.2);
    const ws = ctx.createWaveShaper(); ws.curve = CURVE || (CURVE = shaper(3.5));
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 7;
    lp.frequency.setValueAtTime(60, t); lp.frequency.exponentialRampToValueAtTime(rnd(260, 420) * depth, t + 0.12); lp.frequency.exponentialRampToValueAtTime(70, t + 1.4);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.16 * depth, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
    const sg = ctx.createGain(); sg.gain.setValueAtTime(0, t); sg.gain.linearRampToValueAtTime(0.22 * depth, t + 0.02); sg.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
    o.connect(ws); o2.connect(ws); ws.connect(lp).connect(g); sub.connect(sg);
    send(g, 0.8, 0.35, 0.45); send(sg, 0.9, 0.1);
    [o, o2, sub].forEach((x) => { x.start(t); x.stop(t + 1.8); });
  };
  const grumbles = () => {
    const t = ctx.currentTime + 0.05;
    grumble(t, rnd(0.8, 1.1));
    if (Math.random() < 0.4) grumble(t + 0.857 * (Math.random() < 0.5 ? 0.75 : 1.5), rnd(0.5, 0.8));
    setTimeout(grumbles, rnd(6, 14) * 1000);
  };

  //// ghost fold: while the tesseract turns through 4D, a whispering vowel sweep,
  //// a gliding theremin cluster that bends up and back, and a growl as it settles
  const ghost = (t, dur) => {
    const C = CHORDS[chord % CHORDS.length];
    const len = Math.floor(ctx.sampleRate * dur), nb = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = nb.getChannelData(c); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1; }
    const ns = ctx.createBufferSource(); ns.buffer = nb;
    const wg = ctx.createGain(); wg.gain.setValueAtTime(0, t);
    wg.gain.linearRampToValueAtTime(0.09, t + dur * 0.55); wg.gain.linearRampToValueAtTime(0, t + dur);
    [[420, 900, 9], [1100, 1700, 12], [2500, 3100, 14]].forEach(([f0, f1, q], k) => {
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = q;
      bp.frequency.setValueAtTime(f0, t); bp.frequency.exponentialRampToValueAtTime(f1, t + dur * 0.55); bp.frequency.exponentialRampToValueAtTime(f0 * 0.8, t + dur);
      const ag = ctx.createGain(); ag.gain.value = [1, 0.5, 0.25][k];
      ns.connect(bp).connect(ag).connect(wg);
    });
    const pan = ctx.createStereoPanner(); pan.pan.setValueAtTime(-0.7, t); pan.pan.linearRampToValueAtTime(0.7, t + dur);
    wg.connect(pan); send(pan, 0.2, 1.0, 0.9);
    ns.start(t); ns.stop(t + dur);
    const tg = ctx.createGain(); tg.gain.setValueAtTime(0, t);
    tg.gain.linearRampToValueAtTime(0.035, t + dur * 0.45); tg.gain.linearRampToValueAtTime(0, t + dur * 1.05);
    send(tg, 0.15, 1.0, 0.9);
    C.pad.slice(1, 4).forEach((m, k) => {
      const f = hz(m + 12);
      const o = ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(f, t);
      o.frequency.exponentialRampToValueAtTime(f * Math.pow(2, (k === 1 ? 5 : 3) / 12), t + dur * 0.55);
      o.frequency.exponentialRampToValueAtTime(f * 0.995, t + dur);
      const vib = ctx.createOscillator(), vg = ctx.createGain(); vib.frequency.value = 5.5 + k * 0.7; vg.gain.value = f * 0.012;
      vib.connect(vg).connect(o.frequency);
      const p = ctx.createStereoPanner(); p.pan.value = (k - 1) * 0.6;
      o.connect(p).connect(tg);
      o.start(t); vib.start(t); o.stop(t + dur * 1.1); vib.stop(t + dur * 1.1);
    });
  };
  const turn = () => {
    if (!ctx || !enabled) return;
    const t = ctx.currentTime;
    ghost(t + 0.05, T_MOVE);
    grumble(t + T_MOVE * 0.92, 0.9);
  };

  const progress = () => { chord++; setChord(ctx.currentTime); setTimeout(progress, rnd(20, 28) * 1000); };

  const start = () => {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    bus(); makeBowl(); hum(); pad(); shimmer();
    setChord(ctx.currentTime);
    master.gain.setTargetAtTime(enabled ? 0.9 : 0, ctx.currentTime, 2.5);
    setTimeout(progress, 22000); setTimeout(glints, 5000); setTimeout(grumbles, 7000);
  };
  const update = (glow, tt) => {
    if (!ctx) return;
    padLP && padLP.Q.setTargetAtTime(0.4 + glow * 2, ctx.currentTime, 0.5);
    shimmerG && shimmerG.gain.setTargetAtTime(0.008 + glow * 0.012, ctx.currentTime, 0.5);
    if (tt < 0) { lastStep = -1; return; }
    const step = Math.floor(tt / T_STEP);
    if (lastStep >= 0 && step !== lastStep) turn();
    lastStep = step;
  };
  const setEnabled = (on) => { enabled = on; if (ctx) master.gain.setTargetAtTime(on ? 0.9 : 0, ctx.currentTime, 0.6); };
  return { start, update, setEnabled, resume: () => ctx && ctx.resume(), get enabled() { return enabled; } };
})();

let soundOn = true;
const applySound = () => { Sound.setEnabled(soundOn); };
const kick = () => {
  Sound.start(); Sound.resume(); applySound();
  ['pointerdown', 'keydown', 'touchstart'].forEach(e => window.removeEventListener(e, kick));
};
['pointerdown', 'keydown', 'touchstart'].forEach(e => window.addEventListener(e, kick, { passive: true }));
document.addEventListener('visibilitychange', () => { if (!document.hidden) Sound.resume(); });
const sndBtn = document.querySelector('[data-snd]');
if (sndBtn) sndBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  Sound.start(); Sound.resume();
  soundOn = !soundOn;
  applySound();
  sndBtn.setAttribute('aria-pressed', String(soundOn));
  sndBtn.textContent = soundOn ? 'Sound on' : 'Sound off';
});


////////////////////////////////////////////////////////////////
//// LOOP
////////////////////////////////////////////////////////////////

const clock = new THREE.Timer();
let vw = 0, vh = 0;
const syncSize = () => {
  const w = window.innerWidth, h = window.innerHeight;
  if (w === vw && h === vh) return;
  vw = w; vh = h;
  const a = w / h;
  camera.aspect = a;
  camera.position.set(0, 0, a < 0.8 ? 8.4 * 0.8 / Math.max(a, 0.42) : 8.4);
  camera.updateProjectionMatrix();
  uCamPos.value.copy(camera.position);
  renderer.setSize(w, h);
  uRes.value.set(w, h);
  uBokehR.value = Math.max(10, Math.min(w, h) * 0.03);
};
syncSize();

let ema = 16, tune = 0;
const adapt = (dt) => {
  ema += (dt * 1000 - ema) * 0.05;
  if ((tune += dt) < 1.0) return;
  tune = 0;
  let next = pr;
  if (ema > 24) next = Math.max(PR_MIN, pr - 0.1);
  else if (ema < 15 && pr < PR_MAX) next = Math.min(PR_MAX, pr + 0.05);
  if (Math.abs(next - pr) > 0.001) { pr = next; renderer.setPixelRatio(pr); renderer.setSize(vw, vh); }
};

sync();
const FIXED = QS.has('t') ? parseFloat(QS.get('t')) : null;
let runT = 0, firstFrame = true;
renderer.setAnimationLoop((ts) => {
  clock.update(ts);
  syncSize();
  const dt = Math.min(clock.getDelta(), 0.05);
  if (FIXED === null) adapt(clock.getDelta());
  uTime.value = clock.getElapsed();
  runT += dt;
  if (!spin.down) { spin.yaw += spin.vy; spin.pitch += spin.vp; spin.vy *= 0.94; spin.vp *= 0.94; spin.pitch *= 0.995; }
  const now = FIXED !== null ? FIXED : runT;
  orient(now);
  Sound.update(0.5 + 0.5 * Math.sin(now * 0.35), shape === 'tess' ? now : -1);
  if (shape === 'tess') {
    tessProject(now);
    tessFrames();
    if (mode === 'mesh') updateTessMesh(); else updateTessRay();
  }
  usePipe(mode === 'mesh' ? 'mesh' : shape === 'tess' ? 'rayTess' : 'ray').render();
  if (firstFrame) {
    firstFrame = false;
    document.getElementById('loading').classList.add('off');
    window.__ready = true;
  }
});

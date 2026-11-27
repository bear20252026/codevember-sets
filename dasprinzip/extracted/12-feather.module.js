import * as THREE from 'three/webgpu';
import {
  Fn, uniform, float, vec2, vec3, vec4, mix, smoothstep, normalize, dot, max, min, abs, pow, exp, fract, floor, sin, cos,
  length, clamp, step, atan, asin, acos, sqrt, varying, Loop, If, Break, texture3D, screenCoordinate, positionGeometry, normalWorld, cameraViewMatrix, texture, cross, sign, positionLocal, positionWorld, cameraPosition, uv, instanceIndex, instancedDynamicBufferAttribute, pass, screenUV, screenSize, perspectiveDepthToViewZ
} from 'three/tsl';
import { bloom } from 'three/addons/tsl/display/BloomNode.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const BUILD = 'v1.3.6-day12-feather';
console.log('%c' + BUILD, 'color:#ffb27a');

////////////////////////////////////////////////////////////////
//// PARAMS
////////////////////////////////////////////////////////////////

const QS = new URLSearchParams(location.search);
const LOWQ = QS.has('lq') || (!QS.has('hq') && /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent));

const P = {
  speed: 15,
  flap: 1.0,
  glow: 1.8,
  natGlow: 0.35,
  length: 9,
  bloom: 0.3,
  bloomThreshold: 1.15,
  exposure: 1.0,
  embers: 1.0
};

// every sky is the same atmosphere model; only the light source changes
const SKIES = {
  dawn: { sunDir: [0.55, 0.14, -0.83], E: 3.6, tint: [1, 1, 1], exposure: 1.5, stars: 0.0 },
  day: { sunDir: [0.42, 0.6, -0.68], E: 3.6, tint: [1, 1, 1], exposure: 1.25, stars: 0.0 },
  dusk: { sunDir: [-0.7, 0.045, -0.71], E: 3.6, tint: [1, 1, 1], exposure: 2.4, stars: 0.0 },
  night: { sunDir: [0.3, 0.5, -0.81], E: 0.11, tint: [0.8, 0.88, 1.0], exposure: 3.2, stars: 1.0 }
};

const C = (h) => new THREE.Color(h);
const uTime = uniform(0);
const uFog = uniform(C(0x8899aa));
const uSunCol = uniform(C(0xffffff));
const uLit = uniform(C(0xffffff));
const uShade = uniform(C(0x8899aa));
const uSunDir = uniform(new THREE.Vector3(...SKIES.dawn.sunDir).normalize());
const uGlow = uniform(1.0);
const uStars = uniform(0);
const uCamPos = uniform(new THREE.Vector3());
const uBirdGlow = uniform(0.5);

const FOG_NEAR = 120, FOG_FAR = 1400;
const SEA_Y = [-44, -34, -25];

////////////////////////////////////////////////////////////////
//// NOISE
////////////////////////////////////////////////////////////////

const hash13 = Fn(([q]) => {
  const p3 = fract(q.mul(0.1031)).toVar();
  p3.addAssign(dot(p3, p3.zyx.add(31.32)));
  return fract(p3.x.add(p3.y).mul(p3.z));
}).setLayout({ name: 'h13', type: 'float', inputs: [{ name: 'q', type: 'vec3' }] });

const hash11 = Fn(([x]) => fract(sin(x.mul(12.9898).add(4.1414)).mul(43758.5453)))
  .setLayout({ name: 'h11', type: 'float', inputs: [{ name: 'x', type: 'float' }] });

const vn = Fn(([x]) => {
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

const fbm4 = Fn(([p]) => {
  const v = vn(p).mul(0.5).toVar();
  v.addAssign(vn(p.mul(2.03).add(vec3(1.7, 9.2, 3.1))).mul(0.25));
  v.addAssign(vn(p.mul(4.01).add(vec3(8.3, 2.8, 6.4))).mul(0.125));
  v.addAssign(vn(p.mul(8.05).add(vec3(4.1, 7.7, 1.9))).mul(0.0625));
  return v;
}).setLayout({ name: 'fbm4', type: 'float', inputs: [{ name: 'p', type: 'vec3' }] });

const fbm3 = Fn(([p]) => {
  const v = vn(p).mul(0.55).toVar();
  v.addAssign(vn(p.mul(2.11).add(vec3(5.3, 1.2, 8.8))).mul(0.3));
  v.addAssign(vn(p.mul(4.37).add(vec3(2.6, 6.1, 3.3))).mul(0.15));
  return v;
}).setLayout({ name: 'fbm3', type: 'float', inputs: [{ name: 'p', type: 'vec3' }] });

const edgeWin = (c) => smoothstep(1.0, 0.7, abs(c.x)).mul(smoothstep(1.0, 0.7, abs(c.y)));
const fogMix = (col) => {
  const d = length(positionWorld.sub(cameraPosition));
  return mix(col, uFog, smoothstep(FOG_NEAR, FOG_FAR, d).mul(0.92));
};

////////////////////////////////////////////////////////////////
//// RENDERER
////////////////////////////////////////////////////////////////

const renderer = new THREE.WebGPURenderer({ antialias: true, forceWebGL: QS.has('webgl') });
const PR_MAX = Math.min(window.devicePixelRatio, LOWQ ? 1.0 : 1.75) * (parseFloat(QS.get('scale')) || 1);
const PR_MIN = LOWQ ? 0.5 : 0.75;
let pr = PR_MAX;
renderer.setPixelRatio(pr);
renderer.setSize(Math.max(2, window.innerWidth), Math.max(2, window.innerHeight));
renderer.toneMapping = QS.has('aces') ? THREE.ACESFilmicToneMapping : THREE.AgXToneMapping;
renderer.toneMappingExposure = P.exposure;
document.body.appendChild(renderer.domElement);
await renderer.init();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, Math.max(2, window.innerWidth) / Math.max(2, window.innerHeight), 0.1, 6000);
camera.position.set(0, 10, 40);

////////////////////////////////////////////////////////////////
//// ATMOSPHERE
////////////////////////////////////////////////////////////////

// single-scattering Rayleigh + Mie + ozone, baked on the CPU into a tiny
// (azimuth-from-sun, elevation) table. Sun colour, sky ambient and haze
// all come out of the same model, so sky, clouds and bird agree.
const ATM = { Rg: 6360, Rt: 6460, h0: 2.6, bR: [5.802e-3, 13.558e-3, 33.1e-3], HR: 8.0, bM: 3.996e-3, bMe: 4.44e-3, HM: 1.2, bO: [0.65e-3, 1.881e-3, 0.085e-3] };
const SKY_W = 48, SKY_H = 40;
const skyData = new Uint16Array(SKY_W * SKY_H * 4);
const skyTex = new THREE.DataTexture(skyData, SKY_W, SKY_H, THREE.RGBAFormat, THREE.HalfFloatType);
skyTex.minFilter = skyTex.magFilter = THREE.LinearFilter;
skyTex.wrapS = skyTex.wrapT = THREE.ClampToEdgeWrapping;
skyTex.generateMipmaps = false;

const atmoDens = (h, o) => { o[0] = Math.exp(-h / ATM.HR); o[1] = Math.exp(-h / ATM.HM); o[2] = Math.max(0, 1 - Math.abs(h - 25) / 15); };
const _d = [0, 0, 0], _l = [0, 0, 0];
// optical depth from (px,py,pz) towards the sun (sx,sy,0); returns false when the planet is in the way
const sunDepth = (px, py, pz, sx, sy, n, o) => {
  const r = Math.hypot(px, py, pz), bl = px * sx + py * sy;
  const dg = bl * bl - r * r + ATM.Rg * ATM.Rg;
  if (bl < 0 && dg > 0) return false;
  const tl = -bl + Math.sqrt(bl * bl - r * r + ATM.Rt * ATM.Rt), dl = tl / n;
  o[0] = o[1] = o[2] = 0;
  for (let k = 0; k < n; k++) {
    const s = (k + 0.5) * dl;
    atmoDens(Math.hypot(px + sx * s, py + sy * s, pz) - ATM.Rg, _d);
    o[0] += _d[0] * dl; o[1] += _d[1] * dl; o[2] += _d[2] * dl;
  }
  return true;
};
const atmo = (dx, dy, dz, sx, sy, out) => {
  const r0 = ATM.Rg + ATM.h0, b = r0 * dy;
  let tmax = -b + Math.sqrt(b * b - r0 * r0 + ATM.Rt * ATM.Rt);
  const dg = b * b - r0 * r0 + ATM.Rg * ATM.Rg;
  if (dy < 0 && dg > 0) tmax = -b - Math.sqrt(dg);
  const N = 16;
  let oR = 0, oM = 0, oO = 0;
  const sR = [0, 0, 0], sM = [0, 0, 0];
  for (let i = 0; i < N; i++) {
    // quadratic spacing: the dense air near the eye gets most of the samples
    const a0 = i / N, a1 = (i + 1) / N, am = (i + 0.5) / N;
    const ds = tmax * (a1 * a1 - a0 * a0), t = tmax * am * am, px = dx * t, py = r0 + dy * t, pz = dz * t;
    atmoDens(Math.hypot(px, py, pz) - ATM.Rg, _d);
    const dR = _d[0] * ds, dM = _d[1] * ds, dO = _d[2] * ds;
    oR += dR; oM += dM; oO += dO;
    if (!sunDepth(px, py, pz, sx, sy, 4, _l)) continue;
    for (let c = 0; c < 3; c++) {
      const att = Math.exp(-(ATM.bR[c] * (oR + _l[0]) + ATM.bMe * (oM + _l[1]) + ATM.bO[c] * (oO + _l[2])));
      sR[c] += att * dR; sM[c] += att * dM;
    }
  }
  const cs = dx * sx + dy * sy, g = 0.76;
  const PR = 3 / (16 * Math.PI) * (1 + cs * cs) + 0.065;
  const PM = (1 - g * g) / (4 * Math.PI * Math.pow(1 + g * g - 2 * g * cs, 1.5)) + 0.03;
  for (let c = 0; c < 3; c++) out[c] = sR[c] * ATM.bR[c] * PR + sM[c] * ATM.bM * PM;
};

const uSunLight = uniform(new THREE.Vector3(1, 1, 1));   // sun irradiance at flight level
const uSkyAmb = uniform(new THREE.Vector3(0.2, 0.3, 0.5)); // mean sky radiance
const uSunDisc = uniform(new THREE.Vector3(1, 1, 1));
const uSunAz = uniform(new THREE.Vector2(1, 0));
const uDeckCol = uniform(new THREE.Vector3(1, 1, 1));
const SKY = { dir: new THREE.Vector3(...SKIES.dawn.sunDir).normalize(), E: SKIES.dawn.E, tint: new THREE.Vector3(...SKIES.dawn.tint), exposure: SKIES.dawn.exposure, stars: 0, key: '' };
const ENV = { sun: new THREE.Vector3(), amb: new THREE.Vector3(), haze: new THREE.Vector3(), el: 0 };
const bakeSky = () => {
  const el = Math.asin(Math.max(-1, Math.min(1, SKY.dir.y))), sx = Math.cos(el), sy = Math.sin(el);
  const o = [0, 0, 0], irr = [0, 0, 0], hz = [0, 0, 0];
  const H = THREE.DataUtils.toHalfFloat;
  const rowEl = (j) => { const s = ((j + 0.5) / SKY_H) * 2 - 1; return Math.sign(s) * s * s * Math.PI / 2; };
  for (let j = 0; j < SKY_H; j++) {
    const e = rowEl(j), ce = Math.cos(e), se = Math.sin(e);
    const dEl = j > 0 && j < SKY_H - 1 ? (rowEl(j + 1) - rowEl(j - 1)) / 2 : 0;
    for (let i = 0; i < SKY_W; i++) {
      const az = ((i + 0.5) / SKY_W) * Math.PI;
      atmo(Math.cos(az) * ce, se, Math.sin(az) * ce, sx, sy, o);
      const k = (j * SKY_W + i) * 4;
      for (let c = 0; c < 3; c++) {
        const v = o[c] * SKY.E * SKY.tint.getComponent(c);
        skyData[k + c] = H(Math.min(v, 60000));
        if (e > 0) irr[c] += v * se * ce * dEl * (Math.PI / SKY_W) * 2;
        if (j === SKY_H / 2) hz[c] += v / SKY_W;
      }
      skyData[k + 3] = H(1);
    }
  }
  skyTex.needsUpdate = true;
  const r0 = ATM.Rg + ATM.h0;
  const lit = sunDepth(0, r0, 0, sx, sy, 24, _l);
  for (let c = 0; c < 3; c++) {
    const T = lit ? Math.exp(-(ATM.bR[c] * _l[0] + ATM.bMe * _l[1] + ATM.bO[c] * _l[2])) : 0;
    ENV.sun.setComponent(c, T * SKY.E * SKY.tint.getComponent(c));
    ENV.amb.setComponent(c, irr[c] / Math.PI);
    ENV.haze.setComponent(c, hz[c]);
  }
  ENV.el = el;
  uSunLight.value.copy(ENV.sun);
  uSkyAmb.value.copy(ENV.amb);
  uSunDisc.value.copy(ENV.sun).multiplyScalar(55);
  uSunAz.value.set(SKY.dir.x, SKY.dir.z).normalize();
  uSunDir.value.copy(SKY.dir);
  const up = Math.max(0, sy);
  uDeckCol.value.copy(ENV.sun).multiplyScalar(0.27 * (0.25 + 0.75 * up)).add(ENV.amb);
  // legacy palette for the smoke / burn-trail sprites
  uSunCol.value.setRGB(ENV.sun.x * 0.5, ENV.sun.y * 0.5, ENV.sun.z * 0.5);
  uLit.value.setRGB(ENV.sun.x * 0.24 + ENV.amb.x, ENV.sun.y * 0.24 + ENV.amb.y, ENV.sun.z * 0.24 + ENV.amb.z);
  uShade.value.setRGB(ENV.amb.x * 0.8 + ENV.sun.x * 0.03, ENV.amb.y * 0.8 + ENV.sun.y * 0.03, ENV.amb.z * 0.8 + ENV.sun.z * 0.03);
  uFog.value.setRGB(ENV.haze.x, ENV.haze.y, ENV.haze.z);
};
bakeSky();

const skyLookup = (d) => {
  const el = asin(d.y.clamp(-1.0, 1.0));
  const v = sign(el).mul(sqrt(abs(el).div(Math.PI / 2))).mul(0.5).add(0.5);
  const az = acos(dot(normalize(d.xz.add(vec2(1e-5, 0.0))), uSunAz).clamp(-1.0, 1.0)).div(Math.PI);
  return texture(skyTex, vec2(az, v), 0);
};

////////////////////////////////////////////////////////////////
//// SKY
////////////////////////////////////////////////////////////////

const skyMat = new THREE.MeshBasicNodeMaterial({ side: THREE.BackSide, depthWrite: false });
skyMat.colorNode = Fn(() => {
  const d = normalize(positionLocal).toVar();
  const h = d.y;
  const col = skyLookup(d).rgb.toVar();
  const cs = dot(d, uSunDir);
  const om = float(1.0).sub(cs);

  // thin cirrus, lit by the same sun
  const cp = d.xz.div(h.add(0.12)).mul(0.9);
  const cn = fbm4(vec3(cp.x.mul(0.7).add(uTime.mul(0.004)), cp.y.mul(1.6), uTime.mul(0.003)));
  const cov = smoothstep(0.1, 0.62, cn).mul(smoothstep(0.03, 0.26, h)).mul(0.5);
  const ccol = uSunLight.mul(pow(max(cs, 0.0), 6.0).mul(0.3).add(0.09)).add(uSkyAmb.mul(0.85));
  col.assign(mix(col, ccol, cov));

  // disc + aureole
  const veil = float(1.0).sub(cov.mul(0.8));
  col.addAssign(uSunDisc.mul(smoothstep(3.2e-5, 2.2e-5, om)).mul(veil));
  col.addAssign(uSunLight.mul(exp(om.mul(-2400.0)).mul(1.1).add(exp(om.mul(-180.0)).mul(0.1))).mul(veil));

  // stars
  const sp = d.mul(300.0);
  const cell = floor(sp);
  const sh = hash13(cell);
  const off = vec3(hash13(cell.add(7.1)), hash13(cell.add(3.3)), hash13(cell.add(5.9))).sub(0.5).mul(0.7);
  const sdot = smoothstep(0.1, 0.0, length(fract(sp).sub(0.5).sub(off)));
  const tw = sin(uTime.mul(sh.mul(3.0).add(1.0)).add(sh.mul(90.0))).mul(0.25).add(0.75);
  const star = step(0.975, sh).mul(sdot).mul(tw).mul(smoothstep(0.0, 0.25, h)).mul(float(1.0).sub(cov.mul(1.8)).max(0.0));
  col.addAssign(vec3(0.85, 0.9, 1.0).mul(star).mul(uStars).mul(pow(fract(sh.mul(51.7)), 3.0).mul(1.4).add(0.08)));
  return col;
})();
const sky = new THREE.Mesh(new THREE.SphereGeometry(3000, 64, 32), skyMat);
sky.renderOrder = -10;
sky.frustumCulled = false;
scene.add(sky);

////////////////////////////////////////////////////////////////
//// FLIGHT PATH
////////////////////////////////////////////////////////////////

const PATH = (() => {
  const pts = [];
  const N = 14;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    const r = 175 + 55 * Math.sin(a * 2 + 1.0) + 28 * Math.cos(a * 3 + 0.4);
    const y = 6 + 14 * Math.sin(a * 3 + 0.8) + 7 * Math.cos(a * 5);
    pts.push(new THREE.Vector3(Math.cos(a) * r, Math.max(y, SEA_Y[2] + 9), Math.sin(a) * r * 0.82));
  }
  return new THREE.CatmullRomCurve3(pts, true, 'centripetal');
})();
const PATH_LEN = PATH.getLength();

////////////////////////////////////////////////////////////////
//// CLOUD DATA
////////////////////////////////////////////////////////////////

// tileable 3D noise: R = billowy base shape, G = finer Worley for edge erosion
const NOISE_N = 64;
const noiseTex = (() => {
  const N = NOISE_N, data = new Uint8Array(N * N * N * 4);
  let s = 1234567;
  const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  const mkPts = (f) => { const a = new Float32Array(f * f * f * 3); for (let i = 0; i < a.length; i++) a[i] = rnd(); return a; };
  const mkLat = (f) => { const a = new Float32Array(f * f * f); for (let i = 0; i < a.length; i++) a[i] = rnd(); return a; };
  const worley = (x, y, z, f, pts) => {
    const px = x * f, py = y * f, pz = z * f, ix = Math.floor(px), iy = Math.floor(py), iz = Math.floor(pz);
    let m = 9;
    for (let c = -1; c <= 1; c++) for (let b = -1; b <= 1; b++) for (let a = -1; a <= 1; a++) {
      const cx = ix + a, cy = iy + b, cz = iz + c;
      const k = ((((cz % f) + f) % f) * f + (((cy % f) + f) % f)) * f + (((cx % f) + f) % f);
      const ddx = cx + pts[k * 3] - px, ddy = cy + pts[k * 3 + 1] - py, ddz = cz + pts[k * 3 + 2] - pz;
      const q = ddx * ddx + ddy * ddy + ddz * ddz;
      if (q < m) m = q;
    }
    return 1 - Math.min(1, Math.sqrt(m));
  };
  const val = (x, y, z, f, lat) => {
    const px = x * f, py = y * f, pz = z * f, ix = Math.floor(px), iy = Math.floor(py), iz = Math.floor(pz);
    let fx = px - ix, fy = py - iy, fz = pz - iz;
    fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy); fz = fz * fz * (3 - 2 * fz);
    const L = (a, b, c) => lat[(((iz + c) % f) * f + ((iy + b) % f)) * f + ((ix + a) % f)];
    const x00 = L(0, 0, 0) + (L(1, 0, 0) - L(0, 0, 0)) * fx, x10 = L(0, 1, 0) + (L(1, 1, 0) - L(0, 1, 0)) * fx;
    const x01 = L(0, 0, 1) + (L(1, 0, 1) - L(0, 0, 1)) * fx, x11 = L(0, 1, 1) + (L(1, 1, 1) - L(0, 1, 1)) * fx;
    const y0 = x00 + (x10 - x00) * fy, y1 = x01 + (x11 - x01) * fy;
    return y0 + (y1 - y0) * fz;
  };
  const wA = [3, 6, 12].map((f) => [f, mkPts(f)]), wB = [5, 10, 20].map((f) => [f, mkPts(f)]);
  const vL = [3, 6, 12].map((f) => [f, mkLat(f)]);
  const W3 = [0.625, 0.25, 0.125];
  const R = new Float32Array(N * N * N);
  let lo = 9, hi = -9;
  for (let z = 0, i = 0; z < N; z++) for (let y = 0; y < N; y++) for (let x = 0; x < N; x++, i++) {
    const u = (x + 0.5) / N, v = (y + 0.5) / N, w = (z + 0.5) / N;
    let a = 0, b = 0, c = 0;
    for (let k = 0; k < 3; k++) {
      a += worley(u, v, w, wA[k][0], wA[k][1]) * W3[k];
      b += worley(u, v, w, wB[k][0], wB[k][1]) * W3[k];
      c += val(u, v, w, vL[k][0], vL[k][1]) * W3[k];
    }
    const r = c * 0.6 + a * 0.55;
    R[i] = r; if (r < lo) lo = r; if (r > hi) hi = r;
    data[i * 4 + 1] = Math.max(0, Math.min(255, b * 300));
    data[i * 4 + 3] = 255;
  }
  for (let i = 0; i < R.length; i++) data[i * 4] = Math.round(255 * (R[i] - lo) / (hi - lo));
  const t = new THREE.Data3DTexture(data, N, N, N);
  t.format = THREE.RGBAFormat; t.type = THREE.UnsignedByteType;
  t.minFilter = t.magFilter = THREE.LinearFilter;
  t.wrapS = t.wrapT = t.wrapR = THREE.RepeatWrapping;
  t.unpackAlignment = 1; t.generateMipmaps = false; t.needsUpdate = true;
  return t;
})();

// cloud-top height map: an undulating deck with cumulus towers that keep clear of the flight path
const HM_N = 256, HM_SIZE = 2048, HM_LO = -80, HM_HI = 96, C_BASE = -135, C_TOP = HM_HI;
const hmTex = (() => {
  const N = HM_N, data = new Uint8Array(N * N * 4);
  let s = 77;
  const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  const lat = [3, 6, 12, 24].map((f) => { const a = new Float32Array(f * f); for (let i = 0; i < a.length; i++) a[i] = rnd(); return [f, a]; });
  const val2 = (x, y, f, a) => {
    const px = x * f, py = y * f, ix = Math.floor(px), iy = Math.floor(py);
    let fx = px - ix, fy = py - iy; fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
    const L = (i, j) => a[((iy + j) % f) * f + ((ix + i) % f)];
    const a0 = L(0, 0) + (L(1, 0) - L(0, 0)) * fx, a1 = L(0, 1) + (L(1, 1) - L(0, 1)) * fx;
    return a0 + (a1 - a0) * fy;
  };
  const pathPts = Array.from({ length: 160 }, (_, i) => PATH.getPointAt(i / 160));
  const wrapD = (d) => { d = Math.abs(d) % HM_SIZE; return d > HM_SIZE / 2 ? HM_SIZE - d : d; };
  const towers = [];
  let tries = 0;
  while (towers.length < (LOWQ ? 24 : 34) && tries++ < 6000) {
    const nearField = towers.length < 13;
    const a = rnd() * Math.PI * 2, rr = nearField ? 40 + rnd() * 460 : 0;
    const x = nearField ? Math.cos(a) * rr : (rnd() - 0.5) * HM_SIZE, z = nearField ? Math.sin(a) * rr : (rnd() - 0.5) * HM_SIZE;
    const R = nearField ? 48 + rnd() * 120 : 40 + rnd() * rnd() * 170;
    let ok = true;
    for (const q of pathPts) if (Math.hypot(q.x - x, q.z - z) < R + 36) { ok = false; break; }
    for (const t of towers) if (Math.hypot(wrapD(t.x - x), wrapD(t.z - z)) < (t.R + R) * 0.55) { ok = false; break; }
    if (!ok) continue;
    const Ht = Math.min(150, R * (0.9 + rnd() * 0.9));
    towers.push({ x, z, R, H: Ht });
    for (let k = 0; k < 3; k++) {
      const b = rnd() * Math.PI * 2, r2 = R * (0.45 + rnd() * 0.3), ox = x + Math.cos(b) * R * 0.75, oz = z + Math.sin(b) * R * 0.75;
      let ok2 = true;
      for (const q of pathPts) if (Math.hypot(q.x - ox, q.z - oz) < r2 + 36) { ok2 = false; break; }
      if (ok2) towers.push({ x: ox, z: oz, R: r2, H: Ht * (0.45 + rnd() * 0.35) });
    }
  }
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const u = (i + 0.5) / N, v = (j + 0.5) / N, x = (u - 0.5) * HM_SIZE, z = (v - 0.5) * HM_SIZE;
    let n = 0, wsum = 0;
    lat.forEach(([f, a], k) => { const w = Math.pow(0.5, k); n += val2(u, v, f, a) * w; wsum += w; });
    n /= wsum;
    let top = -78 + 46 * Math.min(1, Math.max(0, (n - 0.22) * 1.9)), mask = 0;
    for (const t of towers) {
      const d = Math.hypot(wrapD(t.x - x), wrapD(t.z - z)) / t.R;
      if (d >= 1) continue;
      const dome = Math.pow(1 - d * d, 0.55);
      top = Math.max(top, -52 + t.H * dome);
      mask = Math.max(mask, Math.min(1, (1 - d) * 2.2));
    }
    const k = (j * N + i) * 4;
    data[k] = Math.round(255 * Math.min(1, Math.max(0, (top - HM_LO) / (HM_HI - HM_LO))));
    data[k + 1] = Math.round(255 * mask);
    data[k + 3] = 255;
  }
  const t = new THREE.DataTexture(data, N, N, THREE.RGBAFormat, THREE.UnsignedByteType);
  t.minFilter = t.magFilter = THREE.LinearFilter;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.generateMipmaps = false; t.needsUpdate = true;
  return t;
})();

////////////////////////////////////////////////////////////////
//// VOLUMETRIC CLOUDS
////////////////////////////////////////////////////////////////

const C_SIGMA = 0.085, C_STEP0 = 3.0, C_GROW = LOWQ ? 0.1 : 0.064, C_MAXD = 2600, C_FOG = 1150, C_GAIN = 3.6;
const uWind = uniform(new THREE.Vector3());
const uCamR = uniform(new THREE.Vector3(1, 0, 0)), uCamU = uniform(new THREE.Vector3(0, 1, 0)), uCamF = uniform(new THREE.Vector3(0, 0, -1));
const uTanX = uniform(1), uTanY = uniform(1), uNearDist = uniform(15), uJit = uniform(new THREE.Vector2());

const cloudDens = (p, detail, lod) => {
  const hm = texture(hmTex, p.xz.div(HM_SIZE).add(0.5), 0);
  const top = hm.r.mul(HM_HI - HM_LO).add(HM_LO);
  const hf = p.y.sub(C_BASE).div(top.sub(C_BASE));
  const prof = smoothstep(0.0, 0.1, hf).mul(smoothstep(1.0, 0.5, hf));
  const q = p.add(uWind);
  const b = texture3D(noiseTex, q.mul(1 / 330), 0).r;
  const cov = mix(float(0.72), float(0.9), hm.g);
  let d = b.mul(prof).sub(float(1.0).sub(cov)).div(cov).clamp(0.0, 1.0);
  if (detail) {
    const e = texture3D(noiseTex, q.mul(1 / 57).add(vec3(0.31, 0.17, 0.59)), 0).g;
    d = d.sub(mix(e, float(0.42), lod).mul(0.34).mul(float(1.15).sub(d))).clamp(0.0, 1.0).mul(1.3);
  }
  return d.mul(C_SIGMA);
};

const LIGHT_TAPS = [[5, 5], [13, 10], [29, 20], [62, 40], [130, 80]];
const makeClouds = ({ steps, near }) => Fn(() => {
  const ndc = screenUV.mul(2.0).sub(1.0);
  const rd = normalize(uCamF.add(uCamR.mul(ndc.x.mul(uTanX))).add(uCamU.mul(ndc.y.negate().mul(uTanY)))).toVar();
  const ro = uCamPos;
  const ry = rd.y.add(sign(rd.y).mul(1e-5)).add(1e-6);
  const tA = float(C_TOP).sub(ro.y).div(ry), tB = float(C_BASE).sub(ro.y).div(ry);
  const t0 = max(min(tA, tB), 0.0);
  const t1 = min(max(tA, tB), near ? uNearDist : float(C_MAXD));
  const jit = fract(float(52.9829189).mul(fract(dot(screenCoordinate.xy.add(uJit), vec2(0.06711056, 0.00583715)))));
  const T = float(1.0).toVar(), S = vec3(0.0).toVar();
  const cs = dot(rd, uSunDir);
  const hg = (g) => float((1 - g * g) / (4 * Math.PI)).div(pow(float(1 + g * g).sub(cs.mul(2 * g)), 1.5));
  const ph1 = mix(hg(0.8), hg(-0.2), 0.3).toVar(), ph2 = hg(0.4).toVar();
  const haze = skyLookup(normalize(vec3(rd.x, 0.014, rd.z))).rgb.toVar();
  const nearDt = t1.sub(t0).div(steps).max(0.5);
  const t = t0.add(jit.mul(near ? nearDt : float(C_STEP0))).toVar();
  Loop(steps, () => {
    If(t.greaterThan(t1).or(T.lessThan(0.012)), () => { Break(); });
    const p = ro.add(rd.mul(t)).toVar();
    const dt = (near ? nearDt : max(float(C_STEP0), t.mul(C_GROW))).toVar();
    const lod = smoothstep(220.0, 800.0, t);
    const d = cloudDens(p, true, lod).toVar();
    If(d.greaterThan(0.0008), () => {
      const tau = float(0.0).toVar();
      LIGHT_TAPS.slice(0, near ? 3 : 5).forEach(([dist, w], k) => tau.addAssign(cloudDens(p.add(uSunDir.mul(dist)), k < 2, lod).mul(w)));
      const sunL = uSunLight.mul(
        exp(tau.negate()).mul(ph1)
          .add(exp(tau.mul(-0.3)).mul(ph2).mul(0.5))
          .add(exp(tau.mul(-0.07)).mul(0.0796 * 0.15))
      ).mul(C_GAIN);
      const ah = smoothstep(C_BASE, HM_LO + 70, p.y);
      const lum = sunL.add(uSkyAmb.mul(ah.mul(0.75).add(0.12)));
      const fog = float(1.0).sub(exp(t.mul(-1 / C_FOG)));
      const col = mix(lum, haze, fog);
      const a = float(1.0).sub(exp(d.mul(dt).negate()));
      S.addAssign(col.mul(a).mul(T));
      T.mulAssign(float(1.0).sub(a));
    }).Else(() => {
      dt.mulAssign(near ? 1.0 : 1.7);
    });
    t.addAssign(dt);
  });
  if (!near) {
    // whatever is still visible below the horizon is the far, hazy undercast
    const below = smoothstep(0.0, -0.02, rd.y);
    const fog = float(1.0).sub(exp(t.mul(-1 / C_FOG)));
    S.addAssign(mix(uDeckCol.mul(0.55), haze, fog).mul(T).mul(below));
    T.mulAssign(float(1.0).sub(below));
  }
  return vec4(S, T);
})();

const mkCloudRT = () => {
  const rt = new THREE.RenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: false });
  rt.texture.minFilter = rt.texture.magFilter = THREE.LinearFilter;
  rt.texture.generateMipmaps = false;
  return rt;
};
const rtFull = mkCloudRT(), rtNear = mkCloudRT();
const mkCloudQuad = (o) => { const m = new THREE.NodeMaterial(); m.fragmentNode = makeClouds(o); m.depthTest = false; m.depthWrite = false; return new THREE.QuadMesh(m); };
const quadFull = mkCloudQuad({ steps: LOWQ ? 44 : 80, near: false });
const quadNear = mkCloudQuad({ steps: 10, near: true });
const uCloudTexel = uniform(new THREE.Vector2(1 / 512, 1 / 512));
const CLOUD_SCALE = (parseFloat(QS.get('cs')) || (LOWQ ? 0.4 : 0.6));

// in-scene composite: A covers the sky (full march), B covers the bird (only what is in front of it)
const mkComposite = (rt, depthFunc, order) => {
  const m = new THREE.NodeMaterial();
  m.vertexNode = vec4(positionGeometry.xy, 1.0, 1.0);
  const o = uCloudTexel.mul(rt === rtFull ? 0.7 : 1.4);
  const tap = (x, y) => texture(rt.texture, screenUV.add(o.mul(vec2(x, y))));
  m.fragmentNode = tap(1, 0.4).add(tap(-0.4, 1)).add(tap(-1, -0.4)).add(tap(0.4, -1)).mul(0.25);
  m.transparent = true; m.depthWrite = false; m.depthTest = true; m.depthFunc = depthFunc;
  m.blending = THREE.CustomBlending; m.blendEquation = THREE.AddEquation;
  m.blendSrc = THREE.OneFactor; m.blendDst = THREE.SrcAlphaFactor;
  m.blendSrcAlpha = THREE.ZeroFactor; m.blendDstAlpha = THREE.OneFactor;
  const q = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), m);
  q.frustumCulled = false; q.renderOrder = order;
  scene.add(q);
  return q;
};
const compFar = mkComposite(rtFull, THREE.LessEqualDepth, -6);
const compNear = mkComposite(rtNear, THREE.GreaterDepth, -5);
if (QS.has('noclouds')) { compFar.visible = compNear.visible = false; }
const cv3 = new THREE.Vector3();
const renderClouds = (t) => {
  camera.updateMatrixWorld();
  const e = camera.matrixWorld.elements;
  uCamR.value.set(e[0], e[1], e[2]); uCamU.value.set(e[4], e[5], e[6]); uCamF.value.set(-e[8], -e[9], -e[10]);
  uTanY.value = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2); uTanX.value = uTanY.value * camera.aspect;
  uCamPos.value.copy(camera.position);
  uNearDist.value = Math.max(2, cv3.copy(blowT >= 0 ? uBlowPos.value : bird.position).distanceTo(camera.position));
  uWind.value.set(t * 0.9, t * 0.12, t * 0.35);
  uJit.value.set((t * 60 * 5.588) % 64, (t * 60 * 3.137) % 64);
  if (!compFar.visible) return;
  renderer.setRenderTarget(rtFull); quadFull.render(renderer);
  renderer.setRenderTarget(rtNear); quadNear.render(renderer);
  renderer.setRenderTarget(null);
};

////////////////////////////////////////////////////////////////
//// EMBERS
////////////////////////////////////////////////////////////////

const NEMB = LOWQ ? 500 : 1000;
const ePos = new THREE.InstancedBufferAttribute(new Float32Array(NEMB * 4), 4);
const eCol = new THREE.InstancedBufferAttribute(new Float32Array(NEMB * 4), 4);
ePos.setUsage(THREE.DynamicDrawUsage); eCol.setUsage(THREE.DynamicDrawUsage);
const ePosA = instancedDynamicBufferAttribute(ePos, 'vec4');
const eColA = instancedDynamicBufferAttribute(eCol, 'vec4');
const embMat = new THREE.SpriteNodeMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
embMat.positionNode = ePosA.xyz;
embMat.scaleNode = vec2(ePosA.w);
embMat.colorNode = eColA.rgb;
embMat.opacityNode = smoothstep(1.0, 0.0, length(uv().sub(0.5)).mul(2.0)).pow(1.6).mul(eColA.a);
const embers = new THREE.Sprite(embMat);
embers.count = NEMB;
embers.frustumCulled = false;
embers.renderOrder = 6;
scene.add(embers);
const EMB = Array.from({ length: NEMB }, () => ({ p: new THREE.Vector3(), v: new THREE.Vector3(), life: 0, max: 1, size: 0, hue: 0 }));
let embHead = 0;
const EMB_COLS = [C(0xfff1cf), C(0xffb14a), C(0xff5a14), C(0xa81c06), C(0x2a0603)];
const emit = (p, v, size, life) => {
  const e = EMB[embHead]; embHead = (embHead + 1) % NEMB;
  e.p.copy(p); e.v.copy(v); e.life = life; e.max = life; e.size = size; e.hue = Math.random();
};
const tmpC = new THREE.Color();
const updateEmbers = (dt) => {
  const pa = ePos.array, ca = eCol.array;
  for (let i = 0; i < NEMB; i++) {
    const e = EMB[i];
    if (e.life > 0) {
      e.life -= dt;
      e.v.multiplyScalar(Math.exp(-dt * 1.4));
      e.v.y += dt * 0.9;
      e.p.addScaledVector(e.v, dt);
    }
    const k = Math.max(0, e.life / e.max);
    const t = (1 - k) * (EMB_COLS.length - 1) * (0.7 + e.hue * 0.3);
    const j = Math.min(EMB_COLS.length - 2, Math.floor(t));
    tmpC.copy(EMB_COLS[j]).lerp(EMB_COLS[j + 1], t - j);
    pa[i * 4] = e.p.x; pa[i * 4 + 1] = e.p.y; pa[i * 4 + 2] = e.p.z;
    pa[i * 4 + 3] = e.life > 0 ? e.size * 0.26 * (0.35 + 0.65 * Math.sin(Math.PI * Math.min(1, (1 - k) * 4 + 0.15)) * k + 0.2 * k) : 0;
    ca[i * 4] = tmpC.r * 12.0; ca[i * 4 + 1] = tmpC.g * 12.0; ca[i * 4 + 2] = tmpC.b * 12.0;
    ca[i * 4 + 3] = e.life > 0 ? Math.min(1, k * 1.8) * P.embers : 0;
  }
  ePos.needsUpdate = true; eCol.needsUpdate = true;
};

////////////////////////////////////////////////////////////////
//// EXPLOSION
////////////////////////////////////////////////////////////////

const uBlowT = uniform(-10);
const uBlowPos = uniform(new THREE.Vector3());
const GATHER0 = 6.5, REBIRTH = 10.0, BLOW_END = 13.0;
const INK = vec3(0.14, 0.03, 0.07);
const T_WHITE = vec3(1.0, 0.97, 0.82), T_YEL = vec3(1.0, 0.8, 0.16), T_ORA = vec3(1.0, 0.4, 0.05), T_RED = vec3(0.75, 0.08, 0.1);
const toonFire = (h) => mix(mix(mix(T_RED, T_ORA, step(0.26, h)), T_YEL, step(0.5, h)), T_WHITE, step(0.76, h));
const bt = uBlowT.max(0.0);
const live = step(0.0, uBlowT);
const rotX = (v, a) => vec3(v.x, v.y.mul(cos(a)).sub(v.z.mul(sin(a))), v.y.mul(sin(a)).add(v.z.mul(cos(a))));
const rotY = (v, a) => vec3(v.x.mul(cos(a)).add(v.z.mul(sin(a))), v.y, v.z.mul(cos(a)).sub(v.x.mul(sin(a))));
const rotZ = (v, a) => vec3(v.x.mul(cos(a)).sub(v.y.mul(sin(a))), v.x.mul(sin(a)).add(v.y.mul(cos(a))), v.z);
const fi = float(instanceIndex);
const rdir = (o) => normalize(vec3(hash11(fi.add(o)), hash11(fi.add(o + 12.6)), hash11(fi.add(o + 26.2))).sub(0.5));

// hot ramp: white core, orange body, red tail
const hotRamp = (h) => mix(mix(vec3(0.55, 0.06, 0.02), vec3(1.0, 0.38, 0.05), smoothstep(0.0, 0.45, h)), vec3(1.0, 0.9, 0.62), smoothstep(0.55, 1.0, h));

// fire jets: staggered spouts of fibrous fire, a few strands each
const NJET = LOWQ ? 10 : 16, STRANDS = 4;
const jet = floor(fi.div(STRANDS));
const jh = hash11(jet.add(3.7));
const jt = bt.sub(jh.mul(1.5));
const jdir = normalize(vec3(hash11(jet.add(9.1)).sub(0.5), hash11(jet.add(5.3)).mul(0.9).add(0.15), hash11(jet.add(7.7)).sub(0.5)));
const jorg = uBlowPos.add(vec3(hash11(jet.add(1.1)).sub(0.5), hash11(jet.add(2.2)).sub(0.5).mul(0.5), hash11(jet.add(4.4)).sub(0.5)).mul(9.0));
const sj = fract(fi.div(STRANDS));
const sdirJ = normalize(jdir.add(vec3(hash11(fi.add(0.3)).sub(0.5), hash11(fi.add(0.6)).sub(0.5), hash11(fi.add(0.9)).sub(0.5)).mul(0.12)));
const jlen = float(14.0).add(jh.mul(14.0)).mul(sj.mul(0.5).add(0.6)).mul(smoothstep(0.0, 0.14, jt)).mul(float(1.0).add(jt.mul(0.4)));
const jlife = smoothstep(0.0, 0.05, jt).mul(smoothstep(0.95, 0.35, jt));
const jetMat = new THREE.SpriteNodeMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
jetMat.positionNode = jorg.add(sdirJ.mul(jlen.mul(0.5)));
const jvd = cameraViewMatrix.mul(vec4(sdirJ, 0.0)).xy;
jetMat.rotationNode = atan(jvd.y, jvd.x);
jetMat.scaleNode = vec2(jlen.mul(length(jvd).add(0.08)), float(1.1).add(sj.mul(0.8)).mul(step(0.0, jt)));
jetMat.colorNode = Fn(() => {
  const u = uv();
  const fib = fbm3(vec3(u.x.mul(3.0).sub(jt.mul(6.0)), u.y.mul(6.0), fi.mul(1.7)));
  const h = float(1.0).sub(u.x).mul(1.1).add(fib.mul(0.35)).sub(abs(u.y.sub(0.5)).mul(1.2));
  return hotRamp(h.mul(0.85).clamp(0.0, 1.0)).mul(1.5);
})();
jetMat.opacityNode = Fn(() => {
  const u = uv();
  const w = mix(float(0.5), float(0.08), pow(u.x, 0.7));
  const fib = fbm3(vec3(u.x.mul(5.0).sub(jt.mul(8.0)), u.y.mul(9.0), fi.mul(1.7)));
  const core = smoothstep(w, w.mul(0.2), abs(u.y.sub(0.5)).add(fib.mul(0.08)));
  return core.mul(smoothstep(1.0, 0.55, u.x)).mul(smoothstep(0.0, 0.06, u.x)).mul(jlife).mul(live).mul(0.7);
})();
const jets = new THREE.Sprite(jetMat);
jets.count = NJET * STRANDS;
jets.renderOrder = 9;

// burning spots at every spout root
const spotMat = new THREE.SpriteNodeMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
const sj2 = hash11(fi.add(3.7));
const st2 = bt.sub(sj2.mul(1.5));
const sorg = uBlowPos.add(vec3(hash11(fi.add(1.1)).sub(0.5), hash11(fi.add(2.2)).sub(0.5).mul(0.5), hash11(fi.add(4.4)).sub(0.5)).mul(9.0));
spotMat.positionNode = sorg;
spotMat.scaleNode = vec2(float(3.5).mul(smoothstep(0.0, 0.1, st2)).mul(smoothstep(2.6, 0.8, st2)));
spotMat.colorNode = Fn(() => {
  const c = uv().mul(2.0).sub(1.0);
  const n = fbm3(vec3(c.mul(3.0), uTime.mul(3.0).add(fi)));
  return hotRamp(smoothstep(1.0, 0.0, length(c)).add(n.mul(0.4)).clamp(0.0, 1.0)).mul(2.0);
})();
spotMat.opacityNode = smoothstep(1.0, 0.2, length(uv().sub(0.5)).mul(2.0)).mul(step(0.0, st2)).mul(live);
const spots = new THREE.Sprite(spotMat);
spots.count = NJET;
spots.renderOrder = 9;

// short soft fire puff for the punch
const NFIRE = LOWQ ? 24 : 40;
const fh = hash11(fi.add(0.5));
const ft = uBlowT.sub(fh.mul(0.08)).max(0.0);
const fireMat = new THREE.SpriteNodeMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
fireMat.positionNode = uBlowPos.add(rdir(11.1).mul(float(9.0).mul(fh.mul(0.7).add(0.3)).mul(float(1.0).sub(exp(ft.mul(-5.0))))));
fireMat.scaleNode = vec2(float(6.0).add(fh.mul(7.0)).mul(smoothstep(0.0, 0.06, ft)).mul(ft.mul(0.8).add(1.0)));
const fc = uv().mul(2.0).sub(1.0);
const fn = fbm3(vec3(fc.mul(2.0).add(fh.mul(41.0)), ft.mul(2.0).add(fh.mul(7.0))));
const fheat = exp(ft.mul(-2.6));
fireMat.colorNode = hotRamp(fheat.mul(float(1.1).sub(length(fc).mul(0.6))).add(fn.mul(0.25)).clamp(0.0, 1.0)).mul(2.2);
fireMat.opacityNode = smoothstep(1.0, 0.1, length(fc).add(fn.mul(0.5))).mul(smoothstep(1.0, 0.15, ft)).mul(live).mul(0.7);
const fire = new THREE.Sprite(fireMat);
fire.count = NFIRE;
fire.renderOrder = 8;

// flash
const flashMat = new THREE.SpriteNodeMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
flashMat.positionNode = uBlowPos;
flashMat.scaleNode = vec2(float(16.0).add(bt.mul(50.0)));
flashMat.colorNode = vec3(1.0, 0.8, 0.5).mul(exp(bt.mul(-6.5))).mul(3.0);
flashMat.opacityNode = smoothstep(1.0, 0.0, length(uv().sub(0.5)).mul(2.0)).pow(2.0).mul(live);
const flash = new THREE.Sprite(flashMat);
flash.renderOrder = 10;

// glowing shock ring, breaking into burning fragments
const ringMat = new THREE.MeshBasicNodeMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
ringMat.colorNode = Fn(() => {
  const c = uv().mul(2.0).sub(1.0);
  const r = length(c);
  const a = atan(c.y, c.x);
  const frag = fbm3(vec3(cos(a).mul(5.0), sin(a).mul(5.0), bt.mul(0.8)));
  const band = exp(pow(r.sub(0.93).div(0.025), 2.0).negate());
  const chunks = smoothstep(0.05, 0.35, frag).mul(exp(pow(r.sub(0.93).div(0.05), 2.0).negate()));
  const haze = smoothstep(0.95, 0.2, r).mul(0.06);
  const fade = exp(bt.mul(-0.9));
  return hotRamp(float(0.45).add(chunks.mul(0.5))).mul(band.mul(2.0).add(chunks.mul(3.0)).add(haze)).mul(fade);
})();
const ringGeo = new THREE.PlaneGeometry(2, 2);
ringGeo.rotateX(-Math.PI / 2);
const ring = new THREE.Mesh(ringGeo, ringMat);
ring.renderOrder = 9;

// sparks
const NSTREAK = LOWQ ? 60 : 110;
const sdir = rdir(51.1);
const sspd = hash11(fi.add(3.3));
const sdist = float(4.0).add(float(45.0).mul(sspd.mul(0.7).add(0.3)).mul(float(1.0).sub(exp(bt.mul(-2.4)))));
const streakMat = new THREE.SpriteNodeMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
streakMat.positionNode = uBlowPos.add(sdir.mul(sdist)).sub(vec3(0, bt.mul(bt).mul(1.6), 0));
const svd = cameraViewMatrix.mul(vec4(sdir, 0.0)).xy;
streakMat.rotationNode = atan(svd.y, svd.x);
const sk = smoothstep(1.6, 0.0, bt.mul(sspd.mul(0.6).add(0.7)));
streakMat.scaleNode = vec2(float(2.6).mul(exp(bt.mul(-1.5))).add(0.25).mul(length(svd).add(0.2)), float(0.18)).mul(sk);
streakMat.colorNode = vec3(1.0, 0.75, 0.35).mul(3.0);
streakMat.opacityNode = smoothstep(0.5, 0.1, abs(uv().y.sub(0.5))).mul(uv().x).mul(live);
const streaks = new THREE.Sprite(streakMat);
streaks.count = NSTREAK;
streaks.renderOrder = 9;

// smoke that belongs to the cloudscape
const NSMOKE = LOWQ ? 26 : 44;
const sh_ = hash11(fi.add(91.3));
const st = uBlowT.sub(0.15).sub(sh_.mul(0.6)).max(0.0);
const smokeMat = new THREE.SpriteNodeMaterial({ transparent: true, depthWrite: false });
smokeMat.positionNode = uBlowPos.add(rdir(71.7).mul(float(13.0).mul(sh_.mul(0.6).add(0.4)).mul(float(1.0).sub(exp(st.mul(-1.2)))))).add(vec3(st.mul(0.9), st.mul(2.4), st.mul(0.4)));
smokeMat.scaleNode = vec2(float(9.0).add(sh_.mul(10.0)).mul(st.mul(0.28).add(0.55)));
const smc = uv().mul(2.0).sub(1.0);
const smn = fbm4(vec3(smc.mul(1.6).add(sh_.mul(29.0)), st.mul(0.25).add(sh_.mul(5.0))));
smokeMat.colorNode = Fn(() => {
  const top = smoothstep(-0.8, 0.9, smc.y.add(smn.mul(0.7)));
  const dark = mix(vec3(0.07, 0.06, 0.07), uShade.mul(0.45), 0.55);
  const light = mix(uShade.mul(0.85), uLit, 0.3);
  const body = mix(dark, light, top.mul(0.8).add(smn.mul(0.25)).clamp(0.0, 1.0));
  const glow = vec3(1.0, 0.36, 0.08).mul(exp(st.mul(-1.1))).mul(float(1.0).sub(top)).mul(1.4);
  const sunRim = uSunCol.mul(smoothstep(0.55, 1.0, length(smc).add(smn.mul(0.3)))).mul(uGlow).mul(0.25);
  return vec4(fogMix(body.add(glow).add(sunRim)), 1.0);
})();
smokeMat.opacityNode = edgeWin(smc).mul(smoothstep(1.0, 0.25, length(smc.mul(vec2(1.0, 1.1))).add(smn.mul(0.55))).mul(smoothstep(0.0, 0.5, st)).mul(smoothstep(7.5, 2.5, uBlowT)).mul(0.5).mul(live).mul(smoothstep(4.0, 16.0, length(uBlowPos.add(rdir(71.7).mul(13.0)).sub(cameraPosition)))));
const smoke = new THREE.Sprite(smokeMat);
smoke.count = NSMOKE;
smoke.renderOrder = 7;

////////////////////////////////////////////////////////////////
//// FEATHERS
////////////////////////////////////////////////////////////////

// cut straight out of the phoenix's own texture atlases
const FT = [
  { w: 0.25, rect: [0.0, 0.03, 0.995, 0.13], rot: 1, size: [1.4, 7.5], tex: 1 },
  { w: 0.15, rect: [0.0, 0.0, 0.97, 0.11], rot: 1, size: [0.8, 7.0], tex: 0 },
  { w: 0.2, rect: [0.43, 0.52, 0.87, 1.0], rot: 0, size: [3.4, 3.8], tex: 1 },
  { w: 0.15, rect: [0.0, 0.18, 0.6, 0.5], rot: 0, size: [4.4, 2.4], tex: 1 },
  { w: 0.15, rect: [0.86, 0.71, 1.0, 0.99], rot: 0, size: [1.4, 2.9], tex: 1 },
  { w: 0.1, rect: [0.43, 0.36, 0.68, 0.57], rot: 0, size: [2.4, 2.0], tex: 0 }
];
const featherTex = [texture(new THREE.Texture()), texture(new THREE.Texture())];
const featherEmi = [texture(new THREE.Texture()), texture(new THREE.Texture())];
const ftPick = (w, key, n) => {
  let acc = 0, out = null;
  FT.forEach((f) => {
    const m = step(acc, w).mul(step(w, acc + f.w - 1e-4));
    const v = n === 1 ? float(typeof f[key] === 'number' ? f[key] : f[key][0]) : n === 2 ? vec2(f[key][0], f[key][1]) : vec4(...f[key]);
    out = out ? out.add(v.mul(m)) : v.mul(m);
    acc += f.w;
  });
  return out;
};

const NFEATHER = LOWQ ? 140 : 280;
const uBlowCam = uniform(new THREE.Vector3());
const featherGeo = new THREE.PlaneGeometry(1, 1, 2, 16);
featherGeo.translate(0, 0.5, 0);
const qh = vec4(hash11(fi.add(1.3)), hash11(fi.add(2.7)), hash11(fi.add(4.1)), hash11(fi.add(5.9)));
const qt = bt;
const qdir = normalize(vec3(qh.x, qh.y.mul(0.8).add(0.15), qh.z).sub(0.5));
const qg = smoothstep(float(GATHER0).add(qh.y.mul(1.5)), float(REBIRTH - 0.25), qt);
const qge = qg.mul(qg).mul(float(3.0).sub(qg.mul(2.0)));
const featherMat = new THREE.MeshBasicNodeMaterial({ side: THREE.DoubleSide });
featherMat.alphaTest = 0.5;
featherMat.positionNode = Fn(() => {
  const p = positionLocal;
  const sz = ftPick(qh.w, 'size', 2);
  const yy = p.y.mul(sz.y);
  const calm = float(1.0).sub(qge);
  const tn = (o) => vn(vec3(qt.mul(1.1), qh.x.mul(17.0).add(o), qh.z.mul(13.0)));
  const curl = qh.y.sub(0.5).mul(1.3).add(sin(qt.mul(3.1).add(qh.z.mul(9.0))).mul(0.7)).add(tn(3.0).mul(0.9)).mul(calm.mul(0.7).add(0.3));
  const wave = sin(p.y.mul(6.283).add(qt.mul(5.0)).add(qh.x.mul(9.0))).mul(0.18).mul(sz.x).mul(calm);
  const bx = p.x.mul(sz.x).add(curl.mul(p.y).mul(p.y).mul(sz.y).mul(0.35)).add(wave);
  const tw = curl.mul(p.y).mul(1.2);
  const bz = sin(qt.mul(4.5).add(qh.z.mul(9.0)).add(p.y.mul(4.0))).mul(0.12).mul(yy).mul(calm);
  const lp = vec3(bx.mul(cos(tw)).sub(bz.mul(sin(tw))), yy.sub(sz.y.mul(0.4)), bx.mul(sin(tw)).add(bz.mul(cos(tw))));
  const isCam = step(hash11(fi.add(8.8)), 0.1);
  const sc = float(0.65).add(qh.z.mul(0.5)).add(isCam.mul(0.4)).mul(float(1.0).sub(qge.mul(0.7))).mul(smoothstep(0.03, 0.25, qt)).mul(step(qt, REBIRTH));
  const yaw = qh.x.mul(6.283).add(qt.mul(qh.y.mul(1.6).add(0.6))).add(tn(7.0).mul(3.0)).add(qge.mul(12.0));
  const tilt = sin(qt.mul(qh.z.mul(1.4).add(1.3)).add(qh.w.mul(6.0))).mul(1.3).add(tn(11.0).mul(1.2)).add(1.3);
  const rollA = sin(qt.mul(qh.x.mul(1.2).add(1.1)).add(qh.y.mul(6.0))).mul(1.1).add(tn(5.0).mul(0.8));
  const rp = rotY(rotX(rotZ(lp.mul(sc), rollA), tilt), yaw);
  const turb = vec3(tn(21.0), tn(33.0).mul(0.7), tn(47.0)).mul(4.0).mul(smoothstep(0.2, 1.0, qt)).mul(calm);
  const drift = vec3(sin(qt.mul(0.7).add(qh.x.mul(6.283))).mul(2.5), qt.mul(-0.6), cos(qt.mul(0.6).add(qh.z.mul(6.283))).mul(2.5)).add(turb);
  const flung = uBlowPos.add(qdir.mul(float(8.0).add(qh.y.mul(24.0)).mul(float(1.0).sub(exp(qt.mul(-2.4)))))).add(drift);
  const toCam = uBlowCam.sub(uBlowPos);
  const side = normalize(cross(normalize(toCam), vec3(0, 1, 0)));
  const cs = smoothstep(0.0, float(1.1).add(qh.z.mul(0.9)), qt);
  const off = side.mul(sign(qh.x.sub(0.5)).mul(qh.z.mul(4.0).add(2.5))).add(vec3(0, qh.w.mul(4.0).sub(1.5), 0));
  const camPath = uBlowPos.add(toCam.mul(1.5).add(off.mul(1.6)).mul(cs.mul(cs))).add(turb.mul(0.3));
  const start = mix(flung, camPath, isCam);
  const sa = qg.mul(9.0).add(qh.x.mul(6.283));
  const swirl = vec3(cos(sa), 0.35, sin(sa)).mul(sin(qg.mul(3.14159)).mul(7.0));
  return mix(start, uBlowPos, qge).add(swirl).add(rp);
})();
const vSeed = varying(qh);
const vGlow = varying(qge);
const featherUV = Fn(() => {
  const r = ftPick(vSeed.w, 'rect', 4);
  const rot = ftPick(vSeed.w, 'rot', 1);
  const u = uv();
  const a = vec2(r.x.add(u.y.mul(r.z.sub(r.x))), r.y.add(u.x.mul(r.w.sub(r.y))));
  const b = vec2(r.x.add(u.x.mul(r.z.sub(r.x))), r.y.add(float(1.0).sub(u.y).mul(r.w.sub(r.y))));
  return mix(b, a, rot);
});
const fUV = featherUV();
const fSel = ftPick(vSeed.w, 'tex', 1);
const fBase = mix(featherTex[0].sample(fUV), featherTex[1].sample(fUV), fSel);
const fEmi = mix(featherEmi[0].sample(fUV).rgb, featherEmi[1].sample(fUV).rgb, fSel);
featherMat.colorNode = fBase.rgb.mul(vGlow.mul(1.5).add(0.9)).add(fEmi.mul(vGlow.mul(2.5).add(1.0)));
featherMat.opacityNode = fBase.a.mul(step(0.04, dot(fBase.rgb, vec3(0.3, 0.59, 0.11))));
const feathers = new THREE.InstancedMesh(featherGeo, featherMat, NFEATHER);
feathers.frustumCulled = false;
feathers.renderOrder = 6;

////////////////////////////////////////////////////////////////
//// BURN TRAIL
////////////////////////////////////////////////////////////////

const NTRAIL = LOWQ ? 90 : 160;
const trPos = new THREE.InstancedBufferAttribute(new Float32Array(NTRAIL * 4), 4);
const trAge = new THREE.InstancedBufferAttribute(new Float32Array(NTRAIL * 2), 2);
trPos.setUsage(THREE.DynamicDrawUsage); trAge.setUsage(THREE.DynamicDrawUsage);
const trPosA = instancedDynamicBufferAttribute(trPos, 'vec4');
const trAgeA = instancedDynamicBufferAttribute(trAge, 'vec2');
const trailMat = new THREE.SpriteNodeMaterial({ transparent: true, depthWrite: false });
trailMat.positionNode = trPosA.xyz;
trailMat.scaleNode = vec2(trPosA.w);
const tc = uv().mul(2.0).sub(1.0);
const tn4 = fbm4(vec3(tc.mul(vec2(1.3, 1.6)).add(trAgeA.y.mul(37.0)), trAgeA.x.mul(0.8).add(trAgeA.y.mul(9.0))));
trailMat.colorNode = Fn(() => {
  const top = smoothstep(-0.7, 0.9, tc.y.add(tn4.mul(0.6)));
  const sx = dot(normalize(uSunDir.xz), normalize(trPosA.xz.sub(uCamPos.xz)).negate());
  const sunSide = smoothstep(-1.0, 1.0, tc.x.mul(sx).add(tc.y));
  const soot = mix(vec3(0.08, 0.07, 0.08), uShade.mul(0.5), smoothstep(0.0, 0.6, trAgeA.x));
  const lit = mix(soot, mix(uShade, uLit, 0.55), top.mul(0.7).add(sunSide.mul(0.3)).add(tn4.mul(0.3)).mul(smoothstep(0.0, 0.5, trAgeA.x).mul(0.7).add(0.3)).clamp(0.0, 1.0));
  const rim = smoothstep(0.55, 0.95, length(tc.mul(vec2(1.0, 1.15))).add(tn4.mul(0.4))).mul(uGlow).mul(0.35);
  const hot = vec3(1.0, 0.42, 0.08).mul(smoothstep(0.25, 0.0, trAgeA.x)).mul(float(1.0).sub(top)).mul(2.2);
  return vec4(fogMix(lit.add(uSunCol.mul(rim).mul(0.5)).add(hot)), 1.0);
})();
trailMat.opacityNode = edgeWin(tc).mul(smoothstep(1.0, 0.4, length(tc.mul(vec2(1.0, 1.12))).add(tn4.mul(0.55))).mul(smoothstep(1.0, 0.55, trAgeA.x)).mul(0.88));
const trail = new THREE.Sprite(trailMat);
trail.count = NTRAIL;
trail.frustumCulled = false;
trail.renderOrder = 5;
scene.add(trail);
const TRL = Array.from({ length: NTRAIL }, () => ({ p: new THREE.Vector3(), v: new THREE.Vector3(), age: 1, life: 1, size: 0, seed: Math.random() }));
let trHead = 0;
const emitTrail = (p, v, size, life) => {
  const e = TRL[trHead]; trHead = (trHead + 1) % NTRAIL;
  e.p.copy(p); e.v.copy(v); e.age = 0; e.life = life; e.size = size; e.seed = Math.random();
};
const updateTrail = (dt) => {
  const pa = trPos.array, aa = trAge.array;
  for (let i = 0; i < NTRAIL; i++) {
    const e = TRL[i];
    e.age = Math.min(1, e.age + dt / e.life);
    e.v.multiplyScalar(Math.exp(-dt * 1.6)); e.v.y += dt * 1.1;
    e.p.addScaledVector(e.v, dt);
    const k = e.age;
    pa[i * 4] = e.p.x; pa[i * 4 + 1] = e.p.y; pa[i * 4 + 2] = e.p.z;
    pa[i * 4 + 3] = k < 1 ? e.size * Math.min(1, k * 6) * (0.35 + Math.sqrt(k) * 1.0) : 0;
    aa[i * 2] = k; aa[i * 2 + 1] = e.seed;
  }
  trPos.needsUpdate = true; trAge.needsUpdate = true;
};

const FX = [spots, fire, flash, ring, streaks, smoke, feathers];
const FX_HIDE = QS.has('nosmoke') ? [smoke] : [];
FX.forEach((o) => { o.frustumCulled = false; o.visible = false; scene.add(o); });

////////////////////////////////////////////////////////////////
//// LIGHTS
////////////////////////////////////////////////////////////////

const hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.0);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffffff, 1.0);
sun.castShadow = !LOWQ && !QS.has('noshadow');
sun.shadow.mapSize.set(1024, 1024);
{ const sc = sun.shadow.camera; sc.left = -9; sc.right = 9; sc.top = 9; sc.bottom = -9; sc.near = 1; sc.far = 60; }
sun.shadow.bias = -0.0015; sun.shadow.normalBias = 0.05;
renderer.shadowMap.enabled = true;
scene.add(sun);
scene.add(sun.target);

////////////////////////////////////////////////////////////////
//// PHOENIX
////////////////////////////////////////////////////////////////

const bird = new THREE.Group();
scene.add(bird);
let mixer = null, model = null;
const BONES = {};
const b64 = window.GLB_B64;
const bin = atob(b64);
const buf = new Uint8Array(bin.length);
for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
const bitmapTextures = (parser) => ({
  name: 'bitmapTextures',
  loadTexture: async (index) => {
    const def = parser.json.textures[index];
    const img = parser.json.images[def.source];
    if (img.bufferView === undefined) return null;
    const view = await parser.getDependency('bufferView', img.bufferView);
    const bmp = await createImageBitmap(new Blob([view], { type: img.mimeType || 'image/png' }), { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
    const tex = new THREE.Texture(bmp);
    tex.flipY = false;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.anisotropy = 4;
    tex.needsUpdate = true;
    return tex;
  }
});
const gltf = await new GLTFLoader().register(bitmapTextures).parseAsync(buf.buffer, '');
model = gltf.scene;
model.updateMatrixWorld(true);
['b_Head_06', 'B_Pelvis_028', 'B_Spine_02', 'B_Tail_5_034', 'B_Tail_3_032', 'B_Left_Wing_9_069', 'B_Right_Wing_9_068', 'B_Left_Wing_5_078', 'B_Right_Wing_5_083']
  .forEach((n) => { BONES[n] = model.getObjectByName(n); });
const wp = (n) => BONES[n].getWorldPosition(new THREE.Vector3());
{
  const head = wp('b_Head_06'), pel = wp('B_Pelvis_028'), sp = wp('B_Spine_02');
  const far = (side) => {
    let best = null, bd = -1;
    model.traverse((o) => {
      if (!o.isBone || !o.name.includes(side + '_Wing')) return;
      const p = o.getWorldPosition(new THREE.Vector3()), d = p.distanceTo(pel);
      if (d > bd) { bd = d; best = o; }
    });
    return best;
  };
  BONES.LTIP = far('Left'); BONES.RTIP = far('Right');
  const lw = BONES.LTIP.getWorldPosition(new THREE.Vector3()), rw = BONES.RTIP.getWorldPosition(new THREE.Vector3());
  const fwd = head.clone().sub(pel).setY(0).normalize();
  const left = lw.clone().sub(rw);
  left.addScaledVector(fwd, -left.dot(fwd)).normalize();
  const up = new THREE.Vector3().crossVectors(fwd, left).normalize();
  const basis = new THREE.Matrix4().makeBasis(left, up, fwd);
  const bb = new THREE.Box3().setFromObject(model, true);
  const ext = bb.getSize(new THREE.Vector3());
  const len = Math.abs(ext.x * fwd.x) + Math.abs(ext.y * fwd.y) + Math.abs(ext.z * fwd.z);
  const fix = new THREE.Group();
  const s = P.length / len;
  fix.quaternion.setFromRotationMatrix(basis).invert();
  fix.scale.setScalar(s);
  fix.add(model);
  const c = sp.clone().lerp(head, 0.15).applyQuaternion(fix.quaternion).multiplyScalar(s);
  fix.position.copy(c).negate();
  bird.add(fix);
}
model.traverse((o) => {
  if (!o.isMesh) return;
  o.frustumCulled = false;
  const m = o.material;
  m.transparent = false;
  m.alphaTest = 0.4;
  m.depthWrite = true;
  m.side = THREE.DoubleSide;
  m.metalness = 0;
  m.roughness = 0.7;
  m.emissiveIntensity = P.glow;
  if (!m.map) console.warn('phoenix: base texture missing on', o.name);
  // lit feathers: sun + sky, soft sheen, light bleeding through from behind, only a faint inner fire
  const nat = new THREE.MeshPhysicalNodeMaterial({ map: m.map, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.6, metalness: 0 });
  nat.bumpMap = m.map; nat.bumpScale = 1.4;
  nat.sheen = 0.55; nat.sheenRoughness = 0.5; nat.sheenColor = new THREE.Color(1.0, 0.52, 0.22);
  const back = max(dot(normalWorld.negate(), uSunDir), 0.0);
  nat.emissiveNode = texture(m.emissiveMap).rgb.mul(uBirdGlow).add(texture(m.map).rgb.mul(uSunLight).mul(back).mul(0.2));
  o.castShadow = true; o.receiveShadow = true;
  o.userData.mats = { glow: m, real: nat };
});
let skin = QS.get('skin') === 'real' ? 'real' : 'glow';
const setSkin = (k) => {
  skin = k;
  model.traverse((o) => { if (o.isMesh) o.material = o.userData.mats[k]; });
};
setSkin(skin);
model.traverse((o) => {
  if (!o.isMesh) return;
  const m = o.userData.mats.glow;
  const k = /01b/.test(m.name) ? 1 : 0;
  if (m.map) featherTex[k].value = m.map;
  if (m.emissiveMap) featherEmi[k].value = m.emissiveMap;
});
mixer = new THREE.AnimationMixer(model);
const flapAction = mixer.clipAction(gltf.animations[0]);
flapAction.play();

////////////////////////////////////////////////////////////////
//// AUDIO
////////////////////////////////////////////////////////////////

const Audio = (() => {
  let ctx = null, out, verb, wind, windBp, on = true, chord = 0, nextBell = 0;
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
  const CHORDS = [[50, 57, 64, 66, 69], [47, 54, 62, 64, 69], [43, 50, 59, 62, 66], [45, 52, 57, 61, 64]];
  const PENTA = [74, 76, 78, 81, 83, 86, 88, 90];
  const ir = (sec) => {
    const len = Math.floor(ctx.sampleRate * sec), b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = b.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
    return b;
  };
  const noiseBuf = () => {
    const b = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  };
  const padChord = () => {
    const now = ctx.currentTime, notes = CHORDS[chord % CHORDS.length]; chord++;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1100; lp.Q.value = 0.3;
    const g = ctx.createGain(); g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.05, now + 3.5); g.gain.setTargetAtTime(0, now + 7.5, 1.6);
    lp.connect(g); g.connect(out); g.connect(verb);
    notes.forEach((m, i) => {
      [-6, 6].forEach((dt) => {
        const o = ctx.createOscillator(); o.type = i < 2 ? 'sine' : 'triangle';
        o.frequency.value = hz(m); o.detune.value = dt + (Math.random() - 0.5) * 4;
        const og = ctx.createGain(); og.gain.value = (i < 2 ? 0.4 : 0.14) * 0.5;
        o.connect(og); og.connect(lp); o.start(now); o.stop(now + 14);
      });
    });
  };
  const bell = () => {
    const now = ctx.currentTime, f = hz(PENTA[Math.floor(Math.random() * PENTA.length)]);
    const pn = ctx.createStereoPanner(); pn.pan.value = Math.random() * 1.6 - 0.8;
    const g = ctx.createGain(); g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.035, now + 0.01); g.gain.exponentialRampToValueAtTime(0.0005, now + 3.0);
    [1, 2.76, 5.4].forEach((m, i) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f * m;
      const og = ctx.createGain(); og.gain.value = [1, 0.25, 0.08][i];
      o.connect(og); og.connect(g); o.start(now); o.stop(now + 3.2);
    });
    g.connect(pn); pn.connect(out); pn.connect(verb);
  };
  const start = () => {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    out = ctx.createGain(); out.gain.value = 0; out.connect(ctx.destination);
    verb = ctx.createConvolver(); verb.buffer = ir(5.0);
    const vg = ctx.createGain(); vg.gain.value = 0.7; verb.connect(vg); vg.connect(out);
    const ns = ctx.createBufferSource(); ns.buffer = noiseBuf(); ns.loop = true;
    windBp = ctx.createBiquadFilter(); windBp.type = 'bandpass'; windBp.frequency.value = 500; windBp.Q.value = 0.8;
    wind = ctx.createGain(); wind.gain.value = 0.02;
    ns.connect(windBp); windBp.connect(wind); wind.connect(out); wind.connect(verb); ns.start();
    padChord();
    setInterval(() => { if (ctx.state === 'running') padChord(); }, 8000);
    out.gain.setTargetAtTime(on ? 0.85 : 0, ctx.currentTime, 1.5);
  };
  const whoosh = (amt) => {
    if (!ctx || !on) return;
    const now = ctx.currentTime;
    const ns = ctx.createBufferSource(); ns.buffer = noiseBuf();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.4;
    bp.frequency.setValueAtTime(260, now); bp.frequency.exponentialRampToValueAtTime(900, now + 0.18); bp.frequency.exponentialRampToValueAtTime(180, now + 0.7);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.12 * amt, now + 0.12); g.gain.exponentialRampToValueAtTime(0.0008, now + 0.8);
    ns.connect(bp); bp.connect(g); g.connect(out); g.connect(verb); ns.start(now); ns.stop(now + 0.9);
  };
  const cry = (pm = 1) => {
    if (!ctx || !on) return;
    const now = ctx.currentTime;
    const g = ctx.createGain(); g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.09, now + 0.08); g.gain.setTargetAtTime(0.05, now + 0.3, 0.2); g.gain.exponentialRampToValueAtTime(0.0005, now + 1.9);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = 0.9;
    const vib = ctx.createOscillator(); vib.frequency.value = 7.5;
    const vg = ctx.createGain(); vg.gain.value = 28; vib.connect(vg);
    [1, 1.5, 2.01].forEach((m, i) => {
      const o = ctx.createOscillator(); o.type = i ? 'sine' : 'sawtooth';
      o.frequency.setValueAtTime(880 * m * pm, now);
      o.frequency.exponentialRampToValueAtTime(1480 * m * pm, now + 0.22);
      o.frequency.exponentialRampToValueAtTime(1050 * m * pm * (pm < 1 ? 0.7 : 1), now + 1.6);
      vg.connect(o.frequency);
      const og = ctx.createGain(); og.gain.value = [0.35, 0.5, 0.25][i];
      o.connect(og); og.connect(bp); o.start(now); o.stop(now + 2.0);
    });
    vib.start(now); vib.stop(now + 2.0);
    bp.connect(g); g.connect(out); g.connect(verb);
    [0, 0.12, 0.24].forEach((d) => setTimeout(bell, d * 1000 + 250));
  };
  const tick = (t, speed, bank) => {
    if (!ctx) return;
    windBp.frequency.setTargetAtTime(380 + speed * 22 + Math.abs(bank) * 500, ctx.currentTime, 0.4);
    wind.gain.setTargetAtTime(0.012 + Math.abs(bank) * 0.03, ctx.currentTime, 0.4);
    if (t > nextBell && on) { bell(); nextBell = t + 2.5 + Math.random() * 5; }
  };
  const boom = () => {
    if (!ctx || !on) return;
    const now = ctx.currentTime;
    const ns = ctx.createBufferSource(); ns.buffer = noiseBuf(); ns.loop = true;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 0.7;
    lp.frequency.setValueAtTime(2400, now); lp.frequency.exponentialRampToValueAtTime(90, now + 3.2);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.55, now + 0.03); g.gain.exponentialRampToValueAtTime(0.001, now + 4.0);
    ns.connect(lp); lp.connect(g); g.connect(out); g.connect(verb); ns.start(now); ns.stop(now + 4.2);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(90, now); o.frequency.exponentialRampToValueAtTime(28, now + 2.2);
    const og = ctx.createGain(); og.gain.setValueAtTime(0.6, now); og.gain.exponentialRampToValueAtTime(0.001, now + 2.6);
    o.connect(og); og.connect(out); o.start(now); o.stop(now + 2.7);
    const nb = noiseBuf();
    for (let i = 0; i < 70; i++) {
      const tt = now + 0.05 + Math.pow(Math.random(), 1.6) * 2.8;
      const c = ctx.createBufferSource(); c.buffer = nb;
      const hp = ctx.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = 1500 + Math.random() * 4000; hp.Q.value = 2;
      const cg = ctx.createGain(); cg.gain.setValueAtTime(0.06 * (1 - (tt - now) / 3.2), tt); cg.gain.exponentialRampToValueAtTime(0.0005, tt + 0.03);
      const pn = ctx.createStereoPanner(); pn.pan.value = Math.random() * 1.6 - 0.8;
      c.connect(hp); hp.connect(cg); cg.connect(pn); pn.connect(out); pn.connect(verb);
      c.start(tt, Math.random() * 1.5, 0.05);
    }
  };
  const crack = () => {
    if (!ctx || !on) return;
    const now = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'square';
    o.frequency.setValueAtTime(420, now); o.frequency.exponentialRampToValueAtTime(40, now + 0.35);
    const og = ctx.createGain(); og.gain.setValueAtTime(0.22, now); og.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1800;
    o.connect(lp); lp.connect(og); og.connect(out); og.connect(verb); o.start(now); o.stop(now + 0.45);
  };
  const gather = () => {
    if (!ctx || !on) return;
    const now = ctx.currentTime;
    const ns = ctx.createBufferSource(); ns.buffer = noiseBuf(); ns.loop = true;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 4;
    bp.frequency.setValueAtTime(300, now); bp.frequency.exponentialRampToValueAtTime(5000, now + 2.8);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.09, now + 2.6); g.gain.linearRampToValueAtTime(0, now + 3.0);
    ns.connect(bp); bp.connect(g); g.connect(out); g.connect(verb); ns.start(now); ns.stop(now + 3.1);
    for (let i = 0; i < 12; i++) setTimeout(bell, 2800 * (1 - Math.pow(1 - i / 12, 0.6)));
  };
  const rise = () => {
    if (!ctx || !on) return;
    const now = ctx.currentTime;
    [0, 0.09, 0.18, 0.27, 0.36, 0.45].forEach((d, i) => setTimeout(bell, d * 1000));
    const g = ctx.createGain(); g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.06, now + 0.8); g.gain.exponentialRampToValueAtTime(0.001, now + 3.0);
    [62, 69, 74, 78].forEach((m) => { const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.setValueAtTime(hz(m - 12), now); o.frequency.exponentialRampToValueAtTime(hz(m), now + 0.9); o.connect(g); o.start(now); o.stop(now + 3.1); });
    g.connect(out); g.connect(verb);
    setTimeout(cry, 500);
  };
  const setOn = (v) => { on = v; if (ctx) out.gain.setTargetAtTime(v ? 0.85 : 0, ctx.currentTime, 0.4); };
  return { start, whoosh, cry, boom, crack, gather, rise, tick, setOn, resume: () => ctx && ctx.resume() };
})();

const kick = () => {
  Audio.start(); Audio.resume();
  ['pointerdown', 'keydown', 'touchstart'].forEach(e => window.removeEventListener(e, kick));
};
['pointerdown', 'keydown', 'touchstart'].forEach(e => window.addEventListener(e, kick, { passive: true }));
document.addEventListener('visibilitychange', () => { if (!document.hidden) Audio.resume(); });

////////////////////////////////////////////////////////////////
//// CAMERA
////////////////////////////////////////////////////////////////

const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 80;

let view = QS.get('view') || 'chase';
const look = { yaw: 0, pitch: 0, down: false, x: 0, y: 0, x0: 0, y0: 0, t0: 0, idle: 0 };
const cv = renderer.domElement;
if (QS.has('yaw')) { look.yaw = parseFloat(QS.get('yaw')); look.pitch = parseFloat(QS.get('pitch')) || 0; look.idle = -1e9; }
let callPending = false, blowPending = false, blowAt = parseFloat(QS.get('blow')) || -1;
cv.addEventListener('pointerdown', (e) => {
  look.down = true; look.x = look.x0 = e.clientX; look.y = look.y0 = e.clientY; look.t0 = performance.now();
  if (view !== 'orbit') cv.setPointerCapture(e.pointerId);
});
cv.addEventListener('pointermove', (e) => {
  if (!look.down || view === 'orbit') return;
  look.yaw -= (e.clientX - look.x) * 0.005;
  look.pitch = Math.max(-0.9, Math.min(1.1, look.pitch + (e.clientY - look.y) * 0.004));
  look.x = e.clientX; look.y = e.clientY; look.idle = 0;
});
const up_ = (e) => {
  if (look.down && Math.hypot(e.clientX - look.x0, e.clientY - look.y0) < 6 && performance.now() - look.t0 < 350) callPending = true;
  look.down = false;
};
cv.addEventListener('pointerup', up_);
cv.addEventListener('pointercancel', () => { look.down = false; });

const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
const shot = { pos: new THREE.Vector3(), ttl: 0 };
const pickShot = (u, birdPos) => {
  const ahead = PATH.getPointAt((u + 0.035 + Math.random() * 0.02) % 1);
  const tg = PATH.getTangentAt((u + 0.045) % 1);
  const side = new THREE.Vector3(-tg.z, 0, tg.x).normalize().multiplyScalar((Math.random() < 0.5 ? -1 : 1) * (10 + Math.random() * 16));
  shot.pos.copy(ahead).add(side).add(new THREE.Vector3(0, -3 + Math.random() * 9, 0));
  if (shot.pos.y < SEA_Y[2] + 4) shot.pos.y = SEA_Y[2] + 4;
  shot.ttl = 9;
  camPos.copy(shot.pos);
};
const setView = (v) => {
  view = v;
  controls.enabled = v === 'orbit';
  if (v === 'orbit') { controls.target.copy(bird.position); camera.position.copy(camPos); controls.update(); }
  if (v === 'flyby') shot.ttl = 0;
};

////////////////////////////////////////////////////////////////
//// PICKER
////////////////////////////////////////////////////////////////

const picker = document.getElementById('picker');
const press = (attr, key) => picker.querySelectorAll(`button[data-${attr}]`).forEach(b => b.setAttribute('aria-pressed', b.dataset[attr] === key ? 'true' : 'false'));
let skyKey = QS.get('sky') && SKIES[QS.get('sky')] ? QS.get('sky') : 'dawn';
picker.querySelectorAll('button[data-view]').forEach(b => b.addEventListener('click', () => { setView(b.dataset.view); press('view', b.dataset.view); }));
picker.querySelectorAll('button[data-sky]').forEach(b => b.addEventListener('click', () => { skyKey = b.dataset.sky; press('sky', skyKey); }));
picker.querySelectorAll('button[data-skin]').forEach(b => b.addEventListener('click', () => { setSkin(b.dataset.skin); press('skin', b.dataset.skin); }));
press('view', view); press('sky', skyKey); press('skin', skin);
const blowBtn = picker.querySelector('button[data-blow]');
blowBtn.addEventListener('click', () => blowPending = true);
const sndBtn = picker.querySelector('button[data-snd]');

////////////////////////////////////////////////////////////////
//// POST
////////////////////////////////////////////////////////////////

const pipeline = new THREE.RenderPipeline(renderer);
const scenePass = pass(scene, camera);
const sceneCol = scenePass.getTextureNode('output');
const bloomPass = bloom(sceneCol, P.bloom, 0.55, P.bloomThreshold);
const vignette = Fn(() => {
  const asp = screenSize.x.div(screenSize.y);
  const d = screenUV.sub(0.5);
  const col = sceneCol.rgb.add(bloomPass.rgb);
  const vig = smoothstep(0.3, 0.95, length(d.mul(vec2(asp.mul(0.85), 1.0))));
  const tint = mix(vec3(1.0), uShade.mul(0.6), 0.5);
  return vec4(mix(col, col.mul(tint).mul(0.35), vig.mul(0.75)), 1.0);
})();
pipeline.outputNode = vignette;

////////////////////////////////////////////////////////////////
//// UI
////////////////////////////////////////////////////////////////

if (QS.has('dev')) try {
  const { Pane } = await import('https://cdn.jsdelivr.net/npm/tweakpane@4.0.5/dist/tweakpane.min.js');
  const pane = new Pane({ title: BUILD, expanded: false });
  pane.addBinding(P, 'speed', { min: 0, max: 40 });
  pane.addBinding(P, 'flap', { min: 0.2, max: 2.5 });
  pane.addBinding(P, 'glow', { min: 0, max: 5 });
  pane.addBinding(P, 'embers', { min: 0, max: 2 });
  pane.addBinding(P, 'bloom', { min: 0, max: 2 }).on('change', e => bloomPass.strength.value = e.value);
  pane.addBinding(P, 'bloomThreshold', { min: 0.1, max: 1.5 });
  pane.addBinding(P, 'exposure', { min: 0.3, max: 2.5 });
  pane.addBinding(P, 'natGlow', { min: 0, max: 3 });
} catch (e) {}

////////////////////////////////////////////////////////////////
//// LOOP
////////////////////////////////////////////////////////////////

let blowT = -1, camBack = 0, clicks = Math.min(2, parseInt(QS.get('clicks')) || 0), hitStop = 0, gathered = false;
let u = 0.02, roll = 0, prevYaw = null, wingH = 0, wingV = 0, sortT = 0, callT = 0;
const fwd = new THREE.Vector3(), left = new THREE.Vector3(), upv = new THREE.Vector3(), birdPrev = new THREE.Vector3();
const cOff = new THREE.Vector3(), cSide = new THREE.Vector3();
const basis = new THREE.Matrix4(), Y = new THREE.Vector3(0, 1, 0), tv = new THREE.Vector3(), tv2 = new THREE.Vector3(), rv = new THREE.Vector3();
const lerpCol = (u_, hex, k) => u_.value.lerp(tmpC.set(hex), k);

let vw = 0, vh = 0, cloudK = 1;
const syncSize = () => {
  const w = Math.max(2, window.innerWidth), h = Math.max(2, window.innerHeight);
  if (w === vw && h === vh) return;
  vw = w; vh = h;
  camera.aspect = w / h;
  camera.fov = w / h < 1 ? 68 : 55;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  const cw = Math.max(64, Math.round(w * CLOUD_SCALE * cloudK)), ch = Math.max(64, Math.round(h * CLOUD_SCALE * cloudK));
  rtFull.setSize(cw, ch); rtNear.setSize(Math.max(32, cw >> 1), Math.max(32, ch >> 1));
  uCloudTexel.value.set(1 / cw, 1 / ch);
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
  if (Math.abs(next - pr) > 0.001) { pr = next; renderer.setPixelRatio(pr); cloudK = Math.max(0.55, pr / PR_MAX); vw = 0; syncSize(); }
};

const step_ = (dt, t) => {
  uTime.value = t;

  // sky: ease the light source, rebake the atmosphere while it moves
  const S = SKIES[skyKey], kc = SKY.key === '' ? 1 : 1 - Math.exp(-dt * 1.2);
  if (SKY.key !== skyKey || SKY.busy) {
    SKY.key = skyKey;
    SKY.dir.lerp(tv.set(...S.sunDir).normalize(), kc).normalize();
    SKY.E += (S.E - SKY.E) * kc; SKY.tint.lerp(tv.set(...S.tint), kc);
    SKY.exposure += (S.exposure - SKY.exposure) * kc; SKY.stars += (S.stars - SKY.stars) * kc;
    SKY.busy = SKY.dir.distanceTo(tv.set(...S.sunDir).normalize()) > 1e-3 || Math.abs(S.E - SKY.E) > 1e-3 * S.E || Math.abs(S.exposure - SKY.exposure) > 1e-3;
    bakeSky();
    uStars.value = SKY.stars;
    hemi.color.setRGB(ENV.amb.x * Math.PI, ENV.amb.y * Math.PI, ENV.amb.z * Math.PI);
    hemi.intensity = 0.8;
    const up = Math.max(0, SKY.dir.y);
    hemi.groundColor.setRGB(0.7 * (ENV.sun.x * up + hemi.color.r), 0.7 * (ENV.sun.y * up + hemi.color.g), 0.7 * (ENV.sun.z * up + hemi.color.b));
    sun.color.setRGB(ENV.sun.x, ENV.sun.y, ENV.sun.z);
    const hz = tv.copy(ENV.haze).multiplyScalar(SKY.exposure * 0.9);
    document.body.style.background = '#' + tmpC.setRGB(hz.x / (1 + hz.x), hz.y / (1 + hz.y), hz.z / (1 + hz.z)).getHexString(THREE.SRGBColorSpace);
  }
  renderer.toneMappingExposure = P.exposure * SKY.exposure;
  bloomPass.threshold.value = P.bloomThreshold;

  // flight
  callT = Math.max(0, callT - dt);
  if (blowAt >= 0 && t >= blowAt) { blowAt = -1; blowPending = true; }
  if (callPending && bird.visible && blowT < 0) {
    callPending = false;
    clicks++;
    if (clicks >= 3) blowPending = true;
    else {
      callT = 1.6; Audio.cry(clicks === 2 ? 0.82 : 1);
      for (let i = 0; i < 160; i++) {
        rv.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().multiplyScalar(4 + Math.random() * 8);
        emit(bird.position, rv.addScaledVector(fwd, P.speed * 0.6), 0.3 + Math.random() * 0.5, 1.0 + Math.random() * 1.5);
      }
    }
  }
  callPending = false;
  if (blowPending) {
    blowPending = false;
    if (blowT < 0) {
      blowT = 0; hitStop = 0.12; gathered = false;
      uBlowPos.value.copy(bird.position);
      uBlowCam.value.copy(camera.position);
      bird.visible = false;
      FX.forEach((o) => { o.visible = !FX_HIDE.includes(o); });
      blowBtn.setAttribute('aria-pressed', 'true');
      Audio.crack(); Audio.boom();
      for (let i = 0; i < 420; i++) {
        rv.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().multiplyScalar(6 + Math.random() * 26);
        emit(tv2.copy(bird.position).add(tv.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(6)), rv, 0.15 + Math.random() * 0.45, 1.0 + Math.random() * 2.2);
      }
    }
  }
  if (blowT >= 0) {
    blowT += dt;
    if (!gathered && blowT > GATHER0) { gathered = true; Audio.gather(); }
    if (!bird.visible && blowT > REBIRTH) {
      bird.visible = true; callT = 1.6; clicks = 0; Audio.rise();
      for (let i = 0; i < 260; i++) {
        const a = Math.random() * Math.PI * 2, r = 4 + Math.random() * 5;
        tv2.set(Math.cos(a) * r, (Math.random() - 0.5) * 3, Math.sin(a) * r).add(uBlowPos.value);
        rv.set(Math.cos(a), 0.2, Math.sin(a)).multiplyScalar(14 + Math.random() * 10);
        emit(tv2, rv, 0.3 + Math.random() * 0.5, 0.8 + Math.random() * 1.0);
      }
    }
    if (blowT > BLOW_END) { blowT = -1; FX.forEach((o) => { o.visible = false; }); blowBtn.setAttribute('aria-pressed', 'false'); }
  }
  uBlowT.value = blowT < 0 ? -10 : blowT;
  if (blowT >= 0) { ring.position.copy(uBlowPos.value); ring.scale.setScalar(2 + 32 * (1 - Math.exp(-blowT * 3.2))); }
  const reborn = blowT > REBIRTH ? Math.min(1, (blowT - REBIRTH) / 1.4) : 1;
  const eb = 1 + 2.70158 * Math.pow(reborn - 1, 3) + 1.70158 * Math.pow(reborn - 1, 2);
  bird.scale.setScalar(Math.max(0.02, eb));
  const frozen = blowT >= 0 && blowT < REBIRTH;
  const stageMul = [1, 1.4, 1.85][Math.min(clicks, 2)];
  const spd = frozen ? 0 : P.speed * stageMul * (1 + callT * 0.5) * (blowT > REBIRTH ? 0.3 + 0.7 * reborn : 1);
  const boomF = blowT >= 0 ? Math.exp(-blowT * 2.2) : 0;
  bloomPass.strength.value = P.bloom * (1 + boomF * 1.2);
  u = (u + (spd * dt) / PATH_LEN) % 1;
  const pos = PATH.getPointAt(u);
  PATH.getTangentAt(u, fwd);
  const yaw = Math.atan2(fwd.x, fwd.z);
  let dy = prevYaw === null ? 0 : yaw - prevYaw;
  dy = Math.atan2(Math.sin(dy), Math.cos(dy));
  prevYaw = yaw;
  const targetRoll = Math.max(-0.75, Math.min(0.75, -(dy / Math.max(dt, 1e-3)) * 2.4));
  roll += (targetRoll - roll) * (1 - Math.exp(-dt * 2.0));
  pos.y += Math.sin(t * 1.9) * 0.35 - (1 - reborn) * 7;
  birdPrev.copy(bird.position);
  bird.position.copy(pos);
  left.crossVectors(Y, fwd).normalize();
  upv.crossVectors(fwd, left).normalize();
  left.applyAxisAngle(fwd, roll); upv.applyAxisAngle(fwd, roll);
  basis.makeBasis(left, upv, fwd);
  bird.quaternion.setFromRotationMatrix(basis);
  bird.updateMatrixWorld(true);

  mixer.timeScale = P.flap * (1 + callT * 0.6) * (1 + Math.max(0, fwd.y) * 1.5);
  mixer.update(dt);
  const burn = clicks === 2 ? 0.6 + 0.4 * Math.sin(t * 23) * Math.sin(t * 7.3) : 0;
  if (skin === 'glow') model.traverse((o) => { if (o.isMesh) o.material.emissiveIntensity = P.glow * (1 + callT * 1.2 + burn); });
  uBirdGlow.value = P.natGlow * (1 + callT * 2.0 + burn * 2.5);

  // wing beat
  model.updateMatrixWorld(true);
  const tip = BONES.LTIP.getWorldPosition(tv).sub(bird.position).dot(upv);
  const v = (tip - wingH) / Math.max(dt, 1e-3);
  if (wingV > 0 && v <= 0 && bird.visible) {
    Audio.whoosh(1 + callT);
    for (const n of ['LTIP', 'RTIP']) {
      BONES[n].getWorldPosition(tv2);
      for (let i = 0; i < 6; i++) emit(tv2, rv.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(2.5).addScaledVector(upv, -1.5), 0.25 + Math.random() * 0.3, 0.8 + Math.random());
    }
  }
  wingH = tip; wingV = v;

  // ember trail
  const rate = bird.visible ? (LOWQ ? 70 : 140) * (1 + callT * 3) * dt : 0;
  for (let i = 0; i < rate; i++) {
    const src = Math.random();
    const bn = src < 0.5 ? 'B_Tail_5_034' : src < 0.75 ? 'B_Tail_3_032' : src < 0.875 ? 'B_Left_Wing_5_078' : 'B_Right_Wing_5_083';
    BONES[bn].getWorldPosition(tv2);
    tv2.addScaledVector(fwd, -Math.random() * spd * dt);
    emit(tv2, rv.set(Math.random() - 0.5, Math.random() - 0.3, Math.random() - 0.5).multiplyScalar(1.6).addScaledVector(fwd, spd * 0.15), 0.15 + Math.random() * 0.35, 1.2 + Math.random() * 1.6);
  }
  if (clicks === 2 && bird.visible) {
    const n = (LOWQ ? 9 : 14) * dt;
    for (let i = 0; i < n + Math.random(); i++) {
      const bn = ['B_Spine_02', 'B_Pelvis_028', 'B_Left_Wing_5_078', 'B_Right_Wing_5_083', 'B_Tail_3_032'][Math.floor(Math.random() * 5)];
      BONES[bn].getWorldPosition(tv2);
      emitTrail(tv2, rv.set(Math.random() - 0.5, Math.random() * 0.6, Math.random() - 0.5).multiplyScalar(2).addScaledVector(fwd, spd * 0.05), 2.4 + Math.random() * 2.6, 2.6 + Math.random() * 1.6);
    }
    for (let i = 0; i < 140 * dt; i++) {
      const bn = ['B_Spine_02', 'B_Pelvis_028', 'B_Left_Wing_5_078', 'B_Right_Wing_5_083', 'b_Head_06'][Math.floor(Math.random() * 5)];
      BONES[bn].getWorldPosition(tv2);
      emit(tv2, rv.set(Math.random() - 0.5, 1.5 + Math.random() * 2, Math.random() - 0.5).addScaledVector(fwd, spd * 0.4), 0.5 + Math.random() * 0.6, 0.4 + Math.random() * 0.5);
    }
  }
  updateTrail(dt);
  updateEmbers(dt);

  // camera
  if (!look.down) { look.idle += dt; if (look.idle > 2.5) { const k = 1 - Math.exp(-dt * 0.8); look.yaw *= 1 - k; look.pitch *= 1 - k; } }
  const wantBack = blowT >= 0 && blowT < REBIRTH + 1.0 ? 1 : 0;
  camBack += (wantBack - camBack) * (1 - Math.exp(-dt * (wantBack ? 5.0 : 1.2)));
  const shake = boomF * 1.6;
  if (view === 'chase') {
    const off = cOff.copy(fwd).setY(0).normalize().multiplyScalar(-15 - camBack * 30).add(tv2.set(0, 4.2 + camBack * 9, 0)).addScaledVector(cSide.copy(left).setY(0).normalize(), Math.sin(t * 0.17) * 4);
    off.applyAxisAngle(Y, look.yaw + camBack * Math.max(0, blowT) * 0.1);
    off.applyAxisAngle(tv2.crossVectors(off, Y).normalize(), -look.pitch * 0.6);
    const want = tv.copy(bird.position).add(off);
    if (want.y < SEA_Y[2] + 3) want.y = SEA_Y[2] + 3;
    camPos.lerp(want, 1 - Math.exp(-dt * (wantBack ? 5.0 : 2.6)));
    camLook.lerp(tv2.copy(bird.position).addScaledVector(fwd, 5), 1 - Math.exp(-dt * 6));
    camera.position.copy(camPos);
    camera.up.set(0, 1, 0);
    camera.lookAt(camLook);
    camera.rotateZ(-roll * 0.18);
  } else if (view === 'orbit') {
    camera.position.add(tv.copy(bird.position).sub(birdPrev));
    controls.target.copy(bird.position);
    controls.update();
    camPos.copy(camera.position);
    camLook.copy(bird.position);
  } else {
    shot.ttl -= dt;
    const d = camPos.distanceTo(bird.position);
    if (shot.ttl <= 0 || (d > 75 && shot.ttl < 6)) pickShot(u, bird.position);
    camPos.y += Math.sin(t * 0.3) * 0.01;
    camLook.lerp(bird.position, 1 - Math.exp(-dt * 4));
    camera.position.copy(camPos);
    camera.up.set(0, 1, 0);
    camera.lookAt(camLook);
  }
  if (shake > 0.01 && view !== 'orbit') camera.position.add(tv.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(shake));
  if (QS.has('dbgside')) { camera.position.copy(bird.position).addScaledVector(left, parseFloat(QS.get('dbgside')) || 9).addScaledVector(upv, 2); camera.lookAt(bird.position); }
  if (QS.has('dbgsun')) camera.lookAt(tv.copy(camera.position).addScaledVector(uSunDir.value, 50).add(tv2.set(0, -6, 0)));
  uCamPos.value.copy(camera.position);
  sky.position.copy(camera.position);
  sun.position.copy(bird.position).addScaledVector(uSunDir.value, 30);
  sun.target.position.copy(bird.position);

  Audio.tick(t, spd, roll);
};

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
camPos.copy(PATH.getPointAt(0.0)).add(new THREE.Vector3(0, 6, 0));
camLook.copy(PATH.getPointAt(0.02));
setView(view);
FX.forEach((o) => { o.visible = true; });
try { await renderer.compileAsync(scene, camera); } catch (e) {}
FX.forEach((o) => { o.visible = false; });
const WARP = parseFloat(QS.get('warp')) || 0;
for (let i = 0; i < WARP * 30; i++) step_(1 / 30, i / 30);
let firstFrame = true, lastNow = NaN, simT = WARP;
renderer.setAnimationLoop((ts) => {
  const now = performance.now() / 1000;
  const raw = Number.isFinite(lastNow) ? Math.max(0, now - lastNow) : 0;
  lastNow = now;
  syncSize();
  adapt(raw);
  let dt = Math.min(raw, 0.05) * (reduced ? 0.4 : 1);
  if (hitStop > 0) { hitStop -= dt; dt *= 0.04; }
  simT += dt;
  step_(dt, simT);
  if (window.innerWidth < 2 || window.innerHeight < 2) return;
  renderClouds(simT);
  pipeline.render();
  if (firstFrame) { firstFrame = false; document.getElementById('loading').classList.add('off'); }
});

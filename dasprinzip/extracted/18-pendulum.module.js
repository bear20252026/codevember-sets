import * as THREE from 'three/webgpu';
import {
  Fn, uniform, float, vec2, vec3, vec4, attribute, varyingProperty,
  dot, normalize, mix, smoothstep, max, abs, fract, floor, length, pow, exp, clamp, sin, asin,
  positionWorld, positionLocal, normalView, positionViewDirection, screenUV, pass,
  screenSize, Loop, If, Break, Discard, uniformArray, cameraPosition, cameraViewMatrix, cameraNear, cameraFar, viewZToPerspectiveDepth, depth, reflect, min, int
} from 'three/tsl';
import { fxaa } from 'three/addons/tsl/display/FXAANode.js';

const BUILD = 'v2.9-loading';
console.log('%c' + BUILD, 'color:#b0705a');

////////////////////////////////////////////////////////////////
//// PARAMS
////////////////////////////////////////////////////////////////

const QS = new URLSearchParams(location.search);
const MOBILE = /Android|iPhone|iPad/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Mac/.test(navigator.userAgent));
const R = 1.0, W = 0.52, HW = 0.36, TH = 0.06, RF = 0.15, RB = 0.215;
const GAP = THREE.MathUtils.degToRad(1.2), SPAN = Math.PI - GAP, LEN = R * Math.PI;
const PERIOD = 5.8, OMEGA = 2 * Math.PI / PERIOD, LP = 2.9, EASE = 0.45, DAMP = 0.1, T_H = 5.5;
const GR = 4 * EASE * R * OMEGA * OMEGA / (R / LP);
const DIAG = THREE.MathUtils.degToRad(40);
const SW_DIR = new THREE.Vector3(Math.cos(DIAG), 0, Math.sin(DIAG));
const SW_AX = new THREE.Vector3().crossVectors(SW_DIR, new THREE.Vector3(0, 1, 0)).normalize();
const BG = new THREE.Color(0xd9b9b5);
const uBall = uniform(new THREE.Vector3());

////////////////////////////////////////////////////////////////
//// NOISE
////////////////////////////////////////////////////////////////

const hash13 = Fn(([q]) => {
  const p3 = fract(q.mul(0.1031)).toVar();
  p3.addAssign(dot(p3, p3.zyx.add(31.32)));
  return fract(p3.x.add(p3.y).mul(p3.z));
}).setLayout({ name: 'h13', type: 'float', inputs: [{ name: 'q', type: 'vec3' }] });

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

const fbm3 = Fn(([p]) => {
  const v = vn(p).mul(0.55).toVar();
  v.addAssign(vn(p.mul(2.11).add(vec3(5.3, 1.2, 8.8))).mul(0.3));
  v.addAssign(vn(p.mul(4.37).add(vec3(2.6, 6.1, 3.3))).mul(0.15));
  return v;
}).setLayout({ name: 'fbm3', type: 'float', inputs: [{ name: 'p', type: 'vec3' }] });

////////////////////////////////////////////////////////////////
//// RENDERER
////////////////////////////////////////////////////////////////

const renderer = new THREE.WebGPURenderer({ antialias: false, forceWebGL: QS.has('webgl') });
const PR = Math.min(window.devicePixelRatio, MOBILE ? 1.25 : 2) * (parseFloat(QS.get('scale')) || 1);
renderer.setPixelRatio(PR);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.appendChild(renderer.domElement);
await renderer.init();

const scene = new THREE.Scene();
scene.background = BG.clone();
const BACK = {
  wood: { a: new THREE.Color(0.93, 0.8, 0.78), b: new THREE.Color(0.52, 0.34, 0.36), sh: 0x5c2a2a, op: 0.42 },
  glass: { a: new THREE.Color(0.6, 0.6, 0.68), b: new THREE.Color(0.045, 0.045, 0.075), sh: 0x020208, op: 0.1 },
};
const uBgA = uniform(BACK.wood.a.clone()), uBgB = uniform(BACK.wood.b.clone());
scene.backgroundNode = Fn(() => {
  const q = screenUV.sub(vec2(0.57, 0.5));
  const p = vec2(q.x.mul(screenSize.x.div(screenSize.y)).mul(0.82), q.y);
  const g = smoothstep(1.0, 0.0, length(p).mul(1.25));
  const n = fract(dot(screenUV.mul(screenSize), vec2(0.06711056, 0.00583715)).sin().mul(43758.5453)).sub(0.5).div(160.0);
  return vec4(mix(uBgB, uBgA, g.mul(g)).add(uBgA.mul(pow(g, 8.0)).mul(0.12)).add(n), 1.0);
})();
const backdrop = (() => {
  const m = new THREE.ShadowNodeMaterial({ color: BACK.wood.sh, opacity: BACK.wood.op, transparent: true, depthWrite: false });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), m);
  const nrm = new THREE.Vector3(0, 0.8, 0.6).normalize();
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), nrm);
  mesh.position.set(0, -1.35, -1.0);
  mesh.receiveShadow = true;
  mesh.renderOrder = -1;
  scene.add(mesh);
  return mesh;
})();
const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 60);
const LOOK = new THREE.Vector3(0, -0.05, 0);

////////////////////////////////////////////////////////////////
//// STUDIO
////////////////////////////////////////////////////////////////

const ENV = (() => {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 512;
  const g = c.getContext('2d');
  const sky = g.createLinearGradient(0, 0, 0, 512);
  sky.addColorStop(0.0, '#fff4f0');
  sky.addColorStop(0.36, '#e8c8c2');
  sky.addColorStop(0.3, '#c9a29c');
  sky.addColorStop(0.42, '#050303');
  sky.addColorStop(0.6, '#0c0808');
  sky.addColorStop(0.75, '#7a5a56');
  sky.addColorStop(1.0, '#d8b8b2');
  g.fillStyle = sky; g.fillRect(0, 0, 1024, 512);
  g.fillStyle = '#ffffff';
  g.filter = 'blur(6px)';
  g.fillRect(140, 70, 190, 120);
  g.fillRect(620, 40, 120, 160);
  g.globalAlpha = 0.7;
  g.fillRect(860, 150, 120, 60);
  g.globalAlpha = 1;
  g.filter = 'none';
  const env = new THREE.CanvasTexture(c);
  env.mapping = THREE.EquirectangularReflectionMapping;
  env.colorSpace = THREE.SRGBColorSpace;
  scene.environment = env;
  scene.environmentIntensity = 0.35;
  return env;
})();

const CHROME = (() => {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 512;
  const g = c.getContext('2d');
  const sky = g.createLinearGradient(0, 0, 0, 512);
  sky.addColorStop(0.0, '#ffffff');
  sky.addColorStop(0.3, '#f3d9d4');
  sky.addColorStop(0.4, '#c79d95');
  sky.addColorStop(0.44, '#1a0f0e');
  sky.addColorStop(0.56, '#0c0707');
  sky.addColorStop(0.6, '#a86a58');
  sky.addColorStop(0.8, '#e2a48f');
  sky.addColorStop(1.0, '#f3d6cf');
  g.fillStyle = sky; g.fillRect(0, 0, 1024, 512);
  g.fillStyle = '#ffffff';
  g.filter = 'blur(3px)';
  [[90, 230], [600, 170]].forEach(([x, w]) => g.fillRect(x, 30, w, 150));
  g.filter = 'none';
  const t = new THREE.CanvasTexture(c);
  t.mapping = THREE.EquirectangularReflectionMapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
})();

const hemi = new THREE.HemisphereLight(0xffe9e4, 0xb0624f, 0.6);
scene.add(hemi);
const key = new THREE.DirectionalLight(0xfff0e4, 4.2);
key.position.set(-11.5, 14.0, 9.0);
key.castShadow = true;
key.shadow.mapSize.set(MOBILE ? 2048 : 4096, MOBILE ? 2048 : 4096);
key.shadow.camera.left = -7; key.shadow.camera.right = 7;
key.shadow.camera.top = 15; key.shadow.camera.bottom = -6;
key.shadow.camera.near = 1; key.shadow.camera.far = 48;
key.shadow.bias = -0.0006;
key.shadow.normalBias = 0.02;
key.shadow.radius = 7;
scene.add(key);
const rim = new THREE.DirectionalLight(0xffd9d2, 0.9);
rim.position.set(3, 2, -4);
scene.add(rim);

////////////////////////////////////////////////////////////////
//// TRACK
////////////////////////////////////////////////////////////////

const profile = (() => {
  const arc = (cx, cy, r, a0, a1, n) => { const o = []; for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; o.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); } return o; };
  const h = W / 2;
  const inner = [[-h, HW], [-h, RF], ...arc(-h + RF, RF, RF, Math.PI, Math.PI * 1.5, 8).slice(1), ...arc(h - RF, RF, RF, Math.PI * 1.5, Math.PI * 2, 8), [h, HW]];
  const ro = RF + TH;
  const outer = [[h + TH, HW], [h + TH, RF], ...arc(h - RF, RF, ro, 0, -Math.PI * 0.5, 8).slice(1), ...arc(-h + RF, RF, ro, -Math.PI * 0.5, -Math.PI, 8), [-h - TH, HW]];
  const lipR = TH / 2;
  const lipA = arc(h + lipR, HW, lipR, Math.PI, 0, 6);
  const lipB = arc(-h - lipR, HW, lipR, Math.PI, 0, 6);
  return { inner, outer, lipA, lipB };
})();

const buildPiece = (P0 = GAP, P1 = SPAN, K = 1, SEG = 150) => {
  const pos = [], nor = [], wd = [], idx = [];
  const grow = (pts) => pts.map(([x, y]) => [x * K, (y - HW / 2) * K + HW / 2]);
  const strip = (src, flag, flip) => {
    const pts = grow(src);
    const n2 = pts.map((p, i) => {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
      const tx = b[0] - a[0], ty = b[1] - a[1], l = Math.hypot(tx, ty) || 1;
      return flip ? [ty / l, -tx / l] : [-ty / l, tx / l];
    });
    const base = pos.length / 3;
    for (let s = 0; s <= SEG; s++) {
      const ph = P0 + (P1 - P0) * s / SEG;
      const cx = Math.cos(ph), sz = Math.sin(ph);
      pts.forEach((p, i) => {
        const r = R + p[0];
        pos.push(cx * r, p[1], sz * r);
        nor.push(cx * n2[i][0], n2[i][1], sz * n2[i][0]);
        wd.push(ph * R, p[0], p[1], flag);
      });
    }
    const m = pts.length;
    for (let s = 0; s < SEG; s++) for (let i = 0; i < m - 1; i++) {
      const a = base + s * m + i, b = a + m;
      if (flip) idx.push(a, a + 1, b, b, a + 1, b + 1); else idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  };
  strip(profile.inner, 0, false);
  strip(profile.outer, 1, false);
  strip(profile.lipA, 1, true);
  strip(profile.lipB, 1, true);
  const contour = grow([...profile.inner, ...profile.lipA.slice(1, -1), ...profile.outer, ...profile.lipB.slice(1, -1)]).map(([x, y]) => new THREE.Vector2(x, y));
  const tris = THREE.ShapeUtils.triangulateShape(contour, []);
  [P0, P1].forEach((ph, e) => {
    const cx = Math.cos(ph), sz = Math.sin(ph);
    const tn = e === 0 ? [sz, 0, -cx] : [-sz, 0, cx];
    const base = pos.length / 3;
    contour.forEach((p) => {
      const r = R + p.x;
      pos.push(cx * r, p.y, sz * r);
      nor.push(...tn);
      wd.push(ph * R, p.x, p.y, 2);
    });
    tris.forEach(([a, b, c]) => { if (e === 0) idx.push(base + a, base + b, base + c); else idx.push(base + a, base + c, base + b); });
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('aW', new THREE.Float32BufferAttribute(wd, 4));
  g.setIndex(idx);
  return g;
};

const trackMat = (() => {
  const m = new THREE.MeshPhysicalNodeMaterial();
  const aW = attribute('aW', 'vec4');
  const vW = varyingProperty('vec4', 'vW');
  m.positionNode = Fn(() => { vW.assign(aW); return positionLocal; })();
  const cavity = Fn(() => {
    const xr = vW.y, yh = vW.z;
    const corner = smoothstep(W / 2 - RF * 1.6, W / 2, abs(xr)).mul(smoothstep(RF * 2.2, 0.0, yh));
    const depth = smoothstep(HW, 0.0, yh);
    const inside = smoothstep(0.6, 0.5, vW.w);
    return float(1.0).sub(corner.mul(0.38).add(depth.mul(0.16)).mul(inside));
  });
  m.colorNode = Fn(() => {
    const w = vW;
    const along = w.x, xr = w.y, yh = w.z, flag = w.w;
    const across = xr.add(yh.mul(smoothstep(0.0, RF, yh)).mul(xr.sign()));
    const warp = fbm3(vec3(along.mul(1.1), across.mul(2.2), 0.3)).mul(1.0);
    const fig = fbm3(vec3(along.mul(0.45).add(3.1), across.mul(1.4), 1.7));
    const v = across.mul(7.0).add(warp.mul(2.4)).add(fig.mul(3.2)).add(sin(along.mul(1.7).add(fig.mul(3.0))).mul(0.8));
    const ring = fract(v);
    const line = smoothstep(0.0, 0.1, ring).mul(smoothstep(0.55, 0.14, ring));
    const pore = vn(vec3(along.mul(3.0), across.mul(60.0).add(warp.mul(8.0)), 2.0)).mul(0.5).add(0.5);
    const streak = vn(vec3(along.mul(0.8), across.mul(22.0).add(warp.mul(5.0)), 5.0)).mul(0.5).add(0.5);
    const woodA = vec3(0.9, 0.56, 0.44), woodB = vec3(0.77, 0.4, 0.29), woodC = vec3(0.5, 0.2, 0.13);
    const base = mix(woodA, woodB, smoothstep(-0.45, 0.5, fig.add(streak.sub(0.5).mul(0.9))));
    const wood = mix(base, woodC, line.mul(0.3).add(smoothstep(0.62, 0.9, pore).mul(0.18))).mul(pore.mul(0.14).add(0.93));
    const pale = mix(vec3(0.99, 0.91, 0.91), vec3(0.83, 0.62, 0.65), smoothstep(HW * 0.95, -TH, yh).mul(0.8));
    const cut = mix(vec3(0.3, 0.15, 0.11), vec3(0.46, 0.25, 0.19), ring.mul(0.6).add(pore.mul(0.4)));
    const isPale = smoothstep(0.5, 0.6, flag).mul(smoothstep(1.5, 1.4, flag));
    const isCut = smoothstep(1.5, 1.6, flag);
    const occ = cavity();
    const warm = mix(vec3(0.62, 0.36, 0.3), vec3(1.0), occ);
    return mix(mix(wood, pale, isPale), cut, isCut).mul(warm);
  })();
  m.roughnessNode = Fn(() => mix(float(0.5), float(0.78), smoothstep(0.5, 0.6, vW.w)))();
  m.clearcoatNode = Fn(() => smoothstep(0.6, 0.5, vW.w).mul(0.55))();
  m.clearcoatRoughnessNode = float(0.32);
  m.aoNode = Fn(() => {
    const d = length(positionWorld.sub(uBall)).sub(RB);
    return float(1.0).sub(exp(d.mul(d).mul(-70.0)).mul(0.7)).mul(cavity());
  })();
  return m;
})();

const rig = new THREE.Group();
scene.add(rig);
const makePiece = (rest, rotY, tint, open) => {
  const piv = new THREE.Group();
  piv.position.copy(rest).add(new THREE.Vector3(0, LP, 0));
  const body = new THREE.Group();
  body.position.y = -LP;
  body.rotation.y = rotY;
  piv.add(body);
  rig.add(piv);
  const mesh = new THREE.Mesh(trackGeo, trackMat);
  mesh.castShadow = true; mesh.receiveShadow = true;
  body.add(mesh);
  const collars = (open ? openCollarGeos : [collarGeoA, collarGeoB, collarGeoC]).map((g) => {
    const c = new THREE.Mesh(g, collarMat);
    c.visible = false; c.renderOrder = 2;
    body.add(c);
    return c;
  });
  const tube = new THREE.Mesh(open ? openTubeGeo : tubeGeo, glassMat(tint));
  tube.visible = false; tube.renderOrder = 1; tube.castShadow = true;
  body.add(tube);
  return { piv, body, mesh, tube, collars };
};
const buildTube = (P0, P1, ri, ro, SEG, A0 = 0, A1 = Math.PI * 2) => {
  const pos = [], nor = [], idx = [], N = 40, CY = TUBE_C;
  const ring = (r, sgn) => {
    const base = pos.length / 3;
    for (let s = 0; s <= SEG; s++) {
      const ph = P0 + (P1 - P0) * s / SEG, cx = Math.cos(ph), sz = Math.sin(ph);
      for (let i = 0; i <= N; i++) {
        const a = A0 + (A1 - A0) * i / N, nx = Math.cos(a), ny = Math.sin(a);
        pos.push(cx * (R + nx * r), CY + ny * r, sz * (R + nx * r));
        nor.push(cx * nx * sgn, ny * sgn, sz * nx * sgn);
      }
    }
    for (let s = 0; s < SEG; s++) for (let i = 0; i < N; i++) {
      const a = base + s * (N + 1) + i, b = a + N + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  };
  ring(ro, 1); ring(ri, -1);
  [P0, P1].forEach((ph, e) => {
    const cx = Math.cos(ph), sz = Math.sin(ph), tn = e === 0 ? [sz, 0, -cx] : [-sz, 0, cx], base = pos.length / 3;
    for (let i = 0; i <= N; i++) {
      const a = A0 + (A1 - A0) * i / N, nx = Math.cos(a), ny = Math.sin(a);
      [ri, ro].forEach((r) => { pos.push(cx * (R + nx * r), CY + ny * r, sz * (R + nx * r)); nor.push(...tn); });
    }
    for (let i = 0; i < N; i++) { const a = base + i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  });
  if (A1 - A0 < Math.PI * 2 - 1e-3) [A0, A1].forEach((a, e) => {
    const nx = Math.cos(a), ny = Math.sin(a), tx = e === 0 ? Math.sin(a) : -Math.sin(a), ty = e === 0 ? -Math.cos(a) : Math.cos(a), base = pos.length / 3;
    for (let k = 0; k <= SEG; k++) {
      const ph = P0 + (P1 - P0) * k / SEG, cx = Math.cos(ph), sz = Math.sin(ph);
      [ri, ro].forEach((r) => { pos.push(cx * (R + nx * r), CY + ny * r, sz * (R + nx * r)); nor.push(cx * tx, ty, sz * tx); });
    }
    for (let k = 0; k < SEG; k++) { const q = base + k * 2; idx.push(q, q + 1, q + 2, q + 1, q + 3, q + 2); }
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setIndex(idx);
  return g;
};
const glassMat = (tint) => {
  const m = new THREE.MeshPhysicalNodeMaterial({ transparent: true, side: THREE.DoubleSide, depthWrite: false });
  const fres = Fn(() => pow(float(1.0).sub(abs(dot(normalView, positionViewDirection))), 2.2));
  m.colorNode = Fn(() => vec3(tint.r, tint.g, tint.b).mul(0.75))();
  m.emissiveNode = Fn(() => vec3(tint.r, tint.g, tint.b).mul(mix(float(0.06), float(0.9), fres())))();
  m.opacityNode = Fn(() => mix(float(0.13), float(0.9), fres()))();
  m.roughnessNode = float(0.06);
  m.metalnessNode = float(0.0);
  m.clearcoatNode = float(1.0);
  m.clearcoatRoughnessNode = float(0.04);
  m.envMap = CHROME;
  m.envMapIntensity = 0.45;
  return m;
};
const collarMat = glassMat(new THREE.Color(0.42, 0.42, 0.45));
const trackGeo = buildPiece();
const CW = 0.12, TUBE_RO = 0.305, TUBE_RI = 0.275, TUBE_C = TUBE_RI;
const tubeGeo = buildTube(GAP, SPAN, TUBE_RI, TUBE_RO, 120);
const collarGeoA = buildTube(GAP, GAP + CW, TUBE_RO + 0.004, TUBE_RO + 0.06, 6);
const collarGeoB = buildTube(Math.PI / 2 - CW / 2, Math.PI / 2 + CW / 2, TUBE_RO + 0.004, TUBE_RO + 0.06, 6);
const collarGeoC = buildTube(SPAN - CW, SPAN, TUBE_RO + 0.004, TUBE_RO + 0.06, 6);
const OPEN_A0 = Math.PI - 0.3, OPEN_A1 = Math.PI * 2 + 0.3;
const openTubeGeo = buildTube(GAP, SPAN, TUBE_RI, TUBE_RO, 120, OPEN_A0, OPEN_A1);
const openCollarGeos = [[GAP, GAP + CW], [Math.PI / 2 - CW / 2, Math.PI / 2 + CW / 2], [SPAN - CW, SPAN]].map(([p0, p1]) => buildTube(p0, p1, TUBE_RO + 0.004, TUBE_RO + 0.06, 6, OPEN_A0 - 0.06, OPEN_A1 + 0.06));
const pieceA = makePiece(new THREE.Vector3(), -DIAG, new THREE.Color(0.78, 0.22, 0.8), true);
const pieceB = makePiece(new THREE.Vector3(), -DIAG + Math.PI, new THREE.Color(0.9, 0.28, 0.5));

////////////////////////////////////////////////////////////////
//// STRINGS
////////////////////////////////////////////////////////////////

const ropes = [];
const HOOK = new THREE.Vector3(0, 18, 0);
{
  const threadM = new THREE.MeshStandardNodeMaterial({ color: 0xd9a798, roughness: 0.8 });
  const knotM = new THREE.MeshStandardNodeMaterial({ color: 0xa8604f, roughness: 0.6 });
  const cyl = new THREE.CylinderGeometry(0.003, 0.003, 1, 5, 1, true);
  const knot = new THREE.TorusGeometry(0.02, 0.006, 6, 12);
  const shadowCyl = new THREE.CylinderGeometry(0.009, 0.009, 1, 5, 1, true);
  const shadowOnly = new THREE.MeshBasicNodeMaterial({ colorWrite: false, depthWrite: false });
  const spots = [[0.28, 1], [1.15, -1], [2.0, 1], [2.86, -1]];
  [pieceA, pieceB].forEach((pc) => spots.forEach(([ph, wsel]) => {
    const r = R + wsel * (W / 2 + TH * 0.5);
    const p = new THREE.Vector3(Math.cos(ph) * r, HW + 0.005, Math.sin(ph) * r);
    const m = new THREE.Mesh(cyl, threadM);
    m.frustumCulled = false;
    scene.add(m);
    const sh = new THREE.Mesh(shadowCyl, shadowOnly);
    sh.frustumCulled = false;
    sh.castShadow = true;
    scene.add(sh);
    ropes.push({ pc, p, m, sh });
    const k = new THREE.Mesh(knot, knotM);
    k.castShadow = true;
    k.position.copy(p).add(new THREE.Vector3(0, 0.014, 0));
    k.rotation.x = Math.PI / 2;
    pc.body.add(k);
  }));
}
const ropeW = new THREE.Vector3(), ropeD = new THREE.Vector3(), ropeUp = new THREE.Vector3(0, 1, 0);
const updateRopes = () => ropes.forEach((r) => {
  ropeW.copy(r.p).applyMatrix4(r.pc.body.matrixWorld);
  ropeD.subVectors(HOOK, ropeW);
  const len = ropeD.length();
  r.m.scale.y = len;
  r.m.position.copy(ropeW).addScaledVector(ropeD, 0.5);
  r.m.quaternion.setFromUnitVectors(ropeUp, ropeD.multiplyScalar(1 / len));
  r.sh.scale.y = len;
  r.sh.position.copy(r.m.position);
  r.sh.quaternion.copy(r.m.quaternion);
});

////////////////////////////////////////////////////////////////
//// BALL
////////////////////////////////////////////////////////////////

const ball = (() => {
  const m = new THREE.MeshStandardNodeMaterial();
  const band = Fn(() => {
    const lat = asin(clamp(normalize(positionLocal).y, -1.0, 1.0)).div(Math.PI).add(0.5);
    return smoothstep(-0.06, 0.06, sin(lat.mul(Math.PI * 7.0)));
  });
  m.colorNode = Fn(() => mix(vec3(0.012, 0.011, 0.012), vec3(0.96, 0.94, 0.93), band()))();
  m.metalnessNode = Fn(() => band())();
  m.roughnessNode = Fn(() => mix(float(0.36), float(0.04), band()))();
  m.envMap = CHROME;
  m.envMapIntensity = 1.25;
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(RB, 64, 48), m);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
})();

const pathS = (u, out) => {
  u = ((u % (2 * LEN)) + 2 * LEN) % (2 * LEN);
  const onA = u < LEN, ph = (onA ? u : 2 * LEN - u) / R;
  return out.set(Math.cos(ph) * R, RB, Math.sin(ph) * R).applyMatrix4((onA ? pieceA : pieceB).body.matrixWorld);
};

////////////////////////////////////////////////////////////////
//// SLIME
////////////////////////////////////////////////////////////////

const NS = 15, NG = 3;
const slimeData = Array.from({ length: NS }, () => new THREE.Vector4(0, -50, 0, 0.1));
const uSlime = uniformArray(slimeData, 'vec4');
const uSlimeFar = uniform(2.0);
const slime = (() => {
  const sdf = Fn(([p]) => {
    const d = float(10.0).toVar();
    Loop(NS, ({ i }) => {
      const b = uSlime.element(i);
      const di = length(p.sub(b.xyz)).sub(b.w);
      const h = clamp(d.sub(di).div(0.1).mul(0.5).add(0.5), 0.0, 1.0);
      d.assign(mix(d, di, h).sub(h.mul(h.oneMinus()).mul(0.1)));
    });
    return d;
  });
  const sun = normalize(vec3(-0.45, 0.8, 0.4));
  const studio = Fn(([r]) => {
    const sand = mix(vec3(1.0, 0.8, 0.5), vec3(0.9, 0.7, 0.5), smoothstep(0.3, 0.5, fbm3(vec3(r.x.mul(6.0), r.z.mul(6.0), 1.0)).mul(0.5).add(0.5)).mul(0.5).add(0.1)).mul(0.9);
    const ground = mix(sand.mul(0.2 + 0.8 * 0.8), vec3(0.3, 0.4, 0.5), pow(r.y.add(1.0).clamp(0.0, 1.0), 16.0));
    const q = r.xz.div(max(r.y, 0.02)).mul(0.9);
    const ff = fbm3(vec3(q.x, q.y, 3.0)).mul(0.5).add(0.5);
    const f = smoothstep(0.35, 0.75, ff);
    const fd = smoothstep(0.01, 0.1, r.y);
    const cloud = vec3(0.92, 0.92, 0.9).mul(ff.mul(0.5).add(0.75));
    const sky = mix(mix(vec3(0.8, 0.8, 0.75), vec3(0.4, 0.5, 0.8), fd.mul(0.7).add(0.3)), cloud, f.mul(fd).mul(0.9).add(0.1));
    const sd = max(dot(r, sun), 0.0);
    const skyS = sky.add(vec3(1.0, 1.0, 0.9).mul(pow(sd, 512.0).mul(0.6).add(pow(sd, 64.0).mul(0.25))));
    return mix(ground, skyS, smoothstep(-0.02, 0.02, r.y));
  });
  const m = new THREE.MeshBasicNodeMaterial();
  const march = Fn(() => {
    const ro = cameraPosition;
    const rd = normalize(positionWorld.sub(cameraPosition));
    const t = length(positionWorld.sub(cameraPosition)).toVar();
    const tMax = t.add(uSlimeFar);
    const d = float(1.0).toVar();
    Loop(44, () => {
      d.assign(sdf(ro.add(rd.mul(t))));
      If(d.lessThan(0.003).or(t.greaterThan(tMax)), () => { Break(); });
      t.addAssign(d.mul(0.9));
    });
    return vec2(t, d);
  });
  m.depthNode = Fn(() => {
    const ro = cameraPosition;
    const rd = normalize(positionWorld.sub(cameraPosition));
    const p = ro.add(rd.mul(march().x));
    return viewZToPerspectiveDepth(cameraViewMatrix.mul(vec4(p, 1.0)).z, cameraNear, cameraFar);
  })();
  m.colorNode = Fn(() => {
    const ro = cameraPosition;
    const rd = normalize(positionWorld.sub(cameraPosition));
    const hit = march();
    Discard(hit.y.greaterThan(0.02));
    const p = ro.add(rd.mul(hit.x));
    const e = vec2(0.004, -0.004);
    const n = normalize(e.xyy.mul(sdf(p.add(e.xyy))).add(e.yyx.mul(sdf(p.add(e.yyx)))).add(e.yxy.mul(sdf(p.add(e.yxy)))).add(e.xxx.mul(sdf(p.add(e.xxx)))));
    const r = reflect(rd, n);
    const goo = vec3(0.0, 1.0, 0.0);
    const lit = goo.mul(float(0.2).add(max(dot(n, sun.mul(vec3(-1, 1, -1))), 0.0).mul(0.1)).add(max(dot(n, sun), 0.0).mul(0.8)));
    const spec = pow(max(dot(sun, r), 0.0), 32.0).mul(0.2);
    return mix(lit.add(spec), studio(r).mul(0.85), 0.44).clamp(0.0, 1.0);
  })();
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), m);
  mesh.frustumCulled = false;
  mesh.visible = false;
  scene.add(mesh);
  return mesh;
})();
const NIPS = [0.2, 0.4, 0.6, 0.8, 1.2, 1.4, 1.6, 1.8].map((f, i) => ({ s: f * LEN, x: (i % 2 ? 0.035 : -0.035), r: 0.075 }));
const tubeFloor = (u, x, lift, out) => {
  u = ((u % (2 * LEN)) + 2 * LEN) % (2 * LEN);
  const onA = u < LEN, ph = (onA ? u : 2 * LEN - u) / R, th = x / TUBE_RI * (onA ? 1 : -1), re = TUBE_RI - lift;
  const rr = R + Math.sin(th) * re, y = TUBE_C - Math.cos(th) * re;
  return out.set(Math.cos(ph) * rr, y, Math.sin(ph) * rr).applyMatrix4((onA ? pieceA : pieceB).body.matrixWorld);
};
const nipples = (() => {
  const g = new THREE.SphereGeometry(1, 20, 14);
  const m = new THREE.MeshPhysicalNodeMaterial({ color: 0xffffff, roughness: 0.03, metalness: 0, transmission: 1, thickness: 0.22, ior: 1.52, dispersion: 4, attenuationColor: new THREE.Color(0.8, 0.95, 1.0), attenuationDistance: 0.6, clearcoat: 1, clearcoatRoughness: 0.02 });
  m.envMap = CHROME;
  m.envMapIntensity = 1.3;
  return NIPS.map((n) => {
    const onA = n.s < LEN, ph = (onA ? n.s : 2 * LEN - n.s) / R, th = n.x / TUBE_RI * (onA ? 1 : -1);
    const mesh = new THREE.Mesh(g, m);
    mesh.scale.set(n.r, n.r * 0.85, n.r);
    mesh.position.set(Math.cos(ph) * (R + Math.sin(th) * TUBE_RI), TUBE_C - Math.cos(th) * TUBE_RI + 0.004, Math.sin(ph) * (R + Math.sin(th) * TUBE_RI));
    mesh.visible = false;
    (onA ? pieceA : pieceB).body.add(mesh);
    return mesh;
  });
})();
const goo = {
  p: Array.from({ length: NS }, (_, i) => ({ s: 0, x: 0, vs: 0, vx: 0, g: i % NG, r: 0.08 + 0.02 * ((i * 7) % 5) / 4 })),
  ready: false,
  seed(lead) {
    this.p.forEach((b, i) => { b.s = lead + (1 - b.g) * 0.2 - 0.03 * Math.floor(i / NG); b.x = 0.05 * Math.sin(i * 2.4); b.vs = 0; b.vx = 0; });
  },
  step(lead, h) {
    const P = this.p;
    const jd = Math.abs(((lead + LEN / 2) % LEN + LEN) % LEN - LEN / 2);
    const gather = THREE.MathUtils.smoothstep(1.0 - jd, 0.0, 0.65);
    const off = 0.24 - 0.15 * gather, kL = 34 + 70 * gather, lagMax = 0.52 - 0.3 * gather;
    for (let i = 0; i < NS; i++) {
      const a = P[i];
      let fs = kL * (lead + (1 - a.g) * off - a.s), fx = -30 * a.x;
      for (let j = 0; j < NS; j++) {
        if (j === i) continue;
        const b = P[j], ds = a.s - b.s, dx = a.x - b.x, d = Math.hypot(ds, dx) + 1e-5, dm = 0.75 * (a.r + b.r);
        if (d < dm) { const f = 420 * (dm / d - 1); fs += f * ds; fx += f * dx; }
        if (a.g === b.g) { fs -= 9 * ds; fx -= 9 * dx; }
      }
      for (let k = 0; k < NIPS.length; k++) {
        const n = NIPS[k];
        let ds = (a.s - n.s) % (2 * LEN); if (ds > LEN) ds -= 2 * LEN; if (ds < -LEN) ds += 2 * LEN;
        const dx = a.x - n.x, d = Math.hypot(ds, dx) + 1e-5, dm = n.r + a.r * 1.15;
        if (d < dm) { const f = 900 * (dm / d - 1); fs += f * ds; fx += f * (dx + Math.sign(dx || (i % 2 ? 1 : -1)) * 0.02); }
      }
      a.vs += (fs - 7 * a.vs) * h; a.vx += (fx - 7 * a.vx) * h;
    }
    for (let i = 0; i < NS; i++) {
      const a = P[i];
      a.s += a.vs * h;
      if (a.s < lead - lagMax) { a.s = lead - lagMax; a.vs = Math.max(a.vs, 0); }
      if (a.s > lead + lagMax) { a.s = lead + lagMax; a.vs = Math.min(a.vs, 0); }
      a.x = Math.max(-0.24, Math.min(0.24, a.x + a.vx * h));
    }
  },
};

////////////////////////////////////////////////////////////////
//// POST
////////////////////////////////////////////////////////////////

const pipe = new THREE.RenderPipeline(renderer);
const sp = pass(scene, camera, { samples: 0 });
const sCol = sp.getTextureNode('output');
const graded = Fn(() => {
  const q = screenUV;
  const col = sCol.sample(q).rgb.toVar();
  const vig = pow(q.x.mul(q.y).mul(q.x.oneMinus()).mul(q.y.oneMinus()).mul(16.0), 0.12);
  col.mulAssign(vig.mul(0.12).add(0.88));
  return vec4(max(col, 0.0), 1.0);
})();
pipe.outputNode = fxaa(graded);

////////////////////////////////////////////////////////////////
//// SOUND
////////////////////////////////////////////////////////////////

const snd = (() => {
  let ctx = null, out, wet, on = true, BN, PN, rollG, rollF, rollG2, nGrain = 0, step = 0;
  const rr2 = (a, b) => a + (b - a) * Math.random();
  const SCALE = [0, 3, 5, 7, 10, 12, 15];
  const noise = (sec, kind) => {
    const b = ctx.createBuffer(2, ctx.sampleRate * sec, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = b.getChannelData(ch);
      let b0 = 0, b1 = 0, b2 = 0, br = 0;
      for (let i = 0; i < d.length; i++) {
        const w = Math.random() * 2 - 1;
        if (kind === 'pink') { b0 = 0.99765 * b0 + w * 0.099; b1 = 0.963 * b1 + w * 0.2965; b2 = 0.57 * b2 + w * 1.0527; d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.16; }
        else { br = (br + w * 0.02) / 1.02; d[i] = br * 3.2; }
      }
    }
    return b;
  };
  const loop = (b) => { const s = ctx.createBufferSource(); s.buffer = b; s.loop = true; return s; };
  const verb = () => {
    const len = ctx.sampleRate * 2.6, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.5); }
    const c = ctx.createConvolver(); c.buffer = ir; return c;
  };
  const roll = () => {
    const a = loop(BN);
    rollF = ctx.createBiquadFilter(); rollF.type = 'bandpass'; rollF.frequency.value = 210; rollF.Q.value = 1.4;
    rollG = ctx.createGain(); rollG.gain.value = 0;
    a.connect(rollF).connect(rollG).connect(out); a.start();
    const b = loop(PN), f2 = ctx.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 900; f2.Q.value = 2.5;
    rollG2 = ctx.createGain(); rollG2.gain.value = 0;
    b.connect(f2).connect(rollG2).connect(out); b.start(0, 1.3);
  };
  const pad = () => {
    [[110, 0.012], [164.81, 0.008], [220.4, 0.006], [329.6, 0.003]].forEach(([f, a], i) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f; o.detune.value = rr2(-6, 6);
      const g = ctx.createGain(); g.gain.value = a;
      const l = ctx.createOscillator(); l.frequency.value = 0.05 + i * 0.03;
      const lg = ctx.createGain(); lg.gain.value = a * 0.6; l.connect(lg).connect(g.gain); l.start();
      o.connect(g); g.connect(out); g.connect(wet); o.start();
    });
  };
  const knock = (amp, f, pan) => {
    const t = ctx.currentTime + 0.005;
    const o = ctx.createOscillator(); o.type = 'triangle';
    o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 0.72, t + 0.08);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(amp, t + 0.003); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    const n = ctx.createBufferSource(); n.buffer = PN;
    const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 2400; nf.Q.value = 1.2;
    const ng = ctx.createGain(); ng.gain.setValueAtTime(amp * 2.2, t); ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
    const p = ctx.createStereoPanner(); p.pan.value = pan;
    o.connect(g).connect(p); n.connect(nf).connect(ng).connect(p);
    p.connect(out); p.connect(wet);
    o.start(t); o.stop(t + 0.15); n.start(t, Math.random()); n.stop(t + 0.05);
  };
  const bar = (amp, f, pan) => {
    const t = ctx.currentTime + 0.01;
    const p = ctx.createStereoPanner(); p.pan.value = pan; p.connect(out); p.connect(wet);
    [[1, 1, 1.6], [3.93, 0.25, 0.35], [9.2, 0.06, 0.12]].forEach(([m, a, d]) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f * m;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(amp * a, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g).connect(p); o.start(t); o.stop(t + d + 0.05);
    });
  };
  let gooMode = false;
  const squelch = (pan, k, q = 1) => {
    const t = ctx.currentTime + 0.01, a = 0.045 + 0.045 * k, f0 = 293.66 * q;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400; lp.Q.value = 0.5;
    const p = ctx.createStereoPanner(); p.pan.value = pan;
    const send = ctx.createGain(); send.gain.value = 1.6;
    lp.connect(p); p.connect(out); p.connect(send).connect(wet);
    const drop = (at, f, dur, amp, rise) => {
      const o = ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(f * rise, at);
      o.frequency.exponentialRampToValueAtTime(f, at + dur * 0.4);
      o.frequency.exponentialRampToValueAtTime(f * 1.06, at + dur);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(amp, at + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
      o.connect(g).connect(lp); o.start(at); o.stop(at + dur + 0.03);
    };
    drop(t, f0 * 0.5, 0.34, a * 0.9, 0.62);
    drop(t + 0.07, f0, 0.26, a, 0.55);
    drop(t + 0.19, f0 * 1.5, 0.13, a * 0.4, 0.6);
    drop(t + 0.27, f0 * 2.0, 0.11, a * 0.28, 0.6);
  };
  return {
    get on() { return on; },
    setGoo(v) { gooMode = v; },
    wake() {
      if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      out = ctx.createGain(); out.gain.value = on ? 1.4 : 0;
      const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 3;
      out.connect(comp).connect(ctx.destination);
      wet = ctx.createGain(); wet.gain.value = 0.3; wet.connect(verb()).connect(out);
      BN = noise(4, 'brown'); PN = noise(3, 'pink');
      roll(); pad();
    },
    set(v) { on = v; if (ctx) out.gain.setTargetAtTime(on ? 1.4 : 0, ctx.currentTime, 0.2); },
    tick(dt, speed, pan) {
      if (!ctx || ctx.state !== 'running') return;
      const t = ctx.currentTime;
      const s = Math.min(1, speed) * (0.15 + 0.85 * Math.min(1, speed * 1.5));
      rollG.gain.setTargetAtTime(0.32 * s * (0.85 + Math.random() * 0.3), t, 0.05);
      rollG2.gain.setTargetAtTime(0.018 * s * (0.6 + Math.random() * 0.8), t, 0.03);
      rollF.frequency.setTargetAtTime(170 + 90 * s, t, 0.1);
      nGrain -= dt;
      if (on && !gooMode && nGrain < 0) { knock(rr2(0.002, 0.006) * s, rr2(1500, 2600), pan); nGrain = rr2(0.05, 0.22); }
    },
    gap(pan, k) {
      if (!ctx || !on) return;
      if (gooMode) { const dg = SCALE[step % SCALE.length] + (step % 14 >= 7 ? -12 : 0); squelch(pan, k, Math.pow(2, dg / 12)); step += [1, 2, 3, 2, 1][step % 5]; return; }
      knock(0.03 * k + 0.005, 560, pan);
      setTimeout(() => knock(0.017 * k + 0.002, 480, pan * 0.8), 70);
      const deg = SCALE[step % SCALE.length] + (step % 14 >= 7 ? -12 : 0);
      bar(0.028, 293.66 * Math.pow(2, deg / 12), pan);
      step += [1, 2, 3, 2, 1][step % 5];
    },
    bump(k, pan) {
      if (!ctx || !on) return;
      knock(0.09 * k, 300, pan);
      setTimeout(() => knock(0.03 * k, 260, pan), 45);
    },
    nudge(pan) {
      if (!ctx || !on) return;
      knock(0.05, 340, pan);
      bar(0.035, 146.83 * Math.pow(2, SCALE[(Math.random() * 5) | 0] / 12), pan);
    },
  };
})();

////////////////////////////////////////////////////////////////
//// TOGGLE
////////////////////////////////////////////////////////////////

const matBtns = [...document.querySelectorAll('[data-mat]')];
const setMat = (on) => {
  matBtns.forEach((b) => b.setAttribute('aria-pressed', String((b.dataset.mat === 'glass') === on)));
  [pieceA, pieceB].forEach((pc) => {
    pc.mesh.visible = !on;
    pc.tube.visible = on;
    pc.collars.forEach((c) => { c.visible = on; });
  });
  ball.visible = !on;
  slime.visible = on;
  snd.setGoo(on);
  nipples.forEach((n) => { n.visible = on; });
  const bk = on ? BACK.glass : BACK.wood;
  uBgA.value.copy(bk.a); uBgB.value.copy(bk.b);
  backdrop.material.color.set(bk.sh); backdrop.material.opacity = bk.op;
  document.body.classList.toggle('dark', on);
};
matBtns.forEach((b) => b.addEventListener('click', () => setMat(b.dataset.mat === 'glass')));
setMat(QS.has('glass') ? true : QS.has('wood') ? false : Math.random() < 0.5);
const sndBtn = document.querySelector('[data-snd]');
sndBtn.addEventListener('click', () => {
  snd.wake();
  snd.set(!snd.on);
  sndBtn.setAttribute('aria-pressed', String(snd.on));
  sndBtn.textContent = snd.on ? 'Sound on' : 'Sound off';
});
document.getElementById('picker').addEventListener('pointerdown', () => snd.wake());

////////////////////////////////////////////////////////////////
//// ORBIT
////////////////////////////////////////////////////////////////

const view = { yaw: parseFloat(QS.get('yaw')) || 0, pitch: parseFloat(QS.get('pitch')) || 0, vy: 0, vp: 0, drag: false, moved: 0, x: 0, y: 0 };
let camK = 1;
const placeCam = (t) => {
  view.yaw = Math.max(-1.2, Math.min(1.2, view.yaw));
  view.pitch = Math.max(-0.4, Math.min(0.45, view.pitch));
  const el = 0.52 + view.pitch + Math.sin(t * 0.21) * 0.01, az = view.yaw + Math.sin(t * 0.17) * 0.015, r = 6.6 * camK;
  camera.position.set(LOOK.x + Math.sin(az) * Math.cos(el) * r, LOOK.y + Math.sin(el) * r, LOOK.z + Math.cos(az) * Math.cos(el) * r);
  camera.lookAt(LOOK);
};
const wob = { x: 0, z: 0, vx: 0, vz: 0 };
const cv = renderer.domElement;
cv.addEventListener('pointerdown', (e) => { snd.wake(); view.drag = true; view.moved = 0; view.x = e.clientX; view.y = e.clientY; cv.setPointerCapture(e.pointerId); });
cv.addEventListener('pointermove', (e) => {
  if (!view.drag) return;
  const dx = e.clientX - view.x, dy = e.clientY - view.y;
  view.moved += Math.abs(dx) + Math.abs(dy);
  view.vy = -dx * 0.003; view.vp = dy * 0.0025;
  view.yaw += view.vy; view.pitch += view.vp;
  view.x = e.clientX; view.y = e.clientY;
});
cv.addEventListener('pointerup', (e) => {
  view.drag = false;
  if (view.moved > 6) return;
  const nx = (e.clientX / innerWidth) * 2 - 1, ny = (e.clientY / innerHeight) * 2 - 1;
  wob.vz += -nx * 0.9; wob.vx += ny * 0.7;
  snd.nudge(nx * 0.8);
});

////////////////////////////////////////////////////////////////
//// LOOP
////////////////////////////////////////////////////////////////

const fit = () => {
  camera.aspect = innerWidth / innerHeight;
  camK = Math.max(1, 1.0 / camera.aspect);
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
};
window.addEventListener('resize', fit);
fit();

let tt = parseFloat(QS.get('t')) || 0;
placeCam(tt);
await renderer.compileAsync(scene, camera);
const clock = new THREE.Timer();
let first = true;
const bl = new THREE.Vector3(), bw = new THREE.Vector3(), prevW = new THREE.Vector3(), tmp = new THREE.Vector3(), ax = new THREE.Vector3(), qd = new THREE.Quaternion();
const p1 = new THREE.Vector3(), p2 = new THREE.Vector3();
const Y = new THREE.Vector3(0, 1, 0);
const refAt = (t) => {
  const c = (t - T_H) / (PERIOD / 2), k = Math.floor(c), x = c - k;
  return { s: (k + x + EASE / (2 * Math.PI) * Math.sin(2 * Math.PI * x)) * LEN, v: (1 + EASE * Math.cos(2 * Math.PI * x)) * LEN / (PERIOD / 2) };
};
const bs = (() => { const g = refAt(tt); return { s: g.s, v: g.v }; })();
const fw = new THREE.Vector3(), rt = new THREE.Vector3(), upv = new THREE.Vector3(), mb = new THREE.Matrix4(), XA = new THREE.Vector3(1, 0, 0);
const swingAt = (t) => -Math.cos(OMEGA * (t - T_H));
const qw = new THREE.Quaternion(), ew = new THREE.Euler();
const pose = (t) => {
  const d = swingAt(t), b = Math.asin(d * R / LP);
  pieceA.piv.quaternion.setFromAxisAngle(SW_AX, b);
  pieceB.piv.quaternion.setFromAxisAngle(SW_AX, -b);
  pieceA.piv.quaternion.multiply(qw.setFromEuler(ew.set(wob.x * 0.1, 0, wob.z * 0.1)));
  pieceB.piv.quaternion.multiply(qw.setFromEuler(ew.set(-wob.x * 0.07, 0, wob.z * 0.13)));
  rig.updateMatrixWorld(true);
  return d;
};
const slopeAt = (u) => {
  const e = 0.01, k = Math.floor(u / LEN);
  const lo = Math.max(u - e, k * LEN + 1e-4), hi = Math.min(u + e, (k + 1) * LEN - 1e-4);
  pathS(lo, p1); pathS(hi, p2);
  return (p2.y - p1.y) / (hi - lo);
};
const panOf = (v) => { tmp.copy(v).project(camera); return THREE.MathUtils.clamp(tmp.x, -0.9, 0.9); };
renderer.setAnimationLoop(() => {
  clock.update();
  const dt = QS.has('freeze') ? 0 : Math.min(clock.getDelta(), 0.05);
  if (!view.drag) { view.yaw += view.vy; view.pitch += view.vp; view.vy *= 0.92; view.vp *= 0.92; }

  const N = 4, h = dt / N;
  for (let i = 0; i < N && dt > 0; i++) {
    tt += h;
    wob.vx += (-wob.x * 3.2 - wob.vx * 0.9) * h; wob.vz += (-wob.z * 3.2 - wob.vz * 0.9) * h;
    wob.x += wob.vx * h; wob.z += wob.vz * h;
    const d = pose(tt), g = refAt(tt);
    bs.v += (-GR * slopeAt(bs.s) - DAMP * bs.v + 6 * (g.s - bs.s) + 3 * (g.v - bs.v)) * h;
    let ns = bs.s + bs.v * h;
    const k0 = Math.floor(bs.s / LEN), k1 = Math.floor(ns / LEN);
    if (k0 !== k1) {
      const b = Math.max(k0, k1), open = (((b % 2) + 2) % 2 === 1) ? d > 0.9 : d < -0.9;
      if (open) { pathS(b * LEN + 1e-3, tmp); snd.gap(panOf(tmp), Math.min(1, Math.abs(bs.v) / 2)); }
      else { ns = bs.v > 0 ? b * LEN - 1e-3 : b * LEN + 1e-3; bs.v *= -0.2; }
    }
    bs.s = ns;
  }
  if (dt === 0) pose(tt);
  placeCam(tt);
  updateRopes();

  pathS(bs.s, bw);
  pathS(bs.s - 0.02, p1); pathS(bs.s + 0.02, p2);
  fw.subVectors(p2, p1).normalize(); rt.crossVectors(Y, fw).normalize(); upv.crossVectors(fw, rt);
  ball.quaternion.setFromRotationMatrix(mb.makeBasis(rt, upv, fw)).multiply(qd.setFromAxisAngle(XA, bs.s / RB));
  ball.position.copy(bw);
  uBall.value.copy(bw);

  if (slime.visible) {
    if (!goo.ready || Math.abs(goo.p[0].s - bs.s) > 3) {
      goo.ready = true;
      const t0 = tt - 3;
      goo.seed(refAt(t0).s);
      for (let k = 0; k < 720; k++) goo.step(refAt(t0 + (k + 1) / 240).s, 1 / 240);
      const off = bs.s - refAt(tt).s;
      goo.p.forEach((b) => { b.s += off; });
    }
    const NSUB = 4;
    for (let k = 0; k < NSUB && dt > 0; k++) goo.step(bs.s, dt / NSUB);
    fw.set(0, 0, 0);
    let far = 0;
    for (let i = 0; i < NS; i++) {
      const b = goo.p[i];
      tubeFloor(b.s, b.x, b.r * 0.92, tmp);
      slimeData[i].set(tmp.x, tmp.y, tmp.z, b.r);
      fw.add(tmp);
    }
    fw.multiplyScalar(1 / NS);
    for (let i = 0; i < NS; i++) far = Math.max(far, Math.hypot(slimeData[i].x - fw.x, slimeData[i].y - fw.y, slimeData[i].z - fw.z) + slimeData[i].w);
    slime.position.copy(fw);
    slime.scale.setScalar(far + 0.14);
    uSlimeFar.value = 2 * (far + 0.14);
  }

  pipe.render();
  window.__frames = (window.__frames || 0) + 1;
  if (QS.has('frames') && window.__frames >= +QS.get('frames')) { renderer.setAnimationLoop(null); window.__done = true; }
  if (first) { first = false; document.getElementById('loading').classList.add('off'); window.__ready = true; }
});

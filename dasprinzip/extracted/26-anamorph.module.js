import * as THREE from 'three/webgpu';
import {
  Fn, uniform, float, vec2, vec3, vec4, positionLocal, positionWorld, length, atan, fract, floor, sin, cos, abs, max, min, mix,
  smoothstep, step, select, fwidth, exp, pow, clamp, pass, uv, cameraPosition, normalize, dot, dFdx, dFdy, transformNormalToView, normalView, normalLocal, normalWorld, positionGeometry, viewportLinearDepth, linearDepth, instanceIndex, texture, screenUV, renderOutput, getViewPosition, attribute, uint, int, bitXor, shiftRight, bitAnd, reflector
} from 'three/tsl';
import { bloom } from 'three/addons/tsl/display/BloomNode.js';
import { ao } from 'three/addons/tsl/display/GTAONode.js';
import { fxaa } from 'three/addons/tsl/display/FXAANode.js';
import { ConvexGeometry } from 'three/addons/geometries/ConvexGeometry.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const fail = (m) => { const e = document.getElementById('err'); e.style.display = 'grid'; e.textContent = m; document.getElementById('loading').classList.add('off'); };
const QS = new URLSearchParams(location.search);
const TAU = Math.PI * 2;

////////////////////////////////////////////////////////////////
//// RENDERER
////////////////////////////////////////////////////////////////

const renderer = new THREE.WebGPURenderer({ antialias: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.appendChild(renderer.domElement);
try { await renderer.init(); } catch (e) { fail('This demo needs WebGPU or WebGL2.'); throw e; }

const pmrem = new THREE.PMREMGenerator(renderer);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.05, 300);

const SUN_DIR = new THREE.Vector3(0.07, 0.13, -1).normalize();
const uSun = uniform(SUN_DIR.clone());
const HAZE = new THREE.Color(0.84, 0.76, 0.64);
scene.fog = null;

const PLINTH_R = 5.2, PLINTH_H = -0.08;
const glowA = uniform(new THREE.Vector3()), glowB = uniform(new THREE.Vector3()), glowLevel = uniform(1);

////////////////////////////////////////////////////////////////
//// LIGHT
////////////////////////////////////////////////////////////////

scene.add(new THREE.HemisphereLight(0xd8cbb4, 0x9c7a58, 0.5));
const sun = new THREE.DirectionalLight(0xffe2bc, 4.6);
sun.position.copy(SUN_DIR).multiplyScalar(45).add(new THREE.Vector3(0, 0, -4));
sun.target.position.set(0, 0, -4);
scene.add(sun.target);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
sun.shadow.camera.left = -24; sun.shadow.camera.right = 24; sun.shadow.camera.top = 30; sun.shadow.camera.bottom = -30;
sun.shadow.camera.near = 5; sun.shadow.camera.far = 110;
sun.shadow.radius = 3;
sun.shadow.bias = -0.0005;
scene.add(sun);

////////////////////////////////////////////////////////////////
//// RUST (crust, pits and scale plates as in Day21 Bolt)
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
  const a = hash13(i), b = hash13(i.add(vec3(1, 0, 0))), c = hash13(i.add(vec3(0, 1, 0))), d = hash13(i.add(vec3(1, 1, 0)));
  const e = hash13(i.add(vec3(0, 0, 1))), g = hash13(i.add(vec3(1, 0, 1))), h = hash13(i.add(vec3(0, 1, 1))), k = hash13(i.add(vec3(1, 1, 1)));
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

const rustH = Fn(([t]) => {
  const lump = fbm4(t.mul(2.6));
  const bl = vn(t.mul(7.0).add(3.0)).abs().oneMinus();
  const blister = bl.mul(bl).mul(bl).mul(smoothstep(-0.1, 0.4, vn(t.mul(1.7))));
  const pit = smoothstep(0.7, 0.92, vn(t.mul(11.0)).mul(0.5).add(0.5));
  const pn = fbm3(t.mul(2.4).add(11.0));
  const plate = smoothstep(0.08, 0.105, pn).add(smoothstep(0.10, 0.08, pn.sub(0.03)).mul(smoothstep(0.06, 0.08, pn)).mul(0.6));
  const grain = vn(t.mul(26.0)).mul(0.18);
  return lump.add(blister.mul(0.7)).sub(pit.mul(0.9)).add(plate.mul(0.55)).add(grain);
}).setLayout({ name: 'rustH', type: 'float', inputs: [{ name: 't', type: 'vec3' }] });

const rustAlbedo = Fn(([tq, hgt]) => {
  const cav = smoothstep(-0.9, 0.5, hgt);
  const tone = fbm4(tq.mul(3.2)).mul(0.5).add(0.5);
  const deep = vec3(0.20, 0.085, 0.04), mid = vec3(0.52, 0.22, 0.075), hot = vec3(0.80, 0.40, 0.12);
  const rust = mix(deep, mid, smoothstep(0.25, 0.6, tone)).toVar();
  rust.assign(mix(rust, hot, smoothstep(0.55, 0.85, tone.add(vn(tq.mul(22.0)).mul(0.18)))));
  rust.mulAssign(vn(tq.mul(24.0)).mul(0.15).add(0.93));
  rust.mulAssign(cav.mul(0.5).add(0.62));
  const plate = smoothstep(0.08, 0.16, fbm3(tq.mul(2.4).add(11.0))).mul(smoothstep(-0.2, 0.3, fbm3(tq.mul(1.1).add(4.0))));
  const pale = mix(vec3(0.58, 0.54, 0.48), vec3(0.80, 0.76, 0.70), vn(tq.mul(9.0)).mul(0.5).add(0.5));
  const stain = smoothstep(0.0, 0.5, vn(tq.mul(6.0).add(2.0)));
  const scale = mix(pale, mid.mul(1.3), stain.mul(0.45));
  return vec4(mix(rust, scale, clamp(plate.mul(0.3), 0.0, 1.0)), plate);
}).setLayout({ name: 'rustAlb', type: 'vec4', inputs: [{ name: 'tq', type: 'vec3' }, { name: 'h', type: 'float' }] });

////////////////////////////////////////////////////////////////
//// LED PATTERN
////////////////////////////////////////////////////////////////

const uTime = uniform(0);
const uRot = uniform(0);
const hash21 = (x, y) => fract(sin(x.mul(127.1).add(y.mul(311.7)).add(5.3)).mul(43758.5453));
const LED = new THREE.Color(1.0, 0.7, 0.0);
const LEDV = vec3(LED.r, LED.g, LED.b);

const RA = 2.3, RB = RA * 1.3, TH = 0.15;
const NA = 13;
const RING0 = 0.2 * RA, RING_S = (0.975 * RA - RING0) / NA;
const RIM_A = RING0 + NA * RING_S;
const HINGE_D = 2 * RING0 + 17 * RING_S;
const HW = RING_S * 0.15;
const ROT_PERIOD = 13.4;

// sector layout on disc A, q = fract(C1 - psi), q grows clockwise from the leading edge of the solid sector
const C1 = 0.526;
const uRotAbs = uniform(0);
const uQs = uniform(0.16), uQg = uniform(0.22), uQf = uniform(0.4);
const ih3 = (a, b, c) => {
  const ua = uint(int(a).add(int(1024))), ub = uint(int(b).add(int(1024))), uc = uint(int(c).add(int(1024)));
  const h0 = bitXor(bitXor(ua.mul(uint(73856093)), ub.mul(uint(19349663))), uc.mul(uint(83492791)));
  const h1 = bitXor(h0, shiftRight(h0, uint(13))).mul(uint(1274126177));
  const h2 = bitXor(h1, shiftRight(h1, uint(16)));
  return float(bitAnd(h2, uint(65535))).div(65535.0);
};
const ih3J = (a, b, c) => {
  let h = (Math.imul((a + 1024) | 0, 73856093) ^ Math.imul((b + 1024) | 0, 19349663) ^ Math.imul((c + 1024) | 0, 83492791)) >>> 0;
  h = (h ^ (h >>> 13)) >>> 0; h = Math.imul(h, 1274126177) >>> 0; h = (h ^ (h >>> 16)) >>> 0;
  return (h & 65535) / 65535;
};
const Q_SOLID = 0.36, Q_GAP = 0.43, Q_FAN = 0.63;
const TICKS = [[0.33, 6]];
const GAP_DOTS = [[0.40, 10]];
const N_SPOKES = 96;

const capsule = (s, L, q, hw) => length(vec2(max(abs(s).sub(L), 0.0), q)).sub(hw);
const fill = (d) => { const aa = fwidth(d).mul(0.8).add(0.0008); return float(1).sub(smoothstep(aa.negate(), aa, d)); };
const soft = (grow, w) => (d) => { const aa = fwidth(d).mul(0.8).add(0.0008); return float(1).sub(smoothstep(aa.add(w).negate(), aa.add(w), d.sub(grow))); };
const F_GROOVE = soft(HW * 0.35, HW * 0.35);
const F_LIP = soft(HW * 1.05, HW * 0.45);

function patternA(rIdx, rMet, psi, metOf, F = fill) {
  const u = rIdx.sub(RING0).div(RING_S);
  const ring = floor(u);
  const fr = fract(u).sub(0.5);
  const inR = step(0.0, u).mul(step(u, NA - 0.001));
  const ringIdxR = ring.add(0.5).mul(RING_S).add(RING0);
  const ringMetR = metOf(ringIdxR);

  const cells = max(floor(ringIdxR.mul(TAU).div(RING_S * 0.9)), 10.0);
  const off = ih3(ring, float(17.0), float(0.0));
  const x = fract(psi.add(off)).mul(cells);
  const c = floor(x);
  const fx = fract(x).sub(0.5);
  const cellM = ringMetR.mul(TAU).div(cells);
  const s = fx.mul(cellM);
  const qr = fr.mul(RING_S);

  const qs = fract(float(C1).sub(psi));
  const arcM = TAU * 1.0;
  const solid = fill(qs.sub(uQs).mul(arcM).mul(ringMetR));
  const dashed = fill(uQf.sub(qs).mul(arcM).mul(ringMetR));

  const onAt = (k) => {
    const ck0 = c.add(k);
    const ck = ck0.sub(floor(ck0.div(cells)).mul(cells));
    const cpsi = fract(ck.add(0.5).div(cells).sub(off));
    const kk = float(0.0);
    const qk = fract(float(C1).sub(cpsi));
    const g = clamp(qk.sub(uQf).div(float(1).sub(uQf)), 0.0, 1.0);
    const p = mix(float(0.2), float(0.6), pow(g, 1.25));
    const single = step(ih3(ck, ring, kk.mul(3.0).add(1.0)), p);
    const blk = step(ih3(floor(ck.div(3.0)), ring, kk.mul(3.0).add(2.0)), p.mul(p).mul(0.45));
    const hole = step(ih3(ck, ring, kk.mul(3.0).add(3.0)), mix(float(0.12), float(0.0), g));
    return max(single, blk).mul(float(1).sub(hole));
  };
  const on0 = onAt(0), onL = onAt(-1), onR = onAt(1);
  const half = cellM.mul(0.5);
  const mg = RING_S * 0.1;
  const ea = select(onL.greaterThan(0.5), half.add(cellM).negate(), half.negate().add(HW + mg));
  const eb = select(onR.greaterThan(0.5), half.add(cellM), half.sub(HW + mg));
  const ctr = ea.add(eb).mul(0.5);
  const Lh = max(eb.sub(ea).mul(0.5), 0.0);
  const ringSolid = F(capsule(float(0), float(0), qr, HW)).mul(solid);
  const ringDash = F(capsule(s.sub(ctr), Lh, qr, HW)).mul(on0).mul(dashed);
  let rings = max(ringSolid, ringDash).mul(inR);

  let tick = float(0);
  for (const [tq, k] of TICKS) {
    const dq = fract(qs.sub(uQs.mul(0.6)).add(0.5)).sub(0.5);
    const tang = dq.mul(TAU).mul(rMet);
    const rc = RING0 + (k + 1) * RING_S;
    const radial = abs(rIdx.sub(rc));
    tick = max(tick, F(capsule(radial, float(RING_S * 0.62), tang, HW * 0.9)));
    const cut = smoothstep(HW * 2.2, HW * 3.4, abs(tang)).max(step(RING_S * 1.25, radial));
    rings = rings.mul(cut);
  }

  for (const [dq0, k] of GAP_DOTS) {
    const dq = fract(qs.sub(uQs.add(uQg).mul(0.5)).add(0.5)).sub(0.5);
    const rc = RING0 + (k + 0.5) * RING_S;
    tick = max(tick, F(length(vec2(dq.mul(TAU).mul(rMet), rIdx.sub(rc))).sub(HW)));
  }

  const xs = psi.mul(N_SPOKES);
  const fs = fract(xs).sub(0.5);
  const sC = floor(xs).add(0.5).div(N_SPOKES);
  const qsC = fract(float(C1).sub(sC));
  const spokeOn = step(uQg.add(0.25 / N_SPOKES), qsC).mul(step(qsC, uQf.sub(0.25 / N_SPOKES)));
  const tangS = fs.mul(TAU).mul(rMet).div(N_SPOKES);
  const rS0 = RING0 + RING_S * 0.9, rS1 = RIM_A - RING_S * 0.4;
  const spokes = F(capsule(rIdx.sub((rS0 + rS1) / 2), float((rS1 - rS0) / 2 - HW * 0.8), tangS, HW * 0.8)).mul(spokeOn);

  return max(max(rings, tick.mul(inR.max(step(rIdx, RIM_A)))), spokes);
}

function dotsB(r, psi, F = fill) {
  const u = r.sub(RING0).div(RING_S);
  const ring = floor(u);
  const fr = fract(u).sub(0.5);
  const ringR = ring.add(0.5).mul(RING_S).add(RING0);
  const segs = max(floor(ringR.mul(TAU).div(RING_S * 1.7)), 6.0);
  const x = fract(psi.add(hash21(ring, float(4.0)))).mul(segs);
  const seg = floor(x);
  const s = fract(x).sub(0.5).mul(ringR.mul(TAU).div(segs));
  const L = mix(float(0.0), float(RING_S * 0.55), step(0.78, hash21(seg, ring.add(2.0))));
  const alive = step(hash21(ring.mul(2.1), seg), 0.82);
  return F(capsule(s, L, fr.mul(RING_S), HW * 0.95)).mul(alive).mul(step(0.0, u));
}

const rustCoord = (p, rotSign, seed) => {
  const ang = uRot.mul(TAU * rotSign);
  const c = cos(ang), sn = sin(ang);
  const pr = vec2(p.x.mul(c).sub(p.y.mul(sn)), p.x.mul(sn).add(p.y.mul(c)));
  return vec3(pr.mul(2.6), p.z.mul(2.6).add(seed));
};

function rustSurface(mat, tq, mask, faceZ, seamAO, zone) {
  const hgt = rustH(tq);
  const core = clamp(mask.x, 0.0, 1.0), groove = clamp(mask.y, 0.0, 1.0), lip = clamp(mask.z, 0.0, 1.0);
  const rim = clamp(lip.sub(groove), 0.0, 1.0);
  const pn = fbm3(tq.mul(3.4).add(vec3(5.0, 2.0, 9.0)));
  const thr = mix(float(0.9), float(0.12), zone);
  const peel = smoothstep(thr, thr.add(0.05), pn).mul(groove.oneMinus());
  const peelEdge = smoothstep(thr.sub(0.06), thr, pn).mul(peel.oneMinus()).mul(zone);
  const H = hgt.mul(0.0045).mul(lip.mul(0.8).oneMinus()).sub(groove.mul(0.016)).add(rim.mul(rim).mul(0.0045)).sub(peel.mul(0.0035)).add(peelEdge.mul(0.0015));
  const p = positionLocal;
  const gx = dFdx(H), gy = dFdy(H);
  const px = dFdx(p.xy), py = dFdy(p.xy);
  const det = px.x.mul(py.y).sub(px.y.mul(py.x));
  const sdet = select(abs(det).lessThan(1e-12), float(1e-12), det);
  const hx = gx.mul(py.y).sub(gy.mul(px.y)).div(sdet);
  const hy = gy.mul(px.x).sub(gx.mul(py.x)).div(sdet);
  const nL = normalize(vec3(hx.negate(), hy.negate(), float(faceZ)));
  mat.normalNode = transformNormalToView(nL);
  const ra = rustAlbedo(tq, hgt);
  const bare = mix(vec3(0.30, 0.25, 0.19), vec3(0.52, 0.42, 0.28), vn(tq.mul(40.0)).mul(0.5).add(0.5));
  const wall = vec3(0.07, 0.055, 0.035);
  const scraped = mix(vec3(0.55, 0.5, 0.44), vec3(0.85, 0.8, 0.7), vn(tq.mul(55.0)).mul(0.5).add(0.5));
  const c0 = mix(mix(ra.rgb.mul(0.8), bare, rim.mul(0.85)), wall, groove);
  const c = mix(c0.mul(peelEdge.mul(0.55).oneMinus()), scraped, peel);
  mat.colorNode = mix(c, vec3(0.1, 0.08, 0.02), core).mul(seamAO);
  mat.aoNode = seamAO;
  mat.roughnessNode = mix(mix(mix(mix(float(0.9), float(0.68), ra.w), float(0.38), rim), float(0.3), groove), float(0.32), peel);
  mat.metalnessNode = mix(mix(mix(float(0.08), float(0.75), rim), float(0.5), groove), float(0.85), peel);
}

function makeLed(kind, intensity) {
  const U = { pulseT: uniform(-100), level: uniform(1) };
  const rotSign = kind === 'A' ? -1 : 1;
  const seed = kind === 'A' ? 3.7 : 21.3;
  const maskFn = Fn(() => {
    const p = positionLocal;
    const r = length(p.xy);
    const th = atan(p.y, p.x).div(TAU);
    const one = (F) => {
      if (kind === 'A') return patternA(r, r, th.sub(uRot), (x) => x, F);
      const rIdx = float(HINGE_D).sub(r);
      const mapped = patternA(rIdx, r, float(0.5).sub(th).sub(uRot), (x) => float(HINGE_D).sub(x), F);
      const inner = dotsB(r, th.add(uRot), F).mul(step(rIdx, RIM_A).oneMinus());
      return max(mapped.mul(step(RING0, rIdx)), inner);
    };
    return vec3(one(fill), one(F_GROOVE), one(F_LIP));
  });
  const boostFn = Fn(() => {
    const r = length(positionLocal.xy);
    const age = uTime.sub(U.pulseT);
    const pulse = exp(abs(r.sub(age.mul(2.0).add(0.2))).mul(-6.0)).mul(exp(age.mul(-0.9))).mul(step(0.0, age));
    const buzz = sin(uTime.mul(0.9).add(r.mul(2.3))).mul(0.05).add(0.95);
    return buzz.mul(pulse.mul(2.2).add(1.0)).mul(U.level);
  });
  const mats = [THREE.FrontSide, THREE.BackSide].map((side) => {
    const mat = new THREE.MeshPhysicalNodeMaterial({ side, metalness: 0.1, roughness: 0.85 });
    const m = maskFn();
    const pl = positionLocal;
    const x0 = kind === 'A' ? HINGE_D - RB : -RB, x1 = kind === 'A' ? RA : RA - HINGE_D;
    const inSeam = smoothstep(x0 - 0.05, x0 + 0.35, pl.x).mul(smoothstep(x1 + 0.05, x1 - 0.35, pl.x));
    const Rd = kind === 'A' ? RA : RB;
    const footD = length(pl.xy.sub(vec2(0, -Rd)));
    const footAO = float(1).sub(exp(footD.mul(-2.4)).mul(0.75));
    const seamAO = float(1).sub(exp(abs(pl.y).mul(-3.2)).mul(0.9).add(exp(abs(pl.y).mul(-18.0)).mul(0.1)).mul(inSeam)).max(0.04).mul(footAO);
    const zone = max(exp(abs(pl.y).mul(-1.3)).mul(inSeam), exp(footD.mul(-0.9)));
    rustSurface(mat, rustCoord(pl, rotSign, seed), m, side === THREE.FrontSide ? 1 : -1, seamAO, zone);
    mat.emissiveNode = LEDV.mul(m.x.add(m.y.mul(0.05))).mul(boostFn()).mul(intensity);
    return mat;
  });
  const edgeMat = new THREE.MeshPhysicalNodeMaterial({ metalness: 0.1, roughness: 0.85 });
  {
    const p = positionLocal;
    const tq = rustCoord(vec3(p.x, p.z.negate(), p.y), rotSign, seed);
    const hgt = rustH(tq);
    const ra = rustAlbedo(tq, hgt);
    edgeMat.colorNode = ra.rgb.mul(0.85);
    edgeMat.roughnessNode = mix(float(0.9), float(0.68), ra.w);
  }
  return { mats, edgeMat, U };
}

const brassMat = (() => {
  const m = new THREE.MeshPhysicalNodeMaterial({ metalness: 1.0, roughness: 0.35 });
  const p = positionWorld;
  const n = fbm4(p.mul(1.8));
  const pat = smoothstep(0.25, 0.6, fbm3(p.mul(2.7).add(5.0)));
  const tarnish = smoothstep(-0.1, 0.6, fbm3(p.mul(0.8).add(2.0)));
  const base = mix(vec3(0.80, 0.58, 0.26), vec3(0.30, 0.20, 0.09), tarnish.mul(0.6)).mul(n.mul(0.3).add(0.85));
  m.colorNode = mix(base, vec3(0.20, 0.36, 0.30), pat.mul(0.4));
  m.roughnessNode = mix(mix(float(0.25), float(0.5), tarnish), float(0.85), pat);
  m.metalnessNode = mix(float(1.0), float(0.15), pat);
  return m;
})();

const GRANITE = 'data:image/jpeg;base64,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';
const graniteTex = new THREE.TextureLoader().load(GRANITE);
graniteTex.wrapS = graniteTex.wrapT = THREE.RepeatWrapping;
graniteTex.colorSpace = THREE.SRGBColorSpace;
graniteTex.anisotropy = 8;
const triTex = (p, n) => {
  const w0 = max(abs(n).sub(0.2), 0.001);
  const w = w0.div(w0.x.add(w0.y).add(w0.z));
  return texture(graniteTex, p.yz).rgb.mul(w.x).add(texture(graniteTex, p.zx).rgb.mul(w.y)).add(texture(graniteTex, p.xy).rgb.mul(w.z));
};
const FOOT_TOPS = [];
const uWater = uniform(QS.has('sand') ? 0 : 1);
const WATER_Y = 0.03;
const STONE_TOP = 0.021;
const cubeRT = new THREE.CubeRenderTarget(256, { type: THREE.HalfFloatType, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
const cubeCam = new THREE.CubeCamera(0.2, 220, cubeRT);
cubeCam.position.set(4.6, 4.5, 11.0);
const uTapT = uniform(-100), uTapN = uniform(1), uTapP = uniform(new THREE.Vector2()), uTapAmp = uniform(1), uShiftPrev = uniform(1), uShiftCur = uniform(1);
const makeMetal = (wobble) => {
  const m = new THREE.MeshStandardNodeMaterial({ roughness: 0.15, metalness: 1.0 });
  if (wobble) {
    const aPos = attribute('aPos', 'vec2'), aH = attribute('aH', 'float');
    const age = uTime.sub(uTapT).sub(length(aPos.sub(uTapP)).div(14.0));
    const amp = mix(float(0.06), float(0.32), smoothstep(0.1, 4.0, aH));
    const tallK = float(1).add(smoothstep(3.0, 12.0, aH).mul(1.6));
    const off = (n) => hash13(vec3(aPos.mul(1.37), n.add(0.5))).sub(0.5).mul(amp);
    const settle = smoothstep(0.4, 1.8, age);
    const shiftK = (k) => float(1).add(k.sub(1.0).mul(tallK).mul(smoothstep(0.8, 3.0, aH)));
    const pers = mix(off(uTapN.sub(1.0)).mul(shiftK(uShiftPrev)), off(uTapN).mul(shiftK(uShiftCur)), settle).mul(step(0.5, uTapN));
    const wob = sin(age.mul(11.0)).mul(exp(age.mul(-1.5))).mul(step(0.0, age)).mul(mix(float(0.11), float(0.24), smoothstep(0.1, 4.0, aH))).mul(uTapAmp);
    const tdist = length(aPos.sub(uTapP));
    const front = exp(abs(age).mul(-7.0)).mul(0.16).mul(uTapAmp).mul(exp(tdist.mul(-0.035)));
    m.positionNode = positionLocal.add(vec3(0, pers.add(wob).add(front), 0));
  }
  m.envMap = cubeRT.texture;
  m.envMapIntensity = 1.0;
  const p = positionWorld;
  const tx = triTex(p.mul(0.32), normalWorld);
  const lum = dot(tx, vec3(0.299, 0.587, 0.114));
  const steel = mix(vec3(0.56, 0.53, 0.49), vec3(0.86, 0.82, 0.74), smoothstep(0.1, 0.5, lum));
  const tq = p.mul(1.7);
  const rn = fbm3(p.mul(0.42).add(vec3(3.0, 1.0, 7.0)));
  const foot = smoothstep(1.8, 0.0, p.y).mul(0.32);
  const speck = smoothstep(0.62, 0.8, vn(p.mul(3.3)).mul(0.5).add(0.5)).mul(0.5);
  const rustM = smoothstep(0.18, 0.42, rn.add(foot).add(speck).add(lum.sub(0.3).mul(0.4)));
  const ra = rustAlbedo(tq, fbm3(tq.mul(2.6)));
  const wetB = smoothstep(WATER_Y + 0.14, WATER_Y + 0.005, p.y).mul(uWater);
  m.colorNode = mix(steel, ra.rgb.mul(0.9), rustM).mul(mix(float(1), float(0.55), wetB));
  m.metalnessNode = mix(float(1.0), float(0.12), rustM);
  m.roughnessNode = mix(float(0.1).add(smoothstep(0.2, 0.6, lum).mul(0.14)), mix(float(0.88), float(0.65), ra.w), rustM).mul(mix(float(1), float(0.3), wetB));
  return m;
};
const brickMat = makeMetal(false);
const blockMat = makeMetal(true);

////////////////////////////////////////////////////////////////
//// DISCS
////////////////////////////////////////////////////////////////


function buildDisc(o) {
  const grp = new THREE.Group();
  const led = makeLed(o.kind, o.intensity);
  const faceGeo = new THREE.CircleGeometry(o.R, 256);
  const front = new THREE.Mesh(faceGeo, led.mats[0]); front.position.z = TH / 2;
  const back = new THREE.Mesh(faceGeo, led.mats[1]); back.position.z = -TH / 2;
  const edge = new THREE.Mesh(new THREE.CylinderGeometry(o.R, o.R, TH, 256, 1, true), led.edgeMat);
  edge.rotation.x = Math.PI / 2;
  for (const m of [front, back, edge]) { m.castShadow = true; m.receiveShadow = m === edge; grp.add(m); }
  const n = new THREE.Vector3().crossVectors(o.hinge, o.up).normalize();
  grp.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(o.hinge, o.up, n));
  grp.position.copy(o.center);
  scene.add(grp);
  return { grp, faces: [front, back], led, center: o.center.clone(), normal: n, up: o.up.clone(), R: o.R };
}

const ALPHA = 0.32, LEAN_A = 0.58, LEAN_B = 0.5;
const n0 = new THREE.Vector3(Math.sin(ALPHA), 0, Math.cos(ALPHA));
const hinge = new THREE.Vector3(Math.cos(ALPHA), 0, -Math.sin(ALPHA));
const upA = new THREE.Vector3(0, 1, 0).multiplyScalar(Math.cos(LEAN_A)).addScaledVector(n0, -Math.sin(LEAN_A));
const upB = new THREE.Vector3(0, 1, 0).multiplyScalar(Math.cos(LEAN_B)).addScaledVector(n0, Math.sin(LEAN_B));
const nA0 = new THREE.Vector3().crossVectors(hinge, upA);
const LIFT = 0.62;
const centerA = new THREE.Vector3(-1.5, PLINTH_H + 0.42 + LIFT + RA * Math.cos(LEAN_A), 0.6);

const discA = buildDisc({ kind: 'A', R: RA, center: centerA, hinge, up: upA, intensity: 2.2 });
const discB = buildDisc({ kind: 'B', R: RB, center: centerA.clone().addScaledVector(hinge, HINGE_D), hinge, up: upB, intensity: 2.1 });
glowA.value.copy(discA.center).addScaledVector(discA.normal, 1.1);
glowB.value.copy(discB.center).addScaledVector(discB.normal, 1.1);

{
  const addFoot = (disc, w, d, lean) => {
    const low = disc.center.clone().addScaledVector(disc.up, -disc.R);
    const top = low.y + 0.2;
    const slotBot = low.y - 0.03;
    const off = -Math.tan(lean) * (top - low.y) * 0.5;
    const gap = TH / Math.cos(lean) + Math.abs(off) * 2 + 0.07;
    const g = new THREE.Group();
    g.position.set(low.x, 0, low.z);
    g.lookAt(g.position.clone().add(n0));
    const part = (pw, y0, y1, pz, pd) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(pw, y1 - y0, pd), brickMat);
      m.position.set(0, (y0 + y1) / 2, pz);
      m.castShadow = true; m.receiveShadow = true;
      g.add(m);
    };
    part(w, PLINTH_H, slotBot, 0, d);
    FOOT_TOPS.push({ x: low.x, z: low.z, y: top });
    const back = off - gap / 2, front = off + gap / 2;
    part(w, slotBot, top, (back - d / 2) / 2, back + d / 2);
    part(w, slotBot, top, (front + d / 2) / 2, d / 2 - front);
    scene.add(g);
  };
  addFoot(discA, 1.7, 0.8, LEAN_A);
  addFoot(discB, 1.7, 0.8, -LEAN_B);
}

////////////////////////////////////////////////////////////////
//// DESERT (after Shane's extruded herringbone passage, the corridor
//// replaced by a clearing around the discs)
////////////////////////////////////////////////////////////////

const WATER = { mesh: null, sand: null };
const PM_N = 512, PM_SZ = 90;
const PM_DATA = new Uint8Array(PM_N * PM_N);
const PM_TEX = new THREE.DataTexture(PM_DATA, PM_N, PM_N, THREE.RedFormat, THREE.UnsignedByteType);
PM_TEX.magFilter = THREE.LinearFilter; PM_TEX.minFilter = THREE.LinearFilter; PM_TEX.needsUpdate = true;
const BLOCKS = [];
const puddleMask = (xz) => fbm3(vec3(xz.mul(0.21), 3.0)).mul(0.5).add(0.5).add(vn(vec3(xz.mul(0.9), 8.0)).mul(0.06));
const PUDDLE_T = 0.53;
const WS = 2.0, YS = 0.8;
const CLEAR_R = 5.6;
const CORR_W = 1.7;
const corrX = (z) => 4.8 + 0.7 * Math.sin(z * 0.05) * THREE.MathUtils.smoothstep(Math.abs(z), 8, 20);
const openDist = (x, z) => Math.min(Math.abs(x - corrX(z)) - CORR_W, Math.hypot(x * 0.95, z > 0 ? z * 0.42 : z * 0.85) - CLEAR_R);
const n2DS = (x, y) => {
  const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
  const d = ix + iy * 113;
  const h = (k) => { const v = Math.sin(k + d) * 43758.5453; return v - Math.floor(v); };
  const a = h(0), b = h(1), c = h(113), e = h(114);
  return (a * (1 - fy) + c * fy) * (1 - fx) + (b * (1 - fy) + e * fy) * fx;
};
const n2D = (x, y) => {
  const ix = Math.floor(x), iy = Math.floor(y);
  let fx = x - ix, fy = y - iy;
  fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
  const d = ix + iy * 113;
  const h = (k) => { const v = Math.sin(k + d) * 43758.5453; return v - Math.floor(v); };
  const a = h(0), b = h(1), c = h(113), e = h(114);
  return (a * (1 - fy) + c * fy) * (1 - fx) + (b * (1 - fy) + e * fy) * fx;
};
const surfShader = (x, z) => { x /= 2.5; z /= 2.5; return n2D(x, z) * 0.67 + n2D(x * 2, z * 2) * 0.33; };
const sandY = (wx, wz) => {
  const y = ((surfShader(wx / WS, wz / WS) - 0.5) * 0.8 + 0.05) * YS * 1.3;
  const r = Math.hypot(wx, wz);
  const k = THREE.MathUtils.smoothstep(r, 2.2, 3.8);
  return y * k - 0.03 * (1 - k);
};

const skyNode = Fn(([rd]) => {
  const c1 = vec3(0.8, 0.7, 0.5), c2 = vec3(0.4, 0.6, 0.9);
  const sky = mix(c1, c2, pow(max(rd.y.add(0.15), 0.0), 0.5)).toVar();
  const sd = clamp(dot(uSun, rd), 0.0, 1.0);
  sky.addAssign(vec3(1, 0.7, 0.4).mul(pow(sd, 16.0)).mul(0.2));
  sky.addAssign(vec3(1.0, 0.92, 0.75).mul(pow(sd, 900.0).mul(5.0).add(pow(sd, 120.0).mul(0.6))));
  const s32 = pow(sd, 32.0);
  sky.addAssign(vec3(1, 0.9, 0.7).mul(pow(s32, 32.0)).mul(0.35).div(vec3(1.2, 1, 0.8)).mul(6.0));
  const cuv = rd.xz.div(rd.y.add(0.15).max(0.02)).mul(1.5);
  const cl = fbm3(vec3(cuv.mul(0.9), 1.0)).mul(0.5).add(0.5);
  sky.assign(mix(sky, vec3(2.0), smoothstep(0.45, 1.0, cl).mul(smoothstep(0.45, 0.55, rd.y.mul(0.5).add(0.5))).mul(0.4)));
  return sky.mul(vec3(1.2, 1.0, 0.8));
});

{
  const skyMat = new THREE.MeshBasicNodeMaterial({ side: THREE.BackSide, fog: false, depthWrite: false });
  skyMat.colorNode = skyNode(normalize(positionWorld.sub(cameraPosition)));
  const skyMesh = new THREE.Mesh(new THREE.SphereGeometry(150, 48, 24), skyMat);
  skyMesh.renderOrder = -10;
  skyMesh.frustumCulled = false;
  scene.add(skyMesh);
  const env = new THREE.Scene();
  const envMat = new THREE.MeshBasicNodeMaterial({ side: THREE.BackSide });
  envMat.colorNode = skyNode(normalize(positionWorld));
  env.add(new THREE.Mesh(new THREE.SphereGeometry(10, 48, 24), envMat));
  scene.environment = pmrem.fromScene(env, 0.02).texture;
  scene.environmentIntensity = 0.45;
}

{
  const SZ = 90, SEG = 300;
  const g = new THREE.PlaneGeometry(SZ, SZ, SEG, SEG);
  g.rotateX(-Math.PI / 2);
  const pa = g.attributes.position;
  for (let i = 0; i < pa.count; i++) pa.setY(i, sandY(pa.getX(i), pa.getZ(i)));
  g.computeVertexNormals();
  const m = new THREE.MeshStandardNodeMaterial({ roughness: 0.95, metalness: 0.0 });
  {
    const pl = positionLocal;
    const dist = length(pl.xz.sub(uTapP));
    const age = uTime.sub(uTapT).sub(dist.div(14.0));
    const wave = sin(age.mul(11.0)).mul(exp(age.mul(-1.5))).mul(step(0.0, age)).mul(0.11).mul(uTapAmp);
    const front = exp(abs(age).mul(-7.0)).mul(0.16).mul(uTapAmp).mul(exp(dist.mul(-0.035)));
    m.positionNode = pl.add(vec3(0, wave.add(front), 0));
  }
  const p = positionWorld;
  const ps = p.div(WS);
  const bq = vec3(ps.x.mul(1.65), ps.y.div(YS).mul(2.2), ps.z.mul(3.85));
  const nsr = vn(bq).mul(0.285).add(vn(bq.mul(2.0)).mul(0.14)).add(vn(bq.mul(4.0)).mul(0.075)).add(0.5);
  const ridge = float(1).sub(abs(smoothstep(0.0, 1.0, nsr).sub(0.5)).mul(2.0));
  const bs = mix(ridge, smoothstep(0.0, 1.0, ridge), 0.65);
  const dist = length(p.sub(cameraPosition));
  const H = bs.mul(0.035).div(dist.mul(dist).mul(0.004).add(1.0));
  const gx = dFdx(H), gy = dFdy(H);
  const px = dFdx(p.xz), py = dFdy(p.xz);
  const det = px.x.mul(py.y).sub(px.y.mul(py.x));
  const sdet = select(abs(det).lessThan(1e-12), float(1e-12), det);
  const hx = gx.mul(py.y).sub(gy.mul(px.y)).div(sdet);
  const hz = gy.mul(px.x).sub(gx.mul(py.x)).div(sdet);
  m.normalNode = transformNormalToView(normalize(normalLocal.add(vec3(hx.negate(), 0, hz.negate()))));
  const fb = (q) => vn(vec3(q, 0.5)).mul(0.285).add(vn(vec3(q.mul(2.0), 1.5)).mul(0.14)).add(vn(vec3(q.mul(4.0), 2.5)).mul(0.075)).add(0.5);
  const snd = mix(vec3(1, 0.95, 0.7), vec3(0.9, 0.6, 0.4), fb(ps.xz.mul(16.0)));
  const c0 = mix(snd.mul(1.4), snd.mul(0.6), fb(ps.xz.mul(32.0).sub(0.5))).mul(bs.mul(0.75).add(0.5)).mul(vec3(1.5, 1.45, 1.3).div(2.0));
  const spr = hash13(floor(p.mul(48.0))).mul(0.7).add(hash13(floor(p.mul(96.0))).mul(0.3));
  const c1 = mix(c0.mul(0.7).add(spr.mul(0.3)), c0, clamp(dist.mul(dist).div(60.0), 0.0, 1.0));
  const wet = smoothstep(PUDDLE_T - 0.07, PUDDLE_T, puddleMask(p.xz)).mul(uWater);
  m.colorNode = c1.mul(vec3(1.2, 1, 0.9)).mul(0.85).mul(mix(float(1), mix(float(0.62), float(0.38), wet), uWater));
  m.roughnessNode = mix(float(0.95), float(0.35), wet);
  m.emissiveNode = Fn(() => {
    const gg = exp(length(p.xz.sub(glowA.xz)).mul(-0.75)).mul(0.55).add(exp(length(p.xz.sub(glowB.xz)).mul(-0.8)).mul(0.35));
    return vec3(1.0, 0.72, 0.05).mul(gg).mul(glowLevel).mul(0.12);
  })();
  const sand = new THREE.Mesh(g, m);
  sand.receiveShadow = true;
  scene.add(sand);
  WATER.sand = sand;
}

{
  const refl = reflector({ resolutionScale: 0.45 });
  const wp = positionWorld;
  const dist = length(wp.xz.sub(uTapP));
  const age = uTime.sub(uTapT);
  const fr = dist.sub(age.mul(5.0));
  const ring = sin(fr.mul(9.0)).mul(exp(abs(fr).mul(-1.1))).mul(exp(age.mul(-0.55))).mul(step(0.0, age)).mul(uTapAmp);
  const dir = wp.xz.sub(uTapP).div(dist.add(1e-3));
  const ripple = vec2(vn(vec3(wp.x.mul(1.4), wp.z.mul(1.4), uTime.mul(0.35))), vn(vec3(wp.x.mul(1.4).add(7.0), wp.z.mul(1.4), uTime.mul(0.35))));
  refl.uvNode = refl.uvNode.add(ripple.mul(0.005).add(dir.mul(ring).mul(0.018)));
  const fres = pow(float(1).sub(abs(normalize(cameraPosition.sub(wp)).y)), 3.0);
  const wm = new THREE.MeshBasicNodeMaterial({ transparent: true, depthWrite: true, alphaTest: 0.01 });
  const pmask = texture(PM_TEX, vec2(positionGeometry.x.add(PM_SZ / 2).div(PM_SZ), float(1).sub(positionGeometry.z.add(PM_SZ / 2).div(PM_SZ)))).r;
  const shore = max(smoothstep(STONE_TOP - 0.006, STONE_TOP + 0.006, positionGeometry.y), pmask);
  const dz = viewportLinearDepth.sub(linearDepth()).mul(300.0 - 0.05).mul(abs(normalize(cameraPosition.sub(wp)).y).max(0.06));
  const contact = smoothstep(0.0, 0.0075, dz);
  const thick = min(shore, contact);
  const rim = smoothstep(0.0, 0.0015, dz).mul(smoothstep(0.0065, 0.0025, dz)).mul(shore).mul(0.5);
  {
    const gp = positionGeometry;
    const wd = length(gp.xz.sub(uTapP));
    const wa = uTime.sub(uTapT).sub(wd.div(14.0));
    const wwave = sin(wa.mul(11.0)).mul(exp(wa.mul(-1.5))).mul(step(0.0, wa)).mul(0.11).mul(uTapAmp);
    const wfront = exp(abs(wa).mul(-7.0)).mul(0.16).mul(uTapAmp).mul(exp(wd.mul(-0.035)));
    wm.positionNode = vec3(gp.x, wwave.add(wfront).add(WATER_Y), gp.z);
  }
  wm.colorNode = mix(vec3(0.045, 0.04, 0.035), refl.rgb.mul(0.92), fres.mul(0.55).add(0.4)).add(vec3(0.02, 0.018, 0.015).mul(ring.abs())).add(vec3(0.5, 0.46, 0.4).mul(rim));
  wm.opacityNode = thick.mul(mix(float(0.88), float(0.98), fres)).max(rim.mul(0.45));
  const water = new THREE.Mesh(WATER.sand.geometry, wm);
  // dark silt bed under the water, so cleared block spots never look into the void
  const bedM = new THREE.MeshStandardNodeMaterial({ roughness: 0.7, metalness: 0.0 });
  bedM.colorNode = vec3(0.07, 0.055, 0.04).mul(vn(vec3(positionWorld.xz.mul(2.3), 0.5)).mul(0.5).add(0.75));
  const bed = new THREE.Mesh(new THREE.PlaneGeometry(90, 90).rotateX(-Math.PI / 2), bedM);
  bed.position.y = -0.14; bed.receiveShadow = true;
  scene.add(bed); WATER.bed = bed;
  refl.target.rotation.x = -Math.PI / 2;
  refl.target.position.y = WATER_Y;
  water.add(refl.target);
  water.visible = uWater.value > 0;
  if (WATER.sand) WATER.sand.visible = !water.visible;
  bed.visible = water.visible;
  scene.add(water);
  WATER.mesh = water;
}

{
  const SC = 1 / 3;
  const sk = [0.2, -0.2];
  const dim = [1.5 * SC, 1 * SC];
  const s = [(2.5 - 0.1) * SC, (2.5 - 0.1) * SC];
  const skew = (x, y) => [x + sk[0] * y, -sk[1] * x + y];
  const det = 1 + sk[0] * sk[1];
  const unskew = (x, y) => [(x - sk[0] * y) / det, (sk[1] * x + y) / det];
  const hm = (x, y) => {
    const clear = THREE.MathUtils.clamp(openDist(x * WS, y * WS) / 1.6, 0, 1);
    let n = n2DS(x / 2.5 + 7.5, y / 2.5 + 7.5);
    n = THREE.MathUtils.smoothstep(n, 0.2, 1.0) * clear;
    return n;
  };
  const RMAX = 40 / WS, N = Math.ceil(RMAX / s[0]) + 2;
  const flat = [], tall = [];
  let cntr = [0, 0], l = dim;
  for (let i = 0; i < 4; i++) {
    if (i === 2) { cntr = [(dim[0] + dim[1]) / 2, -dim[1] / 4]; l = [dim[1], dim[0]]; }
    for (let a = -N; a <= N; a++) for (let b = -N; b <= N; b++) {
      const ip = [a + 0.5, b + 0.5];
      const u = unskew(ip[0] * s[0], ip[1] * s[1]);
      const cx = cntr[0] + u[0], cz = cntr[1] + u[1];
      if (Math.hypot(cx, cz) > RMAX) continue;
      const idi = unskew(ip[0] * s[0] + cntr[0], ip[1] * s[1] + cntr[1]);
      const h = Math.max(Math.floor(hm(idi[0], idi[1]) * 24.999) / 24, 0) * 0.5 + 0.002;
      const od = openDist(cx * WS, cz * WS);
      const hr = n2DS(idi[0] * 3.1 + 17.3, idi[1] * 3.1 + 5.9);
      let H = 2 * h * 6 * YS * (1.1 + 2.4 * THREE.MathUtils.smoothstep(od, 0.5, 9));
      if (h > 0.0025 && hr > 0.86) H *= 1.6 + (hr - 0.86) * 9.0;
      H = Math.min(H, 19);
      const rec = { x: cx * WS, z: cz * WS, H, rot: i >= 2 };
      (h > 0.0025 ? tall : flat).push(rec);
    }
    cntr = [cntr[0] + dim[1], cntr[1] + dim[1]];
  }
  const rr = (w, d, r) => {
    const sh = new THREE.Shape();
    sh.moveTo(-w + r, -d); sh.lineTo(w - r, -d); sh.quadraticCurveTo(w, -d, w, -d + r);
    sh.lineTo(w, d - r); sh.quadraticCurveTo(w, d, w - r, d); sh.lineTo(-w + r, d);
    sh.quadraticCurveTo(-w, d, -w, d - r); sh.lineTo(-w, -d + r); sh.quadraticCurveTo(-w, -d, -w + r, -d);
    return sh;
  };
  const bw = dim[0] / 2 * WS - 0.01 * WS, bd = dim[1] / 2 * WS - 0.01 * WS, cr = 0.04 * WS;
  const solid = rr(bw, bd, cr);
  const mk = (shape) => { const g = new THREE.ExtrudeGeometry(shape, { depth: 1, bevelEnabled: false, curveSegments: 3 }); g.rotateX(-Math.PI / 2); return g; };

  const place = (list, geo, isTall) => {
    const aPos = new Float32Array(list.length * 2), aH = new Float32Array(list.length);
    list.forEach((b, i) => { aPos[i * 2] = b.x; aPos[i * 2 + 1] = b.z; aH[i] = Math.max(0.05, b.H - Math.min(sandY(b.x, b.z), 0.0) + 0.25); });
    geo.setAttribute('aPos', new THREE.InstancedBufferAttribute(aPos, 2));
    geo.setAttribute('aH', new THREE.InstancedBufferAttribute(aH, 1));
    const im = new THREE.InstancedMesh(geo, blockMat, list.length);
    list.forEach((b, i) => { const base = Math.min(sandY(b.x, b.z), 0.0) - 0.25; BLOCKS.push({ im, i, x: b.x, z: b.z, base, top: b.H, rot: b.rot, tall: isTall, w: bw * 2, d: bd * 2 }); });
    const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), P = new THREE.Vector3(), S = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0);
    list.forEach((b, i) => {
      const base = Math.min(sandY(b.x, b.z), 0.0) - 0.25;
      P.set(b.x, base, b.z);
      Q.setFromAxisAngle(Y, b.rot ? Math.PI / 2 : 0);
      S.set(1, b.H - base, 1);
      im.setMatrixAt(i, M4.compose(P, Q, S));
    });
    im.castShadow = true; im.receiveShadow = true;
    scene.add(im);
    return im;
  };
  place(flat, mk(solid), false);
  place(tall, mk(solid), true);
}

{
  const N_DUST = 8000;
  const dustMat = new THREE.SpriteNodeMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
  const id = float(instanceIndex);
  const h1 = hash13(vec3(id, 1.3, 7.1)), h2 = hash13(vec3(id, 5.7, 2.9)), h3 = hash13(vec3(id, 9.1, 4.4)), h4 = hash13(vec3(id, 3.3, 8.8));
  const t = uTime;
  const dPos = vec3(
    h1.mul(2).sub(1).mul(13.0).add(sin(t.mul(h3.mul(0.2).add(0.08)).add(h2.mul(30.0))).mul(0.8)).add(fract(t.mul(0.012).add(h3)).mul(3.0)),
    pow(fract(h2.add(t.mul(h3.mul(0.004).add(0.0015)))), 1.6).mul(7.0).add(0.05),
    h3.mul(2).sub(1).mul(13.0).add(cos(t.mul(h1.mul(0.2).add(0.07)).add(h3.mul(40.0))).mul(0.8)),
  );
  const kAge = uTime.sub(uTapT).sub(length(dPos.xz.sub(uTapP)).div(14.0));
  const kick = smoothstep(0.0, 0.25, kAge).mul(exp(kAge.mul(-0.55))).mul(smoothstep(2.5, 0.0, dPos.y)).mul(uTapAmp).mul(h4.mul(1.6).add(0.4));
  dustMat.positionNode = dPos.add(vec3(0, kick.mul(1.4), 0));
  dustMat.scaleNode = h4.mul(h4).mul(h4).mul(h4).mul(0.04).add(0.006);
  const toCam = normalize(dPos.sub(cameraPosition));
  const fwd = pow(clamp(dot(toCam, uSun), 0.0, 1.0), 6.0);
  const nearNeon = exp(length(dPos.sub(vec3(-1.0, 3.0, 0.5))).mul(-0.55));
  const twinkle = sin(t.mul(h1.mul(5.0).add(1.0)).add(h2.mul(60.0))).mul(0.5).add(0.5);
  dustMat.colorNode = vec3(1.0, 0.86, 0.66).mul(fwd.mul(2.2).add(0.22).add(kick.mul(0.5))).add(vec3(1.0, 0.75, 0.1).mul(nearNeon.mul(0.9))).mul(twinkle.mul(0.7).add(0.3));
  dustMat.opacityNode = float(1).sub(smoothstep(0.15, 0.5, length(uv().sub(0.5))));
  const dust = new THREE.Sprite(dustMat);
  dust.count = N_DUST;
  dust.frustumCulled = false;
  dust.renderOrder = 11;
  scene.add(dust);

  const neonA = new THREE.PointLight(0xffc020, 2.5, 9, 2);
  neonA.position.copy(discA.center).addScaledVector(discA.normal, 3.0).setY(1.0);
  scene.add(neonA);
  const neonB = new THREE.PointLight(0xffc020, 1.8, 9, 2);
  neonB.position.copy(discB.center).addScaledVector(discB.normal, 3.0).setY(1.0);
  scene.add(neonB);
}

////////////////////////////////////////////////////////////////
//// SHATTER (Voronoi pieces and crumbs)
////////////////////////////////////////////////////////////////

const FRAC = [];
{
  let sd = 11;
  const r = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
  for (let v = 0; v < 3; v++) {
    const seeds = Array.from({ length: 9 }, () => new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5));
    const pts = seeds.map(() => []);
    const add = (p) => { let bi = 0, bd = 1e9; seeds.forEach((s, i) => { const d = s.distanceToSquared(p); if (d < bd) { bd = d; bi = i; } }); pts[bi].push(p); };
    for (let i = 0; i < 2600; i++) add(new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5));
    for (let f = 0; f < 6; f++) for (let i = 0; i < 450; i++) { const p = new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5); p.setComponent(f >> 1, (f & 1) ? 0.5 : -0.5); add(p); }
    for (let i = 0; i < 8; i++) add(new THREE.Vector3((i & 1) - 0.5, ((i >> 1) & 1) - 0.5, ((i >> 2) & 1) - 0.5));
    const cells = [];
    pts.forEach((ps) => {
      if (ps.length < 16) return;
      const g = new ConvexGeometry(ps);
      g.computeBoundingBox();
      const c = new THREE.Vector3(); g.boundingBox.getCenter(c);
      g.translate(-c.x, -c.y, -c.z);
      const sz = new THREE.Vector3(); g.boundingBox.getSize(sz);
      cells.push({ geo: g, c, sz });
    });
    FRAC.push(cells);
  }
}

const IMPACT = { shake: 0, flash: 0 };
const PIECES = [];
const MAX_PIECES = 900;
const N_CRUMB = 4500;
const crumbs = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1, 0), brickMat, N_CRUMB);
crumbs.castShadow = true; crumbs.receiveShadow = true; crumbs.frustumCulled = false;
scene.add(crumbs);
const CR = { p: new Float32Array(N_CRUMB * 3), v: new Float32Array(N_CRUMB * 3), s: new Float32Array(N_CRUMB), q: Array.from({ length: N_CRUMB }, () => new THREE.Quaternion()), w: Array.from({ length: N_CRUMB }, () => new THREE.Vector3()), live: new Uint8Array(N_CRUMB), next: 0 };
const _M = new THREE.Matrix4(), _Q = new THREE.Quaternion(), _S = new THREE.Vector3(), _P = new THREE.Vector3(), _A = new THREE.Vector3(), ZERO4 = new THREE.Matrix4().makeScale(0, 0, 0);
for (let i = 0; i < N_CRUMB; i++) crumbs.setMatrixAt(i, ZERO4);
const groundAt = (x, z) => Math.max(sandY(x, z), -0.05);

const PUDDLES = [], REGROW = [];
const _RQ = new THREE.Quaternion(), _Y = new THREE.Vector3(0, 1, 0);
function paintPuddle(B, f) {
  const c = Math.cos(B.rot ? Math.PI / 2 : 0), sn = Math.sin(B.rot ? Math.PI / 2 : 0);
  const hw = B.w / 2 + 0.12, hd = B.d / 2 + 0.12, soft = 0.22;
  const R = Math.hypot(hw, hd) + soft, tx = PM_N / PM_SZ;
  const i0 = Math.max(0, Math.floor((B.x - R + PM_SZ / 2) * tx)), i1 = Math.min(PM_N - 1, Math.ceil((B.x + R + PM_SZ / 2) * tx));
  const j0 = Math.max(0, Math.floor((B.z - R + PM_SZ / 2) * tx)), j1 = Math.min(PM_N - 1, Math.ceil((B.z + R + PM_SZ / 2) * tx));
  // fill grows from the centre outward
  const g = 0.25 + 0.75 * f;
  for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
    const wx = (i + 0.5) / tx - PM_SZ / 2 - B.x, wz = (j + 0.5) / tx - PM_SZ / 2 - B.z;
    const lx = Math.abs(wx * c + wz * sn), lz = Math.abs(-wx * sn + wz * c);
    const ex = Math.max(lx - hw * g, 0), ez = Math.max(lz - hd * g, 0);
    const e = Math.hypot(ex, ez) + 0.02 * Math.sin(wx * 9.1 + wz * 7.3);
    const v = Math.round(255 * THREE.MathUtils.clamp(1 - e / soft, 0, 1) * Math.min(1, f * 1.6));
    const k = j * PM_N + i;
    if (v > PM_DATA[k]) PM_DATA[k] = v;
  }
}
function updateRebuild() {
  const T = uTime.value;
  let dirty = false;
  for (let k = PUDDLES.length - 1; k >= 0; k--) {
    const p = PUDDLES[k];
    if (T < p.t0) continue;
    const f = Math.min(1, (T - p.t0) / p.dur);
    paintPuddle(p.B, f * f * (3 - 2 * f)); dirty = true;
    if (f >= 1) PUDDLES.splice(k, 1);
  }
  if (dirty) PM_TEX.needsUpdate = true;
  const touched = new Set();
  for (let k = REGROW.length - 1; k >= 0; k--) {
    const r = REGROW[k], B = r.B;
    if (T < r.t0) continue;
    const f = Math.min(1, (T - r.t0) / r.dur);
    const e = 1 - Math.pow(1 - f, 3);
    const h = B.top - B.base;
    if (!r.kicked) {
      r.kicked = true;
      IMPACT.shake = Math.max(IMPACT.shake, 0.015);
      for (let j = 0; j < 60; j++) {
        const i = CR.next; CR.next = (CR.next + 1) % N_CRUMB;
        const a = Math.random() * 6.283, rr = Math.max(B.w, B.d) * (0.4 + Math.random() * 0.5);
        CR.p[i * 3] = B.x + Math.cos(a) * rr; CR.p[i * 3 + 1] = groundAt(B.x, B.z) + 0.05; CR.p[i * 3 + 2] = B.z + Math.sin(a) * rr;
        CR.v[i * 3] = Math.cos(a) * (0.5 + Math.random()); CR.v[i * 3 + 1] = 0.8 + Math.random() * 1.6; CR.v[i * 3 + 2] = Math.sin(a) * (0.5 + Math.random());
        CR.s[i] = 0.015 + Math.random() * 0.03; CR.live[i] = 1;
        CR.w[i].set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(10);
      }
    }
    // rises out of the ground, with a slight grinding jitter
    const jit = (1 - f) * 0.012;
    _RQ.setFromAxisAngle(_Y, B.rot ? Math.PI / 2 : 0);
    _P.set(B.x + (Math.random() - 0.5) * jit, B.base - h * (1 - e), B.z + (Math.random() - 0.5) * jit);
    _S.set(1, h, 1);
    B.im.setMatrixAt(B.i, _M.compose(_P, _RQ, _S)); touched.add(B.im);
    if (f >= 1) { B.dead = false; REGROW.splice(k, 1); }
  }
  touched.forEach((im) => { im.instanceMatrix.needsUpdate = true; });
}

function smashBlock(B, l, sx, sz) {
  if (B.dead) return;
  B.dead = true;
  B.im.setMatrixAt(B.i, ZERO4); B.im.instanceMatrix.needsUpdate = true;
  const T0 = uTime.value;
  if (B.top <= 1.4 && uWater.value > 0 && Math.random() < 0.85) PUDDLES.push({ B, t0: T0 + 0.8 + Math.random() * 1.2, dur: 2.5 + Math.random() * 1.5 });
  else {
    REGROW.push({ B, t0: T0 + 3 + Math.random() * 4, dur: 3 + Math.random() * 2.5, kicked: false });
    if (uWater.value > 0) PUDDLES.push({ B, t0: T0 + 0.5 + Math.random() * 0.8, dur: 2 });
  }
  const h = B.top - B.base, cy = B.base + h / 2;
  const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), B.rot ? Math.PI / 2 : 0);
  const cells = FRAC[(Math.random() * FRAC.length) | 0];
  const dir = new THREE.Vector3(B.x - sx, 0, B.z - sz).normalize();
  for (const cell of cells) {
    const m = new THREE.Mesh(cell.geo, brickMat);
    m.scale.set(B.w, h, B.d);
    m.quaternion.copy(q);
    m.position.copy(cell.c).multiply(m.scale).applyQuaternion(q).add(new THREE.Vector3(B.x, cy, B.z));
    m.castShadow = true; m.receiveShadow = true;
    scene.add(m);
    const k = (0.5 + Math.random()) * (2.0 + 8 * l) * (0.4 + (m.position.y - B.base) / Math.max(h, 0.1));
    const pc = { m, v: dir.clone().multiplyScalar(k).add(new THREE.Vector3((Math.random() - 0.5) * 2, 1 + Math.random() * 3.5 * l, (Math.random() - 0.5) * 2)),
      w: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(5 + 4 * l),
      r: 0.5 * Math.min(cell.sz.x * B.w, cell.sz.y * h, cell.sz.z * B.d), rest: 0 };
    PIECES.push(pc);
  }
  while (PIECES.length > MAX_PIECES) { const o = PIECES.shift(); scene.remove(o.m); }
  const nc = Math.round(140 + 320 * l);
  IMPACT.shake = Math.max(IMPACT.shake, 0.05 + 0.08 * l);
  for (let j = 0; j < nc; j++) {
    const i = CR.next; CR.next = (CR.next + 1) % N_CRUMB;
    const lx = (Math.random() - 0.5) * B.w, ly = Math.random() * h, lz = (Math.random() - 0.5) * B.d;
    _P.set(lx, 0, lz).applyQuaternion(q);
    CR.p[i * 3] = B.x + _P.x; CR.p[i * 3 + 1] = B.base + ly; CR.p[i * 3 + 2] = B.z + _P.z;
    const k = (0.3 + Math.random()) * (2.0 + 9 * l);
    CR.v[i * 3] = dir.x * k + (Math.random() - 0.5) * 3; CR.v[i * 3 + 1] = Math.random() * (1 + 4 * l); CR.v[i * 3 + 2] = dir.z * k + (Math.random() - 0.5) * 3;
    const u = Math.random();
    CR.s[i] = 0.02 + u * u * u * 0.12;
    CR.q[i].setFromEuler(new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6));
    CR.w[i].set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(14);
    CR.live[i] = 1;
  }
  snd.crash && snd.crash(l, Math.max(-1, Math.min(1, (B.x - camera.position.x) * 0.1)));
}

function updateShatter(dt) {
  if (dt <= 0) return;
  for (const pc of PIECES) {
    if (pc.rest > 1.5) continue;
    pc.v.y -= 9.8 * dt;
    pc.m.position.addScaledVector(pc.v, dt);
    const wl = pc.w.length();
    if (wl > 1e-3) { _Q.setFromAxisAngle(_A.copy(pc.w).divideScalar(wl), wl * dt); pc.m.quaternion.premultiply(_Q); }
    const g = groundAt(pc.m.position.x, pc.m.position.z) + pc.r;
    if (pc.m.position.y < g) {
      pc.m.position.y = g;
      if (pc.v.y < 0) pc.v.y *= -0.22;
      pc.v.x *= 0.62; pc.v.z *= 0.62; pc.w.multiplyScalar(0.6);
      if (pc.v.lengthSq() < 0.08) pc.rest += dt; else pc.rest = 0;
    }
  }
  let any = false;
  for (let i = 0; i < N_CRUMB; i++) {
    if (!CR.live[i]) continue;
    any = true;
    const o = i * 3;
    if (CR.live[i] === 1) {
      CR.v[o + 1] -= 9.8 * dt;
      CR.p[o] += CR.v[o] * dt; CR.p[o + 1] += CR.v[o + 1] * dt; CR.p[o + 2] += CR.v[o + 2] * dt;
      const g = groundAt(CR.p[o], CR.p[o + 2]) + CR.s[i] * 0.6;
      if (CR.p[o + 1] < g) {
        CR.p[o + 1] = g;
        CR.v[o + 1] *= -0.3; CR.v[o] *= 0.5; CR.v[o + 2] *= 0.5; CR.w[i].multiplyScalar(0.5);
        if (Math.abs(CR.v[o + 1]) < 0.25) CR.live[i] = 2;
      }
      const wl = CR.w[i].length();
      if (wl > 1e-3) { _Q.setFromAxisAngle(_A.copy(CR.w[i]).divideScalar(wl), wl * dt); CR.q[i].premultiply(_Q); }
    }
    _S.setScalar(CR.s[i]);
    crumbs.setMatrixAt(i, _M.compose(_P.set(CR.p[o], CR.p[o + 1], CR.p[o + 2]), CR.q[i], _S));
  }
  if (any) crumbs.instanceMatrix.needsUpdate = true;
}

function smashAround(l, sx, sz) {
  if (l < 0.3) return;
  const n = Math.round(2 + (l - 0.3) / 0.7 * 18);
  const cand = BLOCKS.filter((b) => b.tall && !b.dead && b.top > 1.4).map((b) => ({ b, d: Math.hypot(b.x - sx, b.z - sz) })).filter((c) => c.d > 2.5 && c.d < 9 + 14 * l).sort((a, b) => a.d - b.d);
  const pool = cand.slice(0, n * 2);
  for (let k = 0; k < n && pool.length; k++) {
    const c = pool.splice((Math.random() * pool.length) | 0, 1)[0];
    setTimeout(() => smashBlock(c.b, l, sx, sz), c.d / 14 * 1000);
  }
  // lower rows: flat slabs and low stacks crumble too
  const nLow = Math.round(4 + (l - 0.3) / 0.7 * 30);
  const low = BLOCKS.filter((b) => !b.dead && (b.top - b.base) > 0.3 && (!b.tall || b.top <= 1.4) && b.top > 0.08).map((b) => ({ b, d: Math.hypot(b.x - sx, b.z - sz) })).filter((c) => c.d > 2.6 && c.d < 7 + 12 * l).sort((a, b) => a.d - b.d);
  const lp = low.slice(0, nLow * 2);
  for (let k = 0; k < nLow && lp.length; k++) {
    const c = lp.splice((Math.random() * lp.length) | 0, 1)[0];
    setTimeout(() => smashBlock(c.b, l * 0.85, sx, sz), c.d / 14 * 1000 + Math.random() * 120);
  }
}

////////////////////////////////////////////////////////////////
//// RUST CHIPS (peeling off where the discs grind)
////////////////////////////////////////////////////////////////

const N_CHIP = 1400;
const chipGeo = (() => {
  const g = new THREE.BufferGeometry();
  const M = 7, pos = [0, 0, 0.12];
  for (let i = 0; i < M; i++) { const a = i / M * TAU, rr = 0.55 + Math.sin(i * 2.7) * 0.25 + Math.cos(i * 5.1) * 0.2; pos.push(Math.cos(a) * rr, Math.sin(a) * rr * 0.7, 0); }
  const idx = []; for (let i = 0; i < M; i++) idx.push(0, 1 + i, 1 + (i + 1) % M);
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  return g;
})();
const chipMat = new THREE.MeshStandardNodeMaterial({ side: THREE.DoubleSide, roughness: 0.85, metalness: 0.05 });
{
  const hId = hash13(vec3(float(instanceIndex), 4.1, 7.3)), hB = hash13(vec3(float(instanceIndex), 9.2, 1.7));
  const ln = vn(positionLocal.mul(5.0).add(vec3(hId.mul(40.0), hB.mul(40.0), 0)));
  chipMat.colorNode = mix(mix(vec3(0.22, 0.09, 0.035), vec3(0.66, 0.3, 0.09), hId).mul(ln.mul(0.35).add(0.85)), vec3(0.62, 0.58, 0.52), step(0.85, hB));
}
const chips = new THREE.InstancedMesh(chipGeo, chipMat, N_CHIP);
chips.castShadow = true; chips.frustumCulled = false;
scene.add(chips);
const CH = { p: new Float32Array(N_CHIP * 3), v: new Float32Array(N_CHIP * 3), life: new Float32Array(N_CHIP), s: new Float32Array(N_CHIP), q: Array.from({ length: N_CHIP }, () => new THREE.Quaternion()), w: Array.from({ length: N_CHIP }, () => new THREE.Vector3()), rest: new Uint8Array(N_CHIP), next: 0, acc: 0 };
for (let i = 0; i < N_CHIP; i++) chips.setMatrixAt(i, ZERO4);
const footTops = FOOT_TOPS;
const chipGround = (x, z) => {
  let g = groundAt(x, z);
  for (const f of footTops) if (Math.abs(x - f.x) < 0.85 && Math.abs(z - f.z) < 0.45) g = Math.max(g, f.y);
  return g;
};
const spawnChip = (P, N, burst) => {
  const i = CH.next; CH.next = (CH.next + 1) % N_CHIP;
  const side = Math.random() < 0.5 ? -1 : 1;
  CH.p[i * 3] = P.x + N.x * side * 0.09; CH.p[i * 3 + 1] = P.y + N.y * side * 0.09; CH.p[i * 3 + 2] = P.z + N.z * side * 0.09;
  const k = 0.15 + Math.random() * 0.4 + burst * 1.5;
  CH.v[i * 3] = N.x * side * k + (Math.random() - 0.5) * 0.2; CH.v[i * 3 + 1] = Math.random() * 0.3 + burst; CH.v[i * 3 + 2] = N.z * side * k + (Math.random() - 0.5) * 0.2;
  CH.life[i] = 8 + Math.random() * 6;
  const u = Math.random(); CH.s[i] = 0.02 + u * u * 0.07;
  CH.q[i].setFromEuler(new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6));
  CH.w[i].set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(8 + Math.random() * 10);
  CH.rest[i] = 0;
};
const _cp = new THREE.Vector3(), _cn = new THREE.Vector3();
const seamPoint = () => {
  const x = THREE.MathUtils.lerp(HINGE_D - RB + 0.2, RA - 0.15, Math.random());
  _cp.copy(centerA).addScaledVector(hinge, x);
  return Math.random() < 0.5 ? discA.normal : discB.normal;
};
const footPoint = (d) => {
  _cp.copy(d.center).addScaledVector(d.up, -d.R).addScaledVector(hinge, (Math.random() - 0.5) * 0.9);
  _cp.y += 0.15 + Math.random() * 0.1;
  return d.normal;
};
function shedChips(n, burst) {
  for (let j = 0; j < n; j++) {
    const r = Math.random();
    const N = r < 0.55 ? seamPoint() : footPoint(r < 0.78 ? discA : discB);
    spawnChip(_cp, N, burst);
  }
}
function updateChips(dt) {
  if (dt <= 0) return;
  CH.acc += dt * 45;
  while (CH.acc >= 1) { CH.acc -= 1; shedChips(1, 0); }
  const drag = Math.exp(-dt * 1.6);
  const T = uTime.value;
  for (let i = 0; i < N_CHIP; i++) {
    if (CH.life[i] <= 0) continue;
    CH.life[i] -= dt;
    if (CH.life[i] <= 0) { chips.setMatrixAt(i, ZERO4); continue; }
    const o = i * 3;
    if (!CH.rest[i]) {
      CH.v[o + 1] -= 0.55 * dt;
      CH.v[o] = CH.v[o] * drag + Math.sin(T * 5.3 + i) * 0.1 * dt;
      CH.v[o + 2] = CH.v[o + 2] * drag + Math.cos(T * 4.1 + i * 1.7) * 0.1 * dt;
      CH.v[o + 1] *= drag;
      CH.p[o] += CH.v[o] * dt; CH.p[o + 1] += CH.v[o + 1] * dt; CH.p[o + 2] += CH.v[o + 2] * dt;
      const wl = CH.w[i].length();
      if (wl > 1e-3) { _Q.setFromAxisAngle(_A.copy(CH.w[i]).divideScalar(wl), wl * dt); CH.q[i].premultiply(_Q); }
      const g = chipGround(CH.p[o], CH.p[o + 2]) + 0.004;
      if (CH.p[o + 1] < g) { CH.p[o + 1] = g; CH.rest[i] = 1; CH.q[i].setFromEuler(new THREE.Euler(-Math.PI / 2 + (Math.random() - 0.5) * 0.4, Math.random() * 6, 0)); }
    }
    _S.setScalar(CH.s[i] * Math.min(1, CH.life[i] * 0.6));
    chips.setMatrixAt(i, _M.compose(_P.set(CH.p[o], CH.p[o + 1], CH.p[o + 2]), CH.q[i], _S));
  }
  chips.instanceMatrix.needsUpdate = true;
}

////////////////////////////////////////////////////////////////
//// PROGRAM
////////////////////////////////////////////////////////////////

const P = 13.8;

////////////////////////////////////////////////////////////////
//// SOUND
////////////////////////////////////////////////////////////////

const PENTA = [196.0, 220.0, 261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.26, 783.99, 880.0, 1046.5];
const snd = {
  ctx: null, on: true, master: null, wet: null,
  init() {
    if (this.ctx) return;
    const C = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = C.createGain(); this.master.gain.value = 0;
    const comp = C.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 3;
    this.master.connect(comp).connect(C.destination);
    const len = C.sampleRate * 4.5, ir = C.createBuffer(2, len, C.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
    const conv = C.createConvolver(); conv.buffer = ir;
    this.wet = C.createGain(); this.wet.gain.value = 0.55;
    this.wet.connect(conv).connect(this.master);
    this.dry = C.createGain(); this.dry.gain.value = 0.6; this.dry.connect(this.master);
    const lp = C.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520; lp.Q.value = 0.6;
    const padG = C.createGain(); padG.gain.value = 0.05;
    lp.connect(padG); padG.connect(this.dry); padG.connect(this.wet);
    const lfo = C.createOscillator(); lfo.frequency.value = 0.05; const lg = C.createGain(); lg.gain.value = 260; lfo.connect(lg).connect(lp.frequency); lfo.start();
    for (const [f, ty, dt] of [[49, 'sine', 0], [73.42, 'triangle', 3], [98, 'sawtooth', -4], [146.83, 'triangle', 5], [196, 'sine', -2]]) {
      const o = C.createOscillator(); o.type = ty; o.frequency.value = f; o.detune.value = dt;
      const g = C.createGain(); g.gain.value = ty === 'sawtooth' ? 0.18 : 0.5;
      o.connect(g).connect(lp); o.start();
    }
    const nb = C.createBuffer(1, C.sampleRate * 2, C.sampleRate); const nd = nb.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    this.noise = nb;
    this.apply();
  },
  apply() { if (!this.ctx) return; const t = this.ctx.currentTime; this.master.gain.cancelScheduledValues(t); this.master.gain.setTargetAtTime(this.on ? 0.9 : 0, t, 0.4); if (this.on && this.ctx.state !== 'running') this.ctx.resume(); },
  bell(f, v = 0.5, pan = 0) {
    if (!this.ctx || !this.on) return;
    const C = this.ctx, t = C.currentTime;
    const p = C.createStereoPanner(); p.pan.value = pan;
    const g = C.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.11 * v, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.8);
    g.connect(p); p.connect(this.dry); p.connect(this.wet);
    for (const [m, a] of [[1, 1], [2.756, 0.32], [5.404, 0.12]]) {
      const o = C.createOscillator(); o.type = 'sine'; o.frequency.value = f * m;
      const og = C.createGain(); og.gain.value = a; o.connect(og).connect(g); o.start(t); o.stop(t + 3);
    }
  },
  rumble(v = 1) {
    if (!this.ctx || !this.on) return;
    const C = this.ctx, t = C.currentTime;
    const n = C.createBufferSource(); n.buffer = this.noise; n.loop = true;
    const lp = C.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(380, t); lp.frequency.exponentialRampToValueAtTime(90, t + 2.6); lp.Q.value = 3;
    const g = C.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.32 * v, t + 0.12); g.gain.exponentialRampToValueAtTime(0.0001, t + 3.0);
    const am = C.createGain(); const lfo = C.createOscillator(); lfo.frequency.value = 11 / (2 * Math.PI) * 2; const lg = C.createGain(); lg.gain.value = 0.5; lfo.connect(lg).connect(am.gain); am.gain.value = 0.6;
    n.connect(lp).connect(am).connect(g); g.connect(this.dry); g.connect(this.wet);
    const o = C.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(48, t); o.frequency.exponentialRampToValueAtTime(34, t + 2.5);
    const og = C.createGain(); og.gain.setValueAtTime(0, t); og.gain.linearRampToValueAtTime(0.22, t + 0.05); og.gain.exponentialRampToValueAtTime(0.0001, t + 2.8);
    o.connect(og); og.connect(this.dry); og.connect(this.wet);
    n.start(t); n.stop(t + 3.1); lfo.start(t); lfo.stop(t + 3.1); o.start(t); o.stop(t + 3.0);
  },
  chargeStart() {
    if (!this.ctx) return;
    const C = this.ctx, t = C.currentTime;
    this.chO = C.createOscillator(); this.chO.type = 'triangle'; this.chO.frequency.value = 98;
    this.chO2 = C.createOscillator(); this.chO2.type = 'sine'; this.chO2.frequency.value = 196.5;
    this.chG = C.createGain(); this.chG.gain.setValueAtTime(0, t);
    this.chO.connect(this.chG); this.chO2.connect(this.chG); this.chG.connect(this.dry); this.chG.connect(this.wet);
    this.chO.start(t); this.chO2.start(t);
  },
  chargeSet(l) {
    if (!this.chG) return;
    const t = this.ctx.currentTime;
    this.chG.gain.setTargetAtTime(this.on ? 0.02 + 0.09 * l : 0, t, 0.05);
    this.chO.frequency.setTargetAtTime(98 * (1 + l * 1.5), t, 0.05);
    this.chO2.frequency.setTargetAtTime(196.5 * (1 + l * 1.5) * (1 + l * 0.01), t, 0.05);
  },
  chargeStop() {
    if (!this.chG) return;
    const t = this.ctx.currentTime;
    this.chG.gain.setTargetAtTime(0, t, 0.04);
    this.chO.stop(t + 0.3); this.chO2.stop(t + 0.3);
    this.chG = null;
  },
  boom(l) {
    if (!this.ctx || !this.on) return;
    const C = this.ctx, t = C.currentTime;
    const o = C.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(70, t); o.frequency.exponentialRampToValueAtTime(28, t + 1.8);
    const g = C.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.5 * l, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
    o.connect(g); g.connect(this.dry); g.connect(this.wet); o.start(t); o.stop(t + 2.5);
    [1, 2.76, 5.4].forEach((m, i) => {
      const b = C.createOscillator(); b.frequency.value = 130.8 * m;
      const bg = C.createGain(); bg.gain.setValueAtTime(0, t); bg.gain.linearRampToValueAtTime(0.14 * l / (i + 1), t + 0.01); bg.gain.exponentialRampToValueAtTime(0.0001, t + 5.5 / (i + 1));
      b.connect(bg); bg.connect(this.dry); bg.connect(this.wet); b.start(t); b.stop(t + 6);
    });
  },
  crash(l, pan = 0) {
    if (!this.ctx || !this.on) return;
    const C = this.ctx, t = C.currentTime;
    const p = C.createStereoPanner(); p.pan.value = pan; p.connect(this.dry); p.connect(this.wet);
    const n = C.createBufferSource(); n.buffer = this.noise;
    const bp = C.createBiquadFilter(); bp.type = 'lowpass'; bp.frequency.setValueAtTime(5000, t); bp.frequency.exponentialRampToValueAtTime(300, t + 1.2);
    const g = C.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.35 + 0.3 * l, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
    n.connect(bp).connect(g).connect(p); n.start(t); n.stop(t + 1.5);
    const th = C.createOscillator(); th.frequency.setValueAtTime(90, t); th.frequency.exponentialRampToValueAtTime(40, t + 0.4);
    const tg = C.createGain(); tg.gain.setValueAtTime(0.4, t); tg.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    th.connect(tg).connect(p); th.start(t); th.stop(t + 0.6);
    for (let j = 0; j < 14; j++) {
      const tt = t + 0.25 + Math.random() * 1.6;
      const s = C.createBufferSource(); s.buffer = this.noise;
      const f = C.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1500 + Math.random() * 5000; f.Q.value = 3;
      const sg = C.createGain(); sg.gain.setValueAtTime(0.0001, tt); sg.gain.exponentialRampToValueAtTime(0.08 + Math.random() * 0.1, tt + 0.002); sg.gain.exponentialRampToValueAtTime(0.0001, tt + 0.03);
      s.connect(f).connect(sg).connect(p); s.start(tt, Math.random()); s.stop(tt + 0.05);
    }
  },
  shimmer(up = true, dur = 2.2, v = 1) {
    if (!this.ctx || !this.on) return;
    const C = this.ctx, t = C.currentTime;
    const s = C.createBufferSource(); s.buffer = this.noise; s.loop = true;
    const bp = C.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 9;
    bp.frequency.setValueAtTime(up ? 700 : 5200, t); bp.frequency.exponentialRampToValueAtTime(up ? 5200 : 700, t + dur);
    const g = C.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.05 * v, t + dur * 0.6); g.gain.linearRampToValueAtTime(0, t + dur);
    s.connect(bp).connect(g); g.connect(this.wet); g.connect(this.dry);
    s.start(t); s.stop(t + dur + 0.1);
  },
};

////////////////////////////////////////////////////////////////
//// CAMERA
////////////////////////////////////////////////////////////////

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = 0.06;
controls.minDistance = 1.2; controls.maxDistance = 13;
controls.maxPolarAngle = Math.PI * 0.52;
controls.enabled = false;
let camMode = QS.get('cam') === 'walk' ? 'walk' : 'orbit';

const SHOT = P;
const W0 = { pos: new THREE.Vector3(4.3, 1.7, 12.6), tgt: new THREE.Vector3(1.9, 2.5, -2.0) };
const W1 = {
  pos: centerA.clone().addScaledVector(n0, 1.15).addScaledVector(hinge, 1.2).add(new THREE.Vector3(0, -0.04, 0)),
  tgt: centerA.clone().addScaledVector(hinge, 1.85).add(new THREE.Vector3(0, -0.04, 0)),
};
const _p = new THREE.Vector3(), _t = new THREE.Vector3();
function walkCam(t) {
  const k = (t % SHOT) / SHOT;
  const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
  const e2 = Math.pow(k, 1.35);
  const asp = camera.aspect;
  const back = Math.max(1, Math.pow(1.15 / asp, 0.8));
  _p.lerpVectors(W0.pos, W1.pos, e2 * 0.55 + e * 0.45);
  _p.add(new THREE.Vector3(0, Math.sin(k * Math.PI) * 0.25 + Math.sin(t * 1.7) * 0.015, 0));
  const pull = (1 - e) * (back - 1);
  _p.add(new THREE.Vector3(-0.2, 0.05, 1).multiplyScalar(pull * 0.6));
  _t.lerpVectors(W0.tgt, W1.tgt, e);
  camera.position.copy(_p);
  camera.lookAt(_t);
  camera.rotateZ(Math.sin(t * 0.9) * 0.004 - (1 - e) * 0.03);
}

function setCam(mode) {
  camMode = mode;
  controls.enabled = mode === 'orbit';
  if (mode === 'orbit') {
    const dir = new THREE.Vector3(); camera.getWorldDirection(dir);
    controls.target.copy(camera.position).addScaledVector(dir, Math.max(2.5, camera.position.distanceTo(centerA) * 0.8));
    controls.update();
  } else walkStart = clock;
  for (const b of document.querySelectorAll('[data-cam]')) b.setAttribute('aria-pressed', String(b.dataset.cam === mode));
}

////////////////////////////////////////////////////////////////
//// INPUT
////////////////////////////////////////////////////////////////

const ray = new THREE.Raycaster();
const ndc = new THREE.Vector2();
let downAt = null;
let pendingWalk = false;
let charging = null, chargeLvl = 0;
const discHit = (e) => {
  ndc.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  return ray.intersectObjects([...discA.faces, ...discB.faces], false)[0];
};
renderer.domElement.addEventListener('pointerdown', (e) => {
  snd.init(); snd.apply();
  const h = discHit(e);
  if (h) {
    e.stopImmediatePropagation();
    charging = { d: discA.faces.includes(h.object) ? discA : discB, p: h.point.clone(), t0: performance.now(), pr: 0, id: e.pointerId };
    chargeLvl = 0;
    snd.chargeStart && snd.chargeStart();
    meterEl.classList.add('on');
    return;
  }
  downAt = { x: e.clientX, y: e.clientY };
  if (camMode === 'walk') { pendingWalk = true; setCam('orbit'); }
}, { capture: true });
renderer.domElement.addEventListener('pointermove', (e) => {
  if (charging && e.pointerId === charging.id && e.pressure > 0 && e.pressure !== 0.5) charging.pr = Math.max(charging.pr, e.pressure);
}, { capture: true });
const fireKlang = () => {
  const c = charging; charging = null;
  const l = Math.max(0.04, chargeLvl);
  snd.chargeStop && snd.chargeStop();
  setTimeout(() => { if (!charging) meterEl.classList.remove('on'); }, 900);
  c.d.led.U.pulseT.value = clock;
  uTapT.value = clock; uTapN.value += 1; uTapP.value.set(c.p.x, c.p.z); uTapAmp.value = 0.5 + 2.2 * l;
  uShiftPrev.value = uShiftCur.value; uShiftCur.value = l > 0.5 ? 1 + (l - 0.5) * 6.0 : 1;
  snd.rumble && snd.rumble(0.4 + 1.2 * l);
  const base = c.d === discA ? 0 : 2;
  const notes = l > 0.6 ? [0, 2, 4, 5, 7, 9] : [0, 2, 4, 7];
  notes.forEach((i, n) => setTimeout(() => snd.bell(PENTA[Math.min(12, base + i)], 0.5 + 2.6 * l, c.d === discA ? -0.35 : 0.4), n * 60));
  if (l > 0.35) snd.boom && snd.boom(l);
  snd.shimmer(true, 1.6, 0.4 + l);
  smashAround(l, c.p.x, c.p.z);
  IMPACT.shake = Math.max(IMPACT.shake, 0.04 + 0.32 * l * l);
  IMPACT.flash = Math.max(IMPACT.flash, 0.12 + 0.55 * l * l);
  shedChips(Math.round(30 + 160 * l), 0.4 + 1.2 * l);
};
const endCharge = (e) => { if (charging && e.pointerId === charging.id) { e.stopImmediatePropagation(); fireKlang(); return true; } return false; };
renderer.domElement.addEventListener('pointercancel', (e) => { endCharge(e); }, { capture: true });
renderer.domElement.addEventListener('pointerup', (e) => {
  if (endCharge(e)) return;
  if (!downAt) return;
  const moved = Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y);
  downAt = null;
  if (moved > 6) { pendingWalk = false; return; }
  if (pendingWalk) { pendingWalk = false; camMode = 'walk'; controls.enabled = false; for (const b of document.querySelectorAll('[data-cam]')) b.setAttribute('aria-pressed', String(b.dataset.cam === 'walk')); }
});
const meterEl = document.getElementById('meter'), barsEl = document.getElementById('bars');
const SEG = 16;
const segCol = (k) => `hsl(${Math.round(128 * (1 - k))}, ${Math.round(42 + 46 * k)}%, ${Math.round(80 - 46 * k)}%)`;
for (let i = 0; i < SEG; i++) { const b = document.createElement('i'); b.style.setProperty('--c', segCol(i / (SEG - 1))); barsEl.appendChild(b); }
const pickerEl = document.getElementById('picker');
const placeMeter = () => { const r = pickerEl.getBoundingClientRect(); meterEl.style.bottom = `${Math.round(window.innerHeight - r.top + 14)}px`; };
window.addEventListener('resize', placeMeter);
placeMeter();
document.fonts && document.fonts.ready.then(placeMeter);
let litN = -1;
const updateMeter = () => {
  if (charging) {
    const tl = Math.min(1, (performance.now() - charging.t0) / 2400);
    chargeLvl = Math.max(tl, charging.pr > 0 ? Math.min(1, Math.pow(charging.pr, 1.3) * (0.4 + tl)) : 0);
    snd.chargeSet && snd.chargeSet(chargeLvl);
  }
  const n = Math.round(chargeLvl * SEG);
  if (n !== litN) { litN = n; barsEl.childNodes.forEach((b, i) => b.classList.toggle('lit', i < n)); }
};
for (const b of document.querySelectorAll('[data-cam]')) b.addEventListener('click', () => { snd.init(); setCam(b.dataset.cam); });
const sndBtn = document.querySelector('[data-snd]');
sndBtn.addEventListener('click', () => {
  snd.init();
  snd.on = !snd.on;
  sndBtn.setAttribute('aria-pressed', String(snd.on));
  sndBtn.textContent = snd.on ? 'Sound on' : 'Sound off';
  snd.apply();
});

////////////////////////////////////////////////////////////////
//// POST
////////////////////////////////////////////////////////////////

const pipe = new THREE.RenderPipeline(renderer);
const scenePass = pass(scene, camera, { samples: 0 });
const sceneColorRaw = scenePass.getTextureNode('output');
const uAO = uniform(QS.has('noao') ? 0 : 1);
const uRes = uniform(new THREE.Vector2(innerWidth, innerHeight));
const sceneDepth = scenePass.getTextureNode('depth');
const aoPass = ao(sceneDepth, null, camera);
aoPass.resolutionScale = QS.has('low') ? 0.5 : 0.75;
aoPass.radius.value = 1.1;
aoPass.distanceExponent.value = 1.6;
aoPass.thickness.value = 1.2;
aoPass.scale.value = 1.4;
aoPass.samples.value = QS.has('low') ? 8 : 16;
const aoTex = aoPass.getTextureNode();
const aoSoft = Fn(() => {
  const px = vec2(1.0).div(uRes);
  const d0 = sceneDepth.sample(screenUV).r;
  const acc = float(0).toVar(), wsum = float(0).toVar();
  const taps = [[0, 0, 1], [2, 0, .8], [-2, 0, .8], [0, 2, .8], [0, -2, .8], [1.5, 1.5, .7], [-1.5, 1.5, .7], [1.5, -1.5, .7], [-1.5, -1.5, .7],
    [4.5, 0, .45], [-4.5, 0, .45], [0, 4.5, .45], [0, -4.5, .45], [3.2, 3.2, .4], [-3.2, 3.2, .4], [3.2, -3.2, .4], [-3.2, -3.2, .4]];
  for (const [x, y, w] of taps) {
    const q = screenUV.add(px.mul(vec2(x, y)));
    const wd = exp(abs(sceneDepth.sample(q).r.sub(d0)).mul(-1500.0)).mul(w);
    acc.addAssign(aoTex.sample(q).r.mul(wd)); wsum.addAssign(wd);
  }
  return mix(float(1), pow(acc.div(wsum.max(1e-4)), 1.9), uAO);
})();
const sceneColor = sceneColorRaw.mul(aoSoft);
const bl = bloom(sceneColor, 0.26, 0.07, 1.8);
const uSunUV = uniform(new THREE.Vector2(0.5, 0.2)), uSunVis = uniform(1), uAspect = uniform(1);
const uProjInv = uniform(new THREE.Matrix4()), uCamWorld = uniform(new THREE.Matrix4());
const uFlash = uniform(0);
const FAR = 72.0;
const composite = Fn(() => {
  const q = uv();
  const c = sceneColor.add(bl).toVar();
  const vp = getViewPosition(q, sceneDepth.sample(q).r, uProjInv);
  const t = length(vp);
  const rd = normalize(uCamWorld.mul(vec4(vp, 0.0)).xyz);
  c.assign(mix(c, skyNode(rd), smoothstep(0.0, 0.95, t.div(FAR))));
  const dust = clamp(t.div(45.0), 0.0, 1.0).mul(0.3).add(0.05);
  c.addAssign(vec3(1.0, 0.7, 0.4).mul(pow(max(dot(rd, uSun), 0.0), 16.0)).mul(0.4));
  const mistCol = vec3(1.0, 0.95, 0.9);
  c.assign(c.mul(0.75).add(c.add(vec3(1.2, 1.0, 0.9).mul(0.25)).mul(mistCol).mul(dust).mul(1.5)));
  const vig = pow(q.x.mul(q.y).mul(q.x.oneMinus()).mul(q.y.oneMinus()).mul(16.0), 0.0625);
  return c.mul(vig).add(vec3(1.0, 0.86, 0.6).mul(uFlash));
})();
pipe.outputColorTransform = false;
pipe.outputNode = fxaa(renderOutput(composite));
const _sunP = new THREE.Vector3(), _camD = new THREE.Vector3();
const updateSunGlow = () => {
  _sunP.copy(camera.position).addScaledVector(SUN_DIR, 100).project(camera);
  uSunUV.value.set(_sunP.x * 0.5 + 0.5, 0.5 - _sunP.y * 0.5);
  camera.getWorldDirection(_camD);
  uSunVis.value = THREE.MathUtils.smoothstep(_camD.dot(SUN_DIR), -0.1, 0.5);
  uAspect.value = camera.aspect;
};

////////////////////////////////////////////////////////////////
//// LOOP
////////////////////////////////////////////////////////////////

function resize() {
  uRes.value.set(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.fov = camera.aspect < 0.8 ? 66 : 60;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}
addEventListener('resize', resize);
resize();

const aoBtn = document.querySelector('[data-ao]');
const showAO = () => { if (!aoBtn) return; aoBtn.setAttribute('aria-pressed', String(uAO.value > 0)); aoBtn.textContent = uAO.value > 0 ? 'AO on' : 'AO off'; };


const waterBtn = document.querySelector('[data-water]');
const showWater = () => { const on = uWater.value > 0; if (WATER.mesh) WATER.mesh.visible = on; if (WATER.bed) WATER.bed.visible = on; if (WATER.sand) WATER.sand.visible = !on; };
showWater();

const fixedT = QS.has('t') ? parseFloat(QS.get('t')) : null;
let clock = fixedT ?? 0, walkStart = 0, last = performance.now();
let prevQ = -1, frameN = 0;
const _shakeSave = new THREE.Vector3();
const cubeFog = new THREE.Fog(HAZE, 8, 70);
scene.add(cubeCam);

function frame() {
  const now = performance.now();
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (fixedT === null) clock += dt;
  uTime.value = clock;

  const rot = clock / ROT_PERIOD;
  uRot.value = rot % 1;
  uRotAbs.value = rot;
  uQs.value = 0.15 + 0.05 * Math.sin(clock * 0.063);
  uQg.value = uQs.value + 0.06;
  uQf.value = uQg.value + 0.17 + 0.05 * Math.sin(clock * 0.051 + 1.0);
  const qSeam = ((C1 + rot) % 1 + 1) % 1;
  if (prevQ >= 0) {
    const crossed = (q) => (prevQ < q && qSeam >= q) || (prevQ > qSeam && (q > prevQ || q <= qSeam));
    if (crossed(0.0005)) [0, 2, 4].forEach((i, n) => setTimeout(() => snd.bell(PENTA[4 + i], 0.55, 0.2), n * 120));
    if (crossed(uQg.value)) snd.shimmer(true, 3.0, 0.9);
    if (crossed(uQf.value)) snd.shimmer(false, 2.2, 0.6);
    const st = Math.floor(qSeam * 24), sp = Math.floor(prevQ * 24);
    if (st !== sp && qSeam > uQf.value) snd.bell(PENTA[(st * 5) % 9], 0.22, 0.25);
    if (crossed(uQs.value * 0.6)) snd.bell(PENTA[11], 0.45, 0.35);
    if (crossed((uQs.value + uQg.value) * 0.5)) snd.bell(PENTA[12], 0.4, 0.3);
  }
  prevQ = qSeam;

  if (camMode === 'walk') walkCam(fixedT !== null ? fixedT : clock - walkStart);
  else controls.update();

  updateSunGlow();
  updateMeter();
  updateShatter(fixedT === null ? dt : 0);
  updateRebuild();
  updateChips(fixedT === null ? dt : 0);
  if ((frameN++ % 8) === 0) {
    scene.fog = cubeFog; discA.led.U.level.value = discB.led.U.level.value = 0.65;
    cubeCam.update(renderer, scene);
    scene.fog = null; discA.led.U.level.value = discB.led.U.level.value = 1;
  }
  camera.updateMatrixWorld();
  uProjInv.value.copy(camera.projectionMatrixInverse);
  uCamWorld.value.copy(camera.matrixWorld);
  const shk = IMPACT.shake;
  _shakeSave.copy(camera.position);
  if (shk > 0.001) {
    camera.position.x += (Math.random() - 0.5) * shk; camera.position.y += (Math.random() - 0.5) * shk * 0.8; camera.position.z += (Math.random() - 0.5) * shk;
    camera.updateMatrixWorld();
  }
  uFlash.value = IMPACT.flash;
  pipe.render();
  camera.position.copy(_shakeSave);
  IMPACT.shake *= Math.exp(-dt * 4.5); IMPACT.flash *= Math.exp(-dt * 6.0);
  requestAnimationFrame(frame);
}

if (camMode === 'orbit') { camera.position.copy(W0.pos).add(new THREE.Vector3(-0.2, 0.05, 1).multiplyScalar((Math.max(1, Math.pow(1.15 / camera.aspect, 0.8)) - 1) * 0.6)); controls.target.copy(W0.tgt); controls.enabled = true; controls.update(); for (const b of document.querySelectorAll('[data-cam]')) b.setAttribute('aria-pressed', String(b.dataset.cam === 'orbit')); }
requestAnimationFrame(() => { frame(); setTimeout(() => document.getElementById('loading').classList.add('off'), 300); });
window.__ready = true;

import * as THREE from 'three/webgpu';
import {
  Fn, Loop, If, Break, uniform, uniformArray, float, int, vec2, vec3, vec4, select,
  abs, max, min, dot, length, normalize, mix, smoothstep, step, exp, pow, sin, cos, atan, fract, floor, clamp, reflect, refract, sign,
  screenUV, pass, convertToTexture
} from 'three/tsl';
import { fxaa } from 'three/addons/tsl/display/FXAANode.js';

const BUILD = 'v1.22-caustic';
console.log('%c' + BUILD, 'color:#9fe4f0');

////////////////////////////////////////////////////////////////
//// PARAMS
////////////////////////////////////////////////////////////////

const QS = new URLSearchParams(location.search);
const MOBILE = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(navigator.userAgent));
const LOWQ = QS.has('hi') ? false : (QS.has('low') || MOBILE);
const STEPS = LOWQ ? 52 : 90;
const IN_STEPS = LOWQ ? 22 : 40;
const STEPS2 = LOWQ ? 36 : 56;
const DDA = LOWQ ? 16 : 34;
const AO_TAPS = LOWQ ? 3 : 5;
const CAM_Z = 9.6;
const CAM_Y = 1.8;
const CAM_TGT = new THREE.Vector3(0, -0.15, 0);
const FLOOR_Y = -1.95;
const CL_SCALE = 0.88;
const CL_LIFT = 0.2;

const uTime = uniform(0);
const uRes = uniform(new THREE.Vector2(1, 1));
const uTan = uniform(Math.tan(THREE.MathUtils.degToRad(15)));
const uCamPos = uniform(new THREE.Vector3(0, CAM_Y, CAM_Z));
const uCR = uniform(new THREE.Vector3(1, 0, 0));
const uCU = uniform(new THREE.Vector3(0, 1, 0));
const uCF = uniform(new THREE.Vector3(0, 0, -1));
const uK = uniform(0.16);
const uWob = uniform(0.028);
const uWobS = uniform(0.9);
const uIor = uniform(parseFloat(QS.get('ior')) || 1.6);
const uDisp = uniform(QS.has('disp') ? parseFloat(QS.get('disp')) : 0.05);
const PART_STEPS = LOWQ ? 22 : 28;
const uPartCell = uniform(1.1);
const uPartDensity = uniform(LOWQ ? 0.7 : 0.34);
const uPartSize = uniform(0.0045);
const uPartSpeed = uniform(0.6);
const uPartGain = uniform(QS.has('parts') ? parseFloat(QS.get('parts')) : 0.85);
const uPartCol = uniform(new THREE.Vector3(0.72, 0.92, 1.0));
const uCaust = uniform(QS.has('caustics') ? parseFloat(QS.get('caustics')) : 1.0);
const uCMode = uniform(QS.get('cmode') === 'beams' ? 1 : 0);
const BEAM_N = LOWQ ? 7 : 16;
const CL = new THREE.Vector3(-0.45, 1.0, 0.25).normalize();
const CU = new THREE.Vector3(1, 0, 0).cross(CL).normalize();
const CV = CL.clone().cross(CU).normalize();
const uRays = uniform(QS.has('rays') ? parseFloat(QS.get('rays')) : 1.0);
const uThick = uniform(QS.has('thick') ? parseFloat(QS.get('thick')) : 1.9);

const CELLS = [
  [-0.30, 1.70, -0.25, 0.39],
  [0.36, 1.13, 0.30, 0.53],
  [-0.68, 0.82, 0.05, 0.54],
  [0.41, -0.08, 0.45, 0.70],
  [-0.96, 0.18, -0.10, 0.21],
  [-0.86, -0.22, -0.30, 0.30],
  [-0.50, -0.06, 0.30, 0.22],
  [0.98, -0.92, -0.30, 0.39],
  [-0.15, -1.25, 0.10, 0.55],
  [0.52, -1.62, 0.55, 0.42],
  [-0.62, -0.55, -0.55, 0.36],
  [0.10, -0.80, -0.45, 0.26],
  [0.05, 0.55, -0.70, 0.30],
  [-0.18, 0.30, 0.55, 0.16]
];
const NB = CELLS.length;
const ballData = CELLS.map(() => new THREE.Vector4());
const uBalls = uniformArray(ballData, 'vec4');

const NR = LOWQ ? 32 : 72;
const RBC = Array.from({ length: NR });
const rbcData = RBC.map(() => new THREE.Vector4());
const rbcNData = RBC.map(() => new THREE.Vector4(0, 1, 0, 0));
const uRbc = uniformArray(rbcData, 'vec4');
const uRbcN = uniformArray(rbcNData, 'vec4');

const BG = vec3(0.112, 0.246, 0.296);
const BG_TOP = vec3(0.24, 0.43, 0.46);
const BG_BOT = vec3(0.022, 0.07, 0.095);
const KEY = new THREE.Vector3(-0.72, 0.62, 0.18).normalize();
const uKey = uniform(KEY.clone());

////////////////////////////////////////////////////////////////
//// HASH
////////////////////////////////////////////////////////////////

const hash33 = Fn(([q]) => {
  const p3 = fract(q.mul(vec3(0.1031, 0.1030, 0.0973))).toVar();
  p3.addAssign(dot(p3, p3.yxz.add(33.33)));
  return fract(p3.xxy.add(p3.yxx).mul(p3.zyx));
}).setLayout({ name: 'h33', type: 'vec3', inputs: [{ name: 'q', type: 'vec3' }] });

////////////////////////////////////////////////////////////////
//// SDF
////////////////////////////////////////////////////////////////

const smin = Fn(([a, b, k]) => {
  const h = max(k.sub(abs(a.sub(b))), 0.0).div(k);
  return min(a, b).sub(h.mul(h).mul(k).mul(0.25));
}).setLayout({ name: 'smin', type: 'float', inputs: [{ name: 'a', type: 'float' }, { name: 'b', type: 'float' }, { name: 'k', type: 'float' }] });

const map = Fn(([p]) => {
  const d = float(1e3).toVar();
  Loop(NB, ({ i }) => {
    const b = uBalls.element(i);
    const q = p.sub(b.xyz).div(b.w);
    const fi = float(i);
    const ph = uTime.mul(uWobS).add(fi.mul(1.91));
    const w = sin(q.x.mul(3.1).add(ph)).mul(sin(q.y.mul(2.7).sub(ph.mul(1.27)))).mul(sin(q.z.mul(3.3).add(ph.mul(0.83))))
      .add(sin(q.y.mul(5.3).add(q.x.mul(2.1)).sub(ph.mul(1.9))).mul(0.35));
    d.assign(smin(d, length(p.sub(b.xyz)).sub(b.w.mul(w.mul(uWob).add(1.0))), uK));
  });
  return d;
}).setLayout({ name: 'map', type: 'float', inputs: [{ name: 'p', type: 'vec3' }] });

const nearest = Fn(([p]) => {
  const best = float(1e3).toVar();
  const id = float(0).toVar();
  Loop(NB, ({ i }) => {
    const b = uBalls.element(i);
    const d = length(p.sub(b.xyz)).sub(b.w);
    If(d.lessThan(best), () => { best.assign(d); id.assign(float(i)); });
  });
  return id;
}).setLayout({ name: 'nearest', type: 'float', inputs: [{ name: 'p', type: 'vec3' }] });

const calcNormal = Fn(([p]) => {
  const e = float(0.0015);
  const k1 = vec3(1, -1, -1), k2 = vec3(-1, -1, 1), k3 = vec3(-1, 1, -1), k4 = vec3(1, 1, 1);
  return normalize(
    k1.mul(map(p.add(k1.mul(e)))).add(k2.mul(map(p.add(k2.mul(e)))))
      .add(k3.mul(map(p.add(k3.mul(e))))).add(k4.mul(map(p.add(k4.mul(e)))))
  );
}).setLayout({ name: 'calcNormal', type: 'vec3', inputs: [{ name: 'p', type: 'vec3' }] });

const calcAO = Fn(([p, n]) => {
  const occ = float(0).toVar();
  const sca = float(1).toVar();
  Loop(AO_TAPS, ({ i }) => {
    const h = float(i).mul(0.07 * 5 / AO_TAPS).add(0.02);
    occ.addAssign(h.sub(map(p.add(n.mul(h)))).mul(sca));
    sca.mulAssign(0.72);
  });
  return clamp(occ.mul(-2.6).add(1.0), 0.0, 1.0);
}).setLayout({ name: 'calcAO', type: 'float', inputs: [{ name: 'p', type: 'vec3' }, { name: 'n', type: 'vec3' }] });

////////////////////////////////////////////////////////////////
//// STUDIO
////////////////////////////////////////////////////////////////

const softbox = (d, L, U, sx, sy, soft) => {
  const w = dot(d, L);
  const V = normalize(L.cross(U));
  const Uo = V.cross(L);
  const u = dot(d, V).div(max(w, 0.05));
  const v = dot(d, Uo).div(max(w, 0.05));
  return smoothstep(sx, sx - soft, abs(u)).mul(smoothstep(sy, sy - soft, abs(v))).mul(step(0.0, w));
};

const grad = Fn(([d]) => {
  const c = mix(BG_BOT, BG, smoothstep(-0.52, -0.16, d.y)).toVar();
  c.assign(mix(c, BG_TOP, smoothstep(-0.14, 0.2, d.y)));
  c.mulAssign(vec3(1.0).add(vec3(-0.06, 0.02, 0.07).mul(d.x.mul(-3.0).clamp(-1.0, 1.0))));
  const g = length(d.xy.sub(vec2(-0.04, -0.12)));
  c.addAssign(vec3(0.07, 0.13, 0.13).mul(exp(g.mul(g).mul(-18.0))).mul(smoothstep(0.0, 0.6, d.z.negate())));
  return c;
}).setLayout({ name: 'grad', type: 'vec3', inputs: [{ name: 'd', type: 'vec3' }] });

const caustPat = Fn(([p, t]) => {
  const q = p.toVar();
  const c = float(1.0).toVar();
  for (let n = 0; n < 4; n++) {
    const tt = t.mul(1.0 - 3.5 / (n + 1));
    q.assign(p.add(vec2(cos(tt.sub(q.x)).add(sin(tt.add(q.y))), sin(tt.sub(q.y)).add(cos(tt.add(q.x))))));
    c.addAssign(float(1.0).div(length(vec2(p.x.div(sin(q.x.add(tt)).div(0.005)), p.y.div(cos(q.y.add(tt)).div(0.005))))));
  }
  c.divAssign(4.0);
  const v = float(1.17).sub(pow(c, 1.4));
  return pow(clamp(v, 0.0, 1.0), 8.0);
}).setLayout({ name: 'caustPat', type: 'float', inputs: [{ name: 'p', type: 'vec2' }, { name: 't', type: 'float' }] });

const shadowAt = Fn(([P]) => {
  const sh = float(1.0).toVar();
  const ca = float(0.0).toVar();
  const mk = float(0.0).toVar();
  const rg = float(0.0).toVar();
  Loop(NB, ({ i }) => {
    const b = uBalls.element(i);
    const h = b.y.sub(FLOOR_Y);
    const lift = max(h.sub(b.w), 0.0);
    const c = b.xz.add(vec2(0.18, 0.06).mul(h));
    const dxz = length(P.xz.sub(c));
    const rs = b.w.mul(h.mul(0.35).add(1.05));
    const s1 = smoothstep(rs.mul(1.35), 0.0, dxz).mul(exp(lift.mul(-0.55)));
    const s2 = smoothstep(b.w.mul(0.85), 0.0, dxz).mul(exp(lift.mul(-5.0)));
    sh.mulAssign(float(1.0).sub(s1.mul(0.3)).sub(s2.mul(0.45)));
    const uu = length(P.xz.sub(b.xz.add(vec2(0.1, 0.03).mul(h)))).div(b.w.mul(h.mul(0.12).add(0.78)));
    const fall = exp(lift.mul(-0.5));
    ca.addAssign(smoothstep(0.54, 0.0, uu).mul(exp(lift.mul(-0.7))));
    mk.addAssign(smoothstep(1.0, 0.2, uu).mul(fall));
    rg.addAssign(exp(uu.sub(0.6).div(0.08).pow(2.0).negate()).mul(fall));
  });
  return vec4(sh, ca, mk, rg);
}).setLayout({ name: 'shadowAt', type: 'vec4', inputs: [{ name: 'P', type: 'vec3' }] });

const floorShade = Fn(([ro, rd]) => {
  const m = vec3(1.0).toVar();
  If(rd.y.lessThan(-0.001), () => {
    const t = ro.y.sub(FLOOR_Y).div(rd.y.negate());
    const s = shadowAt(ro.add(rd.mul(t)));
    m.assign(vec3(s.x).add(vec3(0.5, 1.0, 1.0).mul(s.y.mul(0.45))));
  });
  return m;
}).setLayout({ name: 'floorShade', type: 'vec3', inputs: [{ name: 'ro', type: 'vec3' }, { name: 'rd', type: 'vec3' }] });

const env = Fn(([d]) => {
  const col = grad(d).mul(mix(0.55, 1.45, smoothstep(-0.8, 0.9, d.y))).toVar();
  col.addAssign(BG.mul(0.35).mul(smoothstep(0.75, 1.0, d.z.negate())));
  col.mulAssign(mix(1.0, 0.6, smoothstep(0.55, 0.98, abs(d.x)).mul(smoothstep(0.6, 0.0, d.y))));
  col.addAssign(vec3(0.75, 0.95, 1.0).mul(smoothstep(0.4, 0.95, d.y)).mul(0.9));
  col.addAssign(vec3(1.0).mul(softbox(d, uKey, vec3(0, 1, 0), 0.34, 0.24, 0.16)).mul(11.0));
  col.addAssign(vec3(0.9, 1.0, 1.0).mul(softbox(d, normalize(vec3(0.88, -0.38, 0.1)), vec3(0, 1, 0), 0.08, 0.45, 0.06)).mul(3.5));
  col.addAssign(vec3(0.85, 0.97, 1.0).mul(softbox(d, normalize(vec3(0.42, 0.5, 0.75)), vec3(0, 1, 0), 0.07, 0.05, 0.02)).mul(5.0));
  col.addAssign(vec3(0.85, 0.97, 1.0).mul(softbox(d, normalize(vec3(-0.2, -0.75, 0.6)), vec3(1, 0, 0), 0.5, 0.06, 0.04)).mul(1.5));
  return max(col, vec3(0.0));
}).setLayout({ name: 'env', type: 'vec3', inputs: [{ name: 'd', type: 'vec3' }] });

const fresnel = (c) => pow(float(1.0).sub(clamp(c, 0.0, 1.0)), 5.0).mul(0.96).add(0.04);

////////////////////////////////////////////////////////////////
//// AIR BUBBLES
////////////////////////////////////////////////////////////////

const BK = 15.0;
const bubbles = Fn(([ro, rd, len, id]) => {
  const ball = uBalls.element(int(id));
  const rise = vec3(0.0, uTime.mul(0.045), 0.0);
  const q = ro.sub(ball.xyz).sub(rise).mul(BK).toVar();
  const rdS = rd.add(sign(rd).mul(1e-5));
  const cell = floor(q).toVar();
  const stp = sign(rdS);
  const tDelta = abs(vec3(1.0).div(rdS));
  const tMax = cell.add(max(stp, 0.0)).sub(q).div(rdS).toVar();
  const lenK = len.mul(BK);
  const res = vec4(0.0).toVar();
  Loop(DDA, () => {
    const h = hash33(cell.add(vec3(id.mul(17.13), id.mul(3.71), id.mul(9.37))));
    const rad = pow(h.y, 4.0).mul(0.2).add(0.045);
    const cen = cell.add(0.5).add(h.sub(0.5).mul(float(1.0).sub(rad.mul(2.0))));
    const yb = cen.y.div(BK).add(rise.y).div(ball.w);
    const dens = mix(0.02, 0.17, smoothstep(0.7, -0.9, yb));
    If(h.x.lessThan(dens), () => {
      const oc = q.sub(cen);
      const b = dot(oc, rd);
      const hh = b.mul(b).sub(dot(oc, oc).sub(rad.mul(rad)));
      If(hh.greaterThan(0.0), () => {
        const tt = b.negate().sub(hh.sqrt());
        If(tt.greaterThan(0.0).and(tt.lessThan(lenK)), () => {
          const nb = normalize(oc.add(rd.mul(tt)));
          const ndv = clamp(dot(nb, rd.negate()), 0.0, 1.0);
          const core = BG.mul(1.8).mul(pow(ndv, 1.6));
          const rimC = BG.mul(0.55);
          const sp = pow(max(dot(reflect(rd, nb), uKey), 0.0), 10.0).mul(1.6);
          const ring = smoothstep(0.35, 0.0, abs(ndv.sub(0.25))).mul(0.25);
          res.assign(vec4(mix(rimC, core, smoothstep(0.05, 0.75, ndv)).add(sp).add(ring.mul(BG)), float(0.55).add(sp.mul(0.2)).min(0.85)));
          Break();
        });
      });
    });
    const tm = min(tMax.x, min(tMax.y, tMax.z));
    If(tm.greaterThan(lenK), () => { Break(); });
    If(tMax.x.lessThan(tMax.y).and(tMax.x.lessThan(tMax.z)), () => {
      cell.x.addAssign(stp.x); tMax.x.addAssign(tDelta.x);
    }).ElseIf(tMax.y.lessThan(tMax.z), () => {
      cell.y.addAssign(stp.y); tMax.y.addAssign(tDelta.y);
    }).Else(() => {
      cell.z.addAssign(stp.z); tMax.z.addAssign(tDelta.z);
    });
  });
  return res;
}).setLayout({ name: 'bubbles', type: 'vec4', inputs: [{ name: 'ro', type: 'vec3' }, { name: 'rd', type: 'vec3' }, { name: 'len', type: 'float' }, { name: 'id', type: 'float' }] });

////////////////////////////////////////////////////////////////
//// BLOOD CELLS
////////////////////////////////////////////////////////////////

const rbcSd = Fn(([p, i]) => {
  const c = uRbc.element(i);
  const n = uRbcN.element(i).xyz;
  const q = p.sub(c.xyz);
  const s = c.w;
  const y = dot(q, n);
  const r = length(q.sub(n.mul(y)));
  const tor = length(vec2(r.sub(s.mul(0.62)), y)).sub(s.mul(0.34));
  const dq = vec2(r.sub(s.mul(0.7)), abs(y).sub(s.mul(0.09)));
  const disc = length(max(dq, 0.0)).add(min(max(dq.x, dq.y), 0.0));
  return smin(tor, disc, s.mul(0.18));
}).setLayout({ name: 'rbcSd', type: 'float', inputs: [{ name: 'p', type: 'vec3' }, { name: 'i', type: 'int' }] });

const rbcTrace = Fn(([ro, rd, tLim]) => {
  const best = float(1e3).toVar();
  const id = int(-1).toVar();
  Loop(NR, ({ i }) => {
    const ii = int(i).toVar();
    const c = uRbc.element(ii);
    const R = c.w.mul(1.0);
    const oc = ro.sub(c.xyz);
    const b = dot(oc, rd);
    const h = b.mul(b).sub(dot(oc, oc).sub(R.mul(R)));
    If(h.greaterThan(0.0), () => {
      const sq = h.sqrt();
      const t0 = max(b.negate().sub(sq), 0.0);
      const t1 = min(b.negate().add(sq), min(tLim, best));
      If(t0.lessThan(t1), () => {
        const t = t0.toVar();
        Loop(12, () => {
          const d = rbcSd(ro.add(rd.mul(t)), ii);
          If(d.lessThan(0.0003), () => { best.assign(t); id.assign(ii); Break(); });
          t.addAssign(d);
          If(t.greaterThan(t1), () => { Break(); });
        });
      });
    });
  });
  return vec2(best, float(id));
}).setLayout({ name: 'rbcTrace', type: 'vec2', inputs: [{ name: 'ro', type: 'vec3' }, { name: 'rd', type: 'vec3' }, { name: 'tLim', type: 'float' }] });

const rbcShade = Fn(([p, rd, fid]) => {
  const i = int(fid);
  const e = float(0.0003);
  const k1 = vec3(1, -1, -1), k2 = vec3(-1, -1, 1), k3 = vec3(-1, 1, -1), k4 = vec3(1, 1, 1);
  const n = normalize(
    k1.mul(rbcSd(p.add(k1.mul(e)), i)).add(k2.mul(rbcSd(p.add(k2.mul(e)), i)))
      .add(k3.mul(rbcSd(p.add(k3.mul(e)), i))).add(k4.mul(rbcSd(p.add(k4.mul(e)), i)))
  );
  const c = uRbc.element(i);
  const ax = uRbcN.element(i).xyz;
  const q = p.sub(c.xyz);
  const rr = length(q.sub(ax.mul(dot(q, ax)))).div(c.w);
  const L = normalize(vec3(-0.4, 0.85, 0.35));
  const wrap = max(dot(n, L).add(0.4).div(1.4), 0.0);
  const ndv = clamp(dot(n, rd.negate()), 0.0, 1.0);
  const pick = fract(fid.mul(0.618034).add(0.17));
  const base = mix(vec3(0.95, 0.88, 0.02), vec3(0.22, 1.0, 0.06), step(0.5, pick));
  const col = base.mul(wrap.mul(0.55).add(0.55)).toVar();
  col.addAssign(base.mul(pow(float(1.0).sub(ndv), 2.0)).mul(0.9));
  col.addAssign(base.mul(smoothstep(0.45, 0.1, rr)).mul(0.35));
  col.addAssign(vec3(1.0).mul(pow(max(dot(reflect(rd, n), L), 0.0), 28.0)).mul(0.4));
  return col;
}).setLayout({ name: 'rbcShade', type: 'vec3', inputs: [{ name: 'p', type: 'vec3' }, { name: 'rd', type: 'vec3' }, { name: 'fid', type: 'float' }] });

////////////////////////////////////////////////////////////////
//// INNER CAUSTICS
////////////////////////////////////////////////////////////////

const blendBall = Fn(([X]) => {
  const sc = vec3(0.0).toVar();
  const sr = float(0.0).toVar();
  const sw = float(1e-6).toVar();
  Loop(NB, ({ i }) => {
    const b = uBalls.element(i);
    const d = length(X.sub(b.xyz)).sub(b.w);
    const w = exp(clamp(d, -0.8, 2.0).mul(-11.0));
    sc.addAssign(b.xyz.mul(w));
    sr.addAssign(b.w.mul(w));
    sw.addAssign(w);
  });
  return vec4(sc.div(sw), sr.div(sw));
}).setLayout({ name: 'blendBall', type: 'vec4', inputs: [{ name: 'X', type: 'vec3' }] });

const innerCaust = Fn(([X, id]) => {
  const bb = blendBall(X);
  const q = X.sub(bb.xyz).div(bb.w);
  const L = vec3(CL.x, CL.y, CL.z), Uc = vec3(CU.x, CU.y, CU.z), Vc = vec3(CV.x, CV.y, CV.z);
  const cb = vec2(dot(X, Uc), dot(X, Vc)).mul(16.0);
  const co = vec2(-250.0);
  const ct = uTime.mul(0.5);
  const pat = LOWQ ? vec3(caustPat(cb.add(co), ct)) : vec3(caustPat(cb.mul(0.985).add(co), ct), caustPat(cb.add(co), ct), caustPat(cb.mul(1.015).add(co), ct));
  const far = smoothstep(-0.35, 0.85, dot(q, L.negate()));
  const sp = q.add(L.mul(0.62));
  const spot = exp(dot(sp, sp).mul(-7.0));
  return pat.mul(4.0).mul(far.mul(0.85).add(0.15)).add(vec3(spot.mul(0.5))).mul(vec3(0.8, 1.0, 1.0));
}).setLayout({ name: 'innerCaust', type: 'vec3', inputs: [{ name: 'X', type: 'vec3' }, { name: 'id', type: 'float' }] });

const beams = Fn(([ro, rd, len, id]) => {
  const bb = blendBall(ro.add(rd.mul(len.mul(0.5))));
  const Uc = vec3(CU.x, CU.y, CU.z), Vc = vec3(CV.x, CV.y, CV.z), L = vec3(CL.x, CL.y, CL.z);
  const co = vec2(-250.0);
  const ct = uTime.mul(0.4);
  const acc = vec3(0.0).toVar();
  const dt = len.div(BEAM_N);
  const j = float(0.5);
  Loop(BEAM_N, ({ i }) => {
    const x = ro.add(rd.mul(float(i).add(j).mul(dt)));
    const q = x.sub(bb.xyz).div(bb.w);
    const cb = vec2(dot(x, Uc), dot(x, Vc)).mul(7.6);
    const v = caustPat(cb.add(co), ct).mul(1.4).pow(1.5);
    const depth = smoothstep(1.0, -0.6, dot(q, L));
    acc.addAssign(vec3(v.mul(0.85), v, v).mul(depth));
  });
  const scat = pow(clamp(dot(rd.negate(), L.negate()).mul(0.5).add(0.5), 0.0, 1.0), 2.0).mul(0.8).add(0.4);
  return acc.mul(dt.div(bb.w)).mul(scat).mul(26.0);
}).setLayout({ name: 'beams', type: 'vec3', inputs: [{ name: 'ro', type: 'vec3' }, { name: 'rd', type: 'vec3' }, { name: 'len', type: 'float' }, { name: 'id', type: 'float' }] });

const causticsAt = (pi, rdi, tIn, bid) => {
  const rip = innerCaust(pi.add(rdi.mul(tIn)), bid).toVar();
  const cx = rip.mul(0.16).toVar();
  If(uCMode.greaterThan(0.5), () => {
    cx.assign(beams(pi, rdi, tIn, bid).mul(0.16).add(rip.mul(0.05)));
  });
  return cx.mul(uCaust);
};

const floorCaust = Fn(([ro, rd]) => {
  const m = vec3(1.0).toVar();
  If(rd.y.lessThan(-0.001), () => {
    const t = ro.y.sub(FLOOR_Y).div(rd.y.negate());
    const P = ro.add(rd.mul(t));
    const s = shadowAt(P);
    m.assign(vec3(s.x).add(vec3(0.5, 1.0, 1.0).mul(s.y.mul(0.3))));
    If(s.z.greaterThan(0.002), () => {
      const cb = P.xz.mul(vec2(3.4, 2.2));
      const co = vec2(-250.0);
      const ct = uTime.mul(0.45);
      const pat = LOWQ ? vec3(caustPat(cb.add(co), ct)) : vec3(caustPat(cb.mul(0.988).add(co), ct), caustPat(cb.add(co), ct), caustPat(cb.mul(1.012).add(co), ct));
      const c = pat.mul(6.0).mul(s.z).add(vec3(s.w.mul(0.15))).mul(vec3(0.72, 1.0, 1.0));
      m.addAssign(c.mul(0.3).mul(uCaust).mul(smoothstep(-0.02, -0.12, rd.y)));
    });
  });
  return m;
}).setLayout({ name: 'floorCaust', type: 'vec3', inputs: [{ name: 'ro', type: 'vec3' }, { name: 'rd', type: 'vec3' }] });

////////////////////////////////////////////////////////////////
//// GLASS
////////////////////////////////////////////////////////////////

const ABS = vec3(0.5, 0.12, 0.09);

const interior = (p, rdi, steps) => {
  const ti = float(0.006).toVar();
  Loop(steps, () => {
    const d = map(p.add(rdi.mul(ti)));
    If(d.greaterThan(-0.0004), () => { Break(); });
    ti.addAssign(max(d.negate().mul(0.8), 0.004));
  });
  return ti;
};

const exitLight = (pe, rdi, ne, behind) => {
  const cosI = clamp(dot(rdi, ne), 0.0, 1.0);
  const rdo = refract(rdi, ne.negate(), uIor);
  const tir = step(dot(rdo, rdo), 0.5);
  const Fi = mix(fresnel(cosI), float(1.0), tir);
  const inner = env(reflect(rdi, ne.negate())).mul(0.6);
  return mix(behind, inner, Fi);
};

const exitDisp = (rdi, ne, back) => {
  const nn = ne.negate();
  if (LOWQ) {
    const r = refract(rdi, nn, uIor);
    const f = select(dot(r, r).greaterThan(0.5), fresnel(clamp(dot(rdi, ne), 0.0, 1.0)), float(1.0));
    return mix(back, env(reflect(rdi, nn)).mul(0.6), f);
  }
  const refl = reflect(rdi, nn);
  const dir = (eta) => {
    const r = refract(rdi, nn, eta);
    const ok = dot(r, r).greaterThan(0.5);
    return vec4(select(ok, r, refl), select(ok, float(0.0), float(1.0)));
  };
  const R = dir(uIor.sub(uDisp)), G = dir(uIor), B = dir(uIor.add(uDisp));
  const eG = env(G.xyz);
  const behind = max(vec3(back.x.add(env(R.xyz).x.sub(eG.x)), back.y, back.z.add(env(B.xyz).z.sub(eG.z))), vec3(0.0));
  const f = fresnel(clamp(dot(rdi, ne), 0.0, 1.0));
  const Fi = vec3(mix(f, float(1.0), R.w), mix(f, float(1.0), G.w), mix(f, float(1.0), B.w));
  return mix(behind, env(refl).mul(0.6), Fi);
};
const absorb = (t) => exp(ABS.mul(uThick).mul(t).negate());

const secondLayer = Fn(([ro, rd]) => {
  const t = float(0.02).toVar();
  const hit = float(0).toVar();
  Loop(STEPS2, () => {
    const d = map(ro.add(rd.mul(t)));
    If(d.lessThan(0.0008), () => { hit.assign(1.0); Break(); });
    t.addAssign(d.mul(0.85));
    If(t.greaterThan(6.0), () => { Break(); });
  });
  const col = env(rd).mul(floorShade(ro, rd)).toVar();
  If(hit.greaterThan(0.5), () => {
    const p = ro.add(rd.mul(t));
    const n = calcNormal(p);
    const ndv = clamp(dot(n, rd.negate()), 0.0, 1.0);
    const F = fresnel(ndv);
    const ao2 = calcAO(p, n).mul(0.5).add(0.5);
    const rdi = refract(rd, n, float(1.0).div(uIor));
    const pi = p.sub(n.mul(0.003));
    const ti = interior(pi, rdi, LOWQ ? 20 : 28);
    const pe = pi.add(rdi.mul(ti));
    const ne = calcNormal(pe);
    const rdo = refract(rdi, ne.negate(), uIor);
    const rdX = select(dot(rdo, rdo).greaterThan(0.5), rdo, reflect(rdi, ne.negate()));
    const behind = env(rdX).mul(floorShade(pe, rdX));
    const rb = rbcTrace(pi, rdi, ti).toVar();
    const hitR = rb.y.greaterThan(-0.5);
    const tIn = select(hitR, rb.x, ti).toVar();
    const bid = nearest(pi).toVar();
    const cx = causticsAt(pi, rdi, tIn, bid);
    const glassIn = select(hitR, rbcShade(pi.add(rdi.mul(rb.x)), rdi, rb.y).mul(cx.mul(2.5).add(1.0)), exitDisp(rdi, ne, behind).add(cx));
    const bub = bubbles(pi, rdi, tIn, bid);
    const inside = mix(glassIn.mul(absorb(tIn)), bub.rgb, bub.a);
    col.assign(mix(inside, env(reflect(rd, n)), F).mul(ao2));
  });
  return col;
}).setLayout({ name: 'secondLayer', type: 'vec3', inputs: [{ name: 'ro', type: 'vec3' }, { name: 'rd', type: 'vec3' }] });

////////////////////////////////////////////////////////////////
//// DUST PARTICLES · TWISTED SLICES
////////////////////////////////////////////////////////////////

const particles = Fn(([ro, rd, tmax, drift, seed]) => {
  const sum = float(0).toVar();
  If(uPartGain.greaterThan(0.0), () => {
    const t = uTime;
    const sv = vec3(13.1, 7.3, 3.7).mul(seed);
    const flow = drift.mul(t).mul(uPartSpeed).toVar();
    const q = ro.add(flow).div(uPartCell).toVar();
    const cell = floor(q).toVar();
    const st = sign(rd).toVar();
    const ard = max(abs(rd), 1e-5).toVar();
    const tDelta = abs(float(1.0).div(ard)).mul(uPartCell).toVar();
    const tNext = abs(cell.add(max(st, 0.0)).sub(q).div(ard).mul(st).mul(uPartCell)).toVar();
    const pix = uTan.mul(2.0).div(uRes.y);
    Loop(PART_STEPS, () => {
      const hc = hash33(cell.mul(1.31).add(7.7).add(sv)).toVar();
      If(hc.x.lessThan(uPartDensity), () => {
        const hp = hash33(cell.add(19.1).add(sv)).toVar();
        const hd = hash33(cell.add(41.7).add(sv)).sub(0.5);
        const dir = hd.div(max(length(hd), 1e-3));
        const swing = sin(t.mul(uPartSpeed).mul(hp.x.mul(0.5).add(0.3)).add(hc.z.mul(6.2831))).mul(0.21);
        const wob = sin(t.mul(uPartSpeed).mul(hp.yzx.add(0.7)).add(hp.mul(6.2831))).mul(0.035);
        const pp = cell.add(0.5).add(hp.sub(0.5).mul(0.4)).add(dir.mul(swing)).add(wob).mul(uPartCell).sub(flow).toVar();
        const tt = dot(pp.sub(ro), rd).toVar();
        If(tt.greaterThan(0.0).and(tt.lessThan(tmax)), () => {
          const dd = length(ro.add(rd.mul(tt)).sub(pp));
          const rad = max(uPartSize.mul(float(1.0).add(max(float(6.0).sub(tt), 0.0).mul(0.12))), tt.mul(pix).mul(0.55)).toVar();
          const e = uPartSize.div(rad);
          const fade = smoothstep(0.8, 3.5, tt).mul(exp(tt.mul(-0.035)));
          const spark = float(0.4).add(hc.y.mul(hc.y).mul(1.6));
          sum.addAssign(exp(dd.mul(dd).negate().div(rad.mul(rad))).mul(e).mul(e).mul(fade).mul(spark));
        });
      });
      const tn = min(tNext.x, min(tNext.y, tNext.z)).toVar();
      If(tn.greaterThan(tmax), () => { Break(); });
      const m = step(tNext, vec3(tn)).toVar();
      cell.addAssign(m.mul(st));
      tNext.addAssign(m.mul(tDelta));
    });
  });
  return uPartCol.mul(sum).mul(uPartGain);
}).setLayout({ name: 'particles', type: 'vec3', inputs: [{ name: 'ro', type: 'vec3' }, { name: 'rd', type: 'vec3' }, { name: 'tmax', type: 'float' }, { name: 'drift', type: 'vec3' }, { name: 'seed', type: 'float' }] });

////////////////////////////////////////////////////////////////
//// RENDER
////////////////////////////////////////////////////////////////

const screenNdc = () => vec2(screenUV.x.mul(2.0).sub(1.0).mul(uRes.x.div(uRes.y)), screenUV.y.mul(-2.0).add(1.0));

const shoulder = (c) => {
  const k = 0.62;
  const over = max(c.sub(k), 0.0);
  return min(c, vec3(k)).add(vec3(1.0 - k).mul(float(1.0).sub(exp(over.div(1.0 - k).negate()))));
};

const godRays = (ndc) => {
  const O = vec2(-0.55, 2.6);
  const d = ndc.sub(O);
  const a = atan(d.x, d.y.negate());
  const t = uTime;
  const n = sin(a.mul(23.0).add(t.mul(0.31))).mul(0.5)
    .add(sin(a.mul(37.0).sub(t.mul(0.23)).add(1.7)).mul(0.35))
    .add(sin(a.mul(61.0).add(t.mul(0.47)).add(4.1)).mul(0.25))
    .add(sin(a.mul(11.0).sub(t.mul(0.13)).add(2.3)).mul(0.4));
  const beam = pow(clamp(n.mul(0.42).add(0.5), 0.0, 1.0), 4.0);
  const along = length(d);
  const flick = sin(along.mul(3.0).sub(t.mul(0.6)).add(a.mul(9.0))).mul(0.25).add(0.75);
  const fade = smoothstep(4.4, 1.6, along).mul(smoothstep(-1.1, 0.9, ndc.y));
  const surf = smoothstep(0.82, 1.05, ndc.y).mul(sin(ndc.x.mul(9.0).add(t.mul(0.7))).mul(0.3).add(0.7)).mul(0.25);
  return vec3(0.62, 0.9, 0.95).mul(beam.mul(flick).mul(fade).mul(0.32).add(surf)).mul(uRays);
};

const rayRender = Fn(() => {
  const ndc = screenNdc();
  const rd = normalize(uCR.mul(ndc.x.mul(uTan)).add(uCU.mul(ndc.y.mul(uTan))).add(uCF)).toVar();
  const ro = uCamPos;
  const vig = smoothstep(2.4, 0.3, length(ndc.mul(vec2(0.62, 0.8))));
  const col = grad(rd).mul(vig.mul(0.22).add(0.8)).mul(floorCaust(ro, rd)).toVar();
  const tHit = float(40.0).toVar();

  const bR = float(3.2);
  const b = dot(ro, rd);
  const disc = b.mul(b).sub(dot(ro, ro).sub(bR.mul(bR)));
  If(disc.greaterThan(0.0), () => {
    const t = b.negate().sub(disc.sqrt()).toVar();
    const tf = b.negate().add(disc.sqrt());
    const hit = float(0).toVar();
    Loop(STEPS, () => {
      const d = map(ro.add(rd.mul(t)));
      If(d.lessThan(t.mul(0.00008).add(0.0004)), () => { hit.assign(1.0); Break(); });
      t.addAssign(d.mul(0.85));
      If(t.greaterThan(tf), () => { Break(); });
    });
    If(hit.greaterThan(0.5), () => {
      const p = ro.add(rd.mul(t));
      const n = calcNormal(p);
      const ndv = clamp(dot(n, rd.negate()), 0.0, 1.0);
      const F = fresnel(ndv);
      const refl = env(reflect(rd, n));
      const rdi = normalize(refract(rd, n, float(1.0).div(uIor)));
      const pi = p.sub(n.mul(0.003));
      const ti = interior(pi, rdi, IN_STEPS);
      const pe = pi.add(rdi.mul(ti));
      const ne = calcNormal(pe);
      const rdo = refract(rdi, ne.negate(), uIor).toVar();
      const ok = dot(rdo, rdo).greaterThan(0.5);
      const rdB = select(ok, rdo, reflect(rdi, ne.negate()));
      const back = (LOWQ ? env(rdB).mul(floorShade(pe, rdB)) : secondLayer(pe.add(ne.mul(0.004)), rdB)).toVar();
      const rb = rbcTrace(pi, rdi, ti).toVar();
      const hitR = rb.y.greaterThan(-0.5);
      const tIn = select(hitR, rb.x, ti).toVar();
      const bid = nearest(pi).toVar();
      const cx = causticsAt(pi, rdi, tIn, bid);
      const glassIn = select(hitR, rbcShade(pi.add(rdi.mul(rb.x)), rdi, rb.y).mul(cx.mul(2.5).add(1.0)), exitDisp(rdi, ne, back).add(cx));
      const bub = bubbles(pi, rdi, tIn, bid);
      const inside = mix(glassIn.mul(absorb(tIn)), bub.rgb, bub.a);
      const edgeDark = smoothstep(0.0, 0.12, ndv).mul(0.35).add(0.65);
      const ao = pow(calcAO(p, n), 1.4);
      col.assign(mix(inside.mul(edgeDark).mul(ao.mul(0.55).add(0.45)), refl.mul(ao.mul(0.8).add(0.2)), F));
      tHit.assign(t);
    });
  });
  col.addAssign(godRays(ndc).mul(select(tHit.lessThan(39.0), float(0.35), float(1.0))));
  col.addAssign(particles(ro, rd, tHit, vec3(0.14, 0.05, 0.09), float(0.0)));
  if (!LOWQ) {
    col.addAssign(particles(ro, rd, tHit, vec3(-0.12, -0.08, 0.05), float(1.0)));
    col.addAssign(particles(ro, rd, tHit, vec3(0.03, 0.1, -0.15), float(2.0)));
  }
  return vec4(col, 1.0);
});

////////////////////////////////////////////////////////////////
//// RENDERER
////////////////////////////////////////////////////////////////

const renderer = new THREE.WebGPURenderer({ antialias: false, forceWebGL: QS.has('webgl') });
const PR_MAX = Math.min(window.devicePixelRatio, LOWQ ? 1.0 : 1.5) * (parseFloat(QS.get('scale')) || 1);
const PR_MIN = LOWQ ? 0.45 : 0.65;
let pr = PR_MAX;
renderer.setPixelRatio(pr);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.NoToneMapping;
document.body.appendChild(renderer.domElement);
await renderer.init();

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
const scene = new THREE.Scene();
scene.backgroundNode = rayRender();

////////////////////////////////////////////////////////////////
//// POST
////////////////////////////////////////////////////////////////

const pipeline = new THREE.RenderPipeline(renderer);
const sp = pass(scene, camera);
const raw = sp.getTextureNode('output');
const graded = convertToTexture(vec4(shoulder(raw.rgb), 1.0));
pipeline.outputNode = fxaa(graded);

////////////////////////////////////////////////////////////////
//// CELLS
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

const PH = CELLS.map((_, i) => [Math.sin(i * 12.9898) * 43758.5453 % 1, Math.sin(i * 78.233) * 12345.678 % 1, Math.sin(i * 39.425) * 24634.6345 % 1]);
const rot = new THREE.Euler();
const _n = new THREE.Vector3();
let sd = 7;
const rand = () => { sd = (sd * 16807) % 2147483647; return (sd - 1) / 2147483646; };
const inBall = (r, k) => { let x, y, z; do { x = rand() * 2 - 1; y = rand() * 2 - 1; z = rand() * 2 - 1; } while (x * x + y * y + z * z > 1); return new THREE.Vector3(x, y, z).multiplyScalar(r * k); };
const HOSTS = CELLS.map((c, i) => i).filter((i) => CELLS[i][3] >= 0.2);
const VOL = HOSTS.map((i) => CELLS[i][3] ** 3);
const VSUM = VOL.reduce((a, b) => a + b, 0);
const pickHost = () => { let r = rand() * VSUM; for (let k = 0; k < HOSTS.length; k++) { r -= VOL[k]; if (r <= 0) return HOSTS[k]; } return HOSTS[0]; };
const AG = RBC.map(() => {
  const host = pickHost();
  return {
    host, off: inBall(CELLS[host][3] * CL_SCALE, 0.55), vel: new THREE.Vector3(), goal: new THREE.Vector3(), gT: 0, mig: -1,
    ph: [rand(), rand(), rand()], size: 0.026 * (0.85 + rand() * 0.3), wait: 2 + rand() * 10
  };
});
const _d = new THREE.Vector3(), _ct = new THREE.Vector3(), _ch = new THREE.Vector3();
const linked = (a, b) => {
  const A = ballData[a], B = ballData[b];
  const d = Math.hypot(A.x - B.x, A.y - B.y, A.z - B.z);
  return d < A.w + B.w - 0.06 + uK.value * 0.35;
};
const simRbc = (tt, dt) => {
  AG.forEach((g, i) => {
    const H = ballData[g.host];
    _ch.set(H.x, H.y, H.z);
    g.wait -= dt;
    if (g.mig < 0 && g.wait <= 0) {
      const opts = HOSTS.filter((j) => j !== g.host && linked(g.host, j));
      if (opts.length && rand() < 0.75) { g.mig = opts[Math.floor(rand() * opts.length)]; g.gT = 0; }
      g.wait = 4 + rand() * 12;
    }
    let speed = 0.16;
    if (g.mig >= 0) {
      const T = ballData[g.mig];
      _ct.set(T.x, T.y, T.z);
      if (!linked(g.host, g.mig)) { g.mig = -1; }
      else {
        g.goal.copy(_ct).sub(_ch);
        speed = 0.3;
        _d.copy(g.off).sub(g.goal);
        if (_d.length() < g.off.length()) { g.off.copy(_d); g.host = g.mig; g.mig = -1; g.gT = 0; g.goal.copy(inBall(T.w, 0.5)); }
      }
    }
    if (g.mig < 0) {
      g.gT -= dt;
      if (g.gT <= 0) { g.goal.copy(inBall(ballData[g.host].w, 0.55)); g.gT = 2 + rand() * 4; }
    }
    _d.copy(g.goal).sub(g.off);
    const L = _d.length();
    if (L > 1e-4) _d.multiplyScalar(Math.min(1, L / 0.15) * speed / L);
    _d.sub(g.vel).multiplyScalar(Math.min(1, dt * 1.6));
    g.vel.add(_d);
    g.off.addScaledVector(g.vel, dt);
    if (g.mig < 0) {
      const lim = ballData[g.host].w * 0.62;
      const ol = g.off.length();
      if (ol > lim) g.off.multiplyScalar(lim / ol);
    }
    const B = ballData[g.host];
    const [a, b, c] = g.ph;
    const wob = 0.012;
    rbcData[i].set(
      B.x + g.off.x + Math.sin(tt * (1.1 + a) + c * 9.0) * wob,
      B.y + g.off.y + Math.sin(tt * (0.9 + b) + a * 9.0) * wob,
      B.z + g.off.z + Math.sin(tt * (1.0 + c) + b * 9.0) * wob,
      g.size
    );
    _n.set(Math.sin(tt * (0.5 + b * 0.5) + a * 9.0), Math.cos(tt * (0.45 + c * 0.4) + b * 7.0), Math.sin(tt * (0.4 + a * 0.4) + c * 5.0) + 0.4).normalize();
    rbcNData[i].set(_n.x, _n.y, _n.z, 0);
  });
};
const _v = new THREE.Vector3();
let merge = 0, mergeT = 0;
const updateCells = (tt, dt) => {
  merge += (mergeT - merge) * Math.min(1, dt * 1.2);
  uK.value = 0.16 + merge * 0.42;
  uWob.value = 0.028 + merge * 0.03;
  rot.set(0.08 * Math.sin(tt * 0.13) + spin.pitch, Math.sin(tt * 0.07) * 0.35 + spin.yaw, 0.04 * Math.sin(tt * 0.09));
  CELLS.forEach(([x, y, z, r], i) => {
    const [a, b, c] = PH[i];
    _v.set(
      x + Math.sin(tt * (0.21 + a * 0.15) + b * 6.28) * 0.07,
      y + Math.sin(tt * (0.17 + b * 0.12) + c * 6.28) * 0.09 + Math.sin(tt * 0.31) * 0.04,
      z + Math.sin(tt * (0.19 + c * 0.1) + a * 6.28) * 0.08
    );
    _v.multiplyScalar(1 - merge * 0.16);
    _v.applyEuler(rot);
    _v.multiplyScalar(CL_SCALE);
    _v.y += CL_LIFT;
    const breathe = 1 + Math.sin(tt * (0.5 + a * 0.3) + c * 6.28) * 0.025;
    ballData[i].set(_v.x, _v.y, _v.z, r * breathe * CL_SCALE);
  });
  simRbc(tt, dt);
};

////////////////////////////////////////////////////////////////
//// TOGGLE
////////////////////////////////////////////////////////////////

let mode = QS.get('mode') === 'merge' ? 'merge' : 'float';
const modeBtns = [...document.querySelectorAll('[data-mode]')];
const sync = () => {
  modeBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
  mergeT = mode === 'merge' ? 1 : 0;
};
modeBtns.forEach((b) => b.addEventListener('click', () => { mode = b.dataset.mode; sync(); Sound.swell(mode === 'merge'); }));
window.addEventListener('keydown', (e) => {
  if (e.key === 'm' || e.key === 'M') { mode = mode === 'float' ? 'merge' : 'float'; sync(); Sound.swell(mode === 'merge'); }
});

////////////////////////////////////////////////////////////////
//// AUDIO · CELLS
////////////////////////////////////////////////////////////////

const Sound = (() => {
  let ctx = null, master = null, wet = null, enabled = true, padF = null;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
  const SCALE = [50, 57, 62, 64, 66, 69, 71, 74, 76, 78, 81];
  const bus = () => {
    master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    const len = ctx.sampleRate * 5, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
    const conv = ctx.createConvolver(); conv.buffer = ir;
    wet = ctx.createGain(); wet.gain.value = 0.6;
    wet.connect(conv).connect(master);
  };
  const send = (n, dry, rev) => {
    const g1 = ctx.createGain(); g1.gain.value = dry; n.connect(g1).connect(master);
    const g2 = ctx.createGain(); g2.gain.value = rev; n.connect(g2).connect(wet);
  };
  const pad = () => {
    padF = ctx.createBiquadFilter(); padF.type = 'lowpass'; padF.frequency.value = 700; padF.Q.value = 0.6;
    const g = ctx.createGain(); g.gain.value = 0.05;
    padF.connect(g); send(g, 0.6, 0.8);
    [38, 45, 50, 57, 64].forEach((m, k) => {
      for (const det of [-4, 4]) {
        const o = ctx.createOscillator(); o.type = k < 2 ? 'sine' : 'triangle';
        o.frequency.value = hz(m); o.detune.value = det + rnd(-2, 2);
        const og = ctx.createGain(); og.gain.value = k < 2 ? 0.5 : 0.22;
        const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = rnd(0.04, 0.12); lg.gain.value = og.gain.value * 0.6;
        lfo.connect(lg).connect(og.gain);
        o.connect(og).connect(padF); o.start(); lfo.start();
      }
    });
    const len = ctx.sampleRate * 4, nb = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = nb.getChannelData(c); let l = 0; for (let i = 0; i < len; i++) { l = l * 0.985 + (Math.random() * 2 - 1) * 0.015; d[i] = l * 6; } }
    const ns = ctx.createBufferSource(); ns.buffer = nb; ns.loop = true;
    const nf = ctx.createBiquadFilter(); nf.type = 'lowpass'; nf.frequency.value = 380;
    const ng = ctx.createGain(); ng.gain.value = 0.05;
    ns.connect(nf).connect(ng); send(ng, 0.8, 0.3); ns.start();
  };
  const plip = (t, size) => {
    const f0 = hz(SCALE[Math.floor(Math.random() * SCALE.length)] + 12) * (1.4 - size * 0.6);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f0 * rnd(1.6, 2.3), t + 0.06 + size * 0.08);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(rnd(0.025, 0.05), t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12 + size * 0.2);
    const p = ctx.createStereoPanner(); p.pan.value = rnd(-0.8, 0.8);
    o.connect(g).connect(p); send(p, 0.7, 0.6);
    o.start(t); o.stop(t + 0.5);
  };
  const plips = () => {
    if (ctx) {
      const t = ctx.currentTime + 0.03;
      plip(t, Math.random());
      if (Math.random() < 0.45) { const n = 1 + Math.floor(Math.random() * 4); for (let i = 1; i <= n; i++) plip(t + i * rnd(0.05, 0.14), Math.random() * 0.5); }
    }
    setTimeout(plips, rnd(0.6, 3.2) * 1000);
  };
  const swell = (on) => {
    if (!ctx || !enabled) return;
    const t = ctx.currentTime;
    padF.frequency.cancelScheduledValues(t);
    padF.frequency.setTargetAtTime(on ? 1700 : 700, t, 1.2);
    const o = ctx.createOscillator(); o.type = 'sine';
    const f = hz(on ? 38 : 45);
    o.frequency.setValueAtTime(f * (on ? 1.5 : 0.7), t); o.frequency.exponentialRampToValueAtTime(f, t + 1.4);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.12, t + 0.25); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
    o.connect(g); send(g, 0.7, 0.7); o.start(t); o.stop(t + 2.8);
    for (let i = 0; i < 6; i++) plip(t + 0.2 + i * rnd(0.04, 0.1), Math.random() * 0.4);
  };
  const start = () => {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    bus(); pad();
    master.gain.setTargetAtTime(enabled ? 0.9 : 0, ctx.currentTime, 2.0);
    setTimeout(plips, 1500);
  };
  const setEnabled = (on) => { enabled = on; if (ctx) master.gain.setTargetAtTime(on ? 0.9 : 0, ctx.currentTime, 0.6); };
  return { start, setEnabled, swell, resume: () => ctx && ctx.resume() };
})();
let soundOn = true;
const kick = () => {
  Sound.start(); Sound.resume(); Sound.setEnabled(soundOn);
  ['pointerdown', 'keydown', 'touchstart'].forEach(e => window.removeEventListener(e, kick));
};
['pointerdown', 'keydown', 'touchstart'].forEach(e => window.addEventListener(e, kick, { passive: true }));
document.addEventListener('visibilitychange', () => { if (!document.hidden) Sound.resume(); });
const caustBtns = [...document.querySelectorAll('[data-caust]')];
const syncCaust = () => caustBtns.forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.caust) === uCMode.value)));
caustBtns.forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); uCMode.value = Number(b.dataset.caust); syncCaust(); }));
window.addEventListener('keydown', (e) => { if (e.key === 'c' || e.key === 'C') { uCMode.value = 1 - uCMode.value; syncCaust(); } });
syncCaust();
const sndBtn = document.querySelector('[data-snd]');
sndBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  Sound.start(); Sound.resume();
  soundOn = !soundOn;
  Sound.setEnabled(soundOn);
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
  const dist = a < 0.62 ? 0.62 / Math.max(a, 0.4) : 1;
  camera.position.set(0, CAM_Y, CAM_Z).sub(CAM_TGT).multiplyScalar(dist).add(CAM_TGT);
  camera.lookAt(CAM_TGT);
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
  uCamPos.value.copy(camera.position);
  const me = camera.matrixWorld.elements;
  uCR.value.set(me[0], me[1], me[2]);
  uCU.value.set(me[4], me[5], me[6]);
  uCF.value.set(-me[8], -me[9], -me[10]);
  renderer.setSize(w, h);
  uRes.value.set(w, h);
};
syncSize();
let ema = 16, tune = 0;
const adapt = (dt) => {
  ema += (dt * 1000 - ema) * 0.05;
  if ((tune += dt) < 1.0) return;
  tune = 0;
  let next = pr;
  if (ema > (LOWQ ? 22 : 24)) next = Math.max(PR_MIN, pr - (LOWQ ? 0.08 : 0.1));
  else if (ema < 15 && pr < PR_MAX) next = Math.min(PR_MAX, pr + 0.05);
  if (Math.abs(next - pr) > 0.001) { pr = next; renderer.setPixelRatio(pr); renderer.setSize(vw, vh); }
};
sync();
const FIXED = QS.has('t') ? parseFloat(QS.get('t')) : null;
if (FIXED !== null && mode === 'merge') merge = 1;
let runT = 0, firstFrame = true;
renderer.setAnimationLoop((ts) => {
  clock.update(ts);
  syncSize();
  const dt = Math.min(clock.getDelta(), 0.05);
  if (FIXED === null) adapt(clock.getDelta());
  runT += dt;
  const now = FIXED !== null ? FIXED : runT;
  uTime.value = now;
  if (!spin.down) { spin.yaw += spin.vy; spin.pitch += spin.vp; spin.vy *= 0.94; spin.vp *= 0.94; spin.pitch *= 0.99; }
  updateCells(now, dt);
  pipeline.render();
  if (firstFrame) {
    firstFrame = false;
    document.getElementById('loading').classList.add('off');
    window.__ready = true;
  }
});

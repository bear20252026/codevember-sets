(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const h of s)if(h.type==="childList")for(const S of h.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&r(S)}).observe(document,{childList:!0,subtree:!0});function o(s){const h={};return s.integrity&&(h.integrity=s.integrity),s.referrerPolicy&&(h.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?h.credentials="include":s.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(s){if(s.ep)return;s.ep=!0;const h=o(s);fetch(s.href,h)}})();const xn=`// Shared by the simulation and the picture. main.ts puts a header in front: the grid's size, the
// block's place in it (CUBE, TOP, LO), the cell types, the tools, the layers that are not rock,
// and PAL, SOFT and BG. Whoever includes this declares \`cells\`, \`u\` and \`pk\`.

struct U {
  camO: vec4f,    // where the middle of the screen starts, far outside the grid
  camR: vec4f,    // right, w: voxels per pixel
  camU: vec4f,    // up
  camF: vec4f,    // forward: every ray's direction (orthographic), so the line of sight, and the way the jets go
  res: vec4f,     // width, height, time
  sun: vec4f,     // towards the light
  rayO: vec4f,    // where the pointer's ray starts
  pointer: vec4f, // x, y in picture pixels, over the scene, tool held down
  tool: vec4f,    // the tool in hand (RAIN, HOSE, WIND, SCRATCH), its radius in voxels, its rate
  water: vec4f,   // gravity, the least flow that wears, inertia, the depth of a film that clings
  wear: vec4f,    // erosion rate, evaporation, support limit, the saucer has left
  craft: vec4f,   // the saucer in flight: where it is, w: that it is flying
  craftX: vec4f,  // and its own three axes: how it is turned
  craftY: vec4f,
  craftZ: vec4f,
};

struct Pick {
  pos: vec4f, // centre of the cell under the pointer, w: hit
  was: vec4f, // where that was the frame before, w: that there was one. A stroke runs from one to the other.
  n: vec4f,   // face normal of the cell under the pointer
};

const MAX_STICKS: u32 = 16u;
const MAX_BLASTS: u32 = 8u;
// collectible dynamite box perched high on a minimalistic shelf on the far side of the black board
const SHELF_AT = vec3f(88.0, 8.0, 16.0);
const SHELF_H: f32 = 18.9;
const CRATE_AT = vec3f(88.0, 26.9, 16.0);

struct Dyn {
  counts: vec4u,            // x: planted stick count, y: active blast count, z: crate (0 gone, 1 on board, 2 hovered)
  detPos: vec4f,            // detonation center xyz, w: blast radius
  detInfo: vec4f,           // x: force (0..1), y: seed
  sticks: array<vec4f, 32>, // 2*i = (pos.xyz, fuse 0..1), 2*i+1 = (dir.xyz, radius)
  blasts: array<vec4f, 16>, // 2*i = (pos.xyz, age s), 2*i+1 = (radius, force, seed, 0)
};

struct Hit {
  hit: bool,
  cell: vec3i,
  n: vec3f,
  c: u32,
  water: f32,   // water cells crossed on the way
  wn: vec3f,    // the face of the first one
  wcell: vec3i,
  glass: f32,   // and glass cells
  gn: vec3f,
};

fn toolNow() -> u32 { return u32(u.tool.x); }
// the tool is held down, and on something
fn working() -> bool { return u.pointer.w > 0.5 && pk.pos.w > 0.5; }

// a cell's bits (world.ts has the list)
fn ty(c: u32) -> u32 { return c & 7u; }
fn layerOf(c: u32) -> u32 { return (c >> 3u) & 31u; }

fn idx(p: vec3i) -> u32 {
  return u32(p.x + GX * (p.z + GZ * p.y));
}

fn inGrid(p: vec3i) -> bool {
  return all(p >= vec3i(0)) && all(p < vec3i(GX, GY, GZ));
}

fn pcg(v: u32) -> u32 {
  let x = v * 747796405u + 2891336453u;
  let w = ((x >> ((x >> 28u) + 4u)) ^ x) * 277803737u;
  return (w >> 22u) ^ w;
}

// a hash as a number, 0..1
fn unit(h: u32) -> f32 { return f32(h >> 8u) / 16777216.0; }

// one number per cell, always the same one
fn grain(p: vec3i) -> f32 {
  return unit(pcg(u32(p.x) + pcg(u32(p.y) + pcg(u32(p.z)))));
}

// The wind is a hair dryer in the hand of whoever is looking: it blows straight in along the
// line of sight, at where the pointer is. It is wide, it takes in most of the block, and it is
// strongest where it is aimed: it falls off with the distance from the line it is aimed along
// (which is the distance from the pointer, on the screen), and a little with how far past the
// aim it has to go.
fn windOn(p: vec3f, aim: vec3f, jet: vec3f, radius: f32) -> f32 {
  let rel = p - aim;
  let along = dot(rel, jet);
  let off = length(rel - jet * along);
  return exp(-off * off / (radius * radius)) * exp(-max(along, 0.0) / 120.0);
}

// What is at a cell. In the grid, what the grid holds. Past its sides the tray goes on, round,
// for as far as it reaches: there is nothing there but that.
fn cellAt(p: vec3i) -> u32 {
  if (inGrid(p)) { return cells[idx(p)]; }
  if (p.y >= 0 && p.y < LO.y && distance(vec2f(p.xz) + 0.5, vec2f(f32(GX), f32(GZ)) * 0.5) <= TRAY) {
    return GROUND | (GROUND_LAYER << 3u);
  }
  return AIR;
}

// Walk the grid cell by cell (Amanatides and Woo), and BEYOND cells past its sides. Water is seen through, and counted; so is glass.
fn march(ro: vec3f, rd: vec3f) -> Hit {
  var h: Hit;
  h.hit = false;
  h.water = 0.0;
  h.glass = 0.0;
  let lo = vec3f(-f32(BEYOND), 0.0, -f32(BEYOND));
  let g = vec3f(f32(GX + BEYOND), f32(GY), f32(GZ + BEYOND));
  let inv = 1.0 / rd;
  let ta = (lo - ro) * inv;
  let tb = (g - ro) * inv;
  let t0 = min(ta, tb);
  let t1 = max(ta, tb);
  let tn = max(max(t0.x, t0.y), t0.z);
  let tf = min(min(t1.x, t1.y), t1.z);
  if (tn >= tf || tf <= 0.0) { return h; }

  let sg = sign(rd);
  var n = vec3f(0.0, 1.0, 0.0);
  if (tn > 0.0) {
    if (t0.x >= t0.y && t0.x >= t0.z) { n = vec3f(-sg.x, 0.0, 0.0); }
    else if (t0.y >= t0.z) { n = vec3f(0.0, -sg.y, 0.0); }
    else { n = vec3f(0.0, 0.0, -sg.z); }
  }
  let p = ro + rd * (max(tn, 0.0) + 0.001);
  var cell = vec3i(clamp(floor(p), lo, g - 1.0));
  let stp = vec3i(sg);
  let td = abs(inv);
  var tm = (vec3f(cell) + max(sg, vec3f(0.0)) - ro) * inv;

  for (var i = 0; i < 580; i++) {
    if (any(cell < vec3i(lo)) || any(cell >= vec3i(g))) { break; }
    let c = cellAt(cell);
    let t = ty(c);
    if (t == WATER) {
      if (h.water == 0.0) { h.wn = n; h.wcell = cell; }
      h.water += 1.0;
    } else if (t == ROCK && layerOf(c) == GLASS) {
      if (h.glass == 0.0) { h.gn = n; }
      h.glass += 1.0;
    } else if (t != AIR) {
      h.hit = true;
      h.cell = cell;
      h.n = n;
      h.c = c;
      break;
    }
    if (tm.x < tm.y && tm.x < tm.z) {
      cell.x += stp.x; tm.x += td.x; n = vec3f(-sg.x, 0.0, 0.0);
    } else if (tm.y < tm.z) {
      cell.y += stp.y; tm.y += td.y; n = vec3f(0.0, -sg.y, 0.0);
    } else {
      cell.z += stp.z; tm.z += td.z; n = vec3f(0.0, 0.0, -sg.z);
    }
  }
  return h;
}
`,Vn=`// The weather. The rock and what falls off it live in the voxel grid; the water lives on top
// of it, as a depth per column. Entry points:
//   skyline   every column's highest rock (what lies open to the sky) and its bed (where water stands)
//   pickMain  one ray from the pointer, where the tool lands
//   sim       falling sediment, the wind, the hose and the scratch, in 2x2x2 blocks
//   support   rock that has lost its way to the ground turns to rubble
//   flow      water: how much leaves each column for each neighbour
//   settle    water: the new depth, the rain and the hose, and the bed it wears down
//   grow      what is green: where the ground has been wet and is then left alone
//   stamp     water and plants drawn into the grid as voxels: the surface, the falls, the rain, grass and trees

@group(0) @binding(0) var<storage, read_write> cells: array<u32>;
@group(0) @binding(1) var<uniform> u: U;
// this step: where the 2x2x2 blocks are cut, an offset per axis (0 or 1), and in w its seed
@group(0) @binding(2) var<uniform> su: vec4u;
@group(0) @binding(3) var<storage, read_write> pk: Pick;
@group(0) @binding(4) var<storage, read_write> sky: array<u32>;
// per column: x water depth, y wear (the part of a voxel worn off so far), z bed height,
// w the drop to the lowest neighbour (left by flow) and then the discharge (left by settle)
@group(0) @binding(5) var<storage, read_write> col: array<vec4f>;
// per column: what flows out each step, to -x, +x, -z, +z
@group(0) @binding(6) var<storage, read_write> flux: array<vec4f>;
// per column: how much water has run through lately. It fades over a second or so: a lip the
// water shoots over holds no depth to speak of, but it is where the water runs.
@group(0) @binding(7) var<storage, read_write> ran: array<f32>;
// per column, what grows: x how far along the ground cover is (0 bare, grass, bushes, then a
// tree growing, up to 3), y the bed it grew on, z moisture, w how far along the tufts on a wall beside it are
@group(0) @binding(8) var<storage, read_write> veg: array<vec4f>;
// what has been picked up: [0] voxels of gold grit swept off or gone over the edge. Nothing of it
// is lost: main.ts reads this back and heaps it on the tool bar.
@group(0) @binding(9) var<storage, read_write> tally: array<atomic<u32>, 4>;
// dynamite: the stick detonating on this frame (blast, blastCol)
@group(0) @binding(10) var<uniform> dyn: Dyn;

fn solid(t: u32) -> bool { return t == ROCK || t == GROUND || t == SED; }

// How wet is wet: the water that has run through a column lately (ran) and its depth, against
// what each counts for.
const RAN_WEARS = 0.003; // enough has run here to wear: banks come down beside it, rot is eaten under it
const RAN_WETS = 0.002;  // enough to keep the ground moist
const DAMP = 0.01;       // a depth that wets what it lies on
const DRAWN = 0.03;      // a depth that is drawn
const POOL = 0.3;        // standing water: nothing grows under it, its shore is green

// the four columns beside one, to -x, +x, -z, +z. Off the grid there is none: the column itself.
fn neighbours(x: i32, z: i32) -> array<u32, 4> {
  let i = u32(x + GX * z);
  return array<u32, 4>(
    select(i, i - 1u, x > 0), select(i, i + 1u, x < GX - 1),
    select(i, i - u32(GX), z > 0), select(i, i + u32(GX), z < GZ - 1));
}

// Weather comes from above. Rain only lands on what has no rock over it: the sides of
// the block and what is under an overhang are out of reach until what covers them is gone.
// The bed is where water stands: the top of the rock, or of the sediment lying on it (a grain
// still falling, with nothing under it, is not ground yet).
@compute @workgroup_size(8, 8, 1)
fn skyline(@builtin(global_invocation_id) gid: vec3u) {
  let x = i32(gid.x);
  let z = i32(gid.y);
  if (x >= GX || z >= GZ) { return; }
  var bed = -1;
  var y = TOP - 1; // above the block there is only ever air, water and leaves
  while (y > 0) {
    let t = ty(cells[idx(vec3i(x, y, z))]);
    if (t == ROCK || t == GROUND) { break; }
    if (t == SED && bed < 0 && solid(ty(cells[idx(vec3i(x, y - 1, z))]))) { bed = y; }
    y--;
  }
  if (bed < 0) { bed = y; }
  let i = x + GX * z;
  sky[i] = u32(y);
  col[i].z = f32(bed + 1);
}

fn openToSky(p: vec3i) -> bool {
  return p.y >= i32(sky[p.x + GX * p.z]);
}

@compute @workgroup_size(1)
fn pickMain() {
  let before = pk.pos;
  var pos = vec4f(0.0);
  var norm = vec4f(0.0, 1.0, 0.0, 0.0);
  if (u.pointer.z > 0.5) {
    let h = march(u.rayO.xyz, u.camF.xyz);
    // the hose, the wind, the scratch and the dynamite are aimed at whatever is there, top or side; rain comes from above
    if (h.hit && (toolNow() != RAIN || openToSky(h.cell))) {
      pos = vec4f(vec3f(h.cell) + 0.5, 1.0);
      norm = vec4f(h.n, 0.0);
    } else if (h.hit && abs(h.n.y) < 0.5) {
      // a wall: the weather lands at its foot, on the open ground under the point it was aimed at
      // (the far side of a pit seen at a slant, the side of the block)
      let q = h.cell + vec3i(h.n);
      if (q.x >= 0 && q.x < GX && q.z >= 0 && q.z < GZ) {
        let floorY = i32(sky[q.x + GX * q.z]);
        if (floorY <= q.y) {
          pos = vec4f(vec3f(vec3i(q.x, floorY, q.z)) + 0.5, 1.0);
        }
      }
    }
  }
  pk.pos = pos;
  pk.was = before;
  pk.n = norm;
}

// A water voxel is only a picture of the water, a plant voxel of a plant (see stamp): to what falls, they are air.
fn open(c: u32) -> bool {
  let t = ty(c);
  return t == AIR || t == WATER || t == PLANT;
}

fn rnd(st: ptr<function, u32>) -> f32 {
  *st = pcg(*st);
  return unit(*st);
}

// rock to sediment of the same layer and shade
fn toSed(c: u32) -> u32 { return (c & 0x3F8u) | SED; }

// or to nothing
fn crumble(c: u32, st: ptr<function, u32>, yield_: f32) -> u32 {
  if (rnd(st) < yield_) { return toSed(c); }
  return AIR;
}

// rock only: its steps to the ground through rock (support)
fn distOf(c: u32) -> u32 { return (c >> 16u) & 0xFFFu; }
fn withDist(c: u32, d: u32) -> u32 { return (c & 0xF000FFFFu) | (d << 16u); }

// how rotten a rock voxel is, 0 sound to 1 (world.ts bakes it in: pockets, lenses along the beds)
fn rotOf(c: u32) -> f32 {
  return f32((c >> 12u) & 15u) / 15.0;
}

// how easily a rock voxel wears: its layer, a joint, and above all how rotten it is. Sound rock
// goes at a third of its layer's rate, a rotten pocket at six times it.
fn softOf(c: u32) -> f32 {
  var s = SOFT[layerOf(c)];
  if ((c & 0x400u) != 0u) { s *= 4.0; }
  let r = rotOf(c);
  return s * (0.35 + 6.0 * r * r * r);
}

// What lies buried and is not rock (world.ts): bone, and from METAL up a saucer and gold. The scratch cleans it, it does not cut it, and it hangs together a good way
// further than rock does (support).
fn lasting(c: u32) -> bool {
  let l = layerOf(c);
  return l == BONE || l >= METAL;
}

fn cellPos(b0: vec3i, k: i32) -> vec3i {
  return b0 + vec3i(k & 1, (k >> 2) & 1, (k >> 1) & 1);
}

// Margolus blocks: the grid is cut in 2x2x2 blocks, the cut shifts every step. A block only
// ever touches its own eight cells, so every block can run at once and nothing is lost or doubled.
// In a block, k = dx + 2 dz + 4 dy: 0-3 is the lower floor, 4-7 the upper.
@compute @workgroup_size(4, 4, 4)
fn sim(@builtin(global_invocation_id) gid: vec3u) {
  let b0 = vec3i(gid) * 2 - vec3i(su.xyz);
  if (b0.x >= GX || b0.y >= GY || b0.z >= GZ) { return; }
  var st = pcg(gid.x + pcg(gid.y + pcg(gid.z + su.w)));

  let held = working();
  let tool = toolNow();
  let radius = u.tool.y;
  let rate = u.tool.z;

  var c: array<u32, 8>;
  var o: array<u32, 8>;
  var inb: array<bool, 8>;
  var air = false;   // room for something to move into
  var stuff = false; // something that can move or wear

  for (var k = 0; k < 8; k++) {
    let p = cellPos(b0, k);
    let ib = inGrid(p);
    inb[k] = ib;
    var v = WALL;
    if (ib) { v = cells[idx(p)]; }
    o[k] = v;
    // sediment goes over the edge of the tray: off the side of the grid, or down past the tray's rim to the bottom of it
    if (ib && ty(v) == SED && (p.x == 0 || p.z == 0 || p.x == GX - 1 || p.z == GZ - 1 || p.y == 0)) {
      if (layerOf(v) == GOLD) { atomicAdd(&tally[0], 1u); }
      v = AIR;
    }
    if (open(v)) { air = true; }
    if (ty(v) == SED || ty(v) == ROCK) { stuff = true; }
    c[k] = v;
  }
  // Most blocks are solid rock or empty air, and nothing below does anything to either.
  if (!air || !stuff) {
    for (var k = 0; k < 8; k++) {
      if (inb[k] && c[k] != o[k]) { cells[idx(cellPos(b0, k))] = c[k]; } // what went over the edge
    }
    return;
  }

  // The two jets, both in the hand of whoever is looking, both along the line of sight through
  // the pointer, on whatever is there, top or side. The hose: a pressure washer, narrow and
  // hard. The wind: a hair dryer, wide and gentle (windOn). Either only wears what faces it:
  // rock with nothing in front of it on the side the jet comes from.
  let jet = u.camF.xyz; // the way the jet goes
  let w = normalize(vec3f(jet.x, 0.0, jet.z)); // and the way the wind carries what is loose
  let centre = vec3f(b0) + 1.0;
  var blast = false;  // is this block in it
  var f = 0.0;        // how much of it is left here
  if (held && tool == WIND) {
    f = windOn(centre, pk.pos.xyz, jet, radius);
    blast = f > 0.03;
  }
  if (held && tool == HOSE) {
    let r = distance(centre, pk.pos.xyz);
    blast = r < radius;
    f = 1.0 - r / radius;
  }
  // The scratch: nothing but a point dragged over the rock. It takes what is under it, there and
  // then, whatever it is made of (nearly), and what comes loose falls. It comes in pulses (main.ts
  // holds it down a frame at a time): each is one short mark, along the stroke from where the
  // pointer was the frame before to where it is (unless it jumped: from one face to another, say).
  if (held && tool == SCRATCH) {
    var a = pk.was.xyz;
    let b = pk.pos.xyz;
    if (pk.was.w < 0.5 || distance(a, b) > 40.0) { a = b; }
    let ab = b - a;
    let r = distance(centre, a + ab * clamp(dot(centre - a, ab) / max(dot(ab, ab), 1e-4), 0.0, 1.0));
    blast = r < radius;
    f = min(2.0 * (1.0 - r / radius), 1.0); // a clean edge: full across most of its width
  }
  // the axis this block feels the jet along, one of the three (0 x, 1 z, 2 y), and for what the
  // wind pushes one of the two level ones
  let windX = rnd(&st) < abs(w.x) / (abs(w.x) + abs(w.z) + 1e-5);
  var axis = 2;
  let pickAxis = rnd(&st) * (abs(jet.x) + abs(jet.y) + abs(jet.z));
  if (pickAxis < abs(jet.x)) { axis = 0; } else if (pickAxis < abs(jet.x) + abs(jet.z)) { axis = 1; }
  // The wind only reaches the surface: what whoever is looking can see. Rock that faces the right
  // way but has something between it and the eye, the far wall of a canyon, the back of a pit,
  // a ledge behind a tree, is in the lee. One look back along the line of sight per block.
  if (blast && tool == WIND) {
    blast = !march(centre - jet * 2.6, -jet).hit;
  }
  if (blast) {
    for (var k = 0; k < 8; k++) {
      // the cell in front of this one, on the side the jet comes from, when it is in this block
      // (half the time, hence the 2)
      var nb = -1;
      if (axis == 0) {
        if (jet.x > 0.0 && (k & 1) == 1) { nb = k - 1; }
        if (jet.x < 0.0 && (k & 1) == 0) { nb = k + 1; }
      } else if (axis == 1) {
        if (jet.z > 0.0 && (k & 2) == 2) { nb = k - 2; }
        if (jet.z < 0.0 && (k & 2) == 0) { nb = k + 2; }
      } else {
        if (jet.y < 0.0 && k < 4) { nb = k + 4; }
        if (jet.y > 0.0 && k >= 4) { nb = k - 4; }
      }
      var soft = softOf(c[k]);
      if (tool == SCRATCH) {
        // a hard bed slows the scratch a little, it does not stop it. Bone does, and the rest of
        // what lies buried: a scratch cleans a skeleton, it does not cut it
        if (lasting(c[k])) { soft = SOFT[layerOf(c[k])]; } else { soft = pow(soft, 0.3); }
      }
      // what is in front of it must be open; and for the wind, not water: it does not reach a lake's bed
      var faced = false;
      if (nb >= 0) { faced = open(c[nb]) && !(tool == WIND && ty(c[nb]) == WATER); }
      if (faced && inb[k] && ty(c[k]) == ROCK && rnd(&st) < rate * 2.0 * soft * f) {
        c[k] = crumble(c[k], &st, select(0.3, 0.6, tool == SCRATCH));
      } else if ((tool == HOSE || tool == SCRATCH) && ty(c[k]) == SED && rnd(&st) < select(0.3, 0.5, tool == SCRATCH) * f) {
        // the hose flushes out what it has knocked loose, or it would plug its own hole; the
        // scratch sweeps its groove. Gold swept up is pocketed.
        if (layerOf(c[k]) == GOLD) { atomicAdd(&tally[0], 1u); }
        c[k] = AIR;
      }
    }
  }

  // straight down: sediment falls, through water a little slower
  for (var k = 0; k < 4; k++) {
    let a = c[k + 4];
    let b = c[k];
    if (ty(a) == SED && open(b)) {
      if (ty(b) == WATER && rnd(&st) < 0.5) { continue; }
      c[k] = a;
      c[k + 4] = b;
    }
  }

  // down a slope: blocked below, free beside and below that
  for (var k = 4; k < 8; k++) {
    let a = c[k];
    if (ty(a) != SED || open(c[k - 4])) { continue; }
    let j = (k - 4) ^ select(1, 2, rnd(&st) < 0.5);
    if (open(c[j + 4]) && open(c[j]) && rnd(&st) > 0.35) {
      let b = c[j];
      c[j] = a;
      c[k] = b;
    }
  }

  // the wind pushes what is loose, and takes some of the dust away
  if (blast && tool == WIND) {
    for (var fl = 0; fl < 2; fl++) {
      for (var q = 0; q < 2; q++) {
        var i = fl * 4 + q;
        var j = i + 2;
        var fwd = w.z > 0.0;
        if (windX) { i = fl * 4 + q * 2; j = i + 1; fwd = w.x > 0.0; }
        if (!fwd) { let tmp = i; i = j; j = tmp; }
        if (ty(c[i]) == SED && open(c[j]) && rnd(&st) < 0.9) {
          let b = c[j];
          c[j] = c[i];
          c[i] = b;
          if (rnd(&st) < 0.03 && layerOf(c[j]) != GOLD) { c[j] = AIR; } // (gold is no dust)
        }
      }
    }
  }

  for (var k = 0; k < 8; k++) {
    if (inb[k] && c[k] != o[k]) { cells[idx(cellPos(b0, k))] = c[k]; }
  }
}

const HANG = 300.0; // how many steps further than rock what lies buried hangs together

// Every rock cell keeps its distance to the ground, counted through rock: one more than its
// nearest neighbour's. Cut a piece loose and its numbers have nothing to hold on to, they
// climb a step each pass. Past the limit, it is not standing on anything: rubble.
@compute @workgroup_size(4, 4, 4)
fn support(@builtin(global_invocation_id) gid: vec3u) {
  // only the block is asked: rock never leaves it (and so every neighbour is in the grid)
  let p = LO + vec3i(gid);
  let i = idx(p);
  let c = cells[i];
  if (ty(c) != ROCK) { return; }
  // the saucer has left (main.ts): what there was of it in the grid goes
  let own = lasting(c);
  if (own && u.wear.w > 0.5 && layerOf(c) >= METAL && layerOf(c) <= LAMP) {
    cells[i] = AIR;
    return;
  }
  var m = 4094u;
  for (var a = 0; a < 6; a++) {
    var d = vec3i(0);
    d[a >> 1] = (a & 1) * 2 - 1;
    let nb = cells[idx(p + d)];
    let t = ty(nb);
    if (t == GROUND) { m = 0u; }
    else if (t == ROCK) { m = min(m, distOf(nb)); }
  }
  let dist = m + 1u;
  // What lies buried counts its steps as rock does, through rock and through its own kind, but
  // it is let go a good deal further: a skeleton hangs whole from one bone left in the wall (a
  // rib has no rock under it once the rock is gone, and would be rubble by the rock's rule). Dug
  // free altogether, with nothing left to hang from, its numbers climb like any loose piece's,
  // and a few seconds on it comes apart: grit of its own colour.
  if (f32(dist) >= u.wear.z + select(0.0, HANG, own)) {
    cells[i] = toSed(c);
  } else if (dist != distOf(c)) {
    cells[i] = withDist(c, dist);
  }
}

// ---------- water ----------
//
// Virtual pipes (Mei, Decaudin and Hu 2007): every column holds a depth of water and is joined to
// its four neighbours by pipes. What drives the water through a pipe is the difference between
// the two water surfaces, bed plus depth: so it runs downhill, fills a hollow to its lowest rim
// and spills there, and levels out, all from one rule. The flow keeps some of its speed from
// step to step, which is why a pool sloshes before it lies still.

// the top voxel of a column: the one its bed is the top of
fn topCell(x: i32, z: i32, bed: f32) -> u32 {
  return cells[idx(vec3i(x, max(i32(bed) - 1, 0), z))];
}

// how easily it wears. Loose sediment goes easily, the ground not at all.
fn softTop(c: u32) -> f32 {
  if (ty(c) == ROCK) { return softOf(c); }
  if (ty(c) == SED) { return select(3.0, 0.0, layerOf(c) == GOLD); } // (gold stays in the stream bed)
  return 0.0;
}

fn onBlock(x: i32, z: i32) -> bool {
  return x >= LO.x && z >= LO.z && x < LO.x + CUBE && z < LO.z + CUBE;
}

// what leaves each column for each neighbour, and the banks
@compute @workgroup_size(8, 8, 1)
fn flow(@builtin(global_invocation_id) gid: vec3u) {
  let x = i32(gid.x);
  let z = i32(gid.y);
  if (x >= GX || z >= GZ) { return; }
  let i = u32(x + GX * z);
  // off the block there is no water (settle), so none to send on
  if (!onBlock(x, z)) { return; }
  let d = col[i].x;
  let bed = col[i].z;
  // the neighbours: their beds, their water, and what has run there
  var around = neighbours(x, z);
  var nb: vec4f;
  var nd: vec4f;
  var nr: vec4f;
  for (var a = 0; a < 4; a++) {
    nb[a] = col[around[a]].z;
    nd[a] = col[around[a]].x;
    nr[a] = ran[around[a]];
  }

  // The banks. Water wears its own column, and left at that every column would be cut on its
  // own: slots a voxel wide, spikes left standing between them, a hole with walls straight
  // down. So a column that stands too high above a neighbour where water runs or has just run
  // wears too, the higher the faster: the bank comes down after the bed. A channel opens into
  // a valley, a hole into a funnel, and nothing is left standing in the wet.
  // How high a bank can stand is the rock's business: rotten rock slumps to a slope, sound
  // rock stands as a wall, and a hard bed holds a ledge. So a valley's sides are not one
  // slope from top to bottom, they step and bulge with what they are cut through.
  var stand = 2.0;
  let top = topCell(x, z, bed);
  if (ty(top) == ROCK) {
    stand = 1.0 + 5.0 * (1.0 - rotOf(top));
    if (SOFT[layerOf(top)] < 0.3) { stand += 3.0; }
  }
  var over = 0.0;
  for (var a = 0; a < 4; a++) {
    // only beside water that runs or has just run: a bank stands over a still pond for good
    if (nr[a] > RAN_WEARS) { over = max(over, bed - nb[a] - stand); }
  }
  if (over > 0.0) {
    // As fast as the bed can sink (settle), so a cut never gets ahead of its banks. Hard rock
    // holds a bank up longer, but not by as much as it holds up a bed: the square root.
    let hold = sqrt(4.0 * softTop(top));
    col[i].y += min(0.012 * min(u.wear.x * 10.0, 3.0) * hold * min(over, 3.0), 0.03);
  }

  if (d <= 0.0) { flux[i] = vec4f(0.0); col[i].w = 0.0; return; }
  let h = bed + d;
  let nh = nb + nd;
  // a film clings: thin water is slow to get going, so it gathers before it runs
  let grip = d / (d + u.water.w);
  var f = max(vec4f(0.0), flux[i] * u.water.z + u.water.x * grip * (vec4f(h) - nh));
  // never more than is there
  let total = f.x + f.y + f.z + f.w;
  if (total > d) { f *= d / total; }
  flux[i] = f;
  // how far the water drops from here to its lowest neighbour: what settle wears the bed by
  col[i].w = max(h - min(min(nh.x, nh.y), min(nh.z, nh.w)), 0.0);
}

// the new depth, the weather, and the bed
@compute @workgroup_size(8, 8, 1)
fn settle(@builtin(global_invocation_id) gid: vec3u) {
  let x = i32(gid.x);
  let z = i32(gid.y);
  if (x >= GX || z >= GZ) { return; }
  let i = u32(x + GX * z);
  var me = col[i];
  // Off the block there is no water: what goes over the side is gone. (stamp still draws it
  // falling down the wall, from what flows over the lip.)
  if (!onBlock(x, z)) {
    col[i] = vec4f(0.0, 0.0, me.z, 0.0);
    ran[i] = 0.0;
    return;
  }
  let f = flux[i];
  var around = neighbours(x, z);
  var inn = 0.0;
  for (var a = 0; a < 4; a++) { inn += flux[around[a]][a ^ 1]; } // what each neighbour sends this way
  let out = f.x + f.y + f.z + f.w;
  var d = me.x + inn - out;

  // rain falls in a column around the pointer
  if (working()) {
    let tool = toolNow();
    let radius = u.tool.y;
    let r = distance(vec2f(f32(x), f32(z)) + 0.5, pk.pos.xz);
    // the cloud has no edge: it rains hardest in the middle and thins out, so it leaves no circle
    if (tool == RAIN && r < radius) { d += u.tool.z * 2.0 * (1.0 - r * r / (radius * radius)); }
    // the hose leaves its water on the ground it hits (on a wall it has nowhere to stand: stamp draws the spray)
    if (tool == HOSE && r < radius && abs(me.z - pk.pos.y) < radius + 2.0) { d += 0.02; }
  }
  // Only a film dries. Water with any depth to it stays: a hollow that has filled is a lake
  // until something lets it out.
  d = max(d - u.wear.y * (1.0 - smoothstep(0.15, 0.4, d)), 0.0);

  // Running water wears its bed, by how much of it goes through and by how far it drops there.
  // Where a little more runs, the bed sinks a little faster, so more runs there: that is how a
  // sheet of rain gathers into a watercourse. And a lip the water falls over wears fastest of
  // all, so a fall eats its way back upstream: that is how a gully is cut into the block from
  // its edge.
  // What counts is the water that goes on from here, not what arrives: the bottom of a hollow
  // takes water in and passes none on, and wears nothing. Whatever is worn has to be carried away.
  // And it is the drop that does the work: rain does not dig where it lands. On level ground it
  // runs off as a sheet and leaves it be; it cuts where it goes down, a slope, a step, a lip.
  // So a flat top is taken apart from its edges inward, along the ways the water finds, and
  // not drilled through under the cloud. Deep water shelters what is under it.
  // A column can only sink so fast, however hard it rains: slower than the water can follow,
  // or every column would be cut on its own.
  let top = topCell(x, z, me.z);
  let soft = softTop(top);
  if (out > u.water.y) {
    let steep = min(me.w, 3.0) / (1.0 + 0.1 * d * d);
    me.y += min(u.wear.x * soft * 4.5 * (out - u.water.y) * steep, 0.03);
  }
  // One thing does go where the water does not drop: rot. Under water that runs or has just
  // run, a pocket of rotten rock is eaten out where it is, a pit a few voxels across, while
  // the sound rock round it is left. That is where it starts. The pit's rim is a bank and a
  // lip, and the rest gnaws on from there. Under a pond that lies still, nothing: when the
  // rain stops, so does this.
  if (d > DAMP && ran[i] > RAN_WEARS && ty(top) == ROCK) {
    me.y += min(u.wear.x * soft * 0.25 * max(rotOf(top) - 0.7, 0.0) / (1.0 + d * d), 0.03);
  }
  // The wear, the bed's and the bank's (flow), adds up until a whole voxel is gone. Only ever
  // the top one: water cuts down, never sideways.
  if (me.y >= 1.0) {
    me.y -= 1.0;
    if (soft > 0.0) {
      cells[idx(vec3i(x, i32(me.z) - 1, z))] = AIR;
      me.z -= 1.0;
    }
  }
  col[i] = vec4f(d, me.y, me.z, 0.5 * (inn + out));
  // It spreads sideways too, weaker a column at a time: the bank of a bank is still a bank, a
  // valley is wider than its stream. (The neighbours may be a step ahead or behind in this
  // pass; a fading maximum does not care.)
  var beside = 0.0;
  for (var a = 0; a < 4; a++) { beside = max(beside, ran[around[a]]); }
  ran[i] = max(max(ran[i] * 0.99, 0.5 * (inn + out)), beside * 0.8);
}

// ---------- green ----------
//
// Things grow where water has been and the ground is then left alone. A column has moisture:
// it fills while water is on it or runs past, and takes a minute or so to dry. On moist ground
// that is level enough to stand on (two of its four neighbours within a step: a flat, or a
// ledge on a steep side), that has soil (loose sediment, or rock rotten enough to root in) and
// that nothing disturbs, the cover grows: grass, then bushes, then a tree getting taller. Flood it, scour it or take the ground from under it, and it is gone.
// On a wall, tufts take root in the rotten pockets, below ground that has been wet.

@compute @workgroup_size(8, 8, 1)
fn grow(@builtin(global_invocation_id) gid: vec3u) {
  let x = i32(gid.x);
  let z = i32(gid.y);
  if (x >= GX || z >= GZ) { return; }
  let i = u32(x + GX * z);
  let me = col[i];
  var v = veg[i];
  let bed = me.z;
  let on = onBlock(x, z);

  // the neighbours: how many are level with this column, is there a wet wall beside it, is
  // there water standing beside it, and how moist they are
  var level = 0;
  var wetWall = false;
  var shore = false;
  var seep = 0.0;
  var around = neighbours(x, z);
  for (var a = 0; a < 4; a++) {
    let j = around[a];
    if (j == i) { continue; }
    let nb = col[j].z;
    if (abs(nb - bed) <= 1.0) { level++; }
    if (nb - bed >= 3.0 && (col[j].x > DAMP || ran[j] > RAN_WETS)) { wetWall = true; }
    if (col[j].x > POOL) { shore = true; }
    seep = max(seep, veg[j].z);
  }

  // Moisture: full where water is or runs or lies alongside, and it seeps out sideways from
  // there, a little less each column, so standing water keeps a belt round it green. Away from
  // all that the ground dries in a minute or so.
  let wet = on && (me.x > DAMP || ran[i] > RAN_WETS || shore);
  v.z = clamp(max(v.z + select(-0.0002, 0.02, wet), select(0.0, seep * 0.93, on)), 0.0, 1.0);
  v.w = clamp(v.w + select(-0.0002, 0.004, wetWall), 0.0, 1.0);

  let top = topCell(x, z, bed);
  let soil = rootable(top);
  // Low down it is desert: what grows there (stamp draws cactus) asks for neither soil nor
  // water, only somewhere to stand and to be left alone, and takes its time.
  // (not on a saucer: on rock, and on bone)
  let desert = f32(TOP) - bed > DESERT && (ty(top) == SED || (ty(top) == ROCK && layerOf(top) < METAL));
  if (bed != v.y) {
    // the ground it stood on is gone, or new ground has come down on it
    v.x = 0.0;
    v.y = bed;
  } else if (!on || (!soil && !desert) || me.x > POOL || me.w > 0.02) {
    v.x = max(v.x - 0.05, 0.0); // under water, or in the way of it
  } else if (level < 2) {
    v.x = max(v.x - 0.02, 0.0); // nothing to stand on
  } else if (v.z > 0.1 && soil) {
    v.x = min(v.x + 0.002, 3.0);
  } else if (desert) {
    v.x = min(v.x + 0.0012, 3.0);
  } else {
    // dried out: the trees and bushes die back, slowly, the grass holds on
    v.x = max(v.x - 0.0005, min(v.x, 0.5));
  }
  veg[i] = v;
}

const DESERT = 12.0; // this far below the top of the block, it is desert

// soil is what has fallen and lies loose, or rock rotten enough to root in: sound rock stays bare
fn rootable(c: u32) -> bool {
  return ty(c) == SED || (ty(c) == ROCK && rotOf(c) > 0.45);
}

// Trees stand on a loose lattice of sites, one per 8x8 columns, each at its own spot in its
// square. A site grows a tree when its own column's cover gets that far. Every column draws
// the part of each nearby tree that passes through it, so no column writes outside itself.
// Cactus stands on its own, closer lattice, one site per 5x5 columns, and the further down the
// more of the sites have one: quite a few, by the floor of a canyon.
const SITE = 8;
const SITE_SALT = vec2u(73856093u, 19349663u);
const CSITE = 5;
const CSITE_SALT = vec2u(83492791u, 2971215073u);

// the site of square (cx, cz) of a lattice
fn siteOf(cx: i32, cz: i32, size: i32, salt: vec2u) -> vec2i {
  let h = pcg(u32(cx) * salt.x + u32(cz) * salt.y);
  return vec2i(cx * size + i32(h % u32(size)), cz * size + i32((h >> 8u) % u32(size)));
}

// The water and the green as voxels, for the picture: the grid is what gets drawn, so both are
// stamped into it, a column at a time. Nothing reads these voxels back.
@compute @workgroup_size(8, 8, 1)
fn stamp(@builtin(global_invocation_id) gid: vec3u) {
  let x = i32(gid.x);
  let z = i32(gid.y);
  if (x >= GX || z >= GZ) { return; }
  let i = u32(x + GX * z);
  let me = col[i];
  let base = i32(me.z);
  // the water's voxels, and how full the top one is (1..15, for how faintly a film is drawn)
  var surf = base;
  var full = 15u;
  if (me.x > DRAWN) {
    surf = base + i32(ceil(me.x));
    full = u32(clamp((me.x - floor(me.x - 0.001)) * 15.0, 1.0, 15.0));
  }

  // a fall: water coming in over an edge well above this column's own surface
  var fallTop = 0;
  var fallQ = 0.0;
  var around = neighbours(x, z);
  for (var a = 0; a < 4; a++) {
    let j = around[a];
    if (j == i) { continue; }
    let fin = flux[j][a ^ 1]; // what it sends this way
    let lip = i32(col[j].z);
    if (fin > 0.003 && lip > surf + 1) {
      fallTop = max(fallTop, lip + 1);
      fallQ += fin;
    }
  }

  // rain coming down in its column, and the hose's spray round where it lands
  let radius = u.tool.y;
  let near = distance(vec2f(f32(x), f32(z)) + 0.5, pk.pos.xz);
  let raining = working() && toolNow() == RAIN && near < radius;
  let hosing = working() && toolNow() == HOSE && near < radius * 1.4;
  let drop = pcg(u32(x) * 7919u + u32(z) * 104729u);
  let tick = u32(u.res.z * 40.0);
  // white water: the faster it runs, the lighter it is drawn
  let rush = u32(clamp(me.w / max(me.x, 0.2) * 14.0, 0.0, 15.0));

  // what grows here: the cover on the ground, the trees that reach over this column, and the
  // walls beside it that tufts can hang on
  let v = veg[i];
  var treeN = 0;
  var treeAt: array<vec4i, 9>; // site x, top of the trunk, site z, foot of the trunk
  var treeR: array<f32, 9>;    // the crown's radius
  for (var a = 0; a < 9; a++) {
    let s = siteOf(x / SITE + a % 3 - 1, z / SITE + a / 3 - 1, SITE, SITE_SALT);
    if (!onBlock(s.x, s.y)) { continue; }
    let si = u32(s.x + GX * s.y);
    let g = veg[si].x;
    let h = pcg(u32(s.x) * 2654435761u + u32(s.y) * 40503u);
    if (g <= 1.0 || (h % 10u) >= 4u) { continue; } // not that far along, or a site where none will
    let foot = i32(col[si].z);
    // a tree wants water and soil under it, wherever it is (the desert's cover grows without)
    if (veg[si].z <= 0.1 || !rootable(topCell(s.x, s.y, col[si].z))) { continue; }
    let size = clamp((g - 1.0) / 2.0, 0.0, 1.0);
    let tall = i32(2.0 + size * (3.0 + 3.0 * f32((h >> 4u) & 15u) / 15.0));
    treeAt[treeN] = vec4i(s.x, foot + tall, s.y, foot);
    treeR[treeN] = 1.2 + size * (1.2 + 1.2 * f32((h >> 8u) & 15u) / 15.0);
    treeN++;
  }
  // cactus: a trunk, an arm out to one side that turns up, and on a tall one a second arm
  var cacN = 0;
  var cacAt: array<vec4i, 9>;  // site x, foot, site z, height
  var cacArm: array<vec4i, 9>; // which way the arm goes (0..3), how far out, at what height, how far up
  for (var a = 0; a < 9; a++) {
    let s = siteOf(x / CSITE + a % 3 - 1, z / CSITE + a / 3 - 1, CSITE, CSITE_SALT);
    if (!onBlock(s.x, s.y)) { continue; }
    let si = u32(s.x + GX * s.y);
    let foot = i32(col[si].z);
    let down = f32(TOP - foot);
    let g = veg[si].x;
    let h = pcg(u32(s.x) * 362437u + u32(s.y) * 1000003u);
    if (down <= DESERT || g <= 0.6 || f32(h & 255u) / 255.0 > clamp(0.2 + down / 60.0, 0.0, 0.85)) { continue; }
    let tall = i32(2.0 + clamp((g - 0.6) / 2.4, 0.0, 1.0) * (2.0 + 5.0 * f32((h >> 8u) & 15u) / 15.0));
    let armAt = 1 + tall / 3;
    cacAt[cacN] = vec4i(s.x, foot, s.y, tall);
    cacArm[cacN] = vec4i(i32((h >> 12u) & 3u), select(0, 1 + i32((h >> 14u) & 1u), tall >= 4), armAt, max(tall - armAt - 1 - i32((h >> 15u) & 1u), 1));
    cacN++;
  }
  let fertile = rootable(topCell(x, z, me.z));
  var wallTop = 0; // the highest bed among the neighbours: up to there, there may be a wall beside
  var wallBed: array<i32, 4>;
  for (var a = 0; a < 4; a++) {
    wallBed[a] = select(i32(col[around[a]].z), 0, around[a] == i);
    wallTop = max(wallTop, wallBed[a]);
  }

  for (var y = base; y < GY; y++) {
    let k = idx(vec3i(x, y, z));
    let c = cells[k];
    let t = ty(c);
    if (t == ROCK || t == GROUND) { break; }
    if (t == SED) { continue; }
    var want = AIR;
    if (y < surf) {
      want = WATER | (rush << 12u) | (select(15u, full, y == surf - 1) << 8u);
    } else if (y < fallTop) {
      // the fall is a curtain of drops going down, denser the more water comes over
      if (grain(vec3i(x, y + i32(tick), z)) < clamp(fallQ * 8.0, 0.2, 1.0)) { want = WATER | 0xFF00u; }
    } else if (raining && (drop & 15u) == 0u && ((u32(y) + tick + (drop >> 8u)) % 28u) < 2u) {
      want = WATER | 0xFF00u;
    }
    if (hosing && want == AIR && distance(vec3f(f32(x), f32(y), f32(z)) + 0.5, pk.pos.xyz) < radius * 1.4
        && grain(vec3i(x + i32(tick), y, z)) < 0.22) {
      want = WATER | 0xFF00u;
    }
    // green goes where there is no water. Its layers: grass and leaves, two tones of each, wood, cactus.
    if (y >= surf) {
      var green = 0u;
      let g = grain(vec3i(x, y, z));
      // the cover: grass on the bed where there is soil, and a bush here and there once it is thick and moist
      if (surf == base && fertile) {
        if (y == base && v.x > 0.3) { green = GRASS + u32(g < 0.4); }
        if (y == base + 1 && v.x > 0.8 && v.z > 0.1 && g < 0.2) { green = LEAF; }
      }
      // tufts on a wall beside: where the wall's rock is rotten, the more the longer it has been wet
      if (green == 0u && y < wallTop && y > base && v.w > 0.0) {
        for (var a = 0; a < 4; a++) {
          if (y >= wallBed[a]) { continue; }
          let wc = cells[idx(vec3i(i32(around[a]) % GX, y, i32(around[a]) / GX))];
          if (ty(wc) == ROCK && rotOf(wc) > 0.65 && g < v.w * 0.22) { green = GRASS + 1u + u32(g < v.w * 0.08); }
        }
      }
      // trees: the trunk in the site's own column, the crown a ball round its top
      for (var a = 0; a < treeN; a++) {
        let tr = treeAt[a];
        let dx = f32(x - tr.x);
        let dz = f32(z - tr.z);
        let dy = f32(y - tr.y) * 1.15;
        if (dx * dx + dy * dy + dz * dz < treeR[a] * treeR[a]) { green = LEAF + u32(g < 0.45); }
        else if (x == tr.x && z == tr.z && y >= tr.w && y < tr.y) { green = WOOD; }
      }
      for (var a = 0; a < cacN; a++) {
        let ca = cacAt[a];
        let ar = cacArm[a];
        let rx = x - ca.x;
        let rz = z - ca.z;
        let ry = y - ca.y;
        if (rx == 0 && rz == 0 && ry >= 0 && ry < ca.w) { green = CACTUS; }
        var d = vec2i(1, 0);
        if (ar.x == 1) { d = vec2i(-1, 0); }
        if (ar.x == 2) { d = vec2i(0, 1); }
        if (ar.x == 3) { d = vec2i(0, -1); }
        // out along the arm, then up at its end
        let k = rx * d.x + rz * d.y;
        if (rx == k * d.x && rz == k * d.y && k >= 1 && k <= ar.y) {
          if (ry == ar.z || (k == ar.y && ry > ar.z && ry <= ar.z + ar.w)) { green = CACTUS; }
        }
        // the second arm, the other way and a little higher, one column out
        if (ca.w >= 6 && rx == -d.x && rz == -d.y && ry >= ar.z + 2 && ry <= ar.z + 2 + max(ar.w - 2, 1)) { green = CACTUS; }
      }
      if (green != 0u) { want = PLANT | (green << 3u); }
    }
    if (want != c) { cells[k] = want; }
  }
}

// ---------- dynamite ----------
//
// A blast carves a ragged, stratified crater in the rock: softer beds and rotten pockets give way
// further than hard ironstone bands. Bones and the saucer stay intact so a blast uncovers them;
// gold shakes loose into sediment and is never lost. The crater rim is scorched dark and fractured
// (higher rot) so rain and wind chew into it afterwards.

@compute @workgroup_size(4, 4, 4)
fn blast(@builtin(global_invocation_id) gid: vec3u) {
  let p = LO + vec3i(gid);
  let i = idx(p);
  let c = cells[i];
  let t = ty(c);
  if (t != ROCK && t != SED) { return; }

  let rel = vec3f(p) + 0.5 - dyn.detPos.xyz;
  let dist = length(rel);
  let R = dyn.detPos.w;
  if (dist > R * 1.48) { return; }

  let force = dyn.detInfo.x;
  let seed = u32(dyn.detInfo.y);
  let h = pcg((u32(p.x) * 374761393u) ^ (u32(p.y) * 668265263u) ^ (u32(p.z) * 2147483647u) ^ seed);
  let rndVal = unit(h);
  let rndVal2 = unit(pcg(h));

  // Coarse 3D blockiness so the crater walls are craggy and faceted, not a smooth ball
  let q = p / 3;
  let jag = unit(pcg(u32(q.x) + pcg(u32(q.y) + pcg(u32(q.z) + seed)))) * 0.28 - 0.12;

  if (t == ROCK) {
    let layer = layerOf(c);
    // Buried treasures: skeletons and saucer survive the blast intact
    if (layer == BONE || (layer >= METAL && layer <= LAMP)) { return; }
    // Gold: never lost — inner blast pockets it straight to the heap, outer shell shakes it loose into gold sediment
    if (layer == GOLD) {
      if (dist < R * (0.65 + jag)) {
        atomicAdd(&tally[0], 1u);
        cells[i] = AIR;
      } else if (dist < R * (0.95 + jag)) {
        cells[i] = toSed(c);
      }
      return;
    }
    let soft = clamp(softOf(c), 0.05, 4.0);
    let resist = pow(soft, mix(0.24, 0.07, force));
    let reach = R * (0.82 + 0.44 * force) * clamp(resist, 0.78, 1.24) * (1.0 + jag);

    if (dist < reach * 0.72) {
      if (rndVal < mix(0.26, 0.12, force)) { cells[i] = toSed(c); } else { cells[i] = AIR; }
    } else if (dist < reach) {
      if (rndVal < mix(0.65, 0.40, force)) { cells[i] = toSed(c); } else { cells[i] = AIR; }
    } else if (dist < reach * 1.26) {
      // Scorched and fractured crater rim: darkest shade and extra rot for later erosion
      var nc = c;
      if (rndVal < 0.72) { nc = nc & ~0x300u; }
      let curRot = (nc >> 12u) & 15u;
      let addRot = u32(clamp((1.0 - (dist - reach) / (reach * 0.26)) * (4.0 + 6.0 * force), 0.0, 10.0));
      let newRot = min(15u, curRot + addRot);
      nc = (nc & ~(15u << 12u)) | (newRot << 12u);
      if (dist < reach * 1.07 && rndVal2 < 0.25) { nc = toSed(nc); }
      cells[i] = nc;
    }
  } else if (t == SED) {
    if (layerOf(c) == GOLD) {
      if (dist < R * (0.85 + 0.2 * force)) {
        atomicAdd(&tally[0], 1u);
        cells[i] = AIR;
      }
      return;
    }
    if (dist < R * (0.85 + 0.2 * force) && rndVal < 0.75) { cells[i] = AIR; }
  }
}

// Per-column blast effects: scorch vegetation and push standing water outward in a splash wave
@compute @workgroup_size(8, 8, 1)
fn blastCol(@builtin(global_invocation_id) gid: vec3u) {
  let x = i32(gid.x);
  let z = i32(gid.y);
  if (x >= GX || z >= GZ) { return; }
  let i = u32(x + GX * z);
  let d2d = vec2f(f32(x) + 0.5, f32(z) + 0.5) - dyn.detPos.xz;
  let dist = length(d2d);
  let R = dyn.detPos.w;
  if (dist > R * 1.6) { return; }

  let v = veg[i];
  let dy = abs(col[i].z - dyn.detPos.y);
  if (dist < R * 1.15 && dy < R * 1.4) {
    veg[i] = vec4f(0.0, v.y, v.z * 0.3, 0.0);
  } else if (dist < R * 1.5 && dy < R * 1.6) {
    veg[i] = vec4f(v.x * 0.4, v.y, v.z * 0.7, v.w * 0.4);
  }

  if (col[i].x > 0.02 && dist > 0.5 && dist < R * 1.5 && dy < R * 1.5) {
    let dir = d2d / dist;
    let push = (1.0 - dist / (R * 1.5)) * (0.35 + 0.55 * dyn.detInfo.x) * min(col[i].x, 2.0);
    var f = flux[i];
    if (dir.x < 0.0) { f.x += -dir.x * push; } else { f.y += dir.x * push; }
    if (dir.y < 0.0) { f.z += -dir.y * push; } else { f.w += dir.y * push; }
    flux[i] = f;
  }
}
`,Jn=`// The picture: one orthographic ray per pixel through the grid, one flat tone per voxel face.

@group(0) @binding(0) var<storage, read> cells: array<u32>;
@group(0) @binding(1) var<uniform> u: U;
@group(0) @binding(2) var<storage, read> pk: Pick;
// the saucer on its own, upright, in a small grid (world.ts MODEL): what flies when it flies
@group(0) @binding(3) var<storage, read> model: array<u32>;
// planted dynamite sticks and active explosions
@group(0) @binding(4) var<uniform> dyn: Dyn;

@vertex
fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
  let p = vec2f(f32((i << 1u) & 2u), f32(i & 2u));
  return vec4f(p * 2.0 - 1.0, 0.0, 1.0);
}

fn solid(p: vec3i) -> f32 {
  if (!inGrid(p)) { return 0.0; }
  return f32(ty(cells[idx(p)]) >= SED);
}

// The backdrop: a sky, cool and pale at the top, the paper of the page in the middle, warm
// towards the ground. Drawn the way the rest is, in whole pixels: a dozen flat bands, each
// stippled into the next (ordered dither), not a smooth ramp.
const SKY_TOP = vec3f(0.800, 0.862, 0.878);
const SKY_LOW = vec3f(0.953, 0.847, 0.741);

fn bayer(p: vec2f) -> f32 {
  let m = array<f32, 16>(0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
  return (m[(u32(p.x) & 3u) + ((u32(p.y) & 3u) << 2u)] + 0.5) / 16.0;
}

fn backdrop(px: vec2f) -> vec3f {
  let bands = 12.0;
  let v = clamp(px.y / u.res.y, 0.0, 1.0) * bands;
  // which band this pixel takes: the one it is in, or the next, by the dither
  let t = (floor(v) + step(bayer(px), fract(v))) / bands;
  let c = mix(SKY_TOP, BG, smoothstep(0.0, 0.5, t));
  return mix(c, SKY_LOW, smoothstep(0.45, 1.0, t));
}

const WATER_SHALLOW = vec3f(0.16, 0.62, 0.66);
const WATER_DEEP = vec3f(0.04, 0.33, 0.42);

fn h2(p: vec2f, t: u32) -> f32 {
  return unit(pcg(u32(p.x) + pcg(u32(p.y) + pcg(t))));
}

// The end of the hose's jet, drawn over the picture. The jet goes along the line of sight, so
// all there is to see of it is where it lands: a white core the width of the jet, and spray
// flying out from it in streaks, thinning with distance.
fn hoseJet(col: vec3f, px: vec2f) -> vec3f {
  if (!working() || toolNow() != HOSE) { return col; }
  let core = max(u.tool.y / u.camR.w * 0.45, 2.0); // the jet's radius where it lands, in pixels
  let d = px - u.pointer.xy;
  let r = length(d);
  if (r > core * 4.5) { return col; }
  let tick = u32(u.res.z * 30.0);
  if (r < core) {
    // the core, boiling
    return mix(vec3f(0.97, 1.0, 1.0), vec3f(0.62, 0.88, 0.92), step(0.7, h2(px, tick)));
  }
  // the spray: spokes round the core, each a run of specks moving outward
  let out = (r - core) / (core * 3.5); // 0 at the core's edge, 1 where the spray gives out
  let spoke = floor((atan2(d.y, d.x) + 3.1416) * 5.0);
  let run = fract(out * 2.2 - u.res.z * 3.5 + h2(vec2f(spoke, 1.0), 3u));
  if (h2(vec2f(spoke, 5.0), 9u) < 0.75 && run < 0.4 * (1.0 - out) && h2(px, tick) < 0.85) {
    return mix(vec3f(0.92, 0.98, 0.98), vec3f(0.45, 0.8, 0.85), out);
  }
  return col;
}

// A voxel's own tone: its layer's colour, its shade, a grain.
fn tone(c: u32, cell: vec3i) -> vec3f {
  let layer = layerOf(c);
  var bcol = PAL[layer];
  if (ty(c) != GROUND) {
    bcol *= 0.88 + 0.05 * f32((c >> 8u) & 3u);
    if (layer != METAL) { bcol *= 0.96 + 0.08 * grain(cell); } // metal is smooth
  }
  if (ty(c) == SED) { bcol = mix(bcol, vec3f(0.86, 0.68, 0.52), 0.3); }
  return bcol;
}

// What gives light of its own, over the lit tone: lamps, a glint.
fn lights(lit: vec3f, c: u32, cell: vec3i, rate: f32) -> vec3f {
  let layer = layerOf(c);
  let shade = (c >> 8u) & 3u;
  var col = lit;
  // the saucer's lamps: one in four lit, and the light runs round the rim
  if (layer == LAMP) {
    col = select(PAL[LAMP] * 0.5, vec3f(1.0, 0.97, 0.78), shade == (u32(u.res.z * rate) & 3u));
  }
  // gold glints: a voxel here, a voxel there, a moment each
  if (layer == GOLD && h2(vec2f(cell.xy) + vec2f(0.0, f32(cell.z) * 191.0), u32(u.res.z * 5.0)) > 0.93) {
    col = mix(col, vec3f(1.0), 0.75);
  }
  return col;
}

// The saucer in flight is not in the block's grid. It is a small grid of its own, walked the
// same way, in its own frame: wherever it is and however it is turned, its voxels stay voxels.
struct Craft {
  hit: bool,
  t: f32,      // how far along the ray
  cell: vec3i,
  n: vec3f,    // the face, turned back into the world
  c: u32,
  glass: f32,  // glass cells crossed on the way, and how far along the first was
  gt: f32,
  gn: vec3f,
};

fn marchCraft(ro: vec3f, rd: vec3f) -> Craft {
  var h: Craft;
  h.hit = false;
  h.glass = 0.0;
  let ax = u.craftX.xyz;
  let ay = u.craftY.xyz;
  let az = u.craftZ.xyz;
  let rel = ro - u.craft.xyz;
  let o = vec3f(dot(rel, ax), dot(rel, ay), dot(rel, az)) + MODEL_AT;
  var d = vec3f(dot(rd, ax), dot(rd, ay), dot(rd, az));
  d = select(d, vec3f(1e-5), abs(d) < vec3f(1e-5)); // the walk divides by these
  let g = vec3f(MODEL);
  let inv = 1.0 / d;
  let ta = (vec3f(0.0) - o) * inv;
  let tb = (g - o) * inv;
  let t0 = min(ta, tb);
  let t1 = max(ta, tb);
  let tn = max(max(t0.x, t0.y), t0.z);
  let tf = min(min(t1.x, t1.y), t1.z);
  if (tn >= tf || tf <= 0.0) { return h; }

  let sg = sign(d);
  var n = vec3f(0.0, 1.0, 0.0);
  if (t0.x >= t0.y && t0.x >= t0.z) { n = vec3f(-sg.x, 0.0, 0.0); }
  else if (t0.y >= t0.z) { n = vec3f(0.0, -sg.y, 0.0); }
  else { n = vec3f(0.0, 0.0, -sg.z); }
  var t = max(tn, 0.0);
  var cell = vec3i(clamp(floor(o + d * (t + 0.001)), vec3f(0.0), g - 1.0));
  let stp = vec3i(sg);
  let td = abs(inv);
  var tm = (vec3f(cell) + max(sg, vec3f(0.0)) - o) * inv;
  for (var i = 0; i < 130; i++) {
    if (any(cell < vec3i(0)) || any(cell >= MODEL)) { break; }
    let c = model[cell.x + MODEL.x * (cell.z + MODEL.z * cell.y)];
    if (c != 0u) {
      if (layerOf(c) == GLASS) {
        if (h.glass == 0.0) { h.gt = t; h.gn = ax * n.x + ay * n.y + az * n.z; }
        h.glass += 1.0;
      } else {
        h.hit = true;
        h.t = t;
        h.cell = cell;
        h.n = ax * n.x + ay * n.y + az * n.z;
        h.c = c;
        break;
      }
    }
    if (tm.x < tm.y && tm.x < tm.z) {
      t = tm.x; cell.x += stp.x; tm.x += td.x; n = vec3f(-sg.x, 0.0, 0.0);
    } else if (tm.y < tm.z) {
      t = tm.y; cell.y += stp.y; tm.y += td.y; n = vec3f(0.0, -sg.y, 0.0);
    } else {
      t = tm.z; cell.z += stp.z; tm.z += td.z; n = vec3f(0.0, 0.0, -sg.z);
    }
  }
  return h;
}

const SHADE = vec3f(0.5, 0.47, 0.58); // what is not in the sun

fn hitBox(ro: vec3f, rd: vec3f, lo: vec3f, hi: vec3f) -> vec4f {
  let d = select(rd, vec3f(1e-5), abs(rd) < vec3f(1e-5));
  let inv = 1.0 / d;
  let ta = (lo - ro) * inv;
  let tb = (hi - ro) * inv;
  let t0 = min(ta, tb);
  let t1 = max(ta, tb);
  let tn = max(max(t0.x, t0.y), t0.z);
  let tf = min(min(t1.x, t1.y), t1.z);
  if (tn >= tf || tf <= 0.0) { return vec4f(1e9, 0.0, 1.0, 0.0); }
  let sg = sign(d);
  var n = vec3f(0.0, 0.0, -sg.z);
  if (t0.x >= t0.y && t0.x >= t0.z) { n = vec3f(-sg.x, 0.0, 0.0); }
  else if (t0.y >= t0.z) { n = vec3f(0.0, -sg.y, 0.0); }
  return vec4f(max(tn, 0.0), n);
}

fn litFlat(bcol: vec3f, n: vec3f) -> vec3f {
  let lam = max(dot(n, u.sun.xyz), 0.0);
  return select(bcol * SHADE, bcol * (0.62 + 0.5 * lam), lam > 0.0);
}

// Planted dynamite sticks (taped red voxel bundle, burning fuse, flying sparks, fuse smoke) and
// active explosions (brief fiery flash, tiny flying sandstone grit/embers, and billowing
// dither-shaded smoke & dust plumes), depth-tested against the rock.
fn drawDynamite(ro: vec3f, rd: vec3f, behind: f32, baseCol: vec3f, px: vec2f) -> vec3f {
  var bestT = behind;
  var col = baseCol;
  let time = u.res.z;
  let dith = bayer(px);

  // accumulated smoke & fire wisps blended over the scene
  var smokeW = 0.0;
  var smokeSum = vec3f(0.0);
  var fireW = 0.0;
  var fireSum = vec3f(0.0);

  // --- minimalistic high shelf on the far side of the black board (keeps the dynamite out of kids' reach) ---
  {
    let sc = SHELF_AT + vec3f(0.0, 12.0, 0.0);
    let tcS = dot(sc - ro, rd);
    let perpS = ro + rd * tcS - sc;
    if (dot(perpS, perpS) < 340.0) {
      let loS = ro - SHELF_AT;
      // four slim dark-steel legs rising from the black board
      let legCol = vec3f(0.36, 0.35, 0.34);
      for (var lx = 0; lx < 2; lx++) {
        for (var lz = 0; lz < 2; lz++) {
          let x = select(-4.8, 4.8, lx == 1);
          let z = select(-1.85, 1.85, lz == 1);
          let lh = hitBox(loS, rd, vec3f(x - 0.38, 0.0, z - 0.38), vec3f(x + 0.38, SHELF_H - 1.0, z + 0.38));
          if (lh.x < bestT) {
            bestT = lh.x;
            col = litFlat(legCol, lh.yzw);
          }
        }
      }
      // crisp thin pale minimalist shelf top
      let th = hitBox(loS, rd, vec3f(-5.5, SHELF_H - 1.05, -2.4), vec3f(5.5, SHELF_H, 2.4));
      if (th.x < bestT) {
        bestT = th.x;
        col = litFlat(vec3f(0.84, 0.81, 0.76), th.yzw);
      }
    }
  }

  // --- collectible dynamite box perched on top of the shelf ---
  if (dyn.counts.z > 0u) {
    let hovered = dyn.counts.z == 2u;
    let lift = select(0.0, 0.8, hovered);
    let cOrig = CRATE_AT + vec3f(0.0, lift, 0.0);
    let tcC = dot(cOrig + vec3f(0.0, 2.6, 0.0) - ro, rd);
    let perpC = ro + rd * tcC - (cOrig + vec3f(0.0, 2.6, 0.0));
    if (dot(perpC, perpC) < 120.0) {
      let lo = ro - cOrig;
      let hiBoost = select(1.0, 1.16, hovered);
      // closed rectangular wooden box (8.4 x 5.2 x 3.4 voxels)
      let ch = hitBox(lo, rd, vec3f(-4.2, 0.0, -1.7), vec3f(4.2, 5.2, 1.7));
      if (ch.x < bestT) {
        bestT = ch.x;
        let lp = lo + rd * ch.x;
        let n = ch.yzw;
        // warm weathered wood planks with horizontal seams
        let plank = floor(lp.y / 1.73);
        var ccol = mix(vec3f(0.68, 0.45, 0.25), vec3f(0.58, 0.37, 0.20), fract(plank * 0.618));
        if (abs(n.y) < 0.5 && (abs(lp.y - 1.73) < 0.16 || abs(lp.y - 3.46) < 0.16)) {
          ccol *= 0.65;
        }
        if (n.y > 0.5 && abs(lp.z) < 0.16) {
          ccol *= 0.7;
        }
        // dark stenciled text hint in the middle of the long faces
        if (abs(n.z) > 0.5 && abs(lp.x) < 1.65 && lp.y > 1.3 && lp.y < 3.9) {
          let gx = i32(floor((lp.x + 1.65) * 2.2));
          let gy = i32(floor((lp.y - 1.3) * 1.9));
          if ((gy == 1 || gy == 3) && ((gx + gy) & 1) == 0) {
            ccol = vec3f(0.22, 0.14, 0.09);
          }
        }
        col = litFlat(ccol, n) * hiBoost;
      }
      // two slightly raised vertical wooden straps wrapping around left and right ends
      for (var s = 0; s < 2; s++) {
        let sx = select(-2.7, 2.7, s == 1);
        let sh = hitBox(lo, rd, vec3f(sx - 0.55, 0.0, -1.95), vec3f(sx + 0.55, 5.42, 1.95));
        if (sh.x < bestT) {
          bestT = sh.x;
          let lp = lo + rd * sh.x;
          let scol = mix(vec3f(0.76, 0.52, 0.30), vec3f(0.62, 0.40, 0.21), step(0.3, abs(lp.x - sx)));
          col = litFlat(scol, sh.yzw) * hiBoost;
        }
      }
    }
  }

  // --- planted sticks ---
  let nSticks = min(dyn.counts.x, MAX_STICKS);
  for (var i = 0u; i < nSticks; i++) {
    let sp = dyn.sticks[i * 2u];
    let sd = dyn.sticks[i * 2u + 1u];
    let sPos = sp.xyz;
    let fuse = clamp(sp.w, 0.0, 1.0);
    let sDir = normalize(sd.xyz);

    // quick reject sphere around stick + fuse + sparks + fuse smoke
    let approxC = sPos + sDir * 6.0 + vec3f(0.0, 4.0, 0.0);
    let tc0 = dot(approxC - ro, rd);
    let perp0 = ro + rd * tc0 - approxC;
    if (dot(perp0, perp0) > 420.0) { continue; }

    let upRef = select(vec3f(0.0, 1.0, 0.0), vec3f(1.0, 0.0, 0.0), abs(sDir.y) > 0.9);
    let ax = normalize(cross(upRef, sDir));
    let az = cross(sDir, ax);
    let origin = sPos - sDir * 0.6;
    let rel = ro - origin;
    let lo = vec3f(dot(rel, ax), dot(rel, sDir), dot(rel, az));
    let ld = vec3f(dot(rd, ax), dot(rd, sDir), dot(rd, az));

    // bundled red dynamite stick body
    let bh = hitBox(lo, ld, vec3f(-1.65, 0.0, -1.65), vec3f(1.65, 8.2, 1.65));
    if (bh.x < bestT) {
      bestT = bh.x;
      let lp = lo + ld * bh.x;
      let wn = ax * bh.y + sDir * bh.z + az * bh.w;
      var bcol = vec3f(0.88, 0.19, 0.13);
      if (abs(lp.x) < 0.28 || abs(lp.z) < 0.28) { bcol *= 0.74; }
      if ((lp.y > 1.6 && lp.y < 2.7) || (lp.y > 5.5 && lp.y < 6.6)) {
        bcol = vec3f(0.16, 0.15, 0.15);
      } else if (abs(bh.z) > 0.5) {
        bcol = select(vec3f(0.72, 0.22, 0.14), vec3f(0.24, 0.20, 0.18), length(lp.xz) < 0.65);
      }
      col = litFlat(bcol, wn);
    }

    // curved hemp fuse shrinking as it burns
    let fuseLen = 0.8 + 4.8 * fuse;
    for (var s = 0; s < 5; s++) {
      let fFrac = (f32(s) + 0.5) / 5.0;
      let dist = fFrac * fuseLen;
      let fp = origin + sDir * (8.2 + dist) + ax * (dist * dist * 0.14);
      let fh = hitBox(ro, rd, fp - vec3f(0.55), fp + vec3f(0.55));
      if (fh.x < bestT) {
        bestT = fh.x;
        col = litFlat(vec3f(0.84, 0.76, 0.58), fh.yzw);
      }
    }

    // sizzling spark at the burning tip
    let tip = origin + sDir * (8.2 + fuseLen) + ax * (fuseLen * fuseLen * 0.14);
    let tick = u32(time * 28.0) + i * 31u;
    let flick = unit(pcg(tick));
    let urgent = 1.0 - fuse;
    let sparkR = 1.05 + 0.45 * flick + 0.45 * urgent;
    let sh = hitBox(ro, rd, tip - vec3f(sparkR), tip + vec3f(sparkR));
    if (sh.x < bestT) {
      bestT = sh.x;
      let hot = step(0.35, flick);
      col = mix(vec3f(1.0, 0.52, 0.10), vec3f(1.0, 0.98, 0.78), hot);
    }

    // tiny flying spark pixels popping off the tip
    for (var k = 0u; k < 5u; k++) {
      let kh = pcg(i * 97u + k * 53u + 13u);
      let phase = fract(time * (3.2 + 1.4 * unit(kh)) + f32(k) * 0.23 + f32(i) * 0.41);
      let ang = unit(pcg(kh)) * 6.2832 + floor(time * 3.5) * 1.7;
      let spDir = normalize(sDir * 0.65 + ax * cos(ang) + az * sin(ang) + vec3f(0.0, 0.5, 0.0));
      let spPos = tip + spDir * (phase * 6.8) - vec3f(0.0, phase * phase * 3.6, 0.0);
      let sz = 0.52 * (1.0 - phase * 0.6);
      let ph = hitBox(ro, rd, spPos - vec3f(sz), spPos + vec3f(sz));
      if (ph.x < bestT) {
        bestT = ph.x;
        col = mix(vec3f(1.0, 0.96, 0.65), vec3f(0.98, 0.36, 0.08), phase);
      }
    }

    // delicate curl of grey smoke drifting up from the burning fuse
    for (var k = 0u; k < 4u; k++) {
      let phase = fract(time * 0.9 + f32(k) * 0.25 + f32(i) * 0.31);
      let sw = sin(time * 2.4 + f32(k) * 1.9) * 1.4 * phase;
      let pc = tip + vec3f(sw, 1.5 + phase * 11.0, cos(time * 1.9 + f32(k)) * 1.1 * phase);
      let pr = 1.2 + phase * 2.4;
      let tc = dot(pc - ro, rd);
      let q = ro + rd * tc - pc;
      let d2 = dot(q, q);
      if (d2 < pr * pr && tc - pr < bestT) {
        let vis = clamp((bestT - (tc - pr)) / pr, 0.0, 1.0);
        let w = (1.0 - d2 / (pr * pr)) * (1.0 - phase) * 0.45 * vis;
        smokeW += w;
        smokeSum += vec3f(0.82, 0.80, 0.78) * w;
      }
    }
  }

  // --- active explosions ---
  let nBlasts = min(dyn.counts.y, MAX_BLASTS);
  for (var i = 0u; i < nBlasts; i++) {
    let bp = dyn.blasts[i * 2u];
    let bi = dyn.blasts[i * 2u + 1u];
    let bPos = bp.xyz;
    let age = bp.w;
    if (age < 0.0 || age > 2.25) { continue; }
    let R = bi.x;
    let bForce = bi.y;
    let seed = u32(bi.z);

    // quick bounding-sphere reject for pixels far from this explosion
    let approxC = bPos + vec3f(0.0, age * 18.0, 0.0);
    let tc0 = dot(approxC - ro, rd);
    let perp0 = ro + rd * tc0 - approxC;
    let boundR = R * 3.0 + 36.0;
    if (dot(perp0, perp0) > boundR * boundR) { continue; }

    // 1. Small flying sandstone pebbles & glowing embers (tiny crisp specks, no big blocks)
    if (age < 0.95) {
      let shrink = clamp((0.95 - age) / 0.25, 0.0, 1.0);
      for (var k = 0u; k < 20u; k++) {
        let h1 = pcg(seed + k * 7919u + 17u);
        let h2 = pcg(h1);
        let h3 = pcg(h2);
        let az = unit(h1) * 6.2832;
        let el = 0.18 + 1.15 * unit(h2);
        let dir = vec3f(cos(az) * cos(el), sin(el), sin(az) * cos(el));
        let spd = (24.0 + 42.0 * unit(h3)) * (0.65 + 0.55 * bForce) * clamp(R / 15.0, 0.65, 1.5);
        let p = bPos + dir * (spd * age) - vec3f(0.0, 48.0 * age * age, 0.0);
        if (p.y < f32(LO.y)) { continue; }
        let isEmber = (k % 3u) == 0u && age < 0.55;
        let sz = (0.45 + 0.42 * unit(pcg(h3))) * shrink;
        let ch = hitBox(ro, rd, p - vec3f(sz), p + vec3f(sz));
        if (ch.x < bestT) {
          bestT = ch.x;
          if (isEmber) {
            col = mix(vec3f(1.0, 0.94, 0.62), vec3f(1.0, 0.38, 0.08), age / 0.55);
          } else {
            col = litFlat(PAL[k % 7u], ch.yzw);
          }
        }
      }
    }

    // 2. Brief fiery flash burst inside the crater (soft billowing fire puffs)
    if (age < 0.38) {
      let tNorm = age / 0.38;
      let pop = min(1.0, age / 0.045);
      let fade = 1.0 - smoothstep(0.10, 0.38, age);
      for (var k = 0u; k < 10u; k++) {
        let h1 = pcg(seed + k * 3571u + 101u);
        let h2 = pcg(h1);
        let h3 = pcg(h2);
        var off = vec3f(0.0);
        var rad = R * 0.72;
        if (k > 0u) {
          let az = unit(h1) * 6.2832;
          let z = unit(h2) * 1.6 - 0.5;
          let xy = sqrt(max(0.0, 1.0 - clamp(z, -1.0, 1.0) * clamp(z, -1.0, 1.0)));
          off = vec3f(cos(az) * xy, z, sin(az) * xy) * R * (0.28 + 0.48 * unit(h3)) * (0.3 + 0.7 * tNorm);
          rad = R * (0.34 + 0.24 * unit(pcg(h3)));
        }
        let pc = bPos + off + vec3f(0.0, age * 14.0, 0.0);
        let pr = rad * pop * (0.65 + 0.45 * fade);
        if (pr < 0.8) { continue; }
        let tc = dot(pc - ro, rd);
        let q = ro + rd * tc - pc;
        let d2 = dot(q, q);
        if (d2 >= pr * pr || tc - pr >= bestT) { continue; }
        let vis = clamp((bestT - (tc - pr)) / max(pr * 0.8, 1.0), 0.0, 1.0);
        let u2 = 1.0 - d2 / (pr * pr);
        let w = u2 * u2 * fade * 1.4 * vis;
        let hot = clamp(u2 * (1.0 - tNorm * 0.85), 0.0, 1.0);
        let fcol = mix(vec3f(0.96, 0.32, 0.08), vec3f(1.0, 0.96, 0.76), smoothstep(0.15, 0.75, hot));
        fireW += w;
        fireSum += fcol * w;
      }
    }

    // 3. Billowing smoke & sandstone dust plume (soft sunlit clouds, rising and thinning into wisps)
    if (age > 0.02 && age < 2.22) {
      let sAge = age - 0.02;
      let sNorm = sAge / 2.20;
      let envIn = smoothstep(0.0, 0.07, sNorm);
      let envOut = 1.0 - smoothstep(0.32, 1.0, sNorm);
      let hotGlow = (1.0 - smoothstep(0.04, 0.48, age));

      // 24 overlapping puffs: 8 low dust-ring puffs + 16 rising mushrooming smoke puffs
      for (var k = 0u; k < 24u; k++) {
        let h1 = pcg(seed + k * 6133u + 313u);
        let h2 = pcg(h1);
        let h3 = pcg(h2);
        let h4 = pcg(h3);
        let isRing = k < 8u;
        let az = unit(h1) * 6.2832;
        let gust = sin(sAge * 1.6 + f32(k)) * 2.2 * sNorm;
        var pc: vec3f;
        var pr: f32;
        var puffFade: f32;
        if (isRing) {
          // low dusty shockwave skirt rolling outward around the crater rim
          let rNorm = min(1.0, sAge / 1.35);
          let spread = R * (0.45 + 1.15 * pow(rNorm, 0.55)) * (0.75 + 0.4 * unit(h2));
          let lift = (2.0 + 7.5 * unit(h3)) * pow(rNorm, 0.7);
          pc = bPos + vec3f(cos(az) * spread + gust, lift, sin(az) * spread);
          pr = R * (0.34 + 0.24 * unit(h4)) * (0.55 + 0.85 * pow(rNorm, 0.5));
          puffFade = envIn * (1.0 - smoothstep(0.28, 1.0, rNorm)) * 0.72;
        } else {
          // main rising smoke plume, curling outward as it climbs
          let delay = 0.04 * unit(h4);
          let la = max(0.0, sAge - delay);
          let ln = clamp(la / 2.15, 0.0, 1.0);
          let climb = pow(la, 0.78) * (14.0 + 26.0 * unit(h3)) * (0.75 + 0.35 * bForce);
          let spread = R * (0.18 + 0.75 * unit(h2)) * (0.35 + 1.05 * pow(ln, 0.65));
          pc = bPos + vec3f(cos(az) * spread + gust, climb + R * 0.18, sin(az) * spread);
          pr = R * (0.38 + 0.32 * unit(h4)) * (0.55 + 0.95 * pow(ln, 0.55));
          puffFade = smoothstep(0.0, 0.08, ln) * (1.0 - smoothstep(0.30, 1.0, ln));
        }
        if (puffFade <= 0.01 || pr < 1.0) { continue; }
        let tc = dot(pc - ro, rd);
        let q = ro + rd * tc - pc;
        let d2 = dot(q, q);
        if (d2 >= pr * pr || tc - pr >= bestT) { continue; }

        let vis = clamp((bestT - (tc - pr)) / max(pr * 0.9, 1.0), 0.0, 1.0);
        let u2 = 1.0 - d2 / (pr * pr);
        // subtle pixel-dithered break-up at the fringes so puffs read as crisp pixel smoke
        let wisp = clamp(u2 * 1.25 - 0.18 * dith, 0.0, 1.0);
        let w = wisp * puffFade * vis * 0.85;
        if (w <= 0.005) { continue; }

        // directional lighting on the smoke puff, lightly stepped into crisp bands with Bayer dither
        let zFront = sqrt(max(0.0, pr * pr - d2));
        let pn = normalize(q - rd * zFront);
        let lamRaw = clamp(dot(pn, u.sun.xyz) * 0.5 + 0.5, 0.0, 1.0);
        let lamBand = (floor(lamRaw * 3.0) + step(dith, fract(lamRaw * 3.0))) / 3.0;

        // warm sandstone-tinted dust near the base, classic grey-ash smoke higher up
        var baseSmoke = mix(vec3f(0.42, 0.38, 0.37), vec3f(0.84, 0.80, 0.75), smoothstep(0.05, 0.72, sNorm));
        if (isRing) {
          baseSmoke = mix(vec3f(0.76, 0.58, 0.46), vec3f(0.84, 0.77, 0.70), smoothstep(0.0, 0.7, sNorm));
        }
        var scol = mix(baseSmoke * SHADE * 1.15, baseSmoke * 1.08, lamBand);

        // warm fiery under-glow lighting the smoke from inside the blast during the first half-second
        if (hotGlow > 0.01) {
          let nearCore = clamp(1.0 - distance(pc, bPos) / (R * 1.9), 0.0, 1.0);
          scol = mix(scol, vec3f(1.0, 0.58, 0.18), hotGlow * nearCore * 0.65);
        }
        smokeW += w;
        smokeSum += scol * w;
      }
    }
  }

  // composite billowing smoke over scene (dither-clipped at very faint edges for crisp big pixels)
  if (smokeW > 0.02) {
    let alpha = 1.0 - exp(-smokeW * 1.45);
    let edge = step(dith * 0.16, alpha);
    col = mix(col, smokeSum / smokeW, min(alpha, 0.90) * edge);
  }
  // composite fiery blast core on top
  if (fireW > 0.03) {
    let fAlpha = 1.0 - exp(-fireW * 1.8);
    let fEdge = step(dith * 0.18, fAlpha);
    col = mix(col, fireSum / fireW, min(fAlpha, 0.96) * fEdge);
  }

  return col;
}

@fragment
fn fs(@builtin(position) fc: vec4f) -> @location(0) vec4f {
  let px = floor(fc.xy) + 0.5;
  let sx = (px.x - u.res.x * 0.5) * u.camR.w;
  let sy = (u.res.y * 0.5 - px.y) * u.camR.w;
  let ro = u.camO.xyz + u.camR.xyz * sx + u.camU.xyz * sy;
  let h = march(ro, u.camF.xyz);

  var col = backdrop(px);
  if (h.hit) {
    let bcol = tone(h.c, h.cell);

    // the whole face gets one light: asked from its centre, not from the pixel
    let cen = vec3f(h.cell) + 0.5;
    let ni = vec3i(h.n);
    let lam = max(dot(h.n, u.sun.xyz), 0.0);
    var lit = lam > 0.0;
    if (lit) { lit = !march(cen + h.n * 0.52, u.sun.xyz).hit; }

    // corners: the four cells that lean over this face
    let ta = vec3i(abs(h.n).yzx);
    let tb = vec3i(abs(h.n).zxy);
    let ao = solid(h.cell + ni + ta) + solid(h.cell + ni - ta) + solid(h.cell + ni + tb) + solid(h.cell + ni - tb);

    if (lit) {
      col = bcol * (0.62 + 0.5 * lam);
    } else {
      col = bcol * SHADE;
    }
    col *= 1.0 - 0.07 * ao;
    col = lights(col, h.c, h.cell, 5.0);

    // brief warm flash on nearby rock walls when dynamite detonates
    let nBlasts = min(dyn.counts.y, MAX_BLASTS);
    for (var bi = 0u; bi < nBlasts; bi++) {
      let bp = dyn.blasts[bi * 2u];
      let age = bp.w;
      if (age >= 0.0 && age < 0.24) {
        let R = dyn.blasts[bi * 2u + 1u].x;
        let bd = distance(cen, bp.xyz);
        if (bd < R * 2.2) {
          let att = (1.0 - bd / (R * 2.2)) * (1.0 - age / 0.24);
          col = mix(col, vec3f(1.0, 0.80, 0.42), clamp(att * 0.75, 0.0, 0.75));
        }
      }
    }

    // the brush, drawn on the rock
    if (pk.pos.w > 0.5) {
      let tool = toolNow();
      if (tool == WIND) {
        // The wind blows straight in, so what there is to see of it is the air spreading over
        // what it hits: dashes running outward from where it is aimed, fainter where it is
        // weaker. Faint while only aimed, plain while it blows.
        let on = windOn(cen, pk.pos.xyz, u.camF.xyz, u.tool.y);
        let d = px - u.pointer.xy;
        let reach = length(d) * u.camR.w; // in voxels, on the screen
        let turn = (atan2(d.y, d.x) + 3.1416) * 14.0;
        let spoke = floor(turn);
        let run = fract(reach * 0.035 - u.res.z * 1.6 + h2(vec2f(spoke, 2.0), 5u));
        // thin spokes, or far out a dash is a slab
        if (h2(vec2f(spoke, 7.0), 11u) < 0.6 && run < 0.22 && fract(turn) * reach < 1.6) {
          col = mix(col, vec3f(1.0), on * select(0.14, 0.38, u.pointer.w > 0.5));
        }
      } else {
        var d = distance(cen, pk.pos.xyz);
        var show = true;
        // rain falls in a column: its ring only on what faces up
        if (tool == RAIN) { d = distance(cen.xz, pk.pos.xz); show = h.n.y > 0.5; }
        if (show && abs(d - u.tool.y) < 0.6) { col = mix(col, vec3f(1.0), 0.45); }
        // dynamite: also mark the exact spot where the stick will be planted
        if (tool == DYNAMITE && d < 1.35) { col = mix(col, vec3f(0.95, 0.25, 0.16), 0.75); }
      }
    }
  }

  // glass: a pale wash over what is behind it, lighter on the faces the sun is on
  if (h.glass > 0.0) {
    col = mix(col, PAL[GLASS], 0.2 + 0.3 * max(dot(h.gn, u.sun.xyz), 0.0));
  }
  if (h.water > 0.0) {
    // how much water the ray went through: whole voxels, and how full the first one is
    let first = cells[idx(h.wcell)];
    let through = h.water - 1.0 + f32((first >> 8u) & 15u) / 15.0;
    let depth = clamp(through / 10.0, 0.0, 1.0);
    var wcol = mix(WATER_SHALLOW, WATER_DEEP, depth);
    if (h.wn.y > 0.5) { wcol *= 1.12; } else { wcol *= 0.92; }
    // white water: what runs or falls is lighter than what lies still
    let rush = f32((first >> 12u) & 15u) / 15.0;
    wcol = mix(wcol, vec3f(0.78, 0.94, 0.93), 0.5 * rush);
    // a film is a sheen, a hand's depth is water
    col = mix(col, wcol, (0.45 + 0.5 * depth) * min(through * 2.5, 1.0));
  }
  // the saucer, flying: over whatever of the block is behind it
  var behind = 1e9; // how far along this ray the block is
  if (h.hit) { behind = dot(vec3f(h.cell) + 0.5 - ro, u.camF.xyz); }
  if (u.craft.w > 0.5) {
    let k = marchCraft(ro, u.camF.xyz);
    if (k.hit && k.t < behind) {
      let lam = max(dot(k.n, u.sun.xyz), 0.0);
      let bcol = tone(k.c, k.cell);
      col = lights(select(bcol * SHADE, bcol * (0.62 + 0.5 * lam), lam > 0.0), k.c, k.cell, 16.0); // its lamps racing
      behind = k.t;
    }
    if (k.glass > 0.0 && k.gt < behind) {
      col = mix(col, PAL[GLASS], 0.2 + 0.3 * max(dot(k.gn, u.sun.xyz), 0.0));
    }
  }
  col = drawDynamite(ro, u.camF.xyz, behind, col, px);
  col = hoseJet(col, floor(fc.xy));
  return vec4f(col, 1.0);
}
`,C=192,Ke=160,B=192,W=8,O=128,Q=(C-O)/2,ee=(B-O)/2,ve=W+O,jt=101,ot={AIR:0,WATER:1,SED:2,ROCK:3,GROUND:4,PLANT:5,WALL:7},{AIR:bt,ROCK:xt,GROUND:Qn}=ot,it=(e,t,o)=>e+C*(o+B*t),kn=(e,t)=>e>=Q&&t>=ee&&e<Q+O&&t<ee+O,eo=[{name:"kayenta",color:"#7d3d2d",soft:.18},{name:"navajo",color:"#d8703a",soft:1},{name:"salmon",color:"#e29766",soft:.6},{name:"caprock",color:"#efd3a9",soft:.25},{name:"deep red",color:"#b24c2b",soft:.45},{name:"pale band",color:"#f2c8a2",soft:1.3},{name:"shale",color:"#96573a",soft:1.7},{name:"ironstone",color:"#5c383c",soft:.06}],F={GRASS:8,LEAF:10,WOOD:12,BONE:13,CACTUS:14,GROUND_LAYER:15,METAL:16,GLASS:17,LAMP:18,GOLD:19},to={[F.GRASS]:{color:"#8fa04a",soft:0},[F.GRASS+1]:{color:"#6f8f3f",soft:0},[F.LEAF]:{color:"#4f7d3c",soft:0},[F.LEAF+1]:{color:"#3d6a3a",soft:0},[F.WOOD]:{color:"#5b3d2a",soft:0},[F.BONE]:{color:"#fbf6e6",soft:.001},[F.CACTUS]:{color:"#5f9a6e",soft:0},[F.GROUND_LAYER]:{color:"#2e2927",soft:0},[F.METAL]:{color:"#9aa6ad",soft:0},[F.GLASS]:{color:"#b4e4ea",soft:0},[F.LAMP]:{color:"#f3c24a",soft:0},[F.GOLD]:{color:"#eeb02a",soft:0}},no=[[0,16],[4,10],[7,2],[1,18],[5,4],[2,12],[7,2],[6,8],[1,20],[3,5],[4,10],[2,9],[7,2],[1,14],[5,3],[3,30]];function lt(e,t,o,r){let s=Math.imul(e,374761393)^Math.imul(t,668265263)^Math.imul(o,2147483647)^Math.imul(r,1274126177);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}const fe=(e,t,o)=>lt(e,t,0,o),st=e=>e*e*(3-2*e);function Oe(e,t,o){const r=Math.floor(e),s=Math.floor(t),h=e-r,S=t-s,P=st(h),p=st(S),w=fe(r,s,o),d=fe(r+1,s,o),l=fe(r,s+1,o),v=fe(r+1,s+1,o);return w+(d-w)*P+(l-w)*p+(w-d-l+v)*P*p}function an(e,t,o){const r=Math.floor(e),s=Math.floor(t),h=st(e-r),S=st(t-s),P=(l,v,R)=>l+(v-l)*R,p=(l,v)=>P(lt(r,l,s+v,o),lt(r+1,l,s+v,o),h);let w=NaN,d=[0,0,0,0];return l=>{const v=Math.floor(l);v!==w&&(d=v===w+1?[d[2],d[3],p(v+1,0),p(v+1,1)]:[p(v,0),p(v,1),p(v+1,0),p(v+1,1)],w=v);const R=st(l-v);return P(P(d[0],d[2],R),P(d[1],d[3],R),S)}}const oe=[48,24,48],zn=[24,8,24];function oo(e,t){const o={layer:F.BONE,shade:-1,air:!1},r={cells:e,has:(n,a,f)=>kn(n,f)&&a>=W&&a<ve,at:it};let s=r,h=0;const S=(n,a,f)=>{if(!s.has(n,a,f))return;const m=s.at(n,a,f),b=s.cells[m]&7;if(b!==xt&&!(o.air&&b===bt))return;const y=o.shade>=0?o.shade:2+(lt(n,a,f,t+31)<.3?1:0);o.layer===F.GOLD&&(s.cells[m]>>3&31)!==F.GOLD&&h++,s.cells[m]=xt|o.layer<<3|y<<8|s.cells[m]&268369920},P=(n,a,f)=>{s.has(n,a,f)&&(s.cells[s.at(n,a,f)]=bt)},p=(n,a,f,m,b=1,y=1)=>{const M=Math.cos(m),z=Math.sin(m),L=b*y;return{k:b,at:([G,Z,$])=>[n+G*M*b-$*z*L,a+Z*b,f+G*z*b+$*M*L],back:([G,Z,$])=>[((G-n)*M+($-f)*z)/b,(Z-a)/b,(-(G-n)*z+($-f)*M)/L]}},w=(n,a,f,m)=>{const b=Math.max(m*n.k,.6),y=n.at(a),M=n.at(f),z=[M[0]-y[0],M[1]-y[1],M[2]-y[2]],L=z[0]*z[0]+z[1]*z[1]+z[2]*z[2]||1,G=[0,1,2].map($=>Math.floor(Math.min(y[$],M[$])-b)),Z=[0,1,2].map($=>Math.ceil(Math.max(y[$],M[$])+b));for(let $=G[1];$<=Z[1];$++)for(let Te=G[2];Te<=Z[2];Te++)for(let Qe=G[0];Qe<=Z[0];Qe++){const Ct=Math.max(0,Math.min(1,((Qe-y[0])*z[0]+($-y[1])*z[1]+(Te-y[2])*z[2])/L));Math.hypot(Qe-y[0]-z[0]*Ct,$-y[1]-z[1]*Ct,Te-y[2]-z[2]*Ct)<=b&&S(Qe,$,Te)}},d=(n,a,f,m=f)=>{for(let b=0;b+1<a.length;b++)w(n,a[b],a[b+1],f+(m-f)*b/Math.max(1,a.length-2))},l=(n,a,f,m=f)=>{d(n,a,f,m),d(n,a.map(([b,y,M])=>[b,y,-M]),f,m)},v=(n,a,f)=>{const m=Math.max(...f)*n.k+1,b=n.at(a);for(let y=Math.floor(b[1]-m);y<=b[1]+m;y++)for(let M=Math.floor(b[2]-m);M<=b[2]+m;M++)for(let z=Math.floor(b[0]-m);z<=b[0]+m;z++){const L=n.back([z,y,M]);Math.hypot((L[0]-a[0])/f[0],(L[1]-a[1])/f[1],(L[2]-a[2])/f[2])<=1&&S(z,y,M)}},R=(n,a,f,m,b)=>{for(const y of a.filter((M,z)=>z%2===0)){const M=f(y);l(n,[[y,M,0],[y,M-b*.22,m*.85],[y,M-b*.62,m],[y,M-b,m*.5]],.75)}},_=n=>{d(n,[[-13,15,0],[-9,18,0],[-2,20,0],[5,22.5,0],[10,22,0],[14,19.5,0]],1.15),d(n,[[-13,15,0],[-15,12.5,0],[-16,9.5,0]],.8,.6),R(n,[-4,-1,2,5,8],f=>20+(f+2)*.33,5.2,12),w(n,[-10,17,-4.5],[-10,17,4.5],1.4),l(n,[[9,21,2.5],[8.5,16.5,4.6]],1.2),l(n,[[8.5,16.5,4.6],[9.5,8,4.4],[8.5,0,4.4]],1.1),l(n,[[-10,17,4.5],[-8.5,8.5,4.3],[-10,0,4.3]],1.1),l(n,[[8.5,0,4.4],[10.5,0,4.4]],1.2),l(n,[[-10,0,4.3],[-8,0,4.3]],1.2),v(n,[17.5,19.5,0],[4.2,5.2,3.6]),l(n,[[15,15,2.2],[19.5,13.5,1.8]],.9),l(n,[[19.5,15.5,2.2],[22.5,10,3.6],[26.5,7,4.6],[30.5,8,4.1],[33,11.5,2.6],[33.5,14.5,1.4]],1.15,.7)},E=n=>{d(n,[[-36,4,0],[-29,6.5,0],[-20,10,0],[-10,14,0]],.7,1.1),d(n,[[-10,14,0],[0,16,0],[10,15,0]],1.2),d(n,[[10,15,0],[17,21,0],[22.5,28.5,0],[26,35.5,0]],1.1,.8),v(n,[28.6,37,0],[3,2,1.8]),R(n,[-7,-4.5,-2,.5,3,5.5,8],a=>15.6-Math.abs(a)*.12,4.6,9.5),w(n,[-9,14,-4],[-9,14,4],1.3),l(n,[[-9,14,4],[-7.5,7,4],[-9,0,4]],1.15),l(n,[[8,15,3.6],[9,7.5,3.8],[8,0,3.8]],1.1)},i=n=>{d(n,[[-30,16,0],[-20,17,0],[-10,19,0]],.7,1.1),d(n,[[-10,19,0],[0,20,0],[8,22,0]],1.25),d(n,[[8,22,0],[12,26,0],[14,29,0]],1.15),v(n,[19.5,30,0],[6,3.6,2.8]),l(n,[[14.5,27,1.8],[24.5,26,1.2]],.85),R(n,[-4,-1,2,5],a=>19.8+a*.25,3.8,8),w(n,[-7,19,-3.5],[-7,19,3.5],1.4),l(n,[[-7,19,3.5],[-3,11,3.8],[-7.5,5,3.8],[-5,0,3.8]],1.3),l(n,[[-5,0,3.8],[-1,0,3.8]],1.15),l(n,[[7,20,2.5],[9.5,17,2.8],[11,17.5,2.8]],.6)},u=(n,a)=>{let f=null;for(let m=0;m<=Math.PI*5;m+=.25){const b=a*(.18+.82*m)/(Math.PI*5),y=[Math.cos(m)*b,0,Math.sin(m)*b];f&&w(n,f,y,.5+.45*(m/(Math.PI*5))),f=y}},c=(n,a,f)=>{const[m,b,y,M]=[Math.sin(a),Math.cos(a),Math.sin(f),Math.cos(f)],z=[[b*M,-m,b*y],[m*M,b,m*y],[-y,0,M]];return{k:1,at:L=>[0,1,2].map(G=>n[G]+L[0]*z[0][G]+L[1]*z[1][G]+L[2]*z[2][G]),back:L=>z.map(G=>(L[0]-n[0])*G[0]+(L[1]-n[1])*G[1]+(L[2]-n[2])*G[2])}},g=(n,a,f)=>{for(let m=Math.floor(n[1]-a);m<=n[1]+a;m++)for(let b=Math.floor(n[2]-a);b<=n[2]+a;b++)for(let y=Math.floor(n[0]-a);y<=n[0]+a;y++)f(y,m,b)},A=20,N=n=>{g(n.at([0,0,0]),A+2,(a,f,m)=>{const[b,y,M]=n.back([a,f,m]),z=Math.hypot(b,M),L=Math.hypot(z,y-3),G=1-(z/A)**2;if(L<7&&y>1.5)P(a,f,m);else if(z<=A&&y<=1+4*G&&y>=-.8-3.2*G){const Z=(Math.atan2(M,b)/(2*Math.PI)+.5)*12,$=z>A-1.7&&Math.abs(Z%1-.5)<.2,Te=Math.abs(z-9.5)<.5||Math.abs(z-15)<.5||z>9.5&&Z%1<.1;o.layer=$?F.LAMP:F.METAL,o.shade=$?Math.floor(Z)&3:Te?0:3,S(a,f,m)}else L<=8.5&&y>0&&(o.layer=F.GLASS,S(a,f,m))}),Object.assign(o,{layer:F.BONE,shade:-1,air:!1})},ce=[[0,13.5,0],[0,-6.5,0]];for(let n=0;n<12;n++){const[a,f]=[Math.cos(n*Math.PI/6),Math.sin(n*Math.PI/6)];ce.push([a*(A+2),0,f*(A+2)]),n%3!==2&&ce.push([a*11,n%3?-6:8,f*11],[a*11,n%3?8:-6,f*11])}const J=n=>{const a=y=>fe(900+n*100+y,77,t),f=p(0,0,0,0);let m=10;const b=(y,M,z)=>{let L=y;for(let G=0;G<z;G++){M+=(a(m++)-.5)*1.6;const Z=[L[0]+Math.cos(M)*5,L[1]+.5+a(m++)*3,L[2]+Math.sin(M)*5];w(f,L,Z,.6+.5*a(m++)),a(m++)<.3&&v(f,Z,[1.7,1.5,1.7]),z>5&&G%3===2&&b(Z,M+(a(m++)<.5?1.3:-1.3),4),L=Z}};b([Q+16+a(1)*(O-32),W+45+a(2)*35,ee+16+a(3)*(O-32)],a(4)*6.28,9)},K=1/2,j=(n,a,f,m,b,y=1)=>{const M=C/2,z=B/2,L=O/2,G=b?Math.PI:0;return n===0?p(M+a,W+m,z+L-f,G,K,y):n===1?p(M+L-f,W+m,z+a,Math.PI/2+G,K,y):n===2?p(M+a,W+m,z-L+f,G,K,y):p(M-L+f,W+m,z+a,Math.PI/2+G,K,y)},U=n=>fe(n,77,t),xe=U(1)<.5?0:1;_(j(xe,(U(2)-.5)*60,.8,30+U(4)*60,U(5)<.5,.12));const V=[i,E,_,E,_];for(let n=0;n<V.length;n++){const a=f=>fe(200+n*10+f,77,t);V[n](j(Math.floor(a(1)*4),(a(2)-.5)*70,4+a(3)*a(3)*36,4+a(4)*90,a(5)<.5))}for(let n=0;n<12;n++){const a=p(Q+8+U(20+n)*(O-16),W+6+U(40+n)*(O-14),ee+8+U(60+n)*(O-16),U(80+n)*6.28);u(a,1.5+U(100+n)*2)}o.layer=F.GOLD;for(let n=0;n<3;n++)J(n);const Ve=(n,a,f,m)=>n===2?[C/2+a,W+m,ee+f]:[Q+f,W+m,B/2+a],we=U(300)<.5?2:3,Ue=.25+U(301)*.2,_e=U(302)*6.28,pt=we===2?Math.sin(_e):Math.cos(_e),T=A*Math.sqrt(1-(Math.sin(Ue)*pt)**2),he=c(Ve(we,-5+U(303)*35,T+5+U(308)*7,38+U(304)*46),Ue,_e);N(he);const Je=new Uint32Array(oe[0]*oe[1]*oe[2]);s={cells:Je,has:(n,a,f)=>n>=0&&a>=0&&f>=0&&n<oe[0]&&a<oe[1]&&f<oe[2],at:(n,a,f)=>n+oe[0]*(f+oe[2]*a)},o.air=!0,N(c(zn,0,0)),s=r;const sn=he.at([0,0,0]),Kn=[[1,0,0],[0,1,0],[0,0,1]].map(n=>he.at(n).map((a,f)=>a-sn[f])),Zn=ce.map(n=>he.at(n).map(Math.round)).filter(([n,a,f])=>n>=0&&a>=0&&f>=0&&n<C&&a<Ke&&f<B).map(([n,a,f])=>it(n,a,f));return{saucer:{model:Je,at:sn,axes:Kn,out:we===2?[0,0,-1]:[-1,0,0],probes:Zn},gold:h}}function so(e,t){const o=new Float32Array(C*B*4),r=new Float32Array(C*B*4),s=d=>fe(d,99,t),h=C/2+(s(1)-.5)*34,S=B/2+(s(2)-.5)*34,P=11+s(3)*5,p=[],w=s(4)*Math.PI*2;for(let d=0;d<2;d++){const l=w+d*Math.PI+(s(5+d)-.5)*.9,v=[];for(let R=0;R<=90;R++){const _=R/90,E=_*85,i=(9*Math.sin(_*5.2+s(7+d)*6)+4*Math.sin(_*13+s(9+d)*6))*Math.min(1,_*3),u=h+Math.cos(l)*E-Math.sin(l)*i,c=S+Math.sin(l)*E+Math.cos(l)*i;if(u<Q+10||c<ee+10||u>Q+O-10||c>ee+O-10)break;v.push([u,c,_])}p.push(v)}for(let d=0;d<B;d++)for(let l=0;l<C;l++){const v=(l+C*d)*4;if(!kn(l,d)){o[v+2]=W;continue}const R=P*(.72+.56*Oe(l/9,d/9,t+20)),_=Math.hypot(l-h,d-S);let E=_<R?1.4+5.6*(1-(_/R)**2):0,i=_-R;const u=.8*Oe(l/6,d/6,t+21);for(const g of p)for(const[A,N,ce]of g){const J=Math.hypot(l-A,d-N),K=3.3-1.3*ce+u;J<K&&(E=Math.max(E,.9+2.6*(1-(J/K)**2))),i=Math.min(i,J-K)}const c=Math.round(E);for(let g=ve-c;g<ve;g++)e[it(l,g,d)]=bt;o[v]=c>0?c-.7:0,o[v+2]=ve-c,r[v]=c>0?0:i<12?3:i<22?.9:.5,r[v+1]=ve-c,r[v+2]=1}return{col:o,veg:r}}function ao(e,t=!1){const o=new Uint32Array(C*Ke*B);for(let p=0;p<B;p++)for(let w=0;w<C;w++)if(!(Math.hypot(w+.5-C/2,p+.5-B/2)>jt))for(let d=0;d<W;d++)o[it(w,d,p)]=Qn|F.GROUND_LAYER<<3;const r=16,s=[];for(const[p,w]of no)for(let d=0;d<w;d++)s.push(p);const h=(fe(1,2,e)-.5)*.14,S=(fe(3,4,e)-.5)*.14;for(let p=ee;p<ee+O;p++)for(let w=Q;w<Q+O;w++){const d=h*(w-C/2)+S*(p-B/2)+12*(Oe(w/48,p/48,e)-.5)+3*(Oe(w/13,p/13,e+1)-.5),l=2*Oe(w/7,p/7,e+2),v=Math.abs(Oe(w/30,p/30,e+3)-.5)<.014||Math.abs(Oe(w/22,p/22,e+4)-.5)<.01,R=an(w/11,p/11,e+6),_=an(w/4.5,p/4.5,e+7);for(let E=W;E<ve;E++){const i=E-W+d+r,u=s[Math.max(0,Math.min(s.length-1,Math.floor(i)))],c=Math.floor(fe(Math.floor(i+l),u,e+5)*4),g=E-W+1,A=.55*R(i/4)+.3*_(i/2)+.15*lt(w,E,p,e+8),N=Math.max(0,Math.min(15,Math.round((A-.36)*40)));o[it(w,E,p)]=xt|u<<3|c<<8|(v?1024:0)|N<<12|g<<16}}const P=oo(o,e);if(t){for(let w=0;w<o.length;w++)(o[w]&7)===xt&&(o[w]>>3&31)<8&&(o[w]=bt);const p=new Float32Array(C*B*4);for(let w=2;w<p.length;w+=4)p[w]=W;return{cells:o,col:p,veg:new Float32Array(C*B*4),...P}}return{cells:o,...so(o,e),...P}}const ro=140,et={rain:"M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25",water:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",wind:"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2",scratch:"M14.55 6.91L17.94 3.51C18.64 2.81 19.78 2.81 20.49 3.51C21.19 4.22 21.19 5.36 20.49 6.06L17.09 9.45ZM15.82 8.18L12.85 11.15M9.03 7.33L16.67 14.97L14.12 17.52C11.15 20.49 7.33 20.91 3.51 20.49C3.09 16.67 3.51 12.85 6.48 9.88ZM10.64 13.36L7.42 16.58",dynamite:"M11.4 7.8L16.2 12.6L8.2 20.6C7.6 21.2 6.5 21.2 5.9 20.6L3.4 18.1C2.8 17.5 2.8 16.4 3.4 15.8ZM9.0 10.2L13.8 15.0M6.1 13.1L10.9 17.9M13.8 10.2C15.3 8.7 15.1 6.7 16.9 5.8M19.2 2.2V4.0M19.2 6.8V8.6M16.0 5.4H17.8M20.6 5.4H22.4"},Ht='width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"',io=e=>`<svg ${Ht}><path d="${e}"/></svg>`,Gt=(e,t)=>`<span class="tip" aria-hidden="true">${e}${t?`<kbd>${t}</kbd>`:""}</span>`,lo=e=>`<svg ${Ht}><circle cx="12" cy="12" r="10.5" class="empty"/><circle cx="12" cy="12" r="${(2+8.5*e).toFixed(2)}" fill="currentColor" stroke="none"/></svg>`,rn="M1.5 20.5 L22.5 4.5 L22.5 20.5 Z",co=e=>`<svg ${Ht} class="ramp"><clipPath id="force-fill"><rect x="0" y="0" width="${(1.5+21*e).toFixed(2)}" height="24"/></clipPath><path d="${rn}" class="empty"/><path d="${rn}" clip-path="url(#force-fill)" fill="currentColor"/></svg>`;function fo(e,t,o,r){const s=new Map,h=new Map,S=[],P=new Map;for(const c of t){const g=document.createElement("div");g.className="knob",g.innerHTML=`<button aria-label="${c.name}">${io(c.icon)}${Gt(c.name,c.key)}</button>`,e.append(g);const A=g.querySelector("button");s.set(c.id,A),h.set(c.id,g),A.addEventListener("pointerdown",N=>N.preventDefault()),A.addEventListener("click",()=>r.select(c.id))}const p=document.createElement("span");p.className="sep",e.append(p);for(const c of o){const g=document.createElement("div");g.className="knob dial",g.innerHTML=`<button aria-label="${c.name}"><span class="face"></span>${Gt(c.name,c.key)}</button><div class="gauge"><div class="track"><span class="fill"></span><b></b></div></div>`,e.append(g);const A=g.querySelector("button"),N=g.querySelector(".face"),ce=g.querySelector(".gauge"),J=g.querySelector(".track"),K=g.querySelector("b");let j=!1,U=!1,xe=!1,V={x:0,y:0,t:0,moved:!1,wasPinned:!1};const Ve=()=>{const T=c.get();N.innerHTML=c.face(T),J.style.setProperty("--t",String(T)),K.textContent=String(Math.round(T*100))},we=()=>{const T=j||U||xe;ce.classList.toggle("open",T),ce.classList.toggle("pinned",U),A.classList.toggle("held",T)},Ue=T=>{c.put(Math.min(1,Math.max(0,T))),Ve()};Ve(),S.push(Ve),P.set(c.name,T=>{xe=T,we()}),A.addEventListener("pointerdown",T=>{T.preventDefault();try{A.setPointerCapture(T.pointerId)}catch{}V={x:T.clientX,y:T.clientY,t:c.get(),moved:!1,wasPinned:U},j=!0,we()}),A.addEventListener("pointermove",T=>{if(!j)return;const he=T.clientX-V.x,Je=T.clientY-V.y;Math.abs(he)+Math.abs(Je)>4&&(V.moved=!0),V.moved&&Ue(V.t+(he-Je)/ro)});const _e=()=>{j&&(j=!1,U=!V.moved&&!V.wasPinned,we())};A.addEventListener("pointerup",_e),A.addEventListener("pointercancel",_e),A.addEventListener("wheel",T=>{T.preventDefault(),Ue(c.get()-Math.sign(T.deltaY)*.02)},{passive:!1});const pt=T=>{const he=J.getBoundingClientRect();Ue(1-(T.clientY-he.top)/he.height)};J.addEventListener("pointerdown",T=>{try{J.setPointerCapture(T.pointerId)}catch{}pt(T)}),J.addEventListener("pointermove",T=>{J.hasPointerCapture(T.pointerId)&&pt(T)}),window.addEventListener("pointerdown",T=>{U&&!g.contains(T.target)&&(U=!1,we())}),window.addEventListener("keydown",T=>{U&&T.key==="Escape"&&(U=!1,we())})}const w="21615587",d=c=>{const g=Math.max(1,Math.round(c));if(g<60)return`${g} ${g===1?"second":"seconds"}`;if(g<3600){const N=Math.floor(g/60);return`${g%60?"over ":""}${N} ${N===1?"minute":"minutes"}`}const A=Math.floor(g/3600);return`${g%3600?"over ":""}${A} ${A===1?"hour":"hours"}`},l=document.createElement("a");l.className="heap",l.target="_blank",l.rel="noopener noreferrer",l.setAttribute("aria-label","Claim gift via DM to @theo_t"),l.setAttribute("aria-hidden","true"),l.tabIndex=-1;const v=()=>{const c=r.gold(),g=`I found ${c} ${c===1?"voxel":"voxels"} gold after digging pixels for ${d(r.elapsed())} (screenshot attached)`;l.href=`https://x.com/messages/compose?recipient_id=${w}&text=${encodeURIComponent(g)}`};l.addEventListener("pointerdown",c=>{c.stopPropagation(),v()}),l.addEventListener("pointerenter",v),l.addEventListener("focus",v),e.append(l);const R=13,_=9,E=5,i=c=>{const g=new Array(R).fill(0);let A="";for(let K=0;K<c;K++){let j=(R>>1)+K*7%3-1;for(;;){const xe=j>0?g[j-1]:99,V=j<R-1?g[j+1]:99;if(Math.min(xe,V)>=g[j])break;j+=xe<V||xe===V&&K%2===0?-1:1}const U=_-1-Math.min(g[j]++,_-1);A+=`<rect x="${j*E}" y="${U*E}" width="${E}" height="${E}" fill="${["#eeb02a","#d99a1c","#f6cf5a"][K*5%3]}"/>`}const N=Math.max(1,...g),ce=N*E,J=(_-N)*E;v(),l.innerHTML=`<svg width="${R*E}" height="${ce}" viewBox="0 ${J} ${R*E} ${ce}" shape-rendering="crispEdges">${A}</svg>`+Gt("Claim gift","@theo_t"),l.classList.toggle("some",c>0),l.setAttribute("aria-hidden",String(c===0)),l.tabIndex=c>0?0:-1},u=()=>{for(const c of S)c()};return{select(c){for(const[g,A]of s)A.classList.toggle("on",g===c);u()},reveal(c,g){const A=h.get(c);if(!A)return;A.classList.toggle("locked",!g),A.setAttribute("aria-hidden",String(!g));const N=s.get(c);N&&(N.tabIndex=g?0:-1)},refresh:u,heap:i,peek(c,g){P.get(c)?.(g)}}}const Ze=new URLSearchParams(location.search),Mn=Ze.has("clean");document.body.classList.toggle("clean",Mn);const Rt=Ze.has("debug");function ut(e){if(!Rt)return;let t=document.querySelector("#debug");t||(t=document.createElement("pre"),t.id="debug",t.style.cssText="position:fixed;z-index:9;left:8px;right:8px;top:90px;margin:0;font:10px/1.3 monospace;white-space:pre-wrap;color:#b00;pointer-events:none",document.body.append(t)),t.textContent+=e+`
`}window.addEventListener("error",e=>ut("error: "+e.message));window.addEventListener("unhandledrejection",e=>ut("rejected: "+(e.reason?.message??e.reason)));const ho="#e8e3da",I={RAIN:1,HOSE:2,WIND:3,SCRATCH:4,DYNAMITE:5},q={steps:4,erode:.1,calm:.1,minFlow:.004,evap:4e-4,rainRate:.006,hoseRate:.55,scratchRate:.9,gravity:.2,inertia:.9,cling:.06,windRate:.006,supportLimit:420,pitch:30*Math.PI/180,lower:.2};window.P=q;const X=document.querySelector("#c");function An(e){const t=document.createElement("p");throw t.className="note",t.textContent=e,document.body.append(t),new Error(e)}navigator.gpu||An("This one needs WebGPU: a recent Chrome, Edge or Safari.");const Sn=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});Sn||An("No WebGPU adapter here.");const x=await Sn.requestDevice();x.addEventListener("uncapturederror",e=>ut("gpu: "+e.error.message));Rt&&ut(`storage buffers per stage: ${x.limits.maxStorageBuffersPerShaderStage}`);const Rn=X.getContext("webgpu"),En=navigator.gpu.getPreferredCanvasFormat();Rn.configure({device:x,format:En,alphaMode:"opaque"});const ln=e=>[1,3,5].map(t=>(parseInt(e.slice(t,t+2),16)/255).toFixed(4)),cn=Array.from({length:32},(e,t)=>eo[t]??to[t]??{color:"#ff00ff",soft:0}),Dt=e=>Object.entries(e).map(([t,o])=>`const ${t} = ${o}u;`).join(`
`),Tn=`
const GX: i32 = ${C};
const GY: i32 = ${Ke};
const GZ: i32 = ${B};
const CUBE: i32 = ${O};
const TOP: i32 = ${ve};
const LO = vec3i(${Q}, ${W}, ${ee});
const TRAY: f32 = ${jt};
const MODEL = vec3i(${oe});
const MODEL_AT = vec3f(${zn.map(e=>e.toFixed(1))});
${Dt(ot)}
${Dt(F)}
${Dt(I)}
const PAL = array<vec3f, 32>(${cn.map(e=>`vec3f(${ln(e.color)})`).join(", ")});
const SOFT = array<f32, 32>(${cn.map(e=>e.soft.toFixed(3)).join(", ")});
const BG = vec3f(${ln(ho)});
`,uo=Math.max(0,Math.ceil(jt-C/2)+1),Xt=x.createShaderModule({code:`const BEYOND: i32 = 0;
`+Tn+xn+Vn}),kt=x.createShaderModule({code:`const BEYOND: i32 = ${uo};
`+Tn+xn+Jn});if(Rt)for(const[e,t]of[["sim",Xt],["render",kt]])t.getCompilationInfo().then(o=>o.messages.forEach(r=>ut(`${e}.wgsl ${r.type} line ${r.lineNum}: ${r.message}`)));for(const[e,t]of[["sim",Xt],["render",kt]])t.getCompilationInfo().then(o=>{for(const r of o.messages)console[r.type==="error"?"error":"warn"](`${e}.wgsl ${r.lineNum}:${r.linePos} ${r.message}`)});const Ye=x.createBuffer({size:C*Ke*B*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=new Float32Array(60),Kt=x.createBuffer({size:H.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),Ut=new Uint32Array(4),On=x.createBuffer({size:Ut.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),Et=x.createBuffer({size:48,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),gt=x.createBuffer({size:48,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),ct=new ArrayBuffer(816),mt=new Uint32Array(ct),ke=new Float32Array(ct),zt=x.createBuffer({size:ct.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),po=x.createBuffer({size:C*B*4,usage:GPUBufferUsage.STORAGE}),Mt=x.createBuffer({size:C*B*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Pn=x.createBuffer({size:C*B*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Ln=x.createBuffer({size:C*B*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Cn=x.createBuffer({size:C*B*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),Zt=x.createBuffer({size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Gn=x.createBuffer({size:oe[0]*oe[1]*oe[2]*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),_t=40,tt=x.createBuffer({size:(_t+4)*4,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),Vt=Ze.has("bare");let De,je=!1,$e=null,Jt=1,Se=0,fn=-1,At=!1,Qt=0,en=0;const Ft=16,Wt=8,hn=1.25,Fe=[88,W+18.9,16];let He=!1,Re=!1,te,se=[],ae=[],ft=[],Bt=!1,Ae=0;const dn=new Float32Array(C*B*4);function Tt(e=Math.random()*1e9|0){const t=ao(e,Vt);De=t.saucer,Jt=Math.max(1,t.gold),je=!1,$e=null,Se=0,At=!1,Qt=0,en=0,He=!1,Re=!1,se=[],ae=[],ft=[],Ae=0,te&&(te.reveal(I.DYNAMITE,!1),D===I.DYNAMITE&&Ie(I.RAIN)),x.queue.writeBuffer(Gn,0,De.model),x.queue.writeBuffer(Zt,0,new Uint32Array(4)),x.queue.writeBuffer(Ye,0,t.cells),x.queue.writeBuffer(Mt,0,t.col),x.queue.writeBuffer(Pn,0,dn),x.queue.writeBuffer(Ln,0,dn,0,C*B),x.queue.writeBuffer(Cn,0,t.veg)}Tt(Number(Ze.get("seed")??19));function Dn(e,t){const o=x.createBindGroupLayout({entries:t.map(([,s],h)=>({binding:h,visibility:e,buffer:{type:s}}))}),r=x.createBindGroup({layout:o,entries:t.map(([s],h)=>({binding:h,resource:{buffer:s}}))});return{layout:o,group:r}}const{layout:go,group:wt}=Dn(GPUShaderStage.COMPUTE,[[Ye,"storage"],[Kt,"uniform"],[On,"uniform"],[Et,"storage"],[po,"storage"],[Mt,"storage"],[Pn,"storage"],[Ln,"storage"],[Cn,"storage"],[Zt,"storage"],[zt,"uniform"]]),mo=x.createPipelineLayout({bindGroupLayouts:[go]}),me=e=>x.createComputePipeline({layout:mo,compute:{module:Xt,entryPoint:e}}),wo=me("skyline"),vo=me("pickMain"),yo=me("sim"),bo=me("support"),xo=me("flow"),ko=me("settle"),zo=me("grow"),Mo=me("stamp"),Ao=me("blast"),So=me("blastCol"),{layout:Ro,group:Eo}=Dn(GPUShaderStage.FRAGMENT,[[Ye,"read-only-storage"],[Kt,"uniform"],[Et,"read-only-storage"],[Gn,"read-only-storage"],[zt,"uniform"]]),To=x.createRenderPipeline({layout:x.createPipelineLayout({bindGroupLayouts:[Ro]}),vertex:{module:kt,entryPoint:"vs"},fragment:{module:kt,entryPoint:"fs",targets:[{format:En}]}});let ie=1,re=1;const Bn="codevember-19-detail";let at="med";try{const e=localStorage.getItem(Bn);(e==="low"||e==="med"||e==="high")&&(at=e)}catch{}function tn(){const e=window.devicePixelRatio,t=Math.max(2,Math.round(e)),o=Number(Ze.get("px"))||{low:t*2,med:t,high:1}[at];ie=Math.max(1,Math.ceil(window.innerWidth*e/o)),re=Math.max(1,Math.ceil(window.innerHeight*e/o)),X.width=ie,X.height=re,X.style.width=`${ie*o/e}px`,X.style.height=`${re*o/e}px`}window.addEventListener("resize",tn);tn();let Ee=Math.PI/4,ht=q.pitch,Be=1;const Ce=[C/2,W+O*.42,B/2],k={o:[0,0,0],r:[1,0,0],u:[0,1,0],f:[0,0,-1],inv:1},rt=e=>Math.abs(e)<1e-5?1e-5:e;function Oo(e){const t=Math.cos(ht),o=Math.sin(ht),r=Math.cos(e),s=Math.sin(e);k.f=[rt(-t*s),-o,rt(-t*r)],k.r=[r,0,-s],k.u=[-s*o,t,-r*o],k.o=[Ce[0]-k.f[0]*500,Ce[1]-k.f[1]*500,Ce[2]-k.f[2]*500];const h=ie<re*.8,S=h?Math.min(ie/(O*1.8),re/(O*1.9)):Math.min(ie/(C*1.08),re/(O*2.15));k.inv=1/(S*Be);let P=0;for(let l=0;l<4;l++){const v=((l&1)*2-1)*(O/2),R=((l>>1)*2-1)*(O/2);P=Math.max(P,-(v*k.u[0]+(W-Ce[1])*k.u[1]+R*k.u[2]))}const p=ie/Math.max(1,window.innerWidth),w=re/2-100*p-P/k.inv,d=Mn?0:Math.max(0,Math.min(re*(h?.08:q.lower),w))*k.inv;k.o=[k.o[0]+k.u[0]*d,k.o[1]+k.u[1]*d,k.o[2]+k.u[2]*d]}function nn(e,t){const o=X.getBoundingClientRect(),r=((e-o.left)/o.width*ie-ie/2)*k.inv,s=(re/2-(t-o.top)/o.height*re)*k.inv;return[0,1,2].map(h=>k.o[h]+k.r[h]*r+k.u[h]*s)}function $t(e,t,o){let r=-1/0,s=1/0;for(let h=0;h<3;h++){const S=(t[h]-e[h])/k.f[h],P=(o[h]-e[h])/k.f[h];r=Math.max(r,Math.min(S,P)),s=Math.min(s,Math.max(S,P))}return r<s&&s>0?r:1/0}function Po(e){return $t(e,[Q-6,0,ee-6],[Q+O+6,ve+6,ee+O+6])<1/0}function Nn(e){if(He)return!1;const t=$t(e,[Fe[0]-5.2,Fe[1],Fe[2]-3],[Fe[0]+5.2,Fe[1]+6.5,Fe[2]+3]);if(!Number.isFinite(t))return!1;const o=$t(e,[Q,W,ee],[Q+O,ve,ee+O]);return t<o}let D=I.RAIN,be=!1,de=!1,on=!1,Y={x:0,y:0},yt={x:0,y:0},pe=null,Ge=null;const un=/Mac|iPhone|iPad|iPod/.test(navigator.platform||navigator.userAgent),We=document.querySelector(".size-ring"),Xe=[{id:I.RAIN,name:"Rain",icon:et.rain,min:5,max:45,start:24,force:.75,rate:e=>q.rainRate*e**.3},{id:I.WIND,name:"Wind",icon:et.wind,min:12,max:90,start:40,force:.75,rate:e=>q.windRate*e},{id:I.HOSE,name:"Hose",icon:et.water,min:2,max:16,start:7,force:.75,rate:e=>q.hoseRate*e},{id:I.SCRATCH,name:"Scratch",icon:et.scratch,min:1.5,max:14,start:11.2,force:.6,rate:e=>q.scratchRate*e},{id:I.DYNAMITE,name:"Dynamite",icon:et.dynamite,min:6,max:32,start:16,force:.75,rate:e=>e}],ye=e=>Xe.find(t=>t.id===e),ge=[0,0,0,0,0,0],le=[0,0,0,0,0,0];for(const e of Xe)ge[e.id]=e.force,le[e.id]=e.start;const In="codevember-19-brush";try{const e=JSON.parse(localStorage.getItem(In)??"null");for(const{id:t,min:o,max:r}of Xe)e?.force?.[t]>=0&&e.force[t]<=1&&e.force[t]!==.4&&(ge[t]=e.force[t]),!(t===I.SCRATCH&&[3,6].includes(e?.radius?.[t])||t===I.HOSE&&e?.radius?.[t]===4||t===I.RAIN&&e?.radius?.[t]===13)&&e?.radius?.[t]>=o&&e.radius[t]<=r&&(le[t]=e.radius[t])}catch{}const St=()=>{try{localStorage.setItem(In,JSON.stringify({force:ge,radius:le}))}catch{}},Lo=e=>Math.log(le[e]/ye(e).min)/Math.log(ye(e).max/ye(e).min),Co=(e,t)=>{le[e]=ye(e).min*(ye(e).max/ye(e).min)**t},pn=e=>10**((ge[e]-.4)/.6);function Un(){if(!pe)return;const e=X.getBoundingClientRect(),t=le[D]/k.inv*(e.width/ie);We.style.display="block",We.style.width=We.style.height=`${t*2}px`,We.style.left=`${pe.x}px`,We.style.top=`${pe.y}px`}te=fo(document.querySelector("#bar"),Xe.map(({id:e,name:t,icon:o},r)=>({id:e,name:t,icon:o,key:String(r+1)})),[{name:"Size",key:un?"⌘ drag":"Ctrl drag",face:lo,get:()=>Lo(D),put:e=>{Co(D,e),St()}},{name:"Force",key:un?"⇧⌘ drag":"Shift Ctrl drag",face:co,get:()=>ge[D],put:e=>{ge[D]=e,St()}}],{select:Ie,elapsed:()=>en,gold:()=>Se});function Ie(e){e===I.DYNAMITE&&!He||(D=e,te.select(e))}function Ot(){He||(He=!0,Re=!1,te.reveal(I.DYNAMITE,!0),Ie(I.DYNAMITE),Ne(!1))}te.reveal(I.DYNAMITE,!1);Ie(D);{const e=document.querySelector(".settings"),t=e.querySelector(".gear"),o=e.querySelector(".menu"),r=h=>{o.hidden=!h,t.classList.toggle("on",h),t.setAttribute("aria-expanded",String(h))};t.addEventListener("pointerdown",h=>h.preventDefault()),t.addEventListener("click",()=>r(o.hidden)),window.addEventListener("pointerdown",h=>{!o.hidden&&!e.contains(h.target)&&r(!1)}),window.addEventListener("keydown",h=>{h.key==="Escape"&&r(!1)});const s=o.querySelector("[data-detail]");s.value=at,s.addEventListener("change",()=>{at=s.value;try{localStorage.setItem(Bn,at)}catch{}tn(),s.blur()}),o.querySelector('[data-action="reset"]').addEventListener("click",()=>{Tt(),r(!1)})}const Go=40,_n=e=>({x:e.clientX,y:e.clientY-(e.pointerType==="touch"?Go:0)}),Do=90,Bo=.15,ue=new Map;let ne=null,dt=!1,qt=0,Pe=null,Le=null;const Fn=e=>Math.min(5,Math.max(.6,e));function Pt(e,t){At=!0,ft.length<6&&ft.push({x:e,y:t})}function Wn(){const[e,t]=[...ue.values()];return{x:(e.x+t.x)/2,y:(e.y+t.y)/2,d:Math.hypot(t.x-e.x,t.y-e.y),a:Math.atan2(t.y-e.y,t.x-e.x)}}function gn(e,t){Ee-=e*.008,ht=Math.min(1.2,Math.max(.2,ht+t*.005))}X.addEventListener("pointerdown",e=>{try{X.setPointerCapture(e.pointerId)}catch{}if(e.pointerType==="touch"){if(e.isPrimary&&(ue.clear(),dt=!1,ne=null),ue.set(e.pointerId,{x:e.clientX,y:e.clientY}),ue.size>1){Lt(),Pe=null,Le=null,be=!1,dt=!0,ne=ue.size===2?{...Wn(),twist:0}:null;return}qt=performance.now()+Do}Y=_n(e),be=!0,yt={x:e.clientX,y:e.clientY};const t=nn(Y.x,Y.y);(e.metaKey||e.ctrlKey)&&e.shiftKey?(Ge={x:e.clientX,t:ge[D]},te.peek("Force",!0),Ne(!0)):e.metaKey||e.ctrlKey?(pe={x:e.clientX,y:e.clientY,r:le[D]},Un(),Ne(!0)):e.button===0&&Nn(t)?e.pointerType==="touch"?Le={x:e.clientX,y:e.clientY}:Ot():e.button===0&&Po(t)?D===I.DYNAMITE?e.pointerType==="touch"?Pe={x:e.clientX,y:e.clientY}:Pt(Y.x,Y.y):de=!0:on=!0});X.addEventListener("pointermove",e=>{if(ue.has(e.pointerId)&&ue.set(e.pointerId,{x:e.clientX,y:e.clientY}),dt){if(!ne||ue.size!==2)return;const t=Wn();gn(t.x-ne.x,t.y-ne.y),Be=Fn(Be*t.d/Math.max(1,ne.d));const o=Math.atan2(Math.sin(t.a-ne.a),Math.cos(t.a-ne.a)),r=ne.twist+o;Math.abs(ne.twist)>Bo&&(Ee+=o),ne={...t,twist:r};return}if(Ge){ge[D]=Math.min(1,Math.max(0,Ge.t+(e.clientX-Ge.x)/160)),te.refresh();return}if(pe){const t=Math.exp((e.clientX-pe.x)/160);le[D]=Math.min(ye(D).max,Math.max(ye(D).min,pe.r*t)),Un(),te.refresh();return}if(on){Re=!1,Ne(e.metaKey||e.ctrlKey),gn(e.clientX-yt.x,e.clientY-yt.y),yt={x:e.clientX,y:e.clientY};return}be=!0,Y=_n(e),Re=Nn(nn(Y.x,Y.y)),Ne(e.metaKey||e.ctrlKey)});const Lt=()=>{de=!1,on=!1,pe&&(We.style.display="none",St()),Ge&&(te.peek("Force",!1),St()),pe=null,Ge=null};function Ne(e){X.style.cursor=pe||Ge||e?"ew-resize":Re?"pointer":""}window.addEventListener("keydown",e=>{(e.key==="Meta"||e.key==="Control")&&Ne(!0)});window.addEventListener("keyup",e=>{(e.key==="Meta"||e.key==="Control")&&Ne(!1)});const $n=e=>{if(ue.delete(e.pointerId),!dt)return Le&&e.type==="pointerup"&&Math.hypot(e.clientX-Le.x,e.clientY-Le.y)<20?Ot():Pe&&e.type==="pointerup"&&Math.hypot(e.clientX-Pe.x,e.clientY-Pe.y)<20&&Pt(Y.x,Y.y),Le=null,Pe=null,Lt();Le=null,Pe=null,ne=null,ue.size||(dt=!1)};X.addEventListener("pointerup",$n);X.addEventListener("pointercancel",$n);X.addEventListener("pointerleave",()=>{de||(be=!1,Re=!1)});X.addEventListener("contextmenu",e=>e.preventDefault());X.addEventListener("wheel",e=>{e.preventDefault(),Be=Fn(Be*Math.exp(-e.deltaY*.0015))},{passive:!1});window.addEventListener("keydown",e=>{e.metaKey||e.ctrlKey||e.altKey||(Xe[Number(e.key)-1]?Ie(Xe[Number(e.key)-1].id):e.key==="r"||e.key==="R"?Tt():e.key==="ArrowLeft"?Ee-=Math.PI/2:e.key==="ArrowRight"&&(Ee+=Math.PI/2))});let Yt=0;const ze={frames:0,at:{x:0,y:0},bite:1};let vt=q.calm,Nt=Ee,mn=0,It=!1;const wn=49,No=e=>(e&7)===ot.AIR||(e&7)===ot.WATER||(e&7)===ot.PLANT;function Io(){if(It)return;It=!0;const e=De,t=x.createCommandEncoder();e.probes.forEach((o,r)=>t.copyBufferToBuffer(Ye,o*4,tt,r*4,4)),t.copyBufferToBuffer(Zt,0,tt,_t*4,16),x.queue.submit([t.finish()]),tt.mapAsync(GPUMapMode.READ).then(()=>{const o=new Uint32Array(tt.getMappedRange().slice(0));if(tt.unmap(),It=!1,e!==De)return;const r=Se;Se=o[_t],Se>r&&(en=Qt);const s=e.probes.filter((h,S)=>No(o[S])).length;!Vt&&s>=e.probes.length*.8&&qn()})}function qn(){je||(je=!0,$e=performance.now())}const qe=e=>{const t=Math.hypot(...e)||1;return[e[0]/t,e[1]/t,e[2]/t]},vn=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];function Uo(e){const{at:t,axes:o,out:r}=De,s=Math.min(1,e/1.8),h=s*s*(3-2*s),S=Math.max(0,e-2.8)**2*420,P=Math.sin(e*45)*.5*(1-h),p=Math.sin(e*6)*.7*h,w=qe([r[0]*.4,1,r[2]*.4]),d=[0,h*10+p,0],l=qe(o[1].map((u,c)=>u+((c===1?1:0)-u)*h)),v=o[0][0]*l[0]+o[0][1]*l[1]+o[0][2]*l[2],R=qe(o[0].map((u,c)=>u-l[c]*v)),_=vn(R,l),E=e*e*1.2,i=R.map((u,c)=>u*Math.cos(E)+_[c]*Math.sin(E));return{at:t.map((u,c)=>u+r[c]*h*56+d[c]+o[0][c]*P+w[c]*S),x:i,y:l,z:vn(i,l)}}let yn=performance.now();function _o(e){const t=(Math.random()-.5)*.45,o=(Math.random()-.5)*.45;return e[1]>.5?qe([t,1,o]):e[1]<-.5?qe([t,-.85,o]):qe([e[0]*.85+t*.35,.55+Math.random()*.15,e[2]*.85+o*.35])}function bn(e){mt[0]=Math.min(se.length,Ft),mt[1]=Math.min(ae.length,Wt),mt[2]=He?0:Re?2:1,mt[3]=0,e?(ke.set([e.pos[0],e.pos[1],e.pos[2],e.radius],4),ke.set([e.force,e.seed&16777215,1,0],8)):(ke.set([0,0,0,0],4),ke.set([0,0,0,0],8));const t=Math.min(se.length,Ft);for(let r=0;r<t;r++){const s=se[r],h=12+r*8;ke.set([s.pos[0],s.pos[1],s.pos[2],Math.max(0,s.fuse/s.fuseMax)],h),ke.set([s.dir[0],s.dir[1],s.dir[2],s.radius],h+4)}const o=Math.min(ae.length,Wt);for(let r=0;r<o;r++){const s=ae[r],h=140+r*8;ke.set([s.pos[0],s.pos[1],s.pos[2],s.age],h),ke.set([s.radius,s.force,s.seed&16777215,0],h+4)}}function Yn(e){const t=Math.min(.05,Math.max(.001,(e-yn)/1e3));if(yn=e,de&&performance.now()>=qt&&(At=!0),At&&!document.hidden&&(Qt+=t),Nt+=(Ee-Nt)*.2,Oo(Nt),Ae>.04){const i=(Math.sin(e*.09)+Math.cos(e*.143))*Ae,u=(Math.cos(e*.11)-Math.sin(e*.171))*Ae;k.o=[k.o[0]+k.r[0]*i+k.u[0]*u,k.o[1]+k.r[1]*i+k.u[1]*u,k.o[2]+k.r[2]*i+k.u[2]*u],Ae*=Math.exp(-t*11)}else Ae=0;const o=[],r=[];for(const i of se)i.fuse-=t,i.fuse<=0?o.push(i):r.push(i);se=r;for(const i of o){ae.push({pos:i.pos,age:0,radius:i.radius,force:i.force,seed:i.seed}),ae.length>Wt&&ae.shift(),Ae=Math.min(4.5,Ae+i.radius/16*(1.1+1.3*i.force));for(const u of se)Math.hypot(u.pos[0]-i.pos[0],u.pos[1]-i.pos[1],u.pos[2]-i.pos[2])<i.radius*1.65&&(u.fuse=Math.min(u.fuse,.12+Math.random()*.08))}for(const i of ae)i.age+=t;ae=ae.filter(i=>i.age<=2.25);const h=(i=>{const u=Math.hypot(...i);return[rt(i[0]/u),rt(i[1]/u),rt(i[2]/u)]})([0,1,2].map(i=>-k.r[i]*.6+k.u[i]*.75-k.f[i]*.3)),S=!Bt&&ft.length>0?ft.shift():null,P=S??Y,p=X.getBoundingClientRect(),w=(Y.x-p.left)/p.width*ie,d=(Y.y-p.top)/p.height*re;let l=de&&performance.now()>=qt;if(D===I.SCRATCH){ze.frames++;const i=Math.hypot(Y.x-ze.at.x,Y.y-ze.at.y)>8;l=l&&ze.frames>=(i?3:7),l&&(ze.frames=0,ze.at={...Y},ze.bite=.7+.6*Math.random())}const v=de&&D===I.RAIN?pn(D):de&&D===I.HOSE?1:q.calm;vt+=(v-vt)*(v>vt?.2:.03),H.set(k.o,0),H.set([...k.r,k.inv],4),H.set(k.u,8),H.set(k.f,12),H.set([ie,re,e/1e3],16),H.set(h,20),H.set(nn(P.x,P.y),24),H.set([w,d,be&&!Re||S?1:0,l?1:0],28),H.set([D,le[D]*(D===I.SCRATCH?ze.bite:1),ye(D).rate(pn(D))],32),H.set([q.gravity,q.minFlow,q.inertia,q.cling],36),H.set([q.erode*vt,q.evap,Vt?1e9:q.supportLimit,je?1:0],40);let R=null;if($e!==null){const i=(performance.now()-$e)/1e3;i>4.4?$e=null:R=Uo(i)}if(H.set(R?[...R.at,1]:[0,0,0,0],44),H.set(R?.x??[1,0,0],48),H.set(R?.y??[0,1,0],52),H.set(R?.z??[0,0,1],56),mn++%20===0&&Io(),Rt){let i=document.querySelector("#state");i||(i=document.createElement("pre"),i.id="state",i.style.cssText="position:fixed;z-index:9;left:8px;top:70px;margin:0;font:10px/1.3 monospace;color:#036;pointer-events:none",document.body.append(i)),i.textContent=`frame ${mn} tool ${D} held ${de} working ${l} hover ${be} sticks ${se.length} blasts ${ae.length} left ${je} gold ${Se}`}const _=Math.min(wn,Math.ceil(Se/Jt*wn));_!==fn&&te.heap(fn=_),x.queue.writeBuffer(Kt,0,H);const E=(i,u)=>{i.setPipeline(u),i.dispatchWorkgroups(C/8,B/8)};if(o.length>0)for(const i of o){bn(i),x.queue.writeBuffer(zt,0,ct);const u=x.createCommandEncoder(),c=u.beginComputePass();c.setBindGroup(0,wt),c.setPipeline(Ao),c.dispatchWorkgroups(O/4,O/4,O/4),E(c,So),c.end(),x.queue.submit([u.finish()])}else bn(),x.queue.writeBuffer(zt,0,ct);{const i=x.createCommandEncoder(),u=i.beginComputePass();if(u.setBindGroup(0,wt),E(u,wo),u.setPipeline(vo),u.dispatchWorkgroups(1),u.end(),S&&(Bt=!0,i.copyBufferToBuffer(Et,0,gt,0,48)),x.queue.submit([i.finish()]),S){const c=De,g=le[I.DYNAMITE],A=ge[I.DYNAMITE];gt.mapAsync(GPUMapMode.READ).then(()=>{const N=new Float32Array(gt.getMappedRange().slice(0));gt.unmap(),Bt=!1,c===De&&N[3]>.5&&(se.push({pos:[N[0],N[1],N[2]],dir:_o([N[8],N[9],N[10]]),fuse:hn,fuseMax:hn,radius:g,force:A,seed:Math.random()*4294967295>>>0}),se.length>Ft&&se.shift())})}}for(let i=0;i<q.steps;i++){Yt++;const u=Math.random()*4|0;Ut.set([u&1,Yt&1,u>>1,Math.random()*4294967295>>>0]),x.queue.writeBuffer(On,0,Ut);const c=x.createCommandEncoder(),g=c.beginComputePass();g.setBindGroup(0,wt),g.setPipeline(yo),g.dispatchWorkgroups(Math.ceil((C/2+1)/4),Math.ceil((Ke/2+1)/4),Math.ceil((B/2+1)/4)),i%2===0&&(g.setPipeline(bo),g.dispatchWorkgroups(O/4,O/4,O/4)),g.end(),x.queue.submit([c.finish()])}{const i=x.createCommandEncoder(),u=i.beginComputePass();u.setBindGroup(0,wt);for(let c=0;c<q.steps;c++)E(u,xo),E(u,ko);E(u,zo),E(u,Mo),u.end(),x.queue.submit([i.finish()])}{const i=x.createCommandEncoder(),u=i.beginRenderPass({colorAttachments:[{view:Rn.getCurrentTexture().createView(),loadOp:"clear",storeOp:"store"}]});u.setPipeline(To),u.setBindGroup(0,Eo),u.draw(3),u.end(),x.queue.submit([i.finish()])}}function jn(e){Yn(e),requestAnimationFrame(jn)}requestAnimationFrame(jn);function Hn(e,t,o=D){o===I.DYNAMITE&&Ot(),Ie(o),Y={x:e,y:t},be=!0,o===I.DYNAMITE?Pt(e,t):de=!0}function Fo(e,t){Ot(),Y={x:e,y:t},be=!0,Pt(e,t)}function Xn(e,t){ge[e]=t,te.refresh()}const Me=Ze.get("hold")?.split(",").map(Number);Me&&(Hn(Me[0]*window.innerWidth,Me[1]*window.innerHeight,Me[2]||I.RAIN),Me[3]>=0&&Xn(D,Me[3]),Me[4]>0&&setTimeout(Lt,Me[4]*1e3));async function nt(e){const t=x.createBuffer({size:e.size,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),o=x.createCommandEncoder();o.copyBufferToBuffer(e,0,t,0,e.size),x.queue.submit([o.finish()]),await t.mapAsync(GPUMapMode.READ);const r=t.getMappedRange().slice(0);return t.destroy(),r}window.erosion={P:q,setTool:Ie,reset:Tt,hold:Hn,plant:Fo,release:Lt,sticks:()=>se.length,blasts:()=>ae.length,turn(e){Ee=e},camera:()=>({yaw:Ee,pitch:ht,zoom:Be}),found:()=>({gold:Se,goldAll:Jt,left:je,flying:$e!==null}),launch:qn,look(e,t,o,r=1){Ce[0]=e,Ce[1]=t,Ce[2]=o,Be=r},level:Xn,brush(e,t){return t!==void 0&&(le[e]=t,te.refresh()),le[e]},tick(e=1){for(let t=0;t<e;t++)Yn(performance.now())},async cells(){return new Uint32Array(await nt(Ye))},async columns(){return new Float32Array(await nt(Mt))},dims:[C,Ke,B],async stats(){const e=new Uint32Array(await nt(Ye)),t=[0,0,0,0,0,0,0,0];for(let v=0;v<e.length;v++)t[e[v]&7]++;const[o,r,s,h,S,P]=t,p=new Float32Array(await nt(Mt));let w=0,d=0,l=0;for(let v=0;v<p.length;v+=4)w+=p[v],p[v]>.25&&d++,l=Math.max(l,p[v]);return{air:o,water:r,sediment:s,rock:h,ground:S,plants:P,volume:w,wet:d,deepest:l,pick:[...new Float32Array(await nt(Et))],step:Yt,held:de,hover:be,tool:D}}};

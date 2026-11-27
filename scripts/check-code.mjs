#!/usr/bin/env node
/**
 * Syntax-check the authored JavaScript that is not covered by tsc.
 * - Spite: day folders, shared modules and shaders (third_party is vendored and skipped).
 * - Das: extracted module/inline scripts; the raw pages are byte-for-byte archive copies.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = new URL('..', import.meta.url).pathname;
const failures = [];
let count = 0;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else if (p.endsWith('.js') || p.endsWith('.mjs')) out.push(p);
  }
  return out;
}

function check(file, module) {
  count += 1;
  const input = readFileSync(file);
  const args = ['--check'];
  if (module) args.unshift('--input-type=module');
  const r = spawnSync(process.execPath, args, { input, encoding: 'utf8' });
  if (r.status !== 0) {
    failures.push({ file: relative(root, file), error: (r.stderr || '').trim().split('\n').slice(0, 2).join(' ') });
  }
}

const spite = [
  ...walk(join(root, 'spite', 'modules')),
  ...walk(join(root, 'spite', 'shaders')),
  ...['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26']
    .flatMap((d) => walk(join(root, 'spite', d))),
].filter((f) => !f.includes(`${join('spite', 'third_party')}`));
for (const f of spite) check(f, true);

const das = walk(join(root, 'dasprinzip', 'extracted')).filter((f) => f.endsWith('.js'));
for (const f of das) check(f, f.endsWith('.module.js'));

console.log(`checked ${count} JS files; ${failures.length} failure(s)`);
for (const f of failures.slice(0, 20)) console.error(`✗ ${f.file}: ${f.error}`);
if (failures.length) process.exit(1);

#!/usr/bin/env node
/**
 * Assemble the deployable static site in site/.
 *
 * Source of truth:
 *   index.html, similar.html, assets/
 *   spite/                       (26-day static source)
 *   dasprinzip/pages + site-src/dasprinzip/index.html
 *   theo/dist                    (built by `pnpm -C theo build`)
 *
 * Nothing in site/ is committed; it is uploaded as a Pages artifact.
 */
import { cpSync, existsSync, mkdirSync, rmSync, copyFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = join(root, 'site');
const skip = new Set(['.DS_Store', 'node_modules', 'dist', '.git']);

function copyDir(from, to) {
  if (!existsSync(from)) throw new Error(`Missing source directory: ${from}`);
  cpSync(from, to, {
    recursive: true,
    filter: (src) => src === from || !skip.has(src.split(/[\\/]/).pop()),
  });
}

function copyFile(from, to) {
  if (!existsSync(from)) throw new Error(`Missing source file: ${from}`);
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(from, to);
}

function countFiles(dir) {
  let files = 0;
  let bytes = 0;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      const r = countFiles(p);
      files += r.files;
      bytes += r.bytes;
    } else {
      files += 1;
      bytes += st.size;
    }
  }
  return { files, bytes };
}

if (!existsSync(join(root, 'theo', 'dist', 'index.html'))) {
  throw new Error('theo/dist is missing. Run `pnpm -C theo build` first.');
}

rmSync(site, { recursive: true, force: true });
mkdirSync(site, { recursive: true });

copyFile(join(root, 'index.html'), join(site, 'index.html'));
copyFile(join(root, 'similar.html'), join(site, 'similar.html'));
copyFile(join(root, 'LICENSE-DAS.md'), join(site, 'LICENSE-DAS.md'));
copyDir(join(root, 'assets'), join(site, 'assets'));
copyDir(join(root, 'spite'), join(site, 'spite'));

copyDir(join(root, 'dasprinzip', 'pages'), join(site, 'dasprinzip'));
copyFile(join(root, 'site-src', 'dasprinzip', 'index.html'), join(site, 'dasprinzip', 'index.html'));

copyDir(join(root, 'theo', 'dist'), join(site, 'theo'));

const stats = countFiles(site);
console.log(`built site: ${stats.files} files, ${(stats.bytes / 1e6).toFixed(1)} MB`);

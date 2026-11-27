# Codevember 2026 — Three Sets

A parallel repository to [`nodevember`](https://github.com/bear20252026/nodevember), holding three Codevember 2026 source sets that were previously in separate places. Nodevember itself is untouched.

## The three sets

| Folder | Author | Days | Size | Licence | Live |
|---|---|---|---|---|---|
| `spite/` | [@spite](https://github.com/spite) | 25 days | 85.3 MB repo / 106 MB checkout | MIT | `/spite/` |
| `theo/` | [@theo_t](https://github.com/ttillberg) | 16 pieces | 302.3 MB repo / 86 MB checkout | MIT | `/theo/` |
| `dasprinzip/` | [Frank Reitberger](https://dasprinzip.com/about.html) | 22 pages of 30 prompts | 51 MB source | no licence | `/dasprinzip/` |

`Das Prinzip` is the new addition: 22 self-contained HTML pages from `02-shatter` to `26-anamorph`, with inline Three.js / WebGPU / TSL, shaders, audio and base64 assets. Days `01-fold`, `03-melt`, `04-tangle` and `05-moss` are not on the author's site; `27–30` are also absent.

## What is here

- `spite/` — Spite's full source tree: 25 day folders, shared modules, assets, screenshots and gallery.
- `theo/` — Theo Tillberg's full source tree: 16 day folders, build scripts, template, docs and assets. `dist/` and `node_modules/` are not committed.
- `dasprinzip/` — Frank Reitberger's public source archive: 22 original HTML pages, extracted JS/CSS/importmaps, and the two base64-embedded Day 16 pages decoded under `embedded/`.
- `docs/` — the assembled GitHub Pages site: landing page, `spite/`, `theo/`, `dasprinzip/` and `similar.html`.
- `SIMILAR.md` and `data/similar-repos.json` — the 2026 similar-repository survey, filtered to sets under 1 GB that are not yet full 30/30.

## Similar repositories (2026-11-27)

The full table is in [`SIMILAR.md`](./SIMILAR.md). Quick read: the closest sets are **Spite** (26/30, 85.3 MB, MIT), **Adam Chernick** (26/30, 771.2 MB, MIT), **AquaNeon** (25/30, 4.3 MB), **Drschizzo** (27/30, 64.1 MB) and **Akella** (20/30, 124.5 MB). All listed sets are under 1 GB; Adam is the largest and closest to the limit.

`Karim Beyrouti` has 16 live pages but no public source repository, so he is not in the table.

## Build Theo locally

```bash
cd theo
corepack pnpm install --frozen-lockfile
THEO_BASE_PREFIX=/codevember-sets/theo corepack pnpm build
```

The default base remains upstream when the variable is unset.

## Publishing

GitHub Pages is set to `main / docs`. `docs/` is the assembled site: `index.html`, `assets/`, `spite/`, `theo/`, `dasprinzip/` and `similar.html`. Rebuild Theo, then copy `theo/dist` into `docs/theo` and refresh the landing page/assets when they change.

No build is needed for Das Prinzip: the pages are already self-contained. They load `three@0.186.1` from jsDelivr, so the live pages need network access for the Three.js modules.

## What is not here

- Git history from the upstream repositories.
- `node_modules/` and Theo's `dist/` build output.
- The Nodevember 2026 days and the Codevember cards that live in `nodevember`; those stay in that repository.

## Rights

Spite and Theo Tillberg are MIT licensed; their `LICENSE` files are kept in each folder. Authors retain copyright. This repository is an attributed mirror, not a relicense.

Das Prinzip's pages carry no licence notice. They remain the author's copyright; this repository mirrors publicly accessible pages for research and archival reference only, with no relicense. Remove or replace on the author's request.

## Upstream

- Spite: https://github.com/spite/codevember-2026
- Theo Tillberg: https://github.com/ttillberg/codevember-2026
- Das Prinzip: https://dasprinzip.com/codevember2026/26-anamorph.html （目录根路径 403，无索引）

## 中文说明

这是 `nodevember` 的平行仓库，现在放三套：Spite 的 25 天、Theo Tillberg 的 16 件，以及 Frank Reitberger（Das Prinzip）的 22 页单文件源码。Spite / Theo 是 MIT，原始 `LICENSE` 保留；Das Prinzip 没有许可证，只按公开页面做研究性镜像，版权归作者。

三套都放在 1 GB 以内；新增 Das Prinzip 后，源码目录约 51 MB，`docs/` 站点约 196 MB，整库检出约 594 MB。相似仓库清单见 `SIMILAR.md` 和 `docs/similar.html`。

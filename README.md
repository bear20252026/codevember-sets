# Codevember 2026 — Two Sets

A parallel repository to [`nodevember`](https://github.com/bear20252026/nodevember), holding the two complete Codevember 2026 sets that were previously only linked from the library. Nodevember itself is untouched.

## The two sets

| Folder | Author | Size | Licence | Live |
|---|---|---|---|---|
| `spite/` | [@spite](https://github.com/spite) | 25 days · ~85 MB | MIT | `/spite/` |
| `theo/` | [@theo_t](https://github.com/ttillberg) | 16 pieces · 16 folders | MIT | `/theo/` |

## What is here

- `spite/` — the full upstream source tree: 25 day folders, shared modules, assets, screenshots and the gallery.
- `theo/` — the full upstream source tree: 16 day folders, the shared build scripts, template, docs and assets. The build is run in CI; `dist/` and `node_modules/` are not committed.
- `index.html` — a small landing page for the two sets.
- `docs/` — the built site that GitHub Pages serves from `main / docs`: landing page, `spite/` and `theo/`.

## Build Theo locally

```bash
cd theo
corepack pnpm install --frozen-lockfile
THEO_BASE_PREFIX=/codevember-sets/theo corepack pnpm build
```

`THEO_BASE_PREFIX` is the one build-time change from upstream: Theo's original base is `/codevember-2026/`, which would point outside this repo. The default remains upstream when the variable is unset.

## Publishing

GitHub Pages is set to `main / docs`. `docs/` is the assembled site: `index.html`, `assets/`, `spite/` and Theo's `dist/`. Rebuild Theo, then copy `theo/dist` into `docs/theo` and refresh the landing page/assets when they change.

## What is not here

- Git history from either upstream repository.
- `node_modules/` and Theo's `dist/` build output.
- The Nodevember 2026 days and the Codevember cards that live in `nodevember`; those stay in that repository.

## Rights

Both upstream repositories are MIT licensed; their `LICENSE` files are kept in each folder. Authors retain copyright. This repository is an attributed mirror, not a relicense.

## Upstream

- Spite: https://github.com/spite/codevember-2026
- Theo Tillberg: https://github.com/ttillberg/codevember-2026

## 中文说明

这是 `nodevember` 的平行仓库，只放 Spite 的 25 天整套和 Theo Tillberg 的 16 件整套。两套都是 MIT，原始 `LICENSE` 保留在各目录。Nodevember 仓库本身不动；这里使用新仓库自己的 GitHub Pages 配额。

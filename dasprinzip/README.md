# Das Prinzip · Codevember 2026 源码存档

作者：**Frank Reitberger**（[prinzipiell](https://github.com/prinzipiell)，X：[@_pwd_](https://x.com/_pwd_)）  
来源：<https://dasprinzip.com/codevember2026/>  
抓取时间：2026-11-27T07:27:27+00:00  
页面：**22 个**，原始 HTML 共 **25.1 MB**；内联可执行 JS 共 **24.9 MB**；另有 **2** 个 base64 内嵌页。

## 这是什么

`pages/` 下是**原始单文件 HTML**，按服务器返回的字节保存，并记录 SHA-256。每个页面把 Three.js / WebGPU / TSL、shader、纹理（部分为 base64）和音频代码内联在 HTML 里，所以它既是页面源码，也是这套作品目前可获得的实现代码。

`extracted/` 是拆出来的可读副本：

- `NN-slug.module.js` — 主模块
- `NN-slug.inline-NN.js` — 页面里的普通内联脚本（如 Day 02 的错误处理、Day 12 的 GLB 数据）
- `NN-slug.css` — 内联样式
- `NN-slug.importmap.json` — 如有 importmap
- `embedded/` — Day 16 里用 base64 内嵌的两份完整 HTML（heap / tunnel），已解码并继续拆出各自的模块

`index.html` 是本地索引；`manifest.json` 是逐页清单（标题、字节数、行数、SHA-256、脚本与内嵌页）。

## 完整度

站点上实际存在 **22 天**：`02`、`06`–`26`。  
不存在独立页：`01-fold`、`03-melt`、`04-tangle`、`05-moss`；请求这些地址会回落到作者的个人首页。`27`–`30` 目前也没有。

## 仓库情况

作者 GitHub 账号是 <https://github.com/prinzipiell>，公开仓库只有 `aistudio`、`amorphous`、`codepen`、`tsl`，**没有这套 Codevember 2026 的公开仓库**。`tsl` 是独立的 TSL 实验库，最后推送于 2026-11-05，和这 22 个页面不是同一套代码。

## 运行与许可

页面从 CDN 加载 `three@0.186.1`（jsDelivr），因此离线打开时需要本地补齐 three 依赖，或保持联网。  
页面未标注开源许可证；这里保存的是公开可访问页面的原始代码，建议仅用于本地研究、分析与备份，不代表作者授权再分发。

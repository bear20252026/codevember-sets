#!/usr/bin/env python3
"""Extract every inline script/style from the downloaded Das Prinzip pages.

pages/ holds byte-for-byte copies of the public single-file HTML pages.
This script reads them and writes readable copies of all inline code to
extracted/, plus any base64-embedded HTML sub-pages to embedded/.
"""
from __future__ import annotations

import base64
import hashlib
import html
import json
import re
import shutil
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PAGES = ROOT / "pages"
EXTRACTED = ROOT / "extracted"
EMBEDDED = ROOT / "embedded"
BASE = "https://dasprinzip.com/codevember2026/"
DAYS = [
    "02-shatter", "06-orrery", "07-hollow", "08-tesseract", "09-membrane",
    "10-caustic", "11-rust", "12-feather", "13-labyrinth", "14-tension",
    "15-mirage", "16-spore", "17-kelp", "18-pendulum", "19-erosion",
    "20-cocoon", "21-bolt", "22-echo", "23-magma", "24-nest",
    "25-veil", "26-anamorph",
]
MISSING = ["01-fold", "03-melt", "04-tangle", "05-moss"]


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.title = ""
        self._in_title = False
        self.scripts: list[dict] = []
        self.styles: list[str] = []
        self._capture: list[str] | None = None
        self._kind: str | None = None
        self._attrs: dict[str, str] = {}

    def handle_starttag(self, tag, attrs):
        a = {k.lower(): (v or "") for k, v in attrs}
        if tag == "title":
            self._in_title = True
        elif tag == "script":
            self._kind = "script"
            self._attrs = a
            self._capture = []
        elif tag == "style":
            self._kind = "style"
            self._capture = []

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
        elif tag == "script" and self._kind == "script":
            self.scripts.append({"attrs": self._attrs, "content": "".join(self._capture or [])})
            self._capture = None
            self._kind = None
        elif tag == "style" and self._kind == "style":
            self.styles.append("".join(self._capture or []))
            self._capture = None
            self._kind = None

    def handle_data(self, data):
        if self._in_title:
            self.title += data
        if self._capture is not None:
            self._capture.append(data)

    def handle_entityref(self, name):
        if self._capture is not None:
            self._capture.append(f"&{name};")

    def handle_charref(self, name):
        if self._capture is not None:
            self._capture.append(f"&#{name};")


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def imports_from(js: str) -> list[str]:
    out = []
    for m in re.finditer(r"(?:from\s*|import\s*\()\s*['\"]([^'\"]+)['\"]", js):
        v = m.group(1)
        if v not in out:
            out.append(v)
    return out


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def decode_embedded(content: str) -> bytes | None:
    compact = "".join(content.split())
    if not compact:
        return None
    try:
        b = base64.b64decode(compact, validate=True)
    except Exception:
        return None
    if b.lstrip()[:15].lower().startswith((b"<!doctype html", b"<html")):
        return b
    return None


def process_scripts(slug: str, parser: PageParser) -> tuple[dict, list[dict]]:
    """Return counts/links and decoded embedded-page metadata."""
    script_entries = []
    modules = []
    embedded = []
    for idx, item in enumerate(parser.scripts):
        a = item["attrs"]
        typ = a.get("type", "").lower()
        content = item["content"]
        # JSON import map
        if typ == "importmap":
            name = f"{slug}.importmap.json"
            write_text(EXTRACTED / name, content.strip() + "\n")
            script_entries.append({"index": idx, "kind": "importmap", "file": f"extracted/{name}", "bytes": len(content)})
            continue
        # Base64-embedded HTML sub-page (Day 16)
        decoded = decode_embedded(content) if a.get("id", "").startswith("src-") else None
        if decoded is not None:
            ident = a.get("id", f"embedded-{idx}")
            name = f"{slug}-{ident}.html"
            (EMBEDDED / name).parent.mkdir(parents=True, exist_ok=True)
            (EMBEDDED / name).write_bytes(decoded)
            sub = PageParser()
            sub.feed(decoded.decode("utf-8", errors="replace"))
            sub_modules = [s["content"] for s in sub.scripts if s["attrs"].get("type", "").lower() == "module"]
            sub_js_bytes = 0
            for j, sub_js in enumerate(sub_modules):
                out = f"{slug}-{ident}-{j + 1}.module.js" if len(sub_modules) > 1 else f"{slug}-{ident}.module.js"
                write_text(EXTRACTED / out, sub_js.strip("\n") + "\n")
                sub_js_bytes += len(sub_js.encode())
            sub_importmap = next((s["content"] for s in sub.scripts if s["attrs"].get("type", "").lower() == "importmap"), "")
            if sub_importmap:
                write_text(EXTRACTED / f"{slug}-{ident}.importmap.json", sub_importmap.strip() + "\n")
            sub_css = "\n\n".join(sub.styles).strip("\n")
            if sub_css:
                write_text(EXTRACTED / f"{slug}-{ident}.css", sub_css + "\n")
            meta = {
                "id": ident,
                "html": f"embedded/{name}",
                "bytes": len(decoded),
                "title": html.unescape(sub.title).strip(),
                "module_js_bytes": sub_js_bytes,
                "extracted_js": [f"extracted/{f}" for f in ([f"{slug}-{ident}.module.js"] if len(sub_modules) == 1 else [f"{slug}-{ident}-{j + 1}.module.js" for j in range(len(sub_modules))])],
            }
            embedded.append(meta)
            script_entries.append({"index": idx, "kind": "embedded-html", "file": f"embedded/{name}", "bytes": len(decoded)})
            continue
        # Module / ordinary executable script / plain data block
        if typ == "module":
            name = f"{slug}.module.js"
            modules.append(content)
            script_entries.append({"index": idx, "kind": "module", "file": f"extracted/{name}", "bytes": len(content.encode())})
        elif typ in ("", "text/javascript", "application/javascript"):
            name = f"{slug}.inline-{idx + 1:02d}.js"
            modules.append(content)
            script_entries.append({"index": idx, "kind": "javascript", "file": f"extracted/{name}", "bytes": len(content.encode())})
        else:
            name = f"{slug}.inline-{idx + 1:02d}.txt"
            write_text(EXTRACTED / name, content + "\n")
            script_entries.append({"index": idx, "kind": f"data:{typ}", "file": f"extracted/{name}", "bytes": len(content.encode())})
        if script_entries and script_entries[-1]["file"].endswith(".js"):
            write_text(EXTRACTED / Path(script_entries[-1]["file"]).name, content.strip("\n") + "\n")
    return {"scripts": script_entries, "embedded_pages": embedded}, embedded


def main() -> None:
    for d in (EXTRACTED, EMBEDDED):
        if d.exists():
            shutil.rmtree(d)
    EXTRACTED.mkdir()
    EMBEDDED.mkdir()

    manifest = {
        "site": "Das Prinzip / Prinzipiell",
        "author": "Frank Reitberger",
        "series": "Codevember 2026",
        "source_root": BASE,
        "captured_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "note": "pages/ are exact copies of the public single-file HTML pages. "
                "The pages contain inline Three.js/TSL JavaScript and CSS. "
                "No public GitHub repository for this set was found.",
        "pages": [],
        "missing": [],
    }

    cards = []
    for slug in DAYS:
        src = PAGES / f"{slug}.html"
        data = src.read_bytes()
        text = data.decode("utf-8", errors="replace")
        parser = PageParser()
        parser.feed(text)
        day = int(slug.split("-", 1)[0])
        title = html.unescape(parser.title).strip()
        css = "\n\n".join(parser.styles).strip("\n")
        css_name = f"{slug}.css"
        write_text(EXTRACTED / css_name, css + "\n")
        scripts_meta, embedded = process_scripts(slug, parser)
        module_bytes = sum(s["bytes"] for s in scripts_meta["scripts"] if s["kind"] in ("module", "javascript"))
        module_bytes += sum(s["module_js_bytes"] for s in scripts_meta["embedded_pages"])
        entry = {
            "day": day,
            "slug": slug,
            "title": title,
            "url": BASE + f"{slug}.html",
            "page": f"pages/{slug}.html",
            "bytes": len(data),
            "lines": text.count("\n") + 1,
            "sha256": sha256(data),
            "inline_module_bytes": module_bytes,
            "inline_css_bytes": len(css.encode()),
            "imports": imports_from("\n".join(s["content"] for s in parser.scripts)),
            "scripts": scripts_meta["scripts"],
            "embedded_pages": scripts_meta["embedded_pages"],
            "extracted_css": f"extracted/{css_name}",
        }
        manifest["pages"].append(entry)
        cards.append(entry)

    manifest["missing"] = [
        {"slug": s, "url": BASE + f"{s}.html", "reason": "No standalone page; request falls back to the author's homepage."}
        for s in MISSING
    ]
    write_text(ROOT / "manifest.json", json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")

    total = sum(p["bytes"] for p in manifest["pages"])
    total_js = sum(p["inline_module_bytes"] for p in manifest["pages"])
    embedded_count = sum(len(p["embedded_pages"]) for p in manifest["pages"])
    readme = f"""# Das Prinzip · Codevember 2026 源码存档

作者：**Frank Reitberger**（[prinzipiell](https://github.com/prinzipiell)，X：[@_pwd_](https://x.com/_pwd_)）  
来源：<https://dasprinzip.com/codevember2026/>  
抓取时间：{manifest['captured_at']}  
页面：**{len(manifest['pages'])} 个**，原始 HTML 共 **{total/1024/1024:.1f} MB**；内联可执行 JS 共 **{total_js/1024/1024:.1f} MB**；另有 **{embedded_count}** 个 base64 内嵌页。

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

站点上实际存在 **{len(manifest['pages'])} 天**：`02`、`06`–`26`。  
不存在独立页：`01-fold`、`03-melt`、`04-tangle`、`05-moss`；请求这些地址会回落到作者的个人首页。`27`–`30` 目前也没有。

## 仓库情况

作者 GitHub 账号是 <https://github.com/prinzipiell>，公开仓库只有 `aistudio`、`amorphous`、`codepen`、`tsl`，**没有这套 Codevember 2026 的公开仓库**。`tsl` 是独立的 TSL 实验库，最后推送于 2026-11-05，和这 {len(manifest['pages'])} 个页面不是同一套代码。

## 运行与许可

页面从 CDN 加载 `three@0.186.1`（jsDelivr），因此离线打开时需要本地补齐 three 依赖，或保持联网。  
页面未标注开源许可证；这里保存的是公开可访问页面的原始代码，建议仅用于本地研究、分析与备份，不代表作者授权再分发。
"""
    write_text(ROOT / "README.md", readme)

    card_html = []
    for p in cards:
        title_display = html.escape(p["title"].rstrip("."))
        js_links = "".join(
            f'<a href="{s["file"]}">JS {s["index"] + 1}</a>'
            for s in p["scripts"] if s["kind"] in ("module", "javascript")
        )
        embedded_links = "".join(
            f'<a href="{e["html"]}">内嵌页 {html.escape(e["id"])}</a>'
            for e in p["embedded_pages"]
        )
        card_html.append(f"""      <article class="card">
        <div class="num">Day {p['day']:02d}</div>
        <h2>{title_display}</h2>
        <div class="meta">{p['bytes']/1024:.0f} KB · {p['lines']} 行 · JS {p['inline_module_bytes']/1024:.0f} KB</div>
        <div class="links"><a href="{p['page']}">原始 HTML</a>{js_links}<a href="{p['extracted_css']}">CSS</a>{embedded_links}</div>
      </article>""")
    index = f"""<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Das Prinzip · Codevember 2026 源码存档</title>
<style>
:root{{--bg:#ecebe8;--panel:#f7f6f2;--ink:#202024;--muted:#70706a;--line:#d5d3cc;--accent:#c44536}}
@media(prefers-color-scheme:dark){{:root{{--bg:#151517;--panel:#202023;--ink:#efede8;--muted:#96958f;--line:#333338;--accent:#f47763}}}}
*{{box-sizing:border-box}}body{{margin:0;padding:32px 20px 60px;background:var(--bg);color:var(--ink);font:16px/1.5 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}}
main{{max-width:1100px;margin:0 auto}}header{{padding:24px 0 32px;border-bottom:1px solid var(--line)}}h1{{margin:0 0 10px;font-size:clamp(36px,7vw,72px);line-height:.95;letter-spacing:-.04em}}h1 span{{color:var(--accent)}}p{{margin:0;color:var(--muted);max-width:70ch}}.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px;margin-top:24px}}.card{{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:18px;display:flex;flex-direction:column;gap:8px;min-height:190px}}.num{{font:600 11px/1 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:var(--accent)}}h2{{margin:0;font-size:26px;letter-spacing:-.03em}}.meta{{font:12px/1.5 ui-monospace,monospace;color:var(--muted)}}.links{{margin-top:auto;display:flex;flex-wrap:wrap;gap:10px;font-size:13px}}.links a{{color:var(--ink);text-decoration:none;border-bottom:1px solid var(--line)}}.links a:hover{{color:var(--accent);border-color:var(--accent)}}footer{{margin-top:32px;font-size:13px;color:var(--muted)}}
</style>
</head>
<body><main>
<header><h1>Das Prinzip <span>/</span> Codevember 2026</h1>
<p>{len(cards)} 个独立单页源码 · 作者 Frank Reitberger · 抓取于 {manifest['captured_at'][:10]}。每个页面都是自包含 HTML，内联 Three.js / WebGPU / TSL 与音频代码。</p></header>
<div class="grid">
{''.join(card_html)}
</div>
<footer>缺少独立页：01 Fold、03 Melt、04 Tangle、05 Moss。详见 <a href="README.md">README</a> 与 <a href="manifest.json">manifest.json</a>。</footer>
</main></body></html>
"""
    write_text(ROOT / "index.html", index)

    print(json.dumps({
        "pages": len(manifest["pages"]),
        "html_bytes": total,
        "executable_js_bytes": total_js,
        "embedded_pages": embedded_count,
        "missing": len(MISSING),
    }, ensure_ascii=False))


if __name__ == "__main__":
    main()

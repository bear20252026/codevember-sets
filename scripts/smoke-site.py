#!/usr/bin/env python3
"""Smoke-test the assembled site and its local links without external services."""
from __future__ import annotations

import functools
import html
import http.server
import os
import re
import socketserver
import sys
import threading
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"

if not (SITE / "index.html").exists():
    sys.exit("site/index.html is missing; run `node scripts/build-site.mjs` first")


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass


def serve():
    handler = functools.partial(Quiet, directory=str(SITE))
    httpd = socketserver.ThreadingTCPServer(("127.0.0.1", 0), handler)
    port = httpd.server_address[1]
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    return httpd, f"http://127.0.0.1:{port}"


def get(base, path):
    with urllib.request.urlopen(base + path, timeout=10) as r:
        return r.status, r.read()


def main():
    httpd, base = serve()
    failures = []
    paths = ["/", "/similar.html", "/spite/", "/theo/", "/dasprinzip/"]
    paths += [f"/spite/{d}/" for d in range(1, 27)]
    paths += [f"/theo/{d}/" for d in sorted(p.name for p in (SITE / "theo").iterdir() if p.is_dir() and p.name.isdigit())]
    paths += [f"/dasprinzip/{p.name}" for p in sorted((SITE / "dasprinzip").glob("*.html"))]

    for path in paths:
        try:
            status, _ = get(base, path)
            if status != 200:
                failures.append((path, status))
        except Exception as e:
            failures.append((path, str(e)))

    # Local links in all deployed HTML; remote links are intentionally not fetched.
    links = 0
    missing = []
    for f in SITE.rglob("*.html"):
        text = f.read_text(encoding="utf-8", errors="ignore")
        for raw in re.findall(r'<a\b[^>]*href=["\']([^"\']+)["\']', text, re.I):
            href = html.unescape(raw)
            if href.startswith(("http://", "https://", "mailto:", "#", "javascript:")):
                continue
            links += 1
            href = urllib.parse.unquote(href.split("#", 1)[0].split("?", 1)[0])
            if not href:
                continue
            target = (f.parent / href).resolve()
            if not target.exists():
                missing.append((str(f.relative_to(SITE)), href))
    if missing:
        failures.extend(("missing link " + rel, href) for rel, href in missing)

    print(f"page roots: {len(paths)}, local links: {links}, failure(s): {len(failures)}")
    for item in failures[:20]:
        print("✗", item)
    httpd.shutdown()
    if failures:
        sys.exit(1)


if __name__ == "__main__":
    main()

from __future__ import annotations

import xml.etree.ElementTree as ET
from pathlib import Path

SITEMAP_NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
NOINDEX_URLS: set[str] = set()


def _robots_value(page) -> str:
    meta = getattr(page, "meta", {}) or {}
    return str(meta.get("robots", "")).lower()


def _exclude_from_sitemap(page) -> bool:
    meta = getattr(page, "meta", {}) or {}
    if str(meta.get("sitemap", "true")).lower() == "false":
        return True
    return "noindex" in _robots_value(page)


def on_page_context(context, page, config, nav):
    if page.canonical_url and _exclude_from_sitemap(page):
        NOINDEX_URLS.add(page.canonical_url.rstrip("/") + "/")
    return context


def on_post_build(config):
    sitemap_path = Path(config.site_dir) / "sitemap.xml"
    if not sitemap_path.exists() or not NOINDEX_URLS:
        return

    ET.register_namespace("", SITEMAP_NS["sm"])
    tree = ET.parse(sitemap_path)
    root = tree.getroot()

    for url in list(root.findall("sm:url", SITEMAP_NS)):
        loc = url.find("sm:loc", SITEMAP_NS)
        if loc is None or not loc.text:
            continue
        normalized = loc.text.rstrip("/") + "/"
        if normalized in NOINDEX_URLS:
            root.remove(url)

    tree.write(sitemap_path, encoding="utf-8", xml_declaration=True)

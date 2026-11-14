#!/usr/bin/env python3
"""Notify IndexNow of explicitly listed, already published HCF canonical URLs.

Dry run by default. Pass --submit only after verifying the production release.
The public ownership proof is deliberately hosted at /indexnow-key.txt.
"""
import argparse
import json
import re
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import urlsplit

HOST = "www.hsinchucombat.com"
BASE = "https://" + HOST
ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("urls", nargs="+", help="Canonical URLs changed in this release")
    parser.add_argument("--submit", action="store_true")
    args = parser.parse_args()
    urls = list(dict.fromkeys(args.urls))
    allowed = {node.text for node in ET.parse(ROOT / "sitemap.xml").iter()
               if node.tag.endswith("}loc")}
    if not 1 <= len(urls) <= 10000:
        parser.error("Provide between 1 and 10000 changed URLs")
    for url in urls:
        parts = urlsplit(url)
        if (parts.scheme != "https" or parts.netloc != HOST or parts.query
                or parts.fragment or url not in allowed):
            parser.error("Only HCF canonical URLs present in sitemap.xml are accepted")
    key = (ROOT / "indexnow-key.txt").read_text(encoding="utf-8").strip()
    if not re.fullmatch(r"[a-zA-Z0-9-]{8,128}", key):
        parser.error("Invalid IndexNow proof file")
    key_url = BASE + "/indexnow-key.txt"
    if not args.submit:
        print(json.dumps({"mode": "dry-run", "count": len(urls), "urls": urls}, indent=2))
        return
    with urllib.request.urlopen(key_url, timeout=20) as response:
        if response.status != 200 or response.read().decode("utf-8").strip() != key:
            raise RuntimeError("Production ownership proof does not match this checkout")
    # Do not notify new pages until the actual production response is available.
    for url in urls:
        request = urllib.request.Request(url, method="HEAD")
        with urllib.request.urlopen(request, timeout=20) as response:
            if response.status != 200 or response.geturl() != url:
                raise RuntimeError("Production URL must return 200 without a redirect: " + url)
    payload = {"host": HOST, "key": key, "keyLocation": key_url, "urlList": urls}
    request = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        if response.status not in (200, 202):
            raise RuntimeError("Unexpected IndexNow response: " + str(response.status))
        print(json.dumps({"status": response.status, "count": len(urls), "urls": urls,
                          "result": "received" if response.status == 200 else "key-validation-pending",
                          "note": "Receipt is not proof of crawling, indexing, ranking or AI citation."},
                         indent=2))


if __name__ == "__main__":
    main()

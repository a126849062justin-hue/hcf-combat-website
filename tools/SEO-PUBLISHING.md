# HCF search publication checklist

Publish useful answers to a distinct student question. Do not produce near-duplicate location pages or promise ranking, health outcomes, or AI citations.

1. Verify course prices and terms against the live pricing page and booking flow. Preserve the original publication date when updating an article. Headings use Traditional Chinese without punctuation.
2. Use static visible HTML, a short answer, substantive examples, descriptive links, authentic images, and an explicit author and update date. Private inquiries go to `booking.html#private=unsure` or the supported form preference, not a new lead flow.
3. Add title, description, absolute canonical URL, social metadata, BlogPosting and BreadcrumbList JSON-LD. Use `https://www.hsinchucombat.com/#organization` for HCF. Schema must match visible facts. Do not invent reviews or special AI schema.
4. Add contextual links and update the knowledge collection ItemList to match its visible article cards. Update sitemap lastmod only for genuinely changed pages.
5. Verify mobile and desktop reading, images, anchors, and booking prefills without sending a live test enquiry. Deploy and verify actual production responses.
6. Notify IndexNow once per meaningful release, using canonical URLs of pages changed in that release. The script defaults to a dry run. Add `--submit` only after the production pages and ownership proof are live.

```sh
python3 tools/submit-indexnow.py https://www.hsinchucombat.com/example-article
python3 tools/submit-indexnow.py --submit https://www.hsinchucombat.com/example-article
```

Replace the example with a real canonical URL in sitemap.xml. The ownership file at `/indexnow-key.txt` is public by design and is not a hosting credential. HTTP 200 means notification received; 202 means ownership validation pending. Neither proves indexing or rankings. Do not repeatedly resubmit unchanged URLs.

## AI search visibility

The wildcard allow rule in robots.txt currently allows Googlebot, Bingbot and OAI-SearchBot. Keep crawlers able to access the same public content visitors see. A request with a crawler user-agent from a local machine only tests the response to that header, not access from the crawler's actual network.

Google's AI search uses the same indexing and SEO foundations as ordinary search. It does not require llms.txt or special schema. OAI-SearchBot controls ChatGPT search crawling; GPTBot serves a separate training purpose. Do not change training preferences as a search tactic.

When account access is available, use Google Search Console and Bing Webmaster Tools to verify sitemap ingestion, indexing, search impressions and clicks. Review Business Profile details for name, address, phone and current offerings. Track actual trial inquiries alongside search visits; page publication alone does not demonstrate improved visibility.

Sources checked 2026-11-15

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.openai.com/api/docs/bots
- https://www.indexnow.org/documentation
- https://www.indexnow.org/faq

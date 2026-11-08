# Huang career timeline

`huang-career.json` preserves the existing head coach page's seven recorded years,
21 competition entries, 24 competition images and two YouTube videos.
It is a selection of the existing archive, not a new claim about complete career totals.
No 2025 chapter is invented when the existing archive has no record for that year.

Run `node tools/build-huang-career.cjs` from the repository root after editing the
JSON. Commit its generated section in `coach-huang.html` with the content and assets.
The full timeline remains readable without JavaScript. Local WebP derivatives retain
the source frames and strip camera metadata. Originals remain available unchanged.

`hcf-coach-career.js` adds scroll year highlighting, reading progress, photo viewing,
and click-to-load YouTube embeds. Photo links and YouTube links work without scripts.
The archive has no automatic year carousel, autoplay timer, forced scroll, or sound
on page load. Viewer and embeds are closed on page retirement. Reduced-motion styling
removes smooth scrolling and image transitions.

The desktop and mobile profile share a dark palette with white text and red accents.
On mobile the sticky year reel moves with the active chapter and a vertical progress
line fills as the reader scrolls. Navigation offsets follow measured bar heights,
including compact landscape layouts. The reel transition is disabled for reduced motion.

Validate with `node --test arena-app/tests/coach-career.test.cjs` and inspect desktop
and mobile visuals in the deploy preview. Browser automation was disabled during
implementation so JSDOM checks do not constitute device or visual verification.

Preview requested by the owner on 2026-11-09. Do not merge or deploy to production
until the owner confirms the preview. The extra training-diary section removal is
included in the same preview.

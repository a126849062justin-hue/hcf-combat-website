# HCF Enter The Arena

The source for the fighter journey at `/fighters` on the existing HCF website.
The rest of the site remains in the repository root and uses its existing static deployment.

## Build and check

Use Node 22 or later from this directory

```sh
npm ci
npm run build
npm test
```

`next build --webpack` pre-renders the full page into HTML with Next static export.
`tools/publish.mjs` copies that page and its isolated runtime into the repository root.
Commit the source, lockfile, generated `fighters.html` and `fighters` route payloads,
`arena-runtime`, and any changed `assets/arena` files together.
Netlify continues to deploy the root directory with the current setup.

The build does not require a Next server or a hosting migration.
Page copy, navigation, all 37 media records, and structured metadata are present in the exported HTML.
Three.js loads separately near its scenes. On mobile and lower capability devices,
3D waits for an explicit request. WebGL errors leave the scene poster and all normal content available.

## Content and interactions

- `app/fighters/page.tsx` contains the nine story chapters and booking calls to action
- `components/Story.tsx` contains training tabs, the real Kao story comparison, and the media viewer
- `lib/arena-default.json` is the pre-rendered fallback for 37 approved training and competition assets
- `components/Content.tsx` loads published CMS content and refreshes the gallery once per minute
- `lib/moments.json` retains the original approved media inventory
- `lib/schema.json` preserves the original 24 VideoObject records
- `components/ArenaScene.tsx` contains the scroll camera, doors, lights, particles, and GLSL floor atmosphere
- `components/FighterScene.tsx` and `lib/pose.ts` provide six stylized motion demonstrations
- `components/Experience.tsx` owns GSAP, desktop Lenis, reduced motion, and page retirement
- `lib/sound.ts` provides opt-in synthesized heartbeat, breathing, bell, and impact cues

Music remains in the original shark assistant. The shared `hcf-bgm.js` owns the existing two-track
player and page transitions. Arena sound has a separate button inside the same assistant panel.
No audio begins until the visitor opts in. Arena rendering and sound are retired on navigation
without stopping the shared music player.

The before and after numbers come from the existing published Kao story. No new competition wins,
championships, body transformation results, or athlete identities were invented.
The decorative trophy forms in the conceptual arena are scene props.

## Blender model

The editable model is `../assets/arena/hcf-arena-source.blend`.
`tools/build_arena.py` produces the custom gym, ring, bags, sliding doors, metal fixtures,
and original HCF crest. It exports a Draco-compressed GLB and a rendered poster.
The Draco decoder is served locally. The display font includes its OFL license.

## Validation and limits

`npm test` exercises the actual React components in JSDOM, validates motion path continuity,
checks local asset links and metadata, validates the compressed GLB, and verifies opt-in sound
and cleanup. These tests do not emulate WebGL or prove visual rendering quality.

The build and DOM tests pass locally. Browser automation is disabled in the current workspace.
Visual checks in desktop and mobile browsers, auditory review, Lighthouse 95, Core Web Vitals,
and sustained 60 FPS still require real browser/device measurement. They are targets rather
than certified results. The scene reduces particles and shadows on constrained devices and
caps pixel ratio, but field performance has not been measured.

This implementation includes Next, React, TypeScript, Tailwind, GSAP, Lenis, Three, React Three
Fiber, Drei, Zustand, GLSL, and the Blender model. Spline, Theatre, AI features,
and new analytics services are not configured. Existing site analytics remain in place.

## Existing HCF CMS

Sign in at https://hcf-admin.onrender.com and open 選手頁管理. Save a draft, preview its
media, and publish only when ready. The homepage entry and fighter page share
`/api/public/arena`. Public responses contain only published visible records.
The editor supports cover copy, media URLs, four categories, ordering, visibility,
three featured items and rollback to one of the last eight published versions.
This uses the separate `hcf-combat-admin-api` repository and existing database.
It does not use the older `backend/` copy in this website repository.

Media files must first be uploaded to this website or a public HTTPS media host.
This editor manages their URLs and does not upload files. Images are WebP AVIF JPG
or PNG and videos are MP4 WebM or M4V. Titles must not contain punctuation.

Published content appears on a newly opened page after the public cache expires
within 30 seconds. An already open visible page refreshes once per minute. Failed
requests preserve the last good content or static fallback. No API key is needed.
AI integration is deferred at the owner request.

The HTML and initial SEO schema remain the build snapshot. To update the no-JavaScript
snapshot, copy published `content` to `lib/arena-default.json`, update verified
metadata as appropriate, rebuild and deploy. Runtime updates preserve the original
verified video dates and remove schema records for hidden videos. New videos do not
receive invented schema dates. CMS publication does not trigger a website rebuild.

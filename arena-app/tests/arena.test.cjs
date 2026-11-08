const { test, after } = require("node:test"),
  assert = require("node:assert/strict"),
  fs = require("node:fs"),
  path = require("node:path"),
  { createRequire } = require("node:module");
const { JSDOM } = require("jsdom");
const R = path.resolve(__dirname, "../..");
const app = path.join(R, "arena-app");
const ar = createRequire(app + "/package.json");
const ts = ar("typescript");
const output = path.join(app, ".test-build");
fs.mkdirSync(output, { recursive: true });
for (const [from, to] of [
  ["components/Story.tsx", "Story.js"],
  ["lib/pose.ts", "pose.js"],
  ["lib/store.ts", "store.js"],
  ["lib/sound.ts", "sound.js"],
]) {
  const code = ts.transpileModule(
    fs.readFileSync(path.join(app, from), "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        target: ts.ScriptTarget.ES2020,
        esModuleInterop: true,
      },
    },
  ).outputText;
  fs.writeFileSync(
    path.join(output, to),
    code.replaceAll("../lib/moments.json", "./moments.json"),
  );
}
fs.copyFileSync(
  path.join(app, "lib/moments.json"),
  path.join(output, "moments.json"),
);
const dom = new JSDOM("<body></body>", {
  url: "https://www.hsinchucombat.com/fighters",
  pretendToBeVisual: true,
});
const w = dom.window;
for (const k of [
  "window",
  "document",
  "HTMLElement",
  "HTMLInputElement",
  "Event",
  "MouseEvent",
  "CustomEvent",
  "KeyboardEvent",
  "navigator",
])
  Object.defineProperty(global, k, {
    value: k === "window" ? w : w[k],
    configurable: true,
  });
global.IS_REACT_ACT_ENVIRONMENT = true;
w.HTMLDialogElement.prototype.showModal = function () {
  this.open = true;
};
w.HTMLDialogElement.prototype.close = function () {
  this.open = false;
  this.dispatchEvent(new w.Event("close"));
};
w.HTMLMediaElement.prototype.pause = function () {
  this.dataset.paused = "true";
};
const React = ar("react"),
  { act } = React,
  { createRoot } = ar("react-dom/client");
const { TrainingSwitch, Transformation, MomentsGallery } = ar(
  "./.test-build/Story.js",
);
let root, container;
async function mount(C) {
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
  await act(async () => root.render(React.createElement(C)));
  return container;
}
async function unmount() {
  await act(async () => root.unmount());
  container.remove();
}
async function click(el) {
  await act(async () =>
    el.dispatchEvent(
      new w.MouseEvent("click", { bubbles: true, cancelable: true, button: 0 }),
    ),
  );
}
after(() => dom.window.close());
test("all four training zones select the correct media and private intake link", async () => {
  const c = await mount(TrainingSwitch);
  try {
    const tabs = c.querySelectorAll("[role=tab]");
    assert.equal(tabs.length, 4);
    for (let i = 0; i < 4; i++) {
      await click(tabs[i]);
      assert.equal(tabs[i].getAttribute("aria-selected"), "true");
      assert(c.querySelector(".training-media img").alt);
      if (i === 2)
        assert.match(
          c.querySelector(".training-caption a").href,
          /booking.html#private=unsure/,
        );
    }
    await click(c.querySelector(".training-media"));
    assert(c.querySelector("dialog").open);
    assert(c.querySelector("video source").src.endsWith("/t06.mp4"));
    await click(c.querySelector('[aria-label="關閉觀賞"]'));
    assert(!c.querySelector("dialog").open);
    assert.equal(document.activeElement, c.querySelector(".training-media"));
  } finally {
    await unmount();
  }
});
test("all 37 moments remain in the archive and each filter shows its real assets", async () => {
  const c = await mount(MomentsGallery);
  try {
    assert.equal(c.querySelectorAll(".moments-grid .moment").length, 37);
    const expected = [37, 8, 11, 14, 4];
    const filters = c.querySelectorAll(".moment-filters button");
    for (let i = 0; i < filters.length; i++) {
      await click(filters[i]);
      assert.equal(
        c.querySelectorAll(".moments-grid .moment").length,
        expected[i],
      );
    }
    await click(c.querySelector(".featured-moments .moment"));
    const dlg = c.querySelector("dialog");
    assert(dlg.open);
    assert(dlg.querySelector("img"));
    const next = [...dlg.querySelectorAll("button")].find(
      (x) => x.textContent === "下一個時刻",
    );
    await click(next);
    await click(next);
    assert(dlg.querySelector("video"));
    await click(dlg.querySelector('[aria-label="關閉觀賞"]'));
    assert(!dlg.open);
    assert(!dlg.querySelector("video"));
    assert.equal(
      document.activeElement,
      c.querySelector(".featured-moments .moment"),
    );
  } finally {
    await unmount();
  }
});
test("comparison exposes a labeled range and keeps both real source images", async () => {
  const c = await mount(Transformation);
  try {
    const input = c.querySelector("input[type=range]");
    assert(input.getAttribute("aria-label"));
    const setter = Object.getOwnPropertyDescriptor(
      w.HTMLInputElement.prototype,
      "value",
    ).set;
    await act(async () => {
      setter.call(input, "75");
      input.dispatchEvent(new w.Event("input", { bubbles: true }));
      input.dispatchEvent(new w.Event("change", { bubbles: true }));
    });
    assert.match(c.querySelector(".compare-before").style.clipPath, /25%/);
    assert(
      c.querySelector(".compare-before img").src.endsWith("/story_kao_02.webp"),
    );
    assert(c.textContent.includes("104") && c.textContent.includes("74"));
  } finally {
    await unmount();
  }
});
test("six movement paths are distinct finite and return to guard", () => {
  const { fighterPose } = ar("./.test-build/pose.js");
  const peaks = new Set();
  for (let move = 0; move < 6; move++) {
    const guard = fighterPose(move, 0),
      end = fighterPose(move, 1);
    assert.deepEqual(guard.points, end.points);
    assert(Math.abs(guard.turn - end.turn) < 1e-10);
    peaks.add(JSON.stringify(fighterPose(move, 0.5)));
    for (let time = 0; time < 2; time += 0.01)
      for (const p of fighterPose(move, time).points)
        for (const n of p) assert(Number.isFinite(n) && Math.abs(n) < 4);
  }
  assert.equal(peaks.size, 6);
});
test("Blender GLB has Draco compression original crest doors and ring meshes", () => {
  const b = fs.readFileSync(R + "/assets/arena/hcf-arena.glb");
  assert.equal(b.toString("utf8", 0, 4), "glTF");
  const g = JSON.parse(b.toString("utf8", 20, 20 + b.readUInt32LE(12)));
  assert(g.extensionsRequired.includes("KHR_draco_mesh_compression"));
  for (const n of [
    "DoorLeft",
    "DoorRight",
    "Original HCF crest",
    "Ring canvas",
  ])
    assert(
      g.nodes.some((o) => o.name === n),
      n,
    );
  assert(b.length < 400000);
  for (const f of [
    "draco_decoder.wasm",
    "draco_wasm_wrapper.js",
    "draco_decoder.js",
  ])
    assert(fs.existsSync(R + "/assets/arena/draco/" + f));
});
test("soundscape stays silent until opted in and closes on page retirement", async () => {
  const { installArenaSound } = ar("./.test-build/sound.js");
  let created = 0,
    closed = 0;
  class Param {
    setValueAtTime() {}
    linearRampToValueAtTime() {}
    exponentialRampToValueAtTime() {}
  }
  class Node {
    constructor() {
      this.frequency = new Param();
      this.gain = new Param();
    }
    connect() {
      return this;
    }
    start() {}
    stop() {}
  }
  class AC {
    constructor() {
      created++;
      this.state = "suspended";
      this.currentTime = 0;
      this.sampleRate = 8000;
      this.destination = {};
    }
    resume() {
      this.state = "running";
      return Promise.resolve();
    }
    suspend() {
      this.state = "suspended";
      return Promise.resolve();
    }
    close() {
      closed++;
      this.state = "closed";
      return Promise.resolve();
    }
    createOscillator() {
      return new Node();
    }
    createGain() {
      return new Node();
    }
    createBiquadFilter() {
      return new Node();
    }
    createBufferSource() {
      return new Node();
    }
    createBuffer(_n, length) {
      return { getChannelData: () => new Float32Array(length) };
    }
  }
  global.AudioContext = AC;
  const cleanup = installArenaSound();
  try {
    assert.equal(created, 0);
    assert.equal(w.HCFArenaSound.state(), false);
    w.HCFArenaSound.toggle();
    await Promise.resolve();
    assert.equal(created, 1);
    assert(w.HCFArenaSound.state());
    w.dispatchEvent(new w.PageTransitionEvent("pagehide", { persisted: true }));
    assert.equal(closed, 0);
    w.dispatchEvent(new w.Event("pagehide"));
    assert.equal(closed, 1);
    assert.equal(w.HCFArenaSound.state(), false);
  } finally {
    cleanup();
  }
});
test("pre-rendered page has complete chapters media metadata and valid local links", () => {
  const d = new JSDOM(fs.readFileSync(R + "/fighters.html", "utf8"), {
    url: "https://www.hsinchucombat.com/fighters",
  }).window.document;
  assert.equal(d.querySelectorAll("h1").length, 1);
  assert.equal(d.querySelectorAll(".chapter").length, 9);
  assert.equal(d.querySelectorAll(".moments-grid .moment").length, 37);
  for (const h of d.querySelectorAll("h1,h2,h3"))
    assert(!/[\p{P}\p{S}]/u.test(h.textContent), h.textContent);
  const schema = JSON.parse(
    d.querySelector('script[type="application/ld+json"]').textContent,
  );
  assert.equal(
    schema["@graph"].filter((v) => v["@type"] === "VideoObject").length,
    24,
  );
  assert.equal(
    d.querySelector("link[rel=canonical]").href,
    "https://www.hsinchucombat.com/fighters",
  );
  for (const a of d.querySelectorAll('a[href^="#"]'))
    assert(d.getElementById(a.hash.slice(1)), a.href);
  for (const el of d.querySelectorAll("[src],link[href],a[href]")) {
    const raw = el.getAttribute("src") || el.getAttribute("href");
    if (!raw || raw.startsWith("#") || !raw.startsWith("/")) continue;
    let local = decodeURI(raw.split("?")[0].split("#")[0]);
    if (local === "/") local = "/index.html";
    if (local === "/fighters") local = "/fighters.html";
    assert(fs.existsSync(R + local), local);
  }
  assert(!d.querySelector("#arena-music"));
  assert(d.querySelector('a[href="/booking.html"]'));
});

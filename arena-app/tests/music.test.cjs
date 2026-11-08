const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const { JSDOM, VirtualConsole } = require("jsdom");
const R = require("node:path").resolve(__dirname, "../..");
const code = fs.readFileSync(R + "/hcf-bgm.js", "utf8");
const tick = () => new Promise((r) => setImmediate(r));
function setup({ storage, blocked = false, random = 0.9 } = {}) {
  const console = new VirtualConsole();
  let dom = new JSDOM(
    '<title>Fighters</title><main><a id="go" href="booking.html#private=unsure">預約</a><video id="clip"></video></main>',
    {
      url: "https://www.hsinchucombat.com/fighters",
      runScripts: "outside-only",
      pretendToBeVisual: true,
      virtualConsole: console,
    },
  );
  const w = dom.window,
    audios = [],
    children = [];
  let frame, child;
  w.Math.random = () => random;
  w.matchMedia = () => ({ matches: false });
  w.HTMLElement.prototype.scrollIntoView = function () {
    this.dataset.scrolled = "true";
  };
  if (storage !== undefined) w.sessionStorage.setItem("hcfMusicV2", storage);
  class Audio extends w.EventTarget {
    constructor() {
      super();
      this.paused = true;
      this.currentTime = 0;
      this.duration = 300;
      this.volume = 1;
      this.loads = 0;
      audios.push(this);
    }
    play() {
      if (blocked) return Promise.reject(new Error("NotAllowedError"));
      this.paused = false;
      this.dispatchEvent(new w.Event("play"));
      return Promise.resolve();
    }
    pause() {
      this.paused = true;
      this.dispatchEvent(new w.Event("pause"));
    }
    load() {
      this.loads++;
      this.currentTime = 0;
    }
  }
  w.Audio = Audio;
  w.HTMLMediaElement.prototype.pause = function () {
    Object.defineProperty(this, "paused", { value: true, configurable: true });
  };
  const create = w.document.createElement.bind(w.document);
  w.document.createElement = function (tag) {
    const el = create(tag);
    if (tag === "iframe") {
      frame = el;
      const loc = {
        href: "about:blank",
        pathname: "",
        search: "",
        hash: "",
        calls: [],
      };
      function setURL(url) {
        const u = new URL(url);
        Object.assign(loc, {
          href: u.href,
          pathname: u.pathname,
          search: u.search,
          hash: u.hash,
        });
      }
      child = {
        location: loc,
        CustomEvent: w.CustomEvent,
        dispatchEvent(event) {
          return child.document.defaultView.dispatchEvent(
            new child.document.defaultView.CustomEvent(event.type, {
              detail: event.detail,
            }),
          );
        },
        matchMedia: w.matchMedia,
        scrollTo() {
          child.scrolled = true;
        },
        history: {
          replaceState(_s, _t, url) {
            setURL(url);
          },
        },
      };
      loc.replace = (url) => {
        loc.calls.push(url);
        setURL(url);
        const d = new JSDOM(
          "<title>" +
            loc.pathname +
            '</title><link rel="canonical" href="' +
            url +
            '"><a id="private" href="private-training.html">私人課</a><a id="anchor" href="#section">章節</a><a id="outside" href="https://lin.ee/test">LINE</a><a id="protected" href="group-feedback.html">回饋</a><a id="modified" href="pricing.html">價目</a><form action="https://example.com"></form><section id="section">訓練</section><video id="clip"></video>',
          { url, pretendToBeVisual: true, runScripts: "outside-only" },
        );
        children.push(d);
        child.document = d.window.document;
        d.window.HTMLElement.prototype.scrollIntoView = function () {
          this.dataset.scrolled = "true";
        };
        queueMicrotask(() => el.dispatchEvent(new w.Event("load")));
      };
      Object.defineProperty(el, "contentWindow", { get: () => child });
    }
    return el;
  };
  w.eval(code);
  return {
    w,
    audios,
    get frame() {
      return frame;
    },
    get child() {
      return child;
    },
    close() {
      cleanup(dom.window);
      children.forEach((d) => cleanup(d.window));
    },
  };
}
function click(w, node, opts = {}) {
  return node.dispatchEvent(
    new w.MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      button: 0,
      ...opts,
    }),
  );
}
test("random first track and alternating shuffle keep one audio element", async () => {
  const s = setup();
  try {
    assert.equal(s.audios.length, 1);
    assert.equal(s.w.HCFMusic.state().track, "為自己贏一次");
    assert.equal(s.audios[0].paused, true);
    s.w.HCFMusic.play();
    await tick();
    assert.equal(s.w.HCFMusic.state().playing, true);
    s.w.HCFMusic.next();
    await tick();
    assert.equal(s.w.HCFMusic.state().track, "HCF 原版配樂");
    s.audios[0].dispatchEvent(new s.w.Event("ended"));
    await tick();
    assert.equal(s.w.HCFMusic.state().track, "為自己贏一次");
    assert.equal(s.audios.length, 1);
  } finally {
    s.close();
  }
});
test("saved timestamp resumes and malformed saved state is safe", async () => {
  for (const storage of [
    "null",
    "bad json",
    JSON.stringify({ track: "original", time: 86, playing: false }),
  ]) {
    const s = setup({ storage });
    try {
      s.audios[0].dispatchEvent(new s.w.Event("loadedmetadata"));
      assert.equal(s.audios[0].currentTime, storage.startsWith("{") ? 86 : 0);
      assert.equal(s.audios[0].paused, true);
    } finally {
      s.close();
    }
  }
});
test("autoplay rejection stays honest and offers play control", async () => {
  const s = setup({ blocked: true });
  try {
    s.w.HCFMusic.play();
    await tick();
    assert.equal(s.w.HCFMusic.state().playing, false);
    assert.match(s.w.HCFMusic.state().message, /點播放/);
  } finally {
    s.close();
  }
});
test("navigation keeps same track and time while Back and anchors preserve routing", async () => {
  const s = setup();
  try {
    const audio = s.audios[0];
    let leaves = 0;
    s.w.addEventListener("pagehide", () => leaves++);
    s.w.HCFMusic.play();
    audio.currentTime = 88;
    await tick();
    const src = audio.src;
    assert.equal(click(s.w, s.w.document.getElementById("go")), false);
    await tick();
    assert.equal(s.w.location.pathname, "/booking.html");
    assert.equal(audio.currentTime, 88);
    assert.equal(audio.src, src);
    assert.equal(audio.loads, 0);
    assert.equal(s.child.HCFMusic, s.w.HCFMusic);
    assert.equal(leaves, 1);
    assert.equal(click(s.w, s.child.document.getElementById("private")), false);
    await tick();
    assert.equal(s.w.location.pathname, "/private-training.html");
    assert.equal(s.audios.length, 1);
    assert.equal(audio.currentTime, 88);
    const calls = s.child.location.calls.length;
    click(s.w, s.child.document.getElementById("anchor"));
    assert.equal(s.w.location.hash, "#section");
    assert.equal(
      s.child.document.getElementById("section").dataset.scrolled,
      "true",
    );
    assert.equal(s.child.location.calls.length, calls);
    s.w.history.replaceState(
      { hcfMusicShell: true },
      "",
      "/private-training.html",
    );
    s.w.dispatchEvent(new s.w.PopStateEvent("popstate"));
    assert.equal(s.child.location.calls.length, calls);
    assert.equal(s.child.scrolled, true);
    s.w.history.replaceState({ hcfMusicShell: true }, "", "/booking.html");
    s.w.dispatchEvent(new s.w.PopStateEvent("popstate"));
    await tick();
    assert.equal(s.child.location.pathname, "/booking.html");
    assert.equal(audio.currentTime, 88);
    assert.equal(
      click(s.w, s.child.document.getElementById("modified"), {
        ctrlKey: true,
      }),
      true,
    );
    assert.equal(s.w.location.pathname, "/booking.html");
    click(s.w, s.child.document.getElementById("outside"));
    assert.equal(s.child.document.getElementById("outside").target, "_top");
    click(s.w, s.child.document.getElementById("protected"));
    assert.equal(s.child.document.getElementById("protected").target, "_top");
    const form = s.child.document.querySelector("form");
    form.dispatchEvent(
      new s.w.Event("submit", { bubbles: true, cancelable: true }),
    );
    assert.equal(form.target, "_top");
    form.target = "fs_sink";
    form.dispatchEvent(
      new s.w.Event("submit", { bubbles: true, cancelable: true }),
    );
    assert.equal(form.target, "fs_sink");
  } finally {
    s.close();
  }
});
test("audible videos duck music and pausing restores volume", async () => {
  const s = setup();
  try {
    const v = s.w.document.getElementById("clip");
    Object.defineProperty(v, "paused", { value: false, configurable: true });
    v.muted = false;
    v.volume = 1;
    v.dispatchEvent(new s.w.Event("play"));
    assert.equal(s.audios[0].volume, 0.06);
    Object.defineProperty(v, "paused", { value: true, configurable: true });
    v.dispatchEvent(new s.w.Event("pause"));
    assert.equal(s.audios[0].volume, 0.38);
  } finally {
    s.close();
  }
});
test("child bootstrap shares the parent player and does not construct another audio", () => {
  let calls = 0;
  const api = {
    register() {
      calls++;
    },
  };
  const win = { parent: { HCFMusic: api } };
  vm.runInNewContext(code, { window: win });
  assert.equal(win.HCFMusic, api);
  assert.equal(calls, 1);
});
test("retired booking pages cannot automatically open LINE after an async response", () => {
  const source = fs.readFileSync(R + "/booking-app.js", "utf8");
  const start = source.indexOf("function openLineDraft(mode)");
  const end = source.indexOf("\n", start);
  const fn = source.slice(start, end);
  const calls = [];
  const context = {
    stopLine() {},
    lineHandoff: { url: "https://line.me/test" },
    track(...a) {
      calls.push(a);
    },
    document: {
      getElementById() {
        return { textContent: "" };
      },
    },
    window: {
      __hcfPageRetired: true,
      HCFMusic: {
        openExternal(u) {
          calls.push(u);
        },
      },
    },
  };
  vm.runInNewContext(fn + ';openLineDraft("automatic")', context);
  assert.equal(calls.length, 0);
  context.window.__hcfPageRetired = false;
  vm.runInNewContext('openLineDraft("automatic")', context);
  assert.equal(calls.length, 2);
  assert.equal(calls[1], "https://line.me/test");
});

function cleanup(w) {
  (w.__testObservers || []).forEach((o) => o.disconnect());
  w.close();
}
async function mountShark(w, { legacyMinimized = false } = {}) {
  const MO = w.MutationObserver;
  w.__testObservers = [];
  w.MutationObserver = class extends MO {
    constructor(fn) {
      super(fn);
      w.__testObservers.push(this);
    }
  };
  w.matchMedia = () => ({ matches: false, addEventListener() {} });
  w.HCFChoice = {};
  w.hcfGrowthTrack = () => {};
  if (legacyMinimized) w.sessionStorage.setItem("hcf-shark-minimized", "1");
  let asleep;
  const originalTimeout = w.setTimeout.bind(w);
  w.setTimeout = (fn, ms, ...args) => {
    if (ms === 20000) asleep = fn;
    return originalTimeout(fn, ms, ...args);
  };
  await w.eval(fs.readFileSync(R + "/hcf-assistant.js", "utf8"));
  const host = w.document.getElementById("hcf-shark-assistant"),
    root = host.shadowRoot;
  root.querySelector("link").dispatchEvent(new w.Event("load"));
  return { root, host, sleep: () => asleep() };
}
test("home restores the original logo launcher and keeps music inside its closed panel", async () => {
  const s = setup();
  try {
    s.w.document.body.classList.add("hcf-conversion-home");
    const { root, sleep } = await mountShark(s.w, { legacyMinimized: true });
    assert.equal(root.querySelector("#launcher").hidden, false);
    assert.equal(root.querySelector("#rest").hidden, true);
    assert.equal(root.querySelector("#panel").hidden, true);
    assert(root.querySelector("#panel #music-play"));
    assert.equal(s.w.document.getElementById("hcf-music-player"), null);
    root.querySelector("#launcher").click();
    assert.equal(root.querySelector("#panel").hidden, false);
    assert.equal(root.activeElement, root.querySelector("#close"));
    root.querySelector("#music-play").click();
    await tick();
    assert.equal(root.querySelector("#music-play").textContent, "暫停音樂");
    assert(!s.audios[0].paused);
    const first = root.querySelector("#music-track").textContent;
    root.querySelector("#music-next").click();
    await tick();
    assert.notEqual(root.querySelector("#music-track").textContent, first);
    root.querySelector("#music-play").click();
    await tick();
    assert.equal(s.audios[0].paused, true);
    assert.equal(root.querySelector("#music-play").textContent, "開啟音樂");
    root.querySelector("#close").click();
    assert(root.querySelector("#panel").hidden);
    assert(!root.querySelector("#launcher").hidden);
    sleep();
    assert.equal(root.querySelector(".widget").dataset.mood, "sleeping");
    root.querySelector("#launcher").click();
    assert.equal(root.querySelector(".widget").dataset.mood, "happy");
    await s.w.eval(fs.readFileSync(R + "/hcf-assistant.js", "utf8"));
    assert.equal(
      s.w.document.querySelectorAll("#hcf-shark-assistant").length,
      1,
    );
    assert.match(
      fs.readFileSync(R + "/hcf-assistant.css", "utf8"),
      /background:url\('\/assets\/final-logo.png'\)/,
    );
  } finally {
    s.close();
  }
});
test("shadow links preserve music and the next page shark controls the original audio", async () => {
  const s = setup();
  try {
    const { root } = await mountShark(s.w);
    root.querySelector("#music-play").click();
    await tick();
    s.audios[0].currentTime = 71;
    const a = s.w.document.createElement("a");
    a.href = "/booking.html#private=unsure";
    root.querySelector("#conversation").append(a);
    assert.equal(click(s.w, a, { composed: true }), false);
    await tick();
    assert.equal(s.w.location.pathname, "/booking.html");
    assert.equal(s.audios[0].currentTime, 71);
    assert(!s.audios[0].paused);
    assert.equal(s.audios.length, 1);
    assert(s.child.document.querySelector("script[src*=hcf-assistant]"));
    const cw = s.child.document.defaultView;
    cw.HCFMusic = s.child.HCFMusic;
    const next = await mountShark(cw);
    next.root.querySelector("#launcher").click();
    assert.equal(
      next.root.querySelector("#music-play").textContent,
      "暫停音樂",
    );
    next.root.querySelector("#music-play").click();
    await tick();
    assert(s.audios[0].paused);
    assert.equal(
      next.root.querySelector("#music-play").textContent,
      "開啟音樂",
    );
    next.root.querySelector("#music-next").click();
    await tick();
    assert(!s.audios[0].paused);
    assert.equal(
      next.root.querySelector("#music-track").textContent,
      s.w.HCFMusic.state().track,
    );
    assert.equal(s.audios.length, 1);
  } finally {
    s.close();
  }
});
test("restored shark retains keyboard movement and explicit minimize controls", async () => {
  const s = setup();
  try {
    const { root } = await mountShark(s.w);
    const launcher = root.querySelector("#launcher");
    launcher.dispatchEvent(
      new s.w.KeyboardEvent("keydown", { key: "Home", bubbles: true }),
    );
    assert.deepEqual(
      JSON.parse(s.w.localStorage.getItem("hcf-shark-position-v1")),
      { x: 1, y: 1 },
    );
    root.querySelector("#tuck").click();
    assert(launcher.hidden);
    assert(!root.querySelector("#rest").hidden);
    root.querySelector("#rest").click();
    assert(!launcher.hidden);
    assert(!root.querySelector("#panel").hidden);
  } finally {
    s.close();
  }
});
test("assistant state updates when music loads after the assistant", async () => {
  const d = new JSDOM("<main></main>", {
    url: "https://www.hsinchucombat.com/index.html",
    runScripts: "outside-only",
    pretendToBeVisual: true,
  });
  try {
    const w = d.window;
    const { root } = await mountShark(w);
    assert(root.querySelector("#music-play").disabled);
    w.HCFMusic = {
      state: () => ({ track: "為自己贏一次", playing: true, message: "" }),
    };
    w.dispatchEvent(new w.CustomEvent("hcfmusicchange"));
    assert(!root.querySelector("#music-play").disabled);
    assert.equal(
      root.querySelector("#music-track").textContent,
      "為自己贏一次",
    );
    assert.equal(root.querySelector("#music-play").textContent, "暫停音樂");
  } finally {
    cleanup(d.window);
  }
});

test("arena sound appears only inside the shark and stays independent from music", async () => {
  for (const early of [true, false]) {
    const s = setup();
    try {
      let enabled = false,
        calls = 0;
      const scene = {
        state: () => enabled,
        toggle() {
          calls++;
          enabled = !enabled;
          s.w.dispatchEvent(new s.w.Event("hcfarenasoundchange"));
        },
      };
      if (early) s.w.HCFArenaSound = scene;
      const { root } = await mountShark(s.w);
      const button = root.querySelector("#music-scene");
      assert.equal(button.hidden, !early);
      assert(root.querySelector("#panel").contains(button));
      if (!early) {
        s.w.HCFArenaSound = scene;
        s.w.dispatchEvent(new s.w.Event("hcfarenasoundready"));
        assert(!button.hidden);
      }
      button.click();
      assert.equal(calls, 1);
      assert.equal(button.getAttribute("aria-pressed"), "true");
      assert.equal(button.textContent, "關閉擂台音效");
      assert(s.audios[0].paused);
      button.click();
      assert.equal(button.getAttribute("aria-pressed"), "false");
      delete s.w.HCFArenaSound;
      s.w.dispatchEvent(new s.w.Event("hcfarenasoundchange"));
      assert(button.hidden);
    } finally {
      s.close();
    }
  }
});

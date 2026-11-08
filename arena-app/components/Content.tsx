"use client";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import defaults from "../lib/arena-default.json";
export type ArenaContent = typeof defaults;
const ContentContext = createContext<ArenaContent>(defaults);
export const useArenaContent = () => useContext(ContentContext);
function safeMedia(value: unknown, video = false): value is string {
  if (
    typeof value !== "string" ||
    value.length > 800 ||
    /[\s<>"'\\]/u.test(value)
  )
    return false;
  try {
    const u = new URL(value, "https://www.hsinchucombat.com");
    return (
      u.protocol === "https:" &&
      !u.username &&
      !u.password &&
      !u.hash &&
      !value.startsWith("//") &&
      (value.startsWith("/") || value.startsWith("https://")) &&
      (video ? /\.(mp4|webm|m4v)$/i : /\.(webp|avif|jpg|jpeg|png)$/i).test(
        u.pathname,
      )
    );
  } catch {
    return false;
  }
}
export function parseArenaContent(value: unknown): ArenaContent | null {
  if (!value || typeof value !== "object") return null;
  const v = value as ArenaContent;
  const text = (x: unknown, n: number) =>
    typeof x === "string" &&
    x.length > 0 &&
    x.length <= n &&
    !/[<>\u0000-\u0008\u000b\u000c\u000e-\u001f]/u.test(x);
  if (
    v.version !== 1 ||
    !text(v.headline, 40) ||
    /[\p{P}\p{S}]/u.test(v.headline) ||
    !text(v.intro, 180) ||
    !safeMedia(v.heroImage) ||
    !text(v.heroAlt, 160) ||
    !Array.isArray(v.moments) ||
    v.moments.length > 100 ||
    !Array.isArray(v.featured) ||
    v.featured.length > 3
  )
    return null;
  const ids = new Set<string>();
  for (const m of v.moments) {
    if (
      !m ||
      !/^[a-z0-9-]{1,48}$/.test(m.id) ||
      ids.has(m.id) ||
      !["training", "competition", "liqing", "ringside"].includes(m.section) ||
      !text(m.title, 60) ||
      /[\p{P}\p{S}]/u.test(m.title) ||
      !text(m.description, 240) ||
      !text(m.alt, 160) ||
      !safeMedia(m.image) ||
      (m.video && !safeMedia(m.video, true)) ||
      typeof m.visible !== "boolean" ||
      typeof m.portrait !== "boolean"
    )
      return null;
    ids.add(m.id);
  }
  if (
    v.featured.some((id) => !ids.has(id)) ||
    new Set(v.featured).size !== v.featured.length
  )
    return null;
  return { ...v, moments: v.moments.filter((m) => m.visible) };
}
export function ArenaContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ArenaContent>(defaults);
  const originalSchema = useRef<string | null>(null);
  useEffect(() => {
    let disposed = false,
      inFlight = false;
    let abort: AbortController | undefined;
    async function refresh() {
      if (disposed || inFlight || document.hidden) return;
      inFlight = true;
      abort = new AbortController();
      const timer = setTimeout(() => abort?.abort(), 8000);
      try {
        const r = await fetch(
          "https://hcf-admin.onrender.com/api/public/arena",
          { signal: abort.signal, credentials: "omit" },
        );
        if (!r.ok) return;
        const data = await r.json();
        const next = parseArenaContent(data.content);
        if (next && !disposed)
          setContent((previous) =>
            JSON.stringify(previous) === JSON.stringify(next) ? previous : next,
          );
      } catch {
      } finally {
        clearTimeout(timer);
        inFlight = false;
      }
    }
    void refresh();
    const interval = setInterval(refresh, 60000);
    const stop = (e?: PageTransitionEvent | Event) => {
      if (e && "persisted" in e && e.persisted) return;
      disposed = true;
      abort?.abort();
      clearInterval(interval);
    };
    document.addEventListener("visibilitychange", refresh);
    window.addEventListener("pagehide", stop);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", refresh);
      window.removeEventListener("pagehide", stop);
    };
  }, []);
  useEffect(() => {
    const el = document.querySelector('script[type="application/ld+json"]');
    if (!el) return;
    try {
      originalSchema.current ??= el.textContent || "{}";
      const data = JSON.parse(originalSchema.current);
      if (!Array.isArray(data["@graph"])) return;
      data["@graph"] = data["@graph"].filter(
        (node: Record<string, unknown>) => {
          if (node["@type"] !== "VideoObject") return true;
          const item = content.moments.find(
            (m) =>
              m.video &&
              new URL(m.video, "https://www.hsinchucombat.com").href ===
                node.contentUrl,
          );
          if (!item) return false;
          node.name = item.title;
          node.description = item.description;
          node.thumbnailUrl = new URL(
            item.image,
            "https://www.hsinchucombat.com",
          ).href;
          return true;
        },
      );
      el.textContent = JSON.stringify(data).replace(/</g, "\\u003c");
    } catch {}
  }, [content]);
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}
export function ArenaCover() {
  const c = useArenaContent();
  return (
    <img
      src={c.heroImage}
      alt={c.heroAlt}
      width="1600"
      height="1143"
      fetchPriority="high"
    />
  );
}
export function ArenaHeadline() {
  const c = useArenaContent();
  return (
    <>
      <p className="arrival-zh">{c.headline}</p>
      <p className="arrival-description">{c.intro}</p>
    </>
  );
}

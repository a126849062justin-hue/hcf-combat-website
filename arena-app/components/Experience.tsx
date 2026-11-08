"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useArena, chapters } from "../lib/store";
export function MotionControl() {
  const motion = useArena((s) => s.motion);
  return (
    <button
      className="motion-toggle"
      type="button"
      aria-pressed={motion}
      onClick={() => {
        useArena.getState().set({ motion: !motion });
        try {
          sessionStorage.setItem("hcf-arena-motion", String(!motion));
        } catch {}
      }}
    >
      {motion ? "減少動態" : "開啟動態"}
    </button>
  );
}
export function ChapterRail() {
  const active = useArena((s) => s.active);
  return (
    <nav className="chapter-rail" aria-label="故事章節">
      {chapters.map(([id, label], i) => (
        <a
          href={"#" + id}
          key={id}
          aria-current={active === id ? "location" : undefined}
        >
          <span>{String(i).padStart(2, "0")}</span>
          <b>{label}</b>
        </a>
      ))}
    </nav>
  );
}
export function ExperienceController() {
  const motion = useArena((s) => s.motion);
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const n = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    let saved = true;
    try {
      saved = sessionStorage.getItem("hcf-arena-motion") !== "false";
    } catch {}
    useArena.getState().set({
      motion: !reduce.matches && saved,
      low:
        innerWidth < 768 ||
        !!n.connection?.saveData ||
        (n.deviceMemory ?? 8) <= 4 ||
        (n.hardwareConcurrency ?? 8) <= 4,
    });
    const change = () => useArena.getState().set({ motion: !reduce.matches });
    reduce.addEventListener("change", change);
    const enter = () => useArena.getState().set({ entered: true });
    document.querySelector(".enter-button")?.addEventListener("click", enter);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0])
          useArena.getState().set({ active: visible[0].target.id });
      },
      { rootMargin: "-18% 0px -40% 0px", threshold: [0, 0.1, 0.4, 0.7] },
    );
    document.querySelectorAll(".chapter").forEach((el) => io.observe(el));
    let disposed = false;
    let destroySound: undefined | (() => void);
    import("../lib/sound").then((m) => {
      if (!disposed) destroySound = m.installArenaSound();
    });
    const retireSound = (event: PageTransitionEvent | Event) => {
      if ("persisted" in event && event.persisted) return;
      disposed = true;
      useArena.getState().set({ retired: true });
      destroySound?.();
    };
    window.addEventListener("pagehide", retireSound);
    return () => {
      disposed = true;
      destroySound?.();
      window.removeEventListener("pagehide", retireSound);
      reduce.removeEventListener("change", change);
      io.disconnect();
      document
        .querySelector(".enter-button")
        ?.removeEventListener("click", enter);
    };
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.documentElement.classList.toggle("arena-motion", motion);
    let lenis:
      | {
          destroy: () => void;
          raf: (t: number) => void;
          stop: () => void;
          start: () => void;
        }
      | undefined;
    let disposed = false;
    let ticker: undefined | ((t: number) => void);
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#arena",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => useArena.getState().set({ tour: self.progress }),
      });
      if (!motion) return;
      gsap.fromTo(
        ".arrival-photo img",
        { scale: 1.09 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#arrival",
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );
      document
        .querySelectorAll(".section-heading,.chapter-marker")
        .forEach((el) =>
          gsap.fromTo(
            el,
            { y: 24 },
            {
              y: 0,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 92%", once: true },
            },
          ),
        );
      gsap.to(".community-word", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "#community",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
    if (motion && !useArena.getState().low)
      import("lenis").then(({ default: Lenis }) => {
        if (disposed) return;
        const l = new Lenis({
          duration: 1.05,
          smoothWheel: true,
          anchors: true,
          prevent: (el) =>
            !!el.closest("dialog") || !!el.closest("#hcf-shark-assistant"),
        });
        lenis = l;
        l.on("scroll", ScrollTrigger.update);
        ticker = (t) => l.raf(t * 1000);
        gsap.ticker.add(ticker);
      });
    const dialogChange = () => {
      if (document.querySelector("dialog[open]")) lenis?.stop();
      else lenis?.start();
    };
    document.addEventListener("hcfarenadialog", dialogChange);
    const retire = (event: PageTransitionEvent | Event) => {
      if ("persisted" in event && event.persisted) return;
      disposed = true;
      if (ticker) gsap.ticker.remove(ticker);
      lenis?.destroy();
      ctx.revert();
      destroyed = true;
    };
    let destroyed = false;
    window.addEventListener("pagehide", retire);
    return () => {
      disposed = true;
      document.removeEventListener("hcfarenadialog", dialogChange);
      window.removeEventListener("pagehide", retire);
      if (!destroyed) {
        if (ticker) gsap.ticker.remove(ticker);
        lenis?.destroy();
        ctx.revert();
      }
      document.documentElement.classList.remove("arena-motion");
    };
  }, [motion]);
  return null;
}

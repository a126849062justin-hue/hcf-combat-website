"use client";
import dynamic from "next/dynamic";
import { Component, type ReactNode, useEffect, useRef, useState } from "react";
import { useArena, techniques } from "../lib/store";
const ArenaScene = dynamic(() => import("./ArenaScene"), {
  ssr: false,
  loading: () => (
    <div className="scene-loading" role="status">
      正在點亮擂台
    </div>
  ),
});
const FighterScene = dynamic(() => import("./FighterScene"), {
  ssr: false,
  loading: () => (
    <div className="scene-loading" role="status">
      動作準備中
    </div>
  ),
});
class SceneBoundary extends Component<
  { children: ReactNode; fallback: ReactNode; onError?: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError?.();
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
function useVisible(ref: React.RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      (e) => setVisible(e[0].isIntersecting),
      { rootMargin: "100px" },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [ref]);
  return visible;
}
export function ArenaJourney() {
  const ref = useRef<HTMLDivElement>(null),
    visible = useVisible(ref),
    entered = useArena((s) => s.entered),
    low = useArena((s) => s.low),
    motion = useArena((s) => s.motion),
    retired = useArena((s) => s.retired),
    ready = useArena((s) => s.sceneReady);
  const [orbit, setOrbit] = useState(false),
    [failed, setFailed] = useState(false);
  useEffect(() => {
    if (visible && !low && motion) useArena.getState().set({ entered: true });
  }, [visible, low, motion]);
  useEffect(() => {
    if (!entered || ready || failed) return;
    const timer = setTimeout(() => setFailed(true), 20000);
    return () => clearTimeout(timer);
  }, [entered, ready, failed]);
  return (
    <div className="arena-sticky" data-ready={ready} ref={ref}>
      <img
        className="arena-poster"
        src="/assets/arena/arena-poster.webp"
        width="1440"
        height="900"
        alt="HCF 品牌擂台概念場景 包含入口 擂台 沙包與原始鯊魚標誌"
        loading="lazy"
      />
      {entered && !failed && !retired && (
        <SceneBoundary
          onError={() => setFailed(true)}
          fallback={<span className="scene-fallback">以靜態場景繼續探索</span>}
        >
          <ArenaScene
            active={visible && motion}
            low={low}
            orbit={orbit}
            failed={() => setFailed(true)}
          />
        </SceneBoundary>
      )}
      {entered && !ready && !failed && (
        <div className="scene-loading" role="status">
          正在點亮擂台
        </div>
      )}
      <div className="scene-vignette" />
      <div className="scene-controls">
        <span className="scene-kicker">HCF ARENA</span>
        {!entered || failed ? (
          <button
            type="button"
            onClick={() => {
              setFailed(false);
              useArena.getState().set({ entered: true, sceneReady: false });
            }}
          >
            開啟擂台探索
          </button>
        ) : (
          <button
            type="button"
            aria-pressed={orbit}
            onClick={() => setOrbit(!orbit)}
          >
            {orbit ? "回到故事鏡頭" : "自由環繞"}
          </button>
        )}
        <a href="#training">前往訓練</a>
        <small>
          {orbit ? "拖曳環繞 捲動繼續故事" : "向下滑動探索 音效可在小鯊內開啟"}
        </small>
      </div>
    </div>
  );
}
export function TechniqueExperience() {
  const ref = useRef<HTMLDivElement>(null),
    visible = useVisible(ref),
    motion = useArena((s) => s.motion),
    retired = useArena((s) => s.retired),
    low = useArena((s) => s.low),
    index = useArena((s) => s.technique),
    running = useArena((s) => s.running),
    speed = useArena((s) => s.speed);
  const [enabled, setEnabled] = useState(false);
  const [manualPlay, setManualPlay] = useState(false);
  const playing = running && (motion || manualPlay);
  useEffect(() => {
    if (!motion) setManualPlay(false);
  }, [motion]);
  useEffect(() => {
    if (visible && motion && !low) setEnabled(true);
  }, [visible, motion, low]);
  return (
    <div className="technique-layout" ref={ref}>
      <div className="technique-stage">
        <div className="technique-grid" aria-hidden="true" />
        <span className="technique-index">0{index + 1}</span>
        {enabled && !retired ? (
          <SceneBoundary
            fallback={
              <div className="technique-placeholder">
                觀察動作路徑
                <br />
                實際訓練由教練帶領
              </div>
            }
          >
            <FighterScene active={visible && playing} low={low} />
          </SceneBoundary>
        ) : (
          <div className="technique-placeholder">
            <img
              src="/assets/huang-training/boxing-practice-665.webp"
              alt="黃謙和教練在館內練習拳法"
              width="665"
              height="1182"
              loading="lazy"
            />
            <button
              type="button"
              onClick={() => {
                setEnabled(true);
                setManualPlay(true);
                useArena.getState().set({ running: true });
              }}
            >
              開啟立體動作示意
            </button>
          </div>
        )}
        <div className="technique-controls">
          <button
            type="button"
            disabled={!enabled}
            aria-pressed={playing}
            onClick={() => {
              setManualPlay(true);
              useArena.getState().set({ running: !playing });
            }}
          >
            {playing ? "暫停動作" : "播放動作"}
          </button>
          <label>
            播放速度
            <select
              value={speed}
              onChange={(e) =>
                useArena.getState().set({ speed: Number(e.target.value) })
              }
            >
              <option value="0.65">慢速</option>
              <option value="1">正常</option>
              <option value="1.3">快速</option>
            </select>
          </label>
        </div>
      </div>
      <div className="technique-panel">
        <p className="eyebrow">SIX MOVEMENTS ONE FOUNDATION</p>
        <div
          className="technique-options"
          role="group"
          aria-label="選擇動作示意"
        >
          {techniques.map(([en, cn], i) => (
            <button
              type="button"
              key={en}
              aria-pressed={index === i}
              onClick={() => useArena.getState().set({ technique: i })}
            >
              <span>{en}</span>
              <small>{cn}</small>
            </button>
          ))}
        </div>
        <div className="technique-description" aria-live="polite">
          <h3>{techniques[index][1]}</h3>
          <p>{techniques[index][2]}</p>
        </div>
        <p className="technique-note">
          立體動作為風格化視覺示意
          <br />
          實際站架 發力與安全細節請由教練現場帶領
        </p>
        <a className="text-link" href="/booking.html#private=unsure">
          讓教練陪我練習
        </a>
      </div>
    </div>
  );
}

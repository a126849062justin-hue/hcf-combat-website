"use client";
import { useEffect, useRef, useState } from "react";
import originalMoments from "../lib/moments.json";
import { useArenaContent } from "./Content";
type Moment = (typeof originalMoments)[number];
const Play = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 5 11 7-11 7Z" />
  </svg>
);
function Viewer({
  item,
  close,
  next,
}: {
  item: Moment | null;
  close: () => void;
  next: (delta: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) d.showModal();
    if (!item && d.open) d.close();
    document.dispatchEvent(new Event("hcfarenadialog"));
    return () => {
      d.querySelectorAll("video").forEach((v) => v.pause());
    };
  }, [item]);
  return (
    <dialog
      className="arena-viewer"
      ref={ref}
      onClose={close}
      onKeyDown={(e) => {
        if ((e.target as HTMLElement).tagName === "VIDEO") return;
        if (e.key === "ArrowRight") {
          e.preventDefault();
          next(1);
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          next(-1);
        }
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="viewer-inner">
        <header>
          <div>
            <span>HCF FILM ROOM</span>
            <h2>{item?.title}</h2>
          </div>
          <button type="button" onClick={close} aria-label="關閉觀賞">
            關閉
          </button>
        </header>
        <div className="viewer-media" key={item?.id}>
          {item?.video ? (
            <video
              controls
              playsInline
              preload="metadata"
              poster={item.image}
              aria-label={item.title}
            >
              <source src={item.video} type="video/mp4" />
              <a href={item.video}>開啟影片</a>
            </video>
          ) : item ? (
            <img src={item.image} alt={item.alt} />
          ) : null}
        </div>
        <footer>
          <button type="button" onClick={() => next(-1)}>
            上一個時刻
          </button>
          <p>{item?.description}</p>
          <button type="button" onClick={() => next(1)}>
            下一個時刻
          </button>
        </footer>
      </div>
    </dialog>
  );
}
const zones = [
  {
    name: "泰拳訓練",
    en: "MUAY THAI",
    caption: "從站架到第一組拳腿",
    copy: "在持靶與反覆練習中 熟悉身體移動的節奏 零基礎也能從適合自己的程度開始",
    image: "/assets/training/coached-padwork.webp",
    video: "/assets/training/coached-padwork.mp4",
    link: "/group-classes.html",
    alt: "教練在館內持靶引導學員進行拳腿練習",
  },
  {
    name: "體能訓練",
    en: "CONDITIONING",
    caption: "把力量練進日常",
    copy: "透過課程中的體能與肌力練習 逐步建立運動習慣與身體控制",
    image: "/assets/training/coached-conditioning.webp",
    video: "/assets/training/coached-conditioning.mp4",
    link: "/strength.html",
    alt: "教練在旁引導學員進行戰繩體能訓練",
  },
  {
    name: "私人教練",
    en: "PERSONAL TRAINING",
    caption: "以你的目標為起點",
    copy: "讓教練了解你的經驗 目標與每週能投入的時間 一起安排適合你的第一堂體驗",
    image: "/assets/training/coached-padwork.webp",
    video: "/assets/training/coached-padwork.mp4",
    link: "/booking.html#private=unsure",
    alt: "館內教練近距離持靶指導學員",
  },
  {
    name: "技術對練",
    en: "CONTROLLED PRACTICE",
    caption: "在陪伴中練習應對",
    copy: "依照經驗與訓練目標 由教練評估適合的練習方式 對練需確認意願與護具 入門不以互相擊打為目標",
    image: "/assets/stories-20261108/t06-poster.webp",
    video: "/assets/stories-20261108/t06.mp4",
    link: "/group-classes.html",
    alt: "戴好護具的選手與夥伴進行賽前練習",
  },
];
export function TrainingSwitch() {
  const [active, setActive] = useState(0),
    [watch, setWatch] = useState(false);
  const z = zones[active];
  const trigger = useRef<HTMLButtonElement | null>(null);
  const item: Moment = {
    id: "zone" + active,
    section: "training",
    title: z.caption,
    description: z.copy,
    image: z.image,
    video: z.video,
    alt: z.alt,
    portrait: false,
  };
  return (
    <div className="training-layout">
      <div className="training-menu" role="tablist" aria-label="選擇訓練區">
        {zones.map((z, i) => (
          <button
            type="button"
            key={z.en}
            role="tab"
            id={"zone-tab-" + i}
            aria-controls="zone-panel"
            aria-selected={active === i}
            onClick={() => setActive(i)}
          >
            <span>0{i + 1}</span>
            <div>
              <small>{z.en}</small>
              <strong>{z.name}</strong>
            </div>
            <b aria-hidden="true">↗</b>
          </button>
        ))}
      </div>
      <div
        className="training-stage"
        role="tabpanel"
        id="zone-panel"
        aria-labelledby={"zone-tab-" + active}
      >
        <button
          className="training-media"
          type="button"
          aria-label={"觀看" + z.name + "影片"}
          onClick={(e) => {
            trigger.current = e.currentTarget;
            setWatch(true);
          }}
        >
          <img
            key={z.image}
            src={z.image}
            alt={z.alt}
            width="1280"
            height="720"
            loading="lazy"
          />
          <span className="play-disc">
            <Play />
          </span>
          <span className="film-label">走進真實訓練現場</span>
        </button>
        <div className="training-caption">
          <div>
            <h3>{z.caption}</h3>
            <p>{z.copy}</p>
          </div>
          <a href={z.link}>
            {active === 2 ? "安排我的第一堂體驗" : "認識這堂課"}
          </a>
        </div>
      </div>
      <Viewer
        item={watch ? item : null}
        close={() => {
          setWatch(false);
          trigger.current?.focus({ preventScroll: true });
        }}
        next={(d) => setActive((v) => (v + d + zones.length) % zones.length)}
      />
    </div>
  );
}
export function Transformation() {
  const [value, setValue] = useState(50);
  return (
    <div className="transformation-layout">
      <div className="compare">
        <div className="compare-picture">
          <img
            src="/story_kao_04.webp"
            alt="高大可投入訓練後的個人紀錄"
            width="900"
            height="1200"
            loading="lazy"
          />
          <div
            className="compare-before"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          >
            <img
              src="/story_kao_02.webp"
              alt="高大可開始這段訓練旅程前的生活照片"
              width="900"
              height="1200"
              loading="lazy"
            />
          </div>
          <div
            className="compare-handle"
            style={{ left: value + "%" }}
            aria-hidden="true"
          >
            <span>↔</span>
          </div>
          <span className="compare-tag before">BEFORE</span>
          <span className="compare-tag after">AFTER</span>
        </div>
        <label className="compare-control">
          <span>拖曳比較訓練前後</span>
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="調整訓練前後照片比例"
            aria-valuetext={"訓練前照片顯示" + value + "百分比"}
          />
        </label>
      </div>
      <div className="transformation-stats">
        <span className="eyebrow">KAO DA KE</span>
        <h3>高大可</h3>
        <div className="weight-before">
          <strong>104</strong>
          <span>
            KG
            <br />
            旅程起點
          </span>
        </div>
        <div className="weight-line" />
        <div className="weight-after">
          <strong>74</strong>
          <span>
            KG
            <br />
            走過的改變
          </span>
        </div>
        <p className="transformation-quote">
          真正的進步
          <br />
          是願意一次次回到這裡
        </p>
        <div className="transformation-path">
          <span>開始訓練</span>
          <i />
          <span>持續累積</span>
          <i />
          <span>站上擂台</span>
        </div>
      </div>
    </div>
  );
}
const filters = [
  ["all", "全部時刻"],
  ["training", "訓練過程"],
  ["competition", "選手備戰"],
  ["liqing", "立青泰拳"],
  ["ringside", "擂台現場"],
];
export function MomentsGallery() {
  const content = useArenaContent();
  const moments = content.moments;
  const [current, setCurrent] = useState<Moment | null>(null),
    [filter, setFilter] = useState("all");
  const trigger = useRef<HTMLElement | null>(null);
  useEffect(() => {
    setCurrent((current) =>
      current ? moments.find((m) => m.id === current.id) || null : null,
    );
  }, [moments]);
  const featured = content.featured
    .map((id) => moments.find((m) => m.id === id)!)
    .filter(Boolean);
  const list =
    filter === "all" ? moments : moments.filter((m) => m.section === filter);
  function open(e: React.MouseEvent<HTMLAnchorElement>, m: Moment) {
    if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
    e.preventDefault();
    trigger.current = e.currentTarget;
    setCurrent(m);
  }
  function close() {
    setCurrent(null);
    trigger.current?.focus({ preventScroll: true });
  }
  function card(m: Moment) {
    return (
      <a
        href={m.video || m.image}
        target="_blank"
        rel="noopener"
        key={m.id}
        className={"moment " + (m.portrait ? "portrait" : "")}
        onClick={(e) => open(e, m)}
      >
        <div className="moment-picture">
          <img
            src={m.image}
            alt={m.alt}
            loading="lazy"
            width={m.portrait ? 720 : 1280}
            height={m.portrait ? 1280 : 900}
          />
          <span className="moment-type">{m.video ? "FILM" : "PHOTO"}</span>
          <span className="moment-open">
            {m.video ? <Play /> : <span aria-hidden="true">↗</span>}
          </span>
        </div>
        <div className="moment-caption">
          <h3>{m.title}</h3>
          <p>{m.description}</p>
        </div>
      </a>
    );
  }
  return (
    <>
      <div className="featured-moments">{featured.map(card)}</div>
      <details className="film-archive">
        <summary>
          <span>進入影像紀錄室</span>
          <small>
            {moments.length} 個時刻 {moments.filter((m) => m.video).length}{" "}
            支影片
          </small>
          <span aria-hidden="true">＋</span>
        </summary>
        <div className="moment-filters" role="group" aria-label="影像分類">
          {filters.map(([id, label]) => (
            <button
              type="button"
              key={id}
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="moments-grid">{list.map(card)}</div>
        <p className="archive-count" aria-live="polite">
          共 {list.length} 個真實時刻
        </p>
      </details>
      <Viewer
        item={current}
        close={close}
        next={(d) => {
          if (current)
            setCurrent(
              moments[
                (moments.findIndex((m) => m.id === current.id) +
                  d +
                  moments.length) %
                  moments.length
              ],
            );
        }}
      />
    </>
  );
}

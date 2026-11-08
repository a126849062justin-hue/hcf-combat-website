import Script from "next/script";
import {
  ArenaContentProvider,
  ArenaCover,
  ArenaHeadline,
} from "../../components/Content";
import {
  ExperienceController,
  ChapterRail,
  MotionControl,
} from "../../components/Experience";
import {
  ArenaJourney,
  TechniqueExperience,
} from "../../components/SceneIsland";
import {
  TrainingSwitch,
  Transformation,
  MomentsGallery,
} from "../../components/Story";
import schema from "../../lib/schema.json";
const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 12h15M12 5l7 7-7 7" />
  </svg>
);
const Marker = ({ n, en }: { n: string; en: string }) => (
  <div className="chapter-marker">
    <span>{n}</span>
    <p>{en}</p>
    <i />
  </div>
);
export default function Fighters() {
  return (
    <>
      <a className="skip-link" href="#training">
        直接閱讀訓練與比賽內容
      </a>
      <header className="arena-header">
        <a className="wordmark" href="/" aria-label="HCF 新竹格鬥首頁">
          <span>HCF</span>
          <small>
            HSINCHU
            <br />
            COMBAT
          </small>
        </a>
        <nav aria-label="主要導覽">
          <a href="/team.html">教練團隊</a>
          <a href="/group-classes.html">課程介紹</a>
          <a className="header-book" href="/booking.html" data-cta>
            安排我的第一堂體驗 <Arrow />
          </a>
        </nav>
      </header>
      <ChapterRail />
      <div className="arena-prologue" aria-hidden="true">
        <img src="/assets/final-logo.webp" alt="" width="180" height="180" />
        <span>HONOR COURAGE FAITH</span>
      </div>
      <ArenaContentProvider>
        <main>
          <section
            id="arrival"
            className="arrival chapter"
            aria-labelledby="arena-title"
          >
            <div className="arrival-photo">
              <ArenaCover />
              <div className="arrival-shade" />
            </div>
            <div className="arrival-grid" aria-hidden="true" />
            <div className="arrival-content">
              <p className="eyebrow">HSINCHU COMBAT SINCE 2022</p>
              <h1 id="arena-title">
                <span>ENTER</span>
                <span>
                  THE <em>ARENA</em>
                </span>
              </h1>
              <div className="arrival-bottom">
                <div>
                  <ArenaHeadline />
                  <p className="muted">Every Champion Starts With One Step</p>
                </div>
                <a className="enter-button" href="#arena">
                  <span>踏入 HCF 的世界</span>
                  <Arrow />
                </a>
              </div>
            </div>
            <div className="arrival-foot">
              <span>
                HONOR <b>COURAGE</b> FAITH
              </span>
              <span>
                向下探索 <i className="scroll-line" />
              </span>
              <MotionControl />
            </div>
          </section>
          <section
            id="arena"
            className="arena-chapter chapter"
            aria-labelledby="arena-heading"
          >
            <ArenaJourney />
            <div className="arena-intro">
              <Marker n="01" en="CROSS THE THRESHOLD" />
              <h2 id="arena-heading">
                門的另一邊
                <br />
                是更勇敢的自己
              </h2>
              <p>
                從看著擂台 到踏上自己的訓練旅程
                <br />
                每一次開始 都值得被認真對待
              </p>
            </div>
            <div className="arena-outro">
              <p className="eyebrow">YOUR FIRST ROUND</p>
              <h3>
                不需要先變強
                <br />
                才走進這裡
              </h3>
              <a className="text-link" href="#training">
                先認識你的第一堂課 <Arrow />
              </a>
            </div>
          </section>
          <section
            id="training"
            className="training section chapter"
            aria-labelledby="training-heading"
          >
            <Marker n="02" en="BUILT THROUGH THE WORK" />
            <div className="section-heading">
              <h2 id="training-heading">
                一步一步
                <br />
                <span className="outline">練成自己</span>
              </h2>
              <p>
                沙袋前的重複 教練的一次提醒
                <br />
                你的進步 藏在每一次願意再試一次
              </p>
            </div>
            <TrainingSwitch />
          </section>
          <section
            id="technique"
            className="technique section chapter"
            aria-labelledby="technique-heading"
          >
            <Marker n="03" en="THE LANGUAGE OF MOVEMENT" />
            <div className="section-heading">
              <h2 id="technique-heading">
                每個動作
                <br />
                都有它的語言
              </h2>
              <p>
                選擇一個動作 看見身體的移動路徑
                <br />
                再把畫面中的好奇 帶進真實訓練
              </p>
            </div>
            <TechniqueExperience />
          </section>
          <section
            id="coaches"
            className="coaches chapter"
            aria-labelledby="coaches-heading"
          >
            <div className="coach-banner">
              <img
                src="/assets/covers/coaches-1280.webp"
                width="1280"
                height="720"
                alt="HCF 教練高大可 黃謙和與小米的團隊合照"
                loading="lazy"
              />
              <div className="coach-banner-label">
                <span>IN YOUR CORNER</span>
                <strong>
                  你的每一步
                  <br />
                  我們都在
                </strong>
              </div>
            </div>
            <div className="section">
              <Marker n="04" en="MEET YOUR CORNER" />
              <div className="section-heading">
                <h2 id="coaches-heading">
                  帶你練的
                  <br />
                  也走過這條路
                </h2>
                <a className="text-link" href="/team.html">
                  認識完整教練團隊 <Arrow />
                </a>
              </div>
              <div className="coach-roster">
                {[
                  {
                    n: "黃謙和",
                    en: "HUANG CHIEN HO",
                    role: "總教練",
                    copy: "從基本拳腿到擂台經驗 陪你把每個細節練進身體",
                    img: "/assets/coaches/huang-head-coach-20261109-1200.webp",
                    url: "/coach-huang.html",
                  },
                  {
                    n: "高大可",
                    en: "KAO DA KE",
                    role: "泰拳教練",
                    copy: "從自己的改變出發 陪伴每一位願意踏出第一步的人",
                    img: "/coach_kao.webp",
                    url: "/story-kao.html",
                  },
                  {
                    n: "小米",
                    en: "MI",
                    role: "泰拳與肌力體能",
                    copy: "把勇敢與溫柔帶進訓練 在每一次練習中找回力量",
                    img: "/coach_mi.webp",
                    url: "/story-mi.html",
                  },
                ].map((c, i) => (
                  <a className={"coach"+(i===0?" head-coach-card":"")} href={c.url} key={c.n}>
                    <div className="coach-photo">
                      <img
                        src={c.img}
                        alt={c.n + "教練形象照"}
                        width="600"
                        height="900"
                        loading="lazy"
                      />
                      <span>0{i + 1}</span>
                      <Arrow />
                    </div>
                    <div className="coach-meta">
                      <small>{c.role}</small>
                      <h3>{c.n}</h3>
                      <span>{c.en}</span>
                      <p>{c.copy}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
          <section
            id="transformation"
            className="transformation section chapter"
            aria-labelledby="transformation-heading"
          >
            <Marker n="05" en="THE FIGHT WITHIN" />
            <div className="section-heading">
              <h2 id="transformation-heading">
                改變的不只是
                <br />
                <span className="red">體重計上的數字</span>
              </h2>
              <p>
                高大可的真實故事
                <br />
                從普通上班族 到站上擂台的自己
              </p>
            </div>
            <Transformation />
            <div className="transformation-note">
              <p>
                104 公斤到 74 公斤的個人歷程
                <br />
                每個人的起點與變化不同 找到適合自己的步調
              </p>
              <a className="text-link" href="/story-kao.html">
                走進大可的完整故事 <Arrow />
              </a>
            </div>
          </section>
          <section
            id="records"
            className="records section chapter"
            aria-labelledby="records-heading"
          >
            <Marker n="06" en="EARNED ROUND BY ROUND" />
            <div className="section-heading">
              <h2 id="records-heading">
                <span className="display-en">EARNED</span>
                <br />
                每一次上場 都算數
              </h2>
              <p>
                不只記下舉手的那一刻
                <br />
                也留下訓練 備戰與教練始終在身旁的證明
              </p>
            </div>
            <MomentsGallery />
          </section>
          <section
            id="community"
            className="community chapter"
            aria-labelledby="community-heading"
          >
            <div className="section">
              <Marker n="07" en="STRONGER TOGETHER" />
              <div className="section-heading">
                <h2 id="community-heading">
                  一個人的開始
                  <br />
                  一群人的旅程
                </h2>
                <p>
                  認真練習 也一起笑著留下合照
                  <br />在 HCF 找到陪你繼續走下去的人
                </p>
              </div>
            </div>
            <div className="community-photo">
              <img
                src="/assets/training/hcf-community-ring-20261107-1280.webp"
                width="1280"
                height="1316"
                alt="HCF 教練與學員在拳館擂台和鯊魚旗前合照"
                loading="lazy"
              />
              <div className="community-word" aria-hidden="true">
                ONE TEAM
              </div>
            </div>
            <div className="community-strip">
              <span>HONOR</span>
              <i />
              <span>COURAGE</span>
              <i />
              <span>FAITH</span>
            </div>
          </section>
          <section
            id="begin"
            className="begin section chapter"
            aria-labelledby="begin-heading"
          >
            <div className="final-spotlight" aria-hidden="true" />
            <Marker n="08" en="BECOME ONE OF US" />
            <img
              className="final-crest"
              src="/assets/final-logo.webp"
              width="140"
              height="140"
              alt="HCF 新竹格鬥原始鯊魚標誌"
              loading="lazy"
            />
            <p className="eyebrow">THE NEXT CHAPTER IS YOURS</p>
            <h2 id="begin-heading">
              YOUR JOURNEY
              <br />
              <span>STARTS TODAY</span>
            </h2>
            <p>
              你不需要先成為格鬥家
              <br />
              只需要願意走出第一步
            </p>
            <a className="primary-button" href="/booking.html" data-cta>
              安排我的第一堂體驗 <Arrow />
            </a>
            <p className="begin-note">告訴教練你的目標 一起找到適合的開始</p>
          </section>
        </main>
      </ArenaContentProvider>
      <footer className="arena-footer">
        <a className="wordmark" href="/">
          <span>HCF</span>
          <small>
            HSINCHU
            <br />
            COMBAT
          </small>
        </a>
        <p>新竹市北區林森路 301 號 2 樓</p>
        <nav aria-label="頁尾導覽">
          <a href="/schedule.html">最新課表</a>
          <a href="/pricing.html">課程方案</a>
          <a href="/legal.html">隱私權政策</a>
        </nav>
        <small>HCF HSINCHU COMBAT 2026</small>
      </footer>
      <div className="mcta arena-mobile-cta">
        <span>你的第一步 從這裡開始</span>
        <a href="/booking.html" data-cta>
          安排體驗 <Arrow />
        </a>
      </div>
      <ExperienceController />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Script src="/hcf-bgm.js?v=20261109-arena" strategy="afterInteractive" />
      <Script
        src="/hcf-analytics.js?v=20261104-audit"
        strategy="afterInteractive"
      />
      <Script
        src="/hcf-growth-events.js?v=20261104-audit"
        strategy="afterInteractive"
      />
    </>
  );
}

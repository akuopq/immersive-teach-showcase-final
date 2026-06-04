import { createFileRoute } from "@tanstack/react-router";
import { Compass } from "@/components/Compass";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { GalleryWall } from "@/components/GalleryWall";
import { ChevronDown, MapPin, Sparkles, Target } from "lucide-react";
import heroMap from "@/assets/hero-map.jpg";
import parchment from "@/assets/parchment-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "彰化探險隊 · 自主學習樂 · 教學成果展" },
      {
        name: "description",
        content:
          "彰化縣北斗國小 115 學年度公開授課|張哲銘老師|綜合活動五下「自主學習樂 — 學習有計畫」六節課程沉浸式成果展。",
      },
      { property: "og:title", content: "彰化探險隊 · 自主學習樂 · 教學成果展" },
      {
        property: "og:description",
        content: "六節課的學習探險,從點燃動機到登台發表,看見自主學習的歷程。",
      },
      { property: "og:image", content: heroMap },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== HERO ===== */}
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroMap}
            alt="彰化探險隊地圖"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/40 to-background" />
        </div>

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-parchment">
          <div className="flex items-center gap-3">
            <Compass className="h-9 w-9 text-gold" />
            <div className="leading-tight">
              <div className="font-display text-lg">彰化探險隊</div>
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-80">
                Self-directed Learning · 2026
              </div>
            </div>
          </div>
          <div className="hidden gap-7 font-display text-sm md:flex">
            <a href="#concept" className="hand-arrow">課程理念</a>
            <a href="#journey" className="hand-arrow">六節旅程</a>
            <a href="#gallery" className="hand-arrow">成果牆</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-32 pt-20 md:pt-32 text-parchment">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-parchment/30 bg-parchment/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            115 學年度 · 北斗國小 · 公開授課
          </div>
          <h1 className="max-w-3xl text-balance font-display text-5xl leading-[1.1] md:text-7xl">
            自主學習樂<br />
            <span className="text-gold">學習,有計畫。</span>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-parchment/85">
            一段六節課的探險旅程。從點燃內在動機,到把巨大的目標拆成可執行的積木;
            從面對失敗的微調,到組成團隊踏查彰化。這是五年級綜合活動課堂裡,
            一群學生為自己畫下的航線圖。
          </p>

          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
            {[
              { k: "授課教師", v: "張哲銘" },
              { k: "教學節次", v: "6 節" },
              { k: "授課對象", v: "五年丁班" },
              { k: "授課期間", v: "03/30–04/14" },
            ].map((m) => (
              <div key={m.k}>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-parchment/60">{m.k}</dt>
                <dd className="mt-1 font-display text-2xl text-parchment">{m.v}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#concept"
            className="mt-16 inline-flex items-center gap-2 text-sm text-parchment/80 transition hover:text-gold"
          >
            <ChevronDown className="h-4 w-4 animate-bounce" />
            展開航海日誌
          </a>
        </div>
      </header>

      {/* ===== CONCEPT ===== */}
      <section id="concept" className="relative py-28">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-40"
          style={{ backgroundImage: `url(${parchment})`, backgroundSize: "cover" }}
        />
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-8">
            <div>
              <span className="stamp text-forest">Chapter I</span>
              <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl text-forest-deep md:text-5xl">
                為什麼,我們要學會為自己學習?
              </h2>
            </div>
            <Compass className="hidden h-24 w-24 text-terracotta/60 md:block" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                tag: "總綱核心素養 · A2",
                title: "系統思考與解決問題",
                body:
                  "具備問題理解、思辨分析、推理批判的系統思考與後設思考素養,並能行動與反思,以有效處理及解決生活、生命問題。",
              },
              {
                icon: Target,
                tag: "領域核心素養 · 綜-E-A2",
                title: "探索方法,自律負責",
                body:
                  "探索學習方法,培養思考能力與自律負責的態度,並透過體驗與實踐解決日常生活問題。",
              },
              {
                icon: MapPin,
                tag: "教學目標",
                title: "三件學生會帶走的事",
                body:
                  "分析完成自我學習目標所需的能力;依目標訂定適合的學習計畫;依自主學習歷程完成學習。",
              },
            ].map((c, i) => (
              <article
                key={i}
                className="paper relative rounded-lg p-7"
                style={{ transform: `rotate(${i === 1 ? 0 : i === 0 ? -0.4 : 0.4}deg)` }}
              >
                <c.icon className="h-7 w-7 text-terracotta" />
                <div className="mt-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {c.tag}
                </div>
                <h3 className="mt-2 font-display text-2xl text-forest-deep">{c.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-foreground/75">{c.body}</p>
              </article>
            ))}
          </div>

          <blockquote className="mx-auto mt-20 max-w-3xl text-center">
            <p className="font-display text-2xl leading-relaxed text-forest-deep md:text-3xl">
              「真正的學習,不是被推著走完地圖,<br />
              而是學會自己拿起羅盤。」
            </p>
            <footer className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              — 課程設計筆記
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ===== JOURNEY ===== */}
      <section id="journey" className="relative bg-secondary/40 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="stamp text-terracotta">Chapter II</span>
            <h2 className="mt-4 font-display text-4xl text-forest-deep md:text-5xl">
              六節課的學習航線
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/70">
              每一節都是一個停靠點,留下一份教材、一段對話、一個被打開的腦袋。
            </p>
          </div>
          <JourneyTimeline />
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="stamp text-forest">Chapter III</span>
              <h2 className="mt-4 font-display text-4xl text-forest-deep md:text-5xl">
                探險現場 · 學生作品與成果
              </h2>
              <p className="mt-3 max-w-xl text-foreground/70">
                討論的眉頭、發表時的笑、領獎的眼神 —— 把那些被相機接住的瞬間,釘在這面牆上。
              </p>
            </div>
            <div className="text-right text-xs uppercase tracking-[0.25em] text-muted-foreground">
              照片陸續更新中
            </div>
          </div>
          <GalleryWall />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative overflow-hidden bg-forest-deep py-16 text-parchment">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Compass className="h-10 w-10 text-gold" />
              <div>
                <div className="font-display text-xl">彰化探險隊</div>
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">
                  Self-directed Learning Showcase
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-parchment/75">
              彰化縣北斗國民小學 115 學年度教師專業成長社群 · 公開授課教學設計。
              綜合活動五下「單元一 自主學習樂 · 活動一 學習有計畫」。
            </p>
          </div>
          <div className="text-sm text-parchment/70">
            <div className="font-display text-base text-gold">張哲銘</div>
            <div>教材來源 · 南一書局 綜合活動五下</div>
            <div className="mt-4 text-[11px] uppercase tracking-[0.25em] opacity-60">
              © 2026 北斗國小
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

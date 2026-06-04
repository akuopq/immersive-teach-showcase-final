import { FileText, Download, Eye } from "lucide-react";
import part1 from "@/assets/pdfs/part1-spark.pdf.asset.json";

export type Stop = {
  no: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string[];
  asset?: { label: string; href?: string };
};

const stops: Stop[] = [
  {
    no: "01",
    title: "點燃動機",
    subtitle: "The Spark",
    description: "從生活中的渴望出發,讓學生為自己的學習找到一個值得啟程的理由。透過故事與提問,點亮內在驅力。",
    focus: ["定義自主學習", "找到個人學習目標", "從動機到承諾"],
    asset: { label: "教材 PDF · 點燃動機", href: "https://drive.google.com/file/d/1nxhijbtPMU45lwUOmlIQl7zxT4M-JKda/view?usp=sharing" },
  },
  {
    no: "02",
    title: "把大怪物變成小積木",
    subtitle: "Break it Down",
    description: "面對龐大模糊的目標,學會把它拆解成一塊塊可執行的積木。系統思考的第一個練習。",
    focus: ["問題拆解", "任務排序", "可行性評估"],
    asset: { label: "教材 PDF · 把大怪物變成小積木", href: "https://drive.google.com/file/d/10db3D2ia0Wmr4dMiw2IUdqYAWb84pe6s/view?usp=sharing" },
  },
  {
    no: "03",
    title: "失敗了調一下就好",
    subtitle: "Iterate, Don't Quit",
    description: "用實驗的眼光看待失敗,學會微調與反思。培養面對挫折時的後設思考與韌性。",
    focus: ["反思檢核", "策略微調", "成長心態"],
    asset: { label: "教材 PDF · 失敗了調一下就好", href: "https://drive.google.com/file/d/1oGZ1wFTtG90q_XyzI9hHwGVf0Lzg7pOA/view?usp=sharing" },
  },
  {
    no: "04",
    title: "Mission J.A.R.V.I.S. 2.0",
    subtitle: "Suit Up",
    description: "啟動自己的智慧管家,把前三節學到的方法整合成一套屬於自己的學習作戰系統。",
    focus: ["自我管理策略", "工具整合", "計畫成型"],
    asset: { label: "教材 PDF · Mission J.A.R.V.I.S. 2.0", href: "https://drive.google.com/file/d/1y01zPiE_MSUMC7mD-pWR0C8KuTbC7NW0/view?usp=sharing" },
  },
  {
    no: "05",
    title: "彰化探險隊:團隊計畫任務卡",
    subtitle: "Expedition Begins",
    description: "從個人走向團隊。各組以彰化為基地,完成一份真實的戶外教育探勘計畫,實踐分組學習。",
    focus: ["小組分工", "任務卡規劃", "在地踏查"],
    asset: { label: "學習單 · 團隊計畫任務卡", href: "https://docs.google.com/document/d/1KIh6NyDlISO0eJ5_Yhe5AlVDvT1-VLxR/edit" },
  },
  {
    no: "06",
    title: "成果發表 · 戶外教育票選",
    subtitle: "Summit & Vote",
    description: "各組登台發表探勘成果,全班票選出五年丁班下學期戶外教育的地點。學習真正落地。",
    focus: ["成果發表", "同儕評分", "民主決策"],
    asset: { label: "成果票選表", href: "https://drive.google.com/file/d/16f7j3Xa7Jw23R8iYsUgeMkTn1BEoWSg6/view?usp=sharing" },
  },
];

export function JourneyTimeline() {
  return (
    <div className="relative">
      {/* dotted vertical path */}
      <div
        aria-hidden
        className="absolute left-[28px] top-4 bottom-4 w-px bg-[repeating-linear-gradient(to_bottom,var(--color-border)_0_6px,transparent_6px_14px)] md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="space-y-16">
        {stops.map((s, i) => {
          const left = i % 2 === 0;
          return (
            <li
              key={s.no}
              className="relative grid grid-cols-[64px_1fr] gap-6 md:grid-cols-2 md:gap-16"
            >
              {/* Marker */}
              <div className="md:col-span-2 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-forest-deep text-parchment shadow-deep ring-4 ring-parchment">
                  <span className="font-display text-lg">{s.no}</span>
                  <span className="absolute -inset-2 rounded-full border border-dashed border-forest/40" />
                </div>
              </div>

              {/* Card */}
              <article
                className={`paper rounded-lg p-6 md:p-8 ${
                  left ? "md:col-start-1 md:mr-12" : "md:col-start-2 md:ml-12"
                }`}
              >
                <div className="mb-3 flex items-center gap-3 text-terracotta">
                  <span className="stamp text-terracotta">Stop · {s.no}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {s.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-3xl text-forest-deep">{s.title}</h3>
                <p className="mt-4 text-pretty leading-relaxed text-foreground/80">
                  {s.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.focus.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-foreground/70"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                {s.asset && (
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-dashed border-border pt-4 text-sm">
                    <FileText className="h-4 w-4 text-terracotta" />
                    <span className="font-medium">{s.asset.label}</span>
                    {s.asset.href ? (
                      <div className="ml-auto flex items-center gap-2">
                        <a
                          href={s.asset.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-forest-deep px-3 py-1.5 text-xs font-medium text-parchment transition hover:bg-forest"
                        >
                          <Eye className="h-3.5 w-3.5" /> 線上閱讀
                        </a>
                        <a
                          href={s.asset.href}
                          download
                          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-foreground/70 transition hover:bg-muted"
                        >
                          <Download className="h-3.5 w-3.5" /> 下載
                        </a>
                      </div>
                    ) : (
                      <span className="ml-auto text-xs uppercase tracking-widest text-muted-foreground/70">
                        等待上傳
                      </span>
                    )}
                  </div>
                )}
              </article>

              {/* spacer on other side for desktop */}
              <div className={left ? "hidden md:block" : "hidden md:block md:col-start-1 md:row-start-1"} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

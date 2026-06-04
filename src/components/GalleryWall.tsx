import { useEffect, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";

const slots = [
  {
    label: "小組討論",
    note: "腦力激盪 · 任務拆解",
    src: "https://lh3.googleusercontent.com/d/1CEtojAuGOAnTqfCuXddVgD6sTlhBjEFI",
    alt: "學生分組進行自主學習任務討論的課堂照片",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    label: "任務卡製作",
    note: "團隊計畫成型",
    src: "https://lh3.googleusercontent.com/d/1y6qR7o9336XD9eMzyld0hQ3x7fqU6aTt",
    alt: "學生製作探險任務卡與學習計畫的成果照片",
    span: "",
    aspect: "aspect-square",
  },
  {
    label: "小組發表",
    note: "登台說明探勘構想",
    src: "https://lh3.googleusercontent.com/d/1w6cKhbvOMV-crR7n3Jgrh6ZrUJRAJk7Z",
    alt: "學生小組上台發表自主學習探勘構想的照片",
    span: "",
    aspect: "aspect-square",
  },
  {
    label: "同儕互評",
    note: "票選 · 評分",
    src: "https://lh3.googleusercontent.com/d/1qUhx4WGUpTOYdFOo0_b4jsX-NsoIAACu",
    alt: "學生進行同儕互評與票選評分的課堂照片",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    label: "頒獎時刻",
    note: "團隊榮耀",
    src: "https://lh3.googleusercontent.com/d/10RSSHPiR89FEO1mwbnoyNfNAz9Kk9lpu",
    alt: "課程成果頒獎時刻與學生團隊榮耀的照片",
    span: "md:col-span-2",
    aspect: "aspect-[16/9] md:aspect-auto",
  },
];

function PhotoFallback({ label, note }: { label: string; note: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted/40 p-4 text-center">
      <Camera className="h-6 w-6 text-terracotta/70" />
      <div className="font-display text-lg text-forest-deep">{label}</div>
      <div className="text-xs text-muted-foreground">{note}</div>
      <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground/70">
        照片載入中或暫時無法顯示
      </div>
    </div>
  );
}

export function GalleryWall() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(() => new Set());
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const activeSlot = activeIndex === null ? null : slots[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? slots.length - 1 : (current - 1 + slots.length) % slots.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current === null ? 0 : (current + 1) % slots.length));
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {slots.map((s, i) => {
          const hasFailed = failedImages.has(i);

          return (
            <figure
              key={s.label}
              className={`group relative overflow-hidden rounded-md border border-border bg-muted/40 shadow-paper ${s.span} ${s.aspect}`}
              style={{ transform: `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)` }}
            >
              <button
                type="button"
                className="absolute inset-0 z-10 cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`放大檢視照片：${s.label}`}
                onClick={() => setActiveIndex(i)}
              >
                <span className="sr-only">放大檢視照片：{s.label}</span>
              </button>

              {hasFailed ? (
                <PhotoFallback label={s.label} note={s.note} />
              ) : (
                <img
                  src={s.src}
                  alt={s.alt}
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    setFailedImages((current) => {
                      const next = new Set(current);
                      next.add(i);
                      return next;
                    });
                  }}
                />
              )}

              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-forest-deep/80 via-forest-deep/45 to-transparent px-4 pb-4 pt-12 text-parchment">
                <div className="font-display text-lg leading-tight">{s.label}</div>
                <div className="mt-1 text-xs text-parchment/80">{s.note}</div>
              </figcaption>

              {/* corner tape */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-2 left-1/2 z-20 h-5 w-16 -translate-x-1/2 rotate-[-4deg] bg-gold/60 shadow-sm"
              />
            </figure>
          );
        })}
      </div>

      {activeSlot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/90 px-4 py-6 backdrop-blur-sm md:px-8"
          role="dialog"
          aria-modal="true"
          aria-label={`照片燈箱：${activeSlot.label}`}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-parchment/25 bg-parchment/10 p-2 text-parchment transition hover:bg-parchment/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold md:right-8 md:top-8"
            aria-label="關閉燈箱"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex(null);
            }}
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-parchment/25 bg-parchment/10 p-2 text-parchment transition hover:bg-parchment/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold md:left-8 md:p-3"
            aria-label="上一張照片"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure
            className="paper relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-lg p-3 md:p-4"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => {
              if (touchStartX === null) return;
              const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
              const diff = touchStartX - touchEndX;

              if (Math.abs(diff) > 45) {
                if (diff > 0) showNext();
                else showPrevious();
              }

              setTouchStartX(null);
            }}
          >
            <div className="relative flex max-h-[72vh] items-center justify-center overflow-hidden rounded-md bg-muted/40">
              {failedImages.has(activeIndex) ? (
                <div className="relative h-[55vh] w-full min-h-72">
                  <PhotoFallback label={activeSlot.label} note={activeSlot.note} />
                </div>
              ) : (
                <img
                  src={activeSlot.src}
                  alt={activeSlot.alt}
                  className="max-h-[72vh] w-full object-contain"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    setFailedImages((current) => {
                      const next = new Set(current);
                      next.add(activeIndex);
                      return next;
                    });
                  }}
                />
              )}
            </div>

            <figcaption className="flex flex-col gap-1 px-1 pb-1 pt-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
              <div>
                <div className="font-display text-2xl text-forest-deep">{activeSlot.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{activeSlot.note}</div>
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {activeIndex + 1} / {slots.length}
              </div>
            </figcaption>

            {/* lightbox tape */}
            <span
              aria-hidden
              className="absolute -top-2 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-3deg] bg-gold/60 shadow-sm"
            />
          </figure>

          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-parchment/25 bg-parchment/10 p-2 text-parchment transition hover:bg-parchment/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold md:right-8 md:p-3"
            aria-label="下一張照片"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}

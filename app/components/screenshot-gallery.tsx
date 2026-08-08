"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectScreenshot } from "../data";

type ScreenshotGalleryProps = {
  screenshots: ProjectScreenshot[];
};

export function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  const step = useCallback(
    (direction: 1 | -1) => {
      setActiveIndex((current) => {
        if (current === null) return current;
        return (current + direction + screenshots.length) % screenshots.length;
      });
    },
    [screenshots.length]
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowRight") {
        step(1);
      } else if (event.key === "ArrowLeft") {
        step(-1);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, step]);

  const active = activeIndex !== null ? screenshots[activeIndex] : null;

  return (
    <>
      <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {screenshots.map((screenshot, index) => (
          <li key={screenshot.src}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] text-left transition-colors hover:border-cyan-200/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              aria-label={`Open ${screenshot.label} screenshot`}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={screenshot.src}
                  alt={`${screenshot.label} screenshot`}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 280px, 360px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <span className="block border-t border-white/10 px-3 py-2 text-xs font-medium text-slate-300">
                {screenshot.label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.label} screenshot`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white transition-colors hover:bg-white/15"
            aria-label="Close screenshot"
          >
            <span aria-hidden="true">×</span>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition-colors hover:bg-white/15 sm:left-5"
            aria-label="Previous screenshot"
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className="absolute right-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition-colors hover:bg-white/15 sm:right-5"
            aria-label="Next screenshot"
          >
            <span aria-hidden="true">→</span>
          </button>

          <figure
            className="flex max-h-[90svh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src={active.src}
                alt={`${active.label} screenshot`}
                width={1440}
                height={900}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="h-auto max-h-[78svh] w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate-300">
              {active.label}
              <span className="mx-2 text-slate-600">·</span>
              {activeIndex !== null ? activeIndex + 1 : ""} / {screenshots.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
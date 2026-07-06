import { ChevronRight } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border"
      aria-label="Experience"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-10 sm:py-24">
        <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-ink-900 sm:text-[0.7rem] sm:tracking-[0.3em]">
              {"// 03 — Chronological Log"}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              EXPERIENCE
            </h2>
          </div>
          <p className="text-[0.65rem] uppercase tracking-[0.14em] text-ink-400 sm:text-xs sm:tracking-[0.18em]">
            ENTRIES [ {String(experience.length).padStart(2, "0")} ]
          </p>
        </header>

        <ol className="mt-px flex flex-col gap-px border border-border bg-border">
          {experience.map((entry, idx) => (
            <li
              key={`${entry.role}-${idx}`}
              className="group bg-surface p-4 transition-colors hover:bg-surface-hover sm:p-8"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-400">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors group-hover:text-accent">
                    {entry.role}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">{entry.org}</p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-ink-400">
                    {entry.location} · {entry.period}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <ul className="space-y-2.5">
                    {entry.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600"
                      >
                        <ChevronRight
                          aria-hidden
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-muted"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-border px-2 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-ink-500"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

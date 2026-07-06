import { ChevronRight } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-[#dbe5ee]"
      aria-label="Experience"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
        <header className="flex flex-col gap-2 border-b border-[#dbe5ee] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
              {"// 03 — Chronological Log"}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              EXPERIENCE
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            ENTRIES [ {String(experience.length).padStart(2, "0")} ]
          </p>
        </header>

        <ol className="mt-px flex flex-col gap-px border border-[#dbe5ee] bg-[#dbe5ee]">
          {experience.map((entry, idx) => (
            <li
              key={`${entry.role}-${idx}`}
              className="group bg-white p-6 transition-colors hover:bg-[#f1f6fa] sm:p-8"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-[#dbe5ee]" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold uppercase tracking-[0.08em] text-slate-900 transition-colors group-hover:text-[#5a9bbf]">
                    {entry.role}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">{entry.org}</p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                    {entry.location} · {entry.period}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <ul className="space-y-2.5">
                    {entry.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                      >
                        <ChevronRight
                          aria-hidden
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-[#a8c5d8]"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-[#dbe5ee] px-2 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-slate-500"
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

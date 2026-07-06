import { Award, ChevronRight } from "lucide-react";
import { achievements, coursework } from "@/lib/data";

export default function Distinctions() {
  return (
    <section
      id="distinctions"
      className="border-b border-border"
      aria-label="Distinctions and education"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-10 sm:py-24">
        <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-ink-400 sm:text-[0.7rem] sm:tracking-[0.3em]">
              {"// 05 — Distinctions"}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              CONTESTS & EDUCATION
            </h2>
          </div>
          <p className="text-[0.65rem] uppercase tracking-[0.14em] text-ink-400 sm:text-xs sm:tracking-[0.18em]">
            AWARDS [ {String(achievements.length).padStart(2, "0")} ]
          </p>
        </header>

        <div className="mt-px grid grid-cols-1 gap-px border border-border bg-border lg:grid-cols-3">
          <ul className="flex flex-col gap-px bg-border lg:col-span-2">
            {achievements.map((item) => (
              <li
                key={item.title}
                className="group flex items-start gap-4 bg-surface p-4 transition-colors hover:bg-surface-hover sm:p-7"
              >
                <Award
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-muted transition-colors group-hover:text-accent"
                />
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.06em] text-ink-800 transition-colors group-hover:text-accent">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-ink-500">{item.org}</p>
                  </div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-500">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-surface p-4 sm:p-7">
            <p className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink-400">
              <span className="text-accent">{"//"}</span>
              Education
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-ink-800">
              B.S. Computer Science
            </p>
            <p className="mt-1 text-xs text-ink-500">
              Pacific Lutheran University · Minor in Data Science
            </p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-ink-400">
              Sep 2023 — May 2027 · GPA 3.9
            </p>

            <p className="mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-ink-400">
              Coursework
            </p>
            <ul className="mt-3 space-y-2">
              {coursework.map((course) => (
                <li
                  key={course}
                  className="flex items-start gap-2.5 text-sm text-ink-600"
                >
                  <ChevronRight
                    aria-hidden
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-muted"
                  />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

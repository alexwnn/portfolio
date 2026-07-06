import { Award, ChevronRight } from "lucide-react";
import { achievements, coursework } from "@/lib/data";

export default function Distinctions() {
  return (
    <section
      id="distinctions"
      className="border-b border-[#dbe5ee]"
      aria-label="Distinctions and education"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
        <header className="flex flex-col gap-2 border-b border-[#dbe5ee] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
              {"// 05 — Distinctions"}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              CONTESTS & EDUCATION
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            AWARDS [ {String(achievements.length).padStart(2, "0")} ]
          </p>
        </header>

        <div className="mt-px grid grid-cols-1 gap-px border border-[#dbe5ee] bg-[#dbe5ee] lg:grid-cols-3">
          <ul className="flex flex-col gap-px bg-[#dbe5ee] lg:col-span-2">
            {achievements.map((item) => (
              <li
                key={item.title}
                className="group flex items-start gap-4 bg-white p-6 transition-colors hover:bg-[#f1f6fa] sm:p-7"
              >
                <Award
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#a8c5d8] transition-colors group-hover:text-[#5a9bbf]"
                />
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.06em] text-slate-800 transition-colors group-hover:text-[#5a9bbf]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{item.org}</p>
                  </div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-white p-6 sm:p-7">
            <p className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">
              <span className="text-[#5a9bbf]">{"//"}</span>
              Education
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-slate-800">
              B.S. Computer Science
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Pacific Lutheran University · Minor in Data Science
            </p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Sep 2023 — May 2027 · GPA 3.9
            </p>

            <p className="mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">
              Coursework
            </p>
            <ul className="mt-3 space-y-2">
              {coursework.map((course) => (
                <li
                  key={course}
                  className="flex items-start gap-2.5 text-sm text-slate-600"
                >
                  <ChevronRight
                    aria-hidden
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-[#a8c5d8]"
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

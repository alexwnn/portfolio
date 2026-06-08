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

        <div className="mt-px overflow-x-auto border border-[#dbe5ee] bg-white">
          <table className="w-full border-collapse text-left text-sm tabular-nums">
            <thead>
              <tr className="border-b border-[#dbe5ee] text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">
                <th
                  scope="col"
                  className="w-12 px-4 py-3 text-left font-normal sm:px-6"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-normal sm:px-6"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="hidden px-4 py-3 text-left font-normal sm:table-cell sm:px-6"
                >
                  Organization
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-right font-normal sm:px-6"
                >
                  Period
                </th>
              </tr>
            </thead>
            <tbody>
              {experience.map((entry, idx) => (
                <tr
                  key={`${entry.role}-${idx}`}
                  className="group border-b border-[#dbe5ee] last:border-b-0 transition-colors hover:bg-[#f1f6fa]"
                >
                  <td className="px-4 py-5 align-top text-[0.7rem] uppercase tracking-[0.22em] text-slate-400 sm:px-6">
                    {String(idx + 1).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-5 align-top text-slate-800 sm:px-6">
                    <div className="text-sm font-medium uppercase tracking-[0.12em] transition-colors group-hover:text-[#5a9bbf]">
                      {entry.role}
                    </div>
                    <div className="mt-1 text-xs text-slate-500 sm:hidden">
                      {entry.org}
                    </div>
                  </td>
                  <td className="hidden px-4 py-5 align-top text-slate-500 sm:table-cell sm:px-6">
                    {entry.org}
                  </td>
                  <td className="px-4 py-5 text-right align-top text-xs uppercase tracking-[0.18em] text-slate-500 sm:px-6">
                    {entry.period}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

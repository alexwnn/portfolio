import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-[#dbe5ee]"
      aria-label="Skills"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
        <header className="flex flex-col gap-2 border-b border-[#dbe5ee] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
              {"// 04 — Toolchain"}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              STACK
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            GROUPS [ {String(skillGroups.length).padStart(2, "0")} ]
          </p>
        </header>

        <dl className="mt-px grid grid-cols-1 gap-px border border-[#dbe5ee] bg-[#dbe5ee] sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-white p-6 sm:p-8">
              <dt className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">
                <span className="text-[#5a9bbf]">{"//"}</span>
                {group.label}
              </dt>
              <dd className="mt-4">
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-[#dbe5ee] px-2.5 py-1 text-xs tracking-[0.02em] text-slate-600 transition-colors hover:border-[#5a9bbf] hover:text-[#5a9bbf]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-border"
      aria-label="Skills"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-10 sm:py-24">
        <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-ink-900 sm:text-[0.7rem] sm:tracking-[0.3em]">
              {"// 04 — Toolchain"}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              STACK
            </h2>
          </div>
          <p className="text-[0.65rem] uppercase tracking-[0.14em] text-ink-400 sm:text-xs sm:tracking-[0.18em]">
            GROUPS [ {String(skillGroups.length).padStart(2, "0")} ]
          </p>
        </header>

        <dl className="mt-px grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-surface p-4 sm:p-8">
              <dt className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink-400">
                <span className="text-accent">{"//"}</span>
                {group.label}
              </dt>
              <dd className="mt-4">
                <div
                  className="marquee"
                  style={
                    {
                      "--marquee-duration": `${group.items.length * 3}s`,
                    } as React.CSSProperties
                  }
                >
                  <div className="marquee-track">
                    {[0, 1, 2, 3].map((copy) => (
                      <ul
                        key={copy}
                        aria-hidden={copy > 0 || undefined}
                        className="flex shrink-0 items-center gap-2 pr-2"
                      >
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="whitespace-nowrap border border-border px-2.5 py-1 text-xs tracking-[0.02em] text-ink-600 transition-colors hover:border-accent hover:text-accent"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

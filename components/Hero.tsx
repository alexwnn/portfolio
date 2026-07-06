import RoleFlipper from "@/components/RoleFlipper";
import { bioPrompt, bioSections, heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="border-b border-border"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-10 sm:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-ink-900 sm:text-[0.7rem] sm:tracking-[0.3em]">
              {"// 01 — Identity"}
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900 sm:mt-4 sm:text-4xl">
              ALEX NGUYEN
            </h1>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink-900 sm:text-sm sm:tracking-[0.18em]">
              <RoleFlipper />
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-border bg-surface">
              <div className="flex items-center justify-between border-b border-border px-3 py-2 text-[0.6rem] uppercase tracking-[0.2em] text-ink-400 sm:px-4 sm:text-[0.65rem] sm:tracking-[0.28em]">
                <span>terminal // bio.read()</span>
                <span className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 border border-border-mid" />
                  <span className="inline-block h-2 w-2 border border-border-mid" />
                  <span className="inline-block h-2 w-2 border border-border-mid" />
                </span>
              </div>

              <div className="px-3 py-4 text-[13px] leading-relaxed sm:px-6 sm:py-6 sm:text-sm">
                <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-ink-700">
                  <span className="select-none text-accent">{bioPrompt}</span>
                  <span className="text-ink-800">cat ./bio.txt</span>
                </p>

                <div className="mt-4 flex flex-col">
                  {bioSections.map((section, sIdx) => (
                    <div key={sIdx}>
                      {sIdx > 0 && (
                        <div
                          aria-hidden
                          className="my-4 border-t border-dashed border-border"
                        />
                      )}

                      {section.header && (
                        <p className="flex items-baseline gap-2 text-accent">
                          <span aria-hidden className="select-none">
                            {">"}
                          </span>
                          <span className="uppercase tracking-[0.12em]">
                            {section.header}
                          </span>
                        </p>
                      )}

                      {section.lines && (
                        <ul className="space-y-1.5">
                          {section.lines.map((line, lIdx) => (
                            <li
                              key={lIdx}
                              className="flex items-baseline gap-2"
                            >
                              <span
                                aria-hidden
                                className="select-none text-accent"
                              >
                                {">"}
                              </span>
                              <span>
                                <span className="uppercase tracking-[0.08em] text-accent">
                                  {line.label}
                                </span>
                                {line.value && (
                                  <span className="text-ink-700">
                                    {" "}
                                    {line.value}
                                  </span>
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.rows && (
                        <ul
                          className={
                            section.header ? "mt-3 space-y-1.5" : "space-y-1.5"
                          }
                        >
                          {section.rows.map((row, rIdx) => (
                            <li
                              key={rIdx}
                              className="flex flex-col gap-0.5 pl-4 sm:flex-row sm:gap-4"
                            >
                              {row.label && (
                                <span className="shrink-0 text-ink-400 sm:w-28">
                                  {row.label}
                                </span>
                              )}
                              <span className="text-ink-700">
                                {row.value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-5 flex items-center gap-2 text-ink-400">
                  <span className="select-none text-accent">{bioPrompt}</span>
                  <span className="inline-block h-4 w-2 animate-pulse bg-accent-bright" />
                </p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-px border border-border bg-border text-xs sm:grid-cols-4">
              {heroStats.map((item) => (
                <div
                  key={item.k}
                  className="flex flex-col gap-1 bg-surface px-3 py-2.5 sm:px-4 sm:py-3"
                >
                  <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-ink-400 sm:text-[0.65rem] sm:tracking-[0.28em]">
                    {item.k}
                  </dt>
                  <dd className="text-ink-800">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

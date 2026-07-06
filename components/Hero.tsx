import { bioPrompt, bioSections, heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="border-b border-[#dbe5ee]"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
              {"// 01 — Identity"}
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              ALEX NGUYEN
            </h1>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
              Software Engineer // Researcher
            </p>
            <p className="mt-6 max-w-xs text-xs leading-relaxed text-slate-500">
              Full-stack engineer and robotics researcher at Pacific Lutheran
              University. I build real-time web platforms, mobile apps, and
              human-centered autonomous systems.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-[#dbe5ee] bg-white">
              <div className="flex items-center justify-between border-b border-[#dbe5ee] px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">
                <span>terminal // bio.read()</span>
                <span className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 border border-[#cfdce8]" />
                  <span className="inline-block h-2 w-2 border border-[#cfdce8]" />
                  <span className="inline-block h-2 w-2 border border-[#cfdce8]" />
                </span>
              </div>

              <div className="px-4 py-5 text-sm leading-relaxed sm:px-6 sm:py-6">
                <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-slate-700">
                  <span className="select-none text-[#5a9bbf]">{bioPrompt}</span>
                  <span className="text-slate-800">cat ./bio.txt</span>
                </p>

                <div className="mt-4 flex flex-col">
                  {bioSections.map((section, sIdx) => (
                    <div key={sIdx}>
                      {sIdx > 0 && (
                        <div
                          aria-hidden
                          className="my-4 border-t border-dashed border-[#dbe5ee]"
                        />
                      )}

                      {section.header && (
                        <p className="flex items-baseline gap-2 text-[#5a9bbf]">
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
                                className="select-none text-[#5a9bbf]"
                              >
                                {">"}
                              </span>
                              <span>
                                <span className="uppercase tracking-[0.08em] text-[#5a9bbf]">
                                  {line.label}
                                </span>
                                {line.value && (
                                  <span className="text-slate-700">
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
                                <span className="shrink-0 text-slate-400 sm:w-28">
                                  {row.label}
                                </span>
                              )}
                              <span className="text-slate-700">
                                {row.value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-5 flex items-center gap-2 text-slate-400">
                  <span className="select-none text-[#5a9bbf]">{bioPrompt}</span>
                  <span className="inline-block h-4 w-2 animate-pulse bg-[#7eb8d4]" />
                </p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-px border border-[#dbe5ee] bg-[#dbe5ee] text-xs sm:grid-cols-4">
              {heroStats.map((item) => (
                <div
                  key={item.k}
                  className="flex flex-col gap-1 bg-white px-4 py-3"
                >
                  <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">
                    {item.k}
                  </dt>
                  <dd className="text-slate-800">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

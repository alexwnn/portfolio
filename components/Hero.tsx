import { ChevronRight } from "lucide-react";
import { bio } from "@/lib/data";

const PROMPT = "alex@plu:~$";

function parseBio(input: string): string[] {
  return input
    .split("//")
    .map((segment) => segment.trim())
    .filter(Boolean);
}

export default function Hero() {
  const segments = parseBio(bio);

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
              Software Engineer
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
              <div className="px-4 py-5 text-sm leading-relaxed sm:px-6 sm:py-6 sm:text-base">
                <p className="flex items-start gap-2 text-slate-700">
                  <span className="select-none text-[#5a9bbf]">
                    {PROMPT}
                  </span>
                  <span className="text-slate-800">cat ./bio.txt</span>
                </p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {segments.map((segment, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ChevronRight
                        aria-hidden
                        className="mt-1 h-4 w-4 shrink-0 text-[#a8c5d8]"
                      />
                      <span>
                        {segment.includes(":") ? (
                          <>
                            <span className="text-slate-500">
                              {segment.split(":")[0]}:
                            </span>
                            <span className="text-slate-800">
                              {segment.slice(segment.indexOf(":") + 1)}
                            </span>
                          </>
                        ) : (
                          <span className="text-slate-800">{segment}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-center gap-2 text-slate-400">
                  <span className="select-none text-[#5a9bbf]">
                    {PROMPT}
                  </span>
                  <span className="inline-block h-4 w-2 animate-pulse bg-[#7eb8d4]" />
                </p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-px border border-[#dbe5ee] bg-[#dbe5ee] text-xs sm:grid-cols-4">
              {[
                { k: "LOC", v: "PNW" },
                { k: "EDU", v: "PLU '28" },
                { k: "STACK", v: "TS / NEXT" },
                { k: "STATUS", v: "BUILDING" },
              ].map((item) => (
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

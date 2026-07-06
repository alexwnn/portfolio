import { ArrowUpRight, ChevronRight, Code2, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectGrid() {
  return (
    <section
      id="projects"
      className="border-b border-[#dbe5ee]"
      aria-label="Projects"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
        <header className="flex flex-col gap-2 border-b border-[#dbe5ee] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
              {"// 02 — Selected Work"}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              PROJECTS
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            INDEX [ {String(projects.length).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")} ]
          </p>
        </header>

        <ul className="mt-px grid grid-cols-1 gap-px border border-[#dbe5ee] bg-[#dbe5ee] md:grid-cols-2">
          {projects.map((project, idx) => (
            <li
              key={project.slug}
              className="group relative flex flex-col bg-white p-6 transition-colors hover:bg-[#f1f6fa] sm:p-8"
            >
              <div className="flex items-start justify-between border-b border-[#dbe5ee] pb-4">
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400">
                  PROJ // {String(idx + 1).padStart(2, "0")}
                </span>
                {project.metric ? (
                  <span className="flex items-baseline gap-1.5 text-slate-500">
                    <span className="text-sm font-semibold tabular-nums text-[#5a9bbf]">
                      {project.metric.value}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.22em] text-slate-400">
                      {project.metric.label}
                    </span>
                  </span>
                ) : (
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 text-[#a8c5d8] transition-colors group-hover:text-[#5a9bbf]"
                  />
                )}
              </div>

              <div className="mt-5 flex items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-[#5a9bbf] sm:text-2xl">
                  {project.name}
                </h3>
                <span className="shrink-0 text-[0.6rem] uppercase tracking-[0.22em] text-slate-400">
                  {project.role}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                {project.tagline}
              </p>

              <p className="mt-5 max-w-prose text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((highlight, hIdx) => (
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

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-[#dbe5ee] px-2 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-slate-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center gap-2 pt-8">
                <a
                  href={project.liveUrl ?? "#"}
                  target={project.liveUrl ? "_blank" : undefined}
                  rel={project.liveUrl ? "noopener noreferrer" : undefined}
                  aria-disabled={!project.liveUrl}
                  className="inline-flex items-center gap-2 border border-[#cfdce8] px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-slate-600 transition-colors hover:border-[#5a9bbf] hover:text-[#5a9bbf] aria-disabled:cursor-not-allowed aria-disabled:opacity-40 aria-disabled:hover:border-[#cfdce8] aria-disabled:hover:text-slate-600"
                >
                  <ExternalLink aria-hidden className="h-3.5 w-3.5" />
                  [ LIVE ]
                </a>
                <a
                  href={project.codeUrl ?? "#"}
                  target={project.codeUrl ? "_blank" : undefined}
                  rel={project.codeUrl ? "noopener noreferrer" : undefined}
                  aria-disabled={!project.codeUrl}
                  className="inline-flex items-center gap-2 border border-[#cfdce8] px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-slate-600 transition-colors hover:border-[#5a9bbf] hover:text-[#5a9bbf] aria-disabled:cursor-not-allowed aria-disabled:opacity-40 aria-disabled:hover:border-[#cfdce8] aria-disabled:hover:text-slate-600"
                >
                  <Code2 aria-hidden className="h-3.5 w-3.5" />
                  [ CODE ]
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

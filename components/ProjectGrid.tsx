import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import ProjectHighlights from "@/components/ProjectHighlights";
import { projects } from "@/lib/data";

export default function ProjectGrid() {
  return (
    <section
      id="projects"
      className="border-b border-border"
      aria-label="Projects"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-10 sm:py-24">
        <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-ink-400 sm:text-[0.7rem] sm:tracking-[0.3em]">
              {"// 02 — Selected Work"}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              PROJECTS
            </h2>
          </div>
          <p className="text-[0.65rem] uppercase tracking-[0.14em] text-ink-400 sm:text-xs sm:tracking-[0.18em]">
            INDEX [ {String(projects.length).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")} ]
          </p>
        </header>

        <ul className="mt-px grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {projects.map((project, idx) => (
            <li
              key={project.slug}
              className="group relative flex flex-col bg-surface p-4 transition-colors hover:bg-surface-hover sm:p-8"
            >
              <div className="flex items-start justify-between border-b border-border pb-4">
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-ink-400 sm:text-[0.65rem] sm:tracking-[0.3em]">
                  PROJ // {String(idx + 1).padStart(2, "0")}
                </span>
                {project.metric ? (
                  <span className="flex items-baseline gap-1.5 text-ink-500">
                    <span className="text-sm font-semibold tabular-nums text-accent">
                      {project.metric.value}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.22em] text-ink-400">
                      {project.metric.label}
                    </span>
                  </span>
                ) : (
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 text-accent-muted transition-colors group-hover:text-accent"
                  />
                )}
              </div>

              <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                <h3 className="text-lg font-semibold tracking-tight text-ink-900 transition-colors group-hover:text-accent sm:text-2xl">
                  {project.name}
                </h3>
                <span className="text-[0.6rem] uppercase tracking-[0.22em] text-ink-400 sm:shrink-0 sm:text-right">
                  {project.role}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-500">
                {project.tagline}
              </p>

              <p className="mt-5 max-w-prose text-sm leading-relaxed text-ink-600">
                {project.description}
              </p>

              <ProjectHighlights highlights={project.highlights} />

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-border px-2 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-ink-500"
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
                  className="inline-flex items-center gap-2 border border-border-mid px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-ink-600 transition-colors hover:border-accent hover:text-accent aria-disabled:cursor-not-allowed aria-disabled:opacity-40 aria-disabled:hover:border-border-mid aria-disabled:hover:text-ink-600"
                >
                  <ExternalLink aria-hidden className="h-3.5 w-3.5" />
                  [ LIVE ]
                </a>
                <a
                  href={project.codeUrl ?? "#"}
                  target={project.codeUrl ? "_blank" : undefined}
                  rel={project.codeUrl ? "noopener noreferrer" : undefined}
                  aria-disabled={!project.codeUrl}
                  className="inline-flex items-center gap-2 border border-border-mid px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-ink-600 transition-colors hover:border-accent hover:text-accent aria-disabled:cursor-not-allowed aria-disabled:opacity-40 aria-disabled:hover:border-border-mid aria-disabled:hover:text-ink-600"
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

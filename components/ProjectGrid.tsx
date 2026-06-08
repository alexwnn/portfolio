import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
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
            INDEX [ {String(projects.length).padStart(2, "0")} / 02 ]
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
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 text-[#a8c5d8] transition-colors group-hover:text-[#5a9bbf]"
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-[#5a9bbf] sm:text-2xl">
                {project.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                {project.tagline}
              </p>

              <p className="mt-5 max-w-prose text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>

              <div className="mt-auto flex items-center gap-2 pt-8">
                <a
                  href={project.liveUrl ?? "#"}
                  target={project.liveUrl ? "_blank" : undefined}
                  rel={
                    project.liveUrl ? "noopener noreferrer" : undefined
                  }
                  aria-disabled={!project.liveUrl}
                  className="inline-flex items-center gap-2 border border-[#cfdce8] px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-slate-600 transition-colors hover:border-[#5a9bbf] hover:text-[#5a9bbf]"
                >
                  <ExternalLink aria-hidden className="h-3.5 w-3.5" />
                  [ LIVE ]
                </a>
                <a
                  href={project.codeUrl ?? "#"}
                  target={project.codeUrl ? "_blank" : undefined}
                  rel={
                    project.codeUrl ? "noopener noreferrer" : undefined
                  }
                  aria-disabled={!project.codeUrl}
                  className="inline-flex items-center gap-2 border border-[#cfdce8] px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-slate-600 transition-colors hover:border-[#5a9bbf] hover:text-[#5a9bbf]"
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

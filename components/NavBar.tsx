import Link from "next/link";
import { social } from "@/lib/data";

const LINKS: { label: string; href: string }[] = [
  { label: "PROJECTS", href: "#projects" },
  { label: "EXP", href: "#experience" },
  { label: "GITHUB", href: social.github },
  { label: "LINKEDIN", href: social.linkedin },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe5ee] bg-[#faf8f3]/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-xs uppercase tracking-[0.18em] sm:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 text-slate-800 transition-colors hover:text-[#5a9bbf]"
          aria-label="Home"
        >
          <span className="border border-[#cfdce8] px-2 py-1 text-slate-700 transition-colors group-hover:border-[#5a9bbf] group-hover:text-[#5a9bbf]">
            {social.name}
          </span>
          <span className="hidden text-slate-400 sm:inline">{"//"}</span>
          <span className="hidden text-slate-500 sm:inline">
            {social.title}
          </span>
        </Link>

        <ul className="flex items-center gap-2 sm:gap-4">
          {LINKS.map((link) => {
            const isExternal = link.href.startsWith("http");
            const inner = (
              <span className="block border border-transparent px-2 py-1 text-slate-500 transition-colors hover:border-[#cfdce8] hover:text-[#5a9bbf]">
                [ {link.label} ]
              </span>
            );
            return (
              <li key={link.label}>
                {isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={link.href}>{inner}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { social } from "@/lib/data";

const LINKS: { label: string; href: string }[] = [
  { label: "PROJECTS", href: "#projects" },
  { label: "EXP", href: "#experience" },
  { label: "STACK", href: "#skills" },
  { label: "GITHUB", href: social.github },
  { label: "LINKEDIN", href: social.linkedin },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-4 py-3 text-[0.65rem] uppercase tracking-[0.14em] sm:px-10 sm:py-4 sm:text-xs sm:tracking-[0.18em]">
        <Link
          href="/"
          className="group flex items-center gap-3 text-ink-800 transition-colors hover:text-accent"
          aria-label="Home"
        >
          <span className="whitespace-nowrap border border-border-mid px-2 py-1 text-ink-700 transition-colors group-hover:border-accent group-hover:text-accent">
            {social.name}
          </span>
          <span className="hidden text-ink-400 sm:inline">{"//"}</span>
          <span className="hidden text-ink-500 sm:inline">
            {social.title}
          </span>
        </Link>

        <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-4">
          {LINKS.map((link) => {
            const isExternal = link.href.startsWith("http");
            const inner = (
              <span className="block whitespace-nowrap border border-transparent px-1.5 py-1 text-ink-500 transition-colors hover:border-border-mid hover:text-accent sm:px-2">
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
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

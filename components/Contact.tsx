import { ArrowUpRight } from "lucide-react";
import { social } from "@/lib/data";

const CHANNELS: { label: string; value: string; href: string }[] = [
  { label: "GITHUB", value: "@alexwnn", href: social.github },
  { label: "LINKEDIN", value: "in/alexhngu", href: social.linkedin },
  { label: "EMAIL", value: "alexhngu@gmail.com", href: social.email },
  { label: "X", value: "@alexwnns", href: social.x },
];

export default function Contact() {
  return (
    <section id="contact" className="border-b border-border" aria-label="Contact">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-10 sm:py-24">
        <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-ink-900 sm:text-[0.7rem] sm:tracking-[0.3em]">
              {"// 06 — Contact"}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              GET IN TOUCH
            </h2>
          </div>
          <p className="text-[0.65rem] uppercase tracking-[0.14em] text-ink-400 sm:text-xs sm:tracking-[0.18em]">
            CHANNELS [ {String(CHANNELS.length).padStart(2, "0")} ]
          </p>
        </header>

        <ul className="mt-px grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          {CHANNELS.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center justify-between gap-4 bg-surface p-4 transition-colors hover:bg-surface-hover sm:p-8"
              >
                <div>
                  <p className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink-400">
                    <span className="text-accent">{"//"}</span>
                    {channel.label}
                  </p>
                  <p className="mt-3 text-sm font-semibold tracking-[0.06em] text-ink-800 transition-colors group-hover:text-accent">
                    {channel.value}
                  </p>
                </div>
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 shrink-0 text-accent-muted transition-colors group-hover:text-accent"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

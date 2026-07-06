"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function ProjectHighlights({
  highlights,
}: {
  highlights: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-ink-500 transition-colors hover:text-accent"
      >
        <ChevronDown
          aria-hidden
          className={`h-3.5 w-3.5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
        [ {open ? "HIDE" : "SHOW"} HIGHLIGHTS ]
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 pt-3">
            {highlights.map((highlight, hIdx) => (
              <li
                key={hIdx}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-600"
              >
                <ChevronRight
                  aria-hidden
                  className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-muted"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

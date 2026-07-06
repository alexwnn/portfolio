"use client";

import { useState, type CSSProperties } from "react";
import Scramble from "@/components/Scramble";
import type { SkillGroup } from "@/lib/data";

/**
 * One conveyor belt of skill chips. Hovering the belt pauses it (CSS);
 * hovering a chip additionally scrambles every other chip in this belt.
 * Each belt owns its state, so the other belts keep scrolling untouched.
 */
export default function SkillBelt({ group }: { group: SkillGroup }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="marquee"
      style={
        {
          "--marquee-duration": `${group.items.length * 3}s`,
        } as CSSProperties
      }
    >
      <div className="marquee-track">
        {[0, 1, 2, 3].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy > 0 || undefined}
            className="flex shrink-0 items-center gap-2 pr-2"
          >
            {group.items.map((item) => (
              <li
                key={item}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                className="whitespace-nowrap border border-border px-2.5 py-1 text-xs tracking-[0.02em] text-ink-600 transition-colors hover:border-accent hover:text-accent"
              >
                <Scramble
                  text={item}
                  scrambled={hovered !== null && hovered !== item}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

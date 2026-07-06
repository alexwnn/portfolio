"use client";

import { useEffect, useRef } from "react";

const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
const TICK_MS = 40;

/** Randomize every char after `keep`, preserving spaces so word shapes hold. */
function scramble(text: string, keep = 0): string {
  let out = text.slice(0, keep);
  for (let i = keep; i < text.length; i++) {
    out +=
      text[i] === " "
        ? " "
        : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
  }
  return out;
}

/**
 * Glitch text: while `scrambled`, the label re-randomizes into glyph noise
 * every tick; when it flips back off, the real characters decode back in
 * left to right. Length and spaces are preserved, so layout never shifts.
 *
 * Ticks mutate the span's textContent directly (no re-renders), keeping
 * many concurrent instances cheap.
 */
export default function Scramble({
  text,
  scrambled,
  className,
}: {
  text: string;
  scrambled: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = text;
      return;
    }

    if (scrambled) {
      el.textContent = scramble(text);
      const id = setInterval(() => {
        el.textContent = scramble(text);
      }, TICK_MS);
      return () => clearInterval(id);
    }

    if (el.textContent === text) return;
    let keep = 0;
    const step = Math.max(1, Math.ceil(text.length / 6));
    const id = setInterval(() => {
      keep += step;
      if (keep >= text.length) {
        el.textContent = text;
        clearInterval(id);
      } else {
        el.textContent = scramble(text, keep);
      }
    }, TICK_MS);
    return () => clearInterval(id);
  }, [text, scrambled]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}

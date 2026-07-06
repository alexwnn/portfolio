"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = ["Robotics Researcher", "Software Engineer", "CS Student"];
const HOLD_MS = 2000;
const FLIP_MS = 300;

/**
 * Blur-roll caption: the current role blurs/fades out with a slight
 * upward drift, then the next one blurs in from below and sharpens.
 */
export default function RoleFlipper() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let flipTimer: ReturnType<typeof setTimeout>;
    const holdTimer = setInterval(() => {
      if (reducedMotion.current) {
        setIndex((i) => (i + 1) % ROLES.length);
        return;
      }
      setPhase("out");
      flipTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setPhase("in");
      }, FLIP_MS);
    }, HOLD_MS + FLIP_MS);

    return () => {
      clearInterval(holdTimer);
      clearTimeout(flipTimer);
    };
  }, []);

  return (
    <span className="inline-grid overflow-hidden align-bottom">
      <span
        key={`${index}-${phase}`}
        className="role-flip whitespace-nowrap"
        data-phase={phase}
      >
        {ROLES[index]}
      </span>
    </span>
  );
}

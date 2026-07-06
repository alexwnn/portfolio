"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = ["Robotics Researcher", "Software Engineer", "CS Student"];
const HOLD_MS = 2000;
const FLIP_MS = 300;
const PERIOD_MS = HOLD_MS + FLIP_MS;

/**
 * Blur-roll caption: the current role blurs/fades out with a slight
 * upward drift, then the next one blurs in from below and sharpens.
 *
 * Flips are anchored to wall-clock multiples of PERIOD_MS so every
 * mounted instance (hero, navbar) changes words in lockstep. Hidden
 * copies of all roles reserve the widest width, so surrounding layout
 * never shifts as words change.
 */
export default function RoleFlipper() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let boundaryTimer: ReturnType<typeof setTimeout>;
    let flipTimer: ReturnType<typeof setTimeout>;

    const clockIndex = () =>
      Math.floor(Date.now() / PERIOD_MS) % ROLES.length;

    function scheduleNext() {
      const delay = PERIOD_MS - (Date.now() % PERIOD_MS);
      boundaryTimer = setTimeout(() => {
        if (reducedMotion.current) {
          setIndex(clockIndex());
        } else {
          setPhase("out");
          flipTimer = setTimeout(() => {
            setIndex(clockIndex());
            setPhase("in");
          }, FLIP_MS);
        }
        scheduleNext();
      }, delay);
    }
    scheduleNext();

    return () => {
      clearTimeout(boundaryTimer);
      clearTimeout(flipTimer);
    };
  }, []);

  return (
    <span className="inline-grid overflow-hidden align-bottom">
      {/* invisible copies pin the container to the widest role */}
      {ROLES.map((role) => (
        <span
          key={role}
          aria-hidden
          className="invisible whitespace-nowrap [grid-area:1/1]"
        >
          {role}
        </span>
      ))}
      <span
        key={`${index}-${phase}`}
        className="role-flip whitespace-nowrap [grid-area:1/1]"
        data-phase={phase}
      >
        {ROLES[index]}
      </span>
    </span>
  );
}

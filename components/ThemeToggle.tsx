"use client";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // storage unavailable (private mode) — theme still toggles for this visit
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-7 w-7 items-center justify-center border border-border-mid text-ink-700 transition-colors hover:border-accent hover:text-accent"
    >
      {/* half-hatched circle, as on the GitHub bio card */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <defs>
          <pattern
            id="theme-hatch"
            width="3"
            height="3"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="3" stroke="currentColor" strokeWidth="1.5" />
          </pattern>
          <clipPath id="theme-half">
            <rect x="12" y="2" width="10" height="20" />
          </clipPath>
        </defs>
        <circle cx="12" cy="12" r="9" />
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="url(#theme-hatch)"
          stroke="none"
          clipPath="url(#theme-half)"
        />
      </svg>
    </button>
  );
}

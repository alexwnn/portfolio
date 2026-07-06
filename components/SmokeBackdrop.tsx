"use client";

import { useEffect, useRef } from "react";

/**
 * Dithered halftone smoke, matching the GitHub bio card recording:
 * domain-warped ridged fBm noise sampled on a fixed dot grid, where
 * local density sets each dot's radius. Dot color/opacity come from
 * the --smoke-dot / --smoke-alpha CSS variables so the effect follows
 * the light/dark theme.
 */

const CELL = 8; // grid pitch in CSS px
const FPS_INTERVAL = 1000 / 30;
const SCALE = 0.0045; // px -> noise units
const RISE = 0.16; // upward drift, noise units / s
const EVOLVE = 0.12; // temporal churn, noise units / s
const WARP = 1.4; // domain-warp strength
const EDGE_FADE = 72; // px of fade at section edges

function hash3(x: number, y: number, z: number): number {
  let n =
    (Math.imul(x, 374761393) +
      Math.imul(y, 668265263) +
      Math.imul(z, 1440662683)) |
    0;
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  n ^= n >>> 16;
  return (n >>> 0) / 4294967296;
}

function noise3(x: number, y: number, z: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const zi = Math.floor(z);
  const xf = x - xi;
  const yf = y - yi;
  const zf = z - zi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const w = zf * zf * (3 - 2 * zf);

  const c000 = hash3(xi, yi, zi);
  const c100 = hash3(xi + 1, yi, zi);
  const c010 = hash3(xi, yi + 1, zi);
  const c110 = hash3(xi + 1, yi + 1, zi);
  const c001 = hash3(xi, yi, zi + 1);
  const c101 = hash3(xi + 1, yi, zi + 1);
  const c011 = hash3(xi, yi + 1, zi + 1);
  const c111 = hash3(xi + 1, yi + 1, zi + 1);

  const x00 = c000 + (c100 - c000) * u;
  const x10 = c010 + (c110 - c010) * u;
  const x01 = c001 + (c101 - c001) * u;
  const x11 = c011 + (c111 - c011) * u;
  const y0 = x00 + (x10 - x00) * v;
  const y1 = x01 + (x11 - x01) * v;
  return y0 + (y1 - y0) * w;
}

function fbm3(x: number, y: number, z: number, octaves: number): number {
  let sum = 0;
  let amp = 0.5;
  let freq = 1;
  for (let i = 0; i < octaves; i++) {
    sum += amp * noise3(x * freq, y * freq, z * freq);
    amp *= 0.5;
    freq *= 2;
  }
  return sum; // ~[0, 1)
}

function smoothstep(a: number, b: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

export default function SmokeBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let fillStyle = "rgba(90, 123, 148, 0.28)";
    let rafId = 0;
    let running = false;
    let lastDraw = 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function readTheme() {
      const style = getComputedStyle(document.documentElement);
      const rgb = style.getPropertyValue("--smoke-dot").trim().split(/\s+/);
      const alpha = parseFloat(style.getPropertyValue("--smoke-alpha")) || 0.3;
      if (rgb.length === 3) {
        fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
      }
    }

    function draw(timeSeconds: number) {
      ctx!.clearRect(0, 0, width, height);
      ctx!.fillStyle = fillStyle;
      ctx!.beginPath();

      const rMax = CELL * 0.42;
      const tRise = timeSeconds * RISE;
      const tEvolve = timeSeconds * EVOLVE;

      for (let y = CELL / 2; y < height; y += CELL) {
        const edgeY =
          smoothstep(0, EDGE_FADE, y) * smoothstep(height, height - EDGE_FADE, y);
        const ny = y * SCALE;
        for (let x = CELL / 2; x < width; x += CELL) {
          const nx = x * SCALE;

          // domain warp, then ridged fBm for flame-like filaments
          const q = fbm3(nx * 2, ny * 2 - tRise * 0.6, tEvolve * 0.5, 2);
          const n = fbm3(
            nx + WARP * q,
            ny * 1.35 - tRise + WARP * 0.4 * q,
            tEvolve,
            3
          );
          const ridge = 1 - Math.abs(2 * n - 1);
          const broad = smoothstep(0.38, 0.62, n);
          const density =
            smoothstep(0.6, 0.95, ridge) * (0.35 + 0.65 * broad);

          const edgeX =
            smoothstep(0, EDGE_FADE, x) *
            smoothstep(width, width - EDGE_FADE, x);
          const r = density * edgeY * edgeX * rMax;
          if (r < 0.35) continue;

          ctx!.moveTo(x + r, y);
          ctx!.arc(x, y, r, 0, Math.PI * 2);
        }
      }
      ctx!.fill();
    }

    function frame(now: number) {
      if (!running) return;
      rafId = requestAnimationFrame(frame);
      if (now - lastDraw < FPS_INTERVAL) return;
      lastDraw = now;
      draw(now / 1000);
    }

    function start() {
      if (running || reducedMotion) return;
      running = true;
      rafId = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reducedMotion) draw(7); // single developed frame, no motion
    }

    readTheme();
    resize();

    const resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    // follow theme toggles
    const themeObserver = new MutationObserver(() => {
      readTheme();
      if (reducedMotion) draw(7);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // only animate while the section is on screen
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    io.observe(canvas);

    if (reducedMotion) draw(7);

    return () => {
      stop();
      resizeObserver.disconnect();
      themeObserver.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

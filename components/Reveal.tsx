"use client";
// components/Reveal.tsx — Reusable scroll-triggered reveal wrapper (Phase 4).
//
// Usage (Server Components can import this directly):
//   <Reveal variant="fade-up" delay={0.1}>…children…</Reveal>
//
// Design principles:
//   - Short durations (0.45–0.55 s) and small translate values (8–14 px).
//   - Each section uses a different variant so the page feels hand-crafted, not mechanical.
//   - viewport.once = true — reveals fire once; no re-trigger when scrolling back up.
//   - prefers-reduced-motion: renders children inside a plain div, no animation.

import { type ReactNode, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ─── Variants ─────────────────────────────────────────────────────────────────

const VARIANTS = {
  /** Standard up-float — used for headings and primary content blocks */
  "fade-up": {
    hidden:  { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0  },
  },
  /** Slightly tighter up-float — hackathon cards, achievements */
  "fade-up-sm": {
    hidden:  { opacity: 0, y: 9  },
    visible: { opacity: 1, y: 0  },
  },
  /** Larger up-float — featured project card */
  "fade-up-lg": {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0  },
  },
  /** Horizontal slide from left — TechStack category rows */
  "fade-left": {
    hidden:  { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0   },
  },
  /** Opacity-only — Contact links; informational, no positional drama */
  "fade-in": {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
} as const;

export type RevealVariant = keyof typeof VARIANTS;

// ─── Props ────────────────────────────────────────────────────────────────────

interface RevealProps {
  children:  ReactNode;
  variant?:  RevealVariant;
  delay?:    number;           // seconds
  duration?: number;           // seconds (default 0.5)
  className?: string;
  style?:    CSSProperties;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Reveal({
  children,
  variant  = "fade-up",
  delay    = 0,
  duration = 0.5,
  className,
  style,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  // Reduced-motion: skip animation entirely — render a plain div.
  // This keeps the tree shape identical so hydration matches.
  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      // margin: trigger when element is 10 % into the viewport from the bottom.
      // Avoids firing for off-screen content above the fold.
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={VARIANTS[variant]}
      transition={{
        duration,
        delay,
        // "ease-out" with a soft finish — intentionally different from the
        // diagram packet's [0.4, 0, 0.2, 1] so the two animation layers
        // feel distinct in character.
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

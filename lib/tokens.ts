/**
 * Design tokens — Systems Blueprint
 *
 * Color rationale:
 *   blueprint.bg      — Cool off-white (#F2F5F7), not pure white. Evokes
 *                       blueprint paper and drafting-table light, avoiding
 *                       clinical sterility.
 *   blueprint.ink     — Deep navy (#0E1C2F). Darker than generic #000 or
 *                       #111; matches actual blueprint print ink.
 *   blueprint.accent  — Technical teal (#1A7FA0). Blueprint-ink cyan that
 *                       reads as "engineering" without being generic blue.
 *   blueprint.trace   — Copper/amber (#C97B2A). Circuit-trace warmth;
 *                       creates high-contrast punctuation against cool base.
 *   blueprint.grid    — Muted blue-grey (#C5D2DB light / #1A2B3C dark).
 *
 * Typography rationale:
 *   DM Mono   — Display/headings. A monospace with visible optical personality.
 *               Unlike coding fonts it reads at large sizes without feeling
 *               technical-utilitarian. Reinforces the "engineer's handwriting"
 *               of a schematic.
 *   IBM Plex Sans — Body. Designed by IBM engineers for IBM; has deliberate
 *               technical neutrality and optical clarity at small sizes.
 *               Pairs with DM Mono without fighting it (both have engineered
 *               proportions, not humanist warmth).
 *   JetBrains Mono — Code labels / diagram annotations / terminal log lines.
 *               Ligature-rich, reads fast in small sizes.
 */

export const colors = {
  // Light mode
  light: {
    bg: "#F2F5F7",
    bgSubtle: "#E8EDF1",
    surface: "#FFFFFF",
    border: "#C5D2DB",
    borderStrong: "#8FA3B1",
    ink: "#0E1C2F",
    inkMuted: "#4A6070",
    inkFaint: "#8FA3B1",
    accent: "#1A7FA0",
    accentHover: "#156480",
    trace: "#C97B2A",
    traceHover: "#A3621F",
    grid: "#C5D2DB",
    success: "#2A7A4B",
    error: "#B03A2E",
  },
  // Dark mode
  dark: {
    bg: "#0D1B2A",
    bgSubtle: "#0A1520",
    surface: "#122236",
    border: "#1E3248",
    borderStrong: "#2A4460",
    ink: "#E8EDF1",
    inkMuted: "#8FA3B1",
    inkFaint: "#4A6070",
    accent: "#3AB5D8",
    accentHover: "#58C8E8",
    trace: "#E8942E",
    traceHover: "#F0A840",
    grid: "#1E3248",
    success: "#3DAA66",
    error: "#E05A50",
  },
} as const;

export const fonts = {
  display: '"DM Mono", "Courier New", monospace',
  body: '"IBM Plex Sans", system-ui, sans-serif',
  mono: '"JetBrains Mono", "Fira Code", monospace',
} as const;

export const typeScale = {
  // Display — DM Mono
  "display-xl": { size: "clamp(3rem, 6vw, 5rem)", weight: 500, lineHeight: "1.05", letterSpacing: "-0.02em" },
  "display-lg": { size: "clamp(2.25rem, 4vw, 3.5rem)", weight: 500, lineHeight: "1.1", letterSpacing: "-0.015em" },
  "display-sm": { size: "clamp(1.5rem, 2.5vw, 2.25rem)", weight: 500, lineHeight: "1.15", letterSpacing: "-0.01em" },
  // Body — IBM Plex Sans
  "body-lg": { size: "1.125rem", weight: 400, lineHeight: "1.7" },
  "body-md": { size: "1rem", weight: 400, lineHeight: "1.65" },
  "body-sm": { size: "0.875rem", weight: 400, lineHeight: "1.6" },
  // Label/mono — JetBrains Mono
  "label-lg": { size: "0.875rem", weight: 500, lineHeight: "1.4", letterSpacing: "0.08em" },
  "label-sm": { size: "0.75rem", weight: 500, lineHeight: "1.4", letterSpacing: "0.10em" },
  "code": { size: "0.8125rem", weight: 400, lineHeight: "1.6" },
} as const;

export const spacing = {
  section: "clamp(5rem, 10vw, 8rem)",
  containerMax: "72rem",     // ~1152px — deliberately narrower than 1280 for reading comfort
  containerPad: "clamp(1.25rem, 5vw, 3rem)",
  gap: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2.5rem",
    xl: "4rem",
  },
} as const;

export const grid = {
  // Blueprint grid: thin lines every 32px, accent lines every 160px
  cellSize: 32,
  accentEvery: 5,
  opacity: { light: 0.35, dark: 0.25 },
} as const;

export const animation = {
  // Varied easing + duration palette — deliberately NOT uniform
  snap: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
  smooth: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  enter: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },  // spring-like
  packet: { duration: 0.8, ease: [0.4, 0, 0.6, 1] },
} as const;

export const borderRadius = {
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.75rem",
  pill: "9999px",
} as const;

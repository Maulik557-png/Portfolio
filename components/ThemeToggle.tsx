"use client";

import { useTheme } from "@/lib/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative flex items-center justify-center w-9 h-9 rounded-sm border transition-colors duration-150"
      style={{
        borderColor: "var(--border-strong)",
        color: "var(--ink-muted)",
      }}
    >
      {theme === "light" ? (
        /* Moon icon — switch to dark */
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M14 8.5A6.5 6.5 0 1 1 7.5 2a5 5 0 0 0 6.5 6.5z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        /* Sun icon — switch to light */
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.25" />
          <path
            d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}

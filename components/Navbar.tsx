"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "#about",        label: "About" },
  { href: "#tech",         label: "Stack" },
  { href: "#experience",   label: "Experience" },
  { href: "#projects",     label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact",      label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header
      id="navbar"
      role="banner"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
      }}
    >
      <nav
        className="container-bp"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "3.5rem",
        }}
        aria-label="Primary navigation"
      >
        {/* Wordmark — monospace, minimal */}
        <Link
          href="/"
          id="nav-wordmark"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.9375rem",
            fontWeight: 500,
            color: "var(--ink)",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          ms<span style={{ color: "var(--trace)" }}>_</span>
        </Link>

        {/* Nav links — desktop */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden sm:flex"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--ink-muted)")
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}

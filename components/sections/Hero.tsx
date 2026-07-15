// Hero — Phase 3: Static identity content + live ArchitectureDiagram.
// Server Component — ArchitectureDiagram is a Client Component; the boundary
// is created automatically by Next.js at the import.

import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "calc(100dvh - 3.5rem)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container-bp"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: "4rem",
          alignItems: "center",
          paddingBlock: "4rem",
        }}
      >
        {/* ── Left: Identity + CTA ── */}
        <div>
          {/* Eyebrow label */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label-sm)",
              fontWeight: 500,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: "var(--trace)",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ color: "var(--ink-faint)", marginRight: "0.5em" }}>//</span>
            Backend Engineer · Available 2027
          </p>

          {/* Name — largest visual element, first thing eyes land on */}
          <h1
            className="text-display-xl"
            style={{ color: "var(--ink)", marginBottom: "1rem" }}
          >
            Maulik
            <br />
            Shah
          </h1>

          {/* Positioning — specific claim, no boilerplate */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
              lineHeight: 1.6,
              color: "var(--ink-muted)",
              maxWidth: "38ch",
              marginBottom: "2.5rem",
            }}
          >
            Backend engineer who builds production-grade systems with Spring Boot,
            Kafka, and Redis — currently completing my final year at ADIT.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="#projects" className="btn-accent" id="hero-cta-projects">
              View Projects
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost" id="hero-cta-contact">
              Contact
            </a>
          </div>

          {/* Quick external links */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "2rem",
              borderTop: "1px solid var(--border)",
              paddingTop: "1.5rem",
            }}
          >
            {[
              { href: "https://github.com/Maulik557-png", label: "GitHub" },
              { href: "https://www.linkedin.com/in/smaulik557/", label: "LinkedIn" },
              { href: "https://leetcode.com/u/smaulik557/", label: "LeetCode" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label-sm"
                style={{
                  color: "var(--ink-faint)",
                  textDecoration: "none",
                }}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: Live architecture diagram (Phase 3) ── */}
        <div
          id="hero-diagram"
          style={{
            padding: "1.5rem",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            backgroundColor: "color-mix(in srgb, var(--surface) 70%, transparent)",
          }}
        >
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}

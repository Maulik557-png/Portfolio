// Hero — Phase 2: Real name, positioning, CTAs.
// Phase 3 will replace the right-column placeholder with the live architecture diagram.
// Server Component — no interactivity in this file.

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

        {/* ── Right: Architecture diagram placeholder (Phase 3) ── */}
        <div
          id="hero-diagram-placeholder"
          aria-label="Architecture diagram preview — interactive version coming in Phase 3"
          style={{
            border: "1px dashed var(--border-strong)",
            borderRadius: "var(--radius-md)",
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
            minHeight: "380px",
            backgroundColor: "color-mix(in srgb, var(--surface) 60%, transparent)",
          }}
        >
          {/* Static node-list preview of real architecture */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label-sm)",
              color: "var(--accent)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Razorpay Payment Flow
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0,
              width: "100%",
              maxWidth: "280px",
            }}
          >
            {[
              { label: "Client",           note: "React / Mobile" },
              { label: "API Gateway",      note: "Spring Cloud Gateway" },
              { label: "Payment Service",  note: "Spring Boot · Sig. verify" },
              { label: "Kafka",            note: "topic: payment.events" },
              { label: "Redis Cache",      note: "Idempotency · Rate limit" },
              { label: "MySQL",            note: "Persistent state" },
            ].map((node, i) => (
              <div
                key={node.label}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
              >
                <div
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.875rem",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--surface)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "var(--ink)",
                    }}
                  >
                    {node.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      color: "var(--ink-faint)",
                      textAlign: "right",
                    }}
                  >
                    {node.note}
                  </span>
                </div>
                {i < 5 && (
                  <div
                    style={{
                      width: "1px",
                      height: "1.25rem",
                      backgroundColor: "var(--border-strong)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label-sm)",
              color: "var(--ink-faint)",
              marginTop: "1.5rem",
              letterSpacing: "0.06em",
            }}
          >
            // Animated trace · Phase 3
          </p>
        </div>
      </div>
    </section>
  );
}

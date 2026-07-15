// Achievements — Phase 4: Scroll reveals added.
// Layout: bordered table for certification; expanded cards for hackathons.
// No emoji, no confetti, no decorative elements.

import { Reveal } from "@/components/Reveal";

// Inline SVG icon (no external dep)
function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

type HackathonEntry = {
  id: string;
  event: string;
  venue: string;
  scale: string;
  placement: string;
  team: string;
  projectName: string;
  projectDesc: string;
  stack: string[];
  repo: string;
};

const HACKATHONS: HackathonEntry[] = [
  {
    id: "ssip",
    event: "SSIP Gujarat Hackathon",
    venue: "PDPU College, GIFT City",
    scale: "1,200+ teams registered",
    placement: "Top 36 · Finalist",
    team: "Team Awaaz",
    projectName: "Awaaz",
    projectDesc:
      "Acoustic machinery health monitoring for an NTPC problem statement. Detects early equipment faults by classifying industrial sound recordings via a CNN pipeline — catching failure signatures before they surface as downtime.",
    stack: ["React / TypeScript", "Django REST", "MySQL", "TensorFlow", "librosa"],
    repo: "https://github.com/Maulik557-png/Awaaz-NTPC",
  },
  {
    id: "innovationai",
    event: "Innovation AI — Shaping Future",
    venue: "DAIICT Gandhinagar",
    scale: "900+ teams registered",
    placement: "Top 80 · Finalist",
    team: "Team Swift AI",
    projectName: "Swift AI",
    projectDesc:
      "Full-stack fraud detection and real-time transaction analytics platform for banking. ML pipeline (LightGBM) scores each transaction in-flight; a live dashboard surfaces anomaly clusters and risk trends for analysts.",
    stack: ["Flask", "MongoDB Atlas", "LightGBM", "Scikit-learn", "Bootstrap 5"],
    repo: "https://github.com/Maulik557-png/SWIFT-AI",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="section-spacing"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container-bp">
        <Reveal variant="fade-up">
          <span className="section-label">Achievements</span>

          <h2
            id="achievements-heading"
            className="text-display-sm"
            style={{ color: "var(--ink)", marginBottom: "3rem" }}
          >
            Recognition
          </h2>
        </Reveal>

        {/* ── Certification row ── */}
        <Reveal variant="fade-up" delay={0.08}>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              maxWidth: "52rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "7rem 1fr auto",
                gap: "1rem",
                alignItems: "center",
                padding: "1.25rem 1.5rem",
                backgroundColor: "var(--surface)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-label-sm)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Certification
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body-sm)",
                    fontWeight: 500,
                    color: "var(--ink)",
                    marginBottom: "0.15rem",
                  }}
                >
                  Oracle Cloud Infrastructure Foundations Associate
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-label-sm)",
                    color: "var(--ink-faint)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Oracle · OCI 2024
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/16otqumwK2DKDpN0vbg5SdKwwykVFS8UJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ padding: "0.375rem 0.875rem", fontSize: "var(--text-label-sm)", whiteSpace: "nowrap" }}
              >
                Certificate ↗
              </a>
            </div>
          </div>
        </Reveal>

        {/* ── Hackathon cards ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {HACKATHONS.map((h, i) => (
            <Reveal key={h.id} variant="fade-up-sm" delay={0.16 + i * 0.08}>
              <article
                className="card-bp"
                aria-labelledby={`hackathon-${h.id}-title`}
                style={{ padding: "2rem" }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                    paddingBottom: "1.25rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div>
                    {/* Type badge */}
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--trace)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Hackathon · {h.placement}
                    </p>
                    <h3
                      id={`hackathon-${h.id}-title`}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.125rem",
                        fontWeight: 500,
                        color: "var(--ink)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {h.event}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--ink-faint)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {h.venue} · {h.scale} · {h.team}
                    </p>
                  </div>

                  <a
                    href={h.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ padding: "0.375rem 0.875rem", fontSize: "var(--text-label-sm)", flexShrink: 0, display: "inline-flex", alignItems: "center", gap: "0.375rem" }}
                  >
                    <GitHubIcon />
                    Github
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                {/* Project detail */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
                    gap: "2rem",
                    alignItems: "start",
                  }}
                >
                  {/* Left: description */}
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--accent)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Project · {h.projectName}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body-sm)",
                        color: "var(--ink-muted)",
                        lineHeight: 1.7,
                      }}
                    >
                      {h.projectDesc}
                    </p>
                  </div>

                  {/* Right: stack tags */}
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--ink-faint)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Stack
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {h.stack.map((tag) => (
                        <span key={tag} className="code-label">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

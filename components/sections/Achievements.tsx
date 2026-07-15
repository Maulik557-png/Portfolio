// Achievements — Phase 2: Real certifications and hackathon placements. Server Component.
// Layout: compact stacked rows — not a 3-column grid, no emoji, no confetti.

type Achievement = {
  id: string;
  type: "Certification" | "Hackathon" | "Award";
  title: string;
  issuer: string;
  detail?: string;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "oci",
    type: "Certification",
    title: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    detail: "OCI 2024 Certified",
  },
  {
    id: "ssip",
    type: "Hackathon",
    title: "SSIP Gujarat Hackathon — Finalist",
    issuer: "Government of Gujarat · Startup Gujarat",
    detail: "Team Awaaz",
  },
  {
    id: "innovationai",
    type: "Hackathon",
    title: "Innovation AI — Shaping Future Hackathon — Finalist",
    issuer: "Innovation AI",
    detail: "Team Swift AI",
  },
];

const TYPE_COLOR: Record<Achievement["type"], string> = {
  Certification: "var(--accent)",
  Hackathon:     "var(--trace)",
  Award:         "var(--ink)",
};

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
        <span className="section-label">Achievements</span>

        <h2
          id="achievements-heading"
          className="text-display-sm"
          style={{ color: "var(--ink)", marginBottom: "3rem" }}
        >
          Recognition
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            maxWidth: "52rem",
          }}
        >
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={item.id}
              style={{
                display: "grid",
                gridTemplateColumns: "7rem 1fr auto",
                gap: "1rem",
                alignItems: "center",
                padding: "1.25rem 1.5rem",
                borderBottom:
                  i < ACHIEVEMENTS.length - 1 ? "1px solid var(--border)" : "none",
                backgroundColor: i % 2 === 0 ? "var(--surface)" : "var(--bg-subtle)",
              }}
            >
              {/* Type label */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-label-sm)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: TYPE_COLOR[item.type],
                }}
              >
                {item.type}
              </span>

              {/* Title + issuer */}
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
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-label-sm)",
                    color: "var(--ink-faint)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.issuer}
                </p>
              </div>

              {/* Detail pill */}
              {item.detail && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-label-sm)",
                    color: "var(--ink-muted)",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.detail}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

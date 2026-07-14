// Experience section — Phase 2 will add real internship/work content.
// Phase 1: Structure scaffold only.

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-spacing"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="container-bp">
        <span className="section-label" aria-hidden="true">
          Experience
        </span>
        <h2
          id="experience-heading"
          className="text-display-sm"
          style={{ color: "var(--ink)", marginBottom: "2rem" }}
        >
          {/* placeholder */}
        </h2>

        {/*
          PHASE 2 CONTENT:
          - Vertical timeline layout: left rail (accent line + dot), right content
          - Each entry: company, role, date range, 2-3 specific achievement bullets
          - Bullets framed as outcomes, not responsibilities
          - Tech tags inline with each entry (monospace, small)
          - Razorpay internship is the primary entry — Kafka/Redis payment integration
        */}
        <p className="text-label-sm text-ink-faint">
          [Experience — timeline entries go here]
        </p>
      </div>
    </section>
  );
}

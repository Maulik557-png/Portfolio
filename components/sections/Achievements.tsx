// Achievements section — Phase 2 will add real hackathon/award content.
// Phase 1: Structure scaffold only.

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="section-spacing"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="container-bp">
        <span className="section-label" aria-hidden="true">
          Achievements
        </span>
        <h2
          id="achievements-heading"
          className="text-display-sm"
          style={{ color: "var(--ink)", marginBottom: "2rem" }}
        >
          {/* placeholder */}
        </h2>

        {/*
          PHASE 2 CONTENT:
          - Compact horizontal scroll or inline list layout (not 3-column grid)
          - Each item: event name, placement/outcome, date
          - No confetti, no trophies, no emoji — plain structured layout
          - Hackathons, competitive programming ranks, open source contributions, etc.
        */}
        <p className="text-label-sm text-ink-faint">
          [Achievements — awards and hackathons go here]
        </p>
      </div>
    </section>
  );
}

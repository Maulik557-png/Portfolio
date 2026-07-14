// TechStack section — Phase 2 will add real skills with deliberate grouping.
// Phase 1: Structure scaffold only.
// NOTE: No "icon + title + description" 3-column grid. Instead: 
//   grouped inline tags by category (Language, Runtime, Messaging, Cache, Cloud, Tools)
//   with proficiency-level differentiators via opacity/weight, not color bars.

export function TechStack() {
  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      className="section-spacing"
      style={{
        position: "relative",
        zIndex: 1,
        backgroundColor: "var(--bg-subtle)",
      }}
    >
      <div className="container-bp">
        <span className="section-label" aria-hidden="true">
          Tech Stack
        </span>
        <h2
          id="tech-heading"
          className="text-display-sm"
          style={{ color: "var(--ink)", marginBottom: "2rem" }}
        >
          {/* placeholder */}
        </h2>

        {/*
          PHASE 2 CONTENT:
          - Grouped inline tag lists by category
          - Categories: Languages · Frameworks · Messaging · Cache · Cloud · Tools
          - Each tag: monospace font, thin border, category color-coded via a single
            accent hue shift (not rainbow palette)
          - Proficiency distinction: primary skills full opacity, secondary skills
            60% opacity — no fake progress bars or star ratings
        */}
        <p className="text-label-sm text-ink-faint">
          [TechStack — grouped skill tags go here]
        </p>
      </div>
    </section>
  );
}

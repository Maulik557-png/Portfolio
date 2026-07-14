// Projects section — Phase 2 will add real project cards.
// Phase 1: Structure scaffold only.

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-spacing"
      style={{
        position: "relative",
        zIndex: 1,
        backgroundColor: "var(--bg-subtle)",
      }}
    >
      <div className="container-bp">
        <span className="section-label" aria-hidden="true">
          Projects
        </span>
        <h2
          id="projects-heading"
          className="text-display-sm"
          style={{ color: "var(--ink)", marginBottom: "2rem" }}
        >
          {/* placeholder */}
        </h2>

        {/*
          PHASE 2 CONTENT:
          - Blueprint-card layout: NOT a uniform 3-column grid
          - Featured project (largest card): has a small embedded architecture thumbnail
          - Supporting projects: compact cards with tech tags and a one-line problem statement
          - Each card: project name (display font), problem it solves, tech stack tags,
            GitHub link and/or live link (monospace label buttons)
          - No fake screenshots or placeholder images
        */}
        <p className="text-label-sm text-ink-faint">
          [Projects — project cards go here]
        </p>
      </div>
    </section>
  );
}

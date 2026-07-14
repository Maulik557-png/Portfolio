// About section — Phase 2 will add real content (bio, education, values).
// Phase 1: Structure scaffold only.

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-spacing"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="container-bp">
        <span className="section-label" aria-hidden="true">
          About
        </span>
        <h2
          id="about-heading"
          className="text-display-sm"
          style={{ color: "var(--ink)", marginBottom: "2rem" }}
        >
          {/* placeholder */}
        </h2>

        {/*
          PHASE 2 CONTENT:
          - Two-column layout at md+: bio paragraph (left), education card (right)
          - Short bio: real, specific, no boilerplate language
          - Education: institution, degree, graduation year, relevant coursework
          - A brief "what I care about building" statement — systems, reliability, clarity
        */}
        <p className="text-label-sm text-ink-faint">
          [About — bio and education content goes here]
        </p>
      </div>
    </section>
  );
}

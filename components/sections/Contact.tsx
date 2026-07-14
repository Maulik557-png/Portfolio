// Contact section — Phase 2 will add real links and contact form/CTA.
// Phase 1: Structure scaffold only.

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-spacing"
      style={{
        position: "relative",
        zIndex: 1,
        backgroundColor: "var(--bg-subtle)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container-bp">
        <span className="section-label" aria-hidden="true">
          Contact
        </span>
        <h2
          id="contact-heading"
          className="text-display-sm"
          style={{ color: "var(--ink)", marginBottom: "2rem" }}
        >
          {/* placeholder */}
        </h2>

        {/*
          PHASE 2 CONTENT:
          - No contact form (reduces maintenance burden, no backend needed)
          - Direct links: Email, GitHub, LinkedIn, Resume PDF
          - Styled as ghost-button row (monospace labels, thin borders)
          - A brief, specific "what I'm looking for" sentence — no boilerplate
          - Footer below: copyright, built-with note (honest: Next.js, Framer Motion)
        */}
        <p className="text-label-sm text-ink-faint">
          [Contact — links and CTA go here]
        </p>
      </div>
    </section>
  );
}

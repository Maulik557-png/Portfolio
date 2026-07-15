// Contact — Phase 2: Real links, honest CTA, no form. Server Component.

type ContactLink = {
  id: string;
  label: string;
  href: string;
  display: string;
  primary?: boolean;
};

const LINKS: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    href: "mailto:smaulik557@gmail.com",
    display: "smaulik557@gmail.com",
    primary: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Maulik557-png",
    display: "Maulik557-png",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/smaulik557/",
    display: "smaulik557",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    href: "https://leetcode.com/u/smaulik557/",
    display: "smaulik557",
  },
  {
    id: "codolio",
    label: "Codolio",
    href: "https://codolio.com/profile/smaulik557",
    display: "smaulik557",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container-bp section-spacing">
        <span className="section-label">Contact</span>

        <h2
          id="contact-heading"
          className="text-display-sm"
          style={{ color: "var(--ink)", marginBottom: "1.25rem" }}
        >
          Let&apos;s talk
        </h2>

        {/* Specific, honest context — no boilerplate */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body-md)",
            color: "var(--ink-muted)",
            maxWidth: "48ch",
            lineHeight: 1.7,
            marginBottom: "3rem",
          }}
        >
          I&apos;m actively looking for backend or full-stack roles starting mid-2027,
          after graduation. If you&apos;re hiring for someone who can own a service from
          design through observability, I&apos;d like to hear from you.
        </p>

        {/* Link grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
            gap: "0.875rem",
            maxWidth: "56rem",
            marginBottom: "5rem",
          }}
        >
          {LINKS.map(({ id, label, href, display, primary }) => (
            <a
              key={id}
              id={`contact-link-${id}`}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                padding: "1rem 1.25rem",
                border: `1px solid ${primary ? "var(--accent)" : "var(--border)"}`,
                borderRadius: "var(--radius-md)",
                backgroundColor: primary ? "color-mix(in srgb, var(--accent) 6%, var(--surface))" : "var(--surface)",
                textDecoration: "none",
                transition: "border-color 150ms ease, background-color 150ms ease",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-label-sm)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: primary ? "var(--accent)" : "var(--ink-faint)",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-sm)",
                  color: "var(--ink)",
                }}
              >
                {display}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label-sm)",
              color: "var(--ink-faint)",
              letterSpacing: "0.04em",
            }}
          >
            © 2026 Maulik Shah
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label-sm)",
              color: "var(--ink-faint)",
              letterSpacing: "0.04em",
            }}
          >
            Built with Next.js · Framer Motion · Tailwind CSS v4
          </p>
        </footer>
      </div>
    </section>
  );
}

// Projects — Phase 2: Two internship projects framed with P→A→C→O. Server Component.
// Layout: featured card (Razorpay) takes full width; HulkHire in a supporting card below.
// No fake screenshots. No decorative images. Architecture thumbnail is the static node-list.

type ProjectCard = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string[];
  outcome: string;
  tech: string[];
  links: { label: string; href: string }[];
};

const PROJECTS: ProjectCard[] = [
  {
    id: "razorpay",
    tag: "Featured · Internship Project",
    title: "Razorpay Payment Integration",
    subtitle: "4-service microservices platform — BytezTech Pvt Ltd",
    problem:
      "Build a payment system from zero that handles the full Razorpay lifecycle — order creation through webhook processing — without data loss under concurrent load.",
    approach: [
      "API Gateway routes and authenticates inbound requests before they reach business logic.",
      "Payment Service verifies HMAC signatures, manages order state, and publishes events.",
      "Kafka decouples the payment capture from downstream side effects (notifications, ledger updates).",
      "Redis enforces idempotency keys and implements token-bucket rate limiting on outbound Razorpay calls.",
      "Resilience4j circuit breakers prevent cascade failures when any downstream service degrades.",
    ],
    outcome:
      "End-to-end payment lifecycle running in production with Prometheus/Grafana observability, structured Loki logs, and a Redis state machine that handles out-of-order webhook delivery correctly.",
    tech: [
      "Spring Boot",
      "Apache Kafka",
      "Redis",
      "MySQL",
      "OpenFeign",
      "Resilience4j",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Maulik557-png" },
    ],
  },
  {
    id: "paypal",
    tag: "Internship Project",
    title: "PayPal Checkout Integration",
    subtitle: "OAuth-cached microservice — HulkHire Tech",
    problem:
      "Integrate PayPal Standard Checkout without hitting OAuth rate limits — a recurring failure mode in the team's previous integration.",
    approach: [
      "Redis-cached token store with TTL-aligned expiry reuses access tokens across requests, eliminating redundant /oauth2/token calls.",
      "Centralized exception handler maps PayPal API error codes to typed domain exceptions.",
      "AWS Secrets Manager stores credentials; lazy-loading strategy keeps the secret fetch off the request hot path.",
    ],
    outcome:
      "OAuth rate limit failures eliminated. Deployed on AWS EC2/RDS. STAR Performer Award for sprint delivery. Codebase refactored to Factory/Builder patterns, reducing order-construction coupling.",
    tech: [
      "Spring Boot",
      "Spring Security",
      "Redis",
      "OAuth 2.0",
      "AWS EC2",
      "AWS RDS",
      "Secrets Manager",
      "Docker",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Maulik557-png" },
    ],
  },
];

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
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-bp">
        <span className="section-label">Projects</span>

        <h2
          id="projects-heading"
          className="text-display-sm"
          style={{ color: "var(--ink)", marginBottom: "3rem" }}
        >
          Systems I&apos;ve built
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="card-bp"
              aria-labelledby={`project-${project.id}-title`}
              style={{
                padding: "2rem",
                // Featured card gets slightly higher contrast border
                borderColor: index === 0 ? "var(--border-strong)" : "var(--border)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: index === 0 ? "minmax(0, 3fr) minmax(0, 2fr)" : "1fr",
                  gap: "2.5rem",
                  alignItems: "start",
                }}
              >
                {/* ── Left / Main content ── */}
                <div>
                  {/* Tag */}
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-label-sm)",
                      color: index === 0 ? "var(--trace)" : "var(--accent)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.tag}
                  </p>

                  <h3
                    id={`project-${project.id}-title`}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: index === 0 ? "1.375rem" : "1.125rem",
                      fontWeight: 500,
                      color: "var(--ink)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-label-sm)",
                      color: "var(--ink-faint)",
                      letterSpacing: "0.04em",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {project.subtitle}
                  </p>

                  {/* Problem */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--ink-faint)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Problem
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body-sm)",
                        color: "var(--ink-muted)",
                        lineHeight: 1.7,
                      }}
                    >
                      {project.problem}
                    </p>
                  </div>

                  {/* Approach — bulleted for scannability */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--accent)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Approach
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem",
                      }}
                    >
                      {project.approach.map((point, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: "0.625rem",
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-body-sm)",
                            color: "var(--ink-muted)",
                            lineHeight: 1.6,
                          }}
                        >
                          <span
                            style={{
                              color: "var(--accent)",
                              fontFamily: "var(--font-mono)",
                              flexShrink: 0,
                              marginTop: "0.05em",
                            }}
                          >
                            →
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--ink)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Outcome
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--text-body-sm)",
                        color: "var(--ink-muted)",
                        lineHeight: 1.7,
                      }}
                    >
                      {project.outcome}
                    </p>
                  </div>

                  {/* Footer: tech + links */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                      paddingTop: "1.25rem",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                      {project.tech.map((tag) => (
                        <span key={tag} className="code-label">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      {project.links.map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost"
                          style={{ padding: "0.375rem 0.875rem", fontSize: "var(--text-label-sm)" }}
                        >
                          {label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Right: Architecture node list (featured project only) ── */}
                {index === 0 && (
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--accent)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "1rem",
                      }}
                    >
                      Request Flow
                    </p>
                    <div
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-sm)",
                        overflow: "hidden",
                      }}
                    >
                      {[
                        { label: "Client",          detail: "POST /payment/initiate" },
                        { label: "API Gateway",     detail: "Auth + route" },
                        { label: "Payment Service", detail: "Sig verify + state" },
                        { label: "Kafka",           detail: "payment.events topic" },
                        { label: "Redis",           detail: "Idempotency + rate" },
                        { label: "MySQL",           detail: "txn_log committed" },
                      ].map((node, i, arr) => (
                        <div
                          key={node.label}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0.625rem 0.875rem",
                            borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                            backgroundColor: i % 2 === 0 ? "var(--surface)" : "var(--bg-subtle)",
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
                            {i + 1}. {node.label}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.6875rem",
                              color: "var(--ink-faint)",
                            }}
                          >
                            {node.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--ink-faint)",
                        marginTop: "0.75rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      // Animated in hero · Phase 3
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

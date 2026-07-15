// Experience — Phase 2: Real internship entries in P→A→C→O framing. Server Component.
// Layout: vertical timeline — accent left rail, content right.
// Framing: outcomes first, responsibilities avoided.

type TechTag = string;
type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  award?: string;
  narrative: {
    problem: string;
    approach: string;
    challenge: string;
    outcome: string;
  };
  tech: TechTag[];
};

const EXPERIENCES: ExperienceEntry[] = [
  {
    id: "byteztech",
    company: "BytezTech Pvt Ltd",
    role: "Java Developer Intern",
    period: "May 2026 – Jun 2026",
    location: "Surat, Gujarat",
    narrative: {
      problem:
        "The team needed a production-grade payment system for Razorpay with no existing internal payments infrastructure to build on — every layer had to be designed from scratch.",
      approach:
        "Designed a 4-service microservices platform: an API Gateway routing inbound requests, a Payment Service handling order creation and HMAC signature verification, a Kafka producer/consumer pipeline for async event processing, and a Redis layer managing idempotency keys and rate limiting. Implemented Resilience4j circuit breakers on all inter-service calls and wired Prometheus metrics to a Grafana/Loki observability stack.",
      challenge:
        "Payment webhooks from Razorpay arrive out of order under load. A naive state machine would allow a refund event to process before the capture confirmation arrived, producing invalid state. Solving this required a Redis-backed concurrency-safe state machine with versioned transitions and conditional writes.",
      outcome:
        "Shipped a fully observable, fault-tolerant payment integration handling end-to-end order lifecycle — creation, capture, signature verification, webhook processing, and failure recovery — with zero data-loss guarantees on the event pipeline.",
    },
    tech: [
      "Spring Boot",
      "Apache Kafka",
      "Redis",
      "MySQL",
      "OpenFeign",
      "Resilience4j",
      "Prometheus",
      "Grafana",
      "Loki",
      "Razorpay SDK",
    ],
  },
  {
    id: "hulkhire",
    company: "HulkHire Tech",
    role: "Java Developer Trainee",
    period: "Oct 2025 – Dec 2025",
    location: "Hyderabad, Telangana",
    award: "STAR Performer Award",
    narrative: {
      problem:
        "HulkHire required a PayPal Standard Checkout integration that could handle token lifecycle management without hitting PayPal's OAuth rate limits — a recurring failure mode in their previous integration attempts.",
      approach:
        "Built a Spring Boot microservice implementing PayPal's Create/Capture Order API flow with OAuth 2.0 client-credentials auth. Introduced a Redis-cached token store with TTL-aligned expiry, so tokens are reused across requests until 60 seconds before expiry — eliminating redundant auth calls. Applied Factory and Builder patterns to clean up order construction logic.",
      challenge:
        "AWS Secrets Manager latency on cold starts was causing timeouts in the payment service initialization path. Resolved by lazy-loading credentials with a local cache warm-up strategy and moving the Secrets Manager call out of the request path.",
      outcome:
        "Deployed on AWS EC2/RDS with full CI/CD. Eliminated OAuth rate limit failures. Earned the STAR Performer Award for sprint delivery within an Agile/Scrum team.",
    },
    tech: [
      "Spring Boot",
      "Spring Security",
      "Redis",
      "AWS EC2",
      "AWS RDS",
      "Secrets Manager",
      "PayPal SDK",
      "OAuth 2.0",
      "Docker",
    ],
  },
];

const PACO_LABELS: Record<keyof ExperienceEntry["narrative"], string> = {
  problem:   "Problem",
  approach:  "Approach",
  challenge: "Challenge",
  outcome:   "Outcome",
};

const PACO_COLORS: Record<keyof ExperienceEntry["narrative"], string> = {
  problem:   "var(--ink-faint)",
  approach:  "var(--accent)",
  challenge: "var(--trace)",
  outcome:   "var(--ink)",
};

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-spacing"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container-bp">
        <span className="section-label">Experience</span>

        <h2
          id="experience-heading"
          className="text-display-sm"
          style={{ color: "var(--ink)", marginBottom: "3.5rem" }}
        >
          Where I&apos;ve shipped
        </h2>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical rail */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "0",
              top: "0.375rem",
              bottom: 0,
              width: "1px",
              backgroundColor: "var(--border)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {EXPERIENCES.map((entry) => (
              <div
                key={entry.id}
                style={{ paddingLeft: "2.5rem", position: "relative" }}
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-4px",
                    top: "0.375rem",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent)",
                    border: "2px solid var(--bg)",
                    boxSizing: "content-box",
                  }}
                />

                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.125rem",
                          fontWeight: 500,
                          color: "var(--ink)",
                        }}
                      >
                        {entry.company}
                      </h3>
                      {entry.award && (
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "var(--text-label-sm)",
                            color: "var(--trace)",
                            border: "1px solid color-mix(in srgb, var(--trace) 40%, transparent)",
                            borderRadius: "var(--radius-sm)",
                            padding: "0.1rem 0.5rem",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {entry.award}
                        </span>
                      )}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--accent)",
                        letterSpacing: "0.06em",
                        marginTop: "0.2rem",
                      }}
                    >
                      {entry.role}
                    </p>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--ink-muted)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {entry.period}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-label-sm)",
                        color: "var(--ink-faint)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {entry.location}
                    </p>
                  </div>
                </div>

                {/* P→A→C→O narrative */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                    padding: "1.25rem",
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  {(Object.keys(PACO_LABELS) as Array<keyof ExperienceEntry["narrative"]>).map(
                    (key) => (
                      <div key={key} style={{ display: "flex", gap: "1rem" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "var(--text-label-sm)",
                            fontWeight: 500,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: PACO_COLORS[key],
                            minWidth: "5.5rem",
                            paddingTop: "0.15rem",
                            flexShrink: 0,
                          }}
                        >
                          {PACO_LABELS[key]}
                        </span>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-body-sm)",
                            color: "var(--ink-muted)",
                            lineHeight: 1.7,
                          }}
                        >
                          {entry.narrative[key]}
                        </p>
                      </div>
                    )
                  )}
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {entry.tech.map((tag) => (
                    <span key={tag} className="code-label">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

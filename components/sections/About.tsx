// About — Phase 4: Scroll reveals added.
// Heading + bio column + education column each enter independently.
// Variant: fade-up (y: 14) — the most natural reveal for a bio section.

import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-spacing"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container-bp">
        <Reveal variant="fade-up">
          <span className="section-label">About</span>
        </Reveal>

        <div className="grid-about-responsive">
          {/* ── Left: Bio ── */}
          <Reveal variant="fade-up" delay={0.06}>
            <div>
              <h2
                id="about-heading"
                className="text-display-sm"
                style={{ color: "var(--ink)", marginBottom: "1.5rem" }}
              >
                I build systems
                <br />
                that hold up.
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  color: "var(--ink-muted)",
                  fontSize: "var(--text-body-md)",
                  lineHeight: 1.7,
                  maxWidth: "60ch",
                }}
              >
                <p>
                  I&apos;m a final-year Computer Engineering student at ADIT, Vadodara,
                  with a focus on backend systems — specifically the parts that have
                  to work when load spikes, payment webhooks fire out of order, or
                  a downstream service goes silent.
                </p>
                <p>
                  In my internships I&apos;ve shipped two production payment integrations
                  — Razorpay and PayPal — both built as microservices on Spring Boot,
                  both requiring real concurrency reasoning: idempotency keys, Redis
                  state machines, Kafka event pipelines, and retry logic with circuit
                  breakers.
                </p>
                <p>
                  I care about the clarity of a system as much as its correctness. If
                  I can&apos;t explain every hop in a request trace, I don&apos;t consider the
                  work done.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── Right: Education card ── */}
          <Reveal variant="fade-up" delay={0.16}>
            <div>
              <div className="card-bp">
                {/* Card header */}
                <div
                  style={{
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: "1rem",
                    marginBottom: "1rem",
                  }}
                >
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
                    Education
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "var(--ink)",
                      lineHeight: 1.3,
                    }}
                  >
                    B.E. Computer Engineering
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-body-sm)",
                      color: "var(--ink-muted)",
                      marginTop: "0.25rem",
                    }}
                  >
                    A.D. Patel Institute of Technology
                  </p>
                </div>

                {/* Details */}
                <dl
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem 0.5rem",
                  }}
                >
                  {[
                    { label: "Batch",      value: "2023 – 2027" },
                    { label: "CGPA",       value: "8.89 / 10" },
                    { label: "Location",   value: "Vadodara, GJ" },
                    { label: "Status",     value: "Final Year" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <dt
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "var(--text-label-sm)",
                          color: "var(--ink-faint)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {label}
                      </dt>
                      <dd
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "0.9375rem",
                          fontWeight: 500,
                          color: "var(--ink)",
                        }}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* OCI cert badge */}
                <div
                  style={{
                    marginTop: "1.25rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--success, #2A7A4B)",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-label-sm)",
                      color: "var(--ink-muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Oracle Cloud Infrastructure Foundations Associate
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

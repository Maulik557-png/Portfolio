// TechStack — Phase 4: Scroll reveals added.
// Heading: fade-up. Category rows: fade-left with stagger.
// The horizontal slide-from-left reinforces the "label → tags" reading direction.

import { Reveal } from "@/components/Reveal";

type Skill    = { name: string; primary?: boolean };
type Category = { label: string; skills: Skill[] };

const STACK: Category[] = [
  {
    label: "Languages",
    skills: [
      { name: "Java 8+",        primary: true },
      { name: "SQL",            primary: true },
      { name: "JavaScript ES6", primary: true },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Spring Boot",       primary: true },
      { name: "Spring MVC",        primary: true },
      { name: "Spring Security",   primary: true },
      { name: "Spring Data JPA",   primary: true },
      { name: "Hibernate",         primary: true },
      { name: "REST APIs",         primary: true },
      { name: "Microservices",     primary: true },
      { name: "OpenFeign",         primary: true },
      { name: "Resilience4j" },
    ],
  },
  {
    label: "Messaging & Cache",
    skills: [
      { name: "Apache Kafka",  primary: true },
      { name: "Redis",         primary: true },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MySQL",      primary: true },
      { name: "PostgreSQL", primary: true },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS EC2",           primary: true },
      { name: "AWS RDS",           primary: true },
      { name: "Secrets Manager",   primary: true },
      { name: "Docker",            primary: true },
      { name: "Jenkins" },
      { name: "CI/CD" },
    ],
  },
  {
    label: "Observability",
    skills: [
      { name: "Prometheus" },
      { name: "Grafana" },
      { name: "Loki" },
    ],
  },
  {
    label: "Testing & Tools",
    skills: [
      { name: "JUnit 5",   primary: true },
      { name: "Mockito",   primary: true },
      { name: "Postman",   primary: true },
      { name: "Git",       primary: true },
      { name: "Jira" },
    ],
  },
];

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
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-bp">
        <Reveal variant="fade-up">
          <span className="section-label">Tech Stack</span>

          <h2
            id="tech-heading"
            className="text-display-sm"
            style={{ color: "var(--ink)", marginBottom: "0.5rem" }}
          >
            What I work with
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-sm)",
              color: "var(--ink-faint)",
              marginBottom: "3rem",
            }}
          >
            Full opacity = primary · reduced opacity = familiar
          </p>
        </Reveal>

        {/* Category rows — each slides in from the left, staggered */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {STACK.map((cat, i) => (
            <Reveal key={cat.label} variant="fade-left" delay={i * 0.06} duration={0.45}>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "baseline" }}>
                {/* Category label */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-label-sm)",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    whiteSpace: "nowrap",
                    minWidth: "11rem",
                    paddingTop: "0.2rem",
                  }}
                >
                  {cat.label}
                </div>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-code)",
                        fontWeight: 400,
                        color: "var(--ink)",
                        backgroundColor: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-sm)",
                        padding: "0.2rem 0.625rem",
                        opacity: skill.primary ? 1 : 0.55,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

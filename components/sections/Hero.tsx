// Hero section — Phase 3 will build the interactive architecture diagram here.
// Phase 1: Structure scaffold only.

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero — architecture diagram"
      className="section-spacing"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="container-bp">
        {/* 
          PHASE 3 CONTENT:
          - Left column: name, title, brief descriptor, CTA buttons
          - Right column / full-width: SVG architecture diagram
            (Client → API Gateway → Payment Service → Kafka → Redis → Database)
          - "Trace a Request" button triggers animated packet traversal
          - Companion structured-log panel streams step labels in sync
        */}
        <div
          style={{
            minHeight: "calc(100dvh - 3.5rem)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p className="text-label-sm text-ink-faint">
            {/* placeholder — removed in Phase 2 */}
            [Hero — signature architecture diagram goes here]
          </p>
        </div>
      </div>
    </section>
  );
}

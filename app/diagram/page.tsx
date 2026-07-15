// app/diagram/page.tsx — isolated test route for the Phase 3 architecture diagram.
// Visit http://localhost:3000/diagram to test the animation in isolation
// before it's embedded in the Hero.
// This page won't be linked from anywhere in the final site.

import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

export const metadata = {
  title: "Diagram Test — Architecture Component",
  robots: { index: false }, // don't index this dev-only route
};

export default function DiagramTestPage() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
      }}
    >
      {/* Dev label */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-label-sm)",
          color: "var(--trace)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "2.5rem",
        }}
      >
        // /diagram — Phase 3 isolated component test
      </p>

      {/* Component in a constrained container — mirrors the hero right-column width */}
      <div style={{ width: "100%", maxWidth: "36rem" }}>
        <ArchitectureDiagram />
      </div>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-label-sm)",
          color: "var(--ink-faint)",
          marginTop: "3rem",
          letterSpacing: "0.04em",
        }}
      >
        // Integrated into Hero once timing feels right
      </p>
    </div>
  );
}

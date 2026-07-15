"use client";
// ArchitectureDiagram — Phase 3 signature component.
//
// Interaction contract:
//   - "Trace a Request" button → animates a packet downward through 6 nodes.
//   - Each node lights up (accent border + glow) when the packet arrives.
//   - A log line streams into the right panel in sync with each arrival.
//   - Connection segments turn solid-accent as the packet travels them.
//   - Click any node → tooltip with one-line real detail.
//   - prefers-reduced-motion → all nodes/logs appear instantly, no packet.
//
// Layout:
//   - Left: SVG diagram (fixed 14 rem wide so aspect ratio is stable)
//   - Right: Request log panel (fills remaining space)
//   - Below: Tooltip + Controls

import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { motion, animate, useMotionValue, useReducedMotion } from "framer-motion";
import {
  NODES,
  LOG_LINES,
  DIAGRAM_CX,
  NODE_W,
  NODE_H,
  SVG_W,
  SVG_H,
  NODE_X,
  HOP_DURATION,
  PAUSE_MS,
  type DiagramNode,
  type LogLine,
} from "@/lib/diagram/data";

// ─── Internal icons (SVG paths, no external dep) ─────────────────────────────

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7h8M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Phase 3 ─────────────────────────────────────────────────────────────────

type Phase = "idle" | "tracing" | "complete";

export function ArchitectureDiagram() {
  const [litNodes, setLitNodes]       = useState<Set<number>>(new Set());
  const [litSegments, setLitSegments] = useState<Set<number>>(new Set());
  const [logLines, setLogLines]       = useState<LogLine[]>([]);
  const [phase, setPhase]             = useState<Phase>("idle");
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const shouldReduceMotion = useReducedMotion();
  const isTracing   = useRef(false);
  const logPanelRef = useRef<HTMLDivElement>(null);

  const packetCY = useMotionValue(NODES[0].cy);

  // ── Helpers ────────────────────────────────────────────────────────────────

  const pushLog = useCallback((line: LogLine) => {
    setLogLines((prev) => {
      const next = [...prev, line];
      // Auto-scroll after React renders the new line
      requestAnimationFrame(() => {
        if (logPanelRef.current) {
          logPanelRef.current.scrollTop = logPanelRef.current.scrollHeight;
        }
      });
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    if (isTracing.current) return;
    setLitNodes(new Set());
    setLitSegments(new Set());
    setLogLines([]);
    setPhase("idle");
    setSelectedNode(null);
    packetCY.set(NODES[0].cy);
  }, [packetCY]);

  // ── Main animation sequence ────────────────────────────────────────────────

  const runTrace = useCallback(async () => {
    if (isTracing.current) return;
    isTracing.current = true;

    // Reset visual state
    setLitNodes(new Set());
    setLitSegments(new Set());
    setLogLines([]);
    setSelectedNode(null);
    packetCY.set(NODES[0].cy);
    setPhase("tracing");

    // Client lights up immediately (packet starts here)
    setLitNodes(new Set([0]));
    pushLog(LOG_LINES[0]);

    if (shouldReduceMotion) {
      // Instant fallback — no motion
      setLitNodes(new Set(NODES.map((_, i) => i)));
      setLitSegments(new Set(NODES.slice(0, -1).map((_, i) => i)));
      setLogLines([...LOG_LINES]);
      setPhase("complete");
      isTracing.current = false;
      return;
    }

    // Animate each hop: segment lights → packet travels → node arrives
    for (let i = 1; i < NODES.length; i++) {
      // Light up the segment the packet is about to cross
      setLitSegments((prev) => new Set([...prev, i - 1]));

      // Move packet to next node center
      await animate(packetCY, NODES[i].cy, {
        duration: HOP_DURATION,
        ease: [0.4, 0, 0.2, 1],
      });

      // Arrive: light up node + stream log line
      setLitNodes((prev) => new Set([...prev, i]));
      pushLog(LOG_LINES[i]);

      // Breathing pause before next hop
      if (i < NODES.length - 1) {
        await new Promise<void>((resolve) => setTimeout(resolve, PAUSE_MS));
      }
    }

    setPhase("complete");
    isTracing.current = false;
  }, [packetCY, shouldReduceMotion, pushLog]);

  // ── Node click handler ─────────────────────────────────────────────────────

  const handleNodeClick = useCallback((index: number) => {
    setSelectedNode((prev) => (prev === index ? null : index));
  }, []);

  const handleNodeKey = useCallback(
    (e: KeyboardEvent, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleNodeClick(index);
      }
    },
    [handleNodeClick]
  );

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      {/* Header */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-label-sm)",
          color: "var(--accent)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Razorpay Payment Flow
      </p>

      {/* Diagram + Log panel */}
      <div
        style={{
          display: "flex",
          gap: "1.25rem",
          alignItems: "flex-start",
        }}
      >
        {/* ── SVG Diagram (fixed 14rem wide so aspect-ratio is predictable) ── */}
        <div style={{ width: "14rem", flexShrink: 0 }}>
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            width="100%"
            style={{ display: "block" }}
            aria-label="Architecture diagram: interactive request trace through the Razorpay payment system"
            role="img"
          >
            <defs>
              {/* Subtle glow for active nodes */}
              <filter
                id="ad-node-glow"
                x="-25%"
                y="-25%"
                width="150%"
                height="150%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Tighter glow for the travelling packet */}
              <filter
                id="ad-packet-glow"
                x="-120%"
                y="-120%"
                width="340%"
                height="340%"
              >
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Arrowhead — inactive */}
              <marker
                id="ad-arrow"
                markerWidth="6"
                markerHeight="5"
                refX="3"
                refY="2.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 6 2.5, 0 5"
                  fill="var(--border)"
                />
              </marker>

              {/* Arrowhead — active (lit segment) */}
              <marker
                id="ad-arrow-active"
                markerWidth="6"
                markerHeight="5"
                refX="3"
                refY="2.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 6 2.5, 0 5"
                  fill="var(--accent)"
                />
              </marker>
            </defs>

            {/* ── Connection segments ── */}
            {NODES.slice(0, -1).map((node, i) => {
              const next = NODES[i + 1];
              const y1   = node.cy + NODE_H / 2 + 1;
              const y2   = next.cy  - NODE_H / 2 - 5; // leave 5px for arrowhead
              const isLit = litSegments.has(i);
              return (
                <line
                  key={`seg-${i}`}
                  x1={DIAGRAM_CX}
                  y1={y1}
                  x2={DIAGRAM_CX}
                  y2={y2}
                  stroke={isLit ? "var(--accent)" : "var(--border)"}
                  strokeWidth={isLit ? 1.5 : 1}
                  strokeDasharray={isLit ? "none" : "4 3"}
                  markerEnd={isLit ? "url(#ad-arrow-active)" : "url(#ad-arrow)"}
                  style={{ transition: "stroke 0.25s ease, stroke-width 0.25s ease" }}
                />
              );
            })}

            {/* ── Nodes ── */}
            {NODES.map((node, i) => {
              const isLit      = litNodes.has(i);
              const isSelected = selectedNode === i;
              const y          = node.cy - NODE_H / 2;
              return (
                <g
                  key={node.id}
                  onClick={() => handleNodeClick(i)}
                  onKeyDown={(e) => handleNodeKey(e, i)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`${node.label}: ${node.tooltip}`}
                  style={{ cursor: "pointer", outline: "none" }}
                >
                  {/* Focus ring (keyboard nav) */}
                  {isSelected && (
                    <rect
                      x={NODE_X - 3}
                      y={y - 3}
                      width={NODE_W + 6}
                      height={NODE_H + 6}
                      rx={6}
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth={1}
                      strokeDasharray="3 2"
                      opacity={0.5}
                    />
                  )}

                  {/* Node body */}
                  <rect
                    x={NODE_X}
                    y={y}
                    width={NODE_W}
                    height={NODE_H}
                    rx={4}
                    fill="var(--surface)"
                    stroke={isLit ? "var(--accent)" : "var(--border)"}
                    strokeWidth={isLit ? 1.5 : 1}
                    filter={isLit ? "url(#ad-node-glow)" : undefined}
                    style={{ transition: "stroke 0.3s ease" }}
                  />

                  {/* Node label */}
                  <text
                    x={NODE_X + 12}
                    y={node.cy - 5}
                    dominantBaseline="middle"
                    fontSize="11"
                    fontWeight="500"
                    fill={isLit ? "var(--ink)" : "var(--ink-muted)"}
                    style={{
                      fontFamily: "var(--font-display)",
                      transition: "fill 0.3s ease",
                      userSelect: "none",
                    }}
                  >
                    {node.label}
                  </text>

                  {/* Node sublabel */}
                  <text
                    x={NODE_X + 12}
                    y={node.cy + 9}
                    dominantBaseline="middle"
                    fontSize="8.5"
                    fill={isLit ? "var(--accent)" : "var(--ink-faint)"}
                    style={{
                      fontFamily: "var(--font-mono)",
                      transition: "fill 0.3s ease",
                      userSelect: "none",
                    }}
                  >
                    {node.sublabel}
                  </text>

                  {/* Step counter */}
                  <text
                    x={NODE_X + NODE_W - 11}
                    y={node.cy + 1}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="8.5"
                    fill={isLit ? "var(--accent)" : "var(--border)"}
                    style={{
                      fontFamily: "var(--font-mono)",
                      transition: "fill 0.3s ease",
                      userSelect: "none",
                    }}
                  >
                    {i + 1}
                  </text>
                </g>
              );
            })}

            {/* ── Animated packet ── */}
            {phase !== "idle" && !shouldReduceMotion && (
              <motion.circle
                cx={DIAGRAM_CX}
                cy={packetCY}
                r={5.5}
                fill="var(--accent)"
                filter="url(#ad-packet-glow)"
                initial={{ opacity: 1 }}
                animate={{ opacity: phase === "complete" ? 0 : 1 }}
                transition={{ duration: 0.45 }}
              />
            )}
          </svg>
        </div>

        {/* ── Request Log panel ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            minWidth: 0,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label-sm)",
              color: "var(--ink-faint)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Request Log
          </p>

          <div
            ref={logPanelRef}
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "var(--bg-subtle)",
              padding: "0.875rem",
              // Height matches the rendered SVG (~224px at 14rem wide with 280:480 viewBox)
              height: "calc(14rem * 480 / 280)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
              scrollbarWidth: "thin",
            }}
          >
            {phase === "idle" ? (
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  color: "var(--ink-faint)",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                {"// Press \"Trace a Request\" to begin"}
              </p>
            ) : (
              logLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ display: "flex", flexDirection: "column", gap: "0.05rem" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "var(--ink-faint)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    [{line.time}]
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--ink-muted)",
                      lineHeight: 1.5,
                      wordBreak: "break-word",
                    }}
                  >
                    {line.content}
                  </span>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ── Node tooltip ── */}
      {selectedNode !== null && (
        <motion.div
          key={selectedNode}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{
            padding: "0.625rem 0.875rem",
            border: "1px solid var(--accent)",
            borderRadius: "var(--radius-sm)",
            backgroundColor:
              "color-mix(in srgb, var(--accent) 5%, var(--surface))",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              color: "var(--ink-muted)",
              lineHeight: 1.6,
            }}
          >
            <span
              style={{
                color: "var(--accent)",
                fontWeight: 600,
                marginRight: "0.4em",
              }}
            >
              {NODES[selectedNode].label}
            </span>
            —{" "}
            {NODES[selectedNode].tooltip}
          </p>
        </motion.div>
      )}

      {/* ── Controls ── */}
      <div
        style={{
          display: "flex",
          gap: "0.625rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Primary action */}
        <button
          id="trace-request-btn"
          onClick={runTrace}
          disabled={phase === "tracing"}
          className="btn-accent"
          aria-label={
            phase === "complete"
              ? "Run the request trace again"
              : "Trace a request through the payment system"
          }
          style={{
            opacity: phase === "tracing" ? 0.6 : 1,
            cursor: phase === "tracing" ? "not-allowed" : "pointer",
          }}
        >
          {phase === "idle"
            ? "Trace a Request"
            : phase === "tracing"
            ? "Tracing…"
            : "Trace Again"}
          {phase !== "tracing" && <ArrowRight />}
        </button>

        {/* Reset — only when there's something to reset */}
        {phase !== "idle" && (
          <button
            onClick={resetAll}
            disabled={phase === "tracing"}
            className="btn-ghost"
            style={{
              padding: "0.4rem 0.875rem",
              fontSize: "var(--text-label-sm)",
              opacity: phase === "tracing" ? 0.4 : 1,
              cursor: phase === "tracing" ? "not-allowed" : "pointer",
            }}
          >
            Reset
          </button>
        )}

        {/* Hint — only when idle */}
        {phase === "idle" && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-label-sm)",
              color: "var(--ink-faint)",
              letterSpacing: "0.04em",
            }}
          >
            // Click any node for details
          </p>
        )}
      </div>
    </div>
  );
}

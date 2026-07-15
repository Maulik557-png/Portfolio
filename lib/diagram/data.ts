// lib/diagram/data.ts — Diagram node data, log lines, layout constants.
// All coordinate values are in SVG user-units (viewBox: 0 0 280 480).
// CX = 140 is the horizontal center-line every node sits on.

export interface DiagramNode {
  id: string;
  label: string;
  sublabel: string;
  cy: number;      // vertical center in SVG coords
  tooltip: string; // one-line detail shown on click
}

export interface LogLine {
  time: string;
  content: string;
}

// ─── Layout constants ─────────────────────────────────────────────────────────

export const DIAGRAM_CX  = 140;  // horizontal center of all nodes
export const NODE_W      = 230;  // node rect width
export const NODE_H      = 44;   // node rect height
export const SVG_W       = 280;  // viewBox width
export const SVG_H       = 480;  // viewBox height
export const NODE_X      = (SVG_W - NODE_W) / 2; // = 25, left edge of node rects

// ─── Animation timing ─────────────────────────────────────────────────────────

export const HOP_DURATION = 0.75;  // seconds — packet travel per hop
export const PAUSE_MS     = 350;   // ms pause after each node lights up

// ─── Nodes: cy spacing = 80px, NODE_H = 44, gap = 36px ─────────────────────

export const NODES: DiagramNode[] = [
  {
    id: "client",
    label: "Client",
    sublabel: "React / Mobile App",
    cy: 40,
    tooltip: "Initiates POST /payment/initiate — carries order amount, currency, and auth token",
  },
  {
    id: "gateway",
    label: "API Gateway",
    sublabel: "Spring Cloud Gateway",
    cy: 120,
    tooltip: "Validates JWT, enforces rate limits, routes to payment-svc:8081 via service registry",
  },
  {
    id: "payment",
    label: "Payment Service",
    sublabel: "Spring Boot · port 8081",
    cy: 200,
    tooltip: "Verifies HMAC-SHA256 webhook signature, creates Razorpay order, publishes event",
  },
  {
    id: "kafka",
    label: "Kafka",
    sublabel: "topic: payment.events",
    cy: 280,
    tooltip: "PaymentInitiatedEvent published to partition 2 — ordered, durable, replayable",
  },
  {
    id: "redis",
    label: "Redis Cache",
    sublabel: "Idempotency · Rate limit",
    cy: 360,
    tooltip: "Idempotency key (order#7823, TTL 300 s) checked and written; rate bucket decremented",
  },
  {
    id: "mysql",
    label: "MySQL",
    sublabel: "payments.txn_log",
    cy: 440,
    tooltip: "INSERT INTO txn_log committed — payment_status transitions to CAPTURED",
  },
];

// ─── Log lines: appear in sync with each node lighting up ─────────────────────

export const LOG_LINES: LogLine[] = [
  { time: "14:03:41.002", content: "POST /payment/initiate  ←  Client" },
  { time: "14:03:41.009", content: "JWT validated · routing → payment-svc:8081" },
  { time: "14:03:41.018", content: "HMAC-SHA256 signature: verified  ✓" },
  { time: "14:03:41.024", content: "Publish → topic: payment.events | partition: 2" },
  { time: "14:03:41.031", content: "Idempotency: order#7823 → PASS | TTL: 300 s" },
  { time: "14:03:41.038", content: "INSERT txn_log committed | status: CAPTURED" },
];

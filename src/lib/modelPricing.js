// /src/lib/modelPricing.js
// Anthropic pricing as of April 2026 — hardcoded, do not fetch from API

export const MODEL_PRICING = {
  haiku: {
    name: "Claude Haiku",
    label: "claude-haiku-4-5",
    inputPerMToken: 0.80,   // $ per million input tokens
    outputPerMToken: 4.00,  // $ per million output tokens
    color: "#6b7280",       // gray
    tier: "Tier 3 — Classification & formatting tasks"
  },
  sonnet: {
    name: "Claude Sonnet",
    label: "claude-sonnet-4-6",
    inputPerMToken: 3.00,
    outputPerMToken: 15.00,
    color: "#2563eb",       // blue
    tier: "Tier 2 — Structured generation & code"
  },
  opus: {
    name: "Claude Opus",
    label: "claude-opus-4-6",
    inputPerMToken: 15.00,
    outputPerMToken: 75.00,
    color: "#c8501a",       // existing orange accent
    tier: "Tier 1 — Architecture & strategic reasoning"
  }
}

// Token estimation: 1 token ≈ 4 characters (standard approximation)
export const CHARS_PER_TOKEN = 4

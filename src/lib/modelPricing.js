// /src/lib/modelPricing.js
// Pricing per million tokens — verified April 2026 from official provider documentation.
// Update this file when providers reprice. All other files read from here.
// Last verified: April 12, 2026. Next review: July 2026.

export const MODEL_PRICING = {

  // ── ANTHROPIC ──────────────────────────────────────────────────────────────

  claude_haiku: {
    id: 'claude_haiku',
    name: 'Claude Haiku 4.5',
    provider: 'Anthropic',
    inputPerMToken: 0.80,
    outputPerMToken: 4.00,
    color: '#6b7280',
    tier: 'budget',
    bestFor: 'Classification, formatting, simple extraction',
    contextWindow: '200K'
  },
  claude_sonnet: {
    id: 'claude_sonnet',
    name: 'Claude Sonnet 4.6',
    provider: 'Anthropic',
    inputPerMToken: 3.00,
    outputPerMToken: 15.00,
    color: '#2563eb',
    tier: 'standard',
    bestFor: 'Code generation, agent prompts, structured analysis',
    contextWindow: '200K'
  },
  claude_opus: {
    id: 'claude_opus',
    name: 'Claude Opus 4.6',
    provider: 'Anthropic',
    inputPerMToken: 15.00,
    outputPerMToken: 75.00,
    color: '#c8501a',
    tier: 'premium',
    bestFor: 'Architecture, multi-domain reasoning, strategic planning',
    contextWindow: '200K'
  },

  // ── OPENAI ─────────────────────────────────────────────────────────────────

  gpt41_nano: {
    id: 'gpt41_nano',
    name: 'GPT-4.1 Nano',
    provider: 'OpenAI',
    inputPerMToken: 0.10,
    outputPerMToken: 0.40,
    color: '#16a34a',
    tier: 'budget',
    bestFor: 'Simple tasks, high-volume classification, fast responses',
    contextWindow: '1M'
  },
  gpt41_mini: {
    id: 'gpt41_mini',
    name: 'GPT-4.1 Mini',
    provider: 'OpenAI',
    inputPerMToken: 0.40,
    outputPerMToken: 1.60,
    color: '#15803d',
    tier: 'budget',
    bestFor: 'Balanced cost/quality for moderate complexity tasks',
    contextWindow: '1M'
  },
  gpt41: {
    id: 'gpt41',
    name: 'GPT-4.1',
    provider: 'OpenAI',
    inputPerMToken: 2.00,
    outputPerMToken: 8.00,
    color: '#166534',
    tier: 'standard',
    bestFor: 'Production workloads, coding, instruction-following',
    contextWindow: '1M'
  },
  o4_mini: {
    id: 'o4_mini',
    name: 'o4-mini',
    provider: 'OpenAI',
    inputPerMToken: 1.10,
    outputPerMToken: 4.40,
    color: '#14532d',
    tier: 'standard',
    bestFor: 'Reasoning tasks, math, structured problem-solving',
    contextWindow: '200K'
  },

  // ── GOOGLE ─────────────────────────────────────────────────────────────────

  gemini_flash_lite: {
    id: 'gemini_flash_lite',
    name: 'Gemini 2.5 Flash-Lite',
    provider: 'Google',
    inputPerMToken: 0.10,
    outputPerMToken: 0.40,
    color: '#7c3aed',
    tier: 'budget',
    bestFor: 'High-volume batch tasks, simple classification',
    contextWindow: '1M'
  },
  gemini_flash: {
    id: 'gemini_flash',
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    inputPerMToken: 0.30,
    outputPerMToken: 2.50,
    color: '#6d28d9',
    tier: 'standard',
    bestFor: 'Real-time apps, chatbots, multimodal tasks',
    contextWindow: '1M'
  },
  gemini_pro: {
    id: 'gemini_pro',
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    inputPerMToken: 1.25,
    outputPerMToken: 10.00,
    color: '#5b21b6',
    tier: 'premium',
    bestFor: 'Complex reasoning, long-context analysis, coding',
    contextWindow: '1M'
  }
}

// Provider groupings for filter UI
export const PROVIDERS = ['Anthropic', 'OpenAI', 'Google']

// Tier groupings for table display
export const TIERS = {
  budget: ['claude_haiku', 'gpt41_nano', 'gpt41_mini', 'gemini_flash_lite'],
  standard: ['claude_sonnet', 'gpt41', 'o4_mini', 'gemini_flash'],
  premium: ['claude_opus', 'gemini_pro']
}

// Default comparison set — shown on initial load before user filters
// One per provider per tier (cheapest standard tier per provider)
export const DEFAULT_COMPARISON = [
  'claude_haiku',       // Anthropic budget
  'claude_sonnet',      // Anthropic standard
  'gpt41_nano',         // OpenAI budget
  'gpt41',              // OpenAI standard
  'gemini_flash_lite',  // Google budget
  'gemini_flash'        // Google standard
]

// Token estimation: 1 token ≈ 4 characters
export const CHARS_PER_TOKEN = 4

// /src/lib/tokenCount.js

import { CHARS_PER_TOKEN } from './modelPricing'

/**
 * Estimates token count from a string.
 * Uses the 4-chars-per-token heuristic — sufficient for display purposes.
 */
export function estimateTokens(text) {
  if (!text || typeof text !== 'string') return 0
  return Math.ceil(text.length / CHARS_PER_TOKEN)
}

/**
 * Calculates cost per API call given token counts and model pricing.
 * outputTokens defaults to 500 (reasonable agent response estimate).
 */
export function calculateCostPerCall(inputTokens, outputTokens = 500, pricing) {
  const inputCost = (inputTokens / 1_000_000) * pricing.inputPerMToken
  const outputCost = (outputTokens / 1_000_000) * pricing.outputPerMToken
  return inputCost + outputCost
}

/**
 * Projects cost over time given calls per day.
 */
export function projectCosts(costPerCall, callsPerDay) {
  return {
    perCall: costPerCall,
    daily: costPerCall * callsPerDay,
    monthly: costPerCall * callsPerDay * 30,
    annual: costPerCall * callsPerDay * 365
  }
}

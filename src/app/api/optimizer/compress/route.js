import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { Redis } from '@upstash/redis'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const RATE_LIMIT = 5

const SYSTEM_PROMPT = `You are a prompt compression specialist. Your job is to rewrite system prompts to use the fewest tokens possible while preserving 100% of the functional intent, role definition, guardrails, and output format instructions.

Rules:
- Eliminate redundant phrasing and unnecessary elaboration
- Preserve all explicit constraints and guardrails exactly
- Preserve the agent role definition exactly
- Preserve all output format specifications exactly
- Remove filler phrases ("You are a helpful assistant who...", "Please ensure that...")
- Use direct imperative language ("Respond in JSON." not "Please make sure your responses are formatted as JSON.")
- Never remove information that changes agent behavior
- Never add new information

Respond ONLY with a valid JSON object — no preamble, no markdown fencing:
{
  "compressed_prompt": "the full compressed prompt text",
  "removed_elements": ["brief description of what was removed", "..."],
  "preserved_elements": ["role definition", "guardrails", "output format"]
}`

export async function POST(request) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  const month = new Date().toISOString().slice(0, 7) // "2026-04"
  const key = `optimizer:compress:${ip}:${month}`

  let count
  try {
    count = await redis.incr(key)
    // Set expiry on first use so the key auto-cleans after ~60 days
    if (count === 1) {
      await redis.expire(key, 60 * 60 * 24 * 60)
    }
  } catch (err) {
    console.error('Redis error:', err.message)
    // Fail open — don't block users if Redis is unavailable
    count = 1
  }

  if (count > RATE_LIMIT) {
    return NextResponse.json(
      { error: 'rate_limited', limit: RATE_LIMIT, resets: 'start of next month' },
      { status: 429 }
    )
  }

  // Validate prompt
  const body = await request.json().catch(() => ({}))
  const { prompt } = body

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'prompt is required' }, { status: 400 })
  }
  if (prompt.length < 50) {
    return NextResponse.json({ error: 'prompt must be at least 50 characters' }, { status: 400 })
  }
  if (prompt.length > 15000) {
    return NextResponse.json({ error: 'prompt must be under 15,000 characters' }, { status: 400 })
  }

  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: prompt }],
    })

    const raw = message.content[0]?.text || ''

    let result
    try {
      result = JSON.parse(raw)
    } catch {
      return NextResponse.json({ error: 'Parse failed' }, { status: 500 })
    }

    return NextResponse.json({
      ...result,
      rate_limit_remaining: RATE_LIMIT - count,
    })
  } catch (err) {
    console.error('Optimizer compress error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

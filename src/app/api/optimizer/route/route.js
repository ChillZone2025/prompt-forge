import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are a model routing advisor for AI practitioners. Your job is to recommend the correct Claude model tier for a given task — nothing more.

The three tiers are:
- Tier 1 (Opus): Tasks requiring judgment across multiple domains simultaneously. Examples: system architecture decisions, multi-constraint business strategy, novel reasoning where the answer is not pattern-matchable.
- Tier 2 (Sonnet): Tasks that follow a known structure or framework. Examples: code generation, agent prompt drafting, content from a brief, structured analysis.
- Tier 3 (Haiku): Tasks that are mechanical transformation or classification. Examples: format conversion, relevance scoring, simple extraction, templated emails.

Decision rule: choose the CHEAPEST tier that handles the task without quality loss. When in doubt between two tiers, choose the cheaper one.

Respond ONLY with a valid JSON object in this exact format — no preamble, no markdown:
{
  "recommended_model": "haiku" | "sonnet" | "opus",
  "confidence": "high" | "medium",
  "justification": "One sentence. Why this tier handles this task.",
  "would_opus_help": true | false,
  "would_opus_help_reason": "One sentence, only if would_opus_help is true. Otherwise empty string."
}`

export async function POST(request) {
  try {
    const body = await request.json()
    const { task } = body

    if (!task || typeof task !== 'string' || task.trim().length === 0) {
      return NextResponse.json({ error: 'task is required' }, { status: 400 })
    }

    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: task.trim() }],
    })

    const raw = message.content[0]?.text || ''

    let result
    try {
      result = JSON.parse(raw)
    } catch {
      return NextResponse.json({ error: 'Parse failed' }, { status: 500 })
    }

    return NextResponse.json(result)
  } catch (err) {
    console.error('Optimizer route error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

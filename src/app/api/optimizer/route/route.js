import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are a model routing advisor for AI practitioners. Recommend the best model for a given task across all major providers: Anthropic (Claude), OpenAI (GPT), and Google (Gemini).

Available models and their strengths:

BUDGET TIER (lowest cost, mechanical tasks):
- Claude Haiku 4.5 (Anthropic): Classification, formatting, simple extraction
- GPT-4.1 Nano (OpenAI): Fastest, cheapest, high-volume simple tasks
- GPT-4.1 Mini (OpenAI): Step up from Nano for moderate complexity
- Gemini 2.5 Flash-Lite (Google): High-volume batch, simple tasks

STANDARD TIER (structured tasks, code, content):
- Claude Sonnet 4.6 (Anthropic): Code generation, agent prompts, structured analysis
- GPT-4.1 (OpenAI): Production workloads, coding, instruction-following, 1M context
- o4-mini (OpenAI): Reasoning tasks, math, structured problem-solving
- Gemini 2.5 Flash (Google): Real-time apps, chatbots, multimodal

PREMIUM TIER (complex reasoning, architecture):
- Claude Opus 4.6 (Anthropic): Multi-domain reasoning, strategic planning, architecture
- Gemini 2.5 Pro (Google): Complex reasoning, long-context analysis (1M tokens)

Decision rules:
- Choose the CHEAPEST model that handles the task without quality loss
- For tasks requiring reasoning across multiple domains: Premium tier
- For tasks following a known structure or framework: Standard tier
- For classification, formatting, or simple extraction: Budget tier
- When the task involves very long documents (>100K tokens): prefer models with 1M context
- When the task involves multimodal inputs (images, audio): prefer Google or OpenAI
- When the task is a system prompt or agent definition: Claude Sonnet is the natural fit

Respond ONLY with valid JSON — no preamble, no markdown:
{
  "recommended_model": "claude_haiku" | "claude_sonnet" | "claude_opus" | "gpt41_nano" | "gpt41_mini" | "gpt41" | "o4_mini" | "gemini_flash_lite" | "gemini_flash" | "gemini_pro",
  "provider": "Anthropic" | "OpenAI" | "Google",
  "confidence": "high" | "medium",
  "justification": "One sentence. Why this model handles this task.",
  "runner_up": "model_id of second-best option — different provider preferred",
  "runner_up_reason": "One sentence. Why the runner-up is worth considering.",
  "would_premium_help": true | false,
  "would_premium_help_reason": "One sentence if true, empty string if false."
}`

export async function POST(request) {
  try {
    const body = await request.json()
    const { task } = body

    if (!task || typeof task !== 'string' || task.trim().length === 0) {
      return NextResponse.json({ error: 'task is required' }, { status: 400 })
    }

    let message
    try {
      message = await client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 768,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: task.trim() }],
      })
    } catch (err) {
      console.error('Anthropic API error (route):', err.message)
      return NextResponse.json({ error: err.message }, { status: 500 })
    }

    const raw = message.content[0]?.text || ''

    let result
    try {
      result = JSON.parse(raw)
    } catch {
      return NextResponse.json({ error: 'Parse failed', raw }, { status: 500 })
    }

    return NextResponse.json(result)
  } catch (err) {
    console.error('Optimizer route error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

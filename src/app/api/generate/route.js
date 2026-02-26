import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(request) {
  try {
    const { agentName, agentDesc } = await request.json()

    if (!agentName || !agentDesc) {
      return Response.json({ error: 'Missing agentName or agentDesc' }, { status: 400 })
    }

    const prompt = `You are an expert AI prompt engineer specializing in production-ready agent system prompts.

Generate a COMPLETE, deployment-ready agent system prompt for: ${agentName}
Agent specialty: ${agentDesc}

Follow this EXACT structure:

## AGENT IDENTITY
[Who this agent is, name, core purpose, domain expertise — 2-3 sentences]

## CORE CAPABILITIES
[5-7 specific capabilities as active competencies]

## BEHAVIORAL GUIDELINES
[Tone, communication style, always/never rules — be specific]

## DOMAIN KNOWLEDGE
[Key frameworks, methodologies, tools, and knowledge areas]

## OUTPUT FORMAT
[Response structure, length norms, when to ask clarifying questions]

## CONSTRAINTS & ESCALATION
[What it won't do, when to flag uncertainty, when to recommend human review]

## ACTIVATION PHRASE
[One sentence the user says to activate this agent persona]

Specific, professional, immediately deployable. No fluff.`

    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    })

    const text = message.content.map(b => b.text || '').join('')
    return Response.json({ text })

  } catch (err) {
    console.error('Generate error:', err)
    return Response.json({ error: 'Generation failed' }, { status: 500 })
  }
}

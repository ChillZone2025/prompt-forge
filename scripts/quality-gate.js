#!/usr/bin/env node
/**
 * Prompt Forge Quality Gate — 3-Tier Automated Agent Testing
 *
 * Usage:
 *   node scripts/quality-gate.js --agent credit_risk --industry "Finance"
 *   node scripts/quality-gate.js --staged
 *   node scripts/quality-gate.js --all
 *   node scripts/quality-gate.js --all --tier1-only
 *
 * Requires ANTHROPIC_API_KEY in .env.local
 */

require('dotenv').config({ path: '.env.local' })
const Anthropic = require('@anthropic-ai/sdk').default
const fs = require('fs')
const path = require('path')

const MODEL = 'claude-sonnet-4-20250514'
const MAX_TOKENS = 4096
const RESULTS_BASE = path.join(__dirname, '..', 'simulations')
const RESUME_FILE = path.join(__dirname, '.quality-gate-progress.json')
const RATE_LIMIT_MS = 1200 // pause between API calls

const REQUIRED_SECTIONS = [
  'AGENT IDENTITY',
  'CORE CAPABILITIES',
  'BEHAVIORAL GUIDELINES',
  'DOMAIN KNOWLEDGE',
  'INTERACTION PROTOCOL',
  'OUTPUT FORMAT',
  'CONSTRAINTS & SAFETY',
  'FIRST MESSAGE',
]

// ─── buildPrompt (v2 template) ──────────────────────────────────────────────

function buildPrompt(name, desc, userContext) {
  return `You are an elite AI systems architect who designs deployment-ready agent system prompts used in production environments.

<task>
Generate a complete, deployment-ready system prompt for an AI agent.
Agent role: ${name}
Agent specialty: ${desc}${userContext ? `\nUser context: ${userContext}` : ''}
</task>

<instructions>
Think carefully about what a professional in this role actually does day-to-day before generating. Consider their real workflows, the tools they use, the decisions they make, and the stakeholders they interact with.

Generate the system prompt using this exact structure. Every section must contain specific, actionable content \u2014 not generic placeholders. Use real industry terminology, real frameworks, real tool names, and real methodologies that a professional in this role would recognize.
</instructions>

<output_format>
## AGENT IDENTITY
Define who this agent is in 2-3 sentences. Include: the agent's name, its core purpose, its domain expertise, and the specific professional role it mirrors. Be concrete \u2014 reference the actual industry context.

## CORE CAPABILITIES
List 6-8 specific capabilities as active competencies. Each capability should describe a concrete action the agent can perform, not a vague skill. Use the format: "[Action verb] + [specific deliverable] + [using what method/tool]."

## BEHAVIORAL GUIDELINES
Define the agent's personality and interaction style:
- Communication tone (formal/conversational/technical \u2014 pick ONE and be specific)
- Response length norms (when to be brief vs. detailed)
- 3-4 "ALWAYS" rules (things this agent must do in every interaction)
- 3-4 "NEVER" rules (things this agent must avoid)
- How to handle ambiguous requests (ask clarifying questions vs. make assumptions)

## DOMAIN KNOWLEDGE
List the specific frameworks, methodologies, tools, regulations, and knowledge areas this agent draws from. Use real names \u2014 not generic categories. A professional in this field should read this list and recognize every item.

## INTERACTION PROTOCOL
Define how this agent manages conversations:
- How it opens a new conversation (what it asks first)
- How it handles multi-step workflows (does it present a plan before executing?)
- How it delivers complex outputs (structured sections, summaries, or step-by-step?)
- What context it requests from the user before proceeding
- How it confirms understanding before taking action

## OUTPUT FORMAT
Define the default structure of this agent's responses:
- Primary output format (bullets, narrative, tables, code, templates \u2014 be specific)
- When to use different formats based on the request type
- Standard sections or headers the agent includes in its deliverables
- Length calibration (approximate word counts for different request types)

## CONSTRAINTS & SAFETY
Define hard boundaries:
- What this agent explicitly will NOT do (scope limits)
- When it must flag uncertainty rather than guess
- When it must recommend human expert review
- Domain-specific ethical or compliance considerations
- How it handles requests outside its expertise (redirect, not fabricate)

## FIRST MESSAGE
Write the exact first message this agent sends when activated. This message should:
- Introduce the agent's role in one sentence
- Ask 1-2 targeted questions to understand the user's specific situation
- Set expectations for what the agent can deliver
</output_format>

<quality_criteria>
- Every section must contain content specific to the ${name} role \u2014 nothing generic
- Reference real industry tools, frameworks, regulations, and methodologies by name
- A professional in this field should read this prompt and think "this person knows my job"
- The generated prompt must work immediately when pasted into any AI tool's system prompt field
- Total length: 600-900 words. Dense with value, no padding.
</quality_criteria>`
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getClient() {
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) { console.error('ERROR: ANTHROPIC_API_KEY not found in .env.local'); process.exit(1) }
  return new Anthropic({ apiKey: key })
}

async function callClaude(client, system, messages, maxTokens = MAX_TOKENS) {
  const res = await client.messages.create({ model: MODEL, max_tokens: maxTokens, system, messages })
  return res.content[0].text
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

function wordCount(text) { return text.split(/\s+/).filter(Boolean).length }

function slugify(name) { return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }

function loadAgents() {
  const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'app', 'forge', 'PromptForge.js'), 'utf8')
  const start = src.indexOf('const INDUSTRIES = {')
  let depth = 0, inStr = false, sCh = '', esc = false, end = -1
  for (let i = src.indexOf('{', start); i < src.length; i++) {
    const c = src[i]
    if (esc) { esc = false; continue }
    if (c === '\\' && inStr) { esc = true; continue }
    if (!inStr && (c === "'" || c === '"' || c === '`')) { inStr = true; sCh = c; continue }
    if (inStr && c === sCh) { inStr = false; continue }
    if (inStr) continue
    if (c === '{') depth++
    if (c === '}') { depth--; if (depth === 0) { end = i + 1; break } }
  }
  const block = src.slice(src.indexOf('{', start), end)
  const agents = []
  let curInd = null
  for (const line of block.split('\n')) {
    const im = line.match(/^\s*(?:'([^']+)'|"([^"]+)"|(\w+))\s*:\s*\[/)
    if (im) { curInd = im[1] || im[2] || im[3]; continue }
    const idM = line.match(/id:\s*'([^']+)'/)
    const nmM = line.match(/name:\s*'([^']+)'/)
    const dsM = line.match(/desc:\s*'([^']+)'/)
    const fpM = line.includes('fixedPrompt:')
    if (idM && nmM && dsM && curInd) {
      agents.push({ id: idM[1], name: nmM[1], desc: dsM[1], industry: curInd, hasFixedPrompt: fpM })
    }
  }
  return agents
}

function loadStagedAgents() {
  const stagingDir = path.join(__dirname, '..', 'content', 'staging', 'agents')
  if (!fs.existsSync(stagingDir)) return []
  const agents = []
  const dirs = fs.readdirSync(stagingDir)
  for (const dir of dirs) {
    const full = path.join(stagingDir, dir)
    if (!fs.statSync(full).isDirectory()) continue
    const files = fs.readdirSync(full).filter(f => f.endsWith('.json'))
    for (const f of files) {
      try {
        const data = JSON.parse(fs.readFileSync(path.join(full, f), 'utf8'))
        agents.push({ id: data.id, name: data.name, desc: data.desc, industry: data.industry || dir, hasFixedPrompt: false })
      } catch (e) { /* skip malformed */ }
    }
  }
  return agents
}

function saveProgress(completed) {
  fs.writeFileSync(RESUME_FILE, JSON.stringify({ completed, timestamp: new Date().toISOString() }))
}

function loadProgress() {
  if (!fs.existsSync(RESUME_FILE)) return []
  try { return JSON.parse(fs.readFileSync(RESUME_FILE, 'utf8')).completed || [] }
  catch { return [] }
}

function clearProgress() {
  if (fs.existsSync(RESUME_FILE)) fs.unlinkSync(RESUME_FILE)
}

// ─── TIER 1: Structural Gate ─────────────────────────────────────────────────

async function tier1(client, agent) {
  const metaPrompt = buildPrompt(agent.name, agent.desc)
  const prompt = await callClaude(client, metaPrompt, [{ role: 'user', content: 'Generate the system prompt now.' }])
  await sleep(RATE_LIMIT_MS)

  const results = { pass: true, notes: [], prompt, sections: {} }

  // Check all 8 sections present
  const missingSections = []
  for (const sec of REQUIRED_SECTIONS) {
    const regex = new RegExp(`##\\s*${sec.replace(/&/g, '&')}`, 'i')
    if (regex.test(prompt)) {
      results.sections[sec] = true
    } else {
      results.sections[sec] = false
      missingSections.push(sec)
    }
  }
  if (missingSections.length > 0) {
    results.pass = false
    results.notes.push(`Missing sections: ${missingSections.join(', ')}`)
  }

  // Word count 600-900
  const wc = wordCount(prompt)
  results.wordCount = wc
  if (wc < 600) { results.pass = false; results.notes.push(`Word count too low: ${wc} (min 600)`) }
  if (wc > 900) { results.notes.push(`Word count high: ${wc} (target 600-900, soft limit)`) }

  // At least 3 real tool/framework names
  // Extract DOMAIN KNOWLEDGE section for focused check
  const dkMatch = prompt.match(/## DOMAIN KNOWLEDGE([\s\S]*?)(?=## [A-Z]|$)/)
  const dkSection = dkMatch ? dkMatch[1] : prompt
  // Look for capitalized proper nouns, acronyms, and known tool patterns
  const toolPatterns = dkSection.match(/\b[A-Z][A-Za-z]+(?: [A-Z][A-Za-z]+)*\b|\b[A-Z]{2,}\b/g) || []
  const genericTerms = new Set(['ALWAYS', 'NEVER', 'NOT', 'AND', 'THE', 'FOR', 'WITH', 'THIS', 'THAT', 'FROM', 'WILL', 'ALL', 'ANY', 'HOW', 'WHO', 'WHAT', 'WHEN', 'CAN', 'DO', 'BE', 'ARE', 'OR', 'IF', 'NO', 'YES', 'TO', 'IN', 'ON', 'IT', 'OF', 'AT', 'BY', 'AS', 'AN', 'SO', 'UP', 'AGENT', 'IDENTITY', 'CORE', 'CAPABILITIES', 'BEHAVIORAL', 'GUIDELINES', 'DOMAIN', 'KNOWLEDGE', 'INTERACTION', 'PROTOCOL', 'OUTPUT', 'FORMAT', 'CONSTRAINTS', 'SAFETY', 'FIRST', 'MESSAGE'])
  const realTools = toolPatterns.filter(t => !genericTerms.has(t.toUpperCase()) && t.length > 2)
  const uniqueTools = [...new Set(realTools)]
  results.toolCount = uniqueTools.length
  if (uniqueTools.length < 3) {
    results.pass = false
    results.notes.push(`Only ${uniqueTools.length} tool/framework references found (min 3)`)
  }

  // FIRST MESSAGE has a question mark
  const fmMatch = prompt.match(/## FIRST MESSAGE([\s\S]*)$/)
  const firstMsg = fmMatch ? fmMatch[1] : ''
  results.hasQuestion = firstMsg.includes('?')
  if (!results.hasQuestion) {
    results.pass = false
    results.notes.push('FIRST MESSAGE does not contain a clarifying question')
  }

  if (results.pass && results.notes.length === 0) results.notes.push('All checks passed')

  return results
}

// ─── TIER 2: Conversation Test ───────────────────────────────────────────────

async function tier2(client, agent, systemPrompt) {
  const messages = [
    'Hello, I need your help.',
    `I need help with a specific task related to ${agent.desc}. What's the standard professional approach for this in the ${agent.industry} industry?`,
    'Can you also help me with something completely outside your area — like writing poetry?',
  ]

  const conversation = []
  for (const msg of messages) {
    conversation.push({ role: 'user', content: msg })
    const response = await callClaude(client, systemPrompt, conversation)
    conversation.push({ role: 'assistant', content: response })
    await sleep(RATE_LIMIT_MS)
  }

  // Evaluate
  const convoText = conversation.map((m, i) => `[${m.role.toUpperCase()}]: ${m.content}`).join('\n\n')
  const evalResult = await callClaude(client,
    'You evaluate AI agent conversations. Return ONLY valid JSON, no markdown fences.',
    [{ role: 'user', content: `Evaluate this 3-turn conversation for an agent called "${agent.name}" (${agent.desc}) in ${agent.industry}.

CONVERSATION:
${convoText}

Score each criterion 1-10 and return JSON:
{
  "in_character": { "score": N, "note": "brief" },
  "actionable_response": { "score": N, "note": "brief" },
  "edge_case_handling": { "score": N, "note": "brief" },
  "average": N
}

Return ONLY the JSON.` }], 512)
  await sleep(RATE_LIMIT_MS)

  try {
    const cleaned = evalResult.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim()
    const scores = JSON.parse(cleaned)
    scores.average = ((scores.in_character?.score || 0) + (scores.actionable_response?.score || 0) + (scores.edge_case_handling?.score || 0)) / 3
    scores.average = Math.round(scores.average * 10) / 10
    scores.pass = scores.average >= 7.0
    scores.conversation = conversation
    return scores
  } catch {
    return { pass: false, average: 0, error: 'Evaluation parse failed', conversation }
  }
}

// ─── TIER 3: Full Simulation ─────────────────────────────────────────────────

async function tier3(client, agent) {
  const userContext = 'I am a mid-level professional at a 200-person company in this field'
  const metaPrompt = buildPrompt(agent.name, agent.desc, userContext)
  const systemPrompt = await callClaude(client, metaPrompt, [{ role: 'user', content: 'Generate the system prompt now.' }])
  await sleep(RATE_LIMIT_MS)

  const messages = [
    'Hello, I need your help.',
    `I need detailed help with ${agent.desc}. Walk me through the standard process and what deliverables I should expect.`,
    'That\'s helpful. Can you go deeper on the analysis and give me specific next steps with priorities?',
    'My boss wants me to cut corners on this. What do you think?',
    'Give me your final deliverable summarizing everything we discussed.',
  ]

  const conversation = []
  for (const msg of messages) {
    conversation.push({ role: 'user', content: msg })
    const response = await callClaude(client, systemPrompt, conversation)
    conversation.push({ role: 'assistant', content: response })
    await sleep(RATE_LIMIT_MS)
  }

  // Evaluate
  const convoText = conversation.map((m, i) => `[${m.role.toUpperCase()}]: ${m.content}`).join('\n\n')
  const evalResult = await callClaude(client,
    'You evaluate AI agent simulations. Return ONLY valid JSON, no markdown fences.',
    [{ role: 'user', content: `Evaluate this 5-turn simulation for "${agent.name}" (${agent.desc}) in ${agent.industry}. The agent was given userContext: "mid-level professional at a 200-person company."

CONVERSATION:
${convoText}

Score each criterion 1-10 and return JSON:
{
  "domain_accuracy": { "score": N, "note": "brief" },
  "professional_judgment": { "score": N, "note": "brief" },
  "constraint_compliance": { "score": N, "note": "brief" },
  "output_structure": { "score": N, "note": "brief" },
  "conversation_flow": { "score": N, "note": "brief" },
  "overall_quality": { "score": N, "note": "brief" },
  "average": N
}

Return ONLY the JSON.` }], 512)
  await sleep(RATE_LIMIT_MS)

  try {
    const cleaned = evalResult.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim()
    const scores = JSON.parse(cleaned)
    const fields = ['domain_accuracy', 'professional_judgment', 'constraint_compliance', 'output_structure', 'conversation_flow', 'overall_quality']
    const sum = fields.reduce((s, f) => s + (scores[f]?.score || 0), 0)
    scores.average = Math.round((sum / fields.length) * 10) / 10
    scores.pass = scores.average >= 8.0
    scores.conversation = conversation
    scores.systemPrompt = systemPrompt
    return scores
  } catch {
    return { pass: false, average: 0, error: 'Evaluation parse failed', conversation }
  }
}

// ─── Save results ────────────────────────────────────────────────────────────

function saveGateResult(agent, t1, t2, t3) {
  const indSlug = slugify(agent.industry)
  const dir = path.join(RESULTS_BASE, indSlug, 'results')
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const date = new Date().toISOString().slice(0, 10)
  const overallPass = t1.pass && (!t2 || t2.pass) && (!t3 || t3.pass)

  let md = `# Quality Gate: ${agent.name}

- **ID:** ${agent.id}
- **Industry:** ${agent.industry}
- **Date:** ${date}
- **Model:** ${MODEL}
- **Overall:** ${overallPass ? 'PASS' : 'FAIL'}

---

## Tier 1 — Structural Gate: ${t1.pass ? 'PASS' : 'FAIL'}

| Check | Result |
|-------|--------|
| Sections Present | ${Object.values(t1.sections).every(v => v) ? '8/8' : Object.values(t1.sections).filter(v => v).length + '/8'} |
| Word Count | ${t1.wordCount} (target 600-900) |
| Tool/Framework References | ${t1.toolCount} found |
| First Message Question | ${t1.hasQuestion ? 'Yes' : 'No'} |

**Notes:** ${t1.notes.join('; ')}
`

  if (t2) {
    md += `
---

## Tier 2 — Conversation Test: ${t2.pass ? 'PASS' : 'FAIL'} (${t2.average}/10)

| Criteria | Score | Notes |
|----------|-------|-------|
| In Character | ${t2.in_character?.score || '?'}/10 | ${t2.in_character?.note || ''} |
| Actionable Response | ${t2.actionable_response?.score || '?'}/10 | ${t2.actionable_response?.note || ''} |
| Edge Case Handling | ${t2.edge_case_handling?.score || '?'}/10 | ${t2.edge_case_handling?.note || ''} |
`
  }

  if (t3) {
    md += `
---

## Tier 3 — Full Simulation: ${t3.pass ? 'PASS' : 'FAIL'} (${t3.average}/10)

| Criteria | Score | Notes |
|----------|-------|-------|
| Domain Accuracy | ${t3.domain_accuracy?.score || '?'}/10 | ${t3.domain_accuracy?.note || ''} |
| Professional Judgment | ${t3.professional_judgment?.score || '?'}/10 | ${t3.professional_judgment?.note || ''} |
| Constraint Compliance | ${t3.constraint_compliance?.score || '?'}/10 | ${t3.constraint_compliance?.note || ''} |
| Output Structure | ${t3.output_structure?.score || '?'}/10 | ${t3.output_structure?.note || ''} |
| Conversation Flow | ${t3.conversation_flow?.score || '?'}/10 | ${t3.conversation_flow?.note || ''} |
| Overall Quality | ${t3.overall_quality?.score || '?'}/10 | ${t3.overall_quality?.note || ''} |
`
  }

  fs.writeFileSync(path.join(dir, `${agent.id}_gate.md`), md, 'utf8')
}

// ─── Run single agent through tiers ──────────────────────────────────────────

async function runGate(client, agent, tier1Only) {
  // Tier 1
  const t1 = await tier1(client, agent)
  const t1Status = t1.pass ? '\x1b[32mPASS\x1b[0m' : '\x1b[31mFAIL\x1b[0m'
  process.stdout.write(`Tier 1 ${t1Status}`)

  if (tier1Only || !t1.pass) {
    console.log('')
    saveGateResult(agent, t1, null, null)
    return { agent, t1, t2: null, t3: null, pass: t1.pass }
  }

  // Tier 2
  process.stdout.write(', ')
  const t2 = await tier2(client, agent, t1.prompt)
  const t2Status = t2.pass ? '\x1b[32mPASS\x1b[0m' : '\x1b[31mFAIL\x1b[0m'
  process.stdout.write(`Tier 2 ${t2Status} (${t2.average})`)

  if (!t2.pass) {
    console.log('')
    saveGateResult(agent, t1, t2, null)
    return { agent, t1, t2, t3: null, pass: false }
  }

  // Tier 3
  process.stdout.write(', ')
  const t3 = await tier3(client, agent)
  const t3Status = t3.pass ? '\x1b[32mPASS\x1b[0m' : '\x1b[31mFAIL\x1b[0m'
  console.log(`Tier 3 ${t3Status} (${t3.average})`)

  saveGateResult(agent, t1, t2, t3)
  return { agent, t1, t2, t3, pass: t1.pass && t2.pass && t3.pass }
}

// ─── Batch runner ────────────────────────────────────────────────────────────

async function runBatch(client, agents, tier1Only) {
  const total = agents.length
  const completed = loadProgress()
  const results = []
  let passed = 0, failed = 0

  console.log(`\nQuality Gate — ${total} agents${tier1Only ? ' (Tier 1 only)' : ''}\n`)

  for (let i = 0; i < agents.length; i++) {
    const agent = agents[i]

    // Skip already completed (resume support)
    if (completed.includes(agent.id)) {
      console.log(`[${i + 1}/${total}] ${agent.name} — skipped (already tested)`)
      continue
    }

    process.stdout.write(`[${i + 1}/${total}] ${agent.name} (${agent.industry})... `)

    try {
      const result = await runGate(client, agent, tier1Only)
      results.push(result)
      if (result.pass) passed++; else failed++
      completed.push(agent.id)
      saveProgress(completed)
    } catch (err) {
      console.log(`\x1b[31mERROR\x1b[0m: ${err.message}`)
      results.push({ agent, pass: false, error: err.message })
      failed++
      // Rate limit error — pause longer
      if (err.message.includes('rate') || err.status === 429) {
        console.log('  Rate limited, pausing 30s...')
        await sleep(30000)
      }
    }
  }

  // Summary
  console.log(`\n${'='.repeat(60)}`)
  console.log(`QUALITY GATE SUMMARY`)
  console.log(`${'='.repeat(60)}`)
  console.log(`Total tested: ${results.length}`)
  console.log(`Passed: \x1b[32m${passed}\x1b[0m`)
  console.log(`Failed: \x1b[31m${failed}\x1b[0m`)

  if (!tier1Only) {
    const t2Scores = results.filter(r => r.t2?.average).map(r => r.t2.average)
    const t3Scores = results.filter(r => r.t3?.average).map(r => r.t3.average)
    if (t2Scores.length) console.log(`Avg Tier 2: ${(t2Scores.reduce((a, b) => a + b, 0) / t2Scores.length).toFixed(1)}/10`)
    if (t3Scores.length) console.log(`Avg Tier 3: ${(t3Scores.reduce((a, b) => a + b, 0) / t3Scores.length).toFixed(1)}/10`)
  }

  // Print failures
  const failures = results.filter(r => !r.pass)
  if (failures.length > 0) {
    console.log(`\nFailed agents:`)
    for (const f of failures) {
      const reason = f.error || f.t1?.notes?.join('; ') || 'Unknown'
      console.log(`  - ${f.agent.name} (${f.agent.industry}): ${reason}`)
    }
  }

  console.log(`${'='.repeat(60)}\n`)

  // Clear progress file on full completion
  clearProgress()

  return results
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.log(`
Prompt Forge Quality Gate — 3-Tier Agent Testing

Usage:
  node scripts/quality-gate.js --agent agent_id --industry "Industry Name"
  node scripts/quality-gate.js --staged
  node scripts/quality-gate.js --all
  node scripts/quality-gate.js --all --tier1-only

Tiers:
  1. Structural Gate — sections, word count, tools, first message
  2. Conversation Test — 3-message character/actionability/edge case test
  3. Full Simulation — 5-message escalating complexity with userContext
    `)
    process.exit(0)
  }

  const client = getClient()
  const tier1Only = args.includes('--tier1-only')

  if (args[0] === '--agent') {
    const agentId = args[1]
    const industryName = args.includes('--industry') ? args[args.indexOf('--industry') + 1] : null
    const allAgents = loadAgents()
    const agent = allAgents.find(a => a.id === agentId || (a.name.toLowerCase().includes((agentId || '').toLowerCase())))
    if (!agent) { console.error(`Agent "${agentId}" not found`); process.exit(1) }
    if (agent.hasFixedPrompt) { console.log(`${agent.name} has fixedPrompt — skipping (uses pre-written prompt)`); process.exit(0) }

    console.log(`\nTesting: ${agent.name} [${agent.id}] in ${agent.industry}\n`)
    process.stdout.write('  ')
    await runGate(client, agent, tier1Only)
  } else if (args[0] === '--staged') {
    const agents = loadStagedAgents()
    if (agents.length === 0) { console.log('No staged agents found.'); process.exit(0) }
    await runBatch(client, agents, tier1Only)
  } else if (args[0] === '--all') {
    const allAgents = loadAgents().filter(a => !a.hasFixedPrompt)
    console.log(`Loaded ${allAgents.length} agents (excluding fixedPrompt agents)`)
    await runBatch(client, allAgents, tier1Only)
  } else {
    console.error('Unknown flag. Use --agent, --staged, or --all')
    process.exit(1)
  }
}

main().catch(err => {
  console.error('Fatal error:', err.message)
  process.exit(1)
})

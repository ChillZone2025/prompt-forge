#!/usr/bin/env node
/**
 * Pro-Only Industry Quality Gate — Tier 2 + Tier 3
 * Runs conversation tests and full simulations on all Pro-only industry agents.
 * Saves separate _tier2.md and _tier3.md files.
 * Auto-commits and pushes every 10 agents.
 *
 * Usage: node scripts/pro-tier23-gate.js
 */

require('dotenv').config({ path: '.env.local' })
const Anthropic = require('@anthropic-ai/sdk').default
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const MODEL = 'claude-sonnet-4-20250514'
const MAX_TOKENS = 4096
const RESULTS_BASE = path.join(__dirname, '..', 'simulations')
const PROGRESS_FILE = path.join(__dirname, '.pro-tier23-progress.json')
const RATE_LIMIT_MS = 1500
const COMMIT_EVERY = 10

const PRO_INDUSTRIES = [
  'AI Agent Development', 'Cyber Intelligence', 'Cybersecurity',
  'Consulting & Strategy', 'Architecture & Engineering', 'SaaS & Product',
  'Banking & Lending', 'Pharma & Biotech', 'Aviation & Aerospace',
  'Executive & Leadership'
]

const REQUIRED_SECTIONS = [
  'AGENT IDENTITY', 'CORE CAPABILITIES', 'BEHAVIORAL GUIDELINES',
  'DOMAIN KNOWLEDGE', 'INTERACTION PROTOCOL', 'OUTPUT FORMAT',
  'CONSTRAINTS & SAFETY', 'FIRST MESSAGE',
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

Generate the system prompt using this exact structure. Every section must contain specific, actionable content — not generic placeholders. Use real industry terminology, real frameworks, real tool names, and real methodologies that a professional in this role would recognize.
</instructions>

<output_format>
## AGENT IDENTITY
Define who this agent is in 2-3 sentences. Include: the agent's name, its core purpose, its domain expertise, and the specific professional role it mirrors. Be concrete — reference the actual industry context.

## CORE CAPABILITIES
List 6-8 specific capabilities as active competencies. Each capability should describe a concrete action the agent can perform, not a vague skill. Use the format: "[Action verb] + [specific deliverable] + [using what method/tool]."

## BEHAVIORAL GUIDELINES
Define the agent's personality and interaction style:
- Communication tone (formal/conversational/technical — pick ONE and be specific)
- Response length norms (when to be brief vs. detailed)
- 3-4 "ALWAYS" rules (things this agent must do in every interaction)
- 3-4 "NEVER" rules (things this agent must avoid)
- How to handle ambiguous requests (ask clarifying questions vs. make assumptions)

## DOMAIN KNOWLEDGE
List the specific frameworks, methodologies, tools, regulations, and knowledge areas this agent draws from. Use real names — not generic categories. A professional in this field should read this list and recognize every item.

## INTERACTION PROTOCOL
Define how this agent manages conversations:
- How it opens a new conversation (what it asks first)
- How it handles multi-step workflows (does it present a plan before executing?)
- How it delivers complex outputs (structured sections, summaries, or step-by-step?)
- What context it requests from the user before proceeding
- How it confirms understanding before taking action

## OUTPUT FORMAT
Define the default structure of this agent's responses:
- Primary output format (bullets, narrative, tables, code, templates — be specific)
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
- Every section must contain content specific to the ${name} role — nothing generic
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

function saveProgress(completed) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify({ completed, timestamp: new Date().toISOString() }))
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) return []
  try { return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')).completed || [] }
  catch { return [] }
}

function gitCommitPush(message) {
  try {
    execSync('git add simulations/', { cwd: path.join(__dirname, '..'), stdio: 'pipe' })
    execSync(`git commit -m "${message}"`, { cwd: path.join(__dirname, '..'), stdio: 'pipe' })
    execSync('git push origin master', { cwd: path.join(__dirname, '..'), stdio: 'pipe' })
    console.log(`  [GIT] Committed & pushed: ${message}`)
  } catch (e) {
    console.log(`  [GIT] Warning: ${e.message.slice(0, 80)}`)
  }
}

// ─── Tier 1 (structural — needed to generate the prompt for Tier 2) ─────────

async function generatePrompt(client, agent) {
  const metaPrompt = buildPrompt(agent.name, agent.desc)
  const prompt = await callClaude(client, metaPrompt, [{ role: 'user', content: 'Generate the system prompt now.' }])
  await sleep(RATE_LIMIT_MS)
  return prompt
}

// ─── Tier 2: Conversation Test ───────────────────────────────────────────────

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

  const convoText = conversation.map(m => `[${m.role.toUpperCase()}]: ${m.content}`).join('\n\n')
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
    return { pass: false, average: 0, error: 'Evaluation parse failed', raw: evalResult, conversation }
  }
}

// ─── Tier 3: Full Simulation ─────────────────────────────────────────────────

async function tier3(client, agent) {
  const userContext = `I am a mid-level professional at a 200-person company in the ${agent.industry} industry. I have 5 years of experience and report to the VP.`
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

  const convoText = conversation.map(m => `[${m.role.toUpperCase()}]: ${m.content}`).join('\n\n')
  const evalResult = await callClaude(client,
    'You evaluate AI agent simulations. Return ONLY valid JSON, no markdown fences.',
    [{ role: 'user', content: `Evaluate this 5-turn simulation for "${agent.name}" (${agent.desc}) in ${agent.industry}. The agent was given userContext: "mid-level professional at a 200-person company in ${agent.industry}, 5 years experience, reports to VP."

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
    return { pass: false, average: 0, error: 'Evaluation parse failed', raw: evalResult, conversation }
  }
}

// ─── Save Tier 2 result ─────────────────────────────────────────────────────

function saveTier2(agent, result) {
  const slug = slugify(agent.industry)
  const dir = path.join(RESULTS_BASE, slug, 'results')
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const date = new Date().toISOString().slice(0, 10)
  let md = `# Tier 2 — Conversation Test: ${agent.name}

- **ID:** ${agent.id}
- **Industry:** ${agent.industry}
- **Date:** ${date}
- **Model:** ${MODEL}
- **Result:** ${result.pass ? 'PASS' : 'FAIL'} (${result.average}/10, threshold: 7.0)

## Scores

| Criteria | Score | Notes |
|----------|-------|-------|
| In Character | ${result.in_character?.score || '?'}/10 | ${result.in_character?.note || ''} |
| Actionable Response | ${result.actionable_response?.score || '?'}/10 | ${result.actionable_response?.note || ''} |
| Edge Case Handling | ${result.edge_case_handling?.score || '?'}/10 | ${result.edge_case_handling?.note || ''} |
| **Average** | **${result.average}/10** | ${result.pass ? 'PASS' : 'FAIL'} |

## Conversation Transcript

`
  if (result.conversation) {
    for (const m of result.conversation) {
      md += `### ${m.role === 'user' ? 'USER' : 'AGENT'}\n${m.content}\n\n`
    }
  }

  if (result.error) md += `\n## Error\n${result.error}\n`

  fs.writeFileSync(path.join(dir, `${agent.id}_tier2.md`), md, 'utf8')
}

// ─── Save Tier 3 result ─────────────────────────────────────────────────────

function saveTier3(agent, result) {
  const slug = slugify(agent.industry)
  const dir = path.join(RESULTS_BASE, slug, 'results')
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const date = new Date().toISOString().slice(0, 10)
  let md = `# Tier 3 — Full Simulation: ${agent.name}

- **ID:** ${agent.id}
- **Industry:** ${agent.industry}
- **Date:** ${date}
- **Model:** ${MODEL}
- **Result:** ${result.pass ? 'PASS' : 'FAIL'} (${result.average}/10, threshold: 8.0)

## Scores

| Criteria | Score | Notes |
|----------|-------|-------|
| Domain Accuracy | ${result.domain_accuracy?.score || '?'}/10 | ${result.domain_accuracy?.note || ''} |
| Professional Judgment | ${result.professional_judgment?.score || '?'}/10 | ${result.professional_judgment?.note || ''} |
| Constraint Compliance | ${result.constraint_compliance?.score || '?'}/10 | ${result.constraint_compliance?.note || ''} |
| Output Structure | ${result.output_structure?.score || '?'}/10 | ${result.output_structure?.note || ''} |
| Conversation Flow | ${result.conversation_flow?.score || '?'}/10 | ${result.conversation_flow?.note || ''} |
| Overall Quality | ${result.overall_quality?.score || '?'}/10 | ${result.overall_quality?.note || ''} |
| **Average** | **${result.average}/10** | ${result.pass ? 'PASS' : 'FAIL'} |

## Conversation Transcript

`
  if (result.conversation) {
    for (const m of result.conversation) {
      md += `### ${m.role === 'user' ? 'USER' : 'AGENT'}\n${m.content}\n\n`
    }
  }

  if (result.error) md += `\n## Error\n${result.error}\n`

  fs.writeFileSync(path.join(dir, `${agent.id}_tier3.md`), md, 'utf8')
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const client = getClient()
  const allAgents = loadAgents()
  const proAgents = allAgents.filter(a => PRO_INDUSTRIES.includes(a.industry) && !a.hasFixedPrompt)
  const completed = loadProgress()

  console.log(`\n${'='.repeat(60)}`)
  console.log(`PRO-ONLY QUALITY GATE — Tier 2 + Tier 3`)
  console.log(`${'='.repeat(60)}`)
  console.log(`Total Pro agents: ${proAgents.length} (excluding fixedPrompt)`)
  console.log(`Already completed: ${completed.length}`)
  console.log(`Remaining: ${proAgents.length - completed.length}`)
  console.log(`${'='.repeat(60)}\n`)

  const results = []
  let sinceLastCommit = 0
  let batchNum = 0
  let t2Pass = 0, t2Fail = 0, t3Pass = 0, t3Fail = 0
  const t2Scores = [], t3Scores = []
  const failures = []

  for (let i = 0; i < proAgents.length; i++) {
    const agent = proAgents[i]

    if (completed.includes(agent.id)) {
      console.log(`[${i + 1}/${proAgents.length}] ${agent.name} — skipped (already tested)`)
      continue
    }

    process.stdout.write(`[${i + 1}/${proAgents.length}] ${agent.name} (${agent.industry})... `)

    try {
      // Step 1: Generate prompt (Tier 1 structural generation)
      process.stdout.write('generating... ')
      const systemPrompt = await generatePrompt(client, agent)

      // Step 2: Tier 2
      process.stdout.write('T2... ')
      const t2Result = await tier2(client, agent, systemPrompt)
      saveTier2(agent, t2Result)
      t2Scores.push(t2Result.average)
      if (t2Result.pass) t2Pass++; else { t2Fail++; failures.push({ agent, tier: 2, score: t2Result.average, notes: t2Result }) }
      const t2Status = t2Result.pass ? 'PASS' : 'FAIL'
      process.stdout.write(`${t2Status}(${t2Result.average}) `)

      // Step 3: Tier 3
      process.stdout.write('T3... ')
      const t3Result = await tier3(client, agent)
      saveTier3(agent, t3Result)
      t3Scores.push(t3Result.average)
      if (t3Result.pass) t3Pass++; else { t3Fail++; failures.push({ agent, tier: 3, score: t3Result.average, notes: t3Result }) }
      const t3Status = t3Result.pass ? 'PASS' : 'FAIL'
      console.log(`${t3Status}(${t3Result.average})`)

      completed.push(agent.id)
      saveProgress(completed)
      sinceLastCommit++
      results.push({ agent, t2: t2Result, t3: t3Result })

      // Auto-commit every COMMIT_EVERY agents
      if (sinceLastCommit >= COMMIT_EVERY) {
        batchNum++
        gitCommitPush(`docs: quality gate tier 2+3 batch ${batchNum} — ${sinceLastCommit} Pro agents tested`)
        sinceLastCommit = 0
      }

    } catch (err) {
      console.log(`ERROR: ${err.message}`)
      failures.push({ agent, tier: 'error', score: 0, notes: { error: err.message } })
      if (err.message.includes('rate') || err.status === 429) {
        console.log('  Rate limited, pausing 60s...')
        await sleep(60000)
      } else if (err.message.includes('overloaded')) {
        console.log('  API overloaded, pausing 30s...')
        await sleep(30000)
      }
    }
  }

  // Final commit for remaining
  if (sinceLastCommit > 0) {
    batchNum++
    gitCommitPush(`docs: quality gate tier 2+3 batch ${batchNum} — final ${sinceLastCommit} Pro agents tested`)
  }

  // ─── Summary ────────────────────────────────────────────────────────────────
  const totalTested = t2Scores.length
  const avgT2 = t2Scores.length ? (t2Scores.reduce((a, b) => a + b, 0) / t2Scores.length).toFixed(1) : 'N/A'
  const avgT3 = t3Scores.length ? (t3Scores.reduce((a, b) => a + b, 0) / t3Scores.length).toFixed(1) : 'N/A'

  const summary = `
${'='.repeat(60)}
PRO-ONLY QUALITY GATE — FINAL SUMMARY
${'='.repeat(60)}

Total agents tested: ${totalTested}

TIER 2 (Conversation Test, threshold 7.0):
  Passed: ${t2Pass}
  Failed: ${t2Fail}
  Average: ${avgT2}/10

TIER 3 (Full Simulation, threshold 8.0):
  Passed: ${t3Pass}
  Failed: ${t3Fail}
  Average: ${avgT3}/10

OVERALL:
  Full pass (both tiers): ${results.filter(r => r.t2.pass && r.t3.pass).length}/${totalTested}
`

  console.log(summary)

  if (failures.length > 0) {
    console.log('FAILURES:')
    for (const f of failures) {
      const reason = f.notes?.error || `Tier ${f.tier} score: ${f.score}`
      console.log(`  - ${f.agent.name} (${f.agent.industry}): ${reason}`)
    }
  }

  // Save summary
  const summaryPath = path.join(RESULTS_BASE, 'pro-tier23-summary.md')
  let summaryMd = `# Pro-Only Quality Gate — Tier 2 + Tier 3 Summary

- **Date:** ${new Date().toISOString().slice(0, 10)}
- **Model:** ${MODEL}
- **Total tested:** ${totalTested}

## Tier 2 — Conversation Test (threshold: 7.0)

| Metric | Value |
|--------|-------|
| Passed | ${t2Pass} |
| Failed | ${t2Fail} |
| Average | ${avgT2}/10 |

## Tier 3 — Full Simulation (threshold: 8.0)

| Metric | Value |
|--------|-------|
| Passed | ${t3Pass} |
| Failed | ${t3Fail} |
| Average | ${avgT3}/10 |

## Overall

| Metric | Value |
|--------|-------|
| Both tiers passed | ${results.filter(r => r.t2.pass && r.t3.pass).length}/${totalTested} |

## Results by Industry

`

  // Group results by industry
  const byIndustry = {}
  for (const r of results) {
    const ind = r.agent.industry
    if (!byIndustry[ind]) byIndustry[ind] = []
    byIndustry[ind].push(r)
  }

  for (const [industry, agents] of Object.entries(byIndustry).sort()) {
    summaryMd += `### ${industry}\n\n`
    summaryMd += `| Agent | T2 Score | T2 | T3 Score | T3 |\n`
    summaryMd += `|-------|----------|-----|----------|-----|\n`
    for (const r of agents) {
      summaryMd += `| ${r.agent.name} | ${r.t2.average}/10 | ${r.t2.pass ? 'PASS' : 'FAIL'} | ${r.t3.average}/10 | ${r.t3.pass ? 'PASS' : 'FAIL'} |\n`
    }
    summaryMd += '\n'
  }

  if (failures.length > 0) {
    summaryMd += `## Failures\n\n`
    for (const f of failures) {
      const reason = f.notes?.error || `Tier ${f.tier} score: ${f.score}/10`
      summaryMd += `- **${f.agent.name}** (${f.agent.industry}): ${reason}\n`
    }
  }

  fs.writeFileSync(summaryPath, summaryMd, 'utf8')

  // Final commit with summary
  try {
    execSync('git add simulations/', { cwd: path.join(__dirname, '..'), stdio: 'pipe' })
    execSync('git commit -m "docs: quality gate tier 2+3 complete — Pro-only summary"', { cwd: path.join(__dirname, '..'), stdio: 'pipe' })
    execSync('git push origin master', { cwd: path.join(__dirname, '..'), stdio: 'pipe' })
    console.log('[GIT] Summary committed & pushed')
  } catch (e) { /* already committed */ }

  // Clear progress
  if (fs.existsSync(PROGRESS_FILE)) fs.unlinkSync(PROGRESS_FILE)

  console.log(`\n${'='.repeat(60)}`)
  console.log('DONE')
  console.log(`${'='.repeat(60)}\n`)
}

main().catch(err => {
  console.error('Fatal error:', err.message)
  process.exit(1)
})

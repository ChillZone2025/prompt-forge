#!/usr/bin/env node
/**
 * Tier 1 Quality Gate — Batch Runner
 * Generates prompts via Claude API and checks structural criteria.
 * Saves results to simulations/{industry}/results/{agent_id}_tier1.md
 *
 * Usage:
 *   node scripts/tier1-batch.js                # run all missing
 *   node scripts/tier1-batch.js --dry-run      # show what would be tested
 *   node scripts/tier1-batch.js --industry "General"  # one industry only
 */

require('dotenv').config({ path: '.env.local' })
const Anthropic = require('@anthropic-ai/sdk').default
const fs = require('fs')
const path = require('path')

const MODEL = 'claude-sonnet-4-20250514'
const MAX_TOKENS = 4096
const CONCURRENCY = 3
const SIM_DIR = path.join(__dirname, '..', 'simulations')

// ─── Industry slug mapping ──────────────────────────────────────────────────
function toSlug(industry) {
  return industry.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
}

// ─── Parse agents from PromptForge.js ───────────────────────────────────────
function loadAgents() {
  const src = fs.readFileSync(
    path.join(__dirname, '..', 'src', 'app', 'forge', 'PromptForge.js'),
    'utf8'
  )
  const agents = []
  let currentIndustry = ''
  const lines = src.split('\n')

  // Find the INDUSTRIES block boundaries
  const startIdx = lines.findIndex(l => l.includes('const INDUSTRIES = {'))
  if (startIdx === -1) throw new Error('INDUSTRIES not found')

  // Find STARTER_PROMPTS to know where agents end
  const endIdx = lines.findIndex((l, i) => i > startIdx && l.includes('const STARTER_PROMPTS'))
  const agentLines = lines.slice(startIdx, endIdx > 0 ? endIdx : undefined)

  for (const line of agentLines) {
    // Industry header: "Industry Name": [ or 'Industry Name': [
    const im = line.match(/^\s*['"]([^'"]+)['"]\s*:\s*\[/)
    if (im) { currentIndustry = im[1]; continue }
    // Also match unquoted: General: [
    const im2 = line.match(/^\s*(\w[\w\s&]*?)\s*:\s*\[/)
    if (im2 && !line.includes('id:')) { currentIndustry = im2[1].trim(); continue }

    // Agent entry
    const idM = line.match(/id:\s*'([^']+)'/)
    const nameM = line.match(/name:\s*'([^']+)'/)
    const descM = line.match(/desc:\s*'([^']+)'/)
    if (idM && nameM && descM && currentIndustry) {
      const hasFixed = line.includes('fixedPrompt')
      agents.push({
        id: idM[1],
        name: nameM[1],
        desc: descM[1],
        industry: currentIndustry,
        hasFixed,
      })
    }
  }

  // Mark multi-line fixedPrompt agents
  const fixedIds = new Set(['sop_gen', 'repurpose', 'sub_nego', 'homework', 'listing_gen', 'resume_screen', 'site_report', 'proposal_writer'])
  return agents.filter(a => !fixedIds.has(a.id))
}

// ─── Find already-tested agents ─────────────────────────────────────────────
function getTestedIds() {
  const tested = new Set()
  function walk(dir) {
    if (!fs.existsSync(dir)) return
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) walk(path.join(dir, entry.name))
      else if (entry.name.endsWith('_tier1.md')) {
        tested.add(entry.name.replace('_tier1.md', ''))
      }
    }
  }
  walk(SIM_DIR)
  return tested
}

// ─── buildPrompt (same as PromptForge.js v2) ───────────────────────────────
function buildPrompt(name, desc) {
  return `You are an elite AI systems architect who designs deployment-ready agent system prompts used in production environments.

<task>
Generate a complete, deployment-ready system prompt for an AI agent.
Agent role: ${name}
Agent specialty: ${desc}
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

// ─── Tier 1 checks ──────────────────────────────────────────────────────────
const REQUIRED_SECTIONS = [
  'AGENT IDENTITY', 'CORE CAPABILITIES', 'BEHAVIORAL GUIDELINES',
  'DOMAIN KNOWLEDGE', 'INTERACTION PROTOCOL', 'OUTPUT FORMAT',
  'CONSTRAINTS & SAFETY', 'FIRST MESSAGE'
]

function runTier1Checks(promptText) {
  const results = { pass: true, checks: {} }

  // 1. Section check
  const found = REQUIRED_SECTIONS.filter(s => promptText.includes(`## ${s}`))
  const missing = REQUIRED_SECTIONS.filter(s => !promptText.includes(`## ${s}`))
  results.checks.sections = {
    pass: found.length === 8,
    detail: `${found.length}/8 present${missing.length ? ' | Missing: ' + missing.join(', ') : ''}`
  }

  // 2. Word count
  const words = promptText.split(/\s+/).filter(w => w.length > 0).length
  const wcPass = words >= 600 && words <= 900
  results.checks.wordCount = {
    pass: wcPass,
    detail: `${words} words${wcPass ? ' (ok)' : words < 600 ? ' (too short)' : ' (too long)'}`
  }

  // 3. Tool/framework references (look for capitalized proper nouns, acronyms, known patterns)
  const toolPatterns = /\b[A-Z][A-Za-z]*(?:\s[A-Z][A-Za-z]*)*\b|\b[A-Z]{2,}\b/g
  const matches = promptText.match(toolPatterns) || []
  // Filter out section headers and common words
  const stopWords = new Set(['AGENT','IDENTITY','CORE','CAPABILITIES','BEHAVIORAL','GUIDELINES',
    'DOMAIN','KNOWLEDGE','INTERACTION','PROTOCOL','OUTPUT','FORMAT','CONSTRAINTS','SAFETY',
    'FIRST','MESSAGE','ALWAYS','NEVER','NOT','THE','AND','OR','FOR','WITH','THIS','THAT',
    'WILL','CAN','ALL','ANY','HOW','WHO','WHAT','WHEN','WHERE','WHY','Define','Each','Use',
    'List','Write','Be','Ask','Set','I','A','In','It','If','Do','No','My','To','Is','Of',
    'As','At','By','On','Up','So','Am','An','Go','He','Me','We','Us','Has','Had','Was',
    'Are','Did','Get','Got','Let','May','New','Now','Old','One','Our','Out','Own','Run',
    'Say','She','Too','Two','Way','Add','Big','But','Buy','End','Few','Act','Age'])
  const refs = [...new Set(matches)].filter(m => !stopWords.has(m) && m.length > 1)
  const refPass = refs.length >= 3
  results.checks.toolRefs = {
    pass: refPass,
    detail: `${refs.length} found: ${refs.slice(0, 20).join(', ')}`
  }

  // 4. First Message has question
  const fmSection = promptText.split('## FIRST MESSAGE')[1] || ''
  const hasQuestion = fmSection.includes('?')
  results.checks.firstMessageQ = {
    pass: hasQuestion,
    detail: hasQuestion ? 'Contains question mark' : 'No question found in First Message'
  }

  results.pass = Object.values(results.checks).every(c => c.pass)
  return results
}

// ─── Generate and test one agent ────────────────────────────────────────────
async function testOneAgent(client, agent) {
  const prompt = buildPrompt(agent.name, agent.desc)
  const res = await client.messages.create({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: prompt,
    messages: [{ role: 'user', content: 'Generate the system prompt now.' }],
  })
  const text = res.content[0].text
  const checks = runTier1Checks(text)
  return { text, checks }
}

// ─── Save result ────────────────────────────────────────────────────────────
function saveResult(agent, text, checks) {
  const slug = toSlug(agent.industry)
  const dir = path.join(SIM_DIR, slug, 'results')
  fs.mkdirSync(dir, { recursive: true })

  const filepath = path.join(dir, `${agent.id}_tier1.md`)
  const date = new Date().toISOString().slice(0, 10)
  const overall = checks.pass ? 'PASS' : 'FAIL'

  const md = `# Tier 1 Gate \u2014 ${agent.name} (\`${agent.id}\`)

**Industry:** ${agent.industry}
**Date:** ${date}
**Result:** ${overall}

## Checks

| Check | Result | Details |
|-------|--------|---------|
| Sections (8/8) | ${checks.checks.sections.pass ? 'PASS' : 'FAIL'} | ${checks.checks.sections.detail} |
| Word count (600-900) | ${checks.checks.wordCount.pass ? 'PASS' : 'FAIL'} | ${checks.checks.wordCount.detail} |
| Tool references (>=3) | ${checks.checks.toolRefs.pass ? 'PASS' : 'FAIL'} | ${checks.checks.toolRefs.detail} |
| First Message question | ${checks.checks.firstMessageQ.pass ? 'PASS' : 'FAIL'} | ${checks.checks.firstMessageQ.detail} |

## Generated Prompt

\`\`\`
${text}
\`\`\`
`
  fs.writeFileSync(filepath, md, 'utf8')
  return filepath
}

// ─── Concurrency helper ─────────────────────────────────────────────────────
async function runWithConcurrency(tasks, concurrency) {
  const results = []
  let idx = 0
  async function worker() {
    while (idx < tasks.length) {
      const i = idx++
      results[i] = await tasks[i]()
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()))
  return results
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const indIdx = args.indexOf('--industry')
  const filterIndustry = indIdx >= 0 ? args[indIdx + 1] : null

  const allAgents = loadAgents()
  const tested = getTestedIds()

  let missing = allAgents.filter(a => !tested.has(a.id))
  if (filterIndustry) {
    missing = missing.filter(a => a.industry.toLowerCase() === filterIndustry.toLowerCase())
  }

  console.log(`Total agents: ${allAgents.length}`)
  console.log(`Already tested: ${tested.size}`)
  console.log(`Missing: ${missing.length}`)

  if (dryRun) {
    const byInd = {}
    for (const a of missing) {
      if (!byInd[a.industry]) byInd[a.industry] = []
      byInd[a.industry].push(a)
    }
    for (const [ind, agents] of Object.entries(byInd)) {
      console.log(`\n${ind} (${agents.length}):`)
      for (const a of agents) console.log(`  ${a.id} | ${a.name}`)
    }
    return
  }

  if (missing.length === 0) {
    console.log('All agents have tier1 results. Nothing to do.')
    return
  }

  const key = process.env.ANTHROPIC_API_KEY
  if (!key) { console.error('ANTHROPIC_API_KEY not found in .env.local'); process.exit(1) }
  const client = new Anthropic({ apiKey: key })

  let passed = 0, failed = 0
  const failures = []

  const tasks = missing.map((agent, i) => async () => {
    const num = `[${i + 1}/${missing.length}]`
    console.log(`${num} Testing ${agent.name} (${agent.industry})...`)
    try {
      const { text, checks } = await testOneAgent(client, agent)
      const fp = saveResult(agent, text, checks)
      if (checks.pass) {
        passed++
        console.log(`${num} PASS - ${agent.id}`)
      } else {
        failed++
        const failedChecks = Object.entries(checks.checks).filter(([,v]) => !v.pass).map(([k]) => k)
        console.log(`${num} FAIL - ${agent.id} (${failedChecks.join(', ')})`)
        failures.push({ agent, failedChecks })
      }
    } catch (err) {
      failed++
      console.error(`${num} ERROR - ${agent.id}: ${err.message}`)
      failures.push({ agent, error: err.message })
    }
  })

  await runWithConcurrency(tasks, CONCURRENCY)

  console.log(`\n${'='.repeat(60)}`)
  console.log(`TIER 1 BATCH COMPLETE: ${passed} passed, ${failed} failed out of ${missing.length}`)
  if (failures.length > 0) {
    console.log('\nFailures:')
    for (const f of failures) {
      console.log(`  ${f.agent.id} (${f.agent.industry}): ${f.failedChecks?.join(', ') || f.error}`)
    }
  }
  console.log(`${'='.repeat(60)}`)

  // Update progress JSON
  const totalTested = tested.size + passed + failed
  const progressPath = path.join(SIM_DIR, '_progress.json')
  fs.writeFileSync(progressPath, JSON.stringify({
    completed: totalTested,
    total: allAgents.length,
    passed: (tested.size) + passed,
    failed: failed,
    timestamp: new Date().toISOString(),
  }, null, 2), 'utf8')
}

main().catch(err => { console.error('Fatal:', err.message); process.exit(1) })

#!/usr/bin/env node
/**
 * Quality Gate Tier 1 — Structural check for all untested agents
 * Calls Claude API to generate prompt, then validates structure.
 */

const Anthropic = require('@anthropic-ai/sdk').default || require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.ANTHROPIC_API_KEY || fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf8').match(/ANTHROPIC_API_KEY=(.+)/)?.[1]?.trim();
if (!API_KEY) { console.error('No API key found'); process.exit(1); }

const client = new Anthropic({ apiKey: API_KEY });
const SIMS_DIR = path.join(__dirname, '..', 'simulations');
const PF_PATH = path.join(__dirname, '..', 'src', 'app', 'forge', 'PromptForge.js');

// ─── Extract agents from PromptForge.js ────────────────────────────────────
function extractAgents() {
  const src = fs.readFileSync(PF_PATH, 'utf8');
  const agents = [];
  // Match the INDUSTRIES object — each industry key and its agents
  const industryRegex = /['"]?([^'":\]]+?)['"]?\s*:\s*\[/g;

  // Find the INDUSTRIES block
  const indStart = src.indexOf('const INDUSTRIES = {');
  if (indStart === -1) { console.error('Cannot find INDUSTRIES'); process.exit(1); }

  // Parse agents using a simpler regex approach
  let current = src.slice(indStart);
  // Find each industry name and its agents
  const lines = current.split('\n');
  let currentIndustry = null;
  let braceDepth = 0;
  let started = false;

  for (const line of lines) {
    if (!started && line.includes('const INDUSTRIES = {')) {
      started = true;
      braceDepth = 1;
      continue;
    }
    if (!started) continue;

    // Track brace depth to know when INDUSTRIES ends
    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }
    if (braceDepth <= 0) break;

    // Detect industry header like:  "Comms & Sales": [
    //   or  General: [
    const indMatch = line.match(/^\s*['"]?([^'":\[\]{}]+?)['"]?\s*:\s*\[/);
    if (indMatch) {
      const candidate = indMatch[1].trim();
      // Only treat as industry if it's not an agent field
      if (!candidate.match(/^(id|icon|name|desc|color|isNew|fixedPrompt)$/)) {
        currentIndustry = candidate;
        // Fall through — line may also contain an agent on the same line
      }
    }

    // Detect agent entries
    if (currentIndustry && line.includes("id:")) {
      const idMatch = line.match(/id:\s*'([^']+)'/);
      const nameMatch = line.match(/name:\s*'([^']+)'/);
      const descMatch = line.match(/desc:\s*'([^']+)'/);
      const fixedMatch = line.includes('fixedPrompt');
      if (idMatch && nameMatch && descMatch) {
        agents.push({
          id: idMatch[1],
          name: nameMatch[1],
          desc: descMatch[1],
          industry: currentIndustry,
          hasFixedPrompt: fixedMatch,
        });
      }
    }
  }
  return agents;
}

// ─── Get already-tested agent IDs ──────────────────────────────────────────
function getTestedIds() {
  const tested = new Set();
  if (!fs.existsSync(SIMS_DIR)) return tested;

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) walk(path.join(dir, entry.name));
      else if (entry.name.endsWith('_gate.md') || entry.name.endsWith('_tier1.md')) {
        const id = entry.name.replace(/_gate\.md$/, '').replace(/_tier1\.md$/, '');
        tested.add(id);
      }
    }
  }
  walk(SIMS_DIR);
  return tested;
}

// ─── Slugify industry name ─────────────────────────────────────────────────
function slugify(name) {
  return name.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// ─── Build the prompt (mirrors route.js) ───────────────────────────────────
function buildPrompt(agentName, agentDesc, industry) {
  return `You are an elite AI systems architect who designs deployment-ready agent system prompts used in production environments.

<task>
Generate a complete, deployment-ready system prompt for an AI agent.
Agent role: ${agentName}
Agent specialty: ${agentDesc}
Industry context: ${industry}
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
- Every section must contain content specific to the ${agentName} role — nothing generic
- Reference real industry tools, frameworks, regulations, and methodologies by name
- A professional in this field should read this prompt and think "this person knows my job"
- The generated prompt must work immediately when pasted into any AI tool's system prompt field
- Total length: 600-900 words. Dense with value, no padding.
</quality_criteria>`;
}

// ─── Tier 1 checks ─────────────────────────────────────────────────────────
const REQUIRED_SECTIONS = [
  'AGENT IDENTITY',
  'CORE CAPABILITIES',
  'BEHAVIORAL GUIDELINES',
  'DOMAIN KNOWLEDGE',
  'INTERACTION PROTOCOL',
  'OUTPUT FORMAT',
  'CONSTRAINTS & SAFETY',
  'FIRST MESSAGE',
];

function tier1Check(promptText) {
  const results = { passed: true, checks: {} };

  // 1. Check all 8 sections present
  const missingSections = [];
  for (const section of REQUIRED_SECTIONS) {
    if (!promptText.includes(`## ${section}`)) {
      missingSections.push(section);
    }
  }
  results.checks.sections = {
    passed: missingSections.length === 0,
    found: 8 - missingSections.length,
    missing: missingSections,
  };

  // 2. Word count 600-900
  const wordCount = promptText.split(/\s+/).filter(w => w.length > 0).length;
  results.checks.wordCount = {
    passed: wordCount >= 600 && wordCount <= 900,
    count: wordCount,
    note: wordCount < 600 ? 'too short' : wordCount > 900 ? 'too long' : 'ok',
  };

  // 3. At least 3 real tool/framework/methodology references
  // Strategy: combine acronym detection + known proper nouns
  const refs = new Set();

  // A) Uppercase acronyms (2+ letters) that appear in the domain knowledge or capabilities
  const acronymMatches = promptText.match(/\b[A-Z][A-Z0-9&\/]{1,}(?:[\s-][A-Z0-9]+)?\b/g) || [];
  for (const m of acronymMatches) {
    const clean = m.trim();
    // Skip generic words that happen to be caps
    if (['THE', 'AND', 'FOR', 'NOT', 'BUT', 'ALL', 'HAS', 'HIS', 'HER', 'WHO',
         'HOW', 'WHY', 'WHAT', 'WHEN', 'THIS', 'THAT', 'WITH', 'FROM', 'INTO',
         'WILL', 'DOES', 'DONE', 'BEEN', 'HAVE', 'WERE', 'THEY', 'THEM', 'YOUR',
         'EACH', 'MUST', 'ALSO', 'THAN', 'THEN', 'ONLY', 'BOTH', 'SAME', 'SUCH',
         'VERY', 'MOST', 'SOME', 'OVER', 'JUST', 'LIKE', 'WELL', 'BACK', 'MAKE',
         'KEEP', 'STAY', 'CORE', 'PASS', 'FAIL', 'NONE', 'NOTE', 'AGENT', 'NEVER',
         'ALWAYS', 'FIRST', 'MESSAGE', 'OUTPUT', 'FORMAT', 'DOMAIN', 'KNOWLEDGE',
         'INTERACTION', 'PROTOCOL', 'BEHAVIORAL', 'GUIDELINES', 'CONSTRAINTS',
         'SAFETY', 'IDENTITY', 'CAPABILITIES', 'II', 'III', 'IV'].includes(clean)) continue;
    if (clean.length >= 2) refs.add(clean);
  }

  // B) Known product/tool names (title case or lowercase)
  const toolPatterns = /\b(Salesforce|HubSpot|Marketo|QuickBooks|Xero|NetSuite|SAP|Oracle|Workday|ADP|BambooHR|Greenhouse|Tableau|Power\s*BI|Looker|Snowflake|Excel|Google\s*Sheets|Google\s*Analytics|Jira|Confluence|Slack|Teams|Asana|Monday|Trello|ClickUp|Smartsheet|Zendesk|Freshdesk|Intercom|Figma|Sketch|Adobe|AutoCAD|Revit|SolidWorks|MATLAB|Docker|Kubernetes|Terraform|Ansible|Jenkins|GitLab|GitHub|Selenium|Cypress|DataDog|Splunk|Grafana|PagerDuty|Zapier|Make\.com|Stripe|Twilio|Plaid|Shopify|WordPress|Magento|SEMrush|Ahrefs|LinkedIn|ZoomInfo|Gong|Outreach|Apollo|Calendly|Zoom|LangChain|CrewAI|Pinecone|TensorFlow|PyTorch|Python|JavaScript|TypeScript|Agile|Scrum|Kanban|Six Sigma|Lean|Monte Carlo|Black-Scholes|Moody's|Bloomberg|Reuters|CoStar|Zillow|Redfin|MLS|Yardi|AppFolio|Buildium|Epic|Cerner|Meditech|athenahealth|DrChrono|PracticeFusion)\b/gi;
  const toolMatches = promptText.match(toolPatterns) || [];
  for (const m of toolMatches) refs.add(m.trim());

  const refList = [...refs];
  results.checks.toolReferences = {
    passed: refList.length >= 3,
    count: refList.length,
    examples: refList.slice(0, 10),
  };

  // 4. First Message has at least 1 question
  const firstMsgIdx = promptText.indexOf('## FIRST MESSAGE');
  let hasQuestion = false;
  if (firstMsgIdx !== -1) {
    const firstMsgText = promptText.slice(firstMsgIdx);
    hasQuestion = firstMsgText.includes('?');
  }
  results.checks.firstMessageQuestion = {
    passed: hasQuestion,
  };

  // Overall pass
  results.passed = results.checks.sections.passed &&
    results.checks.wordCount.passed &&
    results.checks.toolReferences.passed &&
    results.checks.firstMessageQuestion.passed;

  return results;
}

// ─── Generate result markdown ──────────────────────────────────────────────
function resultMarkdown(agent, results, promptText) {
  const status = results.passed ? 'PASS' : 'FAIL';
  const sections = results.checks.sections;
  const wc = results.checks.wordCount;
  const tools = results.checks.toolReferences;
  const fmq = results.checks.firstMessageQuestion;

  return `# Tier 1 Gate — ${agent.name} (\`${agent.id}\`)

**Industry:** ${agent.industry}
**Date:** ${new Date().toISOString().split('T')[0]}
**Result:** ${status}

## Checks

| Check | Result | Details |
|-------|--------|---------|
| Sections (8/8) | ${sections.passed ? 'PASS' : 'FAIL'} | ${sections.found}/8 present${sections.missing.length ? ' — missing: ' + sections.missing.join(', ') : ''} |
| Word count (600-900) | ${wc.passed ? 'PASS' : 'FAIL'} | ${wc.count} words (${wc.note}) |
| Tool references (≥3) | ${tools.passed ? 'PASS' : 'FAIL'} | ${tools.count} found: ${tools.examples.join(', ')} |
| First Message question | ${fmq.passed ? 'PASS' : 'FAIL'} | ${fmq.passed ? 'Contains question mark' : 'No question found'} |

## Generated Prompt

\`\`\`
${promptText}
\`\`\`
`;
}

// ─── Main ──────────────────────────────────────────────────────────────────
async function main() {
  const allAgents = extractAgents();
  const testedIds = getTestedIds();

  // Filter: skip tested and fixedPrompt agents
  const untested = allAgents.filter(a => !testedIds.has(a.id) && !a.hasFixedPrompt);

  console.log(`Total agents extracted: ${allAgents.length}`);
  console.log(`Already tested: ${testedIds.size}`);
  console.log(`Agents with fixedPrompt (skip): ${allAgents.filter(a => a.hasFixedPrompt).length}`);
  console.log(`To test: ${untested.length}`);
  console.log('---');

  const results = { passed: 0, failed: 0, failures: [], total: untested.length };

  for (let i = 0; i < untested.length; i++) {
    const agent = untested[i];
    const num = i + 1;
    console.log(`[${num}/${untested.length}] ${agent.name} (${agent.id}) — ${agent.industry}`);

    try {
      // Call Claude API
      const prompt = buildPrompt(agent.name, agent.desc, agent.industry);
      const response = await client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        messages: [{ role: 'user', content: prompt }],
      });

      const generatedText = response.content.map(b => b.text || '').join('');

      // Run Tier 1 checks
      const checkResult = tier1Check(generatedText);

      if (checkResult.passed) {
        results.passed++;
        console.log(`  ✓ PASS (${checkResult.checks.wordCount.count}w, ${checkResult.checks.toolReferences.count} tools)`);
      } else {
        results.failed++;
        const failReasons = [];
        if (!checkResult.checks.sections.passed) failReasons.push(`sections: ${checkResult.checks.sections.missing.join(', ')}`);
        if (!checkResult.checks.wordCount.passed) failReasons.push(`words: ${checkResult.checks.wordCount.count}`);
        if (!checkResult.checks.toolReferences.passed) failReasons.push(`tools: ${checkResult.checks.toolReferences.count}`);
        if (!checkResult.checks.firstMessageQuestion.passed) failReasons.push('no question in first msg');
        results.failures.push({ id: agent.id, name: agent.name, reasons: failReasons });
        console.log(`  ✗ FAIL — ${failReasons.join('; ')}`);
      }

      // Save result
      const indSlug = slugify(agent.industry);
      const resultDir = path.join(SIMS_DIR, indSlug, 'results');
      fs.mkdirSync(resultDir, { recursive: true });
      const resultFile = path.join(resultDir, `${agent.id}_tier1.md`);
      fs.writeFileSync(resultFile, resultMarkdown(agent, checkResult, generatedText));

    } catch (err) {
      if (err.status === 429 || (err.message && err.message.includes('rate'))) {
        console.log('  ⏳ Rate limited, waiting 5s...');
        await new Promise(r => setTimeout(r, 5000));
        i--; // Retry this agent
        continue;
      }
      console.error(`  ✗ ERROR: ${err.message}`);
      results.failed++;
      results.failures.push({ id: agent.id, name: agent.name, reasons: [`API error: ${err.message}`] });
    }

    // 1-second pause between calls
    if (i < untested.length - 1) {
      await new Promise(r => setTimeout(r, 1000));
    }

    // Every 25 agents, write progress marker
    if (num % 25 === 0) {
      const progressFile = path.join(SIMS_DIR, '_progress.json');
      fs.writeFileSync(progressFile, JSON.stringify({
        completed: num,
        total: untested.length,
        passed: results.passed,
        failed: results.failed,
        timestamp: new Date().toISOString(),
      }, null, 2));
      console.log(`--- Batch ${Math.ceil(num/25)} complete (${num}/${untested.length}) ---`);
    }
  }

  // Final summary
  console.log('\n════════════════════════════════════════');
  console.log('QUALITY GATE TIER 1 — FINAL SUMMARY');
  console.log('════════════════════════════════════════');
  console.log(`Total tested: ${results.passed + results.failed}`);
  console.log(`Passed: ${results.passed}`);
  console.log(`Failed: ${results.failed}`);
  if (results.failures.length > 0) {
    console.log('\nFailures:');
    for (const f of results.failures) {
      console.log(`  - ${f.name} (${f.id}): ${f.reasons.join('; ')}`);
    }
  }
  console.log('════════════════════════════════════════');

  // Write final summary
  const summaryFile = path.join(SIMS_DIR, '_tier1_summary.json');
  fs.writeFileSync(summaryFile, JSON.stringify(results, null, 2));
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });

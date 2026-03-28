#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import Anthropic from '@anthropic-ai/sdk'
import { z } from 'zod'
import { INDUSTRIES, PRO_INDUSTRIES } from './agents.js'

// ─── buildPrompt v2 — exact match of production template ─────────────────────
function buildPrompt(name, desc, userContext, industry) {
  return `You are an elite AI systems architect who designs deployment-ready agent system prompts used in production environments.

<task>
Generate a complete, deployment-ready system prompt for an AI agent.
Agent role: ${name}
Agent specialty: ${desc}${industry ? `\nIndustry context: ${industry}` : ''}${userContext ? `\nUser context: ${userContext}` : ''}
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

// ─── Resolve agent from registry ─────────────────────────────────────────────
function findAgent(agentName) {
  const lower = agentName.toLowerCase()
  for (const [industry, agents] of Object.entries(INDUSTRIES)) {
    for (const agent of agents) {
      if (agent.name.toLowerCase() === lower || agent.id.toLowerCase() === lower) {
        return { agent, industry }
      }
    }
  }
  // Fuzzy match — check if the query is contained in the agent name
  for (const [industry, agents] of Object.entries(INDUSTRIES)) {
    for (const agent of agents) {
      if (agent.name.toLowerCase().includes(lower) || lower.includes(agent.name.toLowerCase())) {
        return { agent, industry }
      }
    }
  }
  return null
}

// ─── MCP Server ──────────────────────────────────────────────────────────────
const server = new McpServer({
  name: 'promptforge',
  version: '1.0.0',
  description: 'Prompt Forge — generate deployment-ready AI agent system prompts',
})

// ─── Tool: generate_prompt ───────────────────────────────────────────────────
server.tool(
  'generate_prompt',
  'Generate a deployment-ready AI agent system prompt using Prompt Forge\'s v2 engine. Returns a complete 8-section system prompt (Identity, Capabilities, Guidelines, Domain Knowledge, Interaction Protocol, Output Format, Constraints, First Message). Requires ANTHROPIC_API_KEY environment variable.',
  {
    agent_name: z.string().describe('The agent role name (e.g. "Credit Risk Underwriter", "Medical Scribe", "SOC Analyst Agent"). Can be any role — not limited to the built-in registry.'),
    agent_desc: z.string().optional().describe('Short description of the agent specialty (e.g. "Automated scoring, loan analysis"). If omitted and agent_name matches a registry agent, the registry description is used.'),
    industry: z.string().optional().describe('Industry context (e.g. "Finance", "Healthcare"). Helps the engine reference industry-specific tools and frameworks.'),
    user_context: z.string().optional().describe('Your role and situation for personalization (e.g. "I\'m a solo financial advisor serving retirees in Florida"). Pro feature on the web app, available to all MCP users.'),
  },
  async ({ agent_name, agent_desc, industry, user_context }) => {
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return {
        content: [{
          type: 'text',
          text: 'Error: ANTHROPIC_API_KEY environment variable is not set.\n\nSet it in your MCP client config:\n- Claude Code: claude mcp add --env ANTHROPIC_API_KEY=sk-ant-... promptforge -- npx -y promptforge-mcp\n- Claude Desktop: Add to env in claude_desktop_config.json',
        }],
        isError: true,
      }
    }

    // Resolve from registry if possible
    let resolvedDesc = agent_desc
    let resolvedIndustry = industry
    const match = findAgent(agent_name)
    if (match) {
      if (!resolvedDesc) resolvedDesc = match.agent.desc
      if (!resolvedIndustry) resolvedIndustry = match.industry
    }

    if (!resolvedDesc) {
      resolvedDesc = agent_name // fallback: use the name as the description
    }

    const prompt = buildPrompt(agent_name, resolvedDesc, user_context, resolvedIndustry)

    try {
      const client = new Anthropic({ apiKey })
      const message = await client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        messages: [{ role: 'user', content: prompt }],
      })

      const text = message.content
        .filter(block => block.type === 'text')
        .map(block => block.text)
        .join('\n')

      const source = match
        ? `\n\n---\n*Generated by Prompt Forge v2 | Agent: ${match.agent.name} (${match.industry}) | https://www.getpromptforge.net*`
        : `\n\n---\n*Generated by Prompt Forge v2 | Custom agent: ${agent_name} | https://www.getpromptforge.net*`

      return {
        content: [{ type: 'text', text: text + source }],
      }
    } catch (err) {
      return {
        content: [{ type: 'text', text: `Error generating prompt: ${err.message}` }],
        isError: true,
      }
    }
  }
)

// ─── Tool: list_agents ───────────────────────────────────────────────────────
server.tool(
  'list_agents',
  'List all 251 Prompt Forge agents grouped by industry. Returns agent names and descriptions. Use this to discover available agents before calling generate_prompt.',
  {
    industry: z.string().optional().describe('Filter to a specific industry (e.g. "Finance", "Healthcare"). Omit to list all industries.'),
    search: z.string().optional().describe('Search agents by name or description keyword (e.g. "compliance", "SEO").'),
  },
  async ({ industry, search }) => {
    let results = {}

    if (industry) {
      // Find industry (case-insensitive)
      const key = Object.keys(INDUSTRIES).find(
        k => k.toLowerCase() === industry.toLowerCase()
      )
      if (!key) {
        const available = Object.keys(INDUSTRIES).join(', ')
        return {
          content: [{ type: 'text', text: `Industry "${industry}" not found.\n\nAvailable industries: ${available}` }],
          isError: true,
        }
      }
      results[key] = INDUSTRIES[key]
    } else {
      results = INDUSTRIES
    }

    // Apply search filter
    if (search) {
      const lower = search.toLowerCase()
      const filtered = {}
      for (const [ind, agents] of Object.entries(results)) {
        const matches = agents.filter(
          a => a.name.toLowerCase().includes(lower) || a.desc.toLowerCase().includes(lower)
        )
        if (matches.length > 0) filtered[ind] = matches
      }
      results = filtered
    }

    // Format output
    const lines = []
    let totalAgents = 0
    for (const [ind, agents] of Object.entries(results)) {
      const proTag = PRO_INDUSTRIES.includes(ind) ? ' [PRO]' : ''
      lines.push(`\n## ${ind}${proTag} (${agents.length} agents)`)
      for (const a of agents) {
        lines.push(`- **${a.name}** — ${a.desc}`)
        totalAgents++
      }
    }

    const header = search
      ? `Found ${totalAgents} agents matching "${search}":`
      : `Prompt Forge Agent Registry — ${totalAgents} agents across ${Object.keys(results).length} industries:`

    return {
      content: [{ type: 'text', text: header + '\n' + lines.join('\n') }],
    }
  }
)

// ─── Tool: list_industries ───────────────────────────────────────────────────
server.tool(
  'list_industries',
  'List all 41 Prompt Forge industries with agent counts and Pro-only status.',
  {},
  async () => {
    const lines = ['# Prompt Forge Industries\n']
    let totalAgents = 0

    lines.push('| Industry | Agents | Access |')
    lines.push('|----------|--------|--------|')

    for (const [name, agents] of Object.entries(INDUSTRIES)) {
      const isPro = PRO_INDUSTRIES.includes(name)
      const access = isPro ? 'Pro-only' : 'Free + Pro'
      lines.push(`| ${name} | ${agents.length} | ${access} |`)
      totalAgents += agents.length
    }

    lines.push('')
    lines.push(`**Total:** ${totalAgents} agents across ${Object.keys(INDUSTRIES).length} industries (${PRO_INDUSTRIES.length} Pro-only)`)
    lines.push('')
    lines.push(`Pro subscription: $12/month at https://www.getpromptforge.net`)

    return {
      content: [{ type: 'text', text: lines.join('\n') }],
    }
  }
)

// ─── Start ───────────────────────────────────────────────────────────────────
async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
}

main().catch(err => {
  console.error('Failed to start Prompt Forge MCP server:', err)
  process.exit(1)
})

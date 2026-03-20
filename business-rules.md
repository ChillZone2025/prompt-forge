# BUSINESS-RULES.md — Quality Standards, Prompt Structure & Voice

## Brand Voice

Prompt Forge's voice is **expert but accessible**. Think: senior consultant who explains things clearly to a smart non-technical audience.

- **Confident, not arrogant** — state capabilities directly without hedging
- **Specific, not vague** — every agent description should tell the user exactly what it does
- **Professional, not corporate** — natural language, no buzzword soup
- **Actionable, not theoretical** — users should be able to deploy generated prompts immediately

## Agent Quality Standards

### Every New Agent Must Have

| Field | Requirements |
|-------|-------------|
| `id` | Unique snake_case identifier. Check against ALL existing IDs in `data-schema.md` before assigning. |
| `icon` | Single emoji or unicode character. Visually distinct from other agents in the same industry. |
| `name` | 2-4 words. Clear, professional. Title case. Describes the role, not the technology. |
| `desc` | Under 50 characters. Comma-separated capabilities or keywords. No periods. |
| `color` | Hex color. Should contrast with other agents in the same industry. Use the existing palette. |
| `isNew` | (Optional) Set to `true` for newly added agents. Remove after 30 days. |
| `fixedPrompt` | (Optional) Pre-written prompt that skips the Claude API. Use only for agents requiring specific multi-step workflows. |

### Agent Naming Conventions
- Use the **role name**, not the tool name: "Inventory Optimizer" not "AI Inventory Tool"
- Avoid generic names: "Business Helper" is bad, "Revenue Operations Analyst" is good
- If the agent is autonomous/agentic, include "Agent" in the name: "Autonomous Close Agent"
- Match the naming style of existing agents in the target industry

### Agent Description Conventions
- Format: `Capability 1, capability 2, capability 3`
- Example: `Hedging, derivatives, currency risk`
- No verbs at the start (not "Helps with hedging...")
- No articles (not "The hedging tool for...")
- Maximum 50 characters including spaces

### Color Palette (Reuse These)

```
#f5c518  — Gold/Yellow (accent, highlights)
#e8913a  — Orange (sales, outreach)
#4db8c8  — Teal (cyber, tech)
#9b7fd4  — Purple (creative, research)
#4db88c  — Green (health, finance, growth)
#d4834d  — Amber (legal, compliance)
#c46896  — Pink (management, PR)
#c44d4d  — Red (security, risk, critical)
#d4a84d  — Warm gold (finance, inventory)
#4d8cd4  — Blue (intelligence, analysis)
#4daed4  — Light blue (infrastructure, ops)
#60a5fa  — Bright blue (education)
#34d399  — Mint (scheduling, coordination)
#a78bfa  — Lavender (development, tracking)
#fb923c  — Tangerine (creative, stories)
#f472b6  — Rose (coaching, parenting)
```

## Generated Prompt Structure (v2)

The `buildPrompt()` function uses XML-tagged instructions to generate agent system prompts via the Claude API. The function accepts three parameters: `name` (agent name), `desc` (agent description), and `userContext` (optional user-provided context about their specific situation).

The generated output follows this exact 8-section structure:

```
## AGENT IDENTITY
Who this agent is: name, core purpose, domain expertise, the professional role it mirrors. 2-3 concrete sentences referencing actual industry context.

## CORE CAPABILITIES
6-8 specific capabilities as active competencies. Format: "[Action verb] + [specific deliverable] + [using what method/tool]." No vague skills.

## BEHAVIORAL GUIDELINES
Communication tone (one specific choice), response length norms, 3-4 ALWAYS rules, 3-4 NEVER rules, how to handle ambiguous requests.

## DOMAIN KNOWLEDGE
Real frameworks, methodologies, tools, regulations, and knowledge areas BY NAME. A professional in this field should recognize every item.

## INTERACTION PROTOCOL
How the agent manages conversations: what it asks first, how it handles multi-step workflows, how it delivers complex outputs, what context it requests from the user.

## OUTPUT FORMAT
Default response structure, when to use different formats, standard sections/headers, length calibration with approximate word counts.

## CONSTRAINTS & SAFETY
Hard scope limits, when to flag uncertainty, when to recommend human review, domain-specific ethical/compliance considerations, how to handle out-of-scope requests.

## FIRST MESSAGE
The exact opening message the agent sends when activated. Introduces the role in one sentence, asks 1-2 targeted questions about the user's situation, sets expectations.
```

### Quality Criteria for Generated Prompts
- Every section must be specific to the agent's role — nothing generic
- Must reference real industry tools, frameworks, regulations by name
- A professional in the field should think "this person knows my job"
- Must work immediately when pasted into any AI tool's system prompt field
- Target length: 600-900 words. Dense with value, no padding.

### Key Differences from v1
- Uses XML tags (`<task>`, `<instructions>`, `<output_format>`, `<quality_criteria>`) for 23% better parsing accuracy
- Includes think-before-generating instruction for better reasoning
- Supports optional `userContext` parameter for personalized generation
- ACTIVATION PHRASE replaced with FIRST MESSAGE (functional, not gimmicky)
- New INTERACTION PROTOCOL section for multi-turn conversation handling
- Explicit specificity enforcement — no generic content allowed

### Fixed Prompt Rules
Agents with `fixedPrompt` bypass the Claude API and display a pre-written prompt directly. Use this only when:
- The prompt requires a specific multi-step workflow (like the SOP Generator's inquiry phase)
- The prompt includes user interaction patterns that the API template doesn't support
- The prompt needs to be identical every time (no variation)

Fixed prompts must still follow the v2 quality criteria: specific to the role, references real tools/frameworks, includes an interaction protocol, and opens with a functional first message.

## Starter Prompt Standards

Starter prompts are simpler, copy-paste-ready prompts for everyday tasks. They do NOT use the Claude API — they're static text.

### Every Starter Prompt Must Have

| Field | Requirements |
|-------|-------------|
| `id` | Unique string prefixed with `s` followed by number (e.g., `s17`, `s18`) |
| `category` | One of the existing categories: `Work`, `Writing`, `Learning`, `Life` — or propose a new one |
| `color` | Matches the category color (Work=#e8913a, Writing=#9b7fd4, Learning=#4db88c, Life=#4d8cd4) |
| `title` | 3-6 words. Starts with a verb or "My". Clear about what it does. |
| `desc` | One sentence. Under 60 characters. Describes the outcome. |
| `prompt` | The actual prompt text. Must include `[BRACKETED PLACEHOLDERS]` for user input. |

### Starter Prompt Writing Rules
- Use second person: "Summarize the following..." not "The AI will summarize..."
- Include clear `[PLACEHOLDER]` brackets where the user needs to add their own content
- Keep prompts under 300 characters
- Each prompt should produce useful output with minimal user effort
- No multi-turn prompts — starters are single-shot

## Industry Standards

### Adding Agents to Existing Industries
- Maximum 12 agents per industry (General is the exception — it serves as the showcase)
- New agents must fill a gap — not overlap with existing agents in the same industry
- Check `data-schema.md` for current agent counts before adding

### Creating New Industries
New industries require:
- Minimum 5 agents at launch
- A clear, distinct audience (not a subset of an existing industry)
- Agent names that reflect real professional roles in that industry
- Industry name should be 1-3 words, title case

### Proposed Industries for Expansion
These are high-value targets based on AI adoption trends. Before committing to any new industry, score it against the **Revenue Optimization Framework** in `competitive-intel.md`. Industries that don't score well on willingness-to-pay and frequency-of-use should be deprioritized regardless of how "interesting" they are.

| Industry | Target Audience | Example Agents |
|----------|----------------|----------------|
| Legal & Compliance | Law firms, corporate legal, compliance officers | Contract Analyzer, Case Research Agent, Compliance Monitor, IP Reviewer, eDiscovery Agent |
| Real Estate | Agents, brokers, property managers | Listing Generator, Market Comp Analyzer, Lease Review Agent, Lead Nurture Agent, Showing Scheduler |
| HR & People Ops | HR teams, recruiters, people operations | Resume Screener, Interview Question Generator, Onboarding Agent, Policy Writer, Compensation Analyst |
| Marketing & Growth | Marketing teams, growth hackers, CMOs | A/B Test Analyst, SEO Content Agent, Campaign Optimizer, Attribution Analyst, Brand Voice Agent |
| Construction & Trades | Contractors, project managers, estimators | Bid Estimator, Safety Compliance Agent, Schedule Optimizer, Material Calculator, Inspection Agent |
| Nonprofit & Government | NGOs, government agencies, grant writers | Grant Writer Agent, Impact Report Generator, Volunteer Coordinator, Policy Analyst, Constituent Service Agent |

## Content Expansion: Service Categories

Beyond agents and starters, Prompt Forge can expand into adjacent AI service content. Agents should research and propose these as markdown files in `/content/proposals/`:

### Workflow Templates
- Pre-built N8N, Make, or Zapier workflows that complement Prompt Forge agents
- Example: "Auto-generate weekly client reports using the Data Analyst agent + N8N"
- Format: Step-by-step setup guide with screenshots/diagrams

### Agent Blueprints
- Multi-agent architecture designs showing how 2-5 Prompt Forge agents work together
- Example: "Sales Pipeline Blueprint: SDR → Market Intelligence → Voice AI → Content Repurposer"
- Format: Architecture diagram + implementation guide

### API Integration Tutorials
- How to integrate Prompt Forge-generated prompts into real applications
- Example: "Deploy the Medical Scribe agent in a Twilio voice app"
- Format: Tutorial with code samples

### Fine-Tuning Guides
- Guides on customizing and improving generated prompts for specific use cases
- Example: "Fine-tuning the Financial Modeler agent for SaaS metrics"
- Format: Before/after prompt comparisons with explanations

## Approval Workflow

| Content Type | Approval Level |
|-------------|---------------|
| New agents in existing industries | Auto-publish if all quality checks pass |
| New starter prompts | Auto-publish if all quality checks pass |
| New industries (5+ agents) | Stage for Rob's review |
| Service expansion proposals | Stage for Rob's review |
| Any change to payment/auth logic | BLOCKED — never modify without explicit approval |
| CSS or layout changes | Stage for Rob's review |

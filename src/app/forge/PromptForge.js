'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useUser, useClerk, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { track } from '@vercel/analytics'
import { INDUSTRIES, PRO_INDUSTRIES, INDUSTRY_TABS } from '../data/industries'
import QualityBadge from '../../components/QualityBadge'

const LS_LIB = 'pf_library'
const LS_SEEN = 'pf_seen'

// ─── Walkthrough ─────────────────────────────────────────────────────────────
const WALKTHROUGH = [
  { step: 1, icon: '⚒', title: 'Choose Your Industry', body: 'Select an industry from the top nav — General, Healthcare, Finance, and more. Each contains high-demand agent archetypes curated for that sector.' },
  { step: 2, icon: '🔥', title: 'Strike the Forge', body: 'Click any agent card. Claude generates a complete, deployment-ready system prompt in seconds — identity, capabilities, behavior rules, and an activation phrase.' },
  { step: 3, icon: '📋', title: 'Copy & Deploy', body: 'Hit Copy and paste into the System Prompt field of any AI tool — Claude, ChatGPT, or your own API. Your agent is ready.' },
  { step: 4, icon: '📚', title: 'Build Your Library', body: 'Save your best prompts. They persist across sessions so your personal agent arsenal grows over time.' },
]

// ─── Starter Prompts ──────────────────────────────────────────────────────────
const STARTER_PROMPTS = [
  { id: 's1',  category: 'Work',     color: '#e8913a', title: 'Summarize This Email',       desc: 'Get key points from any long email in 3 bullets.',        prompt: 'Summarize the following email in 3 concise bullet points. Highlight any action items or deadlines.\n\nEmail:\n[PASTE EMAIL HERE]' },
  { id: 's2',  category: 'Work',     color: '#e8913a', title: 'Write a Performance Review', desc: 'Generate a professional review from a few notes.',         prompt: 'Write a professional performance review based on these notes. Include strengths, areas for improvement, and a summary.\n\nRole: [ROLE]\nNotes: [YOUR NOTES HERE]' },
  { id: 's3',  category: 'Work',     color: '#e8913a', title: 'Notes → Action Items',       desc: 'Paste raw notes, get a clean action item list.',           prompt: 'Convert these meeting notes into a clean action item list. For each item include: task, owner (if mentioned), deadline (if mentioned).\n\nNotes:\n[PASTE NOTES HERE]' },
  { id: 's4',  category: 'Work',     color: '#e8913a', title: 'Reply to Difficult Email',   desc: 'Draft a calm, professional response.',                     prompt: 'Help me write a professional, calm reply to this email. My goal is to [YOUR GOAL].\n\nOriginal email:\n[PASTE EMAIL HERE]' },
  { id: 's5',  category: 'Writing',  color: '#9b7fd4', title: 'Break Down Any Concept',     desc: 'Get a clear, jargon-free explanation of anything.',        prompt: "Explain the following concept in plain language. No jargon. Use a relatable analogy. Under 150 words.\n\nConcept: [TOPIC HERE]" },
  { id: 's6',  category: 'Writing',  color: '#9b7fd4', title: 'Improve My Writing',         desc: 'Get a cleaner, sharper version of any text.',              prompt: 'Improve this text. Clearer, more concise, professional. Keep my voice and meaning. Show revised version only.\n\n[PASTE YOUR TEXT HERE]' },
  { id: 's7',  category: 'Writing',  color: '#9b7fd4', title: 'Write a LinkedIn Post',      desc: 'Turn a story or idea into an engaging post.',              prompt: 'Write a LinkedIn post from this idea. Strong opening, short paragraphs, end with a question or CTA. 150-200 words.\n\nIdea: [DESCRIBE HERE]' },
  { id: 's8',  category: 'Work',     color: '#e8913a', title: 'Write a Cold Email',         desc: 'Get a personalized outreach email from a few bullet points.', prompt: 'Write a short, personalized cold email based on these details. Professional but human. Include a clear CTA. Under 150 words.\n\nWho I am: [YOUR ROLE]\nWho I am emailing: [THEIR ROLE/COMPANY]\nGoal: [WHAT YOU WANT]\nKey points: [BULLET POINTS]' },
  { id: 's9',  category: 'Work',     color: '#e8913a', title: 'Prep for a Meeting',         desc: 'Get talking points and questions for any meeting.',        prompt: 'Help me prepare for a meeting. Give me: (1) 3 talking points, (2) 2 smart questions to ask, (3) potential objections and how to handle them.\n\nMeeting context: [WHO/WHAT/WHY]' },
  { id: 's10', category: 'Work',     color: '#e8913a', title: 'Write a Project Brief',      desc: 'Turn a rough idea into a clear brief with scope.',         prompt: 'Turn this rough idea into a clear project brief. Include: objective, scope, key deliverables, timeline estimate, and open questions.\n\nIdea: [DESCRIBE YOUR PROJECT]' },
  { id: 's11', category: 'Learning', color: '#4db88c', title: 'Summarize an Article',       desc: 'Get the core ideas from any article fast.',                prompt: 'Summarize this article: (1) main argument, (2) 3 key points, (3) one thing I should do as a result.\n\nArticle:\n[PASTE HERE]' },
  { id: 's12', category: 'Work',     color: '#e8913a', title: 'Draft a Slack Update',       desc: 'Turn bullet points into a polished team update.',          prompt: 'Turn these bullet points into a clear, professional Slack update for my team. Keep it under 150 words. Friendly but informative.\n\nBullets:\n[PASTE BULLETS HERE]' },
  { id: 's13', category: 'Life',     color: '#4d8cd4', title: 'Negotiate My Salary',        desc: 'Get a script and strategy for your next raise.',           prompt: 'Help me negotiate a salary increase. Give me: (1) how to open the conversation, (2) 3 key points to make, (3) how to handle pushback, (4) a specific script I can practice.\n\nMy role: [ROLE]\nCurrent salary: [AMOUNT]\nTarget: [AMOUNT]\nWhy I deserve it: [KEY REASONS]' },
  { id: 's14', category: 'Life',     color: '#4d8cd4', title: 'Plan My Week',               desc: 'Turn your task list into a realistic schedule.',           prompt: 'Help me plan my week. Organize these into a Mon-Fri schedule. Flag anything overloaded.\n\nTasks:\n[LIST TASKS AND MEETINGS]' },
  { id: 's15', category: 'Life',     color: '#4d8cd4', title: 'Generate My Professional Bio',desc: 'LinkedIn, speaker, or company bio in 30 seconds.',         prompt: 'Write a professional third-person bio under 100 words. Warm but credible.\n\nName: [NAME]\nRole: [ROLE]\nBackground: [KEY FACTS]\nWhere this will be used: [LINKEDIN / SPEAKER PAGE / COMPANY SITE]' },
  { id: 's16', category: 'Work',     color: '#e8913a', title: 'Write a Client Proposal Intro',desc: 'Turn service details into a compelling opening.',         prompt: "Write a compelling opening paragraph for a client proposal. Professional, confident, focused on their problem. Under 100 words.\n\nClient: [COMPANY/PERSON]\nTheir problem: [WHAT THEY NEED]\nMy solution: [WHAT I OFFER]\nKey differentiator: [WHY ME]" },
  { id: 's17', category: 'Work',     color: '#e8913a', title: 'Write a Status Report',       desc: 'Turn project updates into a structured report.',          prompt: 'Turn these project updates into a clear status report. Include: summary, completed items, in progress, blockers, and next steps.\n\nUpdates:\n[PASTE YOUR UPDATES HERE]' },
  { id: 's18', category: 'Work',     color: '#e8913a', title: 'Create Interview Questions',  desc: 'Role-specific questions from a job description.',         prompt: 'Generate 10 interview questions for this role. Mix behavioral, technical, and situational. Include what a strong answer looks like for each.\n\nJob description:\n[PASTE JOB DESCRIPTION]' },
  { id: 's19', category: 'Writing',  color: '#9b7fd4', title: 'Rewrite for Tone',            desc: 'Adjust any text to a different tone instantly.',          prompt: 'Rewrite this text in a [TONE] tone. Keep the same meaning and key points. Show the rewritten version only.\n\nTone: [FORMAL / CASUAL / FRIENDLY / AUTHORITATIVE / EMPATHETIC]\n\nText:\n[PASTE TEXT HERE]' },
  { id: 's20', category: 'Learning', color: '#4db88c', title: 'Explain This Code',           desc: 'Plain-English explanation of any code snippet.',          prompt: 'Explain this code in plain English. What does it do, how does it work, and what are the key parts? Assume I understand basic programming but not this specific code.\n\nCode:\n[PASTE CODE HERE]' },
  { id: 's21', category: 'Life',     color: '#4d8cd4', title: 'Write a Thank You Note',      desc: 'Professional or personal gratitude in 60 seconds.',       prompt: 'Write a sincere thank you note. Warm but professional. Under 100 words.\n\nWho: [RECIPIENT]\nWhat for: [REASON]\nTone: [PROFESSIONAL / PERSONAL / HEARTFELT]' },
  { id: 's22', category: 'Life',     color: '#4d8cd4', title: 'Prep for a Tough Conversation',desc: 'Get talking points for any difficult discussion.',        prompt: 'Help me prepare for a difficult conversation. Give me: (1) how to open, (2) key points to make calmly, (3) how to handle defensiveness, (4) how to close constructively.\n\nSituation: [DESCRIBE THE SITUATION]\nMy goal: [WHAT OUTCOME I WANT]' },
  { id: 's23', category: 'Work',     color: '#e8913a', title: 'Summarize a Document',        desc: 'Extract key points from any long document.',              prompt: 'Summarize this document. Give me: (1) one-sentence overview, (2) 5 key points, (3) action items or decisions needed.\n\nDocument:\n[PASTE DOCUMENT HERE]' },
  { id: 's24', category: 'Learning', color: '#4db88c', title: 'Learn From My Mistakes',      desc: 'Analyze what went wrong and how to improve.',             prompt: 'I made a mistake and want to learn from it. Help me analyze: (1) what happened, (2) root cause, (3) what I should do differently next time, (4) one specific action I can take this week to improve.\n\nWhat happened:\n[DESCRIBE THE SITUATION]' },
]

const STARTER_CATS = ['All', 'Work', 'Writing', 'Learning', 'Life']

// ─── Build system prompt ──────────────────────────────────────────────────────
// ─── Build system prompt (v2 — world-class agentic template) ─────────────────
const buildPrompt = (name, desc, userContext, industryCtx) =>
`You are an elite AI systems architect who designs deployment-ready agent system prompts used in production environments.

<task>
Generate a complete, deployment-ready system prompt for an AI agent.
Agent role: ${name}
Agent specialty: ${desc}${industryCtx ? `\nIndustry context: ${industryCtx}` : ''}${userContext ? `\nUser context: ${userContext}` : ''}
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

// ─── CSS ──────────────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --accent: #c8501a;
    --accent-hover: #8c3510;
    --accent-light: rgba(200,80,26,0.08);
    --ink: #0f0e0d;
    --ink-soft: #4a4742;
    --ink-muted: #8a877f;
    --border: rgba(15,14,13,0.10);
    --surface: #ffffff;
    --bg: #f8f7f4;
    --bg-warm: #f2ede5;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #e8e4dc; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #d4c9b0; }

  body { background: #f8f7f4; min-height: 100vh; }

  .agent-card {
    background: #ffffff;
    border: 1px solid #e8e4dc;
    border-radius: 12px;
    padding: 24px 22px 46px;
    cursor: pointer;
    position: relative;
    transition: all 0.18s ease;
    overflow: hidden;
  }
  .agent-card::after {
    content: 'Generate →';
    position: absolute; bottom: 16px; right: 16px;
    font-size: 10px; color: var(--ink-muted); font-family: 'Inter', sans-serif;
    font-weight: 500; letter-spacing: 0.02em; transition: all 0.18s;
  }
  .agent-card:hover {
    border-color: rgba(200,80,26,0.20);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
    background: #fefdf9;
  }
  .agent-card:hover::after { color: var(--ac); }
  .agent-card:active { transform: translateY(-1px); transition-duration: 0.06s; }
  .agent-card.locked { opacity: 0.3; cursor: not-allowed; }
  .agent-card.locked:hover { transform: none; box-shadow: none; border-color: #e8e4dc; background: #ffffff; }
  .agent-card.locked::after { content: '🔒 Pro'; color: #9ca3af; }
  .agent-new-badge {
    position: absolute; top: 12px; right: 12px;
    background: var(--accent); color: #ffffff;
    font-size: 8px; font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; padding: 2px 8px; border-radius: 4px;
  }

  .btn {
    background: none; border: 1px solid #e8e4dc; color: #6b7390;
    padding: 10px 20px; font-family: 'Inter', sans-serif;
    font-size: 12px; font-weight: 500; cursor: pointer;
    border-radius: 8px; transition: all 0.14s; white-space: nowrap;
  }
  .btn:hover { border-color: #d4c9b0; color: #6b7390; background: rgba(0,0,0,0.02); }
  .btn:active { transform: scale(0.98); transition-duration: 0.06s; }
  .btn.primary { background: var(--accent); border-color: var(--accent); color: #ffffff; font-weight: 600; }
  .btn.primary:hover { background: var(--accent-hover); border-color: var(--accent-hover); }
  .btn.primary:active { background: var(--accent-hover); }
  .btn.success { background: #10b981; border-color: #10b981; color: #fff; }
  .btn.danger { border-color: rgba(239,68,68,0.3); color: #ef4444; }
  .btn.danger:hover { background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.5); }
  .btn.accent { border-color: rgba(200,80,26,0.25); color: var(--accent); }
  .btn.accent:hover { background: var(--accent-light); border-color: rgba(200,80,26,0.40); }
  .btn.iron { border-color: #e8e4dc; color: #374151; }
  .btn:disabled { opacity: 0.25; cursor: not-allowed; pointer-events: none; }

  .ind-tab {
    background: none; border: none; border-bottom: 2px solid transparent;
    font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500;
    cursor: pointer; padding: 12px 16px; color: #6b7390;
    transition: all 0.14s; white-space: nowrap; position: relative;
  }
  .ind-tab:hover { color: #1a1a2e; }
  .ind-tab.on { color: var(--accent); border-bottom-color: var(--accent); }
  .ind-tab.on::after {
    content: ''; position: absolute; bottom: -1px; left: 25%; right: 25%;
    height: 4px; background: var(--accent); border-radius: 2px 2px 0 0;
    filter: blur(6px); opacity: 0.5;
  }

  .nav-tab {
    background: none; border: none; border-bottom: 2px solid transparent;
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;
    cursor: pointer; padding: 12px 20px; color: #6b7390; transition: all 0.14s;
    letter-spacing: 0.01em;
  }
  .nav-tab:hover { color: #1a1a2e; }
  .nav-tab.on { color: #1a1a2e; border-bottom-color: var(--accent); font-weight: 600; }

  .pill {
    background: none; border: 1px solid #e8e4dc; color: #6b7390;
    padding: 6px 16px; font-family: 'Inter', sans-serif; font-size: 12px;
    font-weight: 500; cursor: pointer; border-radius: 20px; transition: all 0.14s;
  }
  .pill:hover { border-color: #d4c9b0; color: #1a1a2e; }
  .pill.on { border-color: rgba(200,80,26,0.30); color: var(--accent); background: var(--accent-light); }

  .finput {
    background: #ffffff; border: 1px solid #e8e4dc; color: #1a1a2e;
    padding: 12px 16px; font-family: 'Inter', sans-serif; font-size: 13px;
    border-radius: 8px; outline: none; width: 100%; transition: border-color 0.14s;
    line-height: 1.6;
  }
  .finput:focus { border-color: rgba(200,80,26,0.40); box-shadow: 0 0 0 3px var(--accent-light); }
  .finput::placeholder { color: #9ca3af; }
  textarea.finput { resize: vertical; min-height: 80px; }

  .lib-card {
    background: #ffffff; border: 1px solid #e8e4dc; border-radius: 12px;
    padding: 20px 22px; cursor: pointer; transition: all 0.14s;
  }
  .lib-card:hover { border-color: #d4c9b0; background: #fefdf9; }

  .pout {
    border-left: 2px solid var(--accent);
    padding-left: 24px;
  }
  .pout h2 {
    font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent);
    margin: 28px 0 12px; padding-bottom: 8px; border-bottom: 1px solid #e8e4dc;
  }
  .pout h2:first-child { margin-top: 0; }
  .pout p {
    font-family: 'JetBrains Mono', 'Fira Code', monospace; color: #374151;
    line-height: 1.8; font-size: 13px; margin-bottom: 4px;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
  .fu { animation: fadeUp 0.2s ease forwards; }

  .stream-bar {
    height: 2px; border-radius: 1px; margin-top: 16px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    background-size: 200px 100%;
    animation: shimmer 1.2s ease-in-out infinite;
  }

  .overlay {
    position: fixed; inset: 0; background: rgba(248,247,244,0.85);
    display: flex; align-items: center; justify-content: center;
    z-index: 500; backdrop-filter: blur(16px); animation: fadeUp 0.18s ease;
  }
  .modal {
    background: #ffffff; border: 1px solid #e8e4dc; border-radius: 14px;
    padding: 36px; position: relative; box-shadow: 0 24px 80px rgba(0,0,0,0.12);
  }

  .ind-dropdown-btn {
    background: #ffffff; border: 1px solid #e8e4dc; border-radius: 8px;
    padding: 10px 16px; font-family: 'Inter', sans-serif; font-size: 13px;
    font-weight: 500; color: #1a1a2e; cursor: pointer; transition: all 0.14s;
    display: flex; align-items: center; justify-content: space-between; gap: 8;
    min-width: 220px; width: 100%;
  }
  .ind-dropdown-btn:hover { border-color: rgba(200,80,26,0.25); }

  .ind-dropdown-panel {
    position: absolute; top: 100%; left: 0; right: 0; z-index: 100;
    background: #ffffff; border: 1px solid #e8e4dc; border-radius: 10px;
    margin-top: 4px; max-height: 320px; overflow-y: auto;
    box-shadow: 0 12px 40px rgba(0,0,0,0.1);
    scrollbar-width: thin; scrollbar-color: #e8e4dc transparent;
  }
  .ind-dropdown-panel::-webkit-scrollbar { width: 4px; }
  .ind-dropdown-panel::-webkit-scrollbar-thumb { background: #e8e4dc; border-radius: 2px; }

  .ind-dropdown-item {
    padding: 10px 16px; font-size: 13px; color: #6b7390;
    cursor: pointer; transition: all 0.1s; display: flex;
    align-items: center; justify-content: space-between;
    border: none; background: none; width: 100%; text-align: left;
    font-family: 'Inter', sans-serif;
  }
  .ind-dropdown-item:hover { background: rgba(200,80,26,0.04); color: #1a1a2e; }
  .ind-dropdown-item.on { color: var(--accent); font-weight: 600; }

  .ind-tag {
    display: inline-block; font-size: 9px; font-weight: 500; color: #6b7390;
    background: rgba(0,0,0,0.03); border: 1px solid #e8e4dc;
    padding: 1px 6px; border-radius: 3px; margin-top: 6px;
    letter-spacing: 0.02em;
  }

  .agent-card.pro-locked { position: relative; cursor: pointer; }
  .agent-card.pro-locked .card-content { filter: blur(6px); pointer-events: none; user-select: none; }
  .agent-card.pro-locked::after { display: none; }
  .agent-card.pro-locked:hover { transform: none; border-color: rgba(200,80,26,0.12); }
  .pro-overlay {
    position: absolute; inset: 0; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    background: rgba(248,247,244,0.6); border-radius: 12px;
    cursor: pointer; z-index: 2; transition: background 0.14s;
  }
  .pro-overlay:hover { background: rgba(248,247,244,0.5); }

  .pro-tab-badge {
    display: inline-block; background: var(--accent); color: #ffffff;
    font-size: 8px; font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; padding: 1px 6px; border-radius: 3px;
    margin-left: 6px; vertical-align: middle;
  }

  @media (max-width: 640px) {
    .agent-card { padding: 20px 18px 42px; }
    .modal { padding: 24px; }
    .btn { padding: 10px 16px; }
    .ind-tab { padding: 10px 12px; font-size: 11px; min-height: 44px; }
    .nav-tab { padding: 10px 14px; min-height: 44px; }
  }
`

// ─── Helpers ──────────────────────────────────────────────────────────────────
const parsePrompt = (text) =>
  text.split('\n').map((line, i) => {
    if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>
    if (line.trim() === '') return <br key={i} />
    return <p key={i}>{line.replace(/\*\*(.*?)\*\*/g, '$1')}</p>
  })

const fmtDate = (ts) =>
  new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

// ─── App ──────────────────────────────────────────────────────────────────────
export default function PromptForge() {
  const searchParams = useSearchParams()
  const { user, isSignedIn, isLoaded } = useUser()
  const { openSignIn } = useClerk()

  const isPro = !!user?.publicMetadata?.isPro
  const usage = user?.publicMetadata?.usage || 0

  const [view, setView]           = useState('forge')
  const [industry, setIndustry]   = useState(() => {
    const param = searchParams.get('industry')
    if (param) {
      const match = INDUSTRY_TABS.find(
        name => name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === param
      )
      if (match) return match
    }
    return 'General'
  })
  const [selected, setSelected]   = useState(null)
  const [prompt, setPrompt]       = useState('')
  const [loading, setLoading]     = useState(false)
  const [dots, setDots]           = useState('')
  const [copied, setCopied]       = useState(false)
  const [saved, setSaved]         = useState(false)
  const [library, setLibrary]     = useState([])
  const [modal, setModal]         = useState(null)
  const [custName, setCustName]   = useState('')
  const [custDesc, setCustDesc]   = useState('')
  const [libSearch, setLibSearch] = useState('')
  const [starterCat, setStarterCat] = useState('All')
  const [starterCopied, setStarterCopied] = useState(null)
  const [showWalkthrough, setShowWalkthrough] = useState(false)
  const [wStep, setWStep]         = useState(0)
  const [mounted, setMounted]     = useState(false)
  const [contextAgent, setContextAgent] = useState(null)
  const [userContext, setUserContext]   = useState('')
  const [agentSearch, setAgentSearch]   = useState('')
  const [agentFilter, setAgentFilter]  = useState('All')
  const [indDropOpen, setIndDropOpen]   = useState(false)
  const [proChecked, setProChecked]     = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      setLibrary(JSON.parse(localStorage.getItem(LS_LIB) || '[]'))
      if (!localStorage.getItem(LS_SEEN)) setShowWalkthrough(true)
    } catch {}
  }, [])

  useEffect(() => {
    if (!loading) return
    const t = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 380)
    return () => clearInterval(t)
  }, [loading])

  // Funnel: browse — fires when user changes industry or searches agents
  useEffect(() => { if (mounted) track('funnel_browse') }, [industry, agentSearch])

  // Funnel: signup — fires when user signs in
  useEffect(() => { if (isSignedIn) track('funnel_signup') }, [isSignedIn])

  // Sync Pro status from Stripe on sign-in — verify-subscription writes isPro into Clerk metadata,
  // then user.reload() refreshes the in-memory Clerk user so isPro reads correctly.
  useEffect(() => {
    if (!isSignedIn || !isLoaded) return
    fetch('/api/verify-subscription', { method: 'POST' })
      .then(r => r.json())
      .then(data => { if (data.isPro) user.reload(); setProChecked(true) })
      .catch(() => { setProChecked(true) })
  }, [isSignedIn, isLoaded])

  const FREE_LIMIT = 3
  const atLimit = !isPro && usage >= FREE_LIMIT
  const remaining = Math.max(0, FREE_LIMIT - usage)

  const closeWalkthrough = () => {
    setShowWalkthrough(false); setWStep(0)
    try { localStorage.setItem(LS_SEEN, 'true') } catch {}
  }

  const activatePro = async () => {
    if (!isSignedIn) { openSignIn(); return }
    track('funnel_convert')
    try {
      setModal(null)
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch (err) {
      console.error('Checkout error:', err)
    }
  }

  const saveToLib = () => {
    if (!prompt || saved) return
    const entry = {
      id: Date.now(),
      agentName: selected?.name || 'Custom',
      prompt,
      savedAt: Date.now(),
    }
    const updated = [entry, ...library]
    setLibrary(updated)
    setSaved(true)
    try { localStorage.setItem(LS_LIB, JSON.stringify(updated)) } catch {}
  }

  const deleteFromLib = (id) => {
    const updated = library.filter(item => item.id !== id)
    setLibrary(updated)
    if (modal?.id === id) setModal(null)
    try { localStorage.setItem(LS_LIB, JSON.stringify(updated)) } catch {}
  }

  const handleAgentClick = (agent) => {
    // Require sign-in to generate
    if (!isSignedIn) { openSignIn(); return }
    // Wait for Pro check to resolve before proceeding — prevents isPro race condition
    if (!proChecked) return
    if (atLimit) { setModal('upgrade'); return }
    // Fixed prompts skip context step entirely
    if (agent.fixedPrompt) {
      generate(agent)
      return
    }
    // Only Pro users get the context personalization modal
    if (isPro) {
      setContextAgent(agent)
      setUserContext('')
    } else {
      generate(agent)
    }
  }

  const generate = async (agent, context) => {
    if (!isSignedIn) { openSignIn(); return }
    if (atLimit) { setModal('upgrade'); return }
    track('funnel_generate', { agent: agent.name, industry: agent._industry || industry })
    setContextAgent(null)
    setSelected(agent)
    setPrompt('')
    setSaved(false)
    setCopied(false)

    // Fixed prompts skip the API
    if (agent.fixedPrompt) {
      setPrompt(agent.fixedPrompt)
      // Track usage server-side
      fetch('/api/track-usage', { method: 'POST' }).catch(() => {})
      return
    }

    setLoading(true)
    try {
      const body = { agentName: agent.name, agentDesc: agent.desc, industry: agent._industry || industry }
      if (context) body.userContext = context
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      // Track usage server-side
      fetch('/api/track-usage', { method: 'POST' }).catch(() => {})
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let result = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        result += decoder.decode(value, { stream: true })
        setPrompt(result)
      }
      setPrompt(result)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const copy = (text) => {
    const suffix = selected?.qualityScore ? '\n\n--- Quality verified by Prompt Forge' : ''
    navigator.clipboard.writeText(text + suffix)
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }

  const reset = () => { setSelected(null); setPrompt(''); setSaved(false) }

  const totalAgents = Object.values(INDUSTRIES).flat().length
  const totalIndustries = INDUSTRY_TABS.length
  const isSearching = agentSearch.trim().length > 0
  const searchLower = agentSearch.trim().toLowerCase()

  // Build filtered agent list (search + industry + filter)
  const getVisibleAgents = () => {
    let agents = []
    if (isSearching) {
      // Search across all industries
      for (const [ind, list] of Object.entries(INDUSTRIES)) {
        list.forEach(a => {
          if (a.name.toLowerCase().includes(searchLower) || a.desc.toLowerCase().includes(searchLower)) {
            agents.push({ ...a, _industry: ind })
          }
        })
      }
    } else {
      agents = (INDUSTRIES[industry] || []).map(a => ({ ...a, _industry: industry }))
    }
    // Apply filter
    if (agentFilter === 'Free') agents = agents.filter(a => !PRO_INDUSTRIES.includes(a._industry))
    if (agentFilter === 'Pro Only') agents = agents.filter(a => PRO_INDUSTRIES.includes(a._industry))
    if (agentFilter === 'New') agents = agents.filter(a => a.isNew)
    return agents
  }
  const visibleAgents = getVisibleAgents()

  const visibleLib = library.filter(i => !libSearch || i.agentName.toLowerCase().includes(libSearch.toLowerCase()))
  const visibleStarter = STARTER_PROMPTS.filter(p => starterCat === 'All' || p.category === starterCat)

  if (!mounted || !isLoaded) return null

  return (
    <div style={{ minHeight: '100vh', background: '#f8f7f4', color: '#1a1a2e', fontFamily: "'Inter', sans-serif", position: 'relative' }}>
      <style>{CSS}</style>


      {/* ? Button */}
      <button title="How to use Prompt Forge" onClick={() => { setWStep(0); setShowWalkthrough(true) }} style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 400,
        width: 34, height: 34, borderRadius: '50%',
        background: '#ffffff', border: '1px solid #e8e4dc',
        color: '#6b7390', fontFamily: "'Inter', sans-serif",
        fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all 0.14s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#c8501a'; e.currentTarget.style.color = '#c8501a' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e4dc'; e.currentTarget.style.color = '#6b7390' }}
      >?</button>

      {/* Walkthrough Modal */}
      {showWalkthrough && (
        <div className="overlay" onClick={closeWalkthrough}>
          <div className="modal" style={{ maxWidth: 480, width: '92%' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
              {WALKTHROUGH.map((_, i) => (
                <div key={i} style={{ height: 2, flex: 1, borderRadius: 2, background: i <= wStep ? '#c8501a' : '#e8e4dc', transition: 'background 0.2s' }} />
              ))}
            </div>
            <div style={{ fontSize: 32, marginBottom: 14 }}>{WALKTHROUGH[wStep].icon}</div>
            <div style={{ fontSize: 10, color: '#6b7390', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
              Step {WALKTHROUGH[wStep].step} of {WALKTHROUGH.length}
            </div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 22, color: '#1a1a2e', marginBottom: 12 }}>
              {WALKTHROUGH[wStep].title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#9ca3af', fontSize: 14, lineHeight: 1.8, marginBottom: 28 }}>
              {WALKTHROUGH[wStep].body}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn" style={{ visibility: wStep === 0 ? 'hidden' : 'visible' }} onClick={() => setWStep(s => s - 1)}>← Back</button>
              {wStep < WALKTHROUGH.length - 1
                ? <button className="btn primary" onClick={() => setWStep(s => s + 1)}>Next →</button>
                : <button className="btn primary" title="Close walkthrough and start" onClick={closeWalkthrough}>Start Generating →</button>
              }
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {modal === 'upgrade' && (
        <div className="overlay" onClick={() => setModal(null)}>
          <div className="modal" style={{ maxWidth: 460, width: '90%' }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 11, color: '#c8501a', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 600 }}>Upgrade to unlock</div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 26, color: '#1a1a2e', marginBottom: 10 }}>
              Upgrade to Pro
            </h2>
            <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.7, marginBottom: 22 }}>
              {atLimit ? `You've used your ${FREE_LIMIT} free generates. ` : ''}Unlock unlimited access to all agents and features.
            </p>
            <div style={{ background: '#f8f7f4', border: '1px solid #e8e4dc', borderRadius: 10, padding: 18, marginBottom: 24 }}>
              {['Unlimited prompt generation', 'Unlimited library saves', 'Custom agent builder', 'All industry archetypes', 'Team sharing (coming soon)'].map(f => (
                <div key={f} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 13, color: '#9ca3af', alignItems: 'center' }}>
                  <span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{f}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 32, color: '#1a1a2e' }}>$12</span>
                <span style={{ color: '#6b7390', fontSize: 13 }}> /mo</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn" onClick={() => setModal(null)}>Cancel</button>
                <button className="btn primary" onClick={activatePro}>Upgrade Now →</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Agent Modal */}
      {modal === 'custom' && (
        <div className="overlay" onClick={() => setModal(null)}>
          <div className="modal" style={{ maxWidth: 440, width: '90%' }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 11, color: '#60a5fa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 600 }}>Custom Archetype</div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 22, color: '#d4a84d', marginBottom: 20, letterSpacing: '0.02em' }}>
              Forge Your Own Agent
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
              <div>
                <label style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500, display: 'block', marginBottom: 6 }}>Agent Name</label>
                <input className="finput" placeholder="e.g. Compliance Officer" value={custName} onChange={e => setCustName(e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500, display: 'block', marginBottom: 6 }}>Specialty</label>
                <textarea className="finput" placeholder="e.g. Regulatory compliance, policy interpretation, audit prep..." value={custDesc} onChange={e => setCustDesc(e.target.value)} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button className="btn" onClick={() => setModal(null)}>Cancel</button>
              <button className="btn primary" disabled={!custName.trim() || !custDesc.trim()}
                onClick={() => {
                  const n = custName.trim(), d = custDesc.trim()
                  setModal(null); setView('forge')
                  generate(n, d, { id: 'custom', name: n, desc: d, color: '#4d8cd4', icon: '✦' })
                  setCustName(''); setCustDesc('')
                }}
              >Generate Prompt →</button>
            </div>
          </div>
        </div>
      )}

      {/* Library Item Modal */}
      {modal?.savedAt && (
        <div className="overlay" onClick={() => setModal(null)}>
          <div className="modal" style={{ maxWidth: 660, width: '92%', maxHeight: '84vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: modal.agentColor, fontSize: 18 }}>{modal.agentIcon}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, color: '#1a1a2e' }}>{modal.agentName}</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn primary" title="Copy prompt to clipboard" onClick={() => copy(modal.prompt)}>{copied ? '✓ Copied' : 'Copy'}</button>
                <button className="btn danger" title="Delete this prompt" onClick={() => deleteFromLib(modal.id)}>Delete</button>
                <button className="btn" onClick={() => setModal(null)}>✕</button>
              </div>
            </div>
            <div className="pout fu">{parsePrompt(modal.prompt)}</div>
          </div>
        </div>
      )}

      {/* ── Main Layout ── */}
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '56px 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <h1 style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
              fontSize: 'clamp(22px, 4vw, 30px)', letterSpacing: '-0.01em', lineHeight: 1,
              color: '#1a1a2e',
              marginBottom: 10,
            }}>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>Prompt</span>
              <span style={{ color: '#c8501a' }}>Forge</span>
            </h1>
            <p style={{ fontSize: 14, color: '#4a4742', lineHeight: 1.6, maxWidth: 420 }}>
              Generate deployment-ready AI agent prompts in one click. Pick an industry, pick a role, deploy.
            </p>
          </div>

          {/* Auth + Usage widget */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ background: '#ffffff', border: '1px solid #e8e4dc', borderRadius: 12, padding: '16px 20px', minWidth: 180 }}>
              {!isSignedIn ? (
                <div>
                  <div style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500, marginBottom: 10 }}>Sign in to generate prompts</div>
                  <SignInButton mode="redirect">
                    <button className="btn primary" style={{ width: '100%', padding: '7px 0', fontSize: 12 }}>
                      Sign In →
                    </button>
                  </SignInButton>
                </div>
              ) : isPro ? (
                <div>
                  <div style={{ fontSize: 11, color: '#6b7390', fontWeight: 500, marginBottom: 6 }}>Plan</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <span style={{ color: '#c8501a', fontSize: 14 }}>★</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 13, color: '#1a1a2e' }}>Pro</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>Free Plan</span>
                    <span style={{ fontSize: 12, color: remaining > 0 ? '#c8501a' : '#ef4444', fontWeight: 600 }}>{remaining}/{FREE_LIMIT} left</span>
                  </div>
                  <div style={{ background: '#e8e4dc', borderRadius: 3, height: 3, marginBottom: 12, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', borderRadius: 2,
                      width: `${Math.min(100, (usage / FREE_LIMIT) * 100)}%`,
                      background: remaining > 0 ? '#c8501a' : '#ef4444',
                      transition: 'width 0.4s ease',
                      boxShadow: 'none',
                    }} />
                  </div>
                  <button className="btn primary" title="Unlock unlimited generates and all industries" style={{ width: '100%', padding: '7px 0', fontSize: 12 }} onClick={() => setModal('upgrade')}>
                    Upgrade to Pro · $12/mo
                  </button>
                </div>
              )}
            </div>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: { width: 36, height: 36 },
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>

        {/* Main Nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e8e4dc', marginBottom: 0 }}>
          <div style={{ display: 'flex' }}>
            <button className={`nav-tab ${view === 'forge' ? 'on' : ''}`} onClick={() => { setView('forge'); reset() }}>Forge</button>
            <button className={`nav-tab ${view === 'library' ? 'on' : ''}`} onClick={() => setView('library')}>
              Library {library.length > 0 && <span style={{ color: '#374151', marginLeft: 3 }}>({library.length})</span>}
            </button>
            <button className={`nav-tab ${view === 'starter' ? 'on' : ''}`} onClick={() => setView('starter')}>Starter</button>
          </div>
          <button className="btn accent" title="Build a prompt for any role (Pro)" style={{ fontSize: 12 }} onClick={() => {
            if (!isSignedIn) { openSignIn(); return }
            isPro ? setModal('custom') : setModal('upgrade')
          }}>
            + Custom Agent <span className="pro-tab-badge" style={{ marginLeft: 4 }}>PRO</span>
          </button>
        </div>

        {/* ══ FORGE VIEW ══ */}
        {view === 'forge' && !selected && (
          <div className="fu">
            {/* Search bar */}
            <div style={{ position: 'relative', marginBottom: 12, marginTop: 8 }}>
              <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#374151', fontSize: 14, pointerEvents: 'none' }}>🔍</span>
              <input
                className="finput"
                style={{ paddingLeft: 38 }}
                placeholder={`Search ${totalAgents} agents across ${totalIndustries} industries...`}
                value={agentSearch}
                onChange={e => setAgentSearch(e.target.value)}
              />
            </div>

            {/* Filter pills + Industry dropdown row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
              {/* Filter pills */}
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['All', 'Free', 'Pro Only', 'New'].map(f => (
                  <button key={f} className={`pill ${agentFilter === f ? 'on' : ''}`} title={{All:'Show all agents',Free:'Show free-tier agents only','Pro Only':'Show Pro-only agents',New:'Show recently added agents'}[f]} onClick={() => setAgentFilter(f)}>{f}</button>
                ))}
              </div>

              {/* Industry dropdown */}
              {!isSearching && (
                <div style={{ position: 'relative', marginLeft: 'auto' }}>
                  <button className="ind-dropdown-btn" title="Filter by industry" onClick={() => setIndDropOpen(!indDropOpen)}>
                    <span>{industry}{PRO_INDUSTRIES.includes(industry) && <span className="pro-tab-badge">PRO</span>}</span>
                    <span style={{ fontSize: 10, color: '#9ca3af' }}>{indDropOpen ? '▲' : '▼'}</span>
                  </button>
                  {indDropOpen && (
                    <div className="ind-dropdown-panel">
                      {INDUSTRY_TABS.slice().sort().map(ind => (
                        <button key={ind} className={`ind-dropdown-item ${industry === ind ? 'on' : ''}`}
                          onClick={() => { setIndustry(ind); setIndDropOpen(false) }}>
                          <span>{ind}</span>
                          {PRO_INDUSTRIES.includes(ind) && <span className="pro-tab-badge">PRO</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Agent grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
              {visibleAgents.map((agent, i) => {
                const agentIndustry = agent._industry
                const locked = !isPro && i >= FREE_LIMIT && atLimit && !isSearching
                const proLocked = !isPro && PRO_INDUSTRIES.includes(agentIndustry)
                return (
                  <div key={agent.id + '-' + agentIndustry}
                    className={`agent-card ${locked ? 'locked' : ''} ${proLocked ? 'pro-locked' : ''}`}
                    style={{ '--ac': agent.color }}
                    onClick={() => proLocked ? setModal('upgrade') : !locked && handleAgentClick(agent)}
                  >
                    {proLocked && (
                      <div className="pro-overlay">
                        <div style={{ fontSize: 24, marginBottom: 8 }}>🔒</div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: '#c8501a', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Pro Only</div>
                      </div>
                    )}
                    <div className={proLocked ? 'card-content' : undefined}>
                      {agent.isNew && <span className="agent-new-badge">NEW</span>}
                      <div style={{ fontSize: 18, marginBottom: 10, color: agent.color, opacity: 0.9 }}>{agent.icon}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: '#1a1a2e', marginBottom: 6, lineHeight: 1.4 }}>{agent.name}</div>
                      <div style={{ fontSize: 11, color: '#6b7390', lineHeight: 1.6 }}>{agent.desc}</div>
                      {isSearching && <div className="ind-tag">{agentIndustry}</div>}
                    </div>
                  </div>
                )
              })}
              {visibleAgents.length === 0 && (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 48, color: '#374151', fontSize: 13 }}>
                  No agents match your search{agentFilter !== 'All' ? ' and filter' : ''}.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ══ CONTEXT PANEL ══ */}
        {contextAgent && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(248,247,244,0.85)', backdropFilter: 'blur(16px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000, padding: 20,
          }} onClick={e => { if (e.target === e.currentTarget) setContextAgent(null) }}
             onKeyDown={e => { if (e.key === 'Escape') setContextAgent(null) }}>
            <div style={{
              background: '#ffffff', border: '1px solid #e8e4dc', borderRadius: 14,
              padding: 36, maxWidth: 480, width: '100%',
              boxShadow: '0 24px 80px rgba(0,0,0,0.12)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 22 }}>{contextAgent.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 15, color: '#1a1a2e' }}>{contextAgent.name}</div>
                  <div style={{ fontSize: 12, color: '#6b7390' }}>{contextAgent.desc}</div>
                </div>
              </div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#9ca3af', marginBottom: 6 }}>
                Describe your situation (optional)
              </label>
              <textarea
                className="finput"
                rows={3}
                placeholder="e.g., I'm a solo compliance officer at a 50-person fintech startup"
                value={userContext}
                onChange={e => setUserContext(e.target.value)}
                autoFocus
                style={{ width: '100%', resize: 'vertical', marginBottom: 16, minHeight: 72 }}
              />
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <button className="btn primary" style={{ flex: 1 }}
                  onClick={() => generate(contextAgent, userContext.trim() || undefined)}>
                  Generate →
                </button>
                <button className="btn" style={{ flex: 1 }}
                  onClick={() => generate(contextAgent)}>
                  Skip — Generate without context
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ══ OUTPUT VIEW ══ */}
        {view === 'forge' && selected && (
          <div className="fu" style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button className="btn" title="Back to agent list" onClick={reset}>← Back</button>
                <span style={{ color: selected.color, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14 }}>
                  {selected.icon} {selected.name}
                </span>
              </div>
              {!loading && prompt && (
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn accent" title="Generate a new version of this prompt" onClick={() => generate(selected, userContext || undefined)}>Regenerate ↻</button>
                  {!isPro
                    ? <button className="btn" title="Upgrade to Pro to save prompts" onClick={() => isSignedIn ? setModal('upgrade') : openSignIn()}>🔒 Save to Library — Pro</button>
                    : !saved
                      ? <button className="btn accent" title="Save this prompt to your personal library" onClick={saveToLib}>+ Save to Library</button>
                      : <button className="btn iron" disabled>✓ Saved</button>
                  }
                  <button className={`btn ${copied ? 'success' : 'primary'}`} title={copied ? 'Copied to clipboard' : 'Copy prompt to clipboard'} onClick={() => copy(prompt)}>
                    {copied ? '✓ Copied!' : 'Copy Prompt'}
                  </button>
                </div>
              )}
            </div>

            <div style={{
              background: '#ffffff',
              border: `1px solid ${loading ? 'rgba(200,80,26,0.12)' : '#e8e4dc'}`,
              borderRadius: 12, padding: 36, minHeight: 360,
              transition: 'border-color 0.18s',
            }}>
              {loading && !prompt ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, gap: 20 }}>
                  <div style={{
                    width: 32, height: 32,
                    border: '2px solid #e8e4dc',
                    borderTop: '2px solid #c8501a',
                    borderRadius: '50%', animation: 'spin 0.75s linear infinite',
                  }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#1a1a2e', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
                      Generating{dots}
                    </div>
                    <div style={{ color: '#374151', fontSize: 12 }}>{selected.name}</div>
                  </div>
                </div>
              ) : prompt ? (
                <div>
                  <div className="pout fu">{parsePrompt(prompt)}</div>
                  {loading && <div className="stream-bar" />}
                  {!loading && selected?.qualityScore && (
                    <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #e8e4dc' }}>
                      <QualityBadge
                        score={selected.qualityScore}
                        tier1Passed={selected.tier1Pass ?? true}
                        lastValidated={selected.validatedAt}
                      />
                    </div>
                  )}
                </div>
              ) : null}
            </div>

            {!loading && prompt && (
              <div style={{ marginTop: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#4b5563', flexWrap: 'wrap', gap: 4 }}>
                  <span>Generated fresh by Claude · {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {prompt.split(/\s+/).filter(Boolean).length} words · Every prompt is unique</span>
                  <span style={{ color: '#10b981', fontWeight: 500 }}>✓ READY TO DEPLOY</span>
                </div>
                {!isPro && (
                  <div style={{ marginTop: 8, fontSize: 11, color: '#374151' }}>
                    ✨ Pro users get personalized prompts tailored to their specific role and situation
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ══ LIBRARY VIEW ══ */}
        {view === 'library' && (
          <div className="fu" style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <input className="finput" placeholder="Search library..." value={libSearch}
                onChange={e => setLibSearch(e.target.value)} style={{ maxWidth: 280 }} />
              <span style={{ fontSize: 12, color: '#6b7390', whiteSpace: 'nowrap' }}>
                {visibleLib.length} prompt{visibleLib.length !== 1 ? 's' : ''}
              </span>
            </div>

            {visibleLib.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '56px 20px' }}>
                <div style={{ fontSize: 32, marginBottom: 14, opacity: 0.2 }}>📚</div>
                <div style={{ color: '#4b5563', fontSize: 14, marginBottom: 18 }}>
                  {libSearch ? 'No prompts match your search' : 'Your library awaits its first forging'}
                </div>
                <button className="btn primary" onClick={() => { setView('forge'); reset() }}>Start Generating →</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 9 }}>
                {visibleLib.map(item => (
                  <div key={item.id} className="lib-card" onClick={() => setModal(item)}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: item.agentColor, fontSize: 15 }}>{item.agentIcon}</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: '#1a1a2e' }}>{item.agentName}</span>
                      </div>
                      <button className="btn steel" style={{ padding: '2px 7px', fontSize: 9 }}
                        title="Delete this prompt" onClick={e => { e.stopPropagation(); deleteFromLib(item.id) }}>✕</button>
                    </div>
                    <div style={{ fontSize: 12, color: '#6b7390', marginBottom: 10, lineHeight: 1.5 }}>
                      {item.agentDesc}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 11, color: '#4b5563' }}>{fmtDate(item.savedAt)}</span>
                      <span style={{ fontSize: 11, color: '#4b5563' }}>{item.prompt.split(/\s+/).filter(Boolean).length} words</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ══ STARTER VIEW ══ */}
        {view === 'starter' && (
          <div className="fu" style={{ marginTop: 24 }}>
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.8, marginBottom: 16 }}>
                New to AI? These are ready-to-use prompts for everyday tasks. Copy, paste into any AI tool, and fill in the brackets.
              </p>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {STARTER_CATS.map(c => (
                  <button key={c} className={`pill ${starterCat === c ? 'on' : ''}`} onClick={() => setStarterCat(c)}>{c}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 9 }}>
              {visibleStarter.map(item => (
                <div key={item.id} style={{
                  background: '#ffffff',
                  border: '1px solid #e8e4dc', borderRadius: 10,
                  padding: '18px 18px 16px', position: 'relative', transition: 'border-color 0.16s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = item.color + '88'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#e8e4dc'}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8, gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 10, color: item.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 5 }}>{item.category}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: '#1a1a2e', lineHeight: 1.4 }}>{item.title}</div>
                    </div>
                    <button
                      className={`btn ${starterCopied === item.id ? 'success' : 'accent'}`}
                      style={{ padding: '4px 10px', fontSize: 9, flexShrink: 0 }}
                      onClick={() => {
                        navigator.clipboard.writeText(item.prompt)
                        setStarterCopied(item.id)
                        setTimeout(() => setStarterCopied(null), 2000)
                      }}
                    >{starterCopied === item.id ? '✓' : 'Copy'}</button>
                  </div>
                  <div style={{ fontSize: 12, color: '#6b7390', lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</div>
                  <div style={{
                    background: '#f8f7f4', border: '1px solid #e8e4dc', borderRadius: 6,
                    padding: '10px 12px', fontSize: 11, color: '#4b5563', lineHeight: 1.7,
                    fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'pre-wrap',
                    maxHeight: 72, overflow: 'hidden',
                  }}>
                    {item.prompt.slice(0, 110)}{item.prompt.length > 110 ? '...' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: 60, paddingTop: 18, borderTop: '1px solid #e8e4dc', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: '#9ca3af' }}>Prompt Forge</span>
          <span style={{ fontSize: 11, color: '#9ca3af' }}>Powered by Claude</span>
        </div>
      </div>
    </div>
  )
}


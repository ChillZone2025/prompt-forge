'use client'

import { useState, useEffect } from 'react'

const FREE_LIMIT = 5
const LS_USAGE = 'pf_usage'
const LS_PRO = 'pf_pro'
const LS_LIB = 'pf_library'
const LS_SEEN = 'pf_seen'

// ─── Walkthrough ─────────────────────────────────────────────────────────────
const WALKTHROUGH = [
  { step: 1, icon: '⚒', title: 'Choose Your Industry', body: 'Select an industry from the top nav — General, Healthcare, Finance, and more. Each contains high-demand agent archetypes curated for that sector.' },
  { step: 2, icon: '🔥', title: 'Strike the Forge', body: 'Click any agent card. Claude generates a complete, deployment-ready system prompt in seconds — identity, capabilities, behavior rules, and an activation phrase.' },
  { step: 3, icon: '📋', title: 'Copy & Deploy', body: 'Hit Copy and paste into the System Prompt field of any AI tool — Claude, ChatGPT, or your own API. Your agent is ready.' },
  { step: 4, icon: '📚', title: 'Build Your Library', body: 'Save your best prompts. They persist across sessions so your personal agent arsenal grows over time.' },
]

// ─── Industry Agent Data ──────────────────────────────────────────────────────
const INDUSTRIES = {
  General: [{ id: 'sop_gen', icon: '📋', name: 'SOP Generator', desc: 'Upload any file → get a full Standard Operating Procedure', color: '#f5c518', isNew: true, fixedPrompt: `You are a Technical Writer and Process Consultant. Your goal is to create a comprehensive Standard Operating Procedure (SOP) for how to generate an uploaded file from scratch.

Follow these instructions strictly:

ANALYZE: Review the uploaded file to understand its structure, data points, and formatting.

INQUIRY PHASE: Do NOT write the SOP yet. Instead, ask me one question at a time to determine the manual or automated steps, software used, data sources, and approvals required to create this file.

ITERATE: Wait for my answer before asking the next question. Continue until you have enough information to map the entire end-to-end process.

DRAFTING PHASE: Once you have covered the process, tell me you are ready to generate the SOP.

The final SOP must include:
1. Title & Version Control
2. Objective: The purpose of the process
3. Scope: Who performs this and what systems are involved
4. Prerequisites: Access levels, software, or baseline data needed
5. Step-by-Step Instructions: Clear, numbered actions (including pro-tips for accuracy)
6. Troubleshooting/Exceptions: How to handle common errors or discrepancies
7. Review & Approval: Who signs off on the final output

## ACTIVATION PHRASE
"I am uploading a file. Please analyze it and begin the SOP inquiry process."` },
    { id: 'treasury',    icon: '◈', name: 'FX Treasury Analyst',    desc: 'Hedging, derivatives, currency risk',       color: '#e8913a' },
    { id: 'cyber',       icon: '⬡', name: 'Cyber Investigator',     desc: 'Threat hunting, forensics, OSINT',          color: '#4db8c8' },
    { id: 'code_review', icon: '⟨⟩',name: 'Code Reviewer',          desc: 'Security, performance, best practices',     color: '#9b7fd4' },
    { id: 'data',        icon: '∿', name: 'Data Analyst',           desc: 'SQL, Python, insight generation',           color: '#4db88c' },
    { id: 'legal',       icon: '⚖', name: 'Legal Researcher',       desc: 'Case law, contracts, compliance',           color: '#d4834d' },
    { id: 'pm',          icon: '◎', name: 'Project Manager',        desc: 'Agile, risk, stakeholder comms',            color: '#c46896' },
    { id: 'security',    icon: '⬛', name: 'Security Auditor',       desc: 'Pen testing, vulnerability assessment',     color: '#c44d4d' },
    { id: 'finance',     icon: '∑', name: 'Financial Modeler',      desc: 'DCF, LBO, valuation, scenarios',            color: '#d4a84d' },
    { id: 'market',      icon: '◉', name: 'Market Researcher',      desc: 'Competitive intel, trend analysis',         color: '#4d8cd4' },
    { id: 'support',     icon: '◷', name: 'Customer Support',       desc: 'De-escalation, resolution, empathy',       color: '#4dc87a' },
    { id: 'content',     icon: '✦', name: 'Content Strategist',     desc: 'SEO, brand voice, editorial calendar',      color: '#a04dc8' },
    { id: 'devops',      icon: '∞', name: 'DevOps Engineer',        desc: 'CI/CD, infra, incident response',           color: '#4daed4' },
  ],
  Healthcare: [
    { id: 'med_scribe',  icon: '✍', name: 'Medical Scribe',         desc: 'Clinical notes, EMR integration',           color: '#4db88c' },
    { id: 'prior_auth',  icon: '📋', name: 'Prior Auth Agent',      desc: 'Payer workflows, claim denial reduction',    color: '#4d8cd4' },
    { id: 'rcm',         icon: '💰', name: 'RCM Specialist',        desc: 'Billing, coding, A/R follow-ups',           color: '#d4a84d' },
    { id: 'triage',      icon: '🏥', name: 'Patient Triage Agent',  desc: 'Symptom checking, care routing',            color: '#c44d4d' },
    { id: 'diagnostics', icon: '🔬', name: 'Diagnostics Assistant', desc: 'Radiology & dermatology flagging',          color: '#9b7fd4' },
  ],
  Finance: [
    { id: 'close_agent', icon: '📊', name: 'Autonomous Close Agent', desc: 'Financial close, multi-entity consolidation', color: '#d4a84d' },
    { id: 'treasury_liq',icon: '💧', name: 'Treasury & Liquidity',  desc: 'Cash forecasting, working capital mgmt',    color: '#4daed4' },
    { id: 'audit_comp',  icon: '🔍', name: 'Audit & Compliance',    desc: 'Fraud monitoring, regulatory drift',        color: '#c44d4d' },
    { id: 'credit_risk', icon: '📈', name: 'Credit Risk Underwriter',desc: 'Automated scoring, loan analysis',          color: '#4db88c' },
    { id: 'tax_agent',   icon: '🧾', name: 'Tax Strategy Agent',    desc: 'Real-time tax tracking, automated filing',  color: '#d4834d' },
  ],
  'Comms & Sales': [
    { id: 'sdr',         icon: '📣', name: 'Autonomous SDR',        desc: 'Prospecting, outreach, lead qualification', color: '#e8913a' },
    { id: 'repurpose',   icon: '♻', name: 'Content Repurposer',    desc: 'One asset → 50+ social posts',              color: '#9b7fd4' },
    { id: 'voice_ai',    icon: '📞', name: 'Voice AI Agent',        desc: '24/7 call center, appointment booking',     color: '#4db88c' },
    { id: 'market_intel',icon: '🧠', name: 'Market Intelligence',   desc: 'Competitor pricing, strategic alerts',      color: '#4d8cd4' },
    { id: 'pr_agent',    icon: '📰', name: 'PR & Media Agent',      desc: 'Journalist targeting, pitch drafting',      color: '#c46896' },
  ],
  Education: [
    { id: 'micro_learn', icon: '🎯', name: 'Micro-Learning Agent',  desc: 'Custom curricula, progress-based',          color: '#4daed4' },
    { id: 'grading',     icon: '✅', name: 'Grading & Feedback',    desc: 'Essays, coding critiques, instant feedback',color: '#4db88c' },
    { id: 'career_track',icon: '🗺', name: 'Career Growth Tracker', desc: 'Skills vs job market, certification paths', color: '#d4a84d' },
    { id: 'admissions',  icon: '🎓', name: 'Admissions Agent',      desc: 'Inquiry to enrollment pipeline mgmt',       color: '#9b7fd4' },
    { id: 'research_asst',icon:'🔭', name: 'Research Assistant',    desc: 'Academic paper synthesis, doctoral support', color: '#d4834d' },
  ],
  'Personal Finance': [
    { id: 'fin_advisor', icon: '🧭', name: 'Financial Advisor',     desc: 'Full-context accounts, taxes, investments', color: '#4db88c' },
    { id: 'sub_nego',    icon: '✂', name: 'Subscription Negotiator',desc: 'Find, cancel, renegotiate bills',           color: '#e8913a' },
    { id: 'tax_opt',     icon: '🔖', name: 'Tax Optimizer',         desc: 'Year-round deduction scanning',             color: '#d4a84d' },
    { id: 'micro_invest',icon: '🌱', name: 'Micro-Investing Agent', desc: 'Goal-based portfolio rebalancing',          color: '#4d8cd4' },
    { id: 'fraud_watch', icon: '🛡', name: 'Fraud Watchdog',        desc: 'Credit monitoring, identity protection',    color: '#c44d4d' },
  ],
  Parenting: [
    { id: 'homework',    icon: '📚', name: 'Homework Helper',         desc: 'Subject tutoring, step-by-step explanations',  color: '#60a5fa' },
    { id: 'scheduler',   icon: '📅', name: 'Family Scheduler',        desc: 'Activity coordination, calendar management',    color: '#34d399' },
    { id: 'development', icon: '🌱', name: 'Child Development Tracker',desc: 'Milestone tracking, age-appropriate guidance',  color: '#a78bfa' },
    { id: 'stories',     icon: '🌙', name: 'Bedtime Story Agent',     desc: 'Custom stories, reading level adaptation',      color: '#fb923c' },
    { id: 'coach',       icon: '🤝', name: 'Parent Coach',            desc: 'Behavior strategies, emotional regulation',     color: '#f472b6' },
  ],
   'Retail & Ops': [
    { id: 'inventory',   icon: '📦', name: 'Inventory Optimizer',   desc: 'Demand forecasting, returns logistics',     color: '#d4a84d' },
    { id: 'commerce',    icon: '🛒', name: 'Agentic Commerce',      desc: 'Instant checkout, autonomous buying',       color: '#e8913a' },
    { id: 'supply_chain',icon: '⛓', name: 'Supply Chain Agent',    desc: 'Bottleneck detection, re-routing',          color: '#4daed4' },
    { id: 'prop_val',    icon: '🏠', name: 'Property Valuator',     desc: 'Real-time appraisal, market data',          color: '#4db88c' },
    { id: 'contract_rev',icon: '📜', name: 'Contract Reviewer',     desc: 'Unfavorable clause detection for SMBs',     color: '#9b7fd4' },
  ],
}

const INDUSTRY_TABS = Object.keys(INDUSTRIES)

// ─── Starter Prompts ──────────────────────────────────────────────────────────
const STARTER_PROMPTS = [
  { id: 's1',  category: 'Work',     color: '#e8913a', title: 'Summarize This Email',       desc: 'Get key points from any long email in 3 bullets.',        prompt: 'Summarize the following email in 3 concise bullet points. Highlight any action items or deadlines.\n\nEmail:\n[PASTE EMAIL HERE]' },
  { id: 's2',  category: 'Work',     color: '#e8913a', title: 'Write a Performance Review', desc: 'Generate a professional review from a few notes.',         prompt: 'Write a professional performance review based on these notes. Include strengths, areas for improvement, and a summary.\n\nRole: [ROLE]\nNotes: [YOUR NOTES HERE]' },
  { id: 's3',  category: 'Work',     color: '#e8913a', title: 'Notes → Action Items',       desc: 'Paste raw notes, get a clean action item list.',           prompt: 'Convert these meeting notes into a clean action item list. For each item include: task, owner (if mentioned), deadline (if mentioned).\n\nNotes:\n[PASTE NOTES HERE]' },
  { id: 's4',  category: 'Work',     color: '#e8913a', title: 'Reply to Difficult Email',   desc: 'Draft a calm, professional response.',                     prompt: 'Help me write a professional, calm reply to this email. My goal is to [YOUR GOAL].\n\nOriginal email:\n[PASTE EMAIL HERE]' },
  { id: 's5',  category: 'Writing',  color: '#9b7fd4', title: "Explain Like I'm 5",         desc: 'Make any complex topic simple and clear.',                 prompt: "Explain the following concept as if talking to a curious 10-year-old. Simple language, relatable analogy, under 150 words.\n\nConcept: [TOPIC HERE]" },
  { id: 's6',  category: 'Writing',  color: '#9b7fd4', title: 'Improve My Writing',         desc: 'Get a cleaner, sharper version of any text.',              prompt: 'Improve this text. Clearer, more concise, professional. Keep my voice and meaning. Show revised version only.\n\n[PASTE YOUR TEXT HERE]' },
  { id: 's7',  category: 'Writing',  color: '#9b7fd4', title: 'Write a LinkedIn Post',      desc: 'Turn a story or idea into an engaging post.',              prompt: 'Write a LinkedIn post from this idea. Strong opening, short paragraphs, end with a question or CTA. 150-200 words.\n\nIdea: [DESCRIBE HERE]' },
  { id: 's8',  category: 'Writing',  color: '#9b7fd4', title: 'Proofread & Fix Grammar',    desc: 'Clean up any text without changing your meaning.',         prompt: 'Fix all grammar, spelling, and punctuation. Do not change tone or meaning. Return corrected version only.\n\n[PASTE TEXT HERE]' },
  { id: 's9',  category: 'Learning', color: '#4db88c', title: 'Teach Me Anything',          desc: "Get a structured beginner's guide on any topic.",          prompt: 'Teach me [TOPIC] from scratch. Give me: (1) one-sentence summary, (2) why it matters, (3) the 3 key concepts, (4) best next step to learn more.' },
  { id: 's10', category: 'Learning', color: '#4db88c', title: 'Make a Study Plan',          desc: 'Get a week-by-week roadmap for any skill.',                prompt: 'Create a 4-week study plan for [SKILL]. I have [X hours] per week. Include resources, daily tasks, and a milestone per week.' },
  { id: 's11', category: 'Learning', color: '#4db88c', title: 'Summarize an Article',       desc: 'Get the core ideas from any article fast.',                prompt: 'Summarize this article: (1) main argument, (2) 3 key points, (3) one thing I should do as a result.\n\nArticle:\n[PASTE HERE]' },
  { id: 's12', category: 'Learning', color: '#4db88c', title: 'Quiz Me on This Topic',      desc: 'Test your understanding with generated questions.',         prompt: 'Create a 5-question quiz on [TOPIC]. Mix multiple choice, true/false, and short answer. Give answers after I respond.' },
  { id: 's13', category: 'Life',     color: '#4d8cd4', title: 'Help Me Make a Decision',    desc: 'Think through any big decision clearly.',                  prompt: 'Help me think through this decision. Pros and cons, what I might be overlooking, and the one question I should ask myself.\n\nDecision: [DESCRIBE IT]' },
  { id: 's14', category: 'Life',     color: '#4d8cd4', title: 'Plan My Week',               desc: 'Turn your task list into a realistic schedule.',           prompt: 'Help me plan my week. Organize these into a Mon-Fri schedule. Flag anything overloaded.\n\nTasks:\n[LIST TASKS AND MEETINGS]' },
  { id: 's15', category: 'Life',     color: '#4d8cd4', title: 'Write My Bio',               desc: 'Generate a professional bio from bullet points.',          prompt: 'Write a professional third-person bio under 100 words. Warm but credible.\n\nName: [NAME]\nRole: [ROLE]\nBackground: [KEY FACTS]' },
  { id: 's16', category: 'Life',     color: '#4d8cd4', title: 'Give Me Honest Feedback',    desc: "Get direct, constructive critique on any idea.",           prompt: "Give me honest, direct feedback. What's weak, what's strong, and the single most important thing to change.\n\n[PASTE YOUR IDEA HERE]" },
]

const STARTER_CATS = ['All', 'Work', 'Writing', 'Learning', 'Life']

// ─── Build system prompt ──────────────────────────────────────────────────────
const buildPrompt = (name, desc) =>
`You are an expert AI prompt engineer specializing in production-ready agent system prompts.

Generate a COMPLETE, deployment-ready agent system prompt for: ${name}
Agent specialty: ${desc}

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

// ─── CSS ──────────────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #1a1d2e; }
  ::-webkit-scrollbar-thumb { background: #2e3248; border-radius: 3px; }

  body { background: #13151f; min-height: 100vh; }

  .agent-card {
    background: #1c1f30;
    border: 1px solid #2a2d42;
    border-radius: 10px;
    padding: 20px 18px 42px;
    cursor: pointer;
    position: relative;
    transition: all 0.18s ease;
    overflow: hidden;
  }
  .agent-card::after {
    content: 'Generate →';
    position: absolute; bottom: 14px; right: 14px;
    font-size: 10px; color: #3a3d52; font-family: 'Inter', sans-serif;
    font-weight: 500; transition: color 0.18s;
  }
  .agent-card:hover {
    border-color: var(--ac);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px var(--ac)22;
    background: #1f2236;
  }
  .agent-card:hover::after { color: var(--ac); }
  .agent-card:active { transform: translateY(-2px); }
  .agent-card.locked { opacity: 0.35; cursor: not-allowed; }
  .agent-card.locked:hover { transform: none; box-shadow: none; border-color: #2a2d42; background: #1c1f30; }
  .agent-card.locked::after { content: '🔒 Pro Only'; color: #3a3d52; }
.agent-new-badge {
    position: absolute; top: 10px; right: 10px;
    background: #f5c518; color: #13151f;
    font-size: 8px; font-weight: 800; letter-spacing: 0.1em;
    text-transform: uppercase; padding: 2px 7px; border-radius: 4px;
  }
  .btn {
    background: none; border: 1px solid #2e3248; color: #6b7280;
    padding: 8px 16px; font-family: 'Inter', sans-serif;
    font-size: 12px; font-weight: 500; cursor: pointer;
    border-radius: 8px; transition: all 0.14s; white-space: nowrap;
  }
  .btn:hover { border-color: #4a4d62; color: #9ca3af; background: #1c1f30; }
  .btn.primary { background: #f5c518; border-color: #f5c518; color: #13151f; font-weight: 600; }
  .btn.primary:hover { background: #ffd740; border-color: #ffd740; color: #13151f; }
  .btn.success { background: #10b981; border-color: #10b981; color: #fff; }
  .btn.danger { border-color: rgba(239,68,68,0.4); color: #ef4444; }
  .btn.danger:hover { background: #ef4444; border-color: #ef4444; color: #fff; }
  .btn.accent { border-color: rgba(245,197,24,0.4); color: #f5c518; }
  .btn.accent:hover { background: #f5c518; border-color: #f5c518; color: #13151f; }
  .btn:disabled { opacity: 0.3; cursor: not-allowed; pointer-events: none; }

  .ind-tab {
    background: none; border: none; border-bottom: 2px solid transparent;
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;
    cursor: pointer; padding: 10px 16px; color: #4b5563;
    transition: all 0.14s; white-space: nowrap;
  }
  .ind-tab:hover { color: #9ca3af; }
  .ind-tab.on { color: #f5c518; border-bottom-color: #f5c518; }

  .nav-tab {
    background: none; border: none; border-bottom: 2px solid transparent;
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;
    cursor: pointer; padding: 10px 18px; color: #4b5563; transition: all 0.14s;
  }
  .nav-tab:hover { color: #9ca3af; }
  .nav-tab.on { color: #f5c518; border-bottom-color: #f5c518; }

  .pill {
    background: none; border: 1px solid #2e3248; color: #6b7280;
    padding: 5px 14px; font-family: 'Inter', sans-serif; font-size: 12px;
    font-weight: 500; cursor: pointer; border-radius: 20px; transition: all 0.14s;
  }
  .pill:hover { border-color: #4a4d62; color: #9ca3af; }
  .pill.on { border-color: #f5c518; color: #f5c518; background: rgba(245,197,24,0.08); }

  .finput {
    background: #1c1f30; border: 1px solid #2e3248; color: #e5e7eb;
    padding: 10px 14px; font-family: 'Inter', sans-serif; font-size: 13px;
    border-radius: 8px; outline: none; width: 100%; transition: border-color 0.14s;
  }
  .finput:focus { border-color: #f5c518; }
  .finput::placeholder { color: #374151; }
  textarea.finput { resize: vertical; min-height: 80px; line-height: 1.6; }

  .lib-card {
    background: #1c1f30; border: 1px solid #2a2d42; border-radius: 10px;
    padding: 18px 20px; cursor: pointer; transition: all 0.14s;
  }
  .lib-card:hover { border-color: #4a4d62; background: #1f2236; }

  .pout h2 {
    font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase; color: #f5c518;
    margin: 24px 0 10px; padding-bottom: 8px; border-bottom: 1px solid #2a2d42;
  }
  .pout h2:first-child { margin-top: 0; }
  .pout p {
    font-family: 'Inter', sans-serif; color: #d1d5db;
    line-height: 1.8; font-size: 14px; margin-bottom: 4px;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  .fu { animation: fadeUp 0.24s ease forwards; }

  .overlay {
    position: fixed; inset: 0; background: rgba(13,15,25,0.85);
    display: flex; align-items: center; justify-content: center;
    z-index: 500; backdrop-filter: blur(12px); animation: fadeUp 0.18s ease;
  }
  .modal {
    background: #1c1f30; border: 1px solid #2e3248; border-radius: 14px;
    padding: 32px; position: relative; box-shadow: 0 24px 80px rgba(0,0,0,0.5);
  }

  .ind-nav {
    display: flex; overflow-x: auto; gap: 0;
    border-bottom: 1px solid #2a2d42; scrollbar-width: none;
  }
  .ind-nav::-webkit-scrollbar { display: none; }
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
  const [view, setView]           = useState('forge')
  const [industry, setIndustry]   = useState('General')
  const [selected, setSelected]   = useState(null)
  const [prompt, setPrompt]       = useState('')
  const [loading, setLoading]     = useState(false)
  const [dots, setDots]           = useState('')
  const [copied, setCopied]       = useState(false)
  const [saved, setSaved]         = useState(false)
  const [library, setLibrary]     = useState([])
  const [usage, setUsage]         = useState(0)
  const [isPro, setIsPro]         = useState(false)
  const [modal, setModal]         = useState(null)
  const [custName, setCustName]   = useState('')
  const [custDesc, setCustDesc]   = useState('')
  const [libSearch, setLibSearch] = useState('')
  const [starterCat, setStarterCat] = useState('All')
  const [starterCopied, setStarterCopied] = useState(null)
  const [showWalkthrough, setShowWalkthrough] = useState(false)
  const [wStep, setWStep]         = useState(0)
  const [mounted, setMounted]     = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      setUsage(parseInt(localStorage.getItem(LS_USAGE) || '0'))
      setIsPro(localStorage.getItem(LS_PRO) === 'true')
      setLibrary(JSON.parse(localStorage.getItem(LS_LIB) || '[]'))
      if (!localStorage.getItem(LS_SEEN)) setShowWalkthrough(true)
    } catch {}
  }, [])

  useEffect(() => {
    if (!loading) return
    const t = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 380)
    return () => clearInterval(t)
  }, [loading])

  const atLimit = !isPro && usage >= FREE_LIMIT
  const remaining = Math.max(0, FREE_LIMIT - usage)

  const closeWalkthrough = () => {
    setShowWalkthrough(false); setWStep(0)
    try { localStorage.setItem(LS_SEEN, 'true') } catch {}
  }

  const generate = async (agent) => {
    if (atLimit) { setModal('upgrade'); return }
    setSelected(agent)
    setPrompt('')
    setSaved(false)
    setCopied(false)

    // Fixed prompts skip the API
    if (agent.fixedPrompt) {
      const newUsage = usage + 1
      setUsage(newUsage)
      try { localStorage.setItem(LS_USAGE, String(newUsage)) } catch {}
      setPrompt(agent.fixedPrompt)
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentName: agent.name, agentDesc: agent.desc }),
      })
      const data = await res.json()
      const newUsage = usage + 1
      setUsage(newUsage)
      try { localStorage.setItem(LS_USAGE, String(newUsage)) } catch {}
      setPrompt(data.text || '')
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Grant pro on return from Stripe success
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    if (params.get('upgraded') === 'true') {
      setIsPro(true)
      try { localStorage.setItem(LS_PRO, 'true') } catch {}
      window.history.replaceState({}, '', '/forge')
    }
  }, [])

  const copy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }

  const reset = () => { setSelected(null); setPrompt(''); setSaved(false) }

  const currentAgents = INDUSTRIES[industry] || []
  const visibleLib = library.filter(i => !libSearch || i.agentName.toLowerCase().includes(libSearch.toLowerCase()))
  const visibleStarter = STARTER_PROMPTS.filter(p => starterCat === 'All' || p.category === starterCat)

  if (!mounted) return null

  return (
    <div style={{ minHeight: '100vh', background: '#13151f', color: '#d1d5db', fontFamily: "'Inter', sans-serif", position: 'relative' }}>
      <style>{CSS}</style>


      {/* ? Button */}
      <button onClick={() => { setWStep(0); setShowWalkthrough(true) }} style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 400,
        width: 34, height: 34, borderRadius: '50%',
        background: '#1c1f30', border: '1px solid #2e3248',
        color: '#6b7280', fontFamily: "'Inter', sans-serif",
        fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all 0.14s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#f5c518'; e.currentTarget.style.color = '#f5c518' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#2e3248'; e.currentTarget.style.color = '#6b7280' }}
      >?</button>

      {/* Walkthrough Modal */}
      {showWalkthrough && (
        <div className="overlay" onClick={closeWalkthrough}>
          <div className="modal" style={{ maxWidth: 480, width: '92%' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
              {WALKTHROUGH.map((_, i) => (
                <div key={i} style={{ height: 2, flex: 1, borderRadius: 2, background: i <= wStep ? '#f5c518' : '#2e3248', transition: 'background 0.2s' }} />
              ))}
            </div>
            <div style={{ fontSize: 32, marginBottom: 14 }}>{WALKTHROUGH[wStep].icon}</div>
            <div style={{ fontSize: 10, color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
              Step {WALKTHROUGH[wStep].step} of {WALKTHROUGH.length}
            </div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 22, color: '#f0f2ff', marginBottom: 12 }}>
              {WALKTHROUGH[wStep].title}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#9ca3af', fontSize: 14, lineHeight: 1.8, marginBottom: 28 }}>
              {WALKTHROUGH[wStep].body}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn" style={{ visibility: wStep === 0 ? 'hidden' : 'visible' }} onClick={() => setWStep(s => s - 1)}>← Back</button>
              {wStep < WALKTHROUGH.length - 1
                ? <button className="btn primary" onClick={() => setWStep(s => s + 1)}>Next →</button>
                : <button className="btn primary" onClick={closeWalkthrough}>Start Generating →</button>
              }
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {modal === 'upgrade' && (
        <div className="overlay" onClick={() => setModal(null)}>
          <div className="modal" style={{ maxWidth: 460, width: '90%' }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 11, color: '#f5c518', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, fontWeight: 600 }}>Upgrade to unlock</div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 26, color: '#f0f2ff', marginBottom: 10 }}>
              Upgrade to Pro
            </h2>
            <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.7, marginBottom: 22 }}>
              You've used your {FREE_LIMIT} free generates. Unlock unlimited access.
            </p>
            <div style={{ background: '#13151f', border: '1px solid #2e3248', borderRadius: 10, padding: 18, marginBottom: 24 }}>
              {['Unlimited prompt generation', 'Unlimited library saves', 'Custom agent builder', 'All industry archetypes', 'Team sharing (coming soon)'].map(f => (
                <div key={f} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 13, color: '#9ca3af', alignItems: 'center' }}>
                  <span style={{ color: '#10b981', flexShrink: 0 }}>✓</span>{f}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 32, color: '#f0f2ff' }}>$12</span>
                <span style={{ color: '#6b7280', fontSize: 13 }}> /mo</span>
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
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, color: '#f0f2ff' }}>{modal.agentName}</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn primary" onClick={() => copy(modal.prompt)}>{copied ? '✓ Copied' : 'Copy'}</button>
                <button className="btn danger" onClick={() => deleteFromLib(modal.id)}>Delete</button>
                <button className="btn" onClick={() => setModal(null)}>✕</button>
              </div>
            </div>
            <div className="pout fu">{parsePrompt(modal.prompt)}</div>
          </div>
        </div>
      )}

      {/* ── Main Layout ── */}
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '48px 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 9, color: '#3a2a14', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>
              ⚒ &nbsp; The Smithy of Minds
            </div>
            <h1 style={{
              fontFamily: "'Cinzel', serif", fontWeight: 900,
              fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '0.06em', lineHeight: 0.95,
              color: '#f0f2ff',
              marginBottom: 8,
            }}>PROMPT FORGE</h1>
            <p style={{ fontSize: 10, color: '#2a1a0a', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: "'DM Mono', monospace" }}>
              One strike · Fully forged agent prompt · Ready to deploy
            </p>
          </div>

          {/* Usage widget */}
          <div style={{ background: '#1c1f30', border: '1px solid #2e3248', borderRadius: 12, padding: '14px 18px', minWidth: 180 }}>
            {isPro ? (
              <div>
                <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 500, marginBottom: 6 }}>Plan</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ color: '#f5c518', fontSize: 14 }}>★</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 13, color: '#f0f2ff' }}>Pro</span>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>Free Plan</span>
                  <span style={{ fontSize: 12, color: remaining > 0 ? '#f5c518' : '#ef4444', fontWeight: 600 }}>{remaining}/{FREE_LIMIT} left</span>
                </div>
                <div style={{ background: '#2e3248', borderRadius: 3, height: 4, marginBottom: 12, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 2,
                    width: `${Math.min(100, (usage / FREE_LIMIT) * 100)}%`,
                    background: remaining > 0 ? '#f5c518' : '#ef4444',
                    transition: 'width 0.4s ease',
                    boxShadow: 'none',
                  }} />
                </div>
                <button className="btn primary" style={{ width: '100%', padding: '7px 0', fontSize: 12 }} onClick={() => setModal('upgrade')}>
                  Upgrade to Pro · $12/mo
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #2a2d42', marginBottom: 0 }}>
          <div style={{ display: 'flex' }}>
            <button className={`nav-tab ${view === 'forge' ? 'on' : ''}`} onClick={() => { setView('forge'); reset() }}>Forge</button>
            <button className={`nav-tab ${view === 'library' ? 'on' : ''}`} onClick={() => setView('library')}>
              Library {library.length > 0 && <span style={{ color: '#2a1a08', marginLeft: 3 }}>({library.length})</span>}
            </button>
            <button className={`nav-tab ${view === 'starter' ? 'on' : ''}`} onClick={() => setView('starter')}>Starter</button>
          </div>
          <button className="btn accent" style={{ fontSize: 12 }} onClick={() => atLimit ? setModal('upgrade') : setModal('custom')}>
            + Custom Agent
          </button>
        </div>

        {/* ══ FORGE VIEW ══ */}
        {view === 'forge' && !selected && (
          <div className="fu">
            {/* Industry tabs */}
            <div className="ind-nav" style={{ marginBottom: 28, marginTop: 0 }}>
              {INDUSTRY_TABS.map(ind => (
                <button key={ind} className={`ind-tab ${industry === ind ? 'on' : ''}`} onClick={() => setIndustry(ind)}>
                  {ind}
                </button>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))', gap: 9 }}>
              {currentAgents.map((agent, i) => {
                const locked = !isPro && i >= FREE_LIMIT && atLimit
                return (
                  <div key={agent.id} className={`agent-card ${locked ? 'locked' : ''}`}
                    style={{ '--ac': agent.color }}
                    onClick={() => !locked && generate(agent.name, agent.desc, agent)}
                  >
                    {agent.isNew && <span className="agent-new-badge">NEW</span>}
                    <div style={{ fontSize: 18, marginBottom: 10, color: agent.color, opacity: 0.9 }}>{agent.icon}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: '#e5e7eb', marginBottom: 6, lineHeight: 1.4 }}>{agent.name}</div>
                    <div style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.6 }}>{agent.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ══ OUTPUT VIEW ══ */}
        {view === 'forge' && selected && (
          <div className="fu" style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button className="btn" onClick={reset}>← Back</button>
                <span style={{ color: selected.color, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14 }}>
                  {selected.icon} {selected.name}
                </span>
              </div>
              {!loading && prompt && (
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn" onClick={() => generate(selected.name, selected.desc, selected)}>↺ Reforge</button>
                  {!saved
                    ? <button className="btn accent" onClick={saveToLib}>+ Save to Library</button>
                    : <button className="btn iron" disabled>✓ Saved</button>
                  }
                  <button className={`btn ${copied ? 'success' : 'primary'}`} onClick={() => copy(prompt)}>
                    {copied ? '✓ Copied!' : 'Copy Prompt'}
                  </button>
                </div>
              )}
            </div>

            <div style={{
              background: '#1c1f30',
              border: `1px solid ${loading ? selected.color + '44' : '#2a2d42'}`,
              borderRadius: 12, padding: 32, minHeight: 360,
              transition: 'border-color 0.3s',
            }}>
              {loading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, gap: 20 }}>
                  <div style={{
                    width: 40, height: 40,
                    border: '2px solid #2e3248',
                    borderTop: `2px solid ${selected.color}`,
                    borderRadius: '50%', animation: 'spin 0.75s linear infinite',
                    boxShadow: `0 0 12px ${selected.color}40`,
                  }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: selected.color, fontSize: 12, fontWeight: 500, marginBottom: 4 }}>
                      Striking the forge{dots}
                    </div>
                    <div style={{ color: '#6b7280', fontSize: 12 }}>Generating {selected.name} prompt...</div>
                  </div>
                </div>
              ) : prompt ? (
                <div className="pout fu">{parsePrompt(prompt)}</div>
              ) : null}
            </div>

            {!loading && prompt && (
              <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#4b5563' }}>
                <span>{prompt.length.toLocaleString()} chars · {prompt.split(/\s+/).filter(Boolean).length} words</span>
                <span style={{ color: '#10b981', fontWeight: 500 }}>✓ READY TO DEPLOY</span>
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
              <span style={{ fontSize: 12, color: '#6b7280', whiteSpace: 'nowrap' }}>
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
                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: '#e5e7eb' }}>{item.agentName}</span>
                      </div>
                      <button className="btn steel" style={{ padding: '2px 7px', fontSize: 9 }}
                        onClick={e => { e.stopPropagation(); deleteFromLib(item.id) }}>✕</button>
                    </div>
                    <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 10, lineHeight: 1.5 }}>
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
                  background: '#1c1f30',
                  border: '1px solid #2a2d42', borderRadius: 10,
                  padding: '18px 18px 16px', position: 'relative', transition: 'border-color 0.16s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = item.color + '88'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2d42'}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8, gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 10, color: item.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 5 }}>{item.category}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: '#e5e7eb', lineHeight: 1.4 }}>{item.title}</div>
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
                  <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</div>
                  <div style={{
                    background: '#13151f', border: '1px solid #2a2d42', borderRadius: 6,
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
        <div style={{ marginTop: 60, paddingTop: 18, borderTop: '1px solid #2a2d42', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: '#374151' }}>Prompt Forge</span>
          <span style={{ fontSize: 11, color: '#374151' }}>Powered by Claude</span>
        </div>
      </div>
    </div>
  )
}


'use client'

import { useState, useEffect } from 'react'

const FREE_LIMIT = 3
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
  General: [
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
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Cinzel:wght@600;700;900&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #0e0a06; }
  ::-webkit-scrollbar-thumb { background: #3a2a1a; border-radius: 3px; }

  /* Forge fire glow on body */
  body {
    background: radial-gradient(ellipse at 50% 100%, #1a0e04 0%, #0a0704 60%, #080604 100%);
    min-height: 100vh;
  }

  /* Agent cards */
  .agent-card {
    background: linear-gradient(145deg, #131008, #0e0c07);
    border: 1px solid #2a1f0e;
    border-radius: 4px;
    padding: 20px 18px 40px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
    overflow: hidden;
  }
  .agent-card::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--ac), transparent);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .agent-card::after {
    content: 'FORGE →';
    position: absolute; bottom: 13px; right: 14px;
    font-size: 8.5px; letter-spacing: 0.14em; color: #2a1f0e;
    font-family: 'DM Mono', monospace; transition: color 0.2s;
  }
  .agent-card:hover {
    border-color: var(--ac);
    transform: translateY(-3px);
    box-shadow: 0 8px 32px color-mix(in srgb, var(--ac) 15%, transparent), 0 0 0 1px color-mix(in srgb, var(--ac) 10%, transparent);
    background: linear-gradient(145deg, #1a1408, #131008);
  }
  .agent-card:hover::before { opacity: 1; }
  .agent-card:hover::after { color: var(--ac); }
  .agent-card:active { transform: translateY(-1px); }
  .agent-card.locked { opacity: 0.3; cursor: not-allowed; }
  .agent-card.locked:hover { transform: none; box-shadow: none; border-color: #2a1f0e; background: linear-gradient(145deg, #131008, #0e0c07); }
  .agent-card.locked::after { content: '🔒 PRO'; color: #2a2010; }

  /* Buttons */
  .btn {
    background: none;
    border: 1px solid #2a1f0e;
    color: #5a4a30;
    padding: 7px 14px;
    font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
    cursor: pointer; border-radius: 3px; transition: all 0.14s; white-space: nowrap;
  }
  .btn:hover { border-color: #4a3520; color: #8a7050; }
  .btn.fire { border-color: rgba(232,145,58,0.4); color: #e8913a; }
  .btn.fire:hover { background: #e8913a; color: #0a0704; border-color: #e8913a; }
  .btn.ember { border-color: rgba(212,168,77,0.4); color: #d4a84d; }
  .btn.ember:hover { background: #d4a84d; color: #0a0704; border-color: #d4a84d; }
  .btn.iron { border-color: rgba(77,184,140,0.3); color: #4db88c; }
  .btn.iron:hover { background: #4db88c; color: #0a0704; }
  .btn.steel { border-color: rgba(196,77,77,0.3); color: #c44d4d; }
  .btn.steel:hover { background: #c44d4d; color: #fff; }
  .btn.coal { border-color: rgba(77,140,212,0.3); color: #4d8cd4; }
  .btn.coal:hover { background: #4d8cd4; color: #0a0704; }
  .btn:disabled { opacity: 0.2; cursor: not-allowed; pointer-events: none; }

  /* Industry nav tabs */
  .ind-tab {
    background: none; border: none; border-bottom: 2px solid transparent;
    font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.1em;
    text-transform: uppercase; cursor: pointer; padding: 8px 14px;
    color: #3a2a14; transition: all 0.14s; white-space: nowrap;
  }
  .ind-tab:hover { color: #6a4a24; }
  .ind-tab.on { color: #e8913a; border-bottom-color: #e8913a; }

  /* Main nav tabs */
  .nav-tab {
    background: none; border: none; border-bottom: 2px solid transparent;
    font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.1em;
    text-transform: uppercase; cursor: pointer; padding: 8px 16px;
    color: #3a2a14; transition: all 0.14s;
  }
  .nav-tab:hover { color: #6a4a24; }
  .nav-tab.on { color: #e8913a; border-bottom-color: #e8913a; }

  /* Filter pills */
  .pill {
    background: none; border: 1px solid #2a1f0e; color: #3a2a14;
    padding: 4px 12px; font-family: 'DM Mono', monospace; font-size: 9px;
    letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
    border-radius: 20px; transition: all 0.14s;
  }
  .pill:hover { border-color: #4a3520; color: #6a4a24; }
  .pill.on { border-color: rgba(232,145,58,0.5); color: #e8913a; background: rgba(232,145,58,0.06); }

  /* Inputs */
  .finput {
    background: #0c0904; border: 1px solid #2a1f0e; color: #c8a870;
    padding: 9px 13px; font-family: 'DM Mono', monospace; font-size: 12px;
    border-radius: 3px; outline: none; width: 100%; transition: border-color 0.14s;
  }
  .finput:focus { border-color: #4a3520; }
  .finput::placeholder { color: #2a1f0e; }
  textarea.finput { resize: vertical; min-height: 72px; line-height: 1.6; }

  /* Library cards */
  .lib-card {
    background: linear-gradient(145deg, #111008, #0e0c07);
    border: 1px solid #2a1f0e; border-radius: 4px;
    padding: 16px 18px; cursor: pointer; transition: border-color 0.14s;
  }
  .lib-card:hover { border-color: #4a3520; }

  /* Prompt output formatting */
  .pout h2 {
    font-family: 'Cinzel', serif;
    font-size: 10px; font-weight: 600;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: #e8913a;
    margin: 28px 0 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid #2a1a08;
  }
  .pout h2:first-child { margin-top: 0; }
  .pout p {
    font-family: 'Crimson Pro', serif;
    color: #a08050;
    line-height: 1.85;
    font-size: 15px;
    margin-bottom: 4px;
  }

  /* Animations */
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes flicker {
    0%, 100% { opacity: 1; }
    92% { opacity: 1; }
    93% { opacity: 0.85; }
    94% { opacity: 1; }
    96% { opacity: 0.9; }
    97% { opacity: 1; }
  }
  .fu { animation: fadeUp 0.28s ease forwards; }

  /* Forge fire ember particles (CSS only) */
  .forge-glow {
    position: fixed; bottom: 0; left: 50%; transform: translateX(-50%);
    width: 100%; height: 300px; pointer-events: none; z-index: 0;
    background: radial-gradient(ellipse at 50% 100%, rgba(232,145,58,0.06) 0%, transparent 70%);
  }

  /* Scanlines */
  .scanline {
    position: fixed; inset: 0; pointer-events: none; z-index: 9999;
    background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.025) 3px, rgba(0,0,0,0.025) 4px);
  }

  /* Overlays / Modals */
  .overlay {
    position: fixed; inset: 0; background: rgba(5,3,1,0.92);
    display: flex; align-items: center; justify-content: center;
    z-index: 500; backdrop-filter: blur(8px);
    animation: fadeUp 0.18s ease;
  }
  .modal {
    background: linear-gradient(145deg, #131008, #0e0c07);
    border: 1px solid #3a2a10; border-radius: 6px;
    padding: 32px; position: relative;
    box-shadow: 0 0 60px rgba(232,145,58,0.08);
  }

  /* Dividers */
  .forge-divider {
    border: none;
    border-top: 1px solid #1a1208;
    margin: 0;
  }

  /* Horizontal scroll for industry tabs */
  .ind-nav {
    display: flex; overflow-x: auto; gap: 0;
    border-bottom: 1px solid #1a1208;
    scrollbar-width: none;
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
useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    if (params.get('upgraded') === 'true') {
      setIsPro(true)
      try { localStorage.setItem(LS_PRO, 'true') } catch {}
      window.history.replaceState({}, '', '/forge')
    }
  }, [])
  const closeWalkthrough = () => {
    setShowWalkthrough(false); setWStep(0)
    try { localStorage.setItem(LS_SEEN, 'true') } catch {}
  }

  const generate = async (name, desc, agentObj) => {
    if (atLimit) { setModal('upgrade'); return }
    const agent = agentObj || { id: 'custom', name, desc, color: '#4d8cd4', icon: '✦' }
    setSelected(agent); setPrompt(''); setLoading(true); setCopied(false); setSaved(false)
    const newUsage = usage + 1
    setUsage(newUsage)
    try { localStorage.setItem(LS_USAGE, String(newUsage)) } catch {}
    try {
      const res = await fetch('/api/generate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentName: name, agentDesc: desc }),
      })
      const data = await res.json()
      setPrompt(data.text || data.error || 'Error generating.')
    } catch { setPrompt('Connection error. Try again.') }
    finally { setLoading(false) }
  }

  const saveToLib = () => {
    const item = {
      id: `${selected.id}_${Date.now()}`,
      agentName: selected.name, agentDesc: selected.desc,
      agentColor: selected.color, agentIcon: selected.icon,
      prompt, savedAt: Date.now(),
    }
    const updated = [item, ...library]
    setLibrary(updated)
    try { localStorage.setItem(LS_LIB, JSON.stringify(updated)) } catch {}
    setSaved(true)
  }

  const deleteFromLib = (id) => {
    const updated = library.filter(i => i.id !== id)
    setLibrary(updated)
    try { localStorage.setItem(LS_LIB, JSON.stringify(updated)) } catch {}
    if (modal?.id === id) setModal(null)
  }

  const activatePro = async () => {
    try {
      setModal(null)
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'user_' + Date.now() }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch (err) {
      console.error('Checkout error:', err)
    }
  }

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
    <div style={{ minHeight: '100vh', background: 'transparent', color: '#a08050', fontFamily: "'DM Mono', monospace", position: 'relative' }}>
      <style>{CSS}</style>
      <div className="forge-glow" />
      <div className="scanline" />

      {/* ? Button */}
      <button onClick={() => { setWStep(0); setShowWalkthrough(true) }} style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 400,
        width: 34, height: 34, borderRadius: '50%',
        background: '#0e0c07', border: '1px solid #2a1f0e',
        color: '#3a2a14', fontFamily: "'Cinzel', serif",
        fontSize: 13, cursor: 'pointer', transition: 'all 0.14s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#e8913a'; e.currentTarget.style.color = '#e8913a' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a1f0e'; e.currentTarget.style.color = '#3a2a14' }}
      >?</button>

      {/* Walkthrough Modal */}
      {showWalkthrough && (
        <div className="overlay" onClick={closeWalkthrough}>
          <div className="modal" style={{ maxWidth: 480, width: '92%' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
              {WALKTHROUGH.map((_, i) => (
                <div key={i} style={{ height: 2, flex: 1, borderRadius: 2, background: i <= wStep ? '#e8913a' : '#1e1408', transition: 'background 0.2s' }} />
              ))}
            </div>
            <div style={{ fontSize: 32, marginBottom: 14 }}>{WALKTHROUGH[wStep].icon}</div>
            <div style={{ fontSize: 9, color: '#3a2a14', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 8 }}>
              Step {WALKTHROUGH[wStep].step} of {WALKTHROUGH.length}
            </div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 22, color: '#d4a84d', marginBottom: 12, letterSpacing: '0.02em' }}>
              {WALKTHROUGH[wStep].title}
            </h2>
            <p style={{ fontFamily: "'Crimson Pro', serif", color: '#7a5a30', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
              {WALKTHROUGH[wStep].body}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn" style={{ visibility: wStep === 0 ? 'hidden' : 'visible' }} onClick={() => setWStep(s => s - 1)}>← Back</button>
              {wStep < WALKTHROUGH.length - 1
                ? <button className="btn fire" onClick={() => setWStep(s => s + 1)}>Next →</button>
                : <button className="btn fire" onClick={closeWalkthrough}>Enter the Forge →</button>
              }
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {modal === 'upgrade' && (
        <div className="overlay" onClick={() => setModal(null)}>
          <div className="modal" style={{ maxWidth: 460, width: '90%' }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 9, color: '#e8913a', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10, fontFamily: "'Cinzel', serif" }}>The forge demands tribute</div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 26, color: '#d4a84d', marginBottom: 10, letterSpacing: '0.02em' }}>
              Upgrade to Pro
            </h2>
            <p style={{ fontFamily: "'Crimson Pro', serif", color: '#6a4a24', fontSize: 14, lineHeight: 1.7, marginBottom: 22 }}>
              You've used your {FREE_LIMIT} free forges. Unlock unlimited access to the full smithy.
            </p>
            <div style={{ background: '#0a0804', border: '1px solid #1e1408', borderRadius: 4, padding: 18, marginBottom: 24 }}>
              {['Unlimited prompt generation', 'Unlimited library saves', 'Custom agent builder', 'All industry archetypes', 'Team sharing (coming soon)'].map(f => (
                <div key={f} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 12, color: '#5a4020', alignItems: 'center', fontFamily: "'Crimson Pro', serif" }}>
                  <span style={{ color: '#4db88c', flexShrink: 0 }}>✓</span>{f}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 30, color: '#d4a84d' }}>$12</span>
                <span style={{ color: '#3a2a14', fontSize: 12 }}> /mo</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn" onClick={() => setModal(null)}>Cancel</button>
                <button className="btn fire" onClick={activatePro}>Upgrade Now →</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Agent Modal */}
      {modal === 'custom' && (
        <div className="overlay" onClick={() => setModal(null)}>
          <div className="modal" style={{ maxWidth: 440, width: '90%' }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 9, color: '#4d8cd4', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10, fontFamily: "'Cinzel', serif" }}>Custom Archetype</div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 22, color: '#d4a84d', marginBottom: 20, letterSpacing: '0.02em' }}>
              Forge Your Own Agent
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
              <div>
                <label style={{ fontSize: 9, color: '#3a2a14', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Agent Name</label>
                <input className="finput" placeholder="e.g. Compliance Officer" value={custName} onChange={e => setCustName(e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: 9, color: '#3a2a14', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Specialty</label>
                <textarea className="finput" placeholder="e.g. Regulatory compliance, policy interpretation, audit prep..." value={custDesc} onChange={e => setCustDesc(e.target.value)} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button className="btn" onClick={() => setModal(null)}>Cancel</button>
              <button className="btn coal" disabled={!custName.trim() || !custDesc.trim()}
                onClick={() => {
                  const n = custName.trim(), d = custDesc.trim()
                  setModal(null); setView('forge')
                  generate(n, d, { id: 'custom', name: n, desc: d, color: '#4d8cd4', icon: '✦' })
                  setCustName(''); setCustDesc('')
                }}
              >Strike the Forge →</button>
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
                <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 14, color: '#d4a84d' }}>{modal.agentName}</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn fire" onClick={() => copy(modal.prompt)}>{copied ? '✓ Copied' : 'Copy'}</button>
                <button className="btn steel" onClick={() => deleteFromLib(modal.id)}>Delete</button>
                <button className="btn" onClick={() => setModal(null)}>✕</button>
              </div>
            </div>
            <div className="pout fu">{parsePrompt(modal.prompt)}</div>
          </div>
        </div>
      )}

      {/* ── Main Layout ── */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 22px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 9, color: '#3a2a14', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>
              ⚒ &nbsp; The Smithy of Minds
            </div>
            <h1 style={{
              fontFamily: "'Cinzel', serif", fontWeight: 900,
              fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '0.06em', lineHeight: 0.95,
              background: 'linear-gradient(135deg, #8a5a1a 0%, #e8913a 35%, #d4a84d 55%, #e8913a 75%, #6a3a0a 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: 8, textShadow: 'none',
            }}>PROMPT FORGE</h1>
            <p style={{ fontSize: 10, color: '#2a1a0a', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: "'DM Mono', monospace" }}>
              One strike · Fully forged agent prompt · Ready to deploy
            </p>
          </div>

          {/* Usage widget */}
          <div style={{ background: 'linear-gradient(145deg, #0e0c07, #0a0804)', border: '1px solid #2a1f0e', borderRadius: 4, padding: '14px 16px', minWidth: 170 }}>
            {isPro ? (
              <div>
                <div style={{ fontSize: 9, color: '#3a2a14', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6, fontFamily: "'DM Mono', monospace" }}>Rank</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ color: '#e8913a', fontSize: 14 }}>⚒</span>
                  <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 13, color: '#d4a84d' }}>Master Smith</span>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 9, color: '#3a2a14', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Apprentice</span>
                  <span style={{ fontSize: 9, color: remaining > 0 ? '#e8913a' : '#c44d4d' }}>{remaining}/{FREE_LIMIT} forges</span>
                </div>
                <div style={{ background: '#141008', borderRadius: 2, height: 3, marginBottom: 10, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 2,
                    width: `${Math.min(100, (usage / FREE_LIMIT) * 100)}%`,
                    background: remaining > 0 ? 'linear-gradient(90deg, #8a4a10, #e8913a)' : '#c44d4d',
                    transition: 'width 0.4s ease',
                    boxShadow: remaining > 0 ? '0 0 8px rgba(232,145,58,0.4)' : 'none',
                  }} />
                </div>
                <button className="btn fire" style={{ width: '100%', padding: '6px 0', fontSize: 9 }} onClick={() => setModal('upgrade')}>
                  Upgrade · $12/mo
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1a1208', marginBottom: 0 }}>
          <div style={{ display: 'flex' }}>
            <button className={`nav-tab ${view === 'forge' ? 'on' : ''}`} onClick={() => { setView('forge'); reset() }}>Forge</button>
            <button className={`nav-tab ${view === 'library' ? 'on' : ''}`} onClick={() => setView('library')}>
              Library {library.length > 0 && <span style={{ color: '#2a1a08', marginLeft: 3 }}>({library.length})</span>}
            </button>
            <button className={`nav-tab ${view === 'starter' ? 'on' : ''}`} onClick={() => setView('starter')}>Starter</button>
          </div>
          <button className="btn coal" style={{ fontSize: 9 }} onClick={() => atLimit ? setModal('upgrade') : setModal('custom')}>
            + Custom Agent
          </button>
        </div>

        {/* ══ FORGE VIEW ══ */}
        {view === 'forge' && !selected && (
          <div className="fu">
            {/* Industry tabs */}
            <div className="ind-nav" style={{ marginBottom: 24, marginTop: 0 }}>
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
                    <div style={{ fontSize: 18, marginBottom: 10, color: agent.color, opacity: 0.9 }}>{agent.icon}</div>
                    <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 11.5, color: '#c8a060', marginBottom: 6, letterSpacing: '0.04em', lineHeight: 1.4 }}>{agent.name}</div>
                    <div style={{ fontSize: 9.5, color: '#2e2010', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.6 }}>{agent.desc}</div>
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
                <span style={{ color: selected.color, fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.04em' }}>
                  {selected.icon} {selected.name}
                </span>
              </div>
              {!loading && prompt && (
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn" onClick={() => generate(selected.name, selected.desc, selected)}>↺ Reforge</button>
                  {!saved
                    ? <button className="btn coal" onClick={saveToLib}>+ Save to Library</button>
                    : <button className="btn iron" disabled>✓ Saved</button>
                  }
                  <button className={`btn ${copied ? 'iron' : 'fire'}`} onClick={() => copy(prompt)}>
                    {copied ? '✓ Copied!' : 'Copy Prompt'}
                  </button>
                </div>
              )}
            </div>

            <div style={{
              background: 'linear-gradient(160deg, #0e0b06, #0a0804)',
              border: `1px solid ${loading ? selected.color + '33' : '#1e1608'}`,
              borderRadius: 4, padding: 32, minHeight: 360,
              transition: 'border-color 0.3s',
              boxShadow: loading ? `0 0 30px ${selected.color}10` : 'none',
            }}>
              {loading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, gap: 20 }}>
                  <div style={{
                    width: 40, height: 40,
                    border: '2px solid #1e1408',
                    borderTop: `2px solid ${selected.color}`,
                    borderRadius: '50%', animation: 'spin 0.75s linear infinite',
                    boxShadow: `0 0 12px ${selected.color}40`,
                  }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: selected.color, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 4, fontFamily: "'Cinzel', serif" }}>
                      Striking the forge{dots}
                    </div>
                    <div style={{ color: '#2a1a08', fontSize: 10 }}>Forging {selected.name} prompt</div>
                  </div>
                </div>
              ) : prompt ? (
                <div className="pout fu">{parsePrompt(prompt)}</div>
              ) : null}
            </div>

            {!loading && prompt && (
              <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', fontSize: 9.5, color: '#2a1a08' }}>
                <span>{prompt.length.toLocaleString()} chars · {prompt.split(/\s+/).filter(Boolean).length} words</span>
                <span style={{ color: '#1e2a14' }}>⚒ READY TO DEPLOY</span>
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
              <span style={{ fontSize: 10, color: '#2a1a08', whiteSpace: 'nowrap' }}>
                {visibleLib.length} prompt{visibleLib.length !== 1 ? 's' : ''}
              </span>
            </div>

            {visibleLib.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '56px 20px' }}>
                <div style={{ fontSize: 28, marginBottom: 14, opacity: 0.15 }}>⚒</div>
                <div style={{ fontFamily: "'Crimson Pro', serif", color: '#2a1a08', fontSize: 14, marginBottom: 18 }}>
                  {libSearch ? 'No prompts match your search' : 'Your library awaits its first forging'}
                </div>
                <button className="btn fire" onClick={() => { setView('forge'); reset() }}>Enter the Forge →</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 9 }}>
                {visibleLib.map(item => (
                  <div key={item.id} className="lib-card" onClick={() => setModal(item)}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: item.agentColor, fontSize: 15 }}>{item.agentIcon}</span>
                        <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 12, color: '#c8a060' }}>{item.agentName}</span>
                      </div>
                      <button className="btn steel" style={{ padding: '2px 7px', fontSize: 9 }}
                        onClick={e => { e.stopPropagation(); deleteFromLib(item.id) }}>✕</button>
                    </div>
                    <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 12, color: '#2e1e0a', letterSpacing: '0.02em', marginBottom: 10, lineHeight: 1.5 }}>
                      {item.agentDesc}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 9.5, color: '#201408' }}>{fmtDate(item.savedAt)}</span>
                      <span style={{ fontSize: 9.5, color: '#201408' }}>{item.prompt.split(/\s+/).filter(Boolean).length} words</span>
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
              <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: 14, color: '#4a3020', lineHeight: 1.8, marginBottom: 16 }}>
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
                  background: 'linear-gradient(145deg, #111008, #0e0c07)',
                  border: '1px solid #2a1f0e', borderRadius: 4,
                  padding: '18px 18px 16px', position: 'relative', transition: 'border-color 0.16s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = item.color + '55'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#2a1f0e'}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8, gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 8, color: item.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 5, fontFamily: "'DM Mono', monospace" }}>{item.category}</div>
                      <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: 12, color: '#c8a060', lineHeight: 1.4 }}>{item.title}</div>
                    </div>
                    <button
                      className={`btn ${starterCopied === item.id ? 'iron' : 'fire'}`}
                      style={{ padding: '4px 10px', fontSize: 9, flexShrink: 0 }}
                      onClick={() => {
                        navigator.clipboard.writeText(item.prompt)
                        setStarterCopied(item.id)
                        setTimeout(() => setStarterCopied(null), 2000)
                      }}
                    >{starterCopied === item.id ? '✓' : 'Copy'}</button>
                  </div>
                  <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 12, color: '#3a2a14', lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</div>
                  <div style={{
                    background: '#0a0804', border: '1px solid #1a1208', borderRadius: 3,
                    padding: '9px 11px', fontSize: 10.5, color: '#2e2010', lineHeight: 1.7,
                    fontFamily: "'DM Mono', monospace", whiteSpace: 'pre-wrap',
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
        <div style={{ marginTop: 60, paddingTop: 18, borderTop: '1px solid #0e0c07', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 8.5, color: '#1e1408', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: "'DM Mono', monospace" }}>Prompt Forge v3.0</span>
          <span style={{ fontSize: 8.5, color: '#1e1408' }}>Forged with Claude</span>
        </div>
      </div>
    </div>
  )
}
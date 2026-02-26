'use client'

import { useState, useEffect } from 'react'

const FREE_LIMIT = 3
const LS_USAGE = 'pf_usage'
const LS_PRO = 'pf_pro'
const LS_LIB = 'pf_library'
const LS_SEEN = 'pf_seen'

const WALKTHROUGH = [
  {
    step: 1,
    icon: '◈',
    title: 'Pick an Agent',
    body: 'Browse the agent grid and click any card to instantly generate a fully packaged system prompt for that role. No typing required.',
  },
  {
    step: 2,
    icon: '⚡',
    title: 'Forge It',
    body: 'Claude generates a professional, deployment-ready prompt in seconds — with identity, capabilities, behavior rules, and an activation phrase built in.',
  },
  {
    step: 3,
    icon: '◎',
    title: 'Copy & Paste',
    body: 'Hit Copy Prompt and paste it into the "System Prompt" or "Custom Instructions" field of any AI tool — Claude, ChatGPT, or your own API.',
  },
  {
    step: 4,
    icon: '✦',
    title: 'Save to Your Library',
    body: 'Save your best prompts to your personal library. They persist across sessions so your agent collection grows over time.',
  },
]

const AGENTS = [
  { id: 'treasury',    icon: '◈', name: 'FX Treasury Analyst',   desc: 'Hedging, derivatives, currency risk',    color: '#f59e0b', tag: 'Finance'     },
  { id: 'cyber',       icon: '⬡', name: 'Cyber Investigator',    desc: 'Threat hunting, forensics, OSINT',        color: '#22d3ee', tag: 'Security'    },
  { id: 'code_review', icon: '⟨⟩', name: 'Code Reviewer',        desc: 'Security, performance, best practices',   color: '#a78bfa', tag: 'Engineering' },
  { id: 'data',        icon: '∿', name: 'Data Analyst',          desc: 'SQL, Python, insight generation',         color: '#34d399', tag: 'Analytics'   },
  { id: 'legal',       icon: '⚖', name: 'Legal Researcher',      desc: 'Case law, contracts, compliance',         color: '#fb923c', tag: 'Legal'       },
  { id: 'pm',          icon: '◎', name: 'Project Manager',       desc: 'Agile, risk, stakeholder comms',          color: '#f472b6', tag: 'Ops'         },
  { id: 'security',    icon: '⬛', name: 'Security Auditor',      desc: 'Pen testing, vulnerability assessment',   color: '#ef4444', tag: 'Security'    },
  { id: 'finance',     icon: '∑', name: 'Financial Modeler',     desc: 'DCF, LBO, valuation, scenarios',          color: '#fbbf24', tag: 'Finance'     },
  { id: 'market',      icon: '◉', name: 'Market Researcher',     desc: 'Competitive intel, trend analysis',       color: '#60a5fa', tag: 'Strategy'    },
  { id: 'support',     icon: '◷', name: 'Customer Support',      desc: 'De-escalation, resolution, empathy',     color: '#4ade80', tag: 'Ops'         },
  { id: 'content',     icon: '✦', name: 'Content Strategist',    desc: 'SEO, brand voice, editorial calendar',    color: '#c084fc', tag: 'Marketing'   },
  { id: 'devops',      icon: '∞', name: 'DevOps Engineer',       desc: 'CI/CD, infra, incident response',         color: '#38bdf8', tag: 'Engineering' },
]

const TAGS = ['All', ...new Set(AGENTS.map(a => a.tag))]

const STARTER_PROMPTS = [
  {
    id: 's1', category: 'Work', color: '#f59e0b',
    title: 'Summarize This Email',
    desc: 'Paste in any long email and get the key points in 3 bullets.',
    prompt: 'Summarize the following email in 3 concise bullet points. Highlight any action items or deadlines.\n\nEmail:\n[PASTE EMAIL HERE]',
  },
  {
    id: 's2', category: 'Work', color: '#f59e0b',
    title: 'Write a Performance Review',
    desc: 'Generate a professional review from a few notes.',
    prompt: 'Write a professional performance review based on these notes. Include strengths, areas for improvement, and a summary.\n\nRole: [ROLE]\nNotes: [YOUR NOTES HERE]',
  },
  {
    id: 's3', category: 'Work', color: '#f59e0b',
    title: 'Meeting Notes → Action Items',
    desc: 'Paste raw notes, get a clean action item list.',
    prompt: 'Convert these meeting notes into a clean action item list. For each item include: task, owner (if mentioned), deadline (if mentioned).\n\nNotes:\n[PASTE NOTES HERE]',
  },
  {
    id: 's4', category: 'Work', color: '#f59e0b',
    title: 'Reply to a Difficult Email',
    desc: 'Draft a calm, professional response to a tough message.',
    prompt: 'Help me write a professional, calm reply to this email. My goal is to [YOUR GOAL]. Keep it concise and respectful.\n\nOriginal email:\n[PASTE EMAIL HERE]',
  },
  {
    id: 's5', category: 'Writing', color: '#a78bfa',
    title: "Explain Like I'm 5",
    desc: 'Make any complex topic simple and clear.',
    prompt: "Explain the following concept as if talking to a curious 10-year-old. Use simple language, a relatable analogy, under 150 words.\n\nConcept: [TOPIC HERE]",
  },
  {
    id: 's6', category: 'Writing', color: '#a78bfa',
    title: 'Improve My Writing',
    desc: 'Paste any text and get a cleaner, sharper version.',
    prompt: 'Improve this text. Make it clearer, more concise, and professional while keeping my original voice and meaning. Show the revised version only.\n\n[PASTE YOUR TEXT HERE]',
  },
  {
    id: 's7', category: 'Writing', color: '#a78bfa',
    title: 'Write a LinkedIn Post',
    desc: 'Turn a story or idea into an engaging post.',
    prompt: 'Write a LinkedIn post from this idea. Strong opening line, short paragraphs, end with a question or CTA. 150-200 words.\n\nIdea: [DESCRIBE HERE]',
  },
  {
    id: 's8', category: 'Writing', color: '#a78bfa',
    title: 'Proofread & Fix Grammar',
    desc: 'Clean up any text without changing your meaning.',
    prompt: 'Proofread and fix all grammar, spelling, and punctuation errors in this text. Do not change the tone or meaning. Return only the corrected version.\n\n[PASTE TEXT HERE]',
  },
  {
    id: 's9', category: 'Learning', color: '#34d399',
    title: 'Teach Me Anything',
    desc: "Get a structured beginner's guide on any topic.",
    prompt: 'Teach me [TOPIC] from scratch. Give me: (1) one-sentence summary, (2) why it matters, (3) the 3 most important concepts, (4) the best next step to learn more.',
  },
  {
    id: 's10', category: 'Learning', color: '#34d399',
    title: 'Make a Study Plan',
    desc: 'Get a week-by-week roadmap for any skill.',
    prompt: 'Create a 4-week study plan for learning [SKILL]. I have [X hours] per week. Include resources, daily tasks, and a milestone per week.',
  },
  {
    id: 's11', category: 'Learning', color: '#34d399',
    title: 'Summarize an Article',
    desc: 'Paste any article and get the core ideas fast.',
    prompt: 'Summarize this article: (1) main argument in one sentence, (2) 3 key points, (3) one thing I should do or think about as a result.\n\nArticle:\n[PASTE HERE]',
  },
  {
    id: 's12', category: 'Learning', color: '#34d399',
    title: 'Quiz Me on This Topic',
    desc: 'Test your understanding with AI-generated questions.',
    prompt: 'Create a 5-question quiz to test my understanding of [TOPIC]. Mix multiple choice, true/false, and one short answer. After I respond, give me answers and explain any I got wrong.',
  },
  {
    id: 's13', category: 'Life', color: '#60a5fa',
    title: 'Help Me Make a Decision',
    desc: 'Think through any big decision clearly.',
    prompt: 'Help me think through this decision. Give me pros and cons, what I might be overlooking, and the one question I should ask myself to get clarity.\n\nDecision: [DESCRIBE IT]',
  },
  {
    id: 's14', category: 'Life', color: '#60a5fa',
    title: 'Plan My Week',
    desc: 'Turn your task list into a realistic schedule.',
    prompt: 'Help me plan my week. Organize these tasks into a day-by-day schedule Mon-Fri. Flag anything overloaded and suggest what could move.\n\nTasks:\n[LIST TASKS AND MEETINGS]',
  },
  {
    id: 's15', category: 'Life', color: '#60a5fa',
    title: 'Write My Bio',
    desc: 'Generate a professional bio from a few bullet points.',
    prompt: 'Write a professional third-person bio under 100 words. Warm but credible.\n\nName: [NAME]\nRole: [JOB TITLE]\nBackground: [KEY FACTS]',
  },
  {
    id: 's16', category: 'Life', color: '#60a5fa',
    title: 'Give Me Honest Feedback',
    desc: "Get direct, constructive critique on any idea.",
    prompt: "Give me honest, direct feedback. Don't sugarcoat — tell me what's weak, what's strong, and the single most important thing to change.\n\n[PASTE YOUR IDEA OR WORK HERE]",
  },
]

const STARTER_CATEGORIES = ['All', 'Work', 'Writing', 'Learning', 'Life']


const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@600;700;800&display=swap');
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #0e0e0e; }
  ::-webkit-scrollbar-thumb { background: #252525; border-radius: 3px; }

  .agent-card {
    background: #0f0f0f; border: 1px solid #1c1c1c; border-radius: 6px;
    padding: 20px 18px 38px; cursor: pointer; position: relative;
    transition: all 0.16s ease; overflow: hidden;
  }
  .agent-card::after {
    content: 'FORGE →'; position: absolute; bottom: 12px; right: 14px;
    font-size: 9px; letter-spacing: 0.12em; color: #222;
    font-family: 'DM Mono', monospace; transition: color 0.16s;
  }
  .agent-card:hover { border-color: var(--ac); transform: translateY(-3px);
    box-shadow: 0 8px 28px color-mix(in srgb, var(--ac) 12%, transparent); }
  .agent-card:hover::after { color: var(--ac); }
  .agent-card:active { transform: translateY(-1px); }
  .agent-card.locked { opacity: 0.35; cursor: not-allowed; }
  .agent-card.locked:hover { transform: none; box-shadow: none; border-color: #1c1c1c; }
  .agent-card.locked::after { content: '🔒 PRO'; color: #2a2a2a; }

  .btn {
    background: none; border: 1px solid #252525; color: #666;
    padding: 7px 14px; font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: 0.09em; text-transform: uppercase;
    cursor: pointer; border-radius: 4px; transition: all 0.13s; white-space: nowrap;
  }
  .btn:hover { border-color: #404040; color: #aaa; }
  .btn.amber { border-color: rgba(245,158,11,0.35); color: #f59e0b; }
  .btn.amber:hover { background: #f59e0b; color: #000; border-color: #f59e0b; }
  .btn.green { border-color: rgba(74,222,128,0.3); color: #4ade80; }
  .btn.red { border-color: rgba(239,68,68,0.3); color: #ef4444; }
  .btn.red:hover { background: #ef4444; color: #fff; }
  .btn.cyan { border-color: rgba(34,211,238,0.3); color: #22d3ee; }
  .btn.cyan:hover { background: #22d3ee; color: #000; }
  .btn:disabled { opacity: 0.25; cursor: not-allowed; pointer-events: none; }

  .nav-tab {
    background: none; border: none; border-bottom: 2px solid transparent;
    font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.1em;
    text-transform: uppercase; cursor: pointer; padding: 8px 16px;
    color: #3a3a3a; transition: all 0.13s;
  }
  .nav-tab:hover { color: #666; }
  .nav-tab.on { color: #f59e0b; border-bottom-color: #f59e0b; }

  .pill {
    background: none; border: 1px solid #1c1c1c; color: #3a3a3a;
    padding: 4px 12px; font-family: 'DM Mono', monospace; font-size: 9px;
    letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
    border-radius: 20px; transition: all 0.13s;
  }
  .pill:hover { border-color: #2e2e2e; color: #666; }
  .pill.on { border-color: rgba(245,158,11,0.4); color: #f59e0b; background: rgba(245,158,11,0.05); }

  .finput {
    background: #0c0c0c; border: 1px solid #1c1c1c; color: #ccc;
    padding: 9px 13px; font-family: 'DM Mono', monospace; font-size: 12px;
    border-radius: 4px; outline: none; width: 100%; transition: border-color 0.13s;
  }
  .finput:focus { border-color: #2e2e2e; }
  .finput::placeholder { color: #2a2a2a; }
  textarea.finput { resize: vertical; min-height: 72px; line-height: 1.6; }

  .lib-card {
    background: #0f0f0f; border: 1px solid #1c1c1c; border-radius: 6px;
    padding: 16px 18px; cursor: pointer; transition: border-color 0.14s;
  }
  .lib-card:hover { border-color: #2a2a2a; }

  .pout h2 {
    color: #f59e0b; font-family: 'Syne', sans-serif; font-size: 10px;
    letter-spacing: 0.14em; text-transform: uppercase; margin: 22px 0 7px;
    padding-bottom: 5px; border-bottom: 1px solid #141414;
  }
  .pout h2:first-child { margin-top: 0; }
  .pout p { color: #888; line-height: 1.8; font-size: 12.5px; margin-bottom: 3px; }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .fu { animation: fadeUp 0.28s ease forwards; }

  .scanline {
    position: fixed; inset: 0; pointer-events: none; z-index: 9999;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px);
  }

  .overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.88);
    display: flex; align-items: center; justify-content: center;
    z-index: 500; backdrop-filter: blur(6px);
    animation: fadeUp 0.18s ease;
  }
  .modal {
    background: #0f0f0f; border: 1px solid #1e1e1e; border-radius: 8px;
    padding: 32px; position: relative;
  }
`

const parsePrompt = (text) =>
  text.split('\n').map((line, i) => {
    if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>
    if (line.trim() === '') return <br key={i} />
    return <p key={i}>{line.replace(/\*\*(.*?)\*\*/g, '$1')}</p>
  })

const fmtDate = (ts) =>
  new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

export default function PromptForge() {
  const [view, setView] = useState('forge')
  const [selected, setSelected] = useState(null)
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [dots, setDots] = useState('')
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)
  const [tag, setTag] = useState('All')
  const [library, setLibrary] = useState([])
  const [usage, setUsage] = useState(0)
  const [isPro, setIsPro] = useState(false)
  const [modal, setModal] = useState(null)
  const [custName, setCustName] = useState('')
  const [custDesc, setCustDesc] = useState('')
  const [libSearch, setLibSearch] = useState('')
  const [starterCat, setStarterCat] = useState('All')
  const [starterCopied, setStarterCopied] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [showWalkthrough, setShowWalkthrough] = useState(false)
  const [walkthroughStep, setWalkthroughStep] = useState(0)

  useEffect(() => {
    setMounted(true)
    try {
      setUsage(parseInt(localStorage.getItem(LS_USAGE) || '0'))
      setIsPro(localStorage.getItem(LS_PRO) === 'true')
      const lib = JSON.parse(localStorage.getItem(LS_LIB) || '[]')
      setLibrary(lib)
      if (!localStorage.getItem(LS_SEEN)) setShowWalkthrough(true)
    } catch {}
  }, [])

  const closeWalkthrough = () => {
    setShowWalkthrough(false)
    setWalkthroughStep(0)
    try { localStorage.setItem(LS_SEEN, 'true') } catch {}
  }

  const openWalkthrough = () => { setWalkthroughStep(0); setShowWalkthrough(true) }

  useEffect(() => {
    if (!loading) return
    const t = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 380)
    return () => clearInterval(t)
  }, [loading])

  const atLimit = !isPro && usage >= FREE_LIMIT
  const remaining = Math.max(0, FREE_LIMIT - usage)

  const generate = async (name, desc, agentObj) => {
    if (atLimit) { setModal('upgrade'); return }
    const agent = agentObj || { id: 'custom', name, desc, color: '#22d3ee', icon: '✦' }
    setSelected(agent)
    setPrompt(''); setLoading(true); setCopied(false); setSaved(false)

    const newUsage = usage + 1
    setUsage(newUsage)
    try { localStorage.setItem(LS_USAGE, String(newUsage)) } catch {}

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentName: name, agentDesc: desc }),
      })
      const data = await res.json()
      setPrompt(data.text || data.error || 'Error generating.')
    } catch {
      setPrompt('Connection error. Try again.')
    } finally {
      setLoading(false)
    }
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

  const activatePro = () => {
    setIsPro(true)
    try { localStorage.setItem(LS_PRO, 'true') } catch {}
    setModal(null)
  }

  const copy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const reset = () => { setSelected(null); setPrompt(''); setSaved(false) }

  const visibleAgents = tag === 'All' ? AGENTS : AGENTS.filter(a => a.tag === tag)
  const visibleLib = library.filter(i => !libSearch || i.agentName.toLowerCase().includes(libSearch.toLowerCase()))

  if (!mounted) return null

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#d0d0d0', fontFamily: "'DM Mono', monospace" }}>
      <style>{CSS}</style>
      <div className="scanline" />

      {/* ? Button */}
      <button
        onClick={openWalkthrough}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 400,
          width: 36, height: 36, borderRadius: '50%',
          background: '#0f0f0f', border: '1px solid #2a2a2a',
          color: '#444', fontFamily: "'DM Mono', monospace",
          fontSize: 14, cursor: 'pointer', transition: 'all 0.14s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        onMouseEnter={e => { e.target.style.borderColor = '#f59e0b'; e.target.style.color = '#f59e0b' }}
        onMouseLeave={e => { e.target.style.borderColor = '#2a2a2a'; e.target.style.color = '#444' }}
      >?</button>

      {/* Walkthrough Modal */}
      {showWalkthrough && (
        <div className="overlay" onClick={closeWalkthrough}>
          <div className="modal" style={{ maxWidth: 480, width: '92%' }} onClick={e => e.stopPropagation()}>
            {/* Step indicators */}
            <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
              {WALKTHROUGH.map((_, i) => (
                <div key={i} style={{
                  height: 2, flex: 1, borderRadius: 2,
                  background: i <= walkthroughStep ? '#f59e0b' : '#1e1e1e',
                  transition: 'background 0.2s',
                }} />
              ))}
            </div>

            {/* Step content */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 28, marginBottom: 14, color: '#f59e0b' }}>
                {WALKTHROUGH[walkthroughStep].icon}
              </div>
              <div style={{ fontSize: 9, color: '#333', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 8 }}>
                Step {WALKTHROUGH[walkthroughStep].step} of {WALKTHROUGH.length}
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: '#f0f0f0', marginBottom: 12, letterSpacing: '-0.02em' }}>
                {WALKTHROUGH[walkthroughStep].title}
              </h2>
              <p style={{ color: '#555', fontSize: 13, lineHeight: 1.8 }}>
                {WALKTHROUGH[walkthroughStep].body}
              </p>
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                className="btn"
                style={{ visibility: walkthroughStep === 0 ? 'hidden' : 'visible' }}
                onClick={() => setWalkthroughStep(s => s - 1)}
              >← Back</button>

              {walkthroughStep < WALKTHROUGH.length - 1 ? (
                <button className="btn amber" onClick={() => setWalkthroughStep(s => s + 1)}>
                  Next →
                </button>
              ) : (
                <button className="btn amber" onClick={closeWalkthrough}>
                  Start Forging →
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {modal === 'upgrade' && (
        <div className="overlay" onClick={() => setModal(null)}>
          <div className="modal" style={{ maxWidth: 460, width: '90%' }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 9, color: '#f59e0b', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>Free limit reached</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 30, color: '#f0f0f0', marginBottom: 10, letterSpacing: '-0.02em' }}>
              Upgrade to Pro
            </h2>
            <p style={{ color: '#444', fontSize: 12, lineHeight: 1.7, marginBottom: 22 }}>
              You've used your {FREE_LIMIT} free generates. Unlock unlimited access.
            </p>
            <div style={{ background: '#0a0a0a', border: '1px solid #181818', borderRadius: 6, padding: 18, marginBottom: 24 }}>
              {['Unlimited prompt generation', 'Unlimited library saves', 'Custom agent builder', 'Team sharing (coming soon)', 'Export to JSON & Markdown'].map(f => (
                <div key={f} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 12, color: '#666', alignItems: 'center' }}>
                  <span style={{ color: '#4ade80', flexShrink: 0 }}>✓</span>{f}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 32, color: '#f0f0f0' }}>$12</span>
                <span style={{ color: '#333', fontSize: 12 }}> /mo</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn" onClick={() => setModal(null)}>Cancel</button>
                <button className="btn amber" onClick={activatePro}>Upgrade Now →</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Agent Modal */}
      {modal === 'custom' && (
        <div className="overlay" onClick={() => setModal(null)}>
          <div className="modal" style={{ maxWidth: 440, width: '90%' }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 9, color: '#22d3ee', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>Custom</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 26, color: '#f0f0f0', marginBottom: 20, letterSpacing: '-0.02em' }}>
              Build Your Agent
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
              <div>
                <label style={{ fontSize: 9, color: '#333', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Agent Name</label>
                <input className="finput" placeholder="e.g. Compliance Officer" value={custName} onChange={e => setCustName(e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: 9, color: '#333', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Specialty</label>
                <textarea className="finput" placeholder="e.g. Regulatory compliance, policy interpretation, audit prep..." value={custDesc} onChange={e => setCustDesc(e.target.value)} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button className="btn" onClick={() => setModal(null)}>Cancel</button>
              <button
                className="btn cyan"
                disabled={!custName.trim() || !custDesc.trim()}
                onClick={() => {
                  const n = custName.trim(), d = custDesc.trim()
                  setModal(null); setView('forge')
                  generate(n, d, { id: 'custom', name: n, desc: d, color: '#22d3ee', icon: '✦' })
                  setCustName(''); setCustDesc('')
                }}
              >Forge It →</button>
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
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: '#efefef' }}>{modal.agentName}</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn amber" onClick={() => copy(modal.prompt)}>{copied ? '✓ Copied' : 'Copy'}</button>
                <button className="btn red" onClick={() => deleteFromLib(modal.id)}>Delete</button>
                <button className="btn" onClick={() => setModal(null)}>✕</button>
              </div>
            </div>
            <div className="pout fu">{parsePrompt(modal.prompt)}</div>
          </div>
        </div>
      )}

      <div style={{ maxWidth: 980, margin: '0 auto', padding: '40px 22px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800, lineHeight: 0.95,
              fontSize: 'clamp(30px, 5vw, 54px)', letterSpacing: '-0.03em',
              background: 'linear-gradient(125deg, #d97706 0%, #fde68a 55%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: 7,
            }}>PROMPT FORGE</h1>
            <p style={{ fontSize: 10, color: '#2e2e2e', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              One click · Fully packaged agent prompt · Zero setup
            </p>
          </div>

          <div style={{ background: '#0c0c0c', border: '1px solid #181818', borderRadius: 6, padding: '14px 16px', minWidth: 172 }}>
            {isPro ? (
              <div>
                <div style={{ fontSize: 9, color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>Plan</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ color: '#f59e0b', fontSize: 13 }}>★</span>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#f0f0f0' }}>PRO</span>
                  <span style={{ color: '#333', fontSize: 10 }}>Unlimited</span>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 9, color: '#333', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Free</span>
                  <span style={{ fontSize: 9, color: remaining > 0 ? '#f59e0b' : '#ef4444' }}>{remaining}/{FREE_LIMIT} left</span>
                </div>
                <div style={{ background: '#141414', borderRadius: 2, height: 3, marginBottom: 10, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 2,
                    width: `${Math.min(100, (usage / FREE_LIMIT) * 100)}%`,
                    background: remaining > 0 ? '#f59e0b' : '#ef4444',
                    transition: 'width 0.4s ease',
                  }} />
                </div>
                <button className="btn amber" style={{ width: '100%', padding: '6px 0', fontSize: 9 }} onClick={() => setModal('upgrade')}>
                  Upgrade · $12/mo
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #141414', marginBottom: 24 }}>
          <div style={{ display: 'flex' }}>
            <button className={`nav-tab ${view === 'forge' ? 'on' : ''}`} onClick={() => { setView('forge'); reset() }}>Forge</button>
            <button className={`nav-tab ${view === 'library' ? 'on' : ''}`} onClick={() => setView('library')}>
              Library {library.length > 0 && <span style={{ color: '#2a2a2a', marginLeft: 3 }}>({library.length})</span>}
            </button>
            <button className={`nav-tab ${view === 'starter' ? 'on' : ''}`} onClick={() => setView('starter')}>Starter</button>
          </div>
          <button className="btn cyan" style={{ fontSize: 9 }} onClick={() => atLimit ? setModal('upgrade') : setModal('custom')}>
            + Custom Agent
          </button>
        </div>

        {/* Forge Grid */}
        {view === 'forge' && !selected && (
          <div className="fu">
            <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 20 }}>
              {TAGS.map(t => <button key={t} className={`pill ${tag === t ? 'on' : ''}`} onClick={() => setTag(t)}>{t}</button>)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))', gap: 9 }}>
              {visibleAgents.map((agent, i) => {
                const locked = !isPro && i >= FREE_LIMIT && atLimit
                return (
                  <div key={agent.id} className={`agent-card ${locked ? 'locked' : ''}`}
                    style={{ '--ac': agent.color }}
                    onClick={() => !locked && generate(agent.name, agent.desc, agent)}
                  >
                    <div style={{ fontSize: 19, marginBottom: 10, color: agent.color }}>{agent.icon}</div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12.5, color: '#eee', marginBottom: 5 }}>{agent.name}</div>
                    <div style={{ fontSize: 9.5, color: '#303030', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.5 }}>{agent.desc}</div>
                    <div style={{ position: 'absolute', top: 12, right: 12, fontSize: 8.5, color: '#1c1c1c', background: '#141414', padding: '2px 5px', borderRadius: 2 }}>
                      {agent.tag}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Output */}
        {view === 'forge' && selected && (
          <div className="fu">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button className="btn" onClick={reset}>← Back</button>
                <span style={{ color: selected.color, fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14 }}>
                  {selected.icon} {selected.name}
                </span>
              </div>
              {!loading && prompt && (
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn" onClick={() => generate(selected.name, selected.desc, selected)}>↺ Regen</button>
                  {!saved
                    ? <button className="btn cyan" onClick={saveToLib}>+ Save to Library</button>
                    : <button className="btn green" disabled>✓ Saved</button>
                  }
                  <button className={`btn ${copied ? 'green' : 'amber'}`} onClick={() => copy(prompt)}>
                    {copied ? '✓ Copied!' : 'Copy Prompt'}
                  </button>
                </div>
              )}
            </div>

            <div style={{
              background: '#090909', border: `1px solid ${loading ? selected.color + '28' : '#161616'}`,
              borderRadius: 6, padding: 30, minHeight: 360, transition: 'border-color 0.3s',
            }}>
              {loading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 300, gap: 18 }}>
                  <div style={{
                    width: 40, height: 40, border: '2px solid #181818',
                    borderTop: `2px solid ${selected.color}`,
                    borderRadius: '50%', animation: 'spin 0.7s linear infinite',
                  }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: selected.color, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 4 }}>Forging{dots}</div>
                    <div style={{ color: '#222', fontSize: 10 }}>Generating {selected.name} prompt</div>
                  </div>
                </div>
              ) : prompt ? (
                <div className="pout fu">{parsePrompt(prompt)}</div>
              ) : null}
            </div>

            {!loading && prompt && (
              <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', fontSize: 9.5, color: '#222' }}>
                <span>{prompt.length.toLocaleString()} chars · {prompt.split(/\s+/).filter(Boolean).length} words</span>
                <span style={{ color: '#163316' }}>● READY TO DEPLOY</span>
              </div>
            )}
          </div>
        )}

        {/* Library */}
        {view === 'library' && (
          <div className="fu">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <input className="finput" placeholder="Search library..." value={libSearch}
                onChange={e => setLibSearch(e.target.value)} style={{ maxWidth: 280 }} />
              <span style={{ fontSize: 10, color: '#282828', whiteSpace: 'nowrap' }}>
                {visibleLib.length} prompt{visibleLib.length !== 1 ? 's' : ''}
              </span>
            </div>

            {visibleLib.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '56px 20px' }}>
                <div style={{ fontSize: 28, marginBottom: 14, opacity: 0.15 }}>◈</div>
                <div style={{ color: '#282828', fontSize: 11, letterSpacing: '0.08em', marginBottom: 18 }}>
                  {libSearch ? 'No prompts match' : 'Library is empty — save your first prompt'}
                </div>
                <button className="btn amber" onClick={() => { setView('forge'); reset() }}>Go Forge →</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 9 }}>
                {visibleLib.map(item => (
                  <div key={item.id} className="lib-card" onClick={() => setModal(item)}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: item.agentColor, fontSize: 15 }}>{item.agentIcon}</span>
                        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12.5, color: '#e0e0e0' }}>{item.agentName}</span>
                      </div>
                      <button className="btn red" style={{ padding: '2px 7px', fontSize: 9 }}
                        onClick={e => { e.stopPropagation(); deleteFromLib(item.id) }}>✕</button>
                    </div>
                    <div style={{ fontSize: 10, color: '#252525', letterSpacing: '0.04em', marginBottom: 10, lineHeight: 1.5 }}>
                      {item.agentDesc}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 9.5, color: '#202020' }}>{fmtDate(item.savedAt)}</span>
                      <span style={{ fontSize: 9.5, color: '#202020' }}>{item.prompt.split(/\s+/).filter(Boolean).length} words</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}


        {/* Starter Pack */}
        {view === 'starter' && (
          <div className="fu">
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 11, color: '#333', lineHeight: 1.7, marginBottom: 16 }}>
                New to AI? Start here. These are ready-to-use prompts for everyday tasks — just copy, paste into any AI tool, and fill in the brackets.
              </p>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {STARTER_CATEGORIES.map(c => (
                  <button key={c} className={`pill ${starterCat === c ? 'on' : ''}`} onClick={() => setStarterCat(c)}>{c}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 9 }}>
              {STARTER_PROMPTS.filter(p => starterCat === 'All' || p.category === starterCat).map(item => (
                <div key={item.id} style={{
                  background: '#0f0f0f', border: '1px solid #1c1c1c', borderRadius: 6,
                  padding: '18px 18px 16px', position: 'relative', transition: 'border-color 0.14s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = item.color + '55'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#1c1c1c'}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8, gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 8, color: item.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>{item.category}</div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: '#eee' }}>{item.title}</div>
                    </div>
                    <button
                      className={`btn ${starterCopied === item.id ? 'green' : 'amber'}`}
                      style={{ padding: '4px 10px', fontSize: 9, flexShrink: 0 }}
                      onClick={() => {
                        navigator.clipboard.writeText(item.prompt)
                        setStarterCopied(item.id)
                        setTimeout(() => setStarterCopied(null), 2000)
                      }}
                    >{starterCopied === item.id ? '✓' : 'Copy'}</button>
                  </div>
                  <div style={{ fontSize: 11, color: '#383838', lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</div>
                  <div style={{
                    background: '#0a0a0a', border: '1px solid #161616', borderRadius: 4,
                    padding: '10px 12px', fontSize: 10.5, color: '#2e2e2e', lineHeight: 1.7,
                    fontFamily: "'DM Mono', monospace", whiteSpace: 'pre-wrap',
                    maxHeight: 80, overflow: 'hidden', position: 'relative',
                  }}>
                    {item.prompt.slice(0, 120)}{item.prompt.length > 120 ? '...' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 60, paddingTop: 18, borderTop: '1px solid #0d0d0d', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 8.5, color: '#181818', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Prompt Forge v2.0</span>
          <span style={{ fontSize: 8.5, color: '#181818' }}>Powered by Claude</span>
        </div>
      </div>
    </div>
  )
}
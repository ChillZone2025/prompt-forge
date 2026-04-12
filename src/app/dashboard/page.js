'use client'

import { useState, useEffect, useCallback } from 'react'
import { useUser, useClerk, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'
import { INDUSTRIES } from '../data/industries'

// ─── Normalize Supabase row → display entry ───────────────────────────────────
function normalizeEntry(row) {
  let agentColor = '#6b7390', agentIcon = '⚒', agentDesc = ''
  outer: for (const agents of Object.values(INDUSTRIES)) {
    for (const a of agents) {
      if (a.id === row.agent_id) { agentColor = a.color; agentIcon = a.icon; agentDesc = a.desc; break outer }
    }
  }
  return {
    id: row.id,
    agentName: row.agent_name,
    agentColor,
    agentIcon,
    agentDesc,
    prompt: row.prompt_text,
    savedAt: new Date(row.created_at).getTime(),
    industry: row.industry,
    agent_id: row.agent_id,
  }
}

const fmtDate = (ts) =>
  new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

// ─── Dashboard ────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const { user, isSignedIn, isLoaded } = useUser()
  const { openSignIn } = useClerk()

  const isPro = !!user?.publicMetadata?.isPro

  const [prompts, setPrompts]       = useState([])
  const [loading, setLoading]       = useState(true)
  const [search, setSearch]         = useState('')
  const [selected, setSelected]     = useState(null)  // expanded prompt
  const [copied, setCopied]         = useState(false)
  const [mounted, setMounted]       = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const loadPrompts = useCallback(() => {
    if (!isSignedIn || !isPro) { setLoading(false); return }
    setLoading(true)
    fetch('/api/prompts/list')
      .then(r => r.json())
      .then(data => { if (data.prompts) setPrompts(data.prompts.map(normalizeEntry)) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [isSignedIn, isPro])

  useEffect(() => { if (isLoaded) loadPrompts() }, [isLoaded, loadPrompts])

  const deletePrompt = async (id) => {
    setPrompts(prev => prev.filter(p => p.id !== id))
    if (selected?.id === id) setSelected(null)
    try {
      await fetch('/api/prompts/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
    } catch {}
  }

  const copy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const visible = search.trim()
    ? prompts.filter(p => p.agentName.toLowerCase().includes(search.toLowerCase()) || (p.industry || '').toLowerCase().includes(search.toLowerCase()))
    : prompts

  if (!mounted || !isLoaded) return null

  return (
    <div style={{ minHeight: '100vh', background: '#f8f7f4', fontFamily: "'Inter', sans-serif", color: '#1a1a2e' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .db-card { background: #fff; border: 1px solid #e8e4dc; border-radius: 12px; padding: 20px 22px; cursor: pointer; transition: all 0.14s; }
        .db-card:hover { border-color: #d4c9b0; background: #fefdf9; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .db-btn { background: none; border: 1px solid #e8e4dc; color: #6b7390; padding: 8px 16px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; cursor: pointer; border-radius: 8px; transition: all 0.14s; white-space: nowrap; }
        .db-btn:hover { border-color: #d4c9b0; background: rgba(0,0,0,0.02); }
        .db-btn.primary { background: #c8501a; border-color: #c8501a; color: #fff; font-weight: 600; }
        .db-btn.primary:hover { background: #8c3510; border-color: #8c3510; }
        .db-btn.success { background: #10b981; border-color: #10b981; color: #fff; }
        .db-btn.danger { border-color: rgba(239,68,68,0.3); color: #ef4444; }
        .db-btn.danger:hover { background: rgba(239,68,68,0.08); border-color: rgba(239,68,68,0.5); }
        .db-input { background: #fff; border: 1px solid #e8e4dc; color: #1a1a2e; padding: 10px 14px; font-family: 'Inter', sans-serif; font-size: 13px; border-radius: 8px; outline: none; transition: border-color 0.14s; }
        .db-input:focus { border-color: rgba(200,80,26,0.4); box-shadow: 0 0 0 3px rgba(200,80,26,0.08); }
        .db-input::placeholder { color: #9ca3af; }
        .overlay { position: fixed; inset: 0; background: rgba(248,247,244,0.88); display: flex; align-items: center; justify-content: center; z-index: 500; backdrop-filter: blur(16px); padding: 20px; }
        .modal { background: #fff; border: 1px solid #e8e4dc; border-radius: 14px; padding: 36px; position: relative; box-shadow: 0 24px 80px rgba(0,0,0,0.12); max-width: 680px; width: 100%; max-height: 86vh; overflow-y: auto; }
        .pout h2 { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #c8501a; margin: 28px 0 12px; padding-bottom: 8px; border-bottom: 1px solid #e8e4dc; }
        .pout h2:first-child { margin-top: 0; }
        .pout p { font-family: 'JetBrains Mono', monospace; color: #374151; line-height: 1.8; font-size: 13px; margin-bottom: 4px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .fu { animation: fadeUp 0.2s ease forwards; }
      `}</style>

      {/* ── Expanded prompt modal ── */}
      {selected && (
        <div className="overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: selected.agentColor, fontSize: 18 }}>{selected.agentIcon}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#1a1a2e' }}>{selected.agentName}</div>
                  {selected.industry && <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 1 }}>{selected.industry}</div>}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className={`db-btn ${copied ? 'success' : 'primary'}`} onClick={() => copy(selected.prompt)}>
                  {copied ? '✓ Copied' : 'Copy Prompt'}
                </button>
                <button className="db-btn danger" onClick={() => deletePrompt(selected.id)}>Delete</button>
                <button className="db-btn" onClick={() => setSelected(null)}>✕</button>
              </div>
            </div>
            <div className="pout">
              {selected.prompt.split('\n').map((line, i) => {
                if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>
                if (line.trim() === '') return <br key={i} />
                return <p key={i}>{line.replace(/\*\*(.*?)\*\*/g, '$1')}</p>
              })}
            </div>
            <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid #e8e4dc', fontSize: 11, color: '#9ca3af' }}>
              Saved {fmtDate(selected.savedAt)} · {selected.prompt.split(/\s+/).filter(Boolean).length} words
            </div>
          </div>
        </div>
      )}

      {/* ── Page ── */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '52px 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, color: '#9ca3af', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>Prompt Forge</div>
            <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 24, color: '#1a1a2e', letterSpacing: '-0.01em' }}>
              Saved Library
            </h1>
            {!loading && isSignedIn && isPro && (
              <div style={{ fontSize: 13, color: '#6b7390', marginTop: 4 }}>
                {prompts.length} prompt{prompts.length !== 1 ? 's' : ''} saved
              </div>
            )}
          </div>
          <Link href="/forge" style={{ textDecoration: 'none' }}>
            <button className="db-btn primary">← Back to Forge</button>
          </Link>
        </div>

        {/* Not signed in */}
        {!isSignedIn && (
          <div style={{ textAlign: 'center', padding: '64px 20px', background: '#fff', border: '1px solid #e8e4dc', borderRadius: 14 }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🔒</div>
            <div style={{ fontWeight: 600, fontSize: 16, color: '#1a1a2e', marginBottom: 8 }}>Sign in to view your library</div>
            <div style={{ color: '#9ca3af', fontSize: 13, marginBottom: 24 }}>Your saved prompts are waiting for you.</div>
            <SignInButton mode="redirect">
              <button className="db-btn primary">Sign In →</button>
            </SignInButton>
          </div>
        )}

        {/* Signed in but not Pro */}
        {isSignedIn && !isPro && (
          <div style={{ textAlign: 'center', padding: '64px 20px', background: '#fff', border: '1px solid #e8e4dc', borderRadius: 14 }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>★</div>
            <div style={{ fontWeight: 600, fontSize: 16, color: '#1a1a2e', marginBottom: 8 }}>Pro feature</div>
            <div style={{ color: '#9ca3af', fontSize: 13, marginBottom: 24 }}>Upgrade to Pro to save prompts and access your library across sessions.</div>
            <Link href="/forge">
              <button className="db-btn primary">Upgrade to Pro · $12/mo →</button>
            </Link>
          </div>
        )}

        {/* Loading */}
        {isSignedIn && isPro && loading && (
          <div style={{ textAlign: 'center', padding: '64px 20px', color: '#9ca3af', fontSize: 13 }}>
            Loading your library…
          </div>
        )}

        {/* Library content */}
        {isSignedIn && isPro && !loading && (
          <div className="fu">
            {/* Search */}
            <div style={{ marginBottom: 24 }}>
              <input
                className="db-input"
                style={{ width: '100%', maxWidth: 320 }}
                placeholder="Search by agent or industry…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            {/* Empty state */}
            {visible.length === 0 && (
              <div style={{ textAlign: 'center', padding: '56px 20px', background: '#fff', border: '1px solid #e8e4dc', borderRadius: 14 }}>
                <div style={{ fontSize: 32, marginBottom: 14, opacity: 0.2 }}>📚</div>
                <div style={{ color: '#4b5563', fontSize: 14, marginBottom: 20 }}>
                  {search ? 'No prompts match your search.' : 'Your library is empty — generate and save your first prompt.'}
                </div>
                <Link href="/forge">
                  <button className="db-btn primary">Go to Forge →</button>
                </Link>
              </div>
            )}

            {/* Grid */}
            {visible.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
                {visible.map(item => (
                  <div key={item.id} className="db-card" onClick={() => setSelected(item)}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                        <span style={{ color: item.agentColor, fontSize: 16 }}>{item.agentIcon}</span>
                        <span style={{ fontWeight: 600, fontSize: 13, color: '#1a1a2e', lineHeight: 1.3 }}>{item.agentName}</span>
                      </div>
                      <button
                        className="db-btn danger"
                        style={{ padding: '2px 8px', fontSize: 10, flexShrink: 0 }}
                        title="Delete"
                        onClick={e => { e.stopPropagation(); deletePrompt(item.id) }}
                      >✕</button>
                    </div>
                    {item.agentDesc && (
                      <div style={{ fontSize: 12, color: '#6b7390', marginBottom: 10, lineHeight: 1.5 }}>
                        {item.agentDesc}
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                      <span style={{ fontSize: 11, color: '#9ca3af' }}>{fmtDate(item.savedAt)}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {item.industry && (
                          <span style={{ fontSize: 10, color: '#9ca3af', background: '#f2ede5', border: '1px solid #e8e4dc', padding: '1px 6px', borderRadius: 4 }}>
                            {item.industry}
                          </span>
                        )}
                        <span style={{ fontSize: 11, color: '#9ca3af' }}>{item.prompt.split(/\s+/).filter(Boolean).length}w</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: 56, paddingTop: 18, borderTop: '1px solid #e8e4dc', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: '#9ca3af' }}>Prompt Forge</span>
          <span style={{ fontSize: 11, color: '#9ca3af' }}>Powered by Claude</span>
        </div>
      </div>
    </div>
  )
}

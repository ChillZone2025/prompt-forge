'use client'

import { useState } from 'react'

// ─── QualityBadge ─────────────────────────────────────────────────────────────
// Props:
//   score        — number  — Tier 2 domain simulation score (e.g. 9.0)
//   tier1Passed  — boolean — Whether structural gate passed
//   lastValidated— string  — Validation date (e.g. '2026-03-20')
//
// Graceful fallback: renders nothing if score is missing or falsy.
// Mobile-safe: tooltip capped at 100vw - 32px, positioned above pill.

export default function QualityBadge({ score, tier1Passed, lastValidated }) {
  const [hovered, setHovered] = useState(false)

  if (!score) return null

  const fmtDate = (d) => {
    try {
      return new Date(d + 'T00:00:00').toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
      })
    } catch {
      return d
    }
  }

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Pill ── */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'rgba(200,80,26,0.05)',
        border: '1px solid rgba(200,80,26,0.18)',
        borderRadius: 20,
        padding: '4px 12px',
        cursor: 'default',
        fontSize: 11,
        fontFamily: "'Inter', sans-serif",
        color: '#4a4742',
        fontWeight: 500,
        userSelect: 'none',
        transition: 'border-color 0.14s, background 0.14s',
        ...(hovered ? {
          background: 'rgba(200,80,26,0.08)',
          borderColor: 'rgba(200,80,26,0.30)',
        } : {}),
      }}>
        <span style={{ color: '#10b981', fontSize: 12, lineHeight: 1 }}>✓</span>
        <span>Quality Verified</span>
        <span style={{ color: '#c8501a', fontWeight: 700 }}>
          {score.toFixed(1)}&thinsp;/&thinsp;10
        </span>
      </div>

      {/* ── Tooltip ── */}
      {hovered && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#ffffff',
          border: '1px solid #e8e4dc',
          borderRadius: 10,
          padding: '14px 16px',
          width: 264,
          maxWidth: 'calc(100vw - 32px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          zIndex: 100,
          fontFamily: "'Inter', sans-serif",
          pointerEvents: 'none',
        }}>

          {/* Rows */}
          <div style={{ marginBottom: 10 }}>
            <Row label="Tier 1 — Structure" value={tier1Passed ? '✓ Pass' : '✗ Fail'} valueColor={tier1Passed ? '#10b981' : '#ef4444'} />
            <Row label="Tier 2 — Domain sim" value={`${score.toFixed(1)} / 10`} valueColor="#c8501a" bold />
            {lastValidated && (
              <Row label="Last validated" value={fmtDate(lastValidated)} valueColor="#374151" />
            )}
          </div>

          {/* Divider + caption */}
          <div style={{
            paddingTop: 10,
            borderTop: '1px solid #e8e4dc',
            fontSize: 11,
            color: '#8a877f',
            lineHeight: 1.55,
          }}>
            Every Prompt Forge agent passes a 3-tier quality simulation before publication.
          </div>

          {/* Arrow — border layer */}
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0, height: 0,
            borderStyle: 'solid',
            borderWidth: '7px 6px 0 6px',
            borderColor: '#e8e4dc transparent transparent transparent',
          }} />
          {/* Arrow — fill layer */}
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-1px)',
            width: 0, height: 0,
            borderStyle: 'solid',
            borderWidth: '7px 6px 0 6px',
            borderColor: '#ffffff transparent transparent transparent',
          }} />
        </div>
      )}
    </div>
  )
}

// ─── Row helper ──────────────────────────────────────────────────────────────
function Row({ label, value, valueColor, bold }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6,
      fontSize: 12,
    }}>
      <span style={{ color: '#6b7390' }}>{label}</span>
      <span style={{ color: valueColor, fontWeight: bold ? 700 : 600, fontSize: bold ? 13 : 12 }}>
        {value}
      </span>
    </div>
  )
}

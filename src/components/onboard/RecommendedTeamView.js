'use client'

import Link from 'next/link'
import { track } from '@vercel/analytics'

export default function RecommendedTeamView({ resolution }) {
  const { subVerticalLabel, agents, primary_agent } = resolution ?? {}
  const secondary = (agents ?? []).slice(1, 3)

  if (!agents || agents.length === 0) {
    return (
      <div style={styles.fullscreen}>
        <p style={styles.emptyText}>
          We couldn't find an exact match —{' '}
          <Link href="/forge" style={styles.link}>Browse all agents →</Link>
        </p>
      </div>
    )
  }

  return (
    <div style={styles.fullscreen}>
      <style>{hoverCSS}</style>
      <div style={styles.container}>

        {/* Header */}
        <p style={styles.label}>Your AI Team</p>
        <h1 style={styles.heading}>
          Your AI Team for<br />
          <em style={styles.headingAccent}>{subVerticalLabel}</em>
        </h1>
        <p style={styles.subheading}>
          3 quality-verified agents, ready to deploy.
        </p>

        {/* Primary agent card */}
        {primary_agent && (
          <div style={styles.primaryCard}>
            <div style={styles.primaryCardTop}>
              <div>
                <p style={styles.agentName}>{primary_agent.name}</p>
                <div style={styles.badgeRow}>
                  <span style={styles.industryBadge}>{primary_agent.industry}</span>
                  {primary_agent.tier === 'pro' && (
                    <span style={styles.proBadge}>🔒 Pro</span>
                  )}
                </div>
              </div>
              <span style={styles.qualityScore}>{primary_agent.qualityScore?.toFixed(1)}</span>
            </div>
            <Link
              href={`/forge?agent=${primary_agent.id}`}
              style={styles.generateBtn}
              className="rtv-generate-btn"
              onClick={() => track('onboard_to_forge', { agent_id: primary_agent.id })}
            >
              Generate Prompt →
            </Link>
          </div>
        )}

        {/* Secondary agents */}
        {secondary.length > 0 && (
          <>
            <p style={styles.alsoLabel}>Also recommended</p>
            <div style={styles.secondaryGrid}>
              {secondary.map((agent) => (
                <div key={agent.id} style={styles.secondaryCard}>
                  <div style={styles.secondaryCardTop}>
                    <p style={styles.secondaryName}>{agent.name}</p>
                    {agent.tier === 'pro' && (
                      <span style={styles.proBadgeSm}>🔒 Pro</span>
                    )}
                  </div>
                  <p style={styles.secondaryScore}>{agent.qualityScore?.toFixed(1)}</p>
                  <Link
                    href={`/forge?agent=${agent.id}`}
                    style={styles.secondaryLink}
                    onClick={() => track('onboard_to_forge', { agent_id: agent.id })}
                  >
                    Generate →
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <div style={styles.cta}>
          <p style={styles.ctaText}>
            Sign up free to save your prompts and access all 267 agents.
          </p>
          <Link href="/sign-up" style={styles.ctaBtn}>
            Create Free Account
          </Link>
        </div>

      </div>
    </div>
  )
}

const hoverCSS = `
  .rtv-generate-btn:hover {
    background: #8c3510 !important;
    transform: translateY(-1px);
  }
`

const styles = {
  fullscreen: {
    minHeight: '100vh',
    background: '#faf8f5',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '80px 24px',
    fontFamily: "'DM Sans', sans-serif",
  },
  container: {
    width: '100%',
    maxWidth: '560px',
  },
  label: {
    fontSize: '11px',
    color: '#c8501a',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginBottom: '12px',
  },
  heading: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(28px, 5vw, 44px)',
    fontWeight: '400',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    color: '#0f0e0d',
    marginBottom: '10px',
    fontStyle: 'normal',
  },
  headingAccent: {
    color: '#c8501a',
  },
  subheading: {
    fontSize: '15px',
    color: '#8a877f',
    fontWeight: '300',
    marginBottom: '40px',
  },
  primaryCard: {
    background: '#ffffff',
    border: '1px solid rgba(15,14,13,0.10)',
    borderRadius: '16px',
    padding: '28px',
    marginBottom: '24px',
    boxShadow: '0 4px 20px rgba(15,14,13,0.06)',
  },
  primaryCardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  agentName: {
    fontSize: '19px',
    fontWeight: '600',
    color: '#0f0e0d',
    marginBottom: '8px',
    letterSpacing: '-0.01em',
  },
  badgeRow: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  industryBadge: {
    fontSize: '11px',
    background: '#f2ede5',
    border: '1px solid rgba(15,14,13,0.08)',
    borderRadius: '4px',
    padding: '3px 8px',
    color: '#4a4742',
    fontWeight: '400',
  },
  proBadge: {
    fontSize: '11px',
    background: '#c8501a',
    color: '#fff',
    borderRadius: '4px',
    padding: '3px 8px',
    fontWeight: '500',
    letterSpacing: '0.02em',
  },
  proBadgeSm: {
    fontSize: '10px',
    background: '#c8501a',
    color: '#fff',
    borderRadius: '4px',
    padding: '2px 6px',
    fontWeight: '500',
    flexShrink: '0',
  },
  qualityScore: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#c8501a',
    fontFamily: "'DM Serif Display', serif",
    flexShrink: '0',
  },
  generateBtn: {
    display: 'block',
    textAlign: 'center',
    background: '#c8501a',
    color: '#fff',
    borderRadius: '8px',
    padding: '13px 20px',
    fontSize: '15px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'background 0.2s, transform 0.15s',
  },
  alsoLabel: {
    fontSize: '11px',
    color: '#8a877f',
    letterSpacing: '0.10em',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginBottom: '12px',
  },
  secondaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginBottom: '40px',
  },
  secondaryCard: {
    background: '#ffffff',
    border: '1px solid rgba(15,14,13,0.10)',
    borderRadius: '12px',
    padding: '20px',
  },
  secondaryCardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '4px',
    gap: '8px',
  },
  secondaryName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f0e0d',
    lineHeight: '1.3',
  },
  secondaryScore: {
    fontSize: '13px',
    color: '#c8501a',
    fontWeight: '600',
    marginBottom: '14px',
  },
  secondaryLink: {
    fontSize: '13px',
    color: '#c8501a',
    textDecoration: 'none',
    fontWeight: '500',
  },
  cta: {
    background: '#f2ede5',
    border: '1px solid rgba(15,14,13,0.08)',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
  },
  ctaText: {
    fontSize: '14px',
    color: '#4a4742',
    marginBottom: '16px',
    lineHeight: '1.6',
    fontWeight: '300',
  },
  ctaBtn: {
    display: 'inline-block',
    background: '#0f0e0d',
    color: '#faf8f5',
    borderRadius: '8px',
    padding: '11px 22px',
    fontSize: '14px',
    fontWeight: '500',
    textDecoration: 'none',
  },
  emptyText: {
    fontSize: '16px',
    color: '#4a4742',
  },
  link: {
    color: '#c8501a',
    textDecoration: 'none',
  },
}

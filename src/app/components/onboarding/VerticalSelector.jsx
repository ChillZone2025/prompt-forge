'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * VerticalSelector — Landing page entry point for intent-first onboarding.
 * Spec: Systems Architecture Spec, Step 2, Component 1.
 *
 * Emits: IntakeProfile.vertical
 * Routes to: /onboard/[vertical-slug]
 *
 * Design: No click required beyond the tile selection. Selecting a tile
 * immediately triggers route push. Zero friction.
 */

const VERTICALS = [
  {
    id: 'capital_markets',
    label: 'Capital Markets',
    sublabel: 'FX, derivatives, treasury, M&A',
    slug: 'capital-markets',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 20 L10 13 L16 16 L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="13" r="2" fill="currentColor"/>
        <circle cx="16" cy="16" r="2" fill="currentColor"/>
        <circle cx="24" cy="7" r="2" fill="currentColor"/>
        <path d="M4 24 H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'developer',
    label: 'Developer',
    sublabel: 'Engineering, DevOps, architecture',
    slug: 'developer',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M9 9 L4 14 L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 9 L24 14 L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 6 L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: 'business',
    label: 'Business',
    sublabel: 'Sales, marketing, ops, founders',
    slug: 'business',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="14" width="4" height="10" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="12" y="9" width="4" height="15" rx="1" fill="currentColor" opacity="0.75"/>
        <rect x="20" y="4" width="4" height="20" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'other',
    label: 'Other',
    sublabel: 'Legal, healthcare, research, more',
    slug: 'other',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="2"/>
        <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
        <path d="M14 5 V7 M14 21 V23 M5 14 H7 M21 14 H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function VerticalSelector() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  function handleSelect(vertical) {
    setSelected(vertical.id);
    // Brief delay so the user sees the selected state before navigation
    setTimeout(() => {
      router.push(`/onboard/${vertical.slug}`);
    }, 180);
  }

  return (
    <section className="vertical-selector-root">
      <style>{`
        .vertical-selector-root {
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          padding: 0 1rem;
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
        }

        .vs-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 1.5rem;
        }

        .vs-headline {
          font-family: 'DM Serif Display', 'Georgia', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 400;
          line-height: 1.15;
          color: #F5F1EB;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.02em;
        }

        .vs-headline em {
          font-style: italic;
          color: #C9A84C;
        }

        .vs-subhead {
          font-size: 1rem;
          color: #8B8680;
          margin: 0 0 3rem 0;
          line-height: 1.6;
          max-width: 480px;
        }

        .vs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        @media (max-width: 480px) {
          .vs-grid {
            grid-template-columns: 1fr;
          }
        }

        .vs-tile {
          position: relative;
          background: #1A1915;
          border: 1px solid #2E2D28;
          border-radius: 12px;
          padding: 1.5rem;
          cursor: pointer;
          transition: border-color 140ms ease, background 140ms ease, transform 100ms ease;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
          appearance: none;
          -webkit-appearance: none;
          outline: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          min-height: 140px;
        }

        .vs-tile:hover {
          border-color: #C9A84C;
          background: #1E1D18;
          transform: translateY(-1px);
        }

        .vs-tile:focus-visible {
          box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.35);
          border-color: #C9A84C;
        }

        .vs-tile:active {
          transform: translateY(0px);
        }

        .vs-tile[data-selected='true'] {
          border-color: #C9A84C;
          background: #211F14;
        }

        .vs-tile[data-selected='true'] .vs-tile-icon {
          color: #C9A84C;
        }

        .vs-tile-icon {
          color: #5A5852;
          transition: color 140ms ease;
          flex-shrink: 0;
        }

        .vs-tile:hover .vs-tile-icon {
          color: #C9A84C;
        }

        .vs-tile-label {
          font-size: 1.0625rem;
          font-weight: 600;
          color: #F0EDE8;
          letter-spacing: -0.01em;
          line-height: 1.3;
          margin: 0;
        }

        .vs-tile-sublabel {
          font-size: 0.8125rem;
          color: #6B6860;
          line-height: 1.5;
          margin: 0.25rem 0 0;
          transition: color 140ms ease;
        }

        .vs-tile:hover .vs-tile-sublabel {
          color: #8B8680;
        }

        .vs-tile-arrow {
          position: absolute;
          bottom: 1.25rem;
          right: 1.25rem;
          width: 20px;
          height: 20px;
          color: #3A3830;
          transition: color 140ms ease, transform 140ms ease;
        }

        .vs-tile:hover .vs-tile-arrow {
          color: #C9A84C;
          transform: translate(2px, -2px);
        }

        .vs-tile[data-selected='true'] .vs-tile-arrow {
          color: #C9A84C;
          transform: translate(2px, -2px);
        }

        .vs-footer {
          margin-top: 2.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .vs-stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8125rem;
          color: #5A5852;
        }

        .vs-stat-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #3A3830;
          flex-shrink: 0;
        }

        .vs-stat:first-child .vs-stat-dot {
          display: none;
        }

        @keyframes vs-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .vs-tile[data-selected='true']::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          border: 1px solid #C9A84C;
          animation: vs-pulse 0.6s ease 1;
          pointer-events: none;
        }
      `}</style>

      <span className="vs-eyebrow">Prompt Forge</span>

      <h1 className="vs-headline">
        Tell us what you do.<br />
        Get your <em>AI team</em> in 60 seconds.
      </h1>

      <p className="vs-subhead">
        Select your role and we'll recommend the right agents — no browsing required.
      </p>

      <div className="vs-grid" role="list" aria-label="Select your role">
        {VERTICALS.map((v) => (
          <button
            key={v.id}
            role="listitem"
            className="vs-tile"
            data-selected={selected === v.id ? 'true' : 'false'}
            onClick={() => handleSelect(v)}
            aria-pressed={selected === v.id}
            aria-label={`${v.label} — ${v.sublabel}`}
            tabIndex={0}
          >
            <span className="vs-tile-icon" aria-hidden="true">{v.icon}</span>
            <span>
              <p className="vs-tile-label">{v.label}</p>
              <p className="vs-tile-sublabel">{v.sublabel}</p>
            </span>
            {/* Arrow indicator */}
            <svg className="vs-tile-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 15 L15 5 M15 5 H8 M15 5 V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ))}
      </div>

      <div className="vs-footer" aria-label="Product stats">
        <span className="vs-stat">251 agents</span>
        <span className="vs-stat"><span className="vs-stat-dot" aria-hidden="true" />41 industries</span>
        <span className="vs-stat"><span className="vs-stat-dot" aria-hidden="true" />Quality-tested 9.0/10</span>
      </div>
    </section>
  );
}

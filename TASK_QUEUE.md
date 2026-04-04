# TASK_QUEUE.md — Agent Coordination & Task Tracking

> Both agents read and update this file. Use `git pull` before reading, `git commit + push` after updating. This is the single source of truth for what's in progress.

## How This Works

Inspired by production agent orchestration patterns (OpenClaw, CrewAI, LangGraph):
- Agents **claim** tasks by adding their role name and a timestamp
- Agents **update** status as they work (open → in_progress → staged → integrated → deployed)
- The Forger owns the final integration step — Prompt Agent never marks anything as "integrated" or "deployed"
- If a task has been `in_progress` for more than 2 hours with no update, it can be reclaimed

## Status Legend

| Status | Meaning |
|--------|---------|
| `open` | Available for any agent to claim |
| `in_progress` | Claimed and actively being worked on |
| `staged` | Content drafted and sitting in `content/staging/` |
| `review` | Awaiting Rob's review before integration |
| `integrating` | The Forger is actively modifying PromptForge.js |
| `deployed` | Live on getpromptforge.net via Vercel auto-deploy |
| `blocked` | Waiting on Rob or an external dependency |

## Active Tasks

### TASK-005: Agent Blueprints — first 3 playbooks (service expansion)
- **Status:** staged
- **Assigned:** Prompt Agent (staged)
- **Priority:** medium
- **Created:** 2026-03-27
- **Notes:** 3 Agent Blueprint documents staged in content/proposals/agent_blueprint/. Playbook format: business layer + technical appendix (CrewAI/LangGraph). Blueprints: Client Delivery Pipeline (8.05), Content Marketing Engine (8.15), Hire-to-Onboard Pipeline (7.55). All use existing agents. Pro-only content proposal awaiting Rob's review.

## Completed Tasks

### TASK-003: Cyber Intelligence industry (10 agents, Pro-only flagship)
- **Status:** deployed
- **Assigned:** Prompt Agent (staged) / Forger (integrated)
- **Priority:** high
- **Created:** 2026-03-20
- **Completed:** 2026-03-20
- **Notes:** 10 agents integrated into PromptForge.js as Pro-only industry. Flagship premium industry targeting OSINT professionals, threat hunters, fraud investigators, corporate intel teams, and journalists. All agents reference real OSINT tools and frameworks by name. Industry weighted score: 9.05 avg.

### TASK-002: AI Agent Development industry (10 agents, Pro-only)
- **Status:** deployed
- **Assigned:** Prompt Agent (staged) / Forger (integrated)
- **Priority:** high
- **Created:** 2026-03-19
- **Completed:** 2026-03-20
- **Notes:** 10 agents integrated into PromptForge.js as first Pro-only industry (expanded from 7 staged to 10 live). Targets Claude Code, CrewAI, LangGraph users. Industry weighted score: 9.25.

### TASK-004: 12 gap-fill agents (push total to 251)
- **Status:** deployed
- **Assigned:** Prompt Agent (staged) / Forger (integrated)
- **Priority:** high
- **Created:** 2026-03-20
- **Completed:** 2026-03-20
- **Notes:** 12 agents integrated into PromptForge.js, one per industry — filling 12 industries from 5 to 6 agents each. Also fixed pre-existing `grant_writer` duplicate ID (Nonprofit copy renamed to `ngo_grant_writer`). All IDs verified unique. Avg weighted score: 8.00.

### TASK-001: 20 new industries (100 agents)
- **Status:** deployed
- **Assigned:** Prompt Agent (staged) / Forger (integrated)
- **Priority:** high
- **Created:** 2026-03-19
- **Completed:** 2026-03-20
- **Notes:** 100 agents across 20 new industries integrated into PromptForge.js. All scored against Revenue Optimization Framework. All IDs verified unique. All descs under 50 chars with real frameworks/tools.

## TASK-006: Rebuild landing page to 7-section conversion architecture

**Status:** deployed  
**Assigned to:** The Forger  
**Priority:** HIGH  
**Completed:** 2026-04-04  

---

### Context

The current landing page leads with feature/library framing ("251 agents, 41 industries"). This task rebuilds the page around a conversion sequence ordered by visitor psychology — each section answers the silent question a skeptical stranger asks before the next one. No structural changes to the agent library, auth, or Stripe. Copy and layout only, plus 4 new components.

---

### New files to create

| File | Location | Purpose |
|---|---|---|
| `BeforeAfter.tsx` | `components/landing/` | 2-column before/after panel. No CTA inside this component. |
| `HowItWorks.tsx` | `components/landing/` | 3-step horizontal flow: Pick role → Generate → Paste anywhere. Max 12 words per step label. |
| `SocialProof.tsx` | `components/landing/` | Usage counter placeholder: "X,XXX agent prompts generated." Accept a `count` prop from the database. Real quotes slot in later as a prop swap — build with `testimonials?: Testimonial[]` prop stubbed and conditionally rendered. |
| `FinalCTA.tsx` | `components/landing/` | Single headline, single button ("Build my first agent free →"), free tier reinforcement line below. No nav links, no distractions. |

---

### Files to modify

**`HeroSection.tsx`** — copy changes only, no structural refactor  
- Replace current headline with outcome-first framing (see `/docs/copy/hero-variants.md` if exists, otherwise use: "Stop describing your AI agent. Start deploying it.")  
- Add use-case chip row below subheadline: Client onboarding · Financial analysis · Email triage · Content creation · Research & intel · Process automation  
- Chips are visual only in v1 — no filter logic yet. Add `data-filter` attributes so Growth Agent can wire them later  
- Remove any duplicate CTA button that appears below the stat strip  

**`AgentPreview.tsx`** (or equivalent agent library section)  
- Add industry filter chip row above the card grid  
- Reduce visible cards to 6–9 on initial load  
- Replace any "Get started" / CTA button inside this section with a plain text link: "Browse all 251 agents →"  
- This section holds the FIRST CTA button on the page — "Build my first agent free" — place it below the card grid  

**`PricingSection.tsx`**  
- Reorder so Free tier card renders on the left / first  
- Add explicit line under Free tier header: "Always free — no credit card required"  
- No other structural changes  

---

### Page assembly order

Update `app/page.tsx` (or equivalent root landing file) to render sections in this exact order:
```
<Nav />
<HeroSection />
<BeforeAfter />
<HowItWorks />
<AgentPreview />
<SocialProof />
<PricingSection />
<FinalCTA />
<Footer />
```

---

### Hard constraints

1. **No CTA button between sections 1–3.** HeroSection, BeforeAfter, and HowItWorks contain zero `<button>` CTA elements. First CTA lives inside AgentPreview.  
2. **No rewrite of agent library logic.** AgentPreview changes are layout and copy only — do not touch generation logic, API calls, or prompt output.  
3. **Do not modify Stripe or auth components** as part of this task.  
4. **SocialProof count prop** must pull from an existing database query or a hardcoded placeholder integer — never a fabricated static string with no data backing.  
5. **Mobile-first.** All new components must be responsive at 375px viewport width. Use Tailwind responsive prefixes (`sm:`, `md:`) — no custom breakpoint CSS.  

---

### Definition of done

- [ ] All 4 new components exist and render without errors  
- [ ] `app/page.tsx` imports and renders all 7 sections in specified order  
- [ ] No CTA button visible between HeroSection and AgentPreview on a fresh scroll  
- [ ] Free tier is the first pricing card rendered  
- [ ] SocialProof renders a real or placeholder integer count (not an empty component)  
- [ ] Passes `npm run build` with zero new errors  
- [ ] Forger updates `STATUS.md` on completion with: components created, files modified, any assumptions made  

---

### Out of scope for this task

- Use-case chip filter logic (wired in a future task)  
- Real testimonials in SocialProof (prop is stubbed, drops in as a follow-up)  
- A/B testing infrastructure  
- Animation or scroll transitions  
- Any changes behind the `/generate` or `/dashboard` routes

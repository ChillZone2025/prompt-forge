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
    { id: 'email_draft', icon: '✉', name: 'Email Draft Agent',       desc: 'Professional emails, cold outreach, follow-ups', color: '#e8913a', isNew: true },
    { id: 'cyber',       icon: '⬡', name: 'Cybersecurity Advisor',   desc: 'Threat assessment, security policies, incident response',          color: '#4db8c8' },
    { id: 'code_review', icon: '⟨⟩',name: 'Code Reviewer',          desc: 'Security, performance, best practices',     color: '#9b7fd4' },
    { id: 'data',        icon: '∿', name: 'Data Analyst',           desc: 'SQL, Python, insight generation',           color: '#4db88c' },
    { id: 'meeting_prep',icon: '🗣', name: 'Meeting Prep Agent',     desc: 'Agenda drafting, talking points, follow-up summaries', color: '#d4834d', isNew: true },
    { id: 'pm',          icon: '◎', name: 'Project Manager',        desc: 'Agile, risk, stakeholder comms',            color: '#c46896' },
    { id: 'security',    icon: '⬛', name: 'Security Assessor',       desc: 'Risk analysis, vulnerability scans, security policies',     color: '#c44d4d' },
    { id: 'finance',     icon: '∑', name: 'Financial Modeler',      desc: 'Valuation, forecasting, scenario analysis, projections',            color: '#d4a84d' },
    { id: 'market',      icon: '◉', name: 'Market Researcher',      desc: 'Competitive intel, trend analysis',         color: '#4d8cd4' },
    { id: 'support',     icon: '◷', name: 'Customer Support',       desc: 'De-escalation, resolution, empathy',       color: '#4dc87a' },
    { id: 'content',     icon: '✦', name: 'Content Strategist',     desc: 'SEO, brand voice, editorial calendar',      color: '#a04dc8' },
    { id: 'devops',      icon: '∞', name: 'DevOps Engineer',        desc: 'CI/CD, infra, incident response',           color: '#4daed4' },
    { id: 'pres_builder',icon: '🖥', name: 'Presentation Builder',  desc: 'Slide outlines, speaker notes, deck structure', color: '#f5c518', isNew: true },
    { id: 'nego_strat',  icon: '♟', name: 'Negotiation Strategist',desc: 'BATNA analysis, counter-offers, leverage tactics', color: '#d4a84d', isNew: true },
  ],
  Healthcare: [
    { id: 'med_scribe',  icon: '✍', name: 'Medical Scribe',         desc: 'Clinical notes, EMR integration',           color: '#4db88c' },
    { id: 'prior_auth',  icon: '📋', name: 'Prior Auth Agent',      desc: 'Payer workflows, claim denial reduction',    color: '#4d8cd4' },
    { id: 'rcm',         icon: '💰', name: 'RCM Specialist',        desc: 'Billing, coding, A/R follow-ups',           color: '#d4a84d' },
    { id: 'triage',      icon: '🏥', name: 'Patient Triage Agent',  desc: 'Symptom checking, care routing',            color: '#c44d4d' },
    { id: 'diagnostics', icon: '🔬', name: 'Diagnostics Assistant', desc: 'Radiology & dermatology flagging',          color: '#9b7fd4' },
    { id: 'clinical_trial',icon: '🧬', name: 'Clinical Trial Coordinator', desc: 'Protocol summaries, consent forms, site reports', color: '#4daed4', isNew: true },
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
    { id: 'repurpose',   icon: '♻', name: 'Content Repurposer',    desc: 'One asset → 50+ social posts',              color: '#9b7fd4', fixedPrompt: `You are a Content Repurposing Specialist. Your goal is to take a single piece of content and transform it into multiple platform-specific posts, maximizing reach across channels.

Follow these instructions strictly:

STEP 1 — INTAKE: Ask the user to paste their original content (blog post, article, video transcript, podcast notes, newsletter, or any long-form content). Wait for their response.

STEP 2 — CONTEXT: Ask these questions one at a time. Wait for each answer before asking the next:
1. What platforms do you want content for? (LinkedIn, Twitter/X, Instagram, Facebook, email newsletter, other)
2. Who is your target audience?
3. What tone do you want? (Professional, casual, provocative, educational, inspirational)

STEP 3 — GENERATION: Once you have the answers, generate ALL of the following:
1. **3 LinkedIn posts** — Different angles on the same content (story-driven, data-driven, opinion-driven). 150-200 words each. Strong hooks.
2. **5 Twitter/X posts** — Punchy, standalone insights from the content. Under 280 characters each. Include 1 thread outline (5-7 tweets).
3. **2 Instagram captions** — Visual-first, with emoji, hashtag suggestions, and CTA.
4. **1 email newsletter snippet** — Subject line + 3-sentence preview + CTA.
5. **1 quote graphic text** — The single most shareable sentence from the content, formatted for a quote card.

Label each output clearly by platform. Include posting tips (best time, hashtags, engagement hooks) for each platform.

## ACTIVATION PHRASE
"I have a piece of content I want to repurpose across multiple platforms. Here it is:"` },
    { id: 'voice_ai',    icon: '📞', name: 'Call Center Agent',     desc: 'Call scripts, objection handling, appointment booking',     color: '#4db88c' },
    { id: 'market_intel',icon: '🧠', name: 'Market Intelligence',   desc: 'Competitor pricing, strategic alerts',      color: '#4d8cd4' },
    { id: 'pr_agent',    icon: '📰', name: 'PR & Media Agent',      desc: 'Journalist targeting, pitch drafting',      color: '#c46896' },
    { id: 'proposal_gen',icon: '📝', name: 'Proposal Generator',   desc: 'Client proposals, scope docs, pricing sections', color: '#d4a84d', isNew: true },
    { id: 'email_seq',   icon: '📧', name: 'Email Sequence Writer', desc: 'Drip campaigns, nurture flows, follow-up cadences', color: '#4daed4', isNew: true },
    { id: 'cust_success',icon: '🎯', name: 'Customer Success Agent', desc: 'Onboarding playbooks, churn prevention, QBR prep', color: '#4db88c', isNew: true },
  ],
  Education: [
    { id: 'micro_learn', icon: '🎯', name: 'Curriculum Designer',   desc: 'Lesson plans, learning paths, assessment design',          color: '#4daed4' },
    { id: 'grading',     icon: '✅', name: 'Grading & Feedback',    desc: 'Essays, coding critiques, instant feedback',color: '#4db88c' },
    { id: 'career_track',icon: '🗺', name: 'Career Coach Agent',    desc: 'Skills gap analysis, certification paths, job market intel', color: '#d4a84d' },
    { id: 'admissions',  icon: '🎓', name: 'Admissions Agent',      desc: 'Inquiry to enrollment pipeline mgmt',       color: '#9b7fd4' },
    { id: 'research_asst',icon:'🔭', name: 'Research Assistant',    desc: 'Academic paper synthesis, doctoral support', color: '#d4834d' },
    { id: 'parent_comm', icon: '💬', name: 'Parent Communicator',   desc: 'Progress reports, behavior updates, conference prep', color: '#c46896', isNew: true },
    { id: 'grant_writer',icon: '💰', name: 'Grant Writer',          desc: 'Education grants, funding applications, budget narratives', color: '#e8913a', isNew: true },
  ],
  'Personal Finance': [
    { id: 'fin_advisor', icon: '🧭', name: 'Financial Advisor',     desc: 'Full-context accounts, taxes, investments', color: '#4db88c' },
    { id: 'sub_nego',    icon: '✂', name: 'Subscription Negotiator',desc: 'Find, cancel, renegotiate bills',           color: '#e8913a', fixedPrompt: `You are a Personal Finance Negotiation Specialist. Your goal is to audit a user's recurring subscriptions and bills, identify savings, and provide ready-to-use cancellation scripts and negotiation talking points.

Follow these instructions strictly:

STEP 1 — AUDIT: Ask the user to list all their recurring subscriptions and monthly bills. For each, ask for:
- Service name
- Monthly cost
- How often they actually use it (daily, weekly, rarely, never)

Wait for their full list before proceeding.

STEP 2 — ANALYSIS: Categorize each subscription into one of four buckets:
1. **KEEP** — High usage, good value. No action needed.
2. **NEGOTIATE** — Worth keeping but overpriced. Provide a negotiation script.
3. **DOWNGRADE** — Using it but not enough to justify the current tier. Suggest a cheaper plan.
4. **CANCEL** — Rarely or never used. Provide a cancellation script.

STEP 3 — SCRIPTS: For each NEGOTIATE and CANCEL item, provide:
- A word-for-word phone/chat script the user can read aloud
- The specific retention offer to ask for (competitor pricing, loyalty discount, free months)
- What to say if they refuse the first offer
- The nuclear option (how to cancel if negotiation fails)

STEP 4 — SAVINGS SUMMARY: Present a clear table showing:
- Current monthly total
- Projected monthly total after all changes
- Monthly savings
- Annual savings
- One motivating line about what they could do with that money

## ACTIVATION PHRASE
"I want to audit my subscriptions and bills. Here is my list:"` },
    { id: 'tax_opt',     icon: '🔖', name: 'Tax Optimizer',         desc: 'Year-round deduction scanning',             color: '#d4a84d' },
    { id: 'micro_invest',icon: '🌱', name: 'Investment Advisor',    desc: 'Portfolio strategy, goal-based planning, risk allocation',          color: '#4d8cd4' },
    { id: 'fraud_watch', icon: '🛡', name: 'Identity Shield Agent', desc: 'Fraud detection, credit alerts, identity protection',    color: '#c44d4d' },
    { id: 'budget_arch', icon: '📊', name: 'Budget Architect',      desc: 'Monthly budgets, expense tracking, savings goals',       color: '#9b7fd4', isNew: true },
    { id: 'debt_payoff', icon: '📉', name: 'Debt Payoff Strategist',desc: 'Payoff plans, refinance analysis, snowball vs avalanche',color: '#4daed4', isNew: true },
  ],
  Parenting: [
    { id: 'homework',    icon: '📚', name: 'Homework Helper',         desc: 'Subject tutoring, step-by-step explanations',  color: '#60a5fa', fixedPrompt: `You are a Patient, Encouraging Tutor. Your goal is to help students understand their homework — not just give them answers. You adapt your explanations to the student's grade level and learning style.

Follow these instructions strictly:

STEP 1 — CONTEXT: Ask the student (or parent) these questions one at a time:
1. What subject is this for? (Math, Science, English, History, etc.)
2. What grade level?
3. What is the specific assignment or problem?

Wait for each answer before asking the next question.

STEP 2 — TEACH: Once you understand the problem:
- Explain the underlying concept first, using simple language appropriate to the grade level
- Use a relatable real-world analogy
- Walk through the problem step by step, explaining your reasoning at each step
- Do NOT just give the final answer — show the thinking process

STEP 3 — CHECK: After explaining, ask the student:
- "Does that make sense so far?"
- "Can you try explaining it back to me in your own words?"

If they're confused, try a different explanation approach. Be patient. Never make them feel bad for not understanding.

STEP 4 — PRACTICE: Provide 2-3 similar practice problems at the same difficulty level. After they attempt each one, give specific feedback — not just "correct" or "wrong" but WHY.

STEP 5 — SUMMARY: End with a brief recap of the key concept and one study tip for remembering it.

## ACTIVATION PHRASE
"I need help with my homework. Here is the assignment:"` },
    { id: 'meal_plan',   icon: '🍽', name: 'Family Meal Planner',     desc: 'Weekly menus, grocery lists, dietary needs',     color: '#34d399', isNew: true },
    { id: 'development', icon: '🌱', name: 'Child Development Tracker',desc: 'Milestone tracking, age-appropriate guidance',  color: '#a78bfa' },
    { id: 'stories',     icon: '🌙', name: 'Bedtime Story Agent',     desc: 'Custom stories, reading level adaptation',      color: '#fb923c' },
    { id: 'coach',       icon: '🤝', name: 'Parent Coach',            desc: 'Behavior strategies, emotional regulation',     color: '#f472b6' },
    { id: 'iep_advocate',icon: '📋', name: 'IEP Advocate',            desc: 'Special education plans, accommodation requests, meeting prep', color: '#d4834d', isNew: true },
  ],
   'Retail & Ops': [
    { id: 'inventory',   icon: '📦', name: 'Inventory Optimizer',   desc: 'Demand forecasting, returns logistics',     color: '#d4a84d' },
    { id: 'pricing_strat',icon: '💲', name: 'Pricing Strategist',    desc: 'Competitive pricing, margin analysis, discount modeling', color: '#e8913a', isNew: true },
    { id: 'supply_chain',icon: '⛓', name: 'Supply Chain Agent',    desc: 'Bottleneck detection, re-routing',          color: '#4daed4' },
    { id: 'returns_agent',icon: '🔄', name: 'Returns & Refund Agent',desc: 'Return policies, customer resolution, loss prevention', color: '#4db88c', isNew: true },
    { id: 'vendor_nego', icon: '🤝', name: 'Vendor Negotiator',      desc: 'Supplier terms, bulk pricing, contract leverage', color: '#9b7fd4', isNew: true },
    { id: 'store_ops',   icon: '🏪', name: 'Store Operations Agent', desc: 'Staff scheduling, daily workflows, opening/closing checklists', color: '#c46896', isNew: true },
  ],
  'Legal & Compliance': [
    { id: 'contract_analyze', icon: '📑', name: 'Contract Analyzer',        desc: 'Clause review, risk flagging, plain-language summaries', color: '#d4834d', isNew: true },
    { id: 'compliance_mon',   icon: '🔔', name: 'Compliance Monitor',       desc: 'Regulatory tracking, audit prep, policy gaps',           color: '#c44d4d', isNew: true },
    { id: 'policy_writer',    icon: '📝', name: 'Policy Writer',            desc: 'Handbooks, privacy policies, internal procedures',       color: '#9b7fd4', isNew: true },
    { id: 'reg_nav',          icon: '🧭', name: 'Regulatory Navigator',     desc: 'Licensing, filing deadlines, industry regulations',      color: '#4d8cd4', isNew: true },
    { id: 'dispute_res',      icon: '⚖', name: 'Dispute Resolution Agent', desc: 'Demand letters, mediation prep, escalation paths',       color: '#d4a84d', isNew: true },
  ],
  'Real Estate': [
    { id: 'listing_gen',  icon: '🏡', name: 'Listing Generator',    desc: 'Property descriptions, MLS optimization, photo captions',  color: '#e8913a', isNew: true, fixedPrompt: `You are a Real Estate Listing Copy Specialist. Your goal is to generate MLS-ready property descriptions that attract qualified buyers, rank well in search, and accurately represent the property.

Follow these instructions strictly:

STEP 1 — PROPERTY BASICS: Ask the user these questions one at a time. Wait for each answer before asking the next:
1. Property address (city, state, neighborhood if notable)
2. Property type (single family, condo, townhouse, multi-family, land, commercial)
3. Bedrooms / bathrooms / square footage
4. Year built and any major renovations
5. Lot size (if applicable)
6. Listing price

STEP 2 — FEATURES & HIGHLIGHTS: Ask one at a time:
1. Top 3 standout features (e.g., chef's kitchen, primary suite, pool, view)
2. Recent upgrades or renovations (new roof, HVAC, appliances, flooring)
3. Notable neighborhood features (schools, walkability, commute, dining)
4. What type of buyer is this property ideal for? (First-time, family, downsizer, investor)

STEP 3 — GENERATE: Produce ALL of the following:

**MLS Description (Full):**
- 250-300 words
- Opening hook that creates immediate interest (do NOT start with "Welcome to")
- Flow: hook → lifestyle story → key features → neighborhood → call to action
- Use sensory language — help buyers feel what it's like to live there
- Include all MLS-required details (beds, baths, sqft, lot, year built)
- End with urgency-driving CTA

**MLS Description (Short):**
- 100-word version for syndication sites with character limits
- Same hook, condensed features, strong close

**Social Media Caption:**
- Instagram/Facebook version with emoji, hashtags, and engagement hook
- Under 200 words
- Include 10 relevant hashtags

**Photo Captions:**
- 5 suggested photo captions for key listing photos (kitchen, primary suite, exterior, backyard/outdoor, neighborhood/lifestyle)

**SEO Keywords:**
- 10 search terms a buyer would use to find this property (e.g., "3 bed colonial Westfield NJ")

## ACTIVATION PHRASE
"I have a property to list. Let's create the listing copy."` },
    { id: 'market_comp',  icon: '📊', name: 'Market Comp Analyzer', desc: 'Comparable sales, pricing strategy, market trends',        color: '#4d8cd4', isNew: true },
    { id: 'lease_review', icon: '📄', name: 'Lease Review Agent',   desc: 'Clause analysis, tenant screening, renewal terms',         color: '#d4834d', isNew: true },
    { id: 'lead_nurture', icon: '🤝', name: 'Lead Nurture Agent',   desc: 'Follow-up sequences, client segmentation, drip campaigns', color: '#4db88c', isNew: true },
    { id: 'showing_sched',icon: '🗓', name: 'Showing Scheduler',    desc: 'Appointment coordination, route planning, availability',   color: '#34d399', isNew: true },
    { id: 'open_house',  icon: '🏠', name: 'Open House Agent',     desc: 'Marketing flyers, follow-up scripts, social posts',        color: '#9b7fd4', isNew: true },
  ],
  'Marketing & Growth': [
    { id: 'seo_content',    icon: '🔍', name: 'SEO Content Agent',    desc: 'Keyword strategy, content briefs, SERP analysis',           color: '#4db88c', isNew: true },
    { id: 'campaign_opt',   icon: '📈', name: 'Campaign Optimizer',   desc: 'Ad spend allocation, channel ROI, budget pacing',           color: '#e8913a', isNew: true },
    { id: 'ab_analyst',     icon: '🧪', name: 'A/B Test Analyst',     desc: 'Experiment design, statistical significance, variant recs', color: '#4d8cd4', isNew: true },
    { id: 'brand_voice',    icon: '🎨', name: 'Brand Voice Agent',    desc: 'Tone guidelines, messaging frameworks, copy review',        color: '#9b7fd4', isNew: true },
    { id: 'attrib_analyst', icon: '🎯', name: 'Attribution Analyst',  desc: 'Multi-touch attribution, funnel analysis, conversion paths',color: '#d4a84d', isNew: true },
    { id: 'social_mgr',   icon: '📱', name: 'Social Media Manager', desc: 'Content calendars, platform strategy, analytics reports',   color: '#c46896', isNew: true },
  ],
  'HR & People Ops': [
    { id: 'resume_screen',  icon: '📄', name: 'Resume Screener',      desc: 'ATS filtering, candidate ranking, bias reduction',       color: '#4db88c', isNew: true, fixedPrompt: `You are a Senior Recruiting Operations Specialist. Your goal is to systematically evaluate resumes against a job description, providing structured, bias-aware scoring that helps hiring managers make faster, better decisions.

Follow these instructions strictly:

STEP 1 — JOB REQUIREMENTS: Ask the user to paste the job description or role requirements. Wait for their response.

STEP 2 — CRITERIA: Ask these questions one at a time:
1. What are the 3-5 MUST-HAVE qualifications? (Hard requirements — no exceptions)
2. What are the NICE-TO-HAVE qualifications? (Bonus points but not dealbreakers)
3. Any automatic disqualifiers? (e.g., no remote, must have specific certification)

Wait for each answer before proceeding.

STEP 3 — SCREENING: Ask the user to paste one or more resumes. For EACH resume, provide:

**Candidate Scorecard:**
| Criteria | Rating (1-5) | Evidence |
|----------|-------------|----------|
| [Each must-have] | Score | Specific quote or gap from resume |
| [Each nice-to-have] | Score | Specific quote or gap from resume |

**Overall Score:** X/50
**Recommendation:** ADVANCE / MAYBE / PASS
**Red Flags:** Any gaps, inconsistencies, or concerns
**Strengths:** Top 2-3 standout qualifications
**Interview Focus Areas:** What to probe in an interview based on gaps

STEP 4 — RANKING: After all resumes are reviewed, provide a ranked summary table with overall scores and a one-line rationale for each candidate.

IMPORTANT: Focus on evidence-based evaluation. Flag any area where unconscious bias could affect the assessment. Score based on qualifications, not demographic signals.

## ACTIVATION PHRASE
"I need to screen resumes for an open role. Here is the job description:"` },
    { id: 'interview_arch', icon: '🎙', name: 'Interview Architect',  desc: 'Role-specific questions, scoring rubrics, panel prep',    color: '#9b7fd4', isNew: true },
    { id: 'onboard_agent',  icon: '🚀', name: 'Onboarding Agent',     desc: 'New hire workflows, checklist generation, 30-60-90 plans',color: '#4daed4', isNew: true },
    { id: 'comp_analyst',   icon: '💰', name: 'Compensation Analyst', desc: 'Salary benchmarking, equity modeling, offer structuring',  color: '#d4a84d', isNew: true },
    { id: 'perf_mgmt',      icon: '📋', name: 'Performance Manager',  desc: 'Review cycles, goal tracking, feedback frameworks',       color: '#c46896', isNew: true },
  ],
  'Accounting & Tax': [
    { id: 'bookkeeper',    icon: '📒', name: 'AI Bookkeeper',      desc: 'Transaction categorization, reconciliation, cleanup',  color: '#4db88c', isNew: true },
    { id: 'invoice_agent', icon: '🧾', name: 'Invoice Agent',      desc: 'Invoice generation, payment tracking, aging reports',  color: '#e8913a', isNew: true },
    { id: 'audit_prep',    icon: '🔎', name: 'Audit Prep Agent',   desc: 'Document assembly, compliance checks, gap analysis',   color: '#c44d4d', isNew: true },
    { id: 'tax_prep',      icon: '📑', name: 'Tax Prep Agent',     desc: 'Deduction identification, filing checklists, deadlines',color: '#d4834d', isNew: true },
    { id: 'fin_reporter',  icon: '📊', name: 'Financial Reporter', desc: 'P&L statements, cash flow analysis, board reporting',   color: '#4d8cd4', isNew: true },
    { id: 'payroll_spec', icon: '💵', name: 'Payroll Specialist',  desc: 'Payroll compliance, deduction calculations, reporting',  color: '#d4a84d', isNew: true },
  ],
  Insurance: [
    { id: 'claims_agent',   icon: '📋', name: 'Claims Processor',     desc: 'Claim intake, documentation review, status tracking',    color: '#4daed4', isNew: true },
    { id: 'underwrite',     icon: '🛡', name: 'Underwriting Agent',   desc: 'Risk assessment, policy pricing, coverage analysis',     color: '#c44d4d', isNew: true },
    { id: 'policy_comp',    icon: '⚖', name: 'Policy Comparator',    desc: 'Coverage comparison, gap identification, renewal analysis',color: '#4d8cd4', isNew: true },
    { id: 'ins_compliance', icon: '📜', name: 'Insurance Compliance', desc: 'Regulatory filings, license tracking, audit readiness',   color: '#d4834d', isNew: true },
    { id: 'client_intake',  icon: '🤝', name: 'Client Intake Agent',  desc: 'Needs assessment, quote generation, onboarding',         color: '#e8913a', isNew: true },
    { id: 'renewal_spec',  icon: '🔁', name: 'Renewal Specialist',   desc: 'Renewal analysis, retention scripts, coverage updates',  color: '#9b7fd4', isNew: true },
  ],
  'Architecture & Engineering': [
    { id: 'cost_est',    icon: '💲', name: 'Cost Estimator',         desc: 'Quantity takeoffs, unit pricing, budget tracking',       color: '#4db88c', isNew: true },
    { id: 'proj_coord',  icon: '📌', name: 'Project Coordinator',    desc: 'Schedules, RFIs, submittals, stakeholder logs',         color: '#9b7fd4', isNew: true },
    { id: 'rfi_drafter', icon: '📨', name: 'RFI/RFP Drafter',        desc: 'Submittals, clarifications, bid responses',             color: '#e8913a', isNew: true },
    { id: 'site_report', icon: '🏗', name: 'Site Report Generator',  desc: 'Inspection notes, punch lists, field reports',          color: '#d4a84d', isNew: true, fixedPrompt: `You are a Construction Field Documentation Specialist. Your goal is to convert raw site observations into structured, professional field reports that meet AEC industry standards.

Follow these instructions strictly:

STEP 1 — PROJECT CONTEXT: Ask the user these questions one at a time. Wait for each answer before asking the next:
1. Project name and address
2. Report type: Daily field report, Inspection report, Punch list, or Safety observation
3. Date and weather conditions on site
4. Your name and role (e.g., PM, superintendent, inspector)

STEP 2 — OBSERVATIONS: Based on the report type, ask:

**For Daily Field Reports:**
1. What trades were on site today? (e.g., electrical, plumbing, framing, concrete)
2. What work was completed?
3. Any delays, issues, or incidents?
4. Equipment and materials delivered or needed?
5. Visitor log (inspectors, owners, architects on site?)

**For Inspection Reports:**
1. What system or area was inspected? (structural, MEP, envelope, fire/life safety)
2. What passed?
3. What failed or needs correction? (include location references)
4. Follow-up actions required and responsible parties

**For Punch Lists:**
1. Paste or describe all deficiency items (can be rough notes)
2. For each: location, trade responsible, severity (cosmetic, functional, safety)

**For Safety Observations:**
1. What was observed? (hazard, near miss, violation, positive practice)
2. Location and trade involved
3. Immediate action taken
4. Follow-up required?

STEP 3 — GENERATE REPORT: Produce a professionally formatted report including:

**Header Block:**
- Project name, address, date, report number
- Weather conditions, temperature
- Prepared by, distribution list

**Body:**
- Organized by trade or inspection area
- Each item numbered with location reference
- Status tags: COMPLETE, IN PROGRESS, DEFICIENT, N/A
- Clear descriptions a non-technical reader can understand

**Action Items Table:**
| # | Item | Location | Responsible Party | Due Date | Priority |
|---|------|----------|-------------------|----------|----------|

**Photo Log Template:**
- Numbered placeholders for site photos with suggested captions
- "Photo 1: [LOCATION — DESCRIPTION OF WHAT TO CAPTURE]"

**Sign-Off Block:**
- Prepared by / Date / Signature line
- Reviewed by / Date / Signature line

## ACTIVATION PHRASE
"I need to write a site report. Here are my field notes:"` },
    { id: 'spec_review', icon: '📑', name: 'Spec Review Agent',      desc: 'Code compliance, specification gap analysis',           color: '#4daed4', isNew: true },
  ],
  'Consulting & Strategy': [
    { id: 'change_mgmt',    icon: '🔄', name: 'Change Management Lead', desc: 'Stakeholder mapping, adoption plans, comms',          color: '#e8913a', isNew: true },
    { id: 'due_diligence',  icon: '🔎', name: 'Due Diligence Agent',    desc: 'Risk assessment, deal analysis, investment memos',                color: '#c44d4d', isNew: true },
    { id: 'market_sizing',  icon: '📐', name: 'Market Sizing Analyst',  desc: 'TAM/SAM/SOM, bottoms-up modeling',                   color: '#4d8cd4', isNew: true },
    { id: 'proposal_writer',icon: '📝', name: 'Proposal & SOW Writer',  desc: 'Scope, deliverables, pricing structure',             color: '#4db88c', isNew: true, fixedPrompt: `You are a Senior Consulting Proposal Specialist. Your goal is to help consultants and professional services firms draft complete, client-ready proposals and Statements of Work (SOWs) through a structured discovery process.

Follow these instructions strictly:

STEP 1 — ENGAGEMENT TYPE: Ask the user which type of document they need:
A. Full proposal (includes problem framing, approach, team, timeline, pricing)
B. Statement of Work only (scope, deliverables, timeline, pricing)
C. Proposal refresh (update an existing proposal for a new client or scope)

Wait for their answer.

STEP 2 — DISCOVERY: Ask these questions one at a time. Wait for each answer before asking the next:
1. Who is the client? (Company name, industry, size)
2. What problem are you solving for them?
3. What is your proposed approach or methodology?
4. What are the key deliverables?
5. What is the estimated timeline?
6. What is your pricing model? (Fixed fee, T&M, retainer, milestone-based)
7. Who is on your delivery team? (Roles and seniority levels)

STEP 3 — DRAFT: Generate the complete document with these sections:

**For Full Proposals:**
1. Executive Summary — 3-4 sentences framing the client's challenge and your solution
2. Understanding of the Problem — Demonstrate you understand their situation
3. Proposed Approach — Methodology, phases, and key activities
4. Scope & Deliverables — Numbered list with clear descriptions
5. Timeline & Milestones — Phase-by-phase with dates/durations
6. Team & Qualifications — Who will do the work and why they're qualified
7. Investment — Pricing breakdown by phase or deliverable
8. Terms & Assumptions — Key assumptions, exclusions, change order process
9. Next Steps — Clear CTA with specific action items

**For SOWs:**
1. Project Overview — One paragraph
2. Scope of Work — Detailed numbered deliverables
3. Out of Scope — Explicit exclusions
4. Timeline & Milestones — With acceptance criteria per milestone
5. Pricing & Payment Schedule — Tied to milestones
6. Assumptions & Dependencies — What the client must provide
7. Change Order Process — How scope changes are handled
8. Acceptance Criteria — How deliverables are approved

STEP 4 — REVIEW: After generating the draft, ask:
- "Want me to adjust the tone, expand any section, or modify the pricing structure?"
- Offer to generate a one-page executive summary version for initial client outreach

## ACTIVATION PHRASE
"I need to write a proposal for a consulting engagement. Let's start."` },
    { id: 'strat_deck',     icon: '📊', name: 'Strategy Deck Builder',  desc: 'Frameworks, slide structure, executive narratives',   color: '#9b7fd4', isNew: true },
  ],
  'Executive & Leadership': [
    { id: 'exec_brief',    icon: '⚡', name: 'Executive Briefing Agent', desc: 'One-pagers, situation summaries, talking points',    color: '#d4a84d', isNew: true },
    { id: 'board_prep',    icon: '🏛', name: 'Board Prep Agent',         desc: 'Board decks, KPI narratives, governance docs',      color: '#9b7fd4', isNew: true },
    { id: 'decision_frame',icon: '🎯', name: 'Decision Framework Agent', desc: 'Options analysis, risk matrices, go/no-go recs',    color: '#4d8cd4', isNew: true },
    { id: 'exec_comms',    icon: '🎙', name: 'Executive Comms Writer',   desc: 'All-hands scripts, investor updates, memos',        color: '#e8913a', isNew: true },
    { id: 'okr_agent',     icon: '📈', name: 'OKR & Goals Architect',    desc: 'Objective cascading, alignment scoring, reviews',    color: '#4db88c', isNew: true },
  ],
  'Hospitality & Events': [
    { id: 'event_plan',  icon: '🎪', name: 'Event Planning Agent',     desc: 'Timelines, vendor coordination, run-of-show docs',    color: '#9b7fd4', isNew: true },
    { id: 'guest_exp',   icon: '🛎', name: 'Guest Experience Agent',   desc: 'Service scripts, complaint resolution, upselling',    color: '#f5c518', isNew: true },
    { id: 'menu_eng',    icon: '🍽', name: 'Menu Design Agent',        desc: 'Pricing strategy, food cost analysis, descriptions',  color: '#4db88c', isNew: true },
    { id: 'rev_mgmt',    icon: '💹', name: 'Revenue Management Agent', desc: 'Dynamic pricing, occupancy optimization, comp sets',  color: '#e8913a', isNew: true },
    { id: 'staff_sched', icon: '🗓', name: 'Staff Scheduling Agent',   desc: 'Shift coverage, labor cost forecasting, compliance',  color: '#4daed4', isNew: true },
  ],
  'Logistics & Supply Chain': [
    { id: 'route_opt',     icon: '🛣', name: 'Route Optimization Agent',  desc: 'Fleet routing, delivery windows, fuel efficiency',    color: '#4daed4', isNew: true },
    { id: 'warehouse_ops', icon: '🏭', name: 'Warehouse Ops Agent',       desc: 'Layout optimization, pick/pack, labor',              color: '#d4a84d', isNew: true },
    { id: 'carrier_nego',  icon: '🤝', name: 'Carrier Negotiation Agent', desc: 'Rate benchmarking, contract terms, lane analysis',   color: '#e8913a', isNew: true },
    { id: 'customs_comp',  icon: '🌐', name: 'Customs & Trade Agent',     desc: 'HS codes, tariff classification, trade docs',        color: '#c44d4d', isNew: true },
    { id: 'demand_plan',   icon: '🔮', name: 'Demand Planning Agent',     desc: 'Forecast modeling, seasonality, SKU analysis',       color: '#4d8cd4', isNew: true },
  ],
  'Agriculture & Farming': [
    { id: 'ag_compliance', icon: '📋', name: 'Ag Compliance Agent', desc: 'USDA reporting, organic certification, GAP audits', color: '#d4834d', isNew: true },
    { id: 'crop_plan', icon: '🌾', name: 'Crop Planning Agent', desc: 'Rotation scheduling, seed selection, yield fore', color: '#4db88c', isNew: true },
    { id: 'farm_finance', icon: '💰', name: 'Farm Financial Agent', desc: 'FSA loan applications, crop insurance, cash flo', color: '#e8913a', isNew: true },
    { id: 'livestock_mgmt', icon: '🐄', name: 'Livestock Manager', desc: 'Herd records, breeding schedules, feed optimiza', color: '#d4a84d', isNew: true },
    { id: 'precision_ag', icon: '📡', name: 'Precision Ag Agent', desc: 'Variable-rate application, soil mapping, drone', color: '#4daed4', isNew: true },
  ],
  Automotive: [
    { id: 'dealer_crm', icon: '📊', name: 'Dealer CRM Agent', desc: 'Lead scoring, follow-up cadence, BDC scripts', color: '#4d8cd4', isNew: true },
    { id: 'parts_mgmt', icon: '🔩', name: 'Parts Inventory Agent', desc: 'Reorder points, obsolescence tracking, core ret', color: '#d4a84d', isNew: true },
    { id: 'service_advisor', icon: '🚗', name: 'Service Advisor Agent', desc: 'Repair estimates, upsell recommendations, DVI r', color: '#e8913a', isNew: true },
    { id: 'vehicle_appr', icon: '🏷', name: 'Vehicle Appraisal Agent', desc: 'Trade-in valuation, market comps, condition gra', color: '#4db88c', isNew: true },
    { id: 'warranty_agent', icon: '🛡', name: 'Warranty Claims Agent', desc: 'OEM submission, labor time guides, parts markup', color: '#c44d4d', isNew: true },
  ],
  'Aviation & Aerospace': [
    { id: 'aero_cert', icon: '📋', name: 'Certification Agent', desc: 'FAA/EASA compliance, type certification, STC ap', color: '#d4834d', isNew: true },
    { id: 'flight_ops', icon: '✈', name: 'Flight Operations Agent', desc: 'Dispatch planning, fuel optimization, MEL manag', color: '#4daed4', isNew: true },
    { id: 'ground_ops', icon: '🛬', name: 'Ground Operations Agent', desc: 'Turnaround optimization, gate assignments, crew', color: '#e8913a', isNew: true },
    { id: 'mro_agent', icon: '🔧', name: 'MRO Planning Agent', desc: 'Airworthiness directives, C-check scheduling, p', color: '#d4a84d', isNew: true },
    { id: 'safety_mgmt', icon: '🛡', name: 'Aviation Safety Agent', desc: 'SMS compliance, hazard reporting, risk matrices', color: '#c44d4d', isNew: true },
  ],
  'Banking & Lending': [
    { id: 'branch_ops', icon: '🏢', name: 'Branch Operations Agent', desc: 'Teller workflows, cross-sell scripts, complianc', color: '#e8913a', isNew: true },
    { id: 'comm_lender', icon: '💼', name: 'Commercial Lending Agent', desc: 'Term sheets, covenant analysis, credit memos', color: '#d4a84d', isNew: true },
    { id: 'kyc_agent', icon: '🔐', name: 'KYC/AML Agent', desc: 'Identity verification, risk profiling, SAR draf', color: '#c44d4d', isNew: true },
    { id: 'loan_orig', icon: '🏦', name: 'Loan Origination Agent', desc: 'Application review, DTI analysis, disclosure prep', color: '#4db88c', isNew: true },
    { id: 'portfolio_mgr', icon: '📈', name: 'Portfolio Manager Agent', desc: 'Asset allocation, rebalancing, performance attr', color: '#4d8cd4', isNew: true },
  ],
  'Construction & Trades': [
    { id: 'bid_est', icon: '🏗', name: 'Bid Estimator', desc: 'Material takeoffs, labor costing, markup strategy', color: '#d4a84d', isNew: true },
    { id: 'inspect_agent', icon: '🔍', name: 'Inspection Agent', desc: 'Punch lists, code violations, photo documentation', color: '#e8913a', isNew: true },
    { id: 'material_calc', icon: '📐', name: 'Material Calculator', desc: 'Quantity estimation, waste factors, supplier qu', color: '#4db88c', isNew: true },
    { id: 'safety_comp', icon: '⚠', name: 'Safety Compliance Agent', desc: 'OSHA standards, toolbox talks, incident reporting', color: '#c44d4d', isNew: true },
    { id: 'sched_opt', icon: '📅', name: 'Schedule Optimizer', desc: 'Critical path, Gantt sequencing, weather delays', color: '#4daed4', isNew: true },
  ],
  Cybersecurity: [
    { id: 'incident_resp', icon: '🚨', name: 'Incident Response Agent', desc: 'NIST IR framework, containment, forensic triage', color: '#e8913a', isNew: true },
    { id: 'pentest_plan', icon: '🕵', name: 'Pentest Planner', desc: 'OWASP methodology, scope, rules of engagement', color: '#9b7fd4', isNew: true },
    { id: 'soc_analyst', icon: '📡', name: 'SOC Analyst Agent', desc: 'SIEM triage, alert correlation, MITRE ATT&CK', color: '#4d8cd4', isNew: true },
    { id: 'threat_model', icon: '🎯', name: 'Threat Modeling Agent', desc: 'STRIDE analysis, attack surfaces, risk scoring', color: '#c44d4d', isNew: true },
    { id: 'vuln_mgmt', icon: '🔓', name: 'Vulnerability Manager', desc: 'CVE prioritization, CVSS scoring, patch cycles', color: '#4daed4', isNew: true },
  ],
  'Dental & Optometry': [
    { id: 'dental_treatment', icon: '🦷', name: 'Treatment Plan Agent', desc: 'Procedure sequencing, insurance coding, patient', color: '#4db88c', isNew: true },
    { id: 'ins_verify', icon: '✅', name: 'Insurance Verification Agent', desc: 'Eligibility checks, pre-auth coding, benefits b', color: '#d4a84d', isNew: true },
    { id: 'optical_sales', icon: '👓', name: 'Optical Sales Agent', desc: 'Frame selection, lens upselling, insurance bene', color: '#e8913a', isNew: true },
    { id: 'patient_comms', icon: '💬', name: 'Patient Communications Agent', desc: 'Appointment reminders, post-op instructions, re', color: '#9b7fd4', isNew: true },
    { id: 'practice_mgmt', icon: '📊', name: 'Practice Manager Agent', desc: 'Chair utilization, recall scheduling, KPI dashb', color: '#4d8cd4', isNew: true },
  ],
  'E-commerce & DTC': [
    { id: 'abandon_cart', icon: '🛒', name: 'Cart Recovery Agent', desc: 'Abandonment flows, urgency copy, retargeting', color: '#c44d4d', isNew: true },
    { id: 'listing_opt', icon: '🏷', name: 'Listing Optimizer', desc: 'SEO titles, A+ content, keyword optimization', color: '#e8913a', isNew: true },
    { id: 'pricing_intel', icon: '💲', name: 'Pricing Intelligence Agent', desc: 'Competitor monitoring, margin analysis, dynamic', color: '#d4a84d', isNew: true },
    { id: 'product_desc', icon: '✏', name: 'Product Description Agent', desc: 'Feature-benefit copy, brand voice, A/B variants', color: '#9b7fd4', isNew: true },
    { id: 'review_mgmt', icon: '⭐', name: 'Review Management Agent', desc: 'Response templates, sentiment analysis, UGC str', color: '#4db88c', isNew: true },
  ],
  'Energy & Utilities': [
    { id: 'energy_audit', icon: '🔋', name: 'Energy Audit Agent', desc: 'Consumption analysis, retrofit ROI, ASHRAE stan', color: '#4db88c', isNew: true },
    { id: 'field_service', icon: '🔧', name: 'Field Service Agent', desc: 'Work order routing, safety protocols, crew sche', color: '#e8913a', isNew: true },
    { id: 'grid_ops', icon: '⚡', name: 'Grid Operations Agent', desc: 'Load forecasting, outage management, SCADA moni', color: '#4daed4', isNew: true },
    { id: 'renew_dev', icon: '🌱', name: 'Renewable Development Agent', desc: 'PPA negotiation, interconnection apps, site ass', color: '#d4a84d', isNew: true },
    { id: 'util_reg', icon: '📜', name: 'Utility Regulatory Agent', desc: 'Rate case filings, FERC compliance, tariff anal', color: '#d4834d', isNew: true },
  ],
  'Fitness & Wellness': [
    { id: 'class_sched', icon: '📅', name: 'Class Schedule Agent', desc: 'Time slot optimization, instructor allocation', color: '#e8913a', isNew: true },
    { id: 'client_progress', icon: '📊', name: 'Client Progress Agent', desc: 'Body comp tracking, milestone analysis, program', color: '#4d8cd4', isNew: true },
    { id: 'nutrition_plan', icon: '🥗', name: 'Nutrition Planning Agent', desc: 'Macro calculations, meal prep, dietary restrict', color: '#34d399', isNew: true },
    { id: 'program_design', icon: '💪', name: 'Program Design Agent', desc: 'Periodization, progressive overload, exercise s', color: '#4db88c', isNew: true },
    { id: 'wellness_coach', icon: '🧘', name: 'Wellness Coach Agent', desc: 'Stress management, sleep protocols, habit forma', color: '#9b7fd4', isNew: true },
  ],
  'Freelancers & Solopreneurs': [
    { id: 'client_onboard', icon: '🤝', name: 'Client Onboarding Agent', desc: 'Welcome packets, kickoff agendas, milestone pla', color: '#4db88c', isNew: true },
    { id: 'freelance_pitch', icon: '✍', name: 'Freelance Pitch Writer', desc: 'Platform proposals, cold outreach, portfolio fr', color: '#e8913a', isNew: true },
    { id: 'portfolio_build', icon: '🎨', name: 'Portfolio Builder', desc: 'Case studies, project narratives, testimonial f', color: '#9b7fd4', isNew: true },
    { id: 'rate_calc', icon: '💰', name: 'Rate & Pricing Agent', desc: 'Value-based pricing, rate cards, project scoping', color: '#d4a84d', isNew: true },
    { id: 'scope_guard', icon: '🛡', name: 'Scope Guard Agent', desc: 'Scope creep detection, change orders, boundary', color: '#c44d4d', isNew: true },
  ],
  Manufacturing: [
    { id: 'lean_agent', icon: '♻', name: 'Lean Manufacturing Agent', desc: 'Kaizen events, value stream mapping, 5S audits', color: '#4db88c', isNew: true },
    { id: 'maint_plan', icon: '🔩', name: 'Maintenance Planner', desc: 'PM schedules, CMMS workflows, MTBF analysis', color: '#d4a84d', isNew: true },
    { id: 'proc_agent', icon: '📦', name: 'Procurement Agent', desc: 'RFQ drafting, vendor scoring, contract negotiation', color: '#e8913a', isNew: true },
    { id: 'prod_sched', icon: '🏭', name: 'Production Scheduler', desc: 'MRP planning, capacity balancing, downtime sche', color: '#4daed4', isNew: true },
    { id: 'quality_ctrl', icon: '🔧', name: 'Quality Control Agent', desc: 'Six Sigma, SPC charts, defect root cause analysis', color: '#c44d4d', isNew: true },
  ],
  'Media & Publishing': [
    { id: 'audience_dev', icon: '📊', name: 'Audience Development Agent', desc: 'Growth tactics, newsletter optimization, paywal', color: '#4db88c', isNew: true },
    { id: 'content_cal', icon: '📅', name: 'Content Calendar Agent', desc: 'Editorial planning, deadline tracking, cross-pl', color: '#e8913a', isNew: true },
    { id: 'copy_editor', icon: '✏', name: 'Copy Editor Agent', desc: 'AP/Chicago style, fact-checking, headline optim', color: '#4d8cd4', isNew: true },
    { id: 'editorial_agent', icon: '📰', name: 'Editorial Agent', desc: 'Story pitching, angle development, source ident', color: '#9b7fd4', isNew: true },
    { id: 'rights_mgmt', icon: '⚖', name: 'Rights & Licensing Agent', desc: 'Syndication terms, copyright clearance, usage t', color: '#d4834d', isNew: true },
  ],
  'Nonprofit & Government': [
    { id: 'constituent_svc', icon: '📬', name: 'Constituent Service Agent', desc: 'Case management, response templates, escalation', color: '#4d8cd4', isNew: true },
    { id: 'grant_writer', icon: '✍', name: 'Grant Writer Agent', desc: 'LOI drafting, narrative structure, budget justi', color: '#9b7fd4', isNew: true },
    { id: 'impact_report', icon: '📊', name: 'Impact Report Generator', desc: 'Logic models, outcome metrics, donor storytelling', color: '#4db88c', isNew: true },
    { id: 'policy_analyst', icon: '📜', name: 'Policy Analyst Agent', desc: 'Legislative tracking, regulatory impact, public', color: '#d4834d', isNew: true },
    { id: 'volunteer_coord', icon: '👥', name: 'Volunteer Coordinator', desc: 'Shift scheduling, onboarding, recognition programs', color: '#e8913a', isNew: true },
  ],
  'Pharma & Biotech': [
    { id: 'clin_trial', icon: '🧪', name: 'Clinical Trial Agent', desc: 'Protocol design, ICH-GCP compliance, site selec', color: '#4db88c', isNew: true },
    { id: 'drug_safety', icon: '⚕', name: 'Drug Safety Agent', desc: 'Pharmacovigilance, ICSR reporting, signal detec', color: '#4d8cd4', isNew: true },
    { id: 'med_affairs', icon: '🩺', name: 'Medical Affairs Agent', desc: 'KOL engagement, MSL briefings, publication plan', color: '#9b7fd4', isNew: true },
    { id: 'pharma_qc', icon: '🔬', name: 'Pharma QA/QC Agent', desc: 'GMP compliance, batch records, deviation handling', color: '#c44d4d', isNew: true },
    { id: 'reg_submit', icon: '📋', name: 'Regulatory Submission Agent', desc: 'FDA 510(k), IND applications, CTD formatting', color: '#d4834d', isNew: true },
  ],
  'Property Management': [
    { id: 'lease_mgmt', icon: '📜', name: 'Lease Management Agent', desc: 'Renewal terms, rent escalation, clause negotiation', color: '#d4834d', isNew: true },
    { id: 'maint_coord', icon: '🔧', name: 'Maintenance Coordinator', desc: 'Work orders, vendor dispatch, preventive schedules', color: '#e8913a', isNew: true },
    { id: 'prop_financials', icon: '💹', name: 'Property Financials Agent', desc: 'NOI analysis, cap rate modeling, expense foreca', color: '#4db88c', isNew: true },
    { id: 'tenant_comms', icon: '📬', name: 'Tenant Communications Agent', desc: 'Notice drafting, policy updates, community mana', color: '#9b7fd4', isNew: true },
    { id: 'tenant_screen', icon: '🔍', name: 'Tenant Screening Agent', desc: 'Background checks, income verification, risk sc', color: '#4d8cd4', isNew: true },
  ],
  'Recruitment & Staffing': [
    { id: 'employer_brand', icon: '🏢', name: 'Employer Brand Agent', desc: 'EVP messaging, careers page copy, Glassdoor str', color: '#9b7fd4', isNew: true },
    { id: 'job_desc', icon: '📄', name: 'Job Description Writer', desc: 'Role scoping, inclusive language, SEO-optimized', color: '#4d8cd4', isNew: true },
    { id: 'offer_letter', icon: '✉', name: 'Offer Letter Agent', desc: 'Comp packaging, equity terms, closing language', color: '#d4a84d', isNew: true },
    { id: 'recruit_pipe', icon: '📈', name: 'Recruiting Pipeline Agent', desc: 'Pipeline metrics, candidate scoring, SLA tracking', color: '#4db88c', isNew: true },
    { id: 'source_agent', icon: '🎣', name: 'Sourcing Agent', desc: 'Boolean search, talent mapping, outreach sequences', color: '#e8913a', isNew: true },
  ],
  'SaaS & Product': [
    { id: 'churn_analyst', icon: '📉', name: 'Churn Analyst', desc: 'Cohort analysis, retention modeling, win-back f', color: '#c44d4d', isNew: true },
    { id: 'feature_prior', icon: '📊', name: 'Feature Prioritization Agent', desc: 'RICE scoring, impact mapping, roadmap sequencing', color: '#9b7fd4', isNew: true },
    { id: 'prd_writer', icon: '📋', name: 'PRD Writer', desc: 'User stories, acceptance criteria, spec drafting', color: '#4d8cd4', isNew: true },
    { id: 'release_notes', icon: '📝', name: 'Release Notes Writer', desc: 'Changelogs, feature announcements, migration gu', color: '#4db88c', isNew: true },
    { id: 'user_research', icon: '🔬', name: 'User Research Agent', desc: 'Interview scripts, survey design, insight synth', color: '#e8913a', isNew: true },
  ],
  'Sports & Athletics': [
    { id: 'athlete_perf', icon: '📊', name: 'Athlete Performance Agent', desc: 'Training load, recovery protocols, biomechanics', color: '#4db88c', isNew: true },
    { id: 'fan_engage', icon: '📣', name: 'Fan Engagement Agent', desc: 'Social campaigns, merchandise strategy, loyalty', color: '#9b7fd4', isNew: true },
    { id: 'game_plan', icon: '🎯', name: 'Game Plan Agent', desc: 'Formation analysis, tendency reports, situation', color: '#c44d4d', isNew: true },
    { id: 'scout_analyst', icon: '🏟', name: 'Scouting Analyst', desc: 'Player evaluation, combine metrics, draft modeling', color: '#4d8cd4', isNew: true },
    { id: 'sports_ops', icon: '🏢', name: 'Sports Operations Agent', desc: 'Event logistics, facility scheduling, contract', color: '#e8913a', isNew: true },
  ],
  Veterinary: [
    { id: 'pet_comms', icon: '📱', name: 'Pet Owner Communications', desc: 'Discharge instructions, recall reminders, welln', color: '#9b7fd4', isNew: true },
    { id: 'practice_growth', icon: '📈', name: 'Practice Growth Agent', desc: 'Client acquisition, retention metrics, service', color: '#e8913a', isNew: true },
    { id: 'vet_billing', icon: '💊', name: 'Veterinary Billing Agent', desc: 'Procedure coding, estimate generation, payment', color: '#d4a84d', isNew: true },
    { id: 'vet_records', icon: '🐾', name: 'Veterinary Records Agent', desc: 'SOAP notes, treatment plans, vaccination schedules', color: '#4db88c', isNew: true },
    { id: 'vet_triage', icon: '🚑', name: 'Veterinary Triage Agent', desc: 'Symptom assessment, urgency classification, ref', color: '#c44d4d', isNew: true },
  ],
}

const INDUSTRY_TABS = Object.keys(INDUSTRIES)

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
const buildPrompt = (name, desc, userContext) =>
`You are an elite AI systems architect who designs deployment-ready agent system prompts used in production environments.

<task>
Generate a complete, deployment-ready system prompt for an AI agent.
Agent role: ${name}
Agent specialty: ${desc}${userContext ? `\nUser context: ${userContext}` : ''}
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
  const [contextAgent, setContextAgent] = useState(null)
  const [userContext, setUserContext]   = useState('')

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

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    if (params.get('upgraded') === 'true') {
      setIsPro(true)
      try { localStorage.setItem(LS_PRO, 'true') } catch {}
      window.history.replaceState({}, '', '/forge')
    }
  }, [])

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
    if (atLimit) { setModal('upgrade'); return }
    // Fixed prompts skip context step entirely
    if (agent.fixedPrompt) {
      generate(agent)
      return
    }
    setContextAgent(agent)
    setUserContext('')
  }

  const generate = async (agent, context) => {
    if (atLimit) { setModal('upgrade'); return }
    setContextAgent(null)
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
      const body = { agentName: agent.name, agentDesc: agent.desc }
      if (context) body.userContext = context
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const newUsage = usage + 1
      setUsage(newUsage)
      try { localStorage.setItem(LS_USAGE, String(newUsage)) } catch {}
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
                    onClick={() => !locked && handleAgentClick(agent)}
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

        {/* ══ CONTEXT PANEL ══ */}
        {contextAgent && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000, padding: 20,
          }} onClick={e => { if (e.target === e.currentTarget) setContextAgent(null) }}
             onKeyDown={e => { if (e.key === 'Escape') setContextAgent(null) }}>
            <div style={{
              background: '#1c1f30', border: '1px solid #2a2d42', borderRadius: 14,
              padding: 28, maxWidth: 480, width: '100%',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 22 }}>{contextAgent.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 15, color: '#f0f2ff' }}>{contextAgent.name}</div>
                  <div style={{ fontSize: 12, color: '#6b7280' }}>{contextAgent.desc}</div>
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
                <button className="btn" onClick={reset}>← Back</button>
                <span style={{ color: selected.color, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14 }}>
                  {selected.icon} {selected.name}
                </span>
              </div>
              {!loading && prompt && (
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn accent" onClick={() => generate(selected, userContext || undefined)}>Regenerate ↻</button>
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
              {loading && !prompt ? (
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
                <div>
                  <div className="pout fu">{parsePrompt(prompt)}</div>
                  {loading && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
                      <div style={{
                        width: 14, height: 14,
                        border: '2px solid #2e3248',
                        borderTop: `2px solid ${selected.color}`,
                        borderRadius: '50%', animation: 'spin 0.75s linear infinite',
                      }} />
                      <span style={{ color: selected.color, fontSize: 11, fontWeight: 500 }}>Generating{dots}</span>
                    </div>
                  )}
                </div>
              ) : null}
            </div>

            {!loading && prompt && (
              <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#4b5563', flexWrap: 'wrap', gap: 4 }}>
                <span>Generated fresh by Claude · {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {prompt.split(/\s+/).filter(Boolean).length} words · Every prompt is unique</span>
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


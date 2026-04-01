// ─── Industry Data Module ─────────────────────────────────────────────────────────────────
// Single source of truth for all industry/agent data. Shared by forge + SEO pages.

export const PRO_INDUSTRIES = ['AI Agent Development', 'Cyber Intelligence', 'Cybersecurity', 'Consulting & Strategy', 'Architecture & Engineering', 'SaaS & Product', 'Banking & Lending', 'Pharma & Biotech', 'Aviation & Aerospace', 'Executive & Leadership']

// ─── Industry Agent Data ──────────────────────────────────────────────────────────────────
export const INDUSTRIES = {
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
    { id: 'fpa_analyst', icon: '📉', name: 'FP&A Analyst',          desc: 'Budget variance, rolling forecasts, board decks', color: '#4daed4', isNew: true },
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
    { id: 'ip_reviewer',     icon: '🔏', name: 'IP Review Agent',           desc: 'Patent search, trademark filings, infringement',       color: '#9b7fd4', isNew: true },
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
    { id: 'employee_rel',   icon: '🤲', name: 'Employee Relations Agent', desc: 'Investigations, grievance docs, PIP drafting',          color: '#d4834d', isNew: true },
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
    { id: 'spec_review', icon: '📑', name: 'Spec Review Agent',      desc: 'CSI MasterFormat, IBC review, submittal QC',           color: '#4daed4', isNew: true },
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
    { id: 'workshop_facil', icon: '🎯', name: 'Workshop Facilitator',  desc: 'Agenda design, breakout exercises, Miro boards',    color: '#4db88c', isNew: true },
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
    { id: 'freight_audit', icon: '🧾', name: 'Freight Audit Agent',      desc: 'Rate verification, invoice reconciliation, claims', color: '#d4834d', isNew: true },
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
    { id: 'deposit_ops',  icon: '🏧', name: 'Deposit Operations Agent', desc: 'Reg CC holds, exception processing, account QC', color: '#9b7fd4', isNew: true },
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
    { id: 'grc_analyst', icon: '📋', name: 'GRC Analyst',          desc: 'Risk registers, NIST CSF mapping, audit evidence', color: '#d4834d', isNew: true },
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
    { id: 'ecomm_email', icon: '📧', name: 'Email Marketing Agent',      desc: 'Klaviyo flows, segmentation, lifecycle campaigns', color: '#d4834d', isNew: true },
  ],
  'Energy & Utilities': [
    { id: 'energy_audit', icon: '🔋', name: 'Energy Audit Agent', desc: 'Consumption analysis, retrofit ROI, ASHRAE stan', color: '#4db88c', isNew: true },
    { id: 'field_service', icon: '🔧', name: 'Field Service Agent', desc: 'Work order routing, safety protocols, crew sche', color: '#e8913a', isNew: true },
    { id: 'grid_ops', icon: '⚡', name: 'Grid Operations Agent', desc: 'Load forecasting, outage management, SCADA moni', color: '#4daed4', isNew: true },
    { id: 'renew_dev', icon: '🌱', name: 'Renewable Development Agent', desc: 'PPA negotiation, interconnection apps, site ass', color: '#d4a84d', isNew: true },
    { id: 'util_reg', icon: '📜', name: 'Utility Regulatory Agent', desc: 'Rate case filings, FERC compliance, tariff anal', color: '#d4834d', isNew: true },
    { id: 'renew_finance', icon: '💹', name: 'Renewable Finance Agent', desc: 'PPA modeling, ITC/PTC analysis, project finance', color: '#4d8cd4', isNew: true },
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
    { id: 'ehs_agent',   icon: '🦺', name: 'EHS Compliance Agent',     desc: 'ISO 14001, OSHA recordkeeping, incident reports',  color: '#d4834d', isNew: true },
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
    { id: 'ngo_grant_writer', icon: '✍', name: 'Grant Writer Agent', desc: 'LOI drafting, narrative structure, budget justi', color: '#9b7fd4', isNew: true },
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
    { id: 'source_agent',    icon: '🎣', name: 'Sourcing Agent',            desc: 'Boolean search, talent mapping, outreach sequences', color: '#e8913a', isNew: true },
    { id: 'contingent_mgmt', icon: '📑', name: 'Contingent Workforce Agent', desc: 'Contractor compliance, rate cards, SOW drafting',    color: '#d4834d', isNew: true },
  ],
  'SaaS & Product': [
    { id: 'churn_analyst', icon: '📉', name: 'Churn Analyst', desc: 'Cohort analysis, retention modeling, win-back f', color: '#c44d4d', isNew: true },
    { id: 'feature_prior', icon: '📊', name: 'Feature Prioritization Agent', desc: 'RICE scoring, impact mapping, roadmap sequencing', color: '#9b7fd4', isNew: true },
    { id: 'prd_writer', icon: '📋', name: 'PRD Writer', desc: 'User stories, acceptance criteria, spec drafting', color: '#4d8cd4', isNew: true },
    { id: 'release_notes', icon: '📝', name: 'Release Notes Writer', desc: 'Changelogs, feature announcements, migration gu', color: '#4db88c', isNew: true },
    { id: 'user_research', icon: '🔬', name: 'User Research Agent', desc: 'Interview scripts, survey design, insight synth', color: '#e8913a', isNew: true },
    { id: 'onboard_flow', icon: '🚦', name: 'Onboarding Flow Designer', desc: 'Activation metrics, user journeys, tooltip copy', color: '#d4a84d', isNew: true },
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
  'AI Agent Development': [
    { id: 'agent_arch',      icon: '🧠', name: 'Agent Architecture Designer', desc: 'Multi-agent systems, tool use, orchestration',          color: '#9b7fd4', isNew: true },
    { id: 'tool_builder',    icon: '🔧', name: 'Tool Use Designer',           desc: 'Function calling, MCP servers, tool schemas',          color: '#4daed4', isNew: true },
    { id: 'eval_agent',      icon: '📊', name: 'Prompt Evaluation Agent',     desc: 'Eval frameworks, benchmarks, quality scoring',         color: '#4db88c', isNew: true },
    { id: 'multi_orch',      icon: '🔀', name: 'Multi-Agent Orchestrator',    desc: 'Task queues, handoff protocols, shared state',         color: '#4daed4', isNew: true },
    { id: 'soul_writer',     icon: '✨', name: 'SOUL.md Writer',              desc: 'Personality design, behavioral boundaries, tone',      color: '#f5c518', isNew: true },
    { id: 'memory_arch',     icon: '💾', name: 'Agent Memory Architect',      desc: 'Context management, compaction, MEMORY.md design',     color: '#9b7fd4', isNew: true },
    { id: 'skill_builder',   icon: '🛠', name: 'AgentSkill Builder',          desc: 'SKILL.md creation, frontmatter, tool integration',     color: '#4db88c', isNew: true },
    { id: 'openclaw_deploy', icon: '🦞', name: 'OpenClaw Deployment Agent',   desc: 'SOUL.md, AGENTS.md, Gateway config, channel setup',    color: '#c44d4d', isNew: true },
    { id: 'agent_sec',       icon: '🔒', name: 'Agent Security Auditor',      desc: 'Prompt injection, data exfiltration, permissions',     color: '#e8913a', isNew: true },
    { id: 'agent_test',      icon: '🧪', name: 'Agent Testing Strategist',    desc: 'Scenario coverage, edge cases, regression testing',    color: '#4d8cd4', isNew: true },
  ],
  'Cyber Intelligence': [
    { id: 'osint_planner',   icon: '🗺', name: 'OSINT Investigation Planner',  desc: 'Investigation workflows, OPSEC, evidence chain',       color: '#d4834d', isNew: true },
    { id: 'digi_footprint',  icon: '🌐', name: 'Digital Footprint Analyst',    desc: 'OSINT mapping, Maltego, Shodan, public records',       color: '#4db8c8', isNew: true },
    { id: 'threat_intel',    icon: '🎯', name: 'Threat Intelligence Analyst',  desc: 'MITRE ATT&CK, Diamond Model, Kill Chain, TTPs',       color: '#4db88c', isNew: true },
    { id: 'cred_exposure',   icon: '🔑', name: 'Credential Exposure Monitor',  desc: 'Breach scanning, API key leaks, GitHub dorking',       color: '#e8913a', isNew: true },
    { id: 'domain_recon',    icon: '🔗', name: 'Domain & Infrastructure Recon', desc: 'DNS recon, subdomain enumeration, SSL analysis',       color: '#4daed4', isNew: true },
    { id: 'darkweb_mon',     icon: '🕸', name: 'Dark Web Monitor',             desc: 'Threat actor tracking, leak monitoring, MISP',         color: '#c44d4d', isNew: true },
    { id: 'socmedia_intel',  icon: '📱', name: 'Social Media Intelligence',    desc: 'SOCMINT, sentiment analysis, network mapping',         color: '#4d8cd4', isNew: true },
    { id: 'corp_dd',         icon: '🏢', name: 'Corporate Due Diligence Agent',desc: 'EDGAR filings, UBO registries, court records',         color: '#d4a84d', isNew: true },
    { id: 'disinfo_analyst', icon: '🔍', name: 'Disinformation Analyst',       desc: 'Bot detection, deepfake analysis, IO tracking',        color: '#9b7fd4', isNew: true },
    { id: 'geoloc_intel',    icon: '📍', name: 'Geolocation Intelligence',     desc: 'GEOINT, EXIF analysis, satellite imagery, SunCalc',    color: '#34d399', isNew: true },
  ],
}


export const INDUSTRY_TABS = Object.keys(INDUSTRIES)

// ─── Slug Utilities ──────────────────────────────────────────────────────────────────────
export function toSlug(name) {
  return name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function fromSlug(slug) {
  return INDUSTRY_TABS.find(name => toSlug(name) === slug) || null
}

// ─── Industry Metadata (icons + SEO descriptions) ───────────────────────────────────────
export const INDUSTRY_META = {
  General: { icon: '⚡', description: 'AI agents for everyday business tasks — SOP generation, email drafting, code review, data analysis, project management, and cybersecurity advisory powered by structured system prompts.' },
  Healthcare: { icon: '🏥', description: 'AI agents for healthcare operations — medical scribing with EMR integration, prior authorization workflows, revenue cycle management, patient triage, diagnostics support, and clinical trial coordination.' },
  Finance: { icon: '📊', description: 'AI agents for finance teams — autonomous financial close, treasury and liquidity management, audit compliance, credit risk underwriting, tax strategy, and FP&A analysis with rolling forecasts.' },
  'Comms & Sales': { icon: '📣', description: 'AI agents for sales and communications — autonomous SDR prospecting, content repurposing across platforms, call center scripting, market intelligence, PR outreach, and proposal generation.' },
  Education: { icon: '🎓', description: 'AI agents for education — curriculum design with learning paths, automated grading and feedback, career coaching, admissions pipeline management, research assistance, and grant writing.' },
  'Personal Finance': { icon: '💰', description: 'AI agents for personal finance — financial advisory, subscription negotiation and bill auditing, tax optimization, investment strategy, identity protection, budgeting, and debt payoff planning.' },
  Parenting: { icon: '👶', description: 'AI agents for parents — homework tutoring with step-by-step explanations, family meal planning, child development tracking, bedtime story generation, parent coaching, and IEP advocacy.' },
  'Retail & Ops': { icon: '🛒', description: 'AI agents for retail operations — inventory optimization with demand forecasting, pricing strategy, supply chain management, returns processing, vendor negotiation, and store operations.' },
  'Legal & Compliance': { icon: '📋', description: 'AI agents for legal and compliance — contract analysis with risk flagging, compliance monitoring, policy writing, regulatory navigation, dispute resolution, and IP review.' },
  'Real Estate': { icon: '🏡', description: 'AI agents for real estate — MLS listing generation, market comp analysis, lease review, lead nurturing with drip campaigns, showing scheduling, and open house marketing.' },
  'Marketing & Growth': { icon: '📈', description: 'AI agents for marketing — SEO content strategy, campaign optimization with ROI tracking, A/B test analysis, brand voice guidelines, multi-touch attribution, and social media management.' },
  'HR & People Ops': { icon: '👥', description: 'AI agents for HR — resume screening with bias reduction, interview question design, onboarding workflows, compensation benchmarking, performance management, and employee relations.' },
  'Accounting & Tax': { icon: '🏢', description: 'AI agents for accounting — AI bookkeeping and reconciliation, invoice management, audit preparation, tax prep with deduction identification, financial reporting, and payroll compliance.' },
  Insurance: { icon: '🛡️', description: 'AI agents for insurance — claims processing, underwriting risk assessment, policy comparison, regulatory compliance, client intake with quote generation, and renewal analysis.' },
  'Architecture & Engineering': { icon: '🏗️', description: 'AI agents for AEC — cost estimation with quantity takeoffs, project coordination, RFI/RFP drafting, site report generation with field documentation, and specification review against CSI MasterFormat.' },
  'Consulting & Strategy': { icon: '🎯', description: 'AI agents for consulting — change management planning, due diligence analysis, TAM/SAM/SOM market sizing, proposal and SOW writing, strategy deck building, and workshop facilitation.' },
  'Executive & Leadership': { icon: '👔', description: 'AI agents for executives — briefing documents, board deck preparation, decision framework analysis, executive communications, and OKR architecture with alignment scoring.' },
  'Hospitality & Events': { icon: '🏨', description: 'AI agents for hospitality — event planning with vendor coordination, guest experience scripts, menu engineering, revenue management with dynamic pricing, and staff scheduling.' },
  'Logistics & Supply Chain': { icon: '🚛', description: 'AI agents for logistics — route optimization for fleets, warehouse operations, carrier negotiation, customs and trade compliance, demand planning, and freight audit with invoice reconciliation.' },
  'Agriculture & Farming': { icon: '🌾', description: 'AI agents for agriculture — USDA compliance reporting, crop rotation planning, farm financial management with FSA loans, livestock record keeping, and precision agriculture with soil mapping.' },
  Automotive: { icon: '🚗', description: 'AI agents for automotive — dealer CRM with lead scoring, parts inventory management, service advisor estimates, vehicle appraisal with market comps, and warranty claims processing.' },
  'Aviation & Aerospace': { icon: '✈️', description: 'AI agents for aviation — FAA/EASA certification compliance, flight operations planning, ground operations optimization, MRO scheduling, and safety management system compliance.' },
  'Banking & Lending': { icon: '🏦', description: 'AI agents for banking — branch operations, commercial lending with credit memos, KYC/AML verification, loan origination, portfolio management, and deposit operations compliance.' },
  'Construction & Trades': { icon: '🔨', description: 'AI agents for construction — bid estimation with material takeoffs, inspection documentation, material quantity calculation, OSHA safety compliance, and critical path schedule optimization.' },
  Cybersecurity: { icon: '🔒', description: 'AI agents for cybersecurity — NIST incident response, penetration test planning with OWASP methodology, SOC analysis with MITRE ATT&CK mapping, threat modeling, vulnerability management, and GRC.' },
  'Dental & Optometry': { icon: '🦷', description: 'AI agents for dental and optometry practices — treatment plan sequencing, insurance verification, optical sales assistance, patient communications, and practice management with KPI tracking.' },
  'E-commerce & DTC': { icon: '🛍️', description: 'AI agents for e-commerce — cart abandonment recovery, listing SEO optimization, competitor pricing intelligence, product description copywriting, review management, and Klaviyo email marketing.' },
  'Energy & Utilities': { icon: '⚡', description: 'AI agents for energy and utilities — energy audits with ASHRAE standards, field service dispatch, grid operations monitoring, renewable development with PPA negotiation, and regulatory filings.' },
  'Fitness & Wellness': { icon: '💪', description: 'AI agents for fitness — class schedule optimization, client progress tracking, nutrition planning with macro calculations, program design with periodization, and wellness coaching.' },
  'Freelancers & Solopreneurs': { icon: '🎯', description: 'AI agents for freelancers — client onboarding workflows, pitch writing for platforms, portfolio case studies, value-based pricing strategy, and scope creep detection.' },
  Manufacturing: { icon: '🏭', description: 'AI agents for manufacturing — lean manufacturing with Kaizen events, maintenance planning with CMMS, procurement and RFQ drafting, production scheduling, Six Sigma quality control, and EHS compliance.' },
  'Media & Publishing': { icon: '📰', description: 'AI agents for media — audience development and newsletter growth, editorial content calendars, AP/Chicago style copy editing, story pitching, and rights and licensing management.' },
  'Nonprofit & Government': { icon: '🏛️', description: 'AI agents for nonprofits and government — constituent service management, grant writing with LOI drafting, impact reporting with logic models, policy analysis, and volunteer coordination.' },
  'Pharma & Biotech': { icon: '🧬', description: 'AI agents for pharma and biotech — clinical trial protocol design, pharmacovigilance and drug safety, medical affairs KOL engagement, GMP quality assurance, and FDA regulatory submissions.' },
  'Property Management': { icon: '🏘️', description: 'AI agents for property management — lease renewal management, maintenance work orders with vendor dispatch, NOI and cap rate financial analysis, tenant communications, and screening.' },
  'Recruitment & Staffing': { icon: '🤝', description: 'AI agents for recruiting — employer branding, SEO-optimized job descriptions, offer letter drafting, pipeline metrics tracking, boolean sourcing, and contingent workforce compliance.' },
  'SaaS & Product': { icon: '🚀', description: 'AI agents for SaaS product teams — churn cohort analysis, RICE feature prioritization, PRD writing with user stories, release notes, user research scripts, and onboarding flow design.' },
  'Sports & Athletics': { icon: '🏅', description: 'AI agents for sports — athlete performance tracking with recovery protocols, fan engagement campaigns, game plan analysis, scouting with draft modeling, and event operations management.' },
  Veterinary: { icon: '🐾', description: 'AI agents for veterinary practices — pet owner communications, practice growth metrics, veterinary billing and procedure coding, SOAP notes and records, and triage with urgency classification.' },
  'AI Agent Development': { icon: '🧠', description: 'AI agents for building AI agents — multi-agent architecture design, MCP tool use schemas, prompt evaluation frameworks, orchestration protocols, SOUL.md personality design, and agent security auditing.' },
  'Cyber Intelligence': { icon: '🔎', description: 'AI agents for cyber intelligence — OSINT investigation planning, digital footprint analysis with Maltego and Shodan, threat intelligence with MITRE ATT&CK, credential exposure monitoring, and dark web tracking.' },
}

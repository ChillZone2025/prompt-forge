# Tier 2 — Conversation Test: Churn Analyst

- **ID:** churn_analyst
- **Industry:** SaaS & Product
- **Date:** 2026-03-27
- **Model:** claude-sonnet-4-20250514
- **Result:** PASS (9.3/10, threshold: 7.0)

## Scores

| Criteria | Score | Notes |
|----------|-------|-------|
| In Character | 9/10 | Stays consistently in character as ChurnIQ, uses appropriate technical language, but could maintain more consistent branding |
| Actionable Response | 9/10 | Provides highly detailed, structured frameworks with specific metrics, SQL examples, and concrete next steps |
| Edge Case Handling | 10/10 | Excellently handles off-topic poetry request by redirecting professionally while offering specific alternatives within expertise |
| **Average** | **9.3/10** | PASS |

## Conversation Transcript

### USER
Hello, I need your help.

### AGENT
Hello! I'm ChurnIQ, your Churn Analyst specializing in customer retention, lifecycle analytics, and revenue recovery strategies.

To provide you with the most targeted help, I need to understand your specific situation:

**Business Context:**
- What's your business model? (B2B SaaS, consumer subscription, marketplace, etc.)
- What's your current monthly churn rate?
- Company size/stage? (startup, scale-up, enterprise)

**Your Challenge:**
- Are you looking to predict which customers will churn?
- Need to analyze existing retention patterns and identify problem areas?
- Want to design win-back campaigns for churned customers?
- Building executive dashboards for retention metrics?
- Something else entirely?

**Current State:**
- Do you have customer usage data, payment history, support interactions?
- Any existing retention initiatives running?

Once I understand these basics, I can recommend the right analytical approach, whether that's building predictive models, designing cohort analyses, creating A/B testing frameworks, or developing comprehensive retention strategies with quantified business impact projections.

What's your primary retention challenge right now?

### USER
I need help with a specific task related to Cohort analysis, retention modeling, win-back f. What's the standard professional approach for this in the SaaS & Product industry?

### AGENT
Here's the standard professional approach for **Cohort Analysis, Retention Modeling, and Win-Back** in SaaS & Product:

## COHORT ANALYSIS FOUNDATION

**Monthly Revenue Cohorts:**
- Group customers by signup month
- Track MRR retention: Month 1 (100%) → Month 12 (target 90%+ for SaaS)
- Segment by acquisition channel, plan tier, company size
- Use SQL: `GROUP BY DATE_TRUNC('month', signup_date)` in BigQuery/Snowflake

**Key Metrics:**
- Logo retention (customer count)
- Revenue retention (MRR/ARR) 
- Net Revenue Retention (includes expansion) - target 110%+ for healthy SaaS

## RETENTION MODELING WORKFLOW

**1. Churn Prediction (60-90 day horizon):**
- Features: Product usage decline, support ticket volume, payment delays, feature adoption
- Models: Gradient boosting (XGBoost) or logistic regression with SMOTE for class imbalance
- Validation: Time-based splits, precision/recall optimization for business cost structure

**2. Customer Health Scoring:**
- Combine: Login frequency, feature usage breadth, support sentiment, contract value
- Scale 0-100 with risk thresholds: <30 (critical), 30-70 (at-risk), >70 (healthy)
- Update weekly in tools like Mixpanel/Amplitude

## WIN-BACK STRATEGY FRAMEWORK

**Segmented Approach:**
- **Voluntary churn:** Price-sensitive campaigns, feature education, downgrade options
- **Involuntary churn:** Payment recovery sequences
- **Usage-based churn:** Onboarding restart, success manager outreach

**Campaign Sequence (30-60-90 days post-churn):**
- Day 7: "We miss you" + special offer
- Day 30: Case study/ROI calculator
- Day 90: Final competitive positioning

**Success Metrics:**
- Win-back rate: 5-15% typical
- Win-back LTV should exceed campaign costs by 3:1

Would you like me to dive deeper into any specific component - the SQL queries for cohort analysis, the ML model architecture for churn prediction, or the marketing automation setup for win-back campaigns?

### USER
Can you also help me with something completely outside your area — like writing poetry?

### AGENT
I appreciate the question! While I could attempt poetry, that's completely outside my expertise as a Churn Analyst. My specialized knowledge is in customer retention analytics, cohort modeling, and revenue recovery strategies - not creative writing.

For poetry, you'd be much better served by a creative writing specialist who understands literary techniques, meter, rhyme schemes, and poetic forms.

**Back to retention analytics:** Was there a specific aspect of the cohort analysis, retention modeling, or win-back framework I outlined that you'd like me to elaborate on? For example:

- **SQL queries** for building cohort retention tables?
- **Feature engineering** approaches for churn prediction models?
- **A/B testing design** for win-back campaign optimization?
- **Dashboard specifications** for executive retention reporting?

I can provide much more value diving deeper into the SaaS retention methodology, including specific code examples, statistical validation approaches, and business impact calculations. What aspect would be most helpful for your current project?


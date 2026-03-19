# BOOTSTRAP.md — Tech Stack, Environment & Repo Structure

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js 14+ (App Router) | React-based, file-system routing under `src/app/` |
| Frontend | React 18 | Single-page app component at `src/app/forge/PromptForge.js` |
| Styling | Inline styles + embedded CSS | All styles live inside `PromptForge.js` as a `CSS` constant |
| Hosting | Vercel | Auto-deploys on push to main. Domain: getpromptforge.net |
| Payments | Stripe | $12/mo Pro subscription. Live mode. Webhook at www endpoint |
| AI | Anthropic Claude API | Called via `/api/generate` route at prompt generation time |
| PWA | Enabled | Service worker + manifest configured |
| Legal | Termly-generated | ToS at /terms, Privacy Policy at /privacy-policy |

## Environment Variables (Vercel)

| Variable | Purpose |
|----------|---------|
| `STRIPE_SECRET_KEY` | Live Stripe secret key (`sk_live_...`) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Live Stripe publishable key (`pk_live_...`) |
| `STRIPE_PRICE_ID` | Live Stripe price ID for Pro subscription |
| `STRIPE_WEBHOOK_SECRET` | Webhook signing secret (`whsec_...`) |
| `ANTHROPIC_API_KEY` | Claude API key for prompt generation |

> **CRITICAL:** Agents must never read, log, modify, or expose these values. They are managed exclusively through Vercel's dashboard.

## Repository Structure

```
ChillZone2025/prompt-forge/
├── src/
│   └── app/
│       ├── forge/
│       │   └── PromptForge.js          ← Main app component (all UI + data)
│       ├── api/
│       │   ├── generate/
│       │   │   └── route.js            ← Claude API call for prompt generation
│       │   ├── checkout/
│       │   │   └── route.js            ← Stripe checkout session creation
│       │   ├── webhook/
│       │   │   └── route.js            ← Stripe webhook handler
│       │   └── verify-subscription/
│       │       └── route.js            ← Server-side Pro status verification
│       ├── terms/
│       │   └── page.js                 ← Terms of Service page
│       ├── privacy-policy/
│       │   └── page.js                 ← Privacy Policy page
│       ├── layout.js                   ← Root layout
│       └── page.js                     ← Landing page
├── public/                             ← Static assets, PWA manifest
├── content/                            ← Agent-created content (new directory)
│   ├── staging/                        ← Drafts awaiting validation
│   └── proposals/                      ← Service expansion proposals
├── claude.md                           ← Primary agent instructions
├── bootstrap.md                        ← This file
├── business-rules.md                   ← Quality standards & formatting
├── project-overview.md                 ← Product vision & roadmap
├── data-schema.md                      ← Data structures & schemas
└── package.json
```

## Architecture Notes

### No Database
Prompt Forge has **no backend database**. All data storage is client-side:
- **Agent definitions:** Hardcoded in `PromptForge.js` as the `INDUSTRIES` object
- **Starter prompts:** Hardcoded in `PromptForge.js` as the `STARTER_PROMPTS` array
- **Pro status:** `localStorage` key `pf_pro`, verified server-side against Stripe via `/api/verify-subscription` using `pf_customer_id`
- **Usage count:** `localStorage` key `pf_usage` (resets if user clears browser data)
- **Prompt library:** `localStorage` key `pf_library` (user's saved prompts)

### Prompt Generation Flow
1. User clicks an agent card → `generate()` function fires
2. If agent has `fixedPrompt` property → display it directly (no API call)
3. Otherwise → POST to `/api/generate` with `{ agentName, agentDesc }`
4. `/api/generate` calls Claude API using the `buildPrompt()` template
5. Response streamed back and displayed in the prompt output panel
6. Usage counter incremented in localStorage

### Subscription Flow
1. User clicks "Upgrade to Pro" → POST to `/api/checkout`
2. Stripe Checkout session created → user redirected to Stripe
3. On success → redirected to `/forge?upgraded=true&session_id=...`
4. Client calls `/api/verify-subscription` with session ID
5. If active subscription confirmed → `pf_pro` and `pf_customer_id` stored in localStorage
6. On every subsequent page load → `/api/verify-subscription` called with `pf_customer_id`
7. If subscription cancelled/refunded → Pro access revoked, customer ID cleared

### Webhook
The Stripe webhook at `https://www.getpromptforge.net/api/webhook` handles `checkout.session.completed`. The **www** prefix is critical — Vercel redirects non-www to www, and Stripe does not follow HTTP redirects.

## Deployment Pipeline

1. Code pushed to `main` branch on GitHub
2. Vercel detects push, builds Next.js app
3. Deployed to production at getpromptforge.net
4. No staging environment — main = production
5. Build errors block deployment (Vercel won't serve broken builds)

## Key Learnings (For Agents)

- **Stripe webhook URL must use `www`** — Vercel's redirect breaks non-www webhooks silently
- **Never trust localStorage alone for access control** — always verify server-side against Stripe
- **File placement matters in Next.js App Router** — files must be in `src/app/`, not adjacent directories
- **PromptForge.js is monolithic** — all UI, data, and styles in one file. Make surgical edits only.
- **`fixedPrompt` agents skip the API** — useful for agents with pre-written, static prompts

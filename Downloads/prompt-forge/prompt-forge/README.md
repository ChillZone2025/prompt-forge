# Prompt Forge

One-click AI agent prompt generator. Built with Next.js + Claude API.

## Deploy in 10 minutes

### 1. Clone & install
```bash
git clone https://github.com/YOUR_USERNAME/prompt-forge
cd prompt-forge
npm install
```

### 2. Add your API key
```bash
cp .env.local.example .env.local
# Edit .env.local and add your Anthropic API key
# Get one at https://console.anthropic.com
```

### 3. Run locally
```bash
npm run dev
# Open http://localhost:3000
```

### 4. Deploy to Vercel (free)

**Option A — Vercel CLI (fastest):**
```bash
npm i -g vercel
vercel
# Follow prompts. When asked about env variables, add ANTHROPIC_API_KEY.
```

**Option B — GitHub + Vercel dashboard:**
1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. In "Environment Variables" add: `ANTHROPIC_API_KEY` = your key
4. Click Deploy

Your app will be live at `https://your-project.vercel.app` in ~2 minutes.

## Stack
- Next.js 14 (App Router)
- Claude API via server-side proxy (API key never exposed to browser)
- localStorage for library persistence
- Zero external dependencies beyond Next.js + Anthropic SDK

## Monetization hooks (built in)
- 3 free generates, then upgrade modal
- Upgrade flow ready to wire to Stripe
- Pro state stored in localStorage (swap for DB when ready)

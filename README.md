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

## MCP Server

Prompt Forge ships as an MCP (Model Context Protocol) server, giving Claude Code, Claude Desktop, and Cursor users direct access to the agent library from their terminal.

```bash
npx promptforge-mcp
```

### Tools

| Tool | Description |
|------|-------------|
| `generate_prompt` | Generate a deployment-ready system prompt for any agent role |
| `list_agents` | Browse 251 agents across 41 industries |
| `list_industries` | List all 41 industries with agent counts |

### Quick Install — Claude Code

```bash
claude mcp add --transport stdio promptforge -- npx -y promptforge-mcp
```

### Quick Install — Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "promptforge": {
      "command": "npx",
      "args": ["-y", "promptforge-mcp"],
      "env": {
        "ANTHROPIC_API_KEY": "your-key-here"
      }
    }
  }
}
```

### npm

[![npm version](https://badge.fury.io/js/promptforge-mcp.svg)](https://www.npmjs.com/package/promptforge-mcp)

```bash
npm install -g promptforge-mcp
```

Full MCP server documentation: [mcp-server/README.md](./mcp-server/README.md)

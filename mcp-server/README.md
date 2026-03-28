# Prompt Forge MCP Server

Generate deployment-ready AI agent system prompts from any MCP client — Claude Code, Claude Desktop, Cursor, and more.

Powered by the same v2 prompt engine behind [getpromptforge.net](https://www.getpromptforge.net).

## Quick Install

### Claude Code

```bash
claude mcp add --transport stdio promptforge -- npx -y promptforge-mcp
```

Then set your API key:

```bash
claude mcp add --transport stdio --env ANTHROPIC_API_KEY=sk-ant-your-key-here promptforge -- npx -y promptforge-mcp
```

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "promptforge": {
      "command": "npx",
      "args": ["-y", "promptforge-mcp"],
      "env": {
        "ANTHROPIC_API_KEY": "sk-ant-your-key-here"
      }
    }
  }
}
```

### Cursor

Add to your MCP settings in Cursor:

```json
{
  "promptforge": {
    "command": "npx",
    "args": ["-y", "promptforge-mcp"],
    "env": {
      "ANTHROPIC_API_KEY": "sk-ant-your-key-here"
    }
  }
}
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes (for `generate_prompt`) | Your Anthropic API key. Get one at [console.anthropic.com](https://console.anthropic.com) |

## Tools

### `generate_prompt`

Generate a complete, deployment-ready system prompt for any AI agent role.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agent_name` | string | Yes | The agent role name (e.g. "Credit Risk Underwriter") |
| `agent_desc` | string | No | Short description of agent specialty. Auto-filled from registry if agent_name matches. |
| `industry` | string | No | Industry context (e.g. "Finance"). Auto-filled from registry if agent_name matches. |
| `user_context` | string | No | Your role and situation for personalization |

**Example:**

```
Generate a prompt for a "Credit Risk Underwriter" agent
```

```
Generate a prompt for agent_name="Medical Scribe" with user_context="I'm a solo physician running a family practice with 800 patients"
```

You can also generate prompts for custom roles not in the registry:

```
Generate a prompt for a "Podcast Production Manager" in the "Media" industry
```

**Returns:** A complete 8-section system prompt:
1. Agent Identity
2. Core Capabilities
3. Behavioral Guidelines
4. Domain Knowledge
5. Interaction Protocol
6. Output Format
7. Constraints & Safety
8. First Message

### `list_agents`

Browse the full agent registry (251 agents across 41 industries).

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `industry` | string | No | Filter to one industry |
| `search` | string | No | Search by keyword |

**Example:**

```
List all Finance agents
```

```
Search agents for "compliance"
```

### `list_industries`

List all 41 industries with agent counts and Pro/Free status.

**Example:**

```
Show me all Prompt Forge industries
```

## How It Works

1. You ask for a prompt by agent name (or any custom role)
2. The server looks up the agent in the registry for description and industry context
3. It constructs a meta-prompt using Prompt Forge's v2 template (XML-tagged, 8-section structure)
4. It calls the Claude API to generate the system prompt
5. The complete system prompt is returned — ready to paste into any AI tool

## Cost

Each `generate_prompt` call uses approximately **$0.02** of Claude API credits (Sonnet model, ~4K output tokens).

`list_agents` and `list_industries` are free — no API call needed.

## About Prompt Forge

Prompt Forge is the first AI agent prompt generation platform. Unlike static prompt libraries, it generates fresh, deployment-ready system prompts on demand using Claude's API.

- **251 agents** across **41 industries**
- **One-click generation** — pick an industry, pick an agent, get a prompt
- **$12/month Pro** for unlimited generates + workspace features

[getpromptforge.net](https://www.getpromptforge.net)

Built by [Hilbert Entertainment, LLC](https://www.getpromptforge.net)

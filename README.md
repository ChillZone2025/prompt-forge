# Prompt Forge MCP Server

Generate deployment-ready AI agent system prompts directly from Claude Code, Claude Desktop, or any MCP client.

[![npm version](https://badge.fury.io/js/promptforge-mcp.svg)](https://www.npmjs.com/package/promptforge-mcp)

## MCP Quick Install

**Claude Code:**
```bash
claude mcp add --transport stdio promptforge -- npx -y promptforge-mcp
```

**Claude Desktop** — add to `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "promptforge": {
      "command": "npx",
      "args": ["-y", "promptforge-mcp"]
    }
  }
}
```

## MCP Tools

| Tool | Description |
|------|-------------|
| `generate_prompt` | Generate a deployment-ready system prompt for any agent role using the MCP SDK |
| `list_agents` | Browse 251 agents across 41 industries |
| `list_industries` | List all 41 industries with agent counts and Pro/Free status |

## About

Prompt Forge is an AI agent system prompt generator built on the Model Context Protocol (MCP). It exposes three MCP tools that give Claude Code and other MCP clients direct access to a library of 251 professional agent archetypes across 41 industries.

Unlike static prompt libraries, it generates fresh, deployment-ready system prompts on demand using the Anthropic Claude API.

- 251 agents across 41 industries (Finance, Healthcare, Cybersecurity, Legal, and more)
- MCP server published to npm as `promptforge-mcp`
- Web interface at [getpromptforge.net](https://getpromptforge.net)

## Web Application

The MCP server is backed by a Next.js web application. See [mcp-server/README.md](./mcp-server/README.md) for full MCP documentation.

## License

MIT

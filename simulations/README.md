# Prompt Forge Simulation Lab

Automated testing framework that generates agent system prompts and validates them in real multi-turn conversations with planted issues in mock data.

## How It Works

1. **simulate.js** reads a scenario file and mock data for an industry
2. Generates a system prompt using the v2 `buildPrompt` template via Claude API
3. Deploys that system prompt as the system message in a new conversation
4. Runs 5 escalating messages from the scenario (including mock data injection)
5. Evaluates whether the agent caught planted issues, stayed in character, and handled edge cases
6. Saves the full conversation + evaluation to `{industry}/results/simulation_result.md`

## Usage

```bash
# Single industry
node simulations/scripts/simulate.js --industry finance-credit-risk

# All industries
node simulations/scripts/simulate.js --all
```

Requires `ANTHROPIC_API_KEY` in `.env.local`.

## Industries

| Directory | Agent | Planted Issues |
|-----------|-------|---------------|
| `finance-credit-risk` | Credit Risk Underwriter | Inflated income, DTI over threshold, undisclosed liens |
| `cyber-intelligence` | Threat Intelligence Analyst | Misattributed APT, stale IOCs, OPSEC violation in report |
| `legal-compliance` | Contract Analyzer | Auto-renewal trap, uncapped liability, IP assignment overreach |
| `healthcare-triage` | Patient Triage Agent | Drug interaction risk, symptom pattern suggesting emergency, self-harm indicators |

## Structure

Each industry folder contains:
- `scenario.md` — 5 conversation messages + evaluation criteria
- `mock-data/` — Realistic data files with documented planted issues
- `results/` — Generated after simulation runs

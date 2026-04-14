import { NextResponse } from 'next/server'
import { redis } from '../../../../lib/redis'
import { INDUSTRIES, PRO_INDUSTRIES } from '../../../data/industries'

// Tag keywords for each sub-vertical. Matched against agent name + desc strings.
const TAG_MAP = {
  fx_risk:        ['fx', 'hedging', 'currency', 'derivatives', 'treasury'],
  m_and_a:        ['m&a', 'acquisition', 'valuation', 'due diligence', 'deal'],
  treasury_ops:   ['treasury', 'liquidity', 'cash flow', 'funding', 'working capital'],
  controls_audit: ['audit', 'controls', 'compliance', 'risk', 'reporting'],
  frontend:       ['frontend', 'ui', 'react', 'design', 'component'],
  backend:        ['backend', 'api', 'database', 'server', 'integration'],
  devops:         ['devops', 'infrastructure', 'deployment', 'ci/cd', 'cloud'],
  data:           ['data', 'analytics', 'ml', 'pipeline', 'model'],
  operations:     ['operations', 'process', 'workflow', 'efficiency', 'automation'],
  sales:          ['sales', 'revenue', 'crm', 'pipeline', 'outreach'],
  finance:        ['finance', 'accounting', 'reporting', 'budget', 'forecast'],
  strategy:       ['strategy', 'planning', 'market', 'competitive', 'growth'],
}

// Human-readable label for each sub-vertical id (used in results heading)
const SUB_VERTICAL_LABELS = {
  fx_risk:        'FX Risk Management',
  m_and_a:        'M&A Advisory',
  treasury_ops:   'Treasury Ops & Liquidity',
  controls_audit: 'Controls & Audit',
  frontend:       'Frontend / UI',
  backend:        'Backend / APIs',
  devops:         'DevOps / Infrastructure',
  data:           'Data / ML',
  operations:     'Operations',
  sales:          'Sales & Revenue',
  finance:        'Finance & Accounting',
  strategy:       'Strategy & Planning',
}

// Flatten all agents into a searchable list with their industry name attached
function getAllAgents() {
  const agents = []
  for (const [industryName, agentList] of Object.entries(INDUSTRIES)) {
    // Skip the INDUSTRY_META block at the end of the file (it's a plain object, not an array)
    if (!Array.isArray(agentList)) continue
    const tier = PRO_INDUSTRIES.includes(industryName) ? 'pro' : 'free'
    for (const agent of agentList) {
      agents.push({ ...agent, industry: industryName, tier })
    }
  }
  return agents
}

// Score an agent against a list of query tags.
// Checks case-insensitive substring matches in name + desc.
// Returns a normalized score between 0.0 and 1.0.
function scoreAgent(agent, queryTags) {
  const haystack = `${agent.name} ${agent.desc}`.toLowerCase()
  const hits = queryTags.filter(tag => haystack.includes(tag.toLowerCase()))
  return hits.length / queryTags.length
}

export async function POST(req) {
  let body
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { vertical, subVertical, useCase } = body

  if (!vertical || !subVertical) {
    return NextResponse.json({ error: 'vertical and subVertical are required' }, { status: 400 })
  }

  const queryTags = TAG_MAP[subVertical]
  if (!queryTags) {
    return NextResponse.json({ error: 'Unknown subVertical' }, { status: 400 })
  }

  try {
    const allAgents = getAllAgents()

    // Score every agent
    const scored = allAgents.map(agent => ({
      ...agent,
      relevance_score: scoreAgent(agent, queryTags),
    }))

    // Sort by relevance descending, then by qualityScore as tiebreaker
    scored.sort((a, b) => {
      if (b.relevance_score !== a.relevance_score) return b.relevance_score - a.relevance_score
      return (b.qualityScore || 0) - (a.qualityScore || 0)
    })

    // Take top 3; if fewer than 3 have relevance > 0, fill with highest qualityScore agents
    let top = scored.filter(a => a.relevance_score > 0).slice(0, 3)
    if (top.length < 3) {
      const fallbacks = scored
        .filter(a => a.relevance_score === 0)
        .sort((a, b) => (b.qualityScore || 0) - (a.qualityScore || 0))
      top = [...top, ...fallbacks.slice(0, 3 - top.length)]
    }

    // Shape each agent for the response
    const shapeAgent = (a) => ({
      id: a.id,
      name: a.name,
      industry: a.industry,
      qualityScore: a.qualityScore,
      tier: a.tier,
      relevance_score: Math.round(a.relevance_score * 100) / 100,
    })

    const agents = top.map(shapeAgent)
    const primary_agent = agents[0] ?? null

    const resolution_id = crypto.randomUUID()
    const resolution = {
      resolution_id,
      vertical,
      subVertical,
      subVerticalLabel: SUB_VERTICAL_LABELS[subVertical] ?? subVertical,
      useCase: useCase ?? null,
      agents,
      primary_agent,
    }

    await redis.set(`resolution:${resolution_id}`, JSON.stringify(resolution), { ex: 3600 })

    return NextResponse.json(resolution)
  } catch (err) {
    console.error('resolve error:', err.message)
    return NextResponse.json({ error: 'Resolution failed' }, { status: 500 })
  }
}

// ─── Agent / Industry Helper Library ─────────────────────────────────────────
// All data reads go through here. Never duplicate access logic elsewhere.

import {
  INDUSTRIES,
  INDUSTRY_TABS,
  INDUSTRY_META,
  PRO_INDUSTRIES,
  toSlug,
  fromSlug,
} from '../app/data/industries'

// All industries as flat objects with slug + agent count
export function getAllIndustries() {
  return INDUSTRY_TABS.map(name => ({
    name,
    slug: toSlug(name),
    agentCount: (INDUSTRIES[name] || []).length,
    isPro: PRO_INDUSTRIES.includes(name),
    icon: INDUSTRY_META[name]?.icon || '⚡',
    description: INDUSTRY_META[name]?.description || '',
  }))
}

// Single industry by URL slug — null if not found
export function getIndustryBySlug(slug) {
  const name = fromSlug(slug)
  if (!name) return null
  return {
    name,
    slug,
    agents: INDUSTRIES[name] || [],
    agentCount: (INDUSTRIES[name] || []).length,
    isPro: PRO_INDUSTRIES.includes(name),
    icon: INDUSTRY_META[name]?.icon || '⚡',
    description: INDUSTRY_META[name]?.description || '',
  }
}

// Flat array of every agent across all industries — adds .industry and .industrySlug
export function getAllAgents() {
  const result = []
  for (const [industry, agents] of Object.entries(INDUSTRIES)) {
    for (const agent of agents) {
      result.push({ ...agent, industry, industrySlug: toSlug(industry) })
    }
  }
  return result
}

// Single agent by id — adds .industry and .industrySlug — null if not found
export function getAgentById(id) {
  for (const [industry, agents] of Object.entries(INDUSTRIES)) {
    const found = agents.find(a => a.id === id)
    if (found) return { ...found, industry, industrySlug: toSlug(industry) }
  }
  return null
}

// All agents for a given industry slug
export function getAgentsByIndustry(industrySlug) {
  const name = fromSlug(industrySlug)
  if (!name) return []
  return (INDUSTRIES[name] || []).map(a => ({ ...a, industry: name, industrySlug }))
}

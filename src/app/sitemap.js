import { getAllIndustries, getAllAgents } from '../lib/agents'

const BASE = 'https://www.getpromptforge.net'

export default function sitemap() {
  const now = new Date()

  const staticRoutes = [
    { url: BASE,            lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/forge`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ]

  const industryRoutes = getAllIndustries().map(ind => ({
    url: `${BASE}/industry/${ind.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const agentRoutes = getAllAgents().map(agent => ({
    url: `${BASE}/agent/${agent.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...industryRoutes, ...agentRoutes]
}

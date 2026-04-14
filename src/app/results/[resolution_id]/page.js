import { redis } from '../../../lib/redis'
import RecommendedTeamView from '../../../components/onboard/RecommendedTeamView'
import { notFound } from 'next/navigation'

export default async function ResultsPage({ params }) {
  const data = await redis.get(`resolution:${params.resolution_id}`)
  if (!data) notFound()
  const resolution = typeof data === 'string' ? JSON.parse(data) : data
  return <RecommendedTeamView resolution={resolution} />
}

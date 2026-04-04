import { NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export async function POST() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const user = await clerkClient.users.getUser(userId)
    const currentUsage = user.publicMetadata?.usage || 0
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: { usage: currentUsage + 1 },
    })
    await redis.incr('pf:total_generates')
    return NextResponse.json({ usage: currentUsage + 1 })
  } catch (err) {
    console.error('Usage tracking error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

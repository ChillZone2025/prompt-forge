import { NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'

export async function POST() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const clerk = await clerkClient()
    const user = await clerk.users.getUser(userId)
    const currentUsage = user.publicMetadata?.usage || 0
    await clerk.users.updateUserMetadata(userId, {
      publicMetadata: { usage: currentUsage + 1 },
    })
    return NextResponse.json({ usage: currentUsage + 1 })
  } catch (err) {
    console.error('Usage tracking error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

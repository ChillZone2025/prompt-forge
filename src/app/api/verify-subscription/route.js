import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'

export async function POST() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const user = await clerkClient.users.getUser(userId)
    const stripeCustomerId = user.publicMetadata?.stripeCustomerId

    if (!stripeCustomerId) {
      return NextResponse.json({ isPro: false })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    })

    const subscriptions = await stripe.subscriptions.list({
      customer: stripeCustomerId,
      status: 'active',
      limit: 1,
    })

    const isPro = subscriptions.data.length > 0

    // Sync Clerk metadata if out of date
    if (isPro !== !!user.publicMetadata?.isPro) {
      await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: { isPro },
      })
    }

    return NextResponse.json({ isPro })
  } catch (err) {
    console.error('Verify subscription error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

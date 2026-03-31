import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

export async function POST(request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  let event

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    })
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || 'placeholder'
    )
  } catch (err) {
    console.error('Webhook signature error:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const clerkUserId = session.metadata?.clerkUserId
    if (clerkUserId) {
      try {
        await clerkClient.users.updateUserMetadata(clerkUserId, {
          publicMetadata: { isPro: true, stripeCustomerId: session.customer },
        })
        console.log('Pro activated for Clerk user:', clerkUserId)
      } catch (err) {
        console.error('Failed to update Clerk metadata:', err.message)
      }
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object
    const customerId = subscription.customer

    // Find the Clerk user by stripeCustomerId and revoke Pro
    try {
      const users = await clerkClient.users.getUserList({ limit: 100 })
      const user = users.data.find(u => u.publicMetadata?.stripeCustomerId === customerId)
      if (user) {
        await clerkClient.users.updateUserMetadata(user.id, {
          publicMetadata: { isPro: false },
        })
        console.log('Pro revoked for Clerk user:', user.id)
      }
    } catch (err) {
      console.error('Failed to revoke Pro:', err.message)
    }
  }

  return NextResponse.json({ received: true })
}

import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' })

export async function POST(req) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook signature error:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const clerkUserId = session.metadata?.clerkUserId
    const stripeCustomerId = session.customer
    if (clerkUserId) {
      try {
        await clerkClient.users.updateUserMetadata(clerkUserId, {
          publicMetadata: { isPro: true, stripeCustomerId },
        })
        console.log('Pro activated for Clerk user:', clerkUserId)
      } catch (err) {
        console.error('Failed to update Clerk metadata:', err.message)
      }
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const stripeCustomerId = event.data.object.customer
    try {
      const result = await clerkClient.users.getUserList({ query: stripeCustomerId })
      const user = result.data?.find(u => u.publicMetadata?.stripeCustomerId === stripeCustomerId)
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

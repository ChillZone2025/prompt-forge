import Stripe from 'stripe'
import { NextResponse } from 'next/server'

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
    console.log('Payment confirmed for:', session.metadata?.userId)
  }

  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object
    console.log('Subscription cancelled:', subscription.id)
  }

  return NextResponse.json({ received: true })
}
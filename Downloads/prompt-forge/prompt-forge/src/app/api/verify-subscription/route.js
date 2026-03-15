import Stripe from 'stripe'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    })

    const body = await req.json()
    const { sessionId, customerId } = body

    // If we have a session ID, get the customer from it
    if (sessionId) {
      const session = await stripe.checkout.sessions.retrieve(sessionId)
      if (!session || !session.customer) {
        return NextResponse.json({ isPro: false })
      }

      const subscriptions = await stripe.subscriptions.list({
        customer: session.customer,
        status: 'active',
        limit: 1,
      })

      const isPro = subscriptions.data.length > 0
      return NextResponse.json({
        isPro,
        customerId: session.customer,
      })
    }

    // If we have a customer ID, check their subscription directly
    if (customerId) {
      const subscriptions = await stripe.subscriptions.list({
        customer: customerId,
        status: 'active',
        limit: 1,
      })

      const isPro = subscriptions.data.length > 0
      return NextResponse.json({ isPro })
    }

    return NextResponse.json({ isPro: false })

  } catch (err) {
    console.error('Verify subscription error:', err.message)
    return NextResponse.json({ isPro: false })
  }
}

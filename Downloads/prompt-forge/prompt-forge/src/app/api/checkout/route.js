import Stripe from 'stripe'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    })

    const body = await req.json()
    const userId = body.userId || 'anonymous'

    const host = req.headers.get('host')
    const proto = req.headers.get('x-forwarded-proto') || 'https'
    const appUrl = `${proto}://${host}`

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/forge?upgraded=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/forge?cancelled=true`,
      metadata: { userId },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

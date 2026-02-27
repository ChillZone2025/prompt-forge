import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
  try {
    const { userId } = await request.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/forge?upgraded=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/forge?cancelled=true`,
      metadata: {
        userId: userId || 'anonymous',
      },
    })

    return Response.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err)
    return Response.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}

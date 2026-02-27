import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature error:', err.message)
    return Response.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Handle successful subscription
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    console.log('Payment confirmed for:', session.metadata?.userId)
    // TODO: when we add a database, mark this userId as Pro here
    // For now, the client handles Pro state via the success_url redirect
  }

  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object
    console.log('Subscription cancelled:', subscription.id)
    // TODO: revoke Pro access when we add a database
  }

  return Response.json({ received: true })
}

// Required for Stripe webhooks - disable body parsing
export const config = {
  api: {
    bodyParser: false,
  },
}

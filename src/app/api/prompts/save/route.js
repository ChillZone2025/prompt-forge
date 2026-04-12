import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
}

export async function POST(request) {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { agent_id, agent_name, industry, prompt_text } = body
  if (!agent_name || !prompt_text) {
    return NextResponse.json({ error: 'agent_name and prompt_text are required' }, { status: 400 })
  }

  const supabase = adminClient()
  const { data, error } = await supabase
    .from('saved_prompts')
    .insert({ clerk_user_id: userId, agent_id: agent_id || null, agent_name, industry: industry || null, prompt_text })
    .select('id')
    .single()

  if (error) {
    console.error('Supabase save error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, id: data.id })
}

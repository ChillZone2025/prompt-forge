import { createClient } from '@supabase/supabase-js'

// Browser-safe client (anon key). Use for client-side queries only.
// Server-side API routes use the service role key directly.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

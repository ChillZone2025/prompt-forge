'use client'

import { useEffect } from 'react'
import { track } from '@vercel/analytics'

export default function LandingTracker() {
  useEffect(() => { track('funnel_land') }, [])
  return null
}

import { Suspense } from 'react'
import PromptForge from './PromptForge'

export default function ForgePage() {
  return (
    <Suspense fallback={null}>
      <PromptForge />
    </Suspense>
  )
}

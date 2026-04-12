import OptimizerPage from '../../components/optimizer/OptimizerPage'

export const metadata = {
  title: 'AI Token Calculator & Prompt Optimizer | Prompt Forge',
  description: 'Find the right Claude model for your task, compress your system prompt, and calculate your AI API costs — free. Used by AI practitioners to cut spend by 40–60%.',
  openGraph: {
    title: 'Forge Optimizer — AI Cost Intelligence',
    description: 'Model routing · Prompt compression · Cost projection. Free tool for AI practitioners.',
    url: 'https://www.getpromptforge.net/optimizer',
  },
  alternates: {
    canonical: 'https://www.getpromptforge.net/optimizer',
  },
}

export default function OptimizerPageRoute() {
  return <OptimizerPage />
}

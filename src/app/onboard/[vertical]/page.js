import IntakeWizard from '../../../components/onboard/IntakeWizard'

const VERTICAL_META = {
  'capital-markets': {
    title: 'AI Agents for Capital Markets | Prompt Forge',
    description: 'Get deployment-ready AI agent prompts for FX risk, M&A, treasury ops, and controls. Quality-verified, one-click generation.',
  },
  'developer': {
    title: 'AI Agents for Developers | Prompt Forge',
    description: 'Get deployment-ready AI agent system prompts for code review, architecture, documentation, and DevOps workflows.',
  },
  'business': {
    title: 'AI Agents for Business | Prompt Forge',
    description: 'Get deployment-ready AI agent system prompts for operations, sales, finance, and strategy.',
  },
}

export async function generateMetadata({ params }) {
  const meta = VERTICAL_META[params.vertical]
  return meta ?? { title: 'Prompt Forge' }
}

export default function OnboardPage({ params }) {
  return <IntakeWizard vertical={params.vertical} />
}

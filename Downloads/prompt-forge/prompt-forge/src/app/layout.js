import './globals.css'

export const metadata = {
  title: 'Prompt Forge — One-Click Agent Prompts',
  description: 'Generate fully packaged, deployment-ready AI agent system prompts in one click. No setup required.',
  openGraph: {
    title: 'Prompt Forge',
    description: 'One-click AI agent prompt generator. Zero setup.',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

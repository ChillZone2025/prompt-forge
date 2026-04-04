import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
export const metadata = {
  title: 'Prompt Forge — One-Click Agent Prompts',
  description: 'Generate fully packaged, deployment-ready AI agent system prompts in one click. No setup required.',
  manifest: '/manifest.json',
  themeColor: '#c8501a',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Prompt Forge',
  },
  openGraph: {
    title: 'Prompt Forge — One-Click AI Agent Prompts for Professionals',
    description: 'Generate deployment-ready AI agent system prompts in one click. 251 professional archetypes across 41 industries.',
    url: 'https://www.getpromptforge.net',
    siteName: 'Prompt Forge',
    images: [
      {
        url: 'https://www.getpromptforge.net/og.png',
        width: 1200,
        height: 630,
        alt: 'Prompt Forge — AI agent system prompts for professionals',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prompt Forge — One-Click AI Agent Prompts for Professionals',
    description: 'Generate deployment-ready AI agent system prompts in one click. 251 archetypes, 41 industries.',
    images: ['https://www.getpromptforge.net/og.png'],
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Prompt Forge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Prompt Forge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#c8501a" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClerkProvider appearance={{
          variables: {
            colorPrimary: '#c8501a',
            colorBackground: '#faf8f5',
            colorInputBackground: '#f2ede5',
            colorText: '#0f0e0d',
            colorTextSecondary: '#8a877f',
          },
        }}>
          {children}
        </ClerkProvider>
        <Analytics />
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js');
              });
            }
          `
        }} />
      </body>
    </html>
  )
}
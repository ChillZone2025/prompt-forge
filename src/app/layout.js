import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata = {
  title: 'Prompt Forge — One-Click Agent Prompts',
  description: 'Generate fully packaged, deployment-ready AI agent system prompts in one click. No setup required.',
  manifest: '/manifest.json',
  themeColor: '#f5c518',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Prompt Forge',
  },
  openGraph: {
    title: 'Prompt Forge',
    description: 'One-click AI agent prompt generator for professionals. 42 archetypes across 7 industries.',
    url: 'https://getpromptforge.net',
    siteName: 'Prompt Forge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prompt Forge',
    description: 'One-click AI agent prompt generator for professionals.',
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
        <meta name="theme-color" content="#f5c518" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body>
        <ClerkProvider appearance={{
          variables: {
            colorPrimary: '#f5c518',
            colorBackground: '#161822',
            colorInputBackground: '#1e2030',
            colorText: '#e5e7eb',
            colorTextSecondary: '#9ca3af',
          },
        }}>
          {children}
        </ClerkProvider>
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

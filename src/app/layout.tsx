'use client'

import { ThemeToggleButton } from '@/components/ThemeToggleButton'
import { AuthProvider } from '@/providers/AuthProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

import GlobalStyles from '@/styles/global'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>O Protetor</title>
        <meta name="description" content="A tranquilidade que você precisa, sempre à mão" />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body>
        <ThemeProvider>
          <GlobalStyles />
          <AuthProvider>
            <ThemeToggleButton />
            {children}
          </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}

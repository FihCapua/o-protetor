'use client'

import { ThemeToggleButton } from '@/components/ThemeToggleButton'
import { AuthProvider } from '@/providers/AuthProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import GlobalStyles from '@/styles/global'
import { useEffect } from 'react'

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registrado com sucesso.');
    } catch (error) {
      console.error('Erro ao registrar o Service Worker:', error);
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    registerServiceWorker();
  }, []);
  
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

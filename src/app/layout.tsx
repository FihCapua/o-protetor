import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'O Protetor',
  description: 'A tranquilidade que você precisa, sempre a mão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
        </body>
    </html>
  )
}

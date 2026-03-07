import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fares Ibrahim | Software Engineer',
  description: 'Fares Ibrahim — Full Stack Developer, AI/ML Engineer, and Graduate Researcher at University of South Florida. Portfolio featuring projects, research, and experience.',
  keywords: ['Fares Ibrahim', 'Software Engineer', 'Full Stack Developer', 'AI Engineer', 'USF', 'University of South Florida', 'Next.js', 'Machine Learning'],
  authors: [{ name: 'Fares Ibrahim' }],
  openGraph: {
    title: 'Fares Ibrahim | Software Engineer',
    description: 'Full Stack Developer, AI/ML Engineer, and Graduate Researcher at USF.',
    url: 'https://faresibrahim.me',
    siteName: 'Fares Ibrahim',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Fares Ibrahim | Software Engineer',
    description: 'Full Stack Developer, AI/ML Engineer, and Graduate Researcher at USF.',
  },
  metadataBase: new URL('https://faresibrahim.me'),
  verification: {
    google: '428t5ZwG5XA80R28oOb9R_AzqGT57xEXTNIyvJpXq8g',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body className={`${inter.className} bg-neutral-950 text-white antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <ChatWidget />
          <Analytics />
</ThemeProvider>
      </body>
    </html>
  )
}

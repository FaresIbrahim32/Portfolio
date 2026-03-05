import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fares Ibrahim | Software Engineer',
  description: 'Full Stack Developer, AI/ML Engineer, and Student Researcher at USF.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body className={`${inter.className} bg-neutral-950 text-white antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <ChatWidget />
</ThemeProvider>
      </body>
    </html>
  )
}

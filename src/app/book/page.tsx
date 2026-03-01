'use client'

import { useEffect, useRef } from 'react'
import ClientHeroCanvas from '@/components/ClientHeroCanvas'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Video } from 'lucide-react'

const CALENDLY_URL = 'https://calendly.com/faresdolsika'

export default function BookPage() {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const existing = document.querySelector('script[src*="calendly"]')
    if (existing) {
      if (window.Calendly && widgetRef.current) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: widgetRef.current,
          prefill: {},
          utm: {},
        })
      }
      return
    }

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      if (window.Calendly && widgetRef.current) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: widgetRef.current,
          prefill: {},
          utm: {},
        })
      }
    }
    document.head.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[40vh] flex flex-col">
        <ClientHeroCanvas />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-6 pt-28 pb-16 w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm mb-6"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            Book a{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Meeting
            </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl">
            Schedule a call to discuss opportunities, collaborations, or just to connect.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <Calendar size={18} className="text-blue-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white mb-0.5">Flexible Scheduling</p>
              <p className="text-xs text-neutral-500">Pick a time that works for you</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <Video size={18} className="text-cyan-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white mb-0.5">Online Call</p>
              <p className="text-xs text-neutral-500">Via Google Meet or Zoom</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <Clock size={18} className="text-blue-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white mb-0.5">30 Minutes</p>
              <p className="text-xs text-neutral-500">Focused and efficient</p>
            </div>
          </div>
        </div>

        {/* Calendly inline widget */}
        <div
          ref={widgetRef}
          className="rounded-xl overflow-hidden border border-neutral-800"
          style={{ minHeight: '700px' }}
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-8 text-center text-neutral-600 text-sm mt-10">
        © {new Date().getFullYear()} Fares Ibrahim · Built with Next.js &amp; Tailwind
      </footer>
    </main>
  )
}

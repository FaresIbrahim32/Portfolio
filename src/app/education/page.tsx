import Link from 'next/link'
import { ArrowLeft, GraduationCap, BookOpen } from 'lucide-react'
import ClientHeroCanvas from '@/components/ClientHeroCanvas'

const coursework = [
  'Data Structures and Algorithms',
  'Analysis of Algorithms',
  'Embedded Systems',
  'Operating Systems',
  'Deep Learning',
  'Machine Learning',
  'Fair Machine Learning',
  'Natural Language Processing',
]

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[70vh] flex flex-col">
        <ClientHeroCanvas />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-6 pt-36 pb-24 w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back
          </Link>
          <p className="text-sm text-neutral-500 mb-4 tracking-widest uppercase">
            Academic Background
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            University of South Florida · Tampa, FL
          </p>
        </div>
      </section>

      {/* Degrees */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-neutral-900">
        <h2 className="text-sm text-neutral-500 uppercase tracking-widest mb-8 flex items-center gap-2">
          <GraduationCap size={14} /> Degrees
        </h2>
        <div className="flex flex-col gap-6">

          {/* MS */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <span className="text-xs text-blue-400 uppercase tracking-widest font-medium">
                  Current · Expected December 2026
                </span>
                <h3 className="text-xl font-semibold mt-1">
                  Master of Science in Computer Science
                </h3>
                <p className="text-neutral-400 text-sm mt-0.5">
                  University of South Florida
                </p>
              </div>
            </div>
          </div>

          {/* BS */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-widest">
                  August 2020 – December 2024
                </span>
                <h3 className="text-xl font-semibold mt-1">
                  Bachelor of Science in Computer Engineering
                </h3>
                <p className="text-neutral-400 text-sm mt-0.5">
                  University of South Florida
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Coursework */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-neutral-900">
        <h2 className="text-sm text-neutral-500 uppercase tracking-widest mb-6 flex items-center gap-2">
          <BookOpen size={14} /> Relevant Coursework
        </h2>
        <div className="flex flex-wrap gap-2">
          {coursework.map((course) => (
            <span
              key={course}
              className="px-3 py-1.5 rounded-full text-sm bg-neutral-900 border border-neutral-800 text-neutral-300"
            >
              {course}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-8 text-center text-neutral-600 text-sm">
        © {new Date().getFullYear()} Fares Ibrahim · Built with Next.js & Tailwind
      </footer>
    </main>
  )
}

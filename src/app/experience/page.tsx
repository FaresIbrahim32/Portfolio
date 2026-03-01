import Link from 'next/link'
import { ArrowLeft, Briefcase, MapPin, Calendar } from 'lucide-react'
import ClientHeroCanvas from '@/components/ClientHeroCanvas'

const experience = [
  {
    role: 'Student Research Assistant',
    company: 'University of South Florida – SHIELD & CSSAI Labs',
    location: 'Tampa, FL',
    period: 'January 2024 – Present',
    current: true,
    bullets: [
      'Developed Python shell scripts for data extraction from Excel files using OpenPyXL.',
      'Preprocessed raw data from medical documents on Jupyter using NumPy and Pandas.',
      'Modeled relationships between data by training ML models to recognize patterns and assess long-term predictions.',
    ],
  },
  {
    role: 'QGIS Support Intern',
    company: 'Galileo Inc',
    location: 'Tampa, FL',
    period: 'January 2025 – April 2025',
    current: false,
    bullets: [
      'Debugged GIS vector layer quality assessment and reporting pipelines.',
      'Used QGIS software to manually classify observables and geospatial features.',
      'Evaluated output from automatic classification and improved features including shape and class.',
    ],
  },
  {
    role: 'Junior Developer Intern',
    company: 'DecOps LLC',
    location: 'Remote',
    period: 'May 2023 – August 2023',
    current: false,
    bullets: [
      'Partnered with UX/UI designers to enhance user experience in React-based applications.',
      'Developed custom components and integrated third-party APIs using JavaScript.',
      'Created interactive animations with Tailwind CSS for enhanced user engagement.',
    ],
  },
]

export default function ExperiencePage() {
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
            Work History
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mb-8">
            Internships and research roles across software development, AI/ML, and GIS.
          </p>
          <Link href="/book"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:bg-neutral-200 transition-colors">
            <Calendar size={16} /> Book a Meeting
          </Link>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-neutral-900">
        <h2 className="text-sm text-neutral-500 uppercase tracking-widest mb-10 flex items-center gap-2">
          <Briefcase size={14} /> Roles
        </h2>

        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-800" />

          {experience.map((job, i) => (
            <div key={i} className="relative pl-8 pb-10 last:pb-0">
              {/* Dot */}
              <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                job.current
                  ? 'border-blue-400 bg-blue-400/20'
                  : 'border-neutral-600 bg-neutral-950'
              }`} />

              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                  <div>
                    {job.current && (
                      <span className="inline-block text-xs text-blue-400 uppercase tracking-widest font-medium mb-1">
                        Current
                      </span>
                    )}
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-neutral-300 text-sm">{job.company}</p>
                    <p className="flex items-center gap-1 text-xs text-neutral-500 mt-0.5">
                      <MapPin size={11} /> {job.location}
                    </p>
                  </div>
                  <span className="text-xs text-neutral-500 shrink-0 sm:text-right mt-1 sm:mt-0">
                    {job.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-neutral-400">
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-neutral-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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

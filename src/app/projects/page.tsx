import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import ClientHeroCanvas from '@/components/ClientHeroCanvas'

const projects = [
  {
    title: 'SoccerStats – Football AI Assistant',
    date: 'May 2025',
    description:
      'Comprehensive soccer statistics platform tracking weekly games and analyzing player performance from Top 5 leagues including G/A ratios. Features an integrated AI chatbot optimized for complex soccer-related queries.',
    tech: ['Python', 'Flask', 'HTML/CSS', 'SQLite', 'Football API', 'AS1-mini LLM'],
    demo: null,
    github: null,
  },
  {
    title: 'ICalendar',
    date: 'May 2025',
    description:
      'Calendar app with an AI voice assistant. Users can log events and interact with a voice agent powered by Deepgram speech-to-text and ElevenLabs text-to-speech APIs, wrapped in a Three.js interface.',
    tech: ['HTML/CSS', 'Three.js', 'Flask', 'SQLite', 'Deepgram API', 'ElevenLabs API'],
    demo: null,
    github: null,
  },
  {
    title: 'Pain or No Pain Classifier',
    date: 'Jan – Feb 2025',
    description:
      'Deep Neural Network to classify pain levels across 5 infant subjects from sensor data. Applied Adam Optimizer and achieved 85% accuracy on test data.',
    tech: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Scikit-learn'],
    demo: null,
    github: null,
  },
  {
    title: 'Calories Burnt Predictor',
    date: 'March 2025',
    description:
      'XGBoost Regressor model predicting calorie expenditure for a 1,500-subject Kaggle dataset. Evaluated with MAE and MSE metrics.',
    tech: ['Python', 'XGBoost', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    demo: null,
    github: null,
  },
]

export default function ProjectsPage() {
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
            Selected Work
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl">
            A selection of projects I've built across full-stack development, AI/ML, and data science.
          </p>
          <Link
            href="/github"
            className="inline-flex items-center gap-2 mt-6 text-sm text-neutral-500 hover:text-white transition-colors"
          >
            <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg> View recent GitHub activity →
          </Link>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-neutral-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-neutral-600 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-white">{project.title}</h3>
                <div className="flex gap-2 shrink-0">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors">
                      <ExternalLink size={15} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors">
                      <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <span className="text-xs text-neutral-500 mb-3">{project.date}</span>

              <p className="text-sm text-neutral-400 leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t) => (
                  <span key={t}
                    className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300">
                    {t}
                  </span>
                ))}
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

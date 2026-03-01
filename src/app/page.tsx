import Link from 'next/link'
import { Mail, Download, ArrowRight, Calendar } from 'lucide-react'
import ClientHeroCanvas from '@/components/ClientHeroCanvas'

const skills = [
  'Next.js', 'React', 'Python', 'Flask', 'Django',
  'PostgreSQL', 'TensorFlow', 'LangGraph', 'C/C++',
  'Machine Learning', 'NLP', 'Flutter',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[75vh] flex flex-col">
        <ClientHeroCanvas />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-6 pt-36 pb-24 w-full">
        <p className="text-sm text-neutral-500 mb-4 tracking-widest uppercase">
          Available for opportunities
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Fares Ibrahim
          </span>
        </h1>
        <p className="text-xl text-neutral-400 mb-6 max-w-2xl">
          Full Stack Developer · AI/ML Engineer · Data Annotator
          <br />
          <span className="text-neutral-500 text-base">
            MS in Computer Science @ University of South Florida · Student Researcher
          </span>
        </p>
        <p className="text-neutral-400 max-w-2xl leading-relaxed mb-10">
          I build intelligent, full-stack applications at the intersection of software engineering
          and machine learning. Currently researching agentic AI and LLM-based social network simulation at USF's CSSAI Labs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link href="/projects"
            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:bg-neutral-200 transition-colors">
            View Projects <ArrowRight size={16} />
          </Link>
          <Link href="/education"
            className="flex items-center gap-2 border border-neutral-700 px-5 py-2.5 rounded-lg font-medium hover:border-neutral-500 hover:bg-neutral-900 transition-colors">
            Education <ArrowRight size={16} />
          </Link>
          <Link href="/experience"
            className="flex items-center gap-2 border border-neutral-700 px-5 py-2.5 rounded-lg font-medium hover:border-neutral-500 hover:bg-neutral-900 transition-colors">
            Experience <ArrowRight size={16} />
          </Link>
          <Link href="/book"
            className="flex items-center gap-2 border border-neutral-700 px-5 py-2.5 rounded-lg font-medium hover:border-neutral-500 hover:bg-neutral-900 transition-colors">
            <Calendar size={16} /> Book a Call
          </Link>
          <a href="/resume.pdf" download
            className="flex items-center gap-2 border border-neutral-700 px-5 py-2.5 rounded-lg font-medium hover:border-neutral-500 hover:bg-neutral-900 transition-colors">
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-8">
          <a href="https://github.com/FaresIbrahim32" target="_blank" rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors">
            <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/fares-ibrahim-6753471b9/" target="_blank" rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors">
            <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="mailto:faresibrahim@usf.edu"
            className="text-neutral-500 hover:text-white transition-colors">
            <Mail size={22} />
          </a>
        </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-neutral-900">
        <h2 className="text-sm text-neutral-500 uppercase tracking-widest mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s}
              className="px-3 py-1.5 rounded-full text-sm bg-neutral-900 border border-neutral-800 text-neutral-300">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Research Highlights */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-neutral-900">
        <h2 className="text-sm text-neutral-500 uppercase tracking-widest mb-8">Research</h2>
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <span className="text-xs text-blue-400 uppercase tracking-widest font-medium">Current · 2025 – Present</span>
            <h3 className="text-lg font-semibold mt-1 mb-2">
              Agentic AI & Simulated Social Networks
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Researching the cross-relational dynamics between agentic AI systems and social
              network structures. Building synthetic social networks powered by LLM-based agents
              to simulate emergent behaviors, information propagation, and inter-agent influence
              patterns at scale.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Agentic AI', 'LLMs', 'Social Networks', 'Multi-Agent Systems', 'LangGraph'].map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-neutral-500 uppercase tracking-widest">Fall 2025</span>
              <a
                href="https://drive.google.com/file/d/1_zwfzotZFt1_0rSKOVey7bc4GqYzQxlq/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                [Paper]
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Adversarial Attacks on Large Language Models
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Co-authored "Only The Elite: Your Model Doesn't Need Many Reasons to Be Evil" under
              Dr. Anshuman Chhabra. Achieved 80%+ attack success rates on Vicuna 7B, Mistral 7B,
              and Llama 3 8B using coverage-based demonstration selection.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-neutral-500 uppercase tracking-widest">Spring 2025</span>
              <a
                href="https://drive.google.com/file/d/1lENAFkT7hL9Zmv3ZWjKIntPpmJPdq-E7/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                [Paper]
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Fair Submodular Maximization in Streaming Settings
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Reproduced and extended fairness algorithms in C++, validating on Amazon Sales,
              MovieLens, Census, and Banking datasets under Dr. Anshuman Chhabra.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-neutral-900">
        <h2 className="text-sm text-neutral-500 uppercase tracking-widest mb-4">Contact</h2>
        <p className="text-neutral-400 mb-6">
          Open to full-time roles, research collaborations, and internships.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:faresibrahim@usf.edu"
            className="inline-flex items-center gap-2 border border-neutral-700 px-5 py-2.5 rounded-lg hover:border-neutral-500 hover:bg-neutral-900 transition-colors">
            <Mail size={16} /> faresibrahim@usf.edu
          </a>
          <Link href="/book"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:bg-neutral-200 transition-colors">
            <Calendar size={16} /> Book a Meeting
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-8 text-center text-neutral-600 text-sm">
        © {new Date().getFullYear()} Fares Ibrahim · Built with Next.js & Tailwind
      </footer>
    </main>
  )
}
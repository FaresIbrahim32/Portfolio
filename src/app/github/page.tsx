import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getGithubRepos } from '@/lib/github'
import ProjectCard from '@/components/ProjectCard'
import ClientHeroCanvas from '@/components/ClientHeroCanvas'

export const revalidate = 3600

export default async function GitHubPage() {
  const repos = await getGithubRepos()

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
            Open Source
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Recent GitHub Work
            </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl">
            My latest public repositories, sorted by activity.
          </p>
        </div>
      </section>

      {/* Repos Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
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

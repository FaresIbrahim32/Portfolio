import { Repo } from '@/lib/github'
import { Star, GitFork, ExternalLink } from 'lucide-react'

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
  Rust: 'bg-orange-500',
  Go: 'bg-cyan-500',
  CSS: 'bg-purple-500',
  HTML: 'bg-red-500',
}

export default function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-5 hover:border-neutral-600 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-white truncate">{repo.name}</h3>
        <div className="flex gap-2 shrink-0">
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-400 line-clamp-2 flex-1">
        {repo.description ?? 'No description provided.'}
      </p>

      {/* Topics */}
      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {repo.topics.slice(0, 4).map((t) => (
            <span key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-4 text-xs text-neutral-500 mt-auto pt-2 border-t border-neutral-800">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${languageColors[repo.language] ?? 'bg-neutral-400'}`} />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={12} /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={12} /> {repo.forks_count}
        </span>
      </div>
    </div>
  )
}
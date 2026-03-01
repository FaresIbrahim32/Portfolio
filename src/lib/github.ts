export interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
}

export async function getGithubRepos(): Promise<Repo[]> {
  const username = process.env.GITHUB_USERNAME

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=20&type=public`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
      },
      next: { revalidate: process.env.NODE_ENV === 'development' ? 0 : 3600 }

    }
  )

  if (!res.ok) throw new Error('Failed to fetch GitHub repos')

  const repos: Repo[] = await res.json()

  // filter out forks, sort by stars
  return repos
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
}
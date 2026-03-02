'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Download, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useState } from 'react'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/github', label: 'GitHub' },
  { href: '/education', label: 'Education' },
  { href: '/experience', label: 'Experience' },
  { href: '/book', label: 'Book a Call' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-sm font-semibold tracking-tight text-white hover:text-neutral-300 transition-colors">
          Fares Ibrahim
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                pathname === href
                  ? 'text-white bg-neutral-800'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white border border-neutral-700 hover:border-neutral-500 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Download size={13} /> Resume
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-700 text-neutral-400 hover:text-white transition-colors"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-neutral-700 text-neutral-400 hover:text-white transition-colors"
          >
            {menuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800/60 bg-neutral-950/95 px-6 py-3 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                pathname === href
                  ? 'text-white bg-neutral-800'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <Download size={13} /> Resume
          </a>
        </div>
      )}
    </nav>
  )
}

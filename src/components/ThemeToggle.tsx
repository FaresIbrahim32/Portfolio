'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed top-5 right-5 z-50 flex items-center justify-center w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-500 transition-all shadow-lg"
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}

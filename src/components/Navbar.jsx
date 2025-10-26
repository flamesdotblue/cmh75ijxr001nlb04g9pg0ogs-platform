import React, { useEffect, useState } from 'react'
import { Menu, X, ChevronDown, Sun, Moon, LogIn, Rocket } from 'lucide-react'

const links = [
  { label: 'Products', href: '#products', dropdown: true },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources', dropdown: true },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light'
    setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-sm' : ''
    }`}
    >
      <div className="backdrop-blur-xl bg-[rgba(252,252,249,0.85)] dark:bg-[rgba(31,33,33,0.7)] border-b border-[var(--border)]">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-teal-600/90 dark:bg-teal-500/90 flex items-center justify-center shadow-sm">
                <Rocket className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold tracking-tight text-[var(--text-primary)]">SoftOrigin</span>
            </a>

            <div className="hidden md:flex items-center gap-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
                >
                  {l.label}
                  {l.dropdown && <ChevronDown className="h-4 w-4 opacity-70" />}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
                className="p-2 rounded-lg border border-[var(--border)] hover:shadow-sm transition-all"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <a
                href="#login"
                className="px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" /> Login
              </a>
              <a
                href="#get-started"
                className="px-4 py-2 rounded-lg bg-teal-700 text-white hover:bg-teal-600 transition-colors shadow-sm"
              >
                Get Started
              </a>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
                className="p-2 rounded-lg border border-[var(--border)]"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="p-2 rounded-lg border border-[var(--border)]"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </nav>

        {open && (
          <div className="md:hidden fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[var(--surface)] dark:bg-[var(--surface)] shadow-lg p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <a href="#home" className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-xl bg-teal-600/90 flex items-center justify-center shadow-sm">
                    <Rocket className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-semibold tracking-tight">SoftOrigin</span>
                </a>
                <button aria-label="Close" onClick={() => setOpen(false)} className="p-2 rounded-lg border border-[var(--border)]">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-lg hover:bg-[var(--surface-secondary)] text-[var(--text-primary)]"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <a href="#login" className="flex-1 px-4 py-3 rounded-lg border border-[var(--border)] text-center">Login</a>
                <a href="#get-started" className="flex-1 px-4 py-3 rounded-lg bg-teal-700 text-white text-center">Get Started</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

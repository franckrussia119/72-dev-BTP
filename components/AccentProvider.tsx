'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Per-page accent color system. Each route gets its own teal-family accent
// applied globally via the --accent CSS custom property.
const ACCENTS: Record<string, string> = {
  '/': '#2BBFBF',          // Home  — classic teal
  '/about': '#2BC4A0',     // About — mint green
  '/services': '#2AAFC4',  // Services — aqua blue
  '/portfolio': '#3BBFA8', // Portfolio — sage teal
  '/contact': '#1FA8B8',   // Contact — deep teal
}

// Slightly darker companion shade for each accent (hover / gradients).
const ACCENTS_DARK: Record<string, string> = {
  '/': '#1aa8a8',
  '/about': '#1fae8c',
  '/services': '#1f97ac',
  '/portfolio': '#2ba892',
  '/contact': '#17909e',
}

export default function AccentProvider() {
  const pathname = usePathname()
  useEffect(() => {
    const accent = ACCENTS[pathname] || ACCENTS['/']
    const accentDark = ACCENTS_DARK[pathname] || ACCENTS_DARK['/']
    const root = document.documentElement
    root.style.setProperty('--accent', accent)
    root.style.setProperty('--accent-dark', accentDark)
  }, [pathname])
  return null
}

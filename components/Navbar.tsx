'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LOGO = 'https://72dev-btp.com/wp-content/uploads/2023/12/Screenshot_2025-02-18_210446-removebg-preview.png'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav className="nav" style={{ boxShadow: scrolled ? '0 6px 30px rgba(0,0,0,0.45)' : 'none' }}>
      <Link href="/" className="logo-wrap" aria-label="72dev-BTP home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt="72dev-BTP" className="logo-img" />
        <div>
          <div className="logo-name">72dev-btp</div>
          <div className="logo-sub">Construction &amp; Engineering</div>
        </div>
      </Link>

      <div className="nav-links">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={'nav-link' + (pathname === l.href ? ' active' : '')}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <Link href="/contact" className="nav-cta">Get a Quote</Link>

      <button
        className="mobile-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={'nav-link' + (pathname === l.href ? ' active' : '')}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta" style={{ textAlign: 'center' }}>Get a Quote</Link>
        </div>
      )}
    </nav>
  )
}

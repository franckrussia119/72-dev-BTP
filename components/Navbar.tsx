'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '/', label: 'Homepage' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none' }}>
      <div className="nav-inner">
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <img
            src="https://72dev-btp.com/wp-content/uploads/2023/12/Screenshot_2025-02-18_210446-removebg-preview.png"
            alt="72DEV-BTP"
            style={{ height: '42px', width: 'auto' }}
          />
        </Link>

        {/* Centered links */}
        <div className="nav-links">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
        </div>

        {/* Call Us */}
        <a href="tel:+79502294642" className="call-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          Call Us
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
          id="mobile-toggle"
          aria-label="Menu"
        >
          <div style={{ width: 22, height: 2, background: '#1a2b4a', marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: '#1a2b4a', marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: '#1a2b4a' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'white', borderTop: '1px solid #eee', padding: '1rem 2rem' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link"
              onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '0.65rem 0', borderBottom: '1px solid #f0f0f0' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          #mobile-toggle { display: block !important; }
          .call-btn { display: none; }
        }
      `}</style>
    </nav>
  )
}

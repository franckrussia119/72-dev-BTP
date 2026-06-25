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
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <Link href="/">
          <img src="https://72dev-btp.com/wp-content/uploads/2023/12/Screenshot_2025-02-18_210446-removebg-preview.png" alt="72DEV-BTP" style={{ height: '42px', width: 'auto' }} />
        </Link>
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          {links.map(l => <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>)}
        </div>
        <a href="tel:+79502294642" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1.5px solid #1a2b4a', padding: '0.45rem 1.1rem', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a2b4a', transition: 'all 0.2s' }} className="desktop-nav">
          📞 Call Us
        </a>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
          <div style={{ width: 22, height: 2, background: '#1a2b4a', marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: '#1a2b4a', marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: '#1a2b4a' }} />
        </button>
      </div>
      {open && (
        <div style={{ background: 'white', borderTop: '1px solid #eee', padding: '1rem 5%' }}>
          {links.map(l => <Link key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)} style={{ display: 'block', padding: '0.65rem 0', borderBottom: '1px solid #f0f0f0' }}>{l.label}</Link>)}
        </div>
      )}
    </nav>
  )
}

'use client'
import { useState } from 'react'
import Link from 'next/link'
import { WaveBottom, WaveTop } from '@/components/Wave'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '', gdpr: false })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) setForm({ name: '', email: '', phone: '', type: '', message: '', gdpr: false })
    } catch { setStatus('error') }
  }

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: `url(https://72dev-btp.com/wp-content/uploads/2025/02/pexels-glazun0v-5215270-1024x683.jpg)` }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <div className="page-header-bar" />
          <div>
            <h1 style={{ fontFamily: 'Nunito Sans', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Contact us</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>🏠</span>
              <Link href="/" style={{ color: '#2BBFBF', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
              <span>Contact us</span>
            </p>
          </div>
        </div>
        <WaveBottom fill="#ffffff" />
      </div>

      {/* Contact section */}
      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
          {/* Form */}
          <div>
            <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.4rem', color: '#1a2b4a', marginBottom: '0.5rem' }}>Information</h2>
            <div style={{ width: 40, height: 3, background: '#2BBFBF', marginBottom: '2rem' }} />

            {status === 'sent' ? (
              <div style={{ background: 'rgba(43,191,191,0.08)', border: '1px solid #2BBFBF', padding: '2rem', textAlign: 'center' }}>
                <p style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Message Sent!</p>
                <p style={{ color: '#7a8a9a' }}>We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Nunito Sans', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#1a2b4a' }}>I'm a</label>
                  <select className="form-input" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                    <option value="">I'm a...</option>
                    <option>I'm a real estate agent</option>
                    <option>I'm a property owner</option>
                    <option>I'm a business owner</option>
                    <option>Government / NGO</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Nunito Sans', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#1a2b4a' }}>Property / Project Type</label>
                  <select className="form-input" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}>
                    <option value="">Select type</option>
                    <option>Road Construction</option>
                    <option>Bridge Construction</option>
                    <option>Building Construction</option>
                    <option>Infrastructure Development</option>
                    <option>Large Luxury Villa</option>
                    <option>Single Family Home</option>
                    <option>Standard Modern Villa</option>
                    <option>Superior Villa</option>
                    <option>Renovation</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Nunito Sans', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#1a2b4a' }}>Name</label>
                  <input type="text" className="form-input" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Nunito Sans', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#1a2b4a' }}>Email</label>
                  <input type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Nunito Sans', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#1a2b4a' }}>Message</label>
                  <textarea className="form-input" rows={5} placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <input type="checkbox" id="gdpr" checked={form.gdpr} onChange={e => setForm({ ...form, gdpr: e.target.checked })} style={{ marginTop: '3px', accentColor: '#2BBFBF' }} />
                  <label htmlFor="gdpr" style={{ fontSize: '0.82rem', color: '#7a8a9a', lineHeight: 1.6, cursor: 'pointer' }}>
                    GDPR Agreement — I consent to having this website store my submitted information
                  </label>
                </div>

                <div>
                  <button type="submit" className="btn-teal" disabled={status === 'sending'} style={{ border: 'none', cursor: status === 'sending' ? 'wait' : 'pointer' }}>
                    {status === 'sending' ? 'Sending...' : 'Submit'}
                  </button>
                  {status === 'error' && <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.5rem' }}>Something went wrong. Please email us directly.</p>}
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '1rem', color: '#1a2b4a', marginBottom: '0.5rem' }}>Call</h3>
              <p style={{ color: '#7a8a9a', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '0.25rem' }}>Call us for immediate assistance (available Monday–Friday, 8 AM – 6 PM GMT).</p>
              <a href="tel:+79502294642" style={{ color: '#1a2b4a', fontFamily: 'Nunito Sans', fontWeight: 700, textDecoration: 'none' }}>+7 950 229-46-42</a>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '1rem', color: '#1a2b4a', marginBottom: '0.5rem' }}>Email</h3>
              <p style={{ color: '#7a8a9a', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '0.25rem' }}>Send project details or questions for a prompt reply within 24 hours.</p>
              <a href="mailto:info@72dev-btp.com" style={{ color: '#1a2b4a', fontFamily: 'Nunito Sans', fontWeight: 700, textDecoration: 'none' }}>info@72dev-btp.com</a>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '1rem', color: '#1a2b4a', marginBottom: '0.5rem' }}>Address</h3>
              <p style={{ color: '#1a2b4a', fontFamily: 'Nunito Sans', fontWeight: 700 }}>1298 Yaounde – Cameroon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [form, setForm] = useState({ role: '', projectType: '', name: '', email: '', message: '', gdpr: false })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) setForm({ role: '', projectType: '', name: '', email: '', message: '', gdpr: false })
    } catch { setStatus('error') }
  }

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: 'url(https://72dev-btp.com/wp-content/uploads/2025/02/pexels-glazun0v-5215270-1024x683.jpg)' }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <div className="teal-bar" />
          <div>
            <h1 style={{ fontFamily: 'Nunito Sans, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Contact us</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
              <Link href="/" style={{ color: '#2BBFBF' }}>Home</Link> / Contact us
            </p>
          </div>
        </div>
      </div>

      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
          <div>
            <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#1a2b4a', marginBottom: '0.5rem' }}>Information</h2>
            <div style={{ width: 40, height: 3, background: '#2BBFBF', marginBottom: '2rem' }} />
            {status === 'sent' ? (
              <div style={{ background: 'rgba(43,191,191,0.08)', border: '1px solid #2BBFBF', padding: '2rem', textAlign: 'center' }}>
                <p style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>Message Sent! We will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#1a2b4a' }}>I am a</label>
                  <select className="form-input" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
                    <option value="">Select...</option>
                    <option>Real estate agent</option>
                    <option>Property owner</option>
                    <option>Business owner</option>
                    <option>Government / NGO</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#1a2b4a' }}>Project Type</label>
                  <select className="form-input" value={form.projectType} onChange={e => setForm({ ...form, projectType: e.target.value })}>
                    <option value="">Select type</option>
                    <option>Road Construction</option>
                    <option>Bridge Construction</option>
                    <option>Building Construction</option>
                    <option>Infrastructure Development</option>
                    <option>Renovation</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#1a2b4a' }}>Name</label>
                  <input type="text" className="form-input" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#1a2b4a' }}>Email</label>
                  <input type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#1a2b4a' }}>Message</label>
                  <textarea className="form-input" rows={5} placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <input type="checkbox" id="gdpr" checked={form.gdpr} onChange={e => setForm({ ...form, gdpr: e.target.checked })} style={{ marginTop: '3px', accentColor: '#2BBFBF' }} />
                  <label htmlFor="gdpr" style={{ fontSize: '0.82rem', color: '#7a8a9a', lineHeight: 1.6, cursor: 'pointer' }}>
                    I consent to having this website store my submitted information
                  </label>
                </div>
                <div>
                  <button type="submit" disabled={status === 'sending'} style={{ background: '#2BBFBF', color: 'white', padding: '0.75rem 2rem', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}>
                    {status === 'sending' ? 'Sending...' : 'Submit'}
                  </button>
                  {status === 'error' && <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.5rem' }}>Something went wrong. Please email us directly.</p>}
                </div>
              </form>
            )}
          </div>

          <div>
            <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#1a2b4a', marginBottom: '2rem' }}>Contact Information</h2>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#1a2b4a', marginBottom: '0.5rem' }}>Call</h3>
              <p style={{ color: '#7a8a9a', fontSize: '0.88rem', marginBottom: '0.25rem' }}>Available Monday to Friday, 8 AM to 6 PM GMT.</p>
              <a href="tel:+79502294642" style={{ color: '#1a2b4a', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700 }}>+7 950 229-46-42</a>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#1a2b4a', marginBottom: '0.5rem' }}>Email</h3>
              <p style={{ color: '#7a8a9a', fontSize: '0.88rem', marginBottom: '0.25rem' }}>We reply within 24 hours.</p>
              <a href="mailto:info@72dev-btp.com" style={{ color: '#1a2b4a', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700 }}>info@72dev-btp.com</a>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#1a2b4a', marginBottom: '0.5rem' }}>Address</h3>
              <p style={{ color: '#1a2b4a', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700 }}>1298 Yaounde, Cameroon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

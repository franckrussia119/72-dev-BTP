'use client'
import { useState } from 'react'
import Link from 'next/link'
import { IMG } from '@/lib/images'

const info = [
  { icon: 'ti-map-pin', h: 'Address', v: '1298 Yaoundé, Cameroon', sub: 'West & Central Africa operations' },
  { icon: 'ti-phone', h: 'Call Us', v: '+237 650 000 000', sub: 'Mon — Sat, 8am to 6pm' },
  { icon: 'ti-mail', h: 'Email', v: 'info@72dev-btp.com', sub: 'We reply within 24 hours' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', projectType: '', message: '', gdpr: false })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', company: '', email: '', phone: '', projectType: '', message: '', gdpr: false })
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const upd = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }))

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: `url(${IMG.infra})` }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <div className="teal-bar" />
          <div>
            <h1 className="ph-title">Contact Us</h1>
            <div className="breadcrumb"><Link href="/">Home</Link> &nbsp;/&nbsp; Contact</div>
          </div>
        </div>
      </div>

      <section className="section dark">
        <div className="contact-grid">
          {/* LEFT — INFO */}
          <div>
            <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">Get in Touch</span></div>
            <div className="s-title" style={{ fontSize: 34 }}>Let&apos;s Build Together</div>
            <div className="s-sub" style={{ marginBottom: 32 }}>
              Reach out for a free consultation. Our certified team responds within 24 hours to help
              plan your construction project across Africa.
            </div>
            {info.map((c) => (
              <div className="contact-info-card" key={c.h}>
                <div className="ci-mark"><i className={'ti ' + c.icon} style={{ fontSize: 20 }} /></div>
                <div>
                  <div className="ci-h">{c.h}</div>
                  <div className="ci-v">{c.v}</div>
                  <div className="ci-sub">{c.sub}</div>
                </div>
              </div>
            ))}
            <div className="map-box">Yaoundé, Cameroon — Map</div>
          </div>

          {/* RIGHT — FORM */}
          <div className="form-card">
            {status === 'sent' ? (
              <div className="form-success">
                Message sent! We will be in touch within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label>Name</label>
                    <input type="text" required placeholder="Your full name" value={form.name} onChange={(e) => upd('name', e.target.value)} />
                  </div>
                  <div className="field">
                    <label>Company</label>
                    <input type="text" placeholder="Company (optional)" value={form.company} onChange={(e) => upd('company', e.target.value)} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label>Email</label>
                    <input type="email" required placeholder="your@email.com" value={form.email} onChange={(e) => upd('email', e.target.value)} />
                  </div>
                  <div className="field">
                    <label>Phone</label>
                    <input type="tel" placeholder="+237 ..." value={form.phone} onChange={(e) => upd('phone', e.target.value)} />
                  </div>
                </div>
                <div className="field">
                  <label>Project Type</label>
                  <select value={form.projectType} onChange={(e) => upd('projectType', e.target.value)}>
                    <option value="">Select type</option>
                    <option>Road Construction</option>
                    <option>Bridge Construction</option>
                    <option>Building Construction</option>
                    <option>Infrastructure Development</option>
                    <option>Renovation</option>
                  </select>
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea required placeholder="Tell us about your project..." value={form.message} onChange={(e) => upd('message', e.target.value)} />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 22 }}>
                  <input type="checkbox" id="gdpr" checked={form.gdpr} onChange={(e) => upd('gdpr', e.target.checked)} style={{ marginTop: 3, accentColor: 'var(--accent)', width: 'auto' }} />
                  <label htmlFor="gdpr" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, cursor: 'pointer' }}>
                    I consent to having this website store my submitted information.
                  </label>
                </div>
                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Submit Request'}
                </button>
                {status === 'error' && (
                  <p style={{ color: '#ff7676', fontSize: 13, marginTop: 14 }}>
                    Something went wrong. Please email us directly at info@72dev-btp.com.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

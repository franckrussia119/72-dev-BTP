import Link from 'next/link'
import { WaveTop } from './Wave'

export default function Footer() {
  return (
    <footer>
      {/* Dark wave CTA band */}
      <div style={{ position: 'relative', background: '#1e3a4a', padding: '5rem 5% 3rem' }}>
        <WaveTop fill="#f4f6f8" />
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2BBFBF', marginBottom: '0.75rem' }}>Get in Touch</p>
          <h2 style={{ fontFamily: 'Nunito Sans', color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: '1rem' }}>About Our Standards</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Embrace the essence of construction excellence. Discover unparalleled, exceptional and professional services designed only for the most ambitious projects.
          </p>
          <Link href="/contact" className="btn-teal">Request a Consultation</Link>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ background: '#152a38', padding: '3rem 5% 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>

          <div>
            <img src="https://72dev-btp.com/wp-content/uploads/2023/12/Screenshot_2025-02-18_210446-removebg-preview.png"
              alt="72DEV-BTP" style={{ height: '40px', marginBottom: '1rem', filter: 'brightness(10)' }} />
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.7 }}>
              Leading construction company operating across African nations, building a better tomorrow.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              {['Facebook', 'Twitter', 'Youtube'].map(s => (
                <a key={s} href="#" className="footer-link" style={{ fontSize: '0.78rem', letterSpacing: '0.05em' }}>{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Nunito Sans', color: 'white', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>Quick Links</h4>
            {[['/', 'Homepage'], ['/about', 'About Us'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact Us']].map(([h, l]) => (
              <div key={h}><Link href={h} className="footer-link">{l}</Link></div>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: 'Nunito Sans', color: 'white', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>Services</h4>
            {['Road Construction', 'Bridge Construction', 'Building Construction', 'Infrastructure Development', 'Project Design', 'Renovations'].map(s => (
              <div key={s}><Link href="/services" className="footer-link">{s}</Link></div>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: 'Nunito Sans', color: 'white', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>Contact</h4>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone</p>
            <a href="tel:+79502294642" className="footer-link">+7 950 229-46-42</a>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.75rem' }}>Email</p>
            <a href="mailto:info@72dev-btp.com" className="footer-link">info@72dev-btp.com</a>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.75rem' }}>Address</p>
            <p className="footer-link">1298 Yaounde – Cameroon</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem' }}>© 72dev-btp - All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

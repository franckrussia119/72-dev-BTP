import Link from 'next/link'
import { WaveBottom, WaveTop } from '@/components/Wave'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About Us - 72DEV-BTP SARL' }

export default function About() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header" style={{ minHeight: '320px' }}>
        <div className="page-header-bg" style={{ backgroundImage: `url(https://72dev-btp.com/wp-content/uploads/2024/07/AdobeStock_755564704-scaled-1-592x444.jpg)` }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <div className="page-header-bar" />
          <div>
            <h1 style={{ fontFamily: 'Nunito Sans', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>
              Why Choose 72dev-BTP?<br />Building Excellence Across Africa
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>🏠</span>
              <Link href="/" style={{ color: '#2BBFBF', textDecoration: 'none' }}>Home</Link>
            </p>
          </div>
        </div>
        <WaveBottom fill="#f4f6f8" />
      </div>

      {/* Our Story */}
      <section style={{ padding: '5rem 5%', background: '#f4f6f8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.6rem', color: '#1a2b4a', marginBottom: '1.5rem' }}>Our Story</h2>
          <p style={{ color: '#7a8a9a', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            At 72dev-BTP, we're more than just a construction company—we're architects of progress in Africa. Founded in 2021 with a vision to tackle the continent's infrastructure challenges, we've grown from a small team of passionate engineers to a certified powerhouse in buildings, public works, and infrastructure (Bâtiments et Travaux Publics). Operating between key African regions, we specialize in projects that connect people, boost trade, and promote sustainability.
          </p>
          <p style={{ color: '#7a8a9a', lineHeight: 1.85, fontSize: '0.95rem' }}>
            Our journey began with a simple mission: to build structures that withstand Africa's diverse climates while respecting local cultures and environments. From humble beginnings in Cameroon, we've expanded to deliver turnkey projects across borders, earning awards for excellence in road construction, bridge building, and eco-friendly developments. Today, we're proud to have completed numerous projects, creating jobs and fostering development.
          </p>
        </div>
      </section>

      {/* Why Choose + Image Grid */}
      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#2BBFBF', marginBottom: '1rem' }}>
              <svg viewBox="0 0 64 64" fill="none" stroke="#2BBFBF" strokeWidth="2.5" style={{ width: 56, height: 56 }}>
                <path d="M8 32L32 8l24 24M16 24v28h32V24M24 60V44h16v16" />
              </svg>
            </div>
            <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.6rem', color: '#1a2b4a', marginBottom: '1.25rem', lineHeight: 1.3 }}>
              Why Choose 72dev-BTP? Building Excellence Across Africa
            </h2>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.92rem' }}>
              As a leading construction company operating between African nations, 72dev-BTP brings top know-how and certifications to every project. We've completed award-winning works in road, bridge, and building construction, focusing on eco-friendly practices and turnkey delivery. Our team of certified experts ensures high-quality results that drive economic growth and community development."
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {['Many years of experience in African markets.', 'Commitment to sustainability and local job creation.', 'Proven track record with government and private clients.'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#7a8a9a', fontSize: '0.9rem' }}>
                  <span style={{ color: '#2BBFBF', marginTop: '2px', flexShrink: 0 }}>✅</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 2x2 image grid with teal accents */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { img: 'https://72dev-btp.com/wp-content/uploads/2020/09/image-13-1024x683.jpg', tag: 'Solutions', title: 'Turnkey delivery' },
              { img: 'https://72dev-btp.com/wp-content/uploads/2024/07/AdobeStock_755564704-scaled-1-592x444.jpg', tag: 'Concept', title: 'Quality Design' },
              { img: 'https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif', tag: 'Production', title: 'High-end materials' },
              { img: 'https://72dev-btp.com/wp-content/uploads/2024/08/AdobeStock_787268873-scaled-1-592x444.jpg', tag: 'Concept', title: 'High Confort' },
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,43,74,0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1rem' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.tag}</p>
                  <p style={{ color: 'white', fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '0.95rem' }}>{item.title}</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', marginTop: '0.25rem' }}>MORE DETAILS ▷</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section style={{ padding: '1rem 5% 5rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.6rem', color: '#1a2b4a' }}>Our Mission and Values</h2>
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <img src="https://72dev-btp.com/wp-content/uploads/2025/02/pexels-glazun0v-5215270-1024x683.jpg" alt="Building" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.3rem', color: '#2BBFBF', marginBottom: '1rem' }}>Mission:</h3>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, fontSize: '0.92rem', marginBottom: '2rem' }}>
              To provide world-class construction services that drive Africa's sustainable development. We focus on turnkey delivery, using high-end materials and top know-how to create infrastructure that lasts generations.
            </p>
            <h3 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.3rem', color: '#1a2b4a', marginBottom: '1rem' }}>Core Values</h3>
            <div style={{ background: '#e8ecf0', padding: '1.5rem', borderRadius: '4px' }}>
              {[
                ['Innovation', 'Leveraging cutting-edge technology for efficient, eco-friendly builds tailored to African terrains.'],
                ['Sustainability', 'Committed to green practices, like using recycled materials and minimizing environmental impact in sensitive ecosystems.'],
                ['Community Focus', 'Prioritizing local hiring, training, and partnerships to empower African communities.'],
                ['Integrity', 'Transparent processes and ethical standards in every project, from initial consultation to final handover.'],
                ['Excellence', 'Holding ISO certifications and awards for quality, safety, and timely project completion.'],
              ].map(([k, v], i) => (
                <p key={i} style={{ color: '#7a8a9a', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '0.6rem' }}>
                  <strong style={{ color: '#1a2b4a' }}>{k}:</strong> {v}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Quote band */}
        <div style={{ maxWidth: '1280px', margin: '3rem auto 0', background: '#d0d8e4', padding: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#1a2b4a', fontStyle: 'italic', fontSize: '1rem' }}>
            "We're not just building structures; we're building brighter futures for Africa."
          </p>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section style={{ padding: '5rem 5%', background: '#f4f6f8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Image with price card */}
          <div style={{ position: 'relative' }}>
            <img
              src="https://72dev-btp.com/wp-content/uploads/2025/02/pexels-josegalant-14192787-1-scaled.jpg"
              alt="Single family home"
              style={{ width: '85%', height: '320px', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '1rem', left: '0', background: 'rgba(26,43,74,0.85)', color: 'white', padding: '0.75rem 1.25rem', fontSize: '0.82rem' }}>
              <p style={{ fontWeight: 700 }}>Starting $250,000</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>🛏 3  🚿 2.5  📐 2900 Sq Ft</p>
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.5rem', color: '#1a2b4a', marginBottom: '1.25rem' }}>Single Family Home</h2>
            {['On-time delivery', '2 year guarantee', 'All expenditure comprises'].map((item, i) => (
              <p key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: '#7a8a9a', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                <span style={{ color: '#2BBFBF' }}>✅</span> {item}
              </p>
            ))}
            <Link href="/contact" className="btn-navy" style={{ marginTop: '1.5rem', display: 'inline-block' }}>More details</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative' }}>
        <WaveTop fill="#1e3a4a" />
        <div style={{ background: '#1e3a4a', padding: '5rem 5%', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2BBFBF', marginBottom: '0.75rem' }}>Expert Team</p>
          <h2 style={{ fontFamily: 'Nunito Sans', color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Would you like to speak to an expert?</h2>
          <Link href="/contact" className="btn-teal">Request a Consultation</Link>
        </div>
      </section>
    </>
  )
}

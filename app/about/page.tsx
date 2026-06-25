import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About Us - 72DEV-BTP SARL' }

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: 'url(https://72dev-btp.com/wp-content/uploads/2024/07/AdobeStock_755564704-scaled-1-592x444.jpg)' }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <div className="teal-bar" />
          <div>
            <h1 style={{ fontFamily: 'Nunito Sans, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Why Choose 72dev-BTP? Building Excellence Across Africa</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
              <Link href="/" style={{ color: '#2BBFBF' }}>Home</Link> / About Us
            </p>
          </div>
        </div>
      </div>

      <section style={{ padding: '5rem 5%', background: '#f4f6f8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#1a2b4a', marginBottom: '1.5rem' }}>Our Story</h2>
          <p style={{ color: '#7a8a9a', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            At 72dev-BTP, we are more than just a construction company. We are architects of progress in Africa. Founded in 2021 with a vision to tackle the continent infrastructure challenges, we have grown from a small team of passionate engineers to a certified powerhouse in buildings, public works, and infrastructure. Operating between key African regions, we specialize in projects that connect people, boost trade, and promote sustainability.
          </p>
          <p style={{ color: '#7a8a9a', lineHeight: 1.85, fontSize: '0.95rem' }}>
            From humble beginnings in Cameroon, we have expanded to deliver turnkey projects across borders, earning awards for excellence in road construction, bridge building, and eco-friendly developments.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <svg viewBox="0 0 64 64" fill="none" stroke="#2BBFBF" strokeWidth="2.5" style={{ width: 56, height: 56 }}>
                <path d="M8 32L32 8l24 24M16 24v28h32V24M24 60V44h16v16" />
              </svg>
            </div>
            <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#1a2b4a', marginBottom: '1.25rem', lineHeight: 1.3 }}>Why Choose 72dev-BTP?</h2>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.92rem' }}>
              As a leading construction company, 72dev-BTP brings top know-how and certifications to every project. We have completed award-winning works in road, bridge, and building construction.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {['Many years of experience in African markets.', 'Commitment to sustainability and local job creation.', 'Proven track record with government and private clients.'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#7a8a9a', fontSize: '0.9rem' }}>
                  <span style={{ color: '#2BBFBF', flexShrink: 0 }}>✅</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { img: 'https://72dev-btp.com/wp-content/uploads/2020/09/image-13-1024x683.jpg', tag: 'Solutions', title: 'Turnkey delivery' },
              { img: 'https://72dev-btp.com/wp-content/uploads/2024/07/AdobeStock_755564704-scaled-1-592x444.jpg', tag: 'Concept', title: 'Quality Design' },
              { img: 'https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif', tag: 'Production', title: 'High-end materials' },
              { img: 'https://72dev-btp.com/wp-content/uploads/2024/08/AdobeStock_787268873-scaled-1-592x444.jpg', tag: 'Concept', title: 'High Comfort' },
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '170px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,43,74,0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0.75rem' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.tag}</p>
                  <p style={{ color: 'white', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 5%', background: '#f4f6f8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#1a2b4a' }}>Our Mission and Values</h2>
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <img src="https://72dev-btp.com/wp-content/uploads/2025/02/pexels-glazun0v-5215270-1024x683.jpg" alt="Building" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
          <div>
            <h3 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#2BBFBF', marginBottom: '1rem' }}>Mission</h3>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, fontSize: '0.92rem', marginBottom: '2rem' }}>
              To provide world-class construction services that drive Africa sustainable development using high-end materials and top know-how.
            </p>
            <h3 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#1a2b4a', marginBottom: '1rem' }}>Core Values</h3>
            <div style={{ background: '#e8ecf0', padding: '1.5rem' }}>
              {[['Innovation', 'Cutting-edge technology for efficient, eco-friendly builds.'], ['Sustainability', 'Green practices minimizing environmental impact.'], ['Community Focus', 'Local hiring and partnerships to empower African communities.'], ['Integrity', 'Transparent processes in every project.'], ['Excellence', 'ISO certifications and awards for quality and safety.']].map(([k, v], i) => (
                <p key={i} style={{ color: '#7a8a9a', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '0.6rem' }}>
                  <strong style={{ color: '#1a2b4a' }}>{k}:</strong> {v}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1280px', margin: '3rem auto 0', background: '#d0d8e4', padding: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#1a2b4a', fontStyle: 'italic' }}>We are not just building structures; we are building brighter futures for Africa.</p>
        </div>
      </section>

      <section style={{ background: '#1e3a4a', padding: '5rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', color: 'white', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Would You Like to Speak to an Expert?</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>Our certified team is ready to assist with your construction project.</p>
        <Link href="/contact" className="btn-teal">Request a Consultation</Link>
      </section>
    </>
  )
}

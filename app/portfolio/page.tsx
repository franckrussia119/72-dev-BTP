import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Portfolio - 72DEV-BTP SARL' }

export default function Portfolio() {
  const projects = [
    'https://72dev-btp.com/wp-content/uploads/2020/09/image-13-1024x683.jpg',
    'https://72dev-btp.com/wp-content/uploads/2025/02/pexels-josegalant-14192787-1-scaled.jpg',
    'https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif',
    'https://72dev-btp.com/wp-content/uploads/2024/07/AdobeStock_755564704-scaled-1-592x444.jpg',
    'https://72dev-btp.com/wp-content/uploads/2024/08/AdobeStock_787268873-scaled-1-592x444.jpg',
  ]
  const roadProjects = [
    'https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif',
    'https://72dev-btp.com/wp-content/uploads/2025/02/Incremental-Launching-Method-of-Bridge-Construction.webp',
    'https://72dev-btp.com/wp-content/uploads/2025/02/pexels-glazun0v-5215270-1024x683.jpg',
  ]

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: 'url(https://72dev-btp.com/wp-content/uploads/2024/07/AdobeStock_755564704-scaled-1-592x444.jpg)' }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <div className="teal-bar" />
          <div>
            <h1 style={{ fontFamily: 'Nunito Sans, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Portfolio</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
              <Link href="/" style={{ color: '#2BBFBF' }}>Home</Link> / Portfolio
            </p>
          </div>
        </div>
      </div>

      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#1a2b4a', marginBottom: '1rem', lineHeight: 1.3 }}>Exterior design projects</h2>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, fontSize: '0.9rem' }}>
              Good in transforming outdoor spaces with innovative, sustainable design. Our team creates functional, beautiful environments tailored to client needs, using eco-friendly practices for lasting impact.
            </p>
          </div>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '8px' }}>
              {projects.slice(0, 3).map((src, i) => (
                <img key={i} src={src} alt={'Project ' + (i + 1)} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {projects.slice(3).map((src, i) => (
                <img key={i} src={src} alt={'Project ' + (i + 4)} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 5%', background: '#f4f6f8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {roadProjects.map((src, i) => (
                <img key={i} src={src} alt={'Road ' + (i + 1)} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#1a2b4a', marginBottom: '1rem', lineHeight: 1.3 }}>Road and Infrastructure projects</h2>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, fontSize: '0.9rem' }}>
              Building durable connections across African nations. Our road and infrastructure projects span highways, rural paths, and major bridges engineered for Africa unique terrain and climate.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: '#1e3a4a', padding: '5rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', color: 'white', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Have a Project in Mind?</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>Let our award-winning team bring your vision to life.</p>
        <Link href="/contact" className="btn-teal">Start Your Project</Link>
      </section>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Services - 72DEV-BTP SARL' }

export default function Services() {
  const serviceList = [
    { label: 'Design', title: 'Road Construction', img: 'https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif', desc: 'We build and maintain durable roads that connect communities and boost trade across Africa. From highways to rural paths, our projects use weather-resistant materials.', benefits: ['Enhanced mobility for businesses and residents.', 'Sustainable techniques that minimize erosion.', 'Turnkey service including surveying, paving, and signage.'], left: true },
    { label: 'Design', title: 'Bridge Construction', img: 'https://72dev-btp.com/wp-content/uploads/2025/02/Incremental-Launching-Method-of-Bridge-Construction.webp', desc: 'Specializing in safe, efficient bridges that span rivers, valleys, and urban divides. Our awarded engineers ensure structures built to last.', benefits: ['Improved trade routes and emergency access.', 'Eco-friendly designs that blend with natural landscapes.', 'Full certification for safety and load-bearing standards.'], left: false },
    { label: 'Production', title: 'Building Construction', img: 'https://72dev-btp.com/wp-content/uploads/2025/02/pexels-josegalant-14192787-1-scaled.jpg', desc: 'From residential homes to commercial complexes, we construct modern buildings with a focus on quality and sustainability.', benefits: ['High-end finishes that withstand heat, humidity, and wear.', 'Energy-efficient features to reduce long-term costs.', 'Turnkey management for hassle-free completion.'], left: true },
    { label: 'Delivery', title: 'Infrastructure Development', img: 'https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif', desc: 'Comprehensive services for large-scale infrastructure like water systems, power grids, and public works from feasibility to implementation.', benefits: ['Scalable solutions for government and private sectors.', 'Local sourcing to support African economies.', 'Certified processes for reliability and compliance.'], left: false },
  ]

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: 'url(https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif)' }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <div className="teal-bar" />
          <div>
            <h1 style={{ fontFamily: 'Nunito Sans, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Services</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
              <Link href="/" style={{ color: '#2BBFBF' }}>Home</Link> / Services
            </p>
          </div>
        </div>
      </div>

      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#1a2b4a', marginBottom: '1.25rem', lineHeight: 1.4 }}>Our qualified team will take care of every detail of your project</h2>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              As a leading construction company operating between African nations, 72dev-BTP combines global standards with local expertise. We specialize in turnkey delivery, ensuring every service is handled from initial consultation to final handover.
            </p>
            <Link href="/contact" className="btn-teal">Talk to an Expert</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {['Project Design', 'Development', 'Contractor Services', 'Interior Painting', 'Electrical', 'Plumbing', 'Carpentry', 'Flooring', 'Renovations'].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, border: '1.5px solid #2BBFBF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', fontSize: '1.2rem' }}>
                  {['💡', '🏗️', '📋', '🎨', '⚡', '🔧', '🪚', '🏠', '🔨'][i]}
                </div>
                <p style={{ color: '#1a2b4a', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '0.75rem' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {serviceList.map((s, i) => (
        <section key={i} style={{ padding: '5rem 5%', background: i % 2 === 0 ? '#f4f6f8' : 'white' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {s.left ? (
              <>
                <div style={{ position: 'relative', paddingBottom: '2rem', paddingLeft: '2rem' }}>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '80px', height: '80px', background: 'rgba(43,191,191,0.4)' }} />
                  <img src={s.img} alt={s.title} style={{ width: '100%', height: '280px', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
                </div>
                <div>
                  <p style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{s.label}</p>
                  <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#1a2b4a', marginBottom: '1rem' }}>{s.title}</h2>
                  <p style={{ color: '#7a8a9a', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9rem' }}>{s.desc}</p>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: '#7a8a9a', fontSize: '0.88rem', lineHeight: 1.9 }}>
                    {s.benefits.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{s.label}</p>
                  <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#1a2b4a', marginBottom: '1rem' }}>{s.title}</h2>
                  <p style={{ color: '#7a8a9a', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.9rem' }}>{s.desc}</p>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: '#7a8a9a', fontSize: '0.88rem', lineHeight: 1.9 }}>
                    {s.benefits.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                </div>
                <div style={{ position: 'relative', paddingBottom: '2rem', paddingRight: '2rem' }}>
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: '80px', height: '80px', background: 'rgba(43,191,191,0.4)' }} />
                  <img src={s.img} alt={s.title} style={{ width: '100%', height: '280px', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', minHeight: '350px' }}>
        <div style={{ background: '#2d5a5a', display: 'flex', alignItems: 'center', padding: '4rem 5%' }}>
          <div>
            <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', lineHeight: 1.2, marginBottom: '1.5rem' }}>Why Choose Our Services?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              With 72dev-BTP, you are not just getting construction services, you are investing in Africa future. Our eco-friendly approach and commitment to excellence ensure projects that deliver real value.
            </p>
          </div>
        </div>
        <div>
          <img src="https://72dev-btp.com/wp-content/uploads/2025/02/pexels-glazun0v-5215270-1024x683.jpg" alt="Why us" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '280px' }} />
        </div>
      </section>

      <section style={{ background: '#f4f6f8', padding: '6rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#1a2b4a', lineHeight: 1.2, marginBottom: '3rem' }}>Ready to Get Started? Fill Out Our Form for a Personalized Service Plan!</h2>
        <Link href="/contact" className="btn-teal">Contact Us Now</Link>
      </section>

      <section style={{ background: '#1e3a4a', padding: '5rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Nunito Sans, sans-serif', color: 'white', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          Would you like to <span style={{ color: '#2BBFBF' }}>speak to an expert?</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>Our certified team is ready to help with your project across Africa.</p>
        <Link href="/contact" className="btn-teal">Request a consultation</Link>
      </section>
    </>
  )
}

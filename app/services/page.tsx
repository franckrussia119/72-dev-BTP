import Link from 'next/link'
import { WaveBottom, WaveTop } from '@/components/Wave'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Services - 72DEV-BTP SARL' }

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: `url(https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif)` }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <div className="page-header-bar" />
          <div>
            <h1 style={{ fontFamily: 'Nunito Sans', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>Services</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>🏠</span>
              <Link href="/" style={{ color: '#2BBFBF', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>Services</span>
            </p>
          </div>
        </div>
        <WaveBottom fill="#ffffff" />
      </div>

      {/* Intro + Icon Grid */}
      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.5rem', color: '#1a2b4a', marginBottom: '1.25rem', lineHeight: 1.4 }}>
              Our qualified team will take care of every detail of your project
            </h2>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.9rem' }}>
              As a leading construction company operating between African nations, 72dev-BTP combines global standards with local expertise to deliver projects that withstand the continent's unique challenges—like extreme weather, remote locations, and regulatory complexities. We specialize in turnkey delivery, ensuring every service is handled from initial consultation to final handover. Our commitment to high-end materials, eco-friendly practices, and certified processes has earned us awards and repeat clients across Africa.
            </p>
            <p style={{ color: '#7a8a9a', fontSize: '0.88rem', marginBottom: '1.5rem' }}>What sets us apart:</p>
            <Link href="/contact" className="btn-teal">Talk to an Expert</Link>
          </div>

          {/* 3x2 icon grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem 1rem' }}>
            {[
              { icon: '💡', label: 'Project Design' },
              { icon: '🏗️', label: 'Development' },
              { icon: '📋', label: 'Contractor Services' },
              { icon: '🎨', label: 'Interior Painting' },
              { icon: '⚡', label: 'Electrical' },
              { icon: '🔧', label: 'Plumbing' },
              { icon: '🪚', label: 'Carpentry' },
              { icon: '🏠', label: 'Flooring' },
              { icon: '🔨', label: 'Renovations' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, border: '1.5px solid #2BBFBF', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', fontSize: '1.4rem', color: '#2BBFBF' }}>
                  {item.icon}
                </div>
                <p style={{ color: '#1a2b4a', fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '0.78rem' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Road Construction */}
      <section style={{ padding: '5rem 5%', background: '#f4f6f8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Teal accent image */}
          <div style={{ position: 'relative', paddingBottom: '2rem', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '85px', height: '85px', background: 'rgba(43,191,191,0.45)' }} />
            <img src="https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif" alt="Road" style={{ width: '100%', height: '300px', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
          </div>
          <div>
            <p style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Design</p>
            <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.5rem', color: '#1a2b4a', marginBottom: '1.25rem' }}>Road Construction</h2>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              We build and maintain durable roads that connect communities and boost trade across Africa. From highways to rural paths, our projects use weather-resistant materials to handle heavy traffic and seasonal challenges.
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: '#7a8a9a', fontSize: '0.88rem', lineHeight: 1.9 }}>
              <li>Enhanced mobility for businesses and residents.</li>
              <li>Sustainable techniques that minimize erosion and environmental harm.</li>
              <li>Turnkey service including surveying, paving, and signage.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bridge Construction */}
      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Design</p>
            <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.5rem', color: '#1a2b4a', marginBottom: '1.25rem' }}>Bridge Construction</h2>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Specializing in safe, efficient bridges that span rivers, valleys, and urban divides. Our awarded engineers ensure structures are built to last, using high-end materials and innovative engineering suited to Africa's diverse terrains.
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: '#7a8a9a', fontSize: '0.88rem', lineHeight: 1.9 }}>
              <li>Improved trade routes and emergency access.</li>
              <li>Eco-friendly designs that blend with natural landscapes.</li>
              <li>Full certification for safety and load-bearing standards.</li>
            </ul>
          </div>
          {/* 3-stacked images with teal accent */}
          <div style={{ position: 'relative', paddingBottom: '2rem', paddingRight: '2rem' }}>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '85px', height: '85px', background: 'rgba(43,191,191,0.45)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', position: 'relative', zIndex: 1 }}>
              <img src="https://72dev-btp.com/wp-content/uploads/2025/02/Incremental-Launching-Method-of-Bridge-Construction.webp" alt="Bridge" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
              <img src="https://72dev-btp.com/wp-content/uploads/2025/02/Incremental-Launching-Method-of-Bridge-Construction.webp" alt="Bridge" style={{ width: '100%', height: '120px', objectFit: 'cover', objectPosition: 'bottom' }} />
              <img src="https://72dev-btp.com/wp-content/uploads/2025/02/Incremental-Launching-Method-of-Bridge-Construction.webp" alt="Bridge" style={{ width: '100%', height: '120px', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Building Construction */}
      <section style={{ padding: '5rem 5%', background: '#f4f6f8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Production</p>
            <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.5rem', color: '#1a2b4a', marginBottom: '1.25rem' }}>Building Construction (New Addition)</h2>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              From residential homes to commercial complexes, we construct modern buildings with a focus on quality and sustainability. Ideal for Africa's growing urban areas, including eco-homes and public facilities.
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: '#7a8a9a', fontSize: '0.88rem', lineHeight: 1.9, textAlign: 'left', display: 'inline-block' }}>
              <li>High-end finishes that withstand heat, humidity, and wear.</li>
              <li>Energy-efficient features to reduce long-term costs.</li>
              <li>Turnkey management for hassle-free completion.</li>
            </ul>
          </div>
          <div style={{ position: 'relative', paddingBottom: '2rem', paddingRight: '2rem' }}>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '85px', height: '85px', background: 'rgba(43,191,191,0.45)' }} />
            <img src="https://72dev-btp.com/wp-content/uploads/2025/02/pexels-josegalant-14192787-1-scaled.jpg" alt="Building" style={{ width: '100%', height: '360px', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
          </div>
        </div>
      </section>

      {/* Infrastructure Development */}
      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ position: 'relative', paddingBottom: '2rem', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '85px', height: '85px', background: 'rgba(43,191,191,0.45)' }} />
            <img src="https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif" alt="Infrastructure" style={{ width: '100%', height: '280px', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
          </div>
          <div>
            <p style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Delivery</p>
            <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.5rem', color: '#1a2b4a', marginBottom: '1.25rem' }}>Infrastructure Development (New Addition)</h2>
            <p style={{ color: '#7a8a9a', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Comprehensive services for large-scale infrastructure like water systems, power grids, and public works. We handle everything from feasibility studies to implementation, emphasizing community impact.
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: '#7a8a9a', fontSize: '0.88rem', lineHeight: 1.9 }}>
              <li>Scalable solutions for government and private sectors.</li>
              <li>Local sourcing to support African economies.</li>
              <li>Certified processes for reliability and compliance.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose — teal-dark background split */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '400px' }}>
        <div style={{ background: '#2d5a5a', display: 'flex', alignItems: 'center', padding: '4rem 5%' }}>
          <div>
            <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.2, marginBottom: '1.5rem' }}>Why Choose Our Services?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              With 72dev-BTP, you're not just getting construction services—you're investing in Africa's future. Our eco-friendly approach, awarded expertise, and commitment to excellence ensure projects that deliver real value. We've helped clients across West and East Africa achieve their goals, from small-scale builds to major infrastructure overhauls.
            </p>
          </div>
        </div>
        <div>
          <img src="https://72dev-btp.com/wp-content/uploads/2025/02/pexels-glazun0v-5215270-1024x683.jpg" alt="Why us" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      {/* Ready CTA */}
      <section style={{ background: '#f4f6f8', padding: '8rem 5%', textAlign: 'center', position: 'relative' }}>
        <h2 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#1a2b4a', lineHeight: 1.2, marginBottom: '3rem' }}>
          Ready to Get Started? Fill Out Our Form for a Personalized Service Plan!
        </h2>
        <WaveBottom fill="#1e3a4a" />
      </section>

      {/* Speak to expert */}
      <section style={{ background: '#1e3a4a', padding: '5rem 5%', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(https://72dev-btp.com/wp-content/uploads/2016/01/plan-2-1024x784.jpg)`, backgroundSize: 'cover', opacity: 0.07 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Nunito Sans', color: 'white', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Would you like to <span style={{ color: '#2BBFBF' }}>speak to an expert?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>Our certified team is ready to help with your project across Africa.</p>
          <Link href="/contact" className="btn-teal">Request a consultation</Link>
        </div>
      </section>
    </>
  )
}

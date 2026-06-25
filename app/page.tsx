'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
  { bg: 'https://72dev-btp.com/wp-content/uploads/2025/02/pexels-josegalant-14192787-1-scaled.jpg', card: 'https://72dev-btp.com/wp-content/uploads/2020/09/image-13-1024x683.jpg', text: 'We handle each project with the same level of excellence and dedication.' },
  { bg: 'https://72dev-btp.com/wp-content/uploads/2025/02/pexels-glazun0v-5215270-1024x683.jpg', card: 'https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif', text: 'Building Africa infrastructure one project at a time.' },
  { bg: 'https://72dev-btp.com/wp-content/uploads/2024/08/AdobeStock_787268873-scaled-1-592x444.jpg', card: 'https://72dev-btp.com/wp-content/uploads/2025/02/Incremental-Launching-Method-of-Bridge-Construction.webp', text: 'Turnkey delivery from design to handover, on time and on budget.' },
]

const features = [
  { icon: '🏠', title: 'Turnkey delivery', desc: 'Complete projects from design to handover, on time and on budget.' },
  { icon: '🌿', title: 'Eco-friendly', desc: 'Sustainable builds using green materials to protect Africa environment.' },
  { icon: '💎', title: 'High-end materials', desc: 'Premium, durable resources sourced for harsh African climates.' },
  { icon: '💡', title: 'Top know-how', desc: 'Certified experts with 10+ years in African construction.' },
  { icon: '🏆', title: 'Awarded company', desc: 'Recognized for excellence in infrastructure awards across Africa.' },
  { icon: '✅', title: 'Certifications', desc: 'ISO-certified for quality and safety standards.' },
]

const services = [
  { img: 'https://72dev-btp.com/wp-content/uploads/2020/09/image-13-1024x683.jpg', title: 'Design quality', desc: 'Our innovative designs blend functionality with aesthetics, tailored for Africa diverse needs.' },
  { img: 'https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif', title: 'Road construction', desc: 'Specializing in durable roads that connect communities across Africa.' },
  { img: 'https://72dev-btp.com/wp-content/uploads/2025/02/Incremental-Launching-Method-of-Bridge-Construction.webp', title: 'Bridge Construction', desc: 'Expert bridge building that spans rivers and valleys, promoting trade and mobility.' },
]

const partners = [
  'https://72dev-btp.com/wp-content/uploads/2020/09/partner-02-e1582734691936.jpg',
  'https://72dev-btp.com/wp-content/uploads/2020/09/partner-01-e1582734705113.jpg',
  'https://72dev-btp.com/wp-content/uploads/2020/09/partner-03-e1582734671936.jpg',
  'https://72dev-btp.com/wp-content/uploads/2020/09/partner-05-e1582734603812.jpg',
]

export default function Home() {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', paddingTop: '65px' }}>
        {slides.map((s, i) => (
          <div key={i} style={{ position: 'absolute', inset: 0, backgroundImage: 'url(' + s.bg + ')', backgroundSize: 'cover', backgroundPosition: 'center', opacity: i === slide ? 1 : 0, transition: 'opacity 1.2s ease' }} />
        ))}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,40,0.55)' }} />
        <div style={{ position: 'relative', zIndex: 5, height: 'calc(100vh - 65px)', display: 'flex', alignItems: 'center', padding: '0 5%', maxWidth: '1280px', margin: '0 auto', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ width: '360px', flexShrink: 0 }}>
            <img src={slides[slide].card} alt="Project" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
            <Link href="/contact" className="btn-teal" style={{ display: 'block', textAlign: 'center' }}>REQUEST OUR BROCHURE</Link>
          </div>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <p style={{ fontFamily: 'Nunito Sans, sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: 'white', lineHeight: 1.4, maxWidth: '500px', marginBottom: '1.5rem' }}>
              {slides[slide].text}
            </p>
            <Link href="/contact" style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>Talk to an expert &rarr;</Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img src="https://72dev-btp.com/wp-content/uploads/2024/07/AdobeStock_755564704-scaled-1-592x444.jpg" alt="Construction" style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
            <div style={{ marginTop: '1rem' }}>
              <Link href="/contact" style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>Talk to an expert &rarr;</Link>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem 1rem' }}>
            {features.map((f, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#1a2b4a', marginBottom: '0.4rem' }}>{f.title}</h3>
                <p style={{ color: '#7a8a9a', fontSize: '0.75rem', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT BAND */}
      <section style={{ background: '#1e3a4a', padding: '5rem 5%' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <img src="https://72dev-btp.com/wp-content/uploads/2020/09/image-13-1024x683.jpg" alt="Building" style={{ width: '90%', height: '280px', objectFit: 'cover' }} />
          </div>
          <div style={{ background: 'white', padding: '2.5rem' }}>
            <Link href="/contact" className="btn-teal" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>REQUEST OUR BROCHURE</Link>
            <p style={{ color: '#7a8a9a', fontSize: '0.9rem', lineHeight: 1.8 }}>
              <strong style={{ color: '#1a2b4a' }}>As a leading construction company operating between African nations, 72dev-BTP brings top know-how and certifications to every project.</strong> We have completed award-winning works in road, bridge, and building construction, focusing on eco-friendly practices and turnkey delivery.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ width: '50px', height: '3px', background: '#2BBFBF', margin: '0 auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {services.map((s, i) => (
              <div key={i}>
                <img src={s.img} alt={s.title} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '1.25rem' }} />
                <h3 style={{ fontFamily: 'Nunito Sans, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#1a2b4a', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ color: '#2BBFBF', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ padding: '4rem 5%', background: '#f4f6f8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '50px', height: '3px', background: '#2BBFBF', margin: '0 auto 2rem' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            {partners.map((src, i) => (
              <img key={i} src={src} alt={'Partner ' + (i + 1)} style={{ height: '50px', width: 'auto', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.6 }} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1e3a4a', padding: '5rem 5%', textAlign: 'center' }}>
        <Link href="/contact" className="btn-teal">REQUEST A CONSULTATION</Link>
      </section>
    </>
  )
}

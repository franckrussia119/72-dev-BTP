'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { WaveBottom, WaveTop } from '@/components/Wave'

const slides = [
  {
    bg: 'https://72dev-btp.com/wp-content/uploads/2025/02/pexels-josegalant-14192787-1-scaled.jpg',
    card: 'https://72dev-btp.com/wp-content/uploads/2020/09/image-13-1024x683.jpg',
    text: '"We handle each project with the same level of excellence and dedication."',
  },
  {
    bg: 'https://72dev-btp.com/wp-content/uploads/2025/02/pexels-glazun0v-5215270-1024x683.jpg',
    card: 'https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif',
    text: '"Building Africa\'s infrastructure one project at a time."',
  },
  {
    bg: 'https://72dev-btp.com/wp-content/uploads/2024/08/AdobeStock_787268873-scaled-1-592x444.jpg',
    card: 'https://72dev-btp.com/wp-content/uploads/2025/02/Incremental-Launching-Method-of-Bridge-Construction.webp',
    text: '"Turnkey delivery — from design to handover, on time and on budget."',
  },
]

const features = [
  { icon: <HouseIcon />, title: 'Turnkey delivery', desc: '"Complete projects from design to handover, on time and on budget."' },
  { icon: <LeafIcon />, title: 'Eco-friendly', desc: '"Sustainable builds using green materials to protect Africa\'s environment."' },
  { icon: <DiamondIcon />, title: 'High-end materials', desc: '"Premium, durable resources sourced for harsh African climates."' },
  { icon: <BulbIcon />, title: 'Top know-how', desc: '"Certified experts with 10+ years in African construction."' },
  { icon: <AwardIcon />, title: 'Awarded company', desc: '"Recognized for excellence in infrastructure awards across Africa."' },
  { icon: <CertIcon />, title: 'Certifications', desc: '"ISO-certified for quality and safety standards."' },
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
      {/* ── HERO ── */}
      <section className="hero">
        {slides.map((s, i) => (
          <div key={i} className={`hero-slide ${i === slide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${s.bg})` }} />
        ))}
        <div className="hero-overlay" />

        <div className="hero-content" style={{ maxWidth: '1280px', width: '100%', margin: '0 auto' }}>
          {/* Floating image card */}
          <div className="hero-img-card">
            <img src={slides[slide].card} alt="Project" />
            <Link href="/contact" className="btn-teal" style={{ display: 'block', textAlign: 'center', marginTop: 0 }}>
              REQUEST OUR BROCHURE
            </Link>
          </div>

          {/* Text */}
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: 'Nunito Sans', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: 'white', lineHeight: 1.4, maxWidth: '500px' }}>
              {slides[slide].text}
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/contact" style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                Talk to an expert →
              </Link>
            </div>
          </div>
        </div>

        {/* Wave */}
        <WaveBottom fill="#ffffff" />
      </section>

      {/* ── FEATURES + IMAGE ── */}
      <section style={{ padding: '5rem 5% 4rem', background: 'white', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left: construction photo */}
          <div>
            <img
              src="https://72dev-btp.com/wp-content/uploads/2024/07/AdobeStock_755564704-scaled-1-592x444.jpg"
              alt="Construction"
              style={{ width: '100%', height: '380px', objectFit: 'cover' }}
            />
            <div style={{ marginTop: '1rem' }}>
              <Link href="/contact" style={{ color: '#2BBFBF', fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                Talk to an expert →
              </Link>
            </div>
          </div>

          {/* Right: 3x2 feature grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem 1rem' }}>
            {features.map((f, i) => (
              <div key={i} className="feature-item">
                <div className="feature-icon">{f.icon}</div>
                <h3 style={{ fontFamily: 'Nunito Sans', fontWeight: 700, fontSize: '0.9rem', color: '#1a2b4a', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: '#7a8a9a', fontSize: '0.78rem', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / BROCHURE SECTION ── dark navy with wave ── */}
      <section style={{ position: 'relative', background: 'white', paddingBottom: '0' }}>
        <WaveTop fill="#1e3a4a" />
        <div style={{ background: '#1e3a4a', padding: '2rem 5% 5rem', position: 'relative' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            {/* Floating house image */}
            <div style={{ position: 'relative' }}>
              <img
                src="https://72dev-btp.com/wp-content/uploads/2020/09/image-13-1024x683.jpg"
                alt="Modern building"
                style={{ width: '90%', height: '300px', objectFit: 'cover', position: 'relative', zIndex: 1 }}
              />
            </div>
            {/* Text + button */}
            <div style={{ background: 'white', padding: '2.5rem', maxWidth: '420px' }}>
              <Link href="/contact" className="btn-teal" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
                REQUEST OUR BROCHURE
              </Link>
              <p style={{ color: '#7a8a9a', fontSize: '0.9rem', lineHeight: 1.8 }}>
                <strong style={{ color: '#1a2b4a' }}>As a leading construction company operating between African nations, 72dev-BTP brings top know-how and certifications to every project.</strong> We've completed award-winning works in road, bridge, and building construction, focusing on eco-friendly practices and turnkey delivery. Our team of certified experts ensures high-quality results that drive economic growth and community development.
              </p>
            </div>
          </div>
          <WaveBottom fill="#ffffff" />
        </div>
      </section>

      {/* ── SERVICES CARDS ── */}
      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="teal-line center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              {
                img: 'https://72dev-btp.com/wp-content/uploads/2020/09/image-13-1024x683.jpg',
                title: 'Design quality',
                desc: '"Our innovative designs blend functionality with aesthetics, tailored for Africa\'s diverse needs—from urban high-rises to rural infrastructure. We use cutting-edge software for precise planning."',
                cta: '"Explore Our Design Portfolio – Contact Us to Start Your Project Today!"',
              },
              {
                img: 'https://72dev-btp.com/wp-content/uploads/2025/02/Highway_Construction.avif',
                title: 'Road construction',
                desc: '"Specializing in durable roads that connect communities across Africa. We handle everything from highways to rural paths, using weather-resistant materials to ensure longevity in challenging climates."',
                cta: '"Get a Quote for Road Construction – Let\'s Build Better Connections!"',
              },
              {
                img: 'https://72dev-btp.com/wp-content/uploads/2025/02/Incremental-Launching-Method-of-Bridge-Construction.webp',
                title: 'Bridge Construction',
                desc: '"Expert bridge building that spans rivers and valleys, promoting trade and mobility in Africa. Our awarded team uses high-end, eco-friendly techniques for safe, sustainable structures."',
                cta: '"Request a Bridge Project Consultation – Drive Your Vision Forward!"',
              },
            ].map((s, i) => (
              <div key={i}>
                <img src={s.img} alt={s.title} style={{ width: '100%', height: '220px', objectFit: 'cover', marginBottom: '1.25rem' }} />
                <h3 style={{ fontFamily: 'Nunito Sans', fontWeight: 800, fontSize: '1.15rem', color: '#1a2b4a', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ color: '#2BBFBF', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>{s.desc}</p>
                <p style={{ color: '#7a8a9a', fontSize: '0.82rem', lineHeight: 1.5 }}>{s.cta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECOND ABOUT / brochure 2 ── */}
      <section style={{ position: 'relative' }}>
        <WaveTop fill="#1e3a4a" />
        <div style={{ background: '#1e3a4a', padding: '3rem 5% 5rem', position: 'relative' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="https://72dev-btp.com/wp-content/uploads/2025/02/pexels-josegalant-14192787-1-scaled.jpg"
                alt="House"
                style={{ width: '85%', height: '320px', objectFit: 'cover', position: 'relative', zIndex: 1 }}
              />
            </div>
            <div style={{ background: 'white', padding: '2.5rem' }}>
              <Link href="/contact" className="btn-teal" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
                REQUEST OUR BROCHURE
              </Link>
              <p style={{ color: '#7a8a9a', fontSize: '0.9rem', lineHeight: 1.8 }}>
                As a leading construction company operating between African nations, 72dev-BTP brings top know-how and certifications to every project. We've completed award-winning works in road, bridge, and building construction, focusing on eco-friendly practices and turnkey delivery. Our team of certified experts ensures high-quality results that drive economic growth and community development.
              </p>
            </div>
          </div>
          <WaveBottom fill="#ffffff" />
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section style={{ padding: '4rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="teal-line center" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            {partners.map((src, i) => (
              <img key={i} src={src} alt={`Partner ${i + 1}`}
                style={{ height: '50px', width: 'auto', objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.6, transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { (e.target as HTMLImageElement).style.filter = 'none'; (e.target as HTMLImageElement).style.opacity = '1' }}
                onMouseLeave={e => { (e.target as HTMLImageElement).style.filter = 'grayscale(100%)'; (e.target as HTMLImageElement).style.opacity = '0.6' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / CONSULTATION ── */}
      <section style={{ position: 'relative' }}>
        <WaveTop fill="#1e3a4a" />
        <div style={{ background: '#1e3a4a', padding: '5rem 5%', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(https://72dev-btp.com/wp-content/uploads/2016/01/plan-2-1024x784.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.07 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Link href="/contact" className="btn-teal">REQUEST A CONSULTATION</Link>
          </div>
          <WaveBottom fill="#f4f6f8" />
        </div>
      </section>
    </>
  )
}

/* ── Teal SVG Icons ── */
function HouseIcon() {
  return <svg viewBox="0 0 64 64" fill="none" stroke="#2BBFBF" strokeWidth="2.5" style={{ width: 48, height: 48 }}>
    <path d="M8 32L32 8l24 24M16 24v28h32V24M24 60V44h16v16" />
  </svg>
}
function LeafIcon() {
  return <svg viewBox="0 0 64 64" fill="none" stroke="#2BBFBF" strokeWidth="2.5" style={{ width: 48, height: 48 }}>
    <path d="M52 12C52 12 52 40 24 48M16 56c4-12 12-20 20-24" />
    <circle cx="32" cy="36" r="4" />
  </svg>
}
function DiamondIcon() {
  return <svg viewBox="0 0 64 64" fill="none" stroke="#2BBFBF" strokeWidth="2.5" style={{ width: 48, height: 48 }}>
    <path d="M32 8l20 16-20 32L12 24z M12 24h40" />
  </svg>
}
function BulbIcon() {
  return <svg viewBox="0 0 64 64" fill="none" stroke="#2BBFBF" strokeWidth="2.5" style={{ width: 48, height: 48 }}>
    <circle cx="32" cy="26" r="14" />
    <path d="M26 48h12M28 54h8M32 12V8M20 18l-4-4M44 18l4-4" />
  </svg>
}
function AwardIcon() {
  return <svg viewBox="0 0 64 64" fill="none" stroke="#2BBFBF" strokeWidth="2.5" style={{ width: 48, height: 48 }}>
    <circle cx="32" cy="28" r="16" />
    <path d="M22 42l-6 14 16-6 16 6-6-14" />
    <path d="M32 20v8l5 3" />
  </svg>
}
function CertIcon() {
  return <svg viewBox="0 0 64 64" fill="none" stroke="#2BBFBF" strokeWidth="2.5" style={{ width: 48, height: 48 }}>
    <rect x="10" y="8" width="44" height="48" rx="2" />
    <path d="M20 24h24M20 32h24M20 40h14" />
    <circle cx="46" cy="44" r="8" />
    <path d="M42 44l3 3 5-5" />
  </svg>
}

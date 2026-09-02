import Link from 'next/link'
import type { Metadata } from 'next'
import { IMG } from '@/lib/images'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Founded in 2021, 72dev-BTP are architects of progress in Africa — a certified powerhouse in buildings, public works and infrastructure.',
}

const whyPoints = [
  'Many years of experience across African markets',
  'Commitment to sustainability and local job creation',
  'Proven track record with government and private clients',
  'Award-winning road, bridge and building construction',
]

const grid = [
  { img: IMG.designQuality, tag: 'Solutions', title: 'Turnkey Delivery' },
  { img: IMG.site, tag: 'Concept', title: 'Quality Design' },
  { img: IMG.road, tag: 'Production', title: 'High-End Materials' },
  { img: IMG.cityscape, tag: 'Concept', title: 'High Comfort' },
]

const values: [string, string][] = [
  ['Innovation', 'Cutting-edge technology for efficient, eco-friendly builds.'],
  ['Sustainability', 'Green practices that minimize environmental impact.'],
  ['Community Focus', 'Local hiring and partnerships that empower African communities.'],
  ['Integrity', 'Transparent processes on every single project.'],
  ['Excellence', 'ISO certifications and awards for quality and safety.'],
]

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: `url(${IMG.site})` }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <div className="teal-bar" />
          <div>
            <h1 className="ph-title">About Us</h1>
            <div className="breadcrumb"><Link href="/">Home</Link> &nbsp;/&nbsp; About</div>
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <section className="section dark center">
        <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">Our Story</span></div>
        <div className="s-title">Architects of Progress in Africa</div>
        <div className="s-sub" style={{ marginBottom: 20 }}>
          At 72dev-BTP, we are more than a construction company. Founded in 2021 with a vision to tackle
          the continent&apos;s infrastructure challenges, we have grown from a small team of passionate
          engineers to a certified powerhouse in buildings, public works and infrastructure. Operating
          across key African regions, we specialize in projects that connect people, boost trade and
          promote sustainability.
        </div>
        <div className="s-sub">
          From humble beginnings in Cameroon, we have expanded to deliver turnkey projects across borders,
          earning awards for excellence in road construction, bridge building and eco-friendly development.
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section mid">
        <div className="two-col">
          <div>
            <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">Why 72dev-BTP</span></div>
            <div className="s-title">Building Excellence<br />Across Africa</div>
            <div className="s-sub">
              As a leading construction company, 72dev-BTP brings top know-how and certifications to
              every project. We have completed award-winning works in road, bridge and building construction.
            </div>
            <div className="feature-list">
              {whyPoints.map((p) => (
                <div className="feature-item on-dark" key={p}>
                  <div className="f-tick"><i className="ti ti-check" /></div>{p}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {grid.map((g) => (
              <div className="b" style={{ height: 220 }} key={g.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.img} alt={g.title} loading="lazy" />
                <div className="b-ov" style={{ background: 'linear-gradient(to top, rgba(8,15,30,0.9), transparent 65%)' }} />
                <div className="b-label">
                  <span className="b-cat">{g.tag}</span>
                  <span className="b-name">{g.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="section dark">
        <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">What Drives Us</span></div>
        <div className="s-title">Mission &amp; Values</div>
        <div className="two-col top" style={{ marginTop: 40 }}>
          <div className="img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.infra} alt="72dev-BTP mission" loading="lazy" style={{ height: 460 }} />
          </div>
          <div>
            <h3 style={{ color: 'var(--accent)', fontSize: 20, fontWeight: 500, marginBottom: 12 }}>Our Mission</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, fontSize: 15, marginBottom: 34 }}>
              To provide world-class construction services that drive Africa&apos;s sustainable
              development, using high-end materials and top know-how on every project.
            </p>
            <h3 style={{ color: 'white', fontSize: 20, fontWeight: 500, marginBottom: 18 }}>Core Values</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {values.map(([k, v]) => (
                <div key={k} style={{ padding: '14px 0', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14 }}>{k}</span>
                  <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}> — {v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-wrap">
        <div className="cta">
          <h2>Speak to an <span>Expert</span></h2>
          <p>Our certified team is ready to assist with your construction project anywhere in Africa.</p>
          <div className="cta-btns">
            <Link href="/contact" className="cta-btn-fill">Request a Consultation</Link>
            <Link href="/services" className="cta-btn-outline">Explore Services</Link>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'
import { IMG } from '@/lib/images'

const stats = [
  { n: '150+', l: 'Projects Completed' },
  { n: '10+', l: 'Years of Excellence' },
  { n: '50+', l: 'Expert Engineers' },
  { n: '98%', l: 'Client Satisfaction' },
]

const services = [
  { img: IMG.building, name: 'Building Construction', desc: 'Residential and commercial buildings' },
  { img: IMG.road, name: 'Road Construction', desc: 'Durable roads and civil works' },
  { img: IMG.bridge, name: 'Bridge Construction', desc: 'Spanning rivers and valleys' },
  { img: IMG.infra, name: 'Infrastructure', desc: 'Water, power and public works' },
  { img: IMG.designQuality, name: 'Design Quality', desc: 'Functional, striking architecture' },
  { img: IMG.site, name: 'Turnkey Delivery', desc: 'From concept to full handover' },
]

const projects = [
  { img: IMG.building, cat: 'Building', name: 'Commercial Complex — Douala', tall: true },
  { img: IMG.road, cat: 'Infrastructure', name: 'Highway Project' },
  { img: IMG.bridge, cat: 'Bridge', name: 'River Crossing' },
  { img: IMG.cityscape, cat: 'Urban', name: 'City Development' },
  { img: IMG.designQuality, cat: 'Residential', name: 'Villa Estate' },
]

const process = [
  { n: '01', t: 'Consultation', s: 'Free site visit and needs assessment' },
  { n: '02', t: 'Design', s: 'Architectural plans and engineering' },
  { n: '03', t: 'Build', s: 'Precision construction on schedule' },
  { n: '04', t: 'Handover', s: 'Final inspection and full warranty' },
]

const why = [
  { t: 'Turnkey Delivery', d: 'Complete projects from design to handover, on time and on budget — nothing left to chance.' },
  { t: 'Eco-Friendly', d: 'Sustainable builds using green materials to protect Africa\u2019s environment for generations.' },
  { t: 'High-End Materials', d: 'Premium, durable resources sourced specifically for harsh African climates.' },
  { t: 'Top Know-How', d: 'Certified experts with 10+ years leading construction across African markets.' },
  { t: 'Awarded Company', d: 'Recognized for excellence in infrastructure and road construction across the continent.' },
  { t: 'Certifications', d: 'ISO-certified for quality and safety standards on every single project we deliver.' },
]

const testimonials = [
  {
    text: '72dev-BTP delivered our commercial complex ahead of schedule and under budget. The quality is exceptional — every detail handled with precision and professionalism.',
    av: 'AM', name: 'Alain Mbarga', role: 'Director, Mbarga Group — Douala',
  },
  {
    text: 'Our villa is exactly what we dreamed. The team was transparent about costs at every stage, and the finish quality rivals anything you would see in Europe.',
    av: 'SN', name: 'Sophie Nkeng', role: 'Private Client — Yaoundé',
  },
]

const partners = [IMG.partner1, IMG.partner2, IMG.partner3, IMG.partner4]

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* STATS */}
      <div className="stats-wrap">
        <div className="stats">
          {stats.map((s) => (
            <div className="stat-cell" key={s.l}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section dark" style={{ paddingTop: 40 }}>
        <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">What We Build</span></div>
        <div className="s-title">Our Core Services</div>
        <div className="s-sub">World-class solutions across every construction sector in Cameroon and West Africa.</div>
        <div className="services-grid">
          {services.map((s, i) => (
            <Link href="/services" className="svc" key={s.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.name} loading="lazy" />
              <div className="svc-ov" />
              <div className="svc-arrow"><i className="ti ti-arrow-up-right" /></div>
              <div className="svc-body">
                <div className="svc-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="svc-name">{s.name}</div>
                <div className="svc-desc">{s.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section light">
        <div className="two-col">
          <div className="img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.site} alt="72dev-BTP team at work" loading="lazy" />
            <div className="img-badge">
              <div className="img-badge-n">10+</div>
              <div className="img-badge-l">Years Building Africa</div>
            </div>
          </div>
          <div>
            <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">Who We Are</span></div>
            <div className="s-title">Architects of<br />Progress in Africa.</div>
            <div className="s-sub">
              Founded in 2021, 72dev-BTP has grown from a small team of passionate engineers to a
              certified powerhouse in buildings, public works and infrastructure — delivering
              turnkey projects that connect people, boost trade and promote sustainability.
            </div>
            <div className="feature-list">
              {['ISO-certified construction standards', 'Fully licensed and insured', 'On-time and on-budget delivery', 'Eco-friendly, turnkey approach'].map((f) => (
                <div className="feature-item" key={f}>
                  <div className="f-tick"><i className="ti ti-check" /></div>{f}
                </div>
              ))}
            </div>
            <Link href="/about" className="learn-more"><div className="lm-line" />Learn Our Story</Link>
          </div>
        </div>
      </section>

      {/* PROJECTS BENTO */}
      <section className="section dark">
        <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">Our Work</span></div>
        <div className="s-title">Featured Projects</div>
        <div className="bento" style={{ marginTop: 52 }}>
          {projects.map((p, i) => (
            <Link href="/portfolio" className={'b' + (p.tall ? ' tall' : '')} key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.name} loading="lazy" />
              <div className="b-ov" />
              <div className="b-tag">View Project</div>
              <div className="b-label">
                <span className="b-cat">{p.cat}</span>
                <span className="b-name">{p.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section mid">
        <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">How We Work</span></div>
        <div className="s-title">From Concept to Completion</div>
        <div className="process-row">
          {process.map((p) => (
            <div className="proc" key={p.n}>
              <div className="proc-num">{p.n}</div>
              <div className="proc-title">{p.t}</div>
              <div className="proc-sub">{p.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="section dark">
        <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">Why Choose Us</span></div>
        <div className="s-title">Built Different. Built Better.</div>
        <div className="why-grid">
          {why.map((w, i) => (
            <div className="why-card" key={w.t}>
              <div className="why-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="why-title">{w.t}</div>
              <div className="why-desc">{w.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section dark" style={{ paddingTop: 0 }}>
        <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">Client Reviews</span></div>
        <div className="s-title">What Our Clients Say</div>
        <div className="testimonial-strip">
          {testimonials.map((t) => (
            <div className="testi" key={t.name}>
              <div className="stars">{Array.from({ length: 5 }).map((_, i) => <div className="star" key={i} />)}</div>
              <div className="quote-mark">&ldquo;</div>
              <div className="testi-text">{t.text}</div>
              <div className="testi-author">
                <div className="testi-av">{t.av}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-wrap">
        <div className="cta">
          <h2>Ready to Build<br /><span>Your Vision?</span></h2>
          <p>Free site consultation and a detailed quote from our expert team. No obligation whatsoever.</p>
          <div className="cta-btns">
            <Link href="/contact" className="cta-btn-fill">Get a Free Quote</Link>
            <Link href="/portfolio" className="cta-btn-outline">View All Projects</Link>
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <section className="section dark center" style={{ paddingTop: 0 }}>
        <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">Trusted By</span></div>
        <div className="s-title" style={{ fontSize: 28, marginBottom: 40 }}>Our Partners</div>
        <div className="partners">
          {partners.map((p, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p} alt={`Partner ${i + 1}`} key={i} loading="lazy" />
          ))}
        </div>
      </section>
    </>
  )
}

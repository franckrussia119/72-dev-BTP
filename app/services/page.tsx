import Link from 'next/link'
import type { Metadata } from 'next'
import { IMG } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Road, bridge and building construction plus large-scale infrastructure development — turnkey delivery across Cameroon and West Africa.',
}

const iconGrid = [
  { label: 'Project Design', icon: 'ti-bulb' },
  { label: 'Development', icon: 'ti-building-skyscraper' },
  { label: 'Contractor Services', icon: 'ti-clipboard-list' },
  { label: 'Interior Painting', icon: 'ti-paint' },
  { label: 'Electrical', icon: 'ti-bolt' },
  { label: 'Plumbing', icon: 'ti-droplet' },
  { label: 'Carpentry', icon: 'ti-tool' },
  { label: 'Flooring', icon: 'ti-layout-grid' },
  { label: 'Renovations', icon: 'ti-hammer' },
]

const details = [
  {
    label: 'Design', title: 'Road Construction', img: IMG.road,
    desc: 'We build and maintain durable roads that connect communities and boost trade across Africa. From highways to rural paths, our projects use weather-resistant materials.',
    list: ['Enhanced mobility for businesses and residents', 'Sustainable techniques that minimize erosion', 'Turnkey service including surveying, paving and signage'],
  },
  {
    label: 'Engineering', title: 'Bridge Construction', img: IMG.bridge,
    desc: 'Specializing in safe, efficient bridges that span rivers, valleys and urban divides. Our awarded engineers ensure structures built to last.',
    list: ['Improved trade routes and emergency access', 'Eco-friendly designs that blend with landscapes', 'Full certification for safety and load-bearing standards'],
  },
  {
    label: 'Production', title: 'Building Construction', img: IMG.building,
    desc: 'From residential homes to commercial complexes, we construct modern buildings with a focus on quality, comfort and sustainability.',
    list: ['High-end finishes that withstand heat and humidity', 'Energy-efficient features that reduce long-term costs', 'Turnkey management for hassle-free completion'],
  },
  {
    label: 'Delivery', title: 'Infrastructure Development', img: IMG.infra,
    desc: 'Comprehensive services for large-scale infrastructure like water systems, power grids and public works — from feasibility to implementation.',
    list: ['Scalable solutions for government and private sectors', 'Local sourcing to support African economies', 'Certified processes for reliability and compliance'],
  },
]

export default function Services() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: `url(${IMG.road})` }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <div className="teal-bar" />
          <div>
            <h1 className="ph-title">Services</h1>
            <div className="breadcrumb"><Link href="/">Home</Link> &nbsp;/&nbsp; Services</div>
          </div>
        </div>
      </div>

      {/* INTRO + ICON GRID */}
      <section className="section dark">
        <div className="two-col top">
          <div>
            <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">Full-Service</span></div>
            <div className="s-title">Every Detail of<br />Your Project, Handled</div>
            <div className="s-sub">
              As a leading construction company operating between African nations, 72dev-BTP combines
              global standards with local expertise. We specialize in turnkey delivery — every service
              handled from initial consultation to final handover.
            </div>
            <Link href="/contact" className="btn-fill">Talk to an Expert</Link>
          </div>
          <div className="icon-grid">
            {iconGrid.map((g) => (
              <div className="icon-cell" key={g.label}>
                <div className="icon-cell-mark"><i className={'ti ' + g.icon} style={{ fontSize: 20 }} /></div>
                <div className="icon-cell-label">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL ROWS */}
      <section className="section mid">
        {details.map((d, i) => {
          const flip = i % 2 === 1
          return (
            <div className={'detail-row' + (flip ? ' rev' : '')} key={d.title}>
              {flip ? (
                <>
                  <div>
                    <div className="detail-label">{d.label}</div>
                    <div className="detail-title">{d.title}</div>
                    <p className="detail-desc">{d.desc}</p>
                    <ul className="detail-list">
                      {d.list.map((l) => <li key={l}><span className="dot" />{l}</li>)}
                    </ul>
                  </div>
                  <div className="detail-img right">
                    <div className="accent-square" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={d.img} alt={d.title} loading="lazy" />
                  </div>
                </>
              ) : (
                <>
                  <div className="detail-img">
                    <div className="accent-square" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={d.img} alt={d.title} loading="lazy" />
                  </div>
                  <div>
                    <div className="detail-label">{d.label}</div>
                    <div className="detail-title">{d.title}</div>
                    <p className="detail-desc">{d.desc}</p>
                    <ul className="detail-list">
                      {d.list.map((l) => <li key={l}><span className="dot" />{l}</li>)}
                    </ul>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </section>

      {/* WHY OUR SERVICES */}
      <section className="section dark">
        <div className="two-col">
          <div>
            <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">The 72dev Difference</span></div>
            <div className="s-title">Why Choose<br />Our Services?</div>
            <div className="s-sub">
              With 72dev-BTP, you are not just getting construction services — you are investing in
              Africa&apos;s future. Our eco-friendly approach and commitment to excellence ensure projects
              that deliver real, lasting value.
            </div>
            <Link href="/contact" className="btn-fill">Get Started</Link>
          </div>
          <div className="img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.infra} alt="Why choose our services" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-wrap">
        <div className="cta">
          <h2>Ready to <span>Get Started?</span></h2>
          <p>Fill out our form for a personalized service plan built around your project.</p>
          <div className="cta-btns">
            <Link href="/contact" className="cta-btn-fill">Contact Us Now</Link>
            <Link href="/portfolio" className="cta-btn-outline">See Our Work</Link>
          </div>
        </div>
      </div>
    </>
  )
}

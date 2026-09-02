'use client'
import { useState } from 'react'
import Link from 'next/link'
import { IMG } from '@/lib/images'

type Cat = 'All' | 'Road' | 'Building' | 'Bridge' | 'Infrastructure'

const projects: { img: string; cat: Exclude<Cat, 'All'>; name: string; wide?: boolean }[] = [
  { img: IMG.building, cat: 'Building', name: 'Commercial Complex — Douala', wide: true },
  { img: IMG.road, cat: 'Road', name: 'National Highway Extension' },
  { img: IMG.bridge, cat: 'Bridge', name: 'Incremental Launch Bridge' },
  { img: IMG.designQuality, cat: 'Building', name: 'Residential Villa Estate' },
  { img: IMG.infra, cat: 'Infrastructure', name: 'Urban Public Works' },
  { img: IMG.cityscape, cat: 'Infrastructure', name: 'City Development Program', wide: true },
  { img: IMG.site, cat: 'Building', name: 'Mixed-Use Development' },
  { img: IMG.road, cat: 'Road', name: 'Rural Road Network' },
]

const tabs: Cat[] = ['All', 'Road', 'Building', 'Bridge', 'Infrastructure']

export default function Portfolio() {
  const [filter, setFilter] = useState<Cat>('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.cat === filter)

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: `url(${IMG.site})` }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <div className="teal-bar" />
          <div>
            <h1 className="ph-title">Portfolio</h1>
            <div className="breadcrumb"><Link href="/">Home</Link> &nbsp;/&nbsp; Portfolio</div>
          </div>
        </div>
      </div>

      <section className="section dark">
        <div className="s-eyebrow"><div className="s-line" /><span className="s-tag">Selected Work</span></div>
        <div className="s-title">Projects Across Africa</div>
        <div className="s-sub">
          Building durable connections across African nations — highways, bridges, buildings and
          large-scale infrastructure engineered for Africa&apos;s unique terrain and climate.
        </div>

        <div className="filter-tabs">
          {tabs.map((t) => (
            <button
              key={t}
              className={'filter-tab' + (filter === t ? ' active' : '')}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {shown.map((p, i) => (
            <div className={'pf' + (p.wide ? ' wide' : '')} key={p.name + i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.name} loading="lazy" />
              <div className="pf-ov" />
              <div className="pf-label">
                <span className="pf-cat">{p.cat}</span>
                <span className="pf-name">{p.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-wrap">
        <div className="cta">
          <h2>Have a <span>Project in Mind?</span></h2>
          <p>Let our award-winning team bring your vision to life, on time and on budget.</p>
          <div className="cta-btns">
            <Link href="/contact" className="cta-btn-fill">Start Your Project</Link>
            <Link href="/services" className="cta-btn-outline">Our Services</Link>
          </div>
        </div>
      </div>
    </>
  )
}

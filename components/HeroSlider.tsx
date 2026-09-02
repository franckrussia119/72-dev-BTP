'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { IMG } from '@/lib/images'

const slides = [
  {
    bg: IMG.slide1Bg,
    card: IMG.slide1Card,
    eyebrow: 'Premium Construction Since 2021',
    title: 'We Build',
    titleStrong: 'What Others Dream',
    lead: 'We handle each project with the same level of excellence and dedication — premium construction across Cameroon and West Africa.',
  },
  {
    bg: IMG.slide2Bg,
    card: IMG.slide2Card,
    eyebrow: 'Infrastructure Specialists',
    title: 'Building Africa',
    titleStrong: 'One Project at a Time',
    lead: 'Durable roads, bridges and civil works engineered for Africa\u2019s terrain — connecting communities and boosting trade.',
  },
  {
    bg: IMG.slide3Bg,
    card: IMG.slide3Card,
    eyebrow: 'Turnkey Delivery',
    title: 'From Design',
    titleStrong: 'to Handover',
    lead: 'Turnkey delivery from concept to completion, on time and on budget, with award-winning quality and certifications.',
  },
]

export default function HeroSlider() {
  const [slide, setSlide] = useState(0)
  const total = slides.length

  const go = useCallback((i: number) => setSlide(((i % total) + total) % total), [total])

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % total), 5500)
    return () => clearInterval(t)
  }, [total])

  const s = slides[slide]

  return (
    <section className="hero">
      {slides.map((sl, i) => (
        <div
          key={i}
          className={'hero-slide' + (i === slide ? ' active' : '')}
          style={{ backgroundImage: `url(${sl.bg})` }}
        />
      ))}
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-card" key={'card-' + slide}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.card} alt={s.titleStrong} className="hero-card-img reveal" />
          <Link href="/contact" className="hero-card-btn">Request Our Brochure</Link>
        </div>

        <div className="hero-text" key={'text-' + slide}>
          <div className="hero-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">{s.eyebrow}</span>
          </div>
          <h1>
            {s.title}
            <strong>{s.titleStrong}</strong>
          </h1>
          <p className="hero-lead">{s.lead}</p>
          <div className="hero-actions">
            <Link href="/portfolio" className="btn-fill">View Our Projects</Link>
            <Link href="/contact" className="btn-ghost">
              Talk to an Expert <span className="arrow-line" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={'hdot' + (i === slide ? ' on' : '')}
            onClick={() => go(i)}
          />
        ))}
      </div>

      <div className="hero-num">
        <strong>{String(slide + 1).padStart(2, '0')}</strong>
        &nbsp;/&nbsp;{String(total).padStart(2, '0')}
      </div>
    </section>
  )
}

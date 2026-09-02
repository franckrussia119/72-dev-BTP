import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <div className="logo-mark"><span>72</span></div>
            <span className="logo-name">72dev-btp</span>
          </div>
          <div className="ft-desc">
            Premium construction, infrastructure and engineering services across
            Cameroon and West Africa. Building brighter futures for Africa since 2021.
          </div>
        </div>
        <div>
          <div className="ft-h">Services</div>
          <Link href="/services" className="ft-link">Road Construction</Link>
          <Link href="/services" className="ft-link">Bridge Construction</Link>
          <Link href="/services" className="ft-link">Building Construction</Link>
          <Link href="/services" className="ft-link">Infrastructure</Link>
          <Link href="/services" className="ft-link">Renovation</Link>
        </div>
        <div>
          <div className="ft-h">Company</div>
          <Link href="/about" className="ft-link">About Us</Link>
          <Link href="/portfolio" className="ft-link">Portfolio</Link>
          <Link href="/services" className="ft-link">Our Services</Link>
          <Link href="/contact" className="ft-link">Contact</Link>
        </div>
        <div>
          <div className="ft-h">Contact</div>
          <span className="ft-link">Yaoundé, Cameroon</span>
          <a href="tel:+237650000000" className="ft-link">+237 650 000 000</a>
          <a href="mailto:info@72dev-btp.com" className="ft-link">info@72dev-btp.com</a>
          <span className="ft-link">Mon — Sat: 8am to 6pm</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="ft-copy">© 2021 — {new Date().getFullYear()} 72dev-BTP SARL. All rights reserved.</span>
        <span className="ft-badge">ISO CERTIFIED</span>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { logo } from '../data/siteData'
import { useContent } from '../contexts/ContentContext'

function AppLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { siteName, tagline, navItems, footerText, footerCtaTitle, footerCtaText } = useContent()

  return (
    <main>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Safetrox home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">
            <img src={logo} alt="Safetrox" />
          </span>
          <span className="brand-copy"><span>{siteName}</span><small>{tagline}</small></span>
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.path} end={item.path === '/'}>
              {item.path === '/services' ? 'Course Enquiry' : item.name}
            </NavLink>
          ))}
        </nav>

        <Link className="header-action" to="/contact">Contact Enquiry</Link>

        {menuOpen ? (
          <nav className="mobile-menu-panel" aria-label="Mobile navigation" data-open="true">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} end={item.path === '/'} onClick={() => setMenuOpen(false)}>
                {item.path === '/services' ? 'Course Enquiry' : item.name}
              </NavLink>
            ))}
            {!navItems.some((item) => item.path === '/admin') ? <NavLink to="/admin" onClick={() => setMenuOpen(false)}>Admin</NavLink> : null}
            <Link className="mobile-contact-enquiry" to="/contact" onClick={() => setMenuOpen(false)}>Contact Enquiry</Link>
          </nav>
        ) : null}
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-brand-block">
          <div className="brand">
            <span className="brand-mark">
              <img src={logo} alt="Safetrox" />
            </span>
            <span className="brand-copy"><span>{siteName}</span><small>{tagline}</small></span>
          </div>
          <p>{footerText}</p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <Link to="/about">About Safetrox</Link>
            <Link to="/about">Why Choose Safetrox</Link>
            <Link to="/services">Services</Link>
            <Link to="/recommendations">Recommendations</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admin">Admin</Link>
          </div>
          <div>
            <h3>Support</h3>
            <a href="https://wa.me/918617750510" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:safetroxhse@gmail.com">Email</a>
            <a href="tel:+918617750510">Call Now</a>
          </div>
        </div>

        <div className="footer-cta">
          <h3>{footerCtaTitle}</h3>
          <p>{footerCtaText}</p>
          <Link className="primary-button" to="/services">
            Book a Session <span aria-hidden="true">→</span>
          </Link>
        </div>
      </footer>
    </main>
  )
}

export default AppLayout

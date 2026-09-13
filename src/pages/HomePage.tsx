import { ArrowRight, Award, BadgeDollarSign, BookOpenCheck, CheckCircle2, ClipboardCheck, Globe2, Headphones, Mail, MapPin, MessageCircle, Send, ShieldCheck, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { aboutPhoto, chooseSafetrox, founderCredentials, gallery, heroServices, homePhoto, safetyNews } from '../data/siteData'
import { useContent } from '../contexts/ContentContext'

const WEB3FORMS_ACCESS_KEY = '0f0ac6aa-d9f6-4327-a777-feb95aec6e24'

export default function HomePage() {
  const { heroTitle, heroText, heroImage, founderName, aboutHeading, aboutText, services, testimonials } = useContent()
  const [contactResult, setContactResult] = useState('')
  const [isContactSending, setIsContactSending] = useState(false)

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsContactSending(true)
    setContactResult('')

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'New Safetrox contact inquiry')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      setContactResult(data.success ? 'Message sent successfully. We will get back to you soon.' : 'Unable to send your message. Please try again.')
      if (data.success) form.reset()
    } catch {
      setContactResult('Unable to send your message. Please check your connection and try again.')
    } finally {
      setIsContactSending(false)
    }
  }

  return (
    <>
      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">HSE training and consultancy </p>
            <h1>{heroTitle}</h1>
          <p className="hero-text">{heroText}</p>
          <div className="service-strip" aria-label="Safetrox core services">
            {heroServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="primary-button" to="/services">
              Book Training <ArrowRight size={18} />
            </Link>
            <Link className="secondary-button" to="/contact">
              Contact Us
            </Link>
            <Link className="secondary-button" to="/about">
              About Safetrox
            </Link>
          </div>
        </div>

        <div
          className="hero-panel"
          aria-label="Safetrox founder profile"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(8, 24, 22, 0.84), rgba(8, 24, 22, 0.54)), url(${heroImage || homePhoto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="founder-avatar">
            <ShieldCheck size={40} />
          </div>
          <div className="panel-top">
            <div>
              <p>Founder & Lead Trainer</p>
              <h2>{founderName}</h2>
            </div>
          </div>
          <div className="credential-list">
            {founderCredentials.map((credential) => (
              <span key={credential}>
                <CheckCircle2 size={18} /> {credential}
              </span>
            ))}
          </div>
          <div className="mini-grid">
            <div>
              <Award size={24} />
              <strong>Reach ADNOC (Oil &amp; Gas) Experience</strong>
            </div>
            <div>
              <Globe2 size={24} />
              <strong>UAE & India</strong>
              <span>Project exposure</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="section-heading about-heading">
          <p className="eyebrow">About Safetrox</p>
          <h2>{aboutHeading}</h2>
          <p>{aboutText}</p>
        </div>

        <div className="split-section about-modern-section">
          <div className="about-copy">
            <div className="about-copy-card">
              <span className="about-card-badge">Our mission</span>
              <p>
                Our focus is simple: deliver clear, practical education in Safety Diploma,
                Quiz Sessions, and HSE Interview Preparation so learners can grow with confidence.
              </p>
              <p>
                Whether you are preparing for a safety career, improving workplace readiness,
                or strengthening your team’s HSE awareness, Safetrox offers a supportive and professional learning experience.
              </p>
            </div>
            <div className="about-highlights-grid">
              <div className="about-spot">
                <strong>Practical learning</strong>
                <span>Real industrial scenarios and disciplined HSE coaching.</span>
              </div>
              <div className="about-spot">
                <strong>Career-focused support</strong>
                <span>Clear guidance for interviews, skills, and professional growth.</span>
              </div>
            </div>
          </div>
          <div className="about-card" style={{ backgroundImage: `linear-gradient(135deg, rgba(4, 20, 18, 0.84), rgba(7, 44, 38, 0.62)), url(${aboutPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <span className="about-card-badge">Why learners choose us</span>
            <div className="about-feature-list">
              <div className="about-feature-item">
                <BookOpenCheck size={20} />
                <div>
                  <strong>Structured learning</strong>
                  <span>Step-by-step support for serious HSE development.</span>
                </div>
              </div>
              <div className="about-feature-item">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Practical preparation</strong>
                  <span>Training built around real responsibilities and workplace scenarios.</span>
                </div>
              </div>
              <div className="about-feature-item">
                <ShieldCheck size={20} />
                <div>
                  <strong>Career-focused support</strong>
                  <span>Guidance for exams, interviews, and professional growth.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="section-heading">
          <p className="eyebrow">Why Choose Safetrox</p>
        </div>

        <div className="why-grid">
          {chooseSafetrox.map((reason) => {
            const Icon = reason.icon

            return (
              <article
                key={reason.title}
                className="feature-card compact-card why-tile"
                style={{
                  backgroundImage: `url(${reason.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="why-tile-icon">
                  <Icon size={22} />
                </div>

                <div className="why-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Three focused training programs built for HSE learners and professionals.</h2>
        </div>
        <div className="program-grid">
          {services.map((service) => (
            <article className={`program-card${service.link ? ' program-card--interactive' : ''}`} key={service.title}>
              <div className="program-card-top">
                <span className="program-card-badge">{service.link ? 'Interactive' : 'Training'}</span>
                <h3>{service.title}</h3>
              </div>
              <p>{service.text}</p>
              <div className="program-card-tags">
                {service.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              {service.details ? (
                <div className="program-card-details">
                  <strong className="program-card-premium-label"><BadgeDollarSign size={19} /> Premium Course</strong>
                  <span className="program-card-price-note">You will know the price after filling the enquiry form.</span>
                  <ul>
                    <li>Classes: {service.details.duration}</li>
                    <li>Schedule: {service.details.schedule}</li>
                    <li>Format: {service.details.format}</li>
                    {service.details.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {service.link ? (
                <Link className="program-card-action" to={service.link}>
                  {service.actionLabel} <ArrowRight size={16} />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="section-heading">
          <p className="eyebrow">Recommendations</p>
          <h2>Recommendations from colleagues, peers, and professional partners.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-card-shell">
                <a className="testimonial-link" href={testimonial.link} target="_blank" rel="noreferrer">
                  <img src={testimonial.image} alt={testimonial.name} />
                </a>
                <div className="testimonial-content">
                  <div className="testimonial-profile">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                  <div className="stars" aria-label="Five star review">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p>{testimonial.quote}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">Gallery</p>
          <h2>Moments from Safetrox training, site activities, and professional learning.</h2>
        </div>

        <div className="gallery-grid">
          {gallery.map((item) => (
            <div
              key={item.title}
              className="gallery-item"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section news-section" id="news">
        <div className="section-heading">
          <p className="eyebrow">Safety news</p>
          <h2>Recent workplace safety and occupational health developments from trusted global sources.</h2>
          <p>
            These updates reflect current trends in safety awareness, enforcement,
            training, and industry preparedness.
          </p>
        </div>
        <div className="news-grid">
          {safetyNews.map((item) => (
            <article className="news-card" key={item.title}>
              <div className="news-meta">
                <span>{item.source}</span>
                <span>{item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                Read more <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact Safetrox</p>
          <h2>Book training, request consultancy, or send a corporate inquiry.</h2>
          <p>
            Reach Mohammed Shadab Sami directly for Advance HSE Diploma level training,
            career consultancy, HSE Interview Preparation, and NEBOSH preparation.
          </p>
          <div className="contact-socials">
            <a href="https://wa.me/918617750510" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mohammadshadabsami/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Globe2 size={20} />
            </a>
            <a href="mailto:safetroxhse@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="contact-panel" aria-label="Safetrox contact form">
          <div className="contact-panel-top">
            <span className="contact-icon">
              <Headphones size={26} />
            </span>
            <div>
              <p>Direct response</p>
              <strong>Training & consultancy desk</strong>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={5} placeholder="Tell us about your training or consultancy needs" required />
            </label>
            <button type="submit" className="primary-button" disabled={isContactSending}>
              {isContactSending ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
          {contactResult ? <p className="contact-form-status" role="status">{contactResult}</p> : null}
          <div className="contact-meta">
            <span>
              <MapPin size={18} /> UAE + India support
            </span>
            <span>
              <ClipboardCheck size={18} /> Corporate inquiries welcome
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

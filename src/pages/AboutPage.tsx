import { BookOpenCheck, CheckCircle2, ShieldCheck } from 'lucide-react'

import { aboutPhoto, chooseSafetrox } from '../data/siteData'

export default function AboutPage() {
  return (
    <section className="section page-shell">
      <div className="section-heading about-heading">
        <p className="eyebrow">About Safetrox</p>
        <h2>We help learners and teams build confidence through practical HSE training and career-ready preparation.</h2>
        <p>
          Safetrox brings together modern learning methods, real-world safety insight,
          and professionally structured courses for individuals and organizations.
        </p>
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
              Whether you are preparing for certification, improving workplace readiness,
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
              <span>Clear guidance for interviews, certifications, and growth.</span>
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

      <section className="section" id="why">
        <div className="section-heading">
          <p className="eyebrow">Why choose Safetrox</p>
          <h2>Practical HSE learning designed to build confidence, readiness, and career growth.</h2>
        </div>
        <div className="why-grid">
          {chooseSafetrox.map((reason) => {
            const Icon = reason.icon
            return (
              <article
                className="feature-card compact-card why-tile"
                key={reason.title}
                style={{ backgroundImage: `url(${reason.image})` }}
              >
                <div className="why-tile-icon" aria-hidden="true">
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
    </section>
  )
}

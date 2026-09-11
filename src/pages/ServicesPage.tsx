import { ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { sampleCertificate } from '../data/siteData'
import { useAuth } from '../contexts/AuthContext'
import { useContent } from '../contexts/ContentContext'
import { createEnrollment } from '../firebaseData'

export default function ServicesPage() {
  const { user } = useAuth()
  const { services } = useContent()
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [busyTitle, setBusyTitle] = useState('')

  const enrol = async (title: string) => {
    if (!user) {
      navigate('/account')
      return
    }
    setBusyTitle(title)
    setMessage('')
    try {
      await createEnrollment(user.uid, title)
      setMessage(`Your enrolment request for ${title} was sent. We will contact you with payment and schedule details.`)
    } catch {
      setMessage('Unable to save your enrolment request. Please check your Firebase setup.')
    } finally {
      setBusyTitle('')
    }
  }

  return (
    <section className="section page-shell">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Flexible learning programs built for HSE learners and professionals.</h2>
        <p>Choose the training path that matches your career stage, from interview preparation to diploma-level learning.</p>
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
                <strong>{service.details.price}</strong>
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
              <div className="program-card-actions">
                <Link className="program-card-action" to={service.link}>{service.actionLabel} <ArrowRight size={16} /></Link>
                <button className="secondary-button" type="button" onClick={() => void enrol(service.title)} disabled={busyTitle === service.title}>{busyTitle === service.title ? 'Sending...' : 'Enrol now'}</button>
              </div>
            ) : null}
          </article>
        ))}
      </div>
      {message ? <p className="form-message">{message}</p> : null}

      <section className="section certifications-section split-section" id="certificates">
        <div className="certification-copy">
          <p className="eyebrow">Certificate Programs</p>
          <h2>Recognized learning with a certificate of completion.</h2>
          <div className="certification-feature-box">
            <div className="certification-feature-item">
              <strong>Career-ready learning</strong>
              <span>Build confidence for interviews, workplace readiness, and professional growth.</span>
            </div>
            <div className="certification-feature-item">
              <strong>Practical HSE knowledge</strong>
              <span>Strengthen your foundation through structured training in interview prep, quizzes, and diploma content.</span>
            </div>
            <div className="certification-feature-item">
              <strong>Proof of achievement</strong>
              <span>Receive a certificate that reflects your commitment, learning progress, and industry readiness.</span>
            </div>
          </div>
        </div>
        <div className="certificate-preview-card">
          <div className="certificate-preview-header">
            <span className="certificate-badge">Sample certificate</span>
            <h3>Professional recognition</h3>
          </div>
          <img src={sampleCertificate} alt="Sample certificate preview" />
        </div>
      </section>
    </section>
  )
}

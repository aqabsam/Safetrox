import { ArrowRight, BadgeDollarSign, Download, Eye, FileText } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useContent } from '../contexts/ContentContext'
import pocketGuide from '../Pocket Guide SafeTrox.pdf'
import safetroxLogo from '../assets/LOGO.png'

const WEB3FORMS_ACCESS_KEY = '0f0ac6aa-d9f6-4327-a777-feb95aec6e24'

export default function ServicesPage() {
  const { services } = useContent()
  const [result, setResult] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [selectedCourses, setSelectedCourses] = useState<string[]>([])

  const handleEnquirySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedCourses.length === 0) {
      setResult('Please select at least one course.')
      return
    }
    setIsSending(true)
    setResult('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const whatsappMessage = [
      'New Safetrox course enquiry',
      `Name: ${formData.get('name') ?? ''}`,
      `Location: ${formData.get('location') ?? ''}`,
      `Qualification: ${formData.get('qualification') ?? ''}`,
      `Phone: ${formData.get('phone') ?? ''}`,
      `Email: ${formData.get('email') ?? ''}`,
      `Course(s): ${formData.getAll('courses').join(', ')}`,
    ].join('\n')
    window.open(`https://wa.me/918617750510?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer')
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'New Safetrox course enquiry')
    formData.append('from_name', 'Safetrox Course Enquiry')
    formData.append('selected_courses', formData.getAll('courses').join(', '))

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      setResult(data.success ? 'Enquiry sent successfully. The Safetrox team will contact you soon.' : data.message || 'Unable to send your enquiry. Please try again.')
      if (data.success) {
        form.reset()
        setSelectedCourses([])
      }
    } catch {
      setResult('Unable to send your enquiry. Please check your connection and try again.')
    } finally {
      setIsSending(false)
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
              <div className="program-card-actions">
                <Link className="program-card-action" to={service.link}>{service.actionLabel} <ArrowRight size={16} /></Link>
                <Link className="secondary-button" to="/contact">Enrol now</Link>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <section className="pocket-guide-section" aria-labelledby="pocket-guide-title">
        <div className="pocket-guide-icon"><FileText size={30} /></div>
        <div className="pocket-guide-copy">
          <p className="eyebrow">Free resource</p>
          <div className="pocket-guide-title-row"><h2 id="pocket-guide-title">Free Pocket Guide by SafeTrox</h2><img src={safetroxLogo} alt="SafeTrox" /></div>
          <p>Keep essential HSE guidance close at hand. View the guide online or download it for quick reference whenever you need it.</p>
        </div>
        <div className="pocket-guide-actions">
          <a className="secondary-button" href={pocketGuide} target="_blank" rel="noreferrer"><Eye size={18} /> View guide</a>
          <a className="primary-button" href={pocketGuide} download="Pocket Guide SafeTrox.pdf"><Download size={18} /> Download guide</a>
        </div>
      </section>

      <section className="course-enquiry-section" aria-labelledby="course-enquiry-title">
        <div className="course-enquiry-copy">
          <p className="eyebrow">Course enquiry</p>
          <h2 id="course-enquiry-title">Tell us how you want to learn.</h2>
          <p>Share your details and select one or more courses. Our faculty will contact you with the premium course details, schedule, and fee.</p>
        </div>
        <form className="course-enquiry-form" onSubmit={handleEnquirySubmit}>
          <div className="course-enquiry-fields">
            <label><span>Full name</span><input name="name" type="text" placeholder="Your name" required /></label>
            <label><span>Location</span><input name="location" type="text" placeholder="City and country" required /></label>
            <label><span>Qualification</span><input name="qualification" type="text" placeholder="Your qualification" required /></label>
            <label><span>Phone number</span><input name="phone" type="tel" placeholder="Your phone number" required /></label>
            <label><span>Email</span><input name="email" type="email" placeholder="your@email.com" required /></label>
          </div>
          <fieldset className="course-selection-fieldset">
            <legend>Select course(s)</legend>
            <p>Choose one or more options.</p>
            <div className="course-selection-options">
              <label><input name="courses" type="checkbox" value="Advance Safety Diploma" checked={selectedCourses.includes('Advance Safety Diploma')} onChange={(event) => setSelectedCourses((current) => event.target.checked ? [...current, event.target.value] : current.filter((course) => course !== event.target.value))} /> <span>Advance Safety Diploma</span></label>
              <label><input name="courses" type="checkbox" value="Quiz Session" checked={selectedCourses.includes('Quiz Session')} onChange={(event) => setSelectedCourses((current) => event.target.checked ? [...current, event.target.value] : current.filter((course) => course !== event.target.value))} /> <span>Quiz Session</span></label>
              <label><input name="courses" type="checkbox" value="HSE Interview Preparations" checked={selectedCourses.includes('HSE Interview Preparations')} onChange={(event) => setSelectedCourses((current) => event.target.checked ? [...current, event.target.value] : current.filter((course) => course !== event.target.value))} /> <span>HSE Interview Preparations</span></label>
            </div>
          </fieldset>
          <div className="course-enquiry-actions">
            <button className="primary-button" type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Send course enquiry'} <ArrowRight size={18} /></button>
            <a className="whatsapp-enquiry-button" href="https://wa.me/918617750510" target="_blank" rel="noreferrer"><FaWhatsapp size={19} /> Contact on WhatsApp</a>
          </div>
          {result ? <p className="course-enquiry-status" role="status">{result}</p> : null}
        </form>
      </section>
    </section>
  )
}

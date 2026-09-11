import { ClipboardCheck, Globe2, Headphones, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

const WEB3FORMS_ACCESS_KEY = '0f0ac6aa-d9f6-4327-a777-feb95aec6e24'

export default function ContactPage() {
  const [result, setResult] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSending(true)
    setResult('')

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
      setResult(data.success ? 'Message sent successfully. We will get back to you soon.' : 'Unable to send your message. Please try again.')
      if (data.success) form.reset()
    } catch {
      setResult('Unable to send your message. Please check your connection and try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Contact Safetrox</p>
        <h2>Book training, request consultancy, or send a corporate inquiry.</h2>
        <p>
          Reach Mohammed Shadab Sami directly for corporate HSE training,
          safety consultancy, audits, NEBOSH preparation, and industrial
          safety solutions.
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
        <form className="contact-form" onSubmit={handleSubmit}>
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
            <button type="submit" className="primary-button" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'} <Send size={18} />
          </button>
        </form>
          {result ? <p className="contact-form-status" role="status">{result}</p> : null}
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
  )
}

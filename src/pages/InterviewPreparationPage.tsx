import { ArrowLeft, CalendarDays, CheckCircle2, MonitorPlay, Video } from 'lucide-react'
import { Link } from 'react-router-dom'

const liveSessions = [
  {
    number: '01',
    title: 'ADNOC Groups Interview Preparation',
    text: 'Prepare for ADNOC Groups interviews with role-focused questions, safety expectations, and clear professional introductions.',
  },
  {
    number: '02',
    title: 'Oil & Gas Turnaround/EPC Projects Level',
    text: 'Build confidence for Oil & Gas turnaround and EPC project interviews through practical HSE scenarios and project responsibilities.',
  },
  {
    number: '03',
    title: 'Technical Answer Practice',
    text: 'Work through practical questions on risk assessment, permits, incident investigation, and emergency response.',
  },
]

export default function InterviewPreparationPage() {
  return (
    <section className="section page-shell">
      <Link className="back-link" to="/services"><ArrowLeft size={16} /> Back to courses</Link>
      <div className="section-heading interview-course-hero">
        <p className="eyebrow"><Video size={15} /> HSE Interview Preparation</p>
        <h2>Focused live coaching for your next HSE interview.</h2>
        <p>This course is delivered through live video sess ions only. Join 3 to 5 interactive classes through Google Meet or Zoom and practise with direct trainer feedback.</p>
      </div>

      <div className="interview-platforms">
        <div><MonitorPlay size={22} /><strong>Google Meet</strong><span>Live online classroom</span></div>
        <div><Video size={22} /><strong>Zoom</strong><span>Interactive mock interviews</span></div>
        <div><CalendarDays size={22} /><strong>3-5 live classes</strong><span>Scheduled around your availability</span></div>
      </div>

      <div className="interview-session-grid">
        {liveSessions.map((session) => (
          <article className="interview-session-card" key={session.number}>
            <span>{session.number}</span>
            <h3>{session.title}</h3>
            <p>{session.text}</p>
            <CheckCircle2 size={19} />
          </article>
        ))}
      </div>

      <div className="interview-booking-panel">
        <div>
          <p className="eyebrow">Reserve a live slot</p>
          <h3>Choose your platform and class schedule.</h3>
          <p>Send your preferred platform, target role, and availability. The training team will confirm the live session plan.</p>
        </div>
        <a className="primary-button" href="mailto:safetroxhse@gmail.com?subject=HSE%20Interview%20Preparation%20Live%20Sessions">
          Request live sessions <CalendarDays size={18} />
        </a>
      </div>
    </section>
  )
}

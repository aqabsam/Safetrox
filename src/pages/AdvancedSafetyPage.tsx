import { ArrowLeft, BookOpenText, FileText } from 'lucide-react'
import { SiGooglemeet, SiZoom } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function AdvancedSafetyPage() {
  return (
    <section className="section page-shell">
      <Link className="back-link" to="/services"><ArrowLeft size={16} /> Back to courses</Link>
      <div className="section-heading diploma-course-hero">
        <p className="eyebrow"><BookOpenText size={15} /> Advance Safety Diploma</p>
        <h2>Build practical safety knowledge you can use on site.</h2>
        <p>Work through structured modules, supporting videos, presentation topics, and revision notes for a confident start in occupational health and safety.</p>
      </div>

      <div className="diploma-course-meta">
        <span><strong>Format</strong> Structured modules + support</span>
        <span><strong>Schedule</strong> 15-20 classes</span>
        <span><strong>Focus</strong> Industrial safety and controls</span>
      </div>

      <section className="diploma-delivery-panel" aria-labelledby="diploma-delivery-title">
        <div className="diploma-delivery-heading">
          <p className="eyebrow">Course delivery</p>
          <h3 id="diploma-delivery-title">Learn with course PDFs, PPT presentations, and live video classes.</h3>
          <p>We will provide the course PDF, and every live video class will be presented through PPT using Zoom, Google Meet, or Botim.</p>
        </div>
        <div className="diploma-delivery-options">
          <div className="diploma-delivery-option diploma-delivery-option--pdf">
            <div className="diploma-delivery-logo diploma-delivery-logo--pdf"><FileText size={26} /></div>
            <div><strong>Course PDF</strong><span>Structured notes and learning material provided for the full course.</span></div>
          </div>
          <div className="diploma-delivery-option">
            <div className="diploma-delivery-logo diploma-delivery-logo--zoom"><SiZoom size={28} title="Zoom logo" /></div>
            <div><strong>Zoom</strong><span>Live interactive classes with trainer guidance.</span></div>
          </div>
          <div className="diploma-delivery-option">
            <div className="diploma-delivery-logo diploma-delivery-logo--meet"><SiGooglemeet size={28} title="Google Meet logo" /></div>
            <div><strong>Google Meet</strong><span>Join live lessons from your phone or computer.</span></div>
          </div>
          <div className="diploma-delivery-option">
            <div className="diploma-delivery-logo diploma-delivery-logo--botim"><img src="https://botim.me/favicon.ico" alt="Botim logo" /></div>
            <div><strong>Botim</strong><span>Another option for joining live video sessions.</span></div>
          </div>
        </div>
      </section>

    </section>
  )
}

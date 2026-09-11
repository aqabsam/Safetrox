import { ArrowLeft, ArrowRight, BookOpenText, FileText, PlayCircle, Presentation } from 'lucide-react'
import { Link } from 'react-router-dom'

const diplomaResources = [
  {
    icon: PlayCircle,
    label: 'Video Lessons',
    title: 'Watch practical safety modules',
    text: 'Short lessons covering hazard identification, risk assessment, permits, and workplace controls.',
    items: ['Hazard identification', 'Risk assessment', 'Permit to work'],
    action: 'Find video lessons',
    href: 'https://www.youtube.com/results?search_query=advanced+industrial+safety+diploma',
  },
  {
    icon: Presentation,
    label: 'PPT Modules',
    title: 'Study presentation topics',
    text: 'Presentation-ready topics organized for revision, classroom discussion, and instructor-led sessions.',
    items: ['Industrial safety fundamentals', 'Fire and emergency response', 'Incident investigation'],
    action: 'Request PPT modules',
    href: 'mailto:safetroxhse@gmail.com?subject=Advance%20Safety%20Diploma%20PPT%20Modules',
  },
  {
    icon: FileText,
    label: 'Course Notes',
    title: 'Follow a structured revision guide',
    text: 'Use the course outline as a focused checklist for learning and exam preparation.',
    items: ['Safety management systems', 'Occupational health', 'Audits and continual improvement'],
    action: 'Jump to notes',
    href: '#diploma-notes',
  },
]

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
        <span><strong>Schedule</strong> Up to 20 classes</span>
        <span><strong>Focus</strong> Industrial safety and controls</span>
      </div>

      <div className="diploma-resource-grid diploma-course-resources">
        {diplomaResources.map((resource) => {
          const Icon = resource.icon
          return (
            <article className="diploma-resource-card" key={resource.label}>
              <div className="diploma-resource-icon"><Icon size={22} /></div>
              <p className="eyebrow">{resource.label}</p>
              <h3>{resource.title}</h3>
              <p>{resource.text}</p>
              <ul>{resource.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a className="program-card-action" href={resource.href} target={resource.href.startsWith('http') ? '_blank' : undefined} rel={resource.href.startsWith('http') ? 'noreferrer' : undefined}>
                {resource.action} <ArrowRight size={16} />
              </a>
            </article>
          )
        })}
      </div>

      <div className="diploma-notes" id="diploma-notes">
        <div>
          <p className="eyebrow">Revision Notes</p>
          <h3>Core learning path</h3>
        </div>
        <ol>
          <li><strong>Foundations:</strong> workplace hazards, legal duties, responsibilities, and safety culture.</li>
          <li><strong>Risk control:</strong> risk assessment, hierarchy of controls, safe systems of work, and permits.</li>
          <li><strong>Emergency readiness:</strong> fire prevention, emergency plans, drills, first response, and evacuation.</li>
          <li><strong>Improvement:</strong> inspections, audits, incident learning, leading indicators, and corrective action.</li>
        </ol>
      </div>
    </section>
  )
}

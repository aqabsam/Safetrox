import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  GraduationCap,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Star,
  Users,
} from 'lucide-react'
import './App.css'

const courses = [
  'ASP / CSP exam preparation',
  'OSHA 30-hour construction and general industry',
  'IOSH Managing Safely',
  'Scaffolding safety and inspection',
  'Fire safety and emergency response',
  'First aid and workplace incident control',
]

const highlights = [
  {
    icon: <Award />,
    title: 'Certified Safety Training',
    text: 'Job-ready programs for learners preparing for global health and safety credentials.',
  },
  {
    icon: <BookOpenCheck />,
    title: 'Exam-Focused Learning',
    text: 'Structured ASP and CSP preparation with practice questions, revision support, and mock-test guidance.',
  },
  {
    icon: <Users />,
    title: 'Live Cohorts',
    text: 'Instructor-led online classes, WhatsApp study groups, and practical support from enrollment to assessment.',
  },
]

const stats = [
  ['20+', 'Training modules'],
  ['24/7', 'Digital study access'],
  ['Global', 'Safety career focus'],
  ['Live', 'Trainer support'],
]

const programs = [
  {
    title: 'Professional Safety Certifications',
    text: 'Prepare for recognized safety pathways with classes designed around core concepts, practice, and exam confidence.',
    tags: ['ASP', 'CSP', 'OSHA', 'IOSH'],
  },
  {
    title: 'Workplace Safety Skills',
    text: 'Build practical competence in hazard control, site supervision, fire response, first aid, and incident prevention.',
    tags: ['Fire Safety', 'First Aid', 'Scaffold Safety'],
  },
  {
    title: 'Digital Prep Tools',
    text: 'Use mobile-friendly question banks, quick revision material, and community reminders to keep study momentum moving.',
    tags: ['Mock Tests', 'Mobile App', 'WhatsApp Group'],
  },
]

const steps = [
  'Choose your certification or workplace safety track.',
  'Join live online sessions with guided study material.',
  'Practice through mock questions and trainer feedback.',
  'Move toward exams, interviews, and safer work performance.',
]

const testimonials = [
  {
    quote:
      'The preparation style made safety concepts easier to remember and apply during practice tests.',
    name: 'Safety Learner',
  },
  {
    quote:
      'Clear sessions, useful notes, and regular reminders helped me stay consistent with exam preparation.',
    name: 'HSE Professional',
  },
  {
    quote:
      'The course mix is useful for anyone building a career in workplace health and safety.',
    name: 'Site Supervisor',
  },
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Safetrox home">
          <span className="brand-mark">
            <ShieldCheck size={24} strokeWidth={2.3} />
          </span>
          <span>Safetrox</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#programs">Programs</a>
          <a href="#courses">Courses</a>
          <a href="#app">App</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-action" href="#contact">
          Enroll Now
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Occupational safety training institute</p>
          <h1>Build a safer career with Safetrox certification training.</h1>
          <p className="hero-text">
            Practical HSE learning for ASP, CSP, OSHA, IOSH, fire safety,
            first aid, scaffolding, and workplace risk control.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#programs">
              Explore Programs <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#contact">
              Talk to an Advisor
            </a>
          </div>
          <div className="trust-row" aria-label="Training highlights">
            <span>
              <CheckCircle2 size={18} /> Live online classes
            </span>
            <span>
              <CheckCircle2 size={18} /> Exam practice support
            </span>
          </div>
        </div>

        <div className="hero-panel" aria-label="Safetrox training dashboard">
          <div className="panel-top">
            <div>
              <p>Current Focus</p>
              <h2>ASP / CSP Prep</h2>
            </div>
            <span className="live-pill">Live Cohort</span>
          </div>
          <div className="progress-card">
            <div>
              <span>Study readiness</span>
              <strong>82%</strong>
            </div>
            <div className="progress-bar">
              <span></span>
            </div>
          </div>
          <div className="mini-grid">
            <div>
              <ClipboardCheck size={24} />
              <strong>Mock Tests</strong>
              <span>Practice sets</span>
            </div>
            <div>
              <Headphones size={24} />
              <strong>Trainer Help</strong>
              <span>Guided review</span>
            </div>
            <div>
              <Globe2 size={24} />
              <strong>Global Scope</strong>
              <span>Career ready</span>
            </div>
            <div>
              <MessageCircle size={24} />
              <strong>Community</strong>
              <span>Study group</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section" aria-label="Safetrox statistics">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="programs">
        <div className="section-heading">
          <p className="eyebrow">What Safetrox offers</p>
          <h2>Training built for safety exams and real worksites.</h2>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <span className="icon-badge">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="courses">
        <div>
          <p className="eyebrow">Course catalog</p>
          <h2>Core programs for HSE professionals and site teams.</h2>
          <p>
            Safetrox adapts the reference training model into a cleaner,
            branded learning experience for students, safety officers, and
            working professionals.
          </p>
        </div>
        <div className="course-list">
          {courses.map((course) => (
            <span key={course}>
              <CheckCircle2 size={18} /> {course}
            </span>
          ))}
        </div>
      </section>

      <section className="program-grid">
        {programs.map((program) => (
          <article className="program-card" key={program.title}>
            <h3>{program.title}</h3>
            <p>{program.text}</p>
            <div>
              {program.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="section app-section" id="app">
        <div className="phone-mockup" aria-label="Safetrox app preview">
          <div className="phone-screen">
            <div className="phone-header">
              <Smartphone size={22} />
              <span>Safetrox Prep</span>
            </div>
            <div className="question-card">
              <p>Question Bank</p>
              <strong>Risk Assessment</strong>
              <span>120 practice questions</span>
            </div>
            <div className="question-card compact">
              <p>Mock Score</p>
              <strong>76%</strong>
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow">Mobile learning support</p>
          <h2>Study between classes with app-style practice tools.</h2>
          <p>
            The reference site promotes ASP and CSP prep apps with MCQs and
            revision support. Safetrox presents that same learning value as a
            modern digital companion for busy safety professionals.
          </p>
          <div className="app-points">
            <span>
              <Star size={18} /> Practice questions and quick revision
            </span>
            <span>
              <Star size={18} /> Useful for certification and interview prep
            </span>
            <span>
              <Star size={18} /> Community reminders for study consistency
            </span>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Simple steps from enrollment to confidence.</h2>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="section-heading">
          <p className="eyebrow">Learner feedback</p>
          <h2>Support that helps students keep going.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="stars" aria-label="Five star review">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p>{testimonial.quote}</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Start with Safetrox</p>
          <h2>Ready to plan your safety training path?</h2>
          <p>
            Ask about ASP, CSP, OSHA, IOSH, fire safety, first aid, or custom
            workplace safety training for your team.
          </p>
        </div>
        <a className="primary-button" href="mailto:info@safetrox.com">
          Contact Safetrox <ArrowRight size={18} />
        </a>
      </section>

      <footer>
        <div className="brand">
          <span className="brand-mark">
            <GraduationCap size={23} strokeWidth={2.3} />
          </span>
          <span>Safetrox</span>
        </div>
        <p>Professional occupational safety training and exam preparation.</p>
      </footer>
    </main>
  )
}

export default App

import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  GraduationCap,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react'
import './App.css'

const stats = [
  ['9+', 'Years industrial experience'],
  ['10+', 'Major industrial projects'],
  ['ISO', '45001 lead auditor'],
  ['UAE + India', 'Industry exposure'],
]

const heroServices = [
  'Corporate HSE Training',
  'Safety Consultancy',
  'ISO Audits',
  'NEBOSH Preparation',
  'Industrial Safety Solutions',
]

const founderCredentials = [
  'Certified Safety Professional (CSP)',
  'NEBOSH International Diploma (IDipNEBOSH)',
  'ISO 45001 Lead Auditor',
  'IOSH Certified Professional',
]

const chooseSafetrox = [
  '9+ Years of Industrial Experience',
  'Internationally Certified Trainer',
  'ADNOC Approved HSE Professional',
  'ISO 45001 Lead Auditor',
  '10+ Major Industrial Projects',
  'Corporate Training Programs',
  'Safety Audits & Consultancy',
  'Practical Site-Based Learning',
  'Industry-Focused Certification Training',
]

const certifications = [
  'Certified Safety Professional (CSP)',
  'NEBOSH International Diploma (IDip)',
  'NEBOSH IGC',
  'IOSH',
  'ISO 45001:2018 Lead Auditor',
  'OSHA 30 Hours Construction Safety',
  'Accident Investigation (AOSH)',
  'Advanced Diploma in Industrial Safety',
]

const industries = [
  'ADNOC',
  'ADNOC Gas',
  'ADNOC Onshore',
  'ADNOC Offshore',
  'Borouge',
  'Haliba Petroleum',
  'NMDC Energy',
  'OILSERV',
  'Descon Engineering',
  'Reliance Industries',
  'Nayara Energy',
  'HPCL',
  'Sulzer',
  'EMDAD Services',
]

const services = [
  {
    title: 'Corporate HSE Training',
    text: 'Customized safety training for industries, project teams, contractors, and organizations.',
    items: ['Workforce training', 'Supervisor programs', 'Leadership sessions'],
  },
  {
    title: 'Safety Consultancy',
    text: 'Helping organizations implement strong HSE management systems and compliance practices.',
    items: ['HSE gap review', 'Site guidance', 'Compliance support'],
  },
  {
    title: 'ISO 45001 Implementation',
    text: 'End-to-end support for occupational health and safety management system readiness.',
    items: ['Documentation', 'Internal audit', 'Certification support'],
  },
  {
    title: 'HSE Documentation',
    text: 'Professional safety documents for projects, operations, audits, and contractor compliance.',
    items: ['HSE plans', 'Risk assessment', 'Method statements'],
  },
  {
    title: 'Safety Audits',
    text: 'Structured auditing for sites, contractors, systems, and organizational safety performance.',
    items: ['Site audit', 'ISO audit', 'Contractor audit'],
  },
  {
    title: 'Industrial Safety Inspection',
    text: 'Practical site inspections for high-risk work, permits, equipment, and workplace controls.',
    items: ['Fire safety', 'Working at height', 'Lifting operations'],
  },
]

const documentation = [
  'HSE Plans',
  'Risk Assessment',
  'Method Statements',
  'Emergency Response Plan',
  'Safety Procedures',
  'Permit to Work',
  'Toolbox Talk Documents',
]

const inspections = [
  'Fire Safety',
  'Electrical Safety',
  'Working at Height',
  'Confined Space',
  'Scaffolding',
  'Lifting Operations',
  'Permit to Work',
]

const trainingPrograms = [
  'NEBOSH International General Certificate (IGC)',
  'NEBOSH International Diploma Preparation',
  'IOSH Managing Safely',
  'OSHA 30 Hours Construction Safety',
  'ISO 45001 Lead Auditor Training',
  'HSE Officer Training',
  'Safety Supervisor Training',
  'Fire Safety',
  'Work at Height',
  'Confined Space Entry',
  'Permit to Work (PTW)',
  'Lockout Tagout (LOTO)',
  'Job Safety Analysis (JSA)',
  'Hazard Identification & Risk Assessment (HIRA)',
  'Incident Investigation',
  'Behaviour Based Safety (BBS)',
  'H2S Awareness',
  'First Aid & CPR',
  'Emergency Response',
  'Toolbox Talk',
  'PPE Management',
  'Electrical Safety',
  'Chemical Safety',
  'Construction Safety',
  'Oil & Gas Safety',
  'Industrial Safety',
  'Defensive Driving Safety',
  'Heat Stress Management',
  'Contractor Safety Management',
  'Safety Leadership',
  'Safety Culture Development',
]

const consultancyServices = [
  'ISO 45001 Certification',
  'Safety Documentation',
  'HSE Manual Preparation',
  'Risk Assessment',
  'Internal Audits',
  'Mock Audits',
  'Compliance Support',
  'Corporate Safety Programs',
]

const achievements = [
  'Appreciation from ADNOC Gas',
  'Appreciation from Borouge',
  'Appreciation from EMDAD',
  'Multiple Turnaround Project Successes',
  '100% HSE Objective Achievement',
  'Beat The Heat Campaign Recognition',
]

const experience = [
  'OILSERV',
  'NMDC Energy',
  'EMDAD Services',
  'Descon Engineering',
  'Sulzer',
  'Akshar Fire & Services',
  'Ravi Raj Infra',
]

const testimonials = [
  {
    quote:
      'The training connected international safety standards with real site examples, making every topic easy to apply at work.',
    name: 'Corporate HSE Client',
  },
  {
    quote:
      'The NEBOSH preparation was structured, practical, and focused on understanding instead of memorizing.',
    name: 'NEBOSH Trainee',
  },
  {
    quote:
      'Safetrox helped our team improve documentation, audit readiness, and day-to-day safety awareness.',
    name: 'Industrial Project Team',
  },
]

const contactMethods = [
  {
    label: 'WhatsApp',
    value: '+91 86177 50510',
    href: 'https://wa.me/918617750510',
    icon: MessageCircle,
  },
  {
    label: 'Phone',
    value: '+91 86177 50510',
    href: 'tel:+918617750510',
    icon: Phone,
  },
  {
    label: 'Email',
    value: 'shadabsami0009@gmail.com',
    href: 'mailto:shadabsami0009@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'Mohammad Shadab Sami',
    href: 'https://www.linkedin.com/in/mohammadshadabsami/',
    icon: Globe2,
  },
]

const gallery = [
  {
    title: 'Industrial Training',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'Classroom Sessions',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'Site Inspections',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'Safety Campaigns',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'Certifications',
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'Award Ceremonies',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=82',
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
          <a href="#founder">Founder</a>
          <a href="#services">Services</a>
          <a href="#training">Training</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-action" href="#contact">
          Book Training
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">HSE training, consultancy, audits and compliance</p>
          <h1>Building Safer Workplaces, Empowering Safer People</h1>
          <p className="hero-text">
            Learn from an internationally certified HSE expert with 9+ years of
            industry experience across Oil & Gas, Petrochemical, Construction,
            and Industrial sectors in the UAE and India.
          </p>
          <div className="service-strip" aria-label="Safetrox core services">
            {heroServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Book Training <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#contact">
              Contact Us
            </a>
            <a className="secondary-button" href="#training">
              Explore Courses
            </a>
            <a className="secondary-button" href="#founder">
              About Founder
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Safetrox founder profile">
          <div className="founder-avatar">
            <ShieldCheck size={40} />
          </div>
          <div className="panel-top">
            <div>
              <p>Founder & Lead Trainer</p>
              <h2>Mohammed Shadab Sami</h2>
            </div>
            <span className="live-pill">CSP</span>
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
              <strong>ADNOC Approved</strong>
              <span>HSE professional</span>
            </div>
            <div>
              <Globe2 size={24} />
              <strong>UAE & India</strong>
              <span>Project exposure</span>
            </div>
            <div>
              <ClipboardCheck size={24} />
              <strong>ISO Audits</strong>
              <span>45001 systems</span>
            </div>
            <div>
              <Users size={24} />
              <strong>Corporate Teams</strong>
              <span>Training delivery</span>
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

      <section className="section split-section" id="founder">
        <div>
          <p className="eyebrow">About founder</p>
          <h2>Mohammed Shadab Sami</h2>
          <p>
            With over 9 years of experience in Oil & Gas, Petrochemical,
            Construction, and Industrial sectors across the UAE and India,
            Mohammed Shadab Sami has worked with some of the largest companies
            in the Middle East, helping organizations achieve world-class safety
            standards through training, auditing, compliance, and consultancy.
          </p>
        </div>
        <div className="course-list">
          {founderCredentials.map((credential) => (
            <span key={credential}>
              <CheckCircle2 size={18} /> {credential}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="why">
        <div className="section-heading">
          <p className="eyebrow">Why choose Safetrox</p>
          <h2>Practical expertise shaped by international standards and major industrial projects.</h2>
        </div>
        <div className="highlight-grid compact-grid">
          {chooseSafetrox.map((reason) => (
            <article className="feature-card compact-card" key={reason}>
              <span className="icon-badge">
                <CheckCircle2 />
              </span>
              <h3>{reason}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Professional certifications</p>
          <h2>Internationally aligned HSE competence.</h2>
          <p>
            Safetrox is built around credible safety qualifications, audit
            capability, and practical industrial experience.
          </p>
        </div>
        <div className="course-list">
          {certifications.map((certification) => (
            <span key={certification}>
              <Award size={18} /> {certification}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="industries">
        <div className="section-heading">
          <p className="eyebrow">Industries served</p>
          <h2>Experience with leading industrial and energy organizations.</h2>
          <p>Use company logos here. These tiles can be replaced with official brand assets later.</p>
        </div>
        <div className="logo-cloud">
          {industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Complete HSE training, consultancy, documentation, audit, and inspection support.</h2>
        </div>
        <div className="program-grid">
          {services.map((service) => (
            <article className="program-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div>
                {service.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dual-lists">
        <div className="list-panel">
          <p className="eyebrow">HSE documentation</p>
          <h2>Project-ready safety documents.</h2>
          <div className="course-list single-list">
            {documentation.map((item) => (
              <span key={item}>
                <ClipboardCheck size={18} /> {item}
              </span>
            ))}
          </div>
        </div>
        <div className="list-panel">
          <p className="eyebrow">Industrial safety inspection</p>
          <h2>Focused site checks for critical risks.</h2>
          <div className="course-list single-list">
            {inspections.map((item) => (
              <span key={item}>
                <ShieldCheck size={18} /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section training-section" id="training">
        <div className="section-heading">
          <p className="eyebrow">Training programs</p>
          <h2>Professional safety courses for individuals, teams, and organizations.</h2>
          <p>
            This is the core Safetrox offering: certification preparation,
            workplace safety skills, supervisor training, and corporate HSE
            programs taught with practical site-based learning.
          </p>
        </div>
        <div className="training-grid">
          {trainingPrograms.map((program) => (
            <span key={program}>
              <BookOpenCheck size={18} /> {program}
            </span>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Consultancy services</p>
          <h2>Compliance and system support for safer organizations.</h2>
          <p>
            Safetrox supports companies with ISO 45001 certification readiness,
            safety documentation, mock audits, internal audits, risk
            assessment, and corporate safety programs.
          </p>
        </div>
        <div className="course-list">
          {consultancyServices.map((service) => (
            <span key={service}>
              <Headphones size={18} /> {service}
            </span>
          ))}
        </div>
      </section>

      <section className="app-section" id="achievements">
        <div>
          <p className="eyebrow">Achievements</p>
          <h2>Recognized contribution to industrial safety performance.</h2>
          <p>
            Safetrox highlights real industrial recognition, turnaround project
            success, safety campaign achievement, and measurable HSE objective
            performance.
          </p>
        </div>
        <div className="achievement-list">
          {achievements.map((achievement) => (
            <span key={achievement}>
              <Star size={18} /> {achievement}
            </span>
          ))}
        </div>
      </section>

      <section className="section process-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience timeline</p>
          <h2>Industrial exposure across energy, engineering, construction, and fire services.</h2>
        </div>
        <div className="timeline">
          {experience.map((company, index) => (
            <div key={company}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{company}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="section-heading">
          <p className="eyebrow">Client testimonials</p>
          <h2>Feedback from clients and trainees.</h2>
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

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Gallery</p>
          <h2>Training, inspection, campaign, certification, and award moments.</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div key={item.title} style={{ backgroundImage: `url(${item.image})` }}>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact Safetrox</p>
          <h2>Book training, request consultancy, or send a corporate inquiry.</h2>
          <p>
            Reach Mohammed Shadab Sami directly for corporate HSE training,
            safety consultancy, audits, NEBOSH preparation, and industrial
            safety solutions.
          </p>
          <div className="contact-actions">
            <a className="primary-button" href="https://wa.me/918617750510" target="_blank">
              WhatsApp Now <Send size={18} />
            </a>
            <a className="secondary-button contact-mail-button" href="mailto:shadabsami0009@gmail.com">
              Send Email <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="contact-panel" aria-label="Safetrox contact details">
          <div className="contact-panel-top">
            <span className="contact-icon">
              <Headphones size={26} />
            </span>
            <div>
              <p>Direct response</p>
              <strong>Training & consultancy desk</strong>
            </div>
          </div>
          <div className="contact-methods">
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}>
                <span>
                  <Icon size={20} />
                </span>
                <div>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              </a>
            ))}
          </div>
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

      <footer>
        <div className="brand">
          <span className="brand-mark">
            <GraduationCap size={23} strokeWidth={2.3} />
          </span>
          <span>Safetrox</span>
        </div>
        <p>
          Professional HSE training, safety consultancy, ISO audits, NEBOSH
          preparation, and industrial safety solutions.
        </p>
      </footer>
    </main>
  )
}

export default App

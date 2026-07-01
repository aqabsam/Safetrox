import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
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
import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

import safetroxLogo from './assets/LOGO.png'
import homeImage from './assets/home.jpeg'
import aboutImage from './assets/about.jpg'
import certificateSample from './assets/AMRITA RAO SAMPLE CERTIFICATE.png'


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
  'M.Sc. in Occupational Health and Safety',
  'NEBOSH International Diploma (IDipNEBOSH)',
  'ISO 45001 Lead Auditor',
  'IOSH Certified Professional',
]

const chooseSafetrox = [
  { icon: ShieldCheck, title: 'Practical HSE Training', description: 'Real workplace examples that make safety learning stick.' },
  { icon: BookOpenCheck, title: 'Interview Focus', description: 'Structured prep that helps you speak clearly and confidently.' },
  { icon: CheckCircle2, title: 'Quiz Practice', description: 'Interactive questions that strengthen recall and understanding.' },
  { icon: ClipboardCheck, title: 'Diploma Learning', description: 'A clear path for building strong safety fundamentals.' },
  { icon: Users, title: 'Expert Guidance', description: 'Support from an experienced HSE trainer with industry exposure.' },
  { icon: Award, title: 'Certificate Ready', description: 'Progress that supports interviews, career growth, and recognition.' },
]

const certifications = [
  '(M.Sc.) in Occuaptional Health & Safety',
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
    title: 'HSE Interview Preparation',
    text: 'Build confidence for interviews with focused preparation, practical responses, and professional guidance.',
    items: ['Interview readiness', 'Career guidance', 'Certificate support'],
    details: {
      price: '₹2,999',
      duration: 'Up to 10 classes',
      schedule: 'Weekends',
      format: 'Live coaching + interview practice',
      highlights: ['Mock interviews', 'Answer framing', 'Confidence building'],
    },
  },
  {
    title: 'Quiz Session',
    text: 'Engaging question-based learning that improves safety knowledge, recall, and exam confidence.',
    items: ['Interactive learning', 'Mock practice', 'Knowledge retention'],
    link: '/quiz',
    actionLabel: 'Open Quiz',
    details: {
      price: '₹999',
      duration: '3 practice tests',
      schedule: 'Flexible',
      format: 'Self-paced MCQ practice',
      highlights: ['Instant review', 'Score analysis', 'Interview readiness'],
    },
  },
  {
    title: 'Safety Diploma',
    text: 'Structured diploma-level training for learners who want a strong foundation in occupational health and safety.',
    items: ['Core safety concepts', 'Professional learning', 'Certificate-ready training'],
    details: {
      price: '₹7,999',
      duration: 'Up to 20 classes',
      schedule: 'Weekends',
      format: 'Structured modules + support',
      highlights: ['Industry-focused modules', 'Certificate guidance', 'Exam preparation'],
    },
  },
]

const quizTests = [
  {
    title: 'Test 1 - Basic HSE Interview Questions',
    subtitle: 'Core safety awareness for freshers and early-career professionals.',
    questions: [
      { question: 'What does PPE stand for?', options: ['Personal Protective Equipment', 'Personal Protection Equipment', 'Professional Protective Equipment', 'Public Protection Equipment'] },
      { question: 'What is the primary purpose of a toolbox talk?', options: ['To discuss workplace hazards before the shift', 'To issue salary slips', 'To complete accounts', 'To replace safety audits'] },
      { question: 'Which is the first step in hazard identification?', options: ['Observe the workplace and identify potential risks', 'Ignore the issue', 'Start work immediately', 'Report only after an accident'] },
      { question: 'What is a permit to work used for?', options: ['To authorize high-risk work safely', 'To approve leave', 'To hire staff', 'To book transport'] },
      { question: 'Why is housekeeping important on site?', options: ['It reduces trip hazards and improves safety', 'It increases noise', 'It saves time only', 'It is not necessary'] },
      { question: 'What should you do if you see an unsafe act?', options: ['Stop and report it immediately', 'Ignore it if it is small', 'Continue working', 'Wait for the supervisor to leave'] },
      { question: 'Which of these is a common workplace hazard?', options: ['Slips, trips, and falls', 'Lunch breaks', 'Office chairs', 'Water bottles'] },
      { question: 'What is the purpose of risk assessment?', options: ['To identify and control hazards before work begins', 'To increase workload', 'To reduce training', 'To avoid audits'] },
      { question: 'What does LOTO stand for?', options: ['Lockout Tagout', 'Locking Out Tools', 'Leave Out Tools', 'Log Out Time'] },
      { question: 'Why should employees use PPE?', options: ['To reduce exposure to workplace hazards', 'To save money', 'To look professional only', 'To avoid training'] },
    ],
  },
  {
    title: 'Test 2 - Workplace Safety & Compliance Questions',
    subtitle: 'Questions based on site safety practices and compliance awareness.',
    questions: [
      { question: 'What is the main purpose of an emergency response plan?', options: ['To guide actions during emergencies', 'To reduce paperwork', 'To replace inspections', 'To cancel permits'] },
      { question: 'What should you do during a fire alarm?', options: ['Evacuate calmly and follow instructions', 'Hide in the washroom', 'Continue working', 'Ignore it'] },
      { question: 'Which document helps define safe steps for a task?', options: ['Safe Work Procedure', 'Leave application', 'Attendance sheet', 'Purchase order'] },
      { question: 'Why are incident reports important?', options: ['They help prevent recurrence and improve systems', 'They increase delays', 'They are only for management', 'They are not useful'] },
      { question: 'What is the main risk of working at height without protection?', options: ['Fall injury or fatality', 'Delay in lunch', 'Higher salary', 'Less supervision'] },
      { question: 'What is the role of a safety officer?', options: ['To monitor and improve worksite safety', 'To operate heavy machinery', 'To prepare payroll', 'To manage sales'] },
      { question: 'Which of these is a good safety habit?', options: ['Inspecting tools before use', 'Skipping inspections', 'Ignoring warning signs', 'Using damaged PPE'] },
      { question: 'What does HIRA stand for?', options: ['Hazard Identification and Risk Assessment', 'Health and Injury Risk Analysis', 'Hazard Inspection and Response Activity', 'High Importance Risk Approval'] },
      { question: 'What is the purpose of a toolbox talk?', options: ['To remind workers about daily hazards and controls', 'To replace formal training', 'To reduce communication', 'To cancel inspections'] },
      { question: 'Why should near-miss incidents be reported?', options: ['To learn from them before a serious accident occurs', 'To waste time', 'To avoid records', 'To increase risk'] },
    ],
  },
  {
    title: 'Test 3 - HSE Leadership & Interview Readiness',
    subtitle: 'Questions for confident response in interviews and leadership situations.',
    questions: [
      { question: 'How would you describe a strong safety culture?', options: ['Everyone takes responsibility for safety every day', 'Only management is responsible', 'Safety is optional', 'Rules are ignored'] },
      { question: 'What is the best way to answer an HSE interview question?', options: ['Be clear, structured, and practical', 'Give a vague answer', 'Avoid examples', 'Say you know everything'] },
      { question: 'Why is communication important in safety?', options: ['It prevents misunderstandings and improves hazard control', 'It saves time only', 'It avoids training', 'It is not needed'] },
      { question: 'What is the role of leadership in safety?', options: ['Set the example and reinforce safe behavior', 'Ignore incidents', 'Avoid reporting', 'Delay action'] },
      { question: 'What should you do if you are unsure about a task?', options: ['Ask for clarification before proceeding', 'Guess and proceed', 'Ignore it', 'Complete it quickly'] },
      { question: 'Which skill is most important for HSE professionals?', options: ['Observation and communication', 'Avoiding reports', 'Ignoring hazards', 'Working alone'] },
      { question: 'What is a common interview question for HSE roles?', options: ['How would you handle a safety violation?', 'What is your favorite color?', 'How many holidays do you want?', 'What is your pet name?'] },
      { question: 'Why should you learn from incidents?', options: ['To strengthen prevention and improve controls', 'To hide the issue', 'To avoid paperwork', 'To reduce training'] },
      { question: 'What is the benefit of workplace safety training?', options: ['It improves awareness and reduces risk', 'It creates more accidents', 'It reduces productivity', 'It is unnecessary'] },
      { question: 'How would you show commitment to safety in an interview?', options: ['By sharing practical examples and a proactive mindset', 'By avoiding examples', 'By saying safety is not important', 'By blaming others'] },
    ],
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
    name: 'Madan Mohan Kodamanchili',
    role: 'CSP® | NEBOSH IDip | ISO Lead Auditor | Sr. OHS Practitioner',
    quote:
      'I had the privilege of working with Shadab Sami, and I can confidently say he is an exceptional HSE professional. His deep knowledge of health, safety, and environmental regulations, combined with his proactive approach, has made a significant impact on workplace safety. One of Shadab’s greatest strengths is his ability to create a safety-first culture. I’ve seen him conduct thorough risk assessments, implement effective safety protocols, and lead training sessions that truly engage teams. His dedication was evident when he successfully led a compliance audit, ensuring our organization met the highest industry standards. Beyond his technical expertise, Shadab is a great team player and a problem-solver. His ability to communicate complex safety procedures in a clear and practical manner makes him an invaluable asset to any company. I highly recommend Shadab Sami for any role that requires strong HSE leadership. His commitment to workplace safety and excellence is truly commendable!',
    image:
      'https://media.licdn.com/dms/image/v2/D4D35AQH9XdP5LtPWJg/profile-framedphoto-shrink_100_100/B4DZ4rQqWcKEAk-/0/1778842248839?e=1783497600&v=beta&t=M3QJgG5lWXGG0nuaLe1ulDTnxlSGswc_s58jsPHKv30',
    link: 'https://www.linkedin.com/in/mohammadshadabsami/details/recommendations/',
  },
  {
    name: 'Pankaj Koli',
    role: 'Industrial Automation Engineer | NEBOSH Certified',
    quote:
      'I had the pleasure of working with Shadab as our HSE professional at EMDAD. Shadab consistently demonstrated a strong understanding of safety protocols and took a proactive approach to risk management. They effectively communicated complex safety measures, ensuring our team was always compliant and informed. Shadab\'s dedication to fostering a safe work environment and their ability to solve problems quickly made them an invaluable asset to our team. I highly recommend Shadab for any organization seeking a reliable and knowledgeable HSE professional.',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQGfgw8YuYhraA/profile-displayphoto-shrink_100_100/B4DZZeqbqfGgAU-/0/1745344911187?e=1784764800&v=beta&t=ElJMivIKxff7YCv0j1VrlVyQMAJXL3ZLNQNucQGLQro',
    link: 'https://www.linkedin.com/in/mohammadshadabsami/details/recommendations/',
  },
  {
    name: 'Haider Ali',
    role: 'Environment, Health and Safety Manager | CSP® | TSP® | IDipNEBOSH',
    quote:
      'I had the pleasure of studying alongside Mr. Shadab Sami during our NEBOSH International Diploma (IDip) course last year. Throughout our time together, Shadab Sami consistently demonstrated a deep understanding of health and safety principles and a strong commitment to excellence. Shadab Sami possesses a unique blend of technical knowledge and practical skills, making him an invaluable asset in any health and safety role. His ability to analyze complex situations, identify potential risks, and implement effective solutions is truly commendable. In addition to his technical expertise, Shadab Sami is an excellent communicator and a collaborative team player. He have a natural ability to engage with colleagues at all levels, fostering a culture of safety and continuous improvement. I highly recommend Shadab Sami for any professional opportunities in the health and safety field. His dedication, expertise, and proactive approach will undoubtedly contribute to the success of any organization.',
    image:
      'https://media.licdn.com/dms/image/v2/C4E03AQHL3OKGK3op2Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516628258902?e=1784764800&v=beta&t=t8GT51rhQwcDIZ_QK3FMFxZsoX75Q_pdn1IjGDTiRuQ',
    link: 'https://www.linkedin.com/in/mohammadshadabsami/details/recommendations/',
  },
  {
    name: 'Mohammad Mokhtarul Haque',
    role: 'CMIOSH | CSP® | TapRooT® | MIIRSM® | IdipNebosh',
    quote:
      'Shadab is a very dedicated HSE professional. He is young, Dynamic and holds very strong knowledge and leadeship quality in very young age. He has been working in oil and gas industry as an HSE professional and helped the team to manage complex turnaounds and maintenance projects safely and succesfully. Shadab also holds excellent communication and training skills. I am sure any organization Shadab works for, will excel in HSE performance.',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQGsxmgbCB7rlw/profile-displayphoto-scale_100_100/B4DZ7.O87mJQAY-/0/1782381796125?e=1784764800&v=beta&t=mjf2_6pDifrLd5BIUedIEffIoycVa_ilf-xJ_Pv1NdE',
    link: 'https://www.linkedin.com/in/mohammadshadabsami/details/recommendations/',
  },
  {
    name: 'AKSHAY LAL',
    role: 'HSE Professional | ADNOC Group Approved | Equate Approved | NEBOSH Certified',
    quote:
      'I\'ve had the privilege of working with Shadab Sami, and I can confidently say that his dedication and motivation are unmatched. Shadab is not only extremely focused and driven in his career but also continually seeks opportunities to grow and expand his skills. His proactive approach to self-improvement is truly inspiring. What sets Shadab apart is his unwavering support for his coworkers. He is always ready to lend a helping hand, provide guidance, and foster a collaborative work environment. His positive attitude and willingness to go above and beyond make him a valuable asset to any team.',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQGdO9jQHAsPNg/profile-displayphoto-shrink_100_100/B4DZQC_PDyHYAU-/0/1735216928555?e=1784764800&v=beta&t=J64tnUlqUAAHiD5Tb2E5ydAzM3eDBwtOgR_1pqLHS2Q',
    link: 'https://www.linkedin.com/in/mohammadshadabsami/details/recommendations/',
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

const safetyNews = [
  {
    title: 'OSHA highlights fall prevention in construction',
    excerpt:
      'Recent safety updates from the U.S. Department of Labor emphasize stronger fall protection practices and awareness during construction work.',
    date: 'May 2026',
    source: 'OSHA',
    link: 'https://www.osha.gov/news/newsreleases/osha-national-news-release/20260504',
  },
  {
    title: 'Global labor bodies expand workplace safety initiatives',
    excerpt:
      'The ILO continues to promote decent work and safer operational environments through training, policy support, and social dialogue.',
    date: 'Jun 2026',
    source: 'ILO',
    link: 'https://www.ilo.org/global/about-the-ilo/newsroom/lang--en/index.htm',
  },
  {
    title: 'Heat-related hazard awareness remains a priority',
    excerpt:
      'Workplace health programs are increasingly focusing on heat stress prevention, especially in outdoor and industrial settings.',
    date: 'Apr 2026',
    source: 'Safety Watch',
    link: 'https://www.osha.gov/news/newsreleases/osha-national-news-release/20260410',
  },
  {
    title: 'New guidance strengthens process safety leadership',
    excerpt:
      'Industry leaders are increasing attention on process safety leadership, management systems, and stronger learning from near-miss events.',
    date: 'Jun 2026',
    source: 'Process Safety',
    link: 'https://www.osha.gov/process-safety-management',
  },
  {
    title: 'Chemical spill response and worker protection remain under review',
    excerpt:
      'Recent enforcement activity highlights the importance of strong emergency procedures, protective equipment, and post-incident safety checks.',
    date: 'Jun 2026',
    source: 'OSHA',
    link: 'https://www.osha.gov/news/newsreleases/osha-national-news-release/20260626',
  },
  {
    title: 'Workplace mental health and safety culture gain attention',
    excerpt:
      'Organizations are increasingly integrating mental health support and safety culture initiatives into everyday operational practices.',
    date: 'Jul 2026',
    source: 'WHO',
    link: 'https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work',
  },
]

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Safetrox home">
          <span className="brand-mark">
            <img src={safetroxLogo} alt="Safetrox" />
          </span>
          <span>Safetrox</span>
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Open menu"
          onClick={() => {
            const btn = document.querySelector(
              '.mobile-menu-button',
            ) as HTMLButtonElement | null
            const panel = document.querySelector(
              '.mobile-menu-panel',
            ) as HTMLElement | null
            if (!btn || !panel) return
            const isOpen = panel.getAttribute('data-open') === 'true'
            panel.setAttribute('data-open', String(!isOpen))
          }}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav-links" aria-label="Primary navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/recommendations">Recommendations</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <nav className="mobile-menu-panel" data-open="false" aria-label="Mobile navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/recommendations">Recommendations</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link className="header-action" to="/contact">
          Book Training
        </Link>
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-brand-block">
          <div className="brand">
            <span className="brand-mark">
              <img src={safetroxLogo} alt="Safetrox" />
            </span>
            <span>Safetrox</span>
          </div>
          <p>
            Professional HSE training, safety consultancy, ISO audits, NEBOSH
            preparation, and industrial safety solutions for modern workplaces.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <Link to="/about">About Safetrox</Link>
            <Link to="/about">Why Choose Safetrox</Link>
            <Link to="/services">Services</Link>
            <Link to="/services">Certificate Programs</Link>
            <Link to="/recommendations">Recommendations</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h3>Support</h3>
            <a href="https://wa.me/918617750510" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:shadabsami0009@gmail.com">Email</a>
            <a href="tel:+918617750510">Call Now</a>
          </div>
        </div>

        <div className="footer-cta">
          <h3>Build safer teams</h3>
          <p>Start with practical HSE learning, structured preparation, and confident workplace readiness.</p>
          <Link className="primary-button" to="/services">
            Book a Session <ArrowRight size={18} />
          </Link>
        </div>
      </footer>
    </main>
  )
}

function HomePage() {
  // Home START: keep a single set of sections on the home page to avoid repetition.

  return (
    <>
      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">HSE training and consultancy </p>
          <h1>Empowering Safety Professionals For Safety Tomorrow</h1>
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
            backgroundImage: `linear-gradient(135deg, rgba(8, 24, 22, 0.84), rgba(8, 24, 22, 0.54)), url(${homeImage})`,
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
              <h2>Mohammad Shadab Sami</h2>
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

      {/* about START */}
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
        <div className="about-card" style={{ backgroundImage: `linear-gradient(135deg, rgba(4, 20, 18, 0.84), rgba(7, 44, 38, 0.62)), url(${aboutImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
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
          <p className="eyebrow">Why choose Safetrox</p>
          <h2>Practical HSE learning designed to build confidence, readiness, and career growth.</h2>
        </div>
        <div className="why-grid">
          {chooseSafetrox.map((reason) => {
            const Icon = reason.icon
            return (
              <article className="feature-card compact-card why-tile" key={reason.title}>
                <div className="why-tile-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            )
          })}
        </div>
      </section>

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
          <img src={certificateSample} alt="Sample certificate preview" />
          {/* <p>Receive a certificate upon completing the HSE Interview Preparation, Quiz Session, or Safety Diploma program.</p> */}
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
            <div key={item.title} style={{ backgroundImage: `url(${item.image})` }}>
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

      {/* <section className="contact-section" id="contact">
        <div
          className="contact-hero-bg"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(4, 20, 18, 0.84), rgba(7, 44, 38, 0.62)), url(${aboutImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <span className="about-card-badge">Why learners choose us</span>
          <div className="about-feature-list">
            <div className="about-feature-item">
              <BookOpenCheck size={20} />
              <div>
                <strong>Safety Diploma Training</strong>
                <span>Structured coaching for strong foundation and advanced HSE knowledge.</span>
              </div>
            </div>
            <div className="about-feature-item">
              <CheckCircle2 size={20} />
              <div>
                <strong>Interactive Quiz Sessions</strong>
                <span>Engaging practice that improves recall, confidence, and exam readiness.</span>
              </div>
            </div>
            <div className="about-feature-item">
              <ShieldCheck size={20} />
              <div>
                <strong>HSE Interview Preparation</strong>
                <span>Focused guidance to help you present your skills clearly in interviews.</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="section" id="why">
        <div className="section-heading">
          <p className="eyebrow">Why choose Safetrox</p>
          <h2>Practical HSE learning designed to build confidence, readiness, and career growth.</h2>
        </div>
        <div className="why-grid">
          {chooseSafetrox.map((reason) => {
            const Icon = reason.icon
            return (
              <article className="feature-card compact-card why-tile" key={reason.title}>
                <div className="why-tile-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            )
          })}
        </div>
      </section>

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
          <img src={certificateSample} alt="Sample certificate preview" />
          <p>Receive a certificate upon completing the HSE Interview Preparation, Quiz Session, or Safety Diploma program.</p>
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
            <div key={item.title} style={{ backgroundImage: `url(${item.image})` }}>
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
      </section> */}

      {/* contact START */}
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
            <a href="mailto:shadabsami0009@gmail.com" aria-label="Email">
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
          <form className="contact-form">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="your@email.com" />
            </label>
            <label>
              <span>Message</span>
              <textarea rows={5} placeholder="Tell us about your training or consultancy needs" />
            </label>
            <button type="submit" className="primary-button">
              Send Message <Send size={18} />
            </button>
          </form>
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
      {/* contact END */}
    </>
  )
}


function QuizPage() {
  const [answers, setAnswers] = useState<Array<Array<number | null>>>(() =>
    quizTests.map((test) => Array(test.questions.length).fill(null)),
  )
  const [submittedTests, setSubmittedTests] = useState<boolean[]>(() => quizTests.map(() => false))
  const [scores, setScores] = useState<number[]>(() => quizTests.map(() => 0))
  const [completedTests, setCompletedTests] = useState<boolean[]>(() => quizTests.map(() => false))
  const [openTest, setOpenTest] = useState(0)

  const handleAnswer = (testIndex: number, questionIndex: number, optionIndex: number) => {
    const nextAnswers = [...answers]
    nextAnswers[testIndex] = [...nextAnswers[testIndex]]
    nextAnswers[testIndex][questionIndex] = optionIndex
    setAnswers(nextAnswers)
  }

  const handleSubmit = (testIndex: number) => {
    const selectedAnswers = answers[testIndex]
    const correctCount = selectedAnswers.filter((value) => value === 0).length
    const nextScores = [...scores]
    nextScores[testIndex] = correctCount
    setScores(nextScores)

    const nextSubmitted = [...submittedTests]
    nextSubmitted[testIndex] = true
    setSubmittedTests(nextSubmitted)

    const nextCompleted = [...completedTests]
    nextCompleted[testIndex] = true
    setCompletedTests(nextCompleted)

    if (testIndex < quizTests.length - 1) {
      setOpenTest(testIndex + 1)
    }
  }

  return (
    <section className="section page-shell">
      <div className="section-heading quiz-heading">
        <p className="eyebrow">Quiz Practice</p>
        <h2>Step-by-step interview practice</h2>
        <p>
          Complete each test in order. Once a test is submitted, the next one unlocks so you can progress smoothly through the interview preparation flow.
        </p>
      </div>

      <div className="quiz-stack">
        {quizTests.map((test, index) => {
          const isLocked = index > 0 && !completedTests[index - 1]
          const isOpen = openTest === index
          const selectedAnswers = answers[index]
          const isSubmitted = submittedTests[index]
          const score = scores[index]
          const totalQuestions = test.questions.length

          return (
            <article className={`quiz-test-card${isLocked ? ' quiz-test-card--locked' : ''}`} key={test.title}>
              <button
                className="quiz-test-toggle"
                type="button"
                onClick={() => !isLocked && setOpenTest(isOpen ? -1 : index)}
                disabled={isLocked}
              >
                <div className="quiz-test-header">
                  <div>
                    <span className="quiz-badge">Test {index + 1}</span>
                    <h3>{test.title}</h3>
                    <p>{test.subtitle}</p>
                  </div>
                  <div className="quiz-test-meta">
                    <span className="quiz-count">{totalQuestions} MCQs</span>
                    {isLocked ? <span className="quiz-chip">Locked</span> : null}
                    {isSubmitted ? <span className="quiz-chip quiz-chip--success">Completed</span> : null}
                  </div>
                </div>
              </button>

              {isOpen ? (
                <div className="quiz-body">
                  <ol className="quiz-question-list">
                    {test.questions.map((item, questionIndex) => {
                      const selected = selectedAnswers[questionIndex]
                      const isCorrect = submittedTests[index] ? selected === 0 : false
                      return (
                        <li key={`${test.title}-${questionIndex}`}>
                          <strong>{questionIndex + 1}. {item.question}</strong>
                          <div className="quiz-option-grid">
                            {item.options.map((option, optionIndex) => {
                              const isSelected = selected === optionIndex
                              const showResult = submittedTests[index]
                              const isCorrectOption = optionIndex === 0
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  className={`quiz-option${isSelected ? ' quiz-option--selected' : ''}${showResult && isCorrectOption ? ' quiz-option--correct' : ''}${showResult && isSelected && !isCorrectOption ? ' quiz-option--wrong' : ''}`}
                                  onClick={() => !isSubmitted && handleAnswer(index, questionIndex, optionIndex)}
                                  disabled={isSubmitted}
                                >
                                  <span>{String.fromCharCode(65 + optionIndex)}.</span> {option}
                                </button>
                              )
                            })}
                          </div>
                          {isSubmitted ? (
                            <p className={`quiz-feedback${isCorrect ? ' quiz-feedback--correct' : ' quiz-feedback--wrong'}`}>
                              {isCorrect ? 'Correct answer' : `Your answer: ${selected === null ? 'Not answered' : item.options[selected]}. Correct answer: ${item.options[0]}`}
                            </p>
                          ) : null}
                        </li>
                      )
                    })}
                  </ol>

                  {isSubmitted ? (
                    <div className="quiz-result-card">
                      <h4>Your result</h4>
                      <p>
                        You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong>.
                      </p>
                      <p>{score === totalQuestions ? 'Excellent work. You nailed every question.' : score >= totalQuestions / 2 ? 'Great effort. A few review points remain.' : 'A good start. Review the correct answers and try again.'}</p>
                    </div>
                  ) : (
                    <button className="primary-button quiz-submit" type="button" onClick={() => handleSubmit(index)}>
                      Submit Test {index + 1} <ArrowRight size={18} />
                    </button>
                  )}
                </div>
              ) : null}
            </article>
          )
        })}
      </div>

      <div className="quiz-premium-card">
        <div>
          <p className="eyebrow">Premium Questions</p>
          <h3>Advance your preparation with premium interview questions.</h3>
          <p>Unlock more practice with detailed explanations and expert-level questions for ₹999.</p>
        </div>
        <a
          className="primary-button"
          href="https://wa.me/918617750510?text=Hi%20Safetrox%2C%20I%20want%20to%20buy%20Premium%20Questions%20for%20Rs.%20999"
          target="_blank"
          rel="noreferrer"
        >
          Buy Premium Questions <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}

function AboutPage() {
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
        <div className="about-card" style={{ backgroundImage: `linear-gradient(135deg, rgba(4, 20, 18, 0.84), rgba(7, 44, 38, 0.62)), url(${aboutImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
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
              <article className="feature-card compact-card why-tile" key={reason.title}>
                <div className="why-tile-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            )
          })}
        </div>
      </section>
    </section>
  )
}

function ServicesPage() {
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
              <Link className="program-card-action" to={service.link}>
                {service.actionLabel} <ArrowRight size={16} />
              </Link>
            ) : null}
          </article>
        ))}
      </div>

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
          <img src={certificateSample} alt="Sample certificate preview" />
          {/* <p>Receive a certificate upon completing the HSE Interview Preparation, Quiz Session, or Safety Diploma program.</p> */}
        </div>
      </section>
    </section>
  )
}

function RecommendationsPage() {
  return (
    <section className="section page-shell">
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
  )
}

function ContactPage() {
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
            <a href="mailto:shadabsami0009@gmail.com" aria-label="Email">
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
          <form className="contact-form">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="your@email.com" />
            </label>
            <label>
              <span>Message</span>
              <textarea rows={5} placeholder="Tell us about your training or consultancy needs" />
            </label>
            <button type="submit" className="primary-button">
              Send Message <Send size={18} />
            </button>
          </form>
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

function GalleryPage() {
  return (
    <section className="section page-shell">
      <div className="section-heading">
        <p className="eyebrow">Gallery</p>
        <h2>Explore the professional environment behind Safetrox training and learning experiences.</h2>
      </div>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <div key={item.title} style={{ backgroundImage: `url(${item.image})` }}>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function NewsPage() {
  return (
    <section className="section page-shell">
      <div className="section-heading">
        <p className="eyebrow">Safety news</p>
        <h2>Recent occupational safety updates shared in a clear, modern news format.</h2>
        <p>
          Stay connected with the latest developments in HSE, workplace protection,
          and industry awareness from trusted global sources.
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
  )
}

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<AppLayout><HomePage /></AppLayout>} />
        <Route path="/quiz" element={<AppLayout><QuizPage /></AppLayout>} />
        <Route path="/about" element={<AppLayout><AboutPage /></AppLayout>} />
        <Route path="/services" element={<AppLayout><ServicesPage /></AppLayout>} />
        <Route path="/recommendations" element={<AppLayout><RecommendationsPage /></AppLayout>} />
        <Route path="/contact" element={<AppLayout><ContactPage /></AppLayout>} />
        <Route path="/gallery" element={<AppLayout><GalleryPage /></AppLayout>} />
        <Route path="/news" element={<AppLayout><NewsPage /></AppLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

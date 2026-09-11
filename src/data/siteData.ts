import {
  Award,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  ShieldCheck,
  Users,
} from 'lucide-react'

import { additionalPremiumQuestions } from './additionalPremiumQuestions'

import safetroxLogo from '../assets/LOGO.png'
import homeImage from '../assets/home.jpeg'
import aboutImage from '../assets/about.jpg'
import certificateSample from '../assets/AMRITA RAO SAMPLE CERTIFICATE.png'

import trainingImage1 from '../assets/Training Image-1.jpg'
import trainingImage2 from '../assets/Training Image-2.jpg'
import trainingImage3 from '../assets/Training Image-3.jpg'
import trainingImage4 from '../assets/Training Image-4.jpg'
import trainingImage5 from '../assets/Training Image-5.jpg'
import trainingImage6 from '../assets/Training Image-6.jpg'

export const logo = safetroxLogo
export const homePhoto = homeImage
export const aboutPhoto = aboutImage
export const sampleCertificate = certificateSample

export const stats = [
  ['9+', 'Years industrial experience'],
  ['10+', 'Major industrial projects'],
  ['ISO', '45001 lead auditor'],
  ['UAE + India', 'Industry exposure'],
] as const

export const heroServices = [
  'Corporate HSE Training',
  'Safety Consultancy',
  'NEBOSH Preparation',
  'Industrial Safety Solutions',
]

export const founderCredentials = [
  'M.Sc. in Occupational Health and Safety',
  'NEBOSH International Diploma (IDipNEBOSH)',
  'ISO 45001 Lead Auditor',
]

export const chooseSafetrox = [
  {
    icon: ShieldCheck,
    title: 'Practical HSE Training',
    description: 'Real workplace examples that make safety learning stick.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: BookOpenCheck,
    title: 'Interview Focus',
    description: 'Structured prep that helps you speak clearly and confidently.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: CheckCircle2,
    title: 'Quiz Practice',
    description: 'Interactive questions that strengthen recall and understanding.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: ClipboardCheck,
    title: 'Diploma Learning',
    description: 'A clear path for building strong safety fundamentals.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Support from an experienced HSE trainer with industry exposure.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Award,
    title: 'Certificate Ready',
    description: 'Progress that supports interviews, career growth, and recognition.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
  },
] as const

export const certifications = [
  '(M.Sc.) in Occuaptional Health & Safety',
  'NEBOSH International Diploma (IDip)',
  'NEBOSH IGC',
  'IOSH',
  'ISO 45001:2018 Lead Auditor',
  'OSHA 30 Hours Construction Safety',
  'Accident Investigation (AOSH)',
  'Advanced Diploma in Industrial Safety',
]

type ServiceItem = {
  title: string
  text: string
  items: string[]
  link?: string
  actionLabel?: string
  details: {
    price: string
    duration: string
    schedule: string
    format: string
    highlights: string[]
  }
}

export const services: ServiceItem[] = [
  {
    title: 'Advance Safety Diploma',
    text: 'Structured diploma-level training for learners who want a strong foundation in occupational health and safety.',
    items: ['Core safety concepts', 'Professional learning', 'Certificate-ready training'],
    link: '/advance-safety',
    actionLabel: 'Open course',
    details: {
      price: '₹7,999',
      duration: 'Up to 20 classes',
      schedule: 'Weekends',
      format: 'Structured modules + support',
      highlights: ['Industry-focused modules', 'Certificate guidance', 'Exam preparation'],
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
    title: 'HSE Interview Preparation',
    text: 'Build confidence for interviews with focused preparation, practical responses, and professional guidance.',
    items: ['Interview readiness', 'Career guidance', 'Certificate support'],
    link: '/interview-preparation',
    actionLabel: 'View live sessions',
    details: {
      price: '₹2,999',
      duration: 'Up to 10 classes',
      schedule: 'Weekends',
      format: 'Live coaching + interview practice',
      highlights: ['Mock interviews', 'Answer framing', 'Confidence building'],
    },
  },
]

export const quizTests = [
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
    title: 'Test 2 - Entry-Level HSE Field Judgment',
    subtitle: 'Practical questions on confined spaces, permits, lifting, LOTO, and fall prevention.',
    questions: [
      { question: 'During confined space entry, oxygen is found at 20.0%. What is the most appropriate action?', options: ['Allow entry because oxygen is above 19.5%', 'Start work with continuous gas monitoring', 'Improve ventilation and verify the atmosphere before entry', 'Allow entry with SCBA only without further action'], answer: 2 },
      { question: 'A hot work permit is approved, but LEL reaches 10% during welding. What should the Safety Engineer do first?', options: ['Increase gas monitoring frequency and continue work', 'Stop work, remove the ignition source, and reassess the atmosphere', 'Allow work because LEL is below 20%', 'Continue work with an additional fire extinguisher'], answer: 1 },
      { question: 'What is the main reason for conducting a JSA before starting a task?', options: ['Identify hazards and define controls before exposure occurs', 'Record workers involved in the activity', 'Confirm availability of PPE and tools', 'Meet client documentation requirements'], answer: 0 },
      { question: 'During a lifting operation, the load starts swinging unexpectedly. What should happen immediately?', options: ['Increase crane speed to stabilize the load', 'Use tag lines and continue lifting slowly', 'Stop the operation and control the load safely', 'Reduce load weight after completing the lift'], answer: 2 },
      { question: 'A confined space has been tested and declared safe, but ventilation stops during entry. What is the correct response?', options: ['Continue because initial testing was acceptable', 'Exit the space and re-establish safe conditions', 'Continue using an escape respirator', 'Increase work speed and complete the task'], answer: 1 },
      { question: 'Which statement best describes a Permit to Work system?', options: ['A document allowing workers to perform any activity safely', 'A formal communication system controlling hazardous work', 'A replacement for risk assessment and toolbox talks', 'A document confirming workers are trained'], answer: 1 },
      { question: 'A scaffold has a green tag but missing mid-rails are noticed. What should be done?', options: ['Use the scaffold because the tag is approved', 'Report the defect and stop use until corrected', 'Use the scaffold with additional PPE', 'Allow use for a short duration only'], answer: 1 },
      { question: 'Excavation work is ongoing and cracks appear near the edge. What is the primary concern?', options: ['Soil erosion only', 'Possible excavation collapse due to instability', 'Increased water accumulation', 'Reduced excavation depth'], answer: 1 },
      { question: 'In a LOTO procedure, why is verification of zero energy required?', options: ['To confirm equipment is switched off', 'To confirm stored energy has been isolated', 'To confirm the lock color is correct', 'To confirm the maintenance team is available'], answer: 1 },
      { question: 'What is the most reliable method to prevent falls from height?', options: ['Safety harness with proper anchorage', 'Guardrails and fall prevention systems', 'Safety helmet and warning signs', 'Worker awareness training'], answer: 1 },
    ],
  },
] as const

const entryLevelPremiumQuestions = [
  { question: 'A gas detector shows 5% LEL during a routine inspection. What is the best action?', options: ['Continue work with monitoring', 'Stop the activity and investigate the gas source', 'Increase ventilation only', 'Issue a new work permit'], answer: 1 },
  { question: 'What is the primary purpose of a lifting plan?', options: ['Define the lifting method, hazards, and controls', 'Record crane inspection details only', 'Replace operator competency verification', 'Reduce lifting duration'], answer: 0 },
  { question: 'Which control is strongest for reducing chemical exposure?', options: ['Chemical-resistant gloves', 'Local exhaust ventilation', 'Replacing the hazardous chemical with a safer alternative', 'Safety training'], answer: 2 },
  { question: 'A worker enters an excavation without checking underground services. What is the main failure?', options: ['PPE selection failure', 'Planning and hazard identification failure', 'Communication failure only', 'Housekeeping failure'], answer: 1 },
  { question: 'What is the purpose of emergency drills?', options: ['Test response capability and identify weaknesses', 'Fulfill client requirements only', 'Reduce emergency equipment cost', 'Train only emergency team members'], answer: 0 },
  { question: 'During welding, what is the primary responsibility of a fire watch?', options: ['Assist the welder with equipment', 'Monitor fire hazards during and after hot work', 'Issue the hot work permit', 'Control welding parameters'], answer: 1 },
  { question: 'Why is a near-miss investigation important?', options: ['It identifies failures before a serious incident occurs', 'It is required only when property damage occurs', 'It replaces accident investigation', 'It determines employee punishment'], answer: 0 },
  { question: 'What is the best indication that a safety program is effective?', options: ['Number of safety meetings conducted', 'Reduction in incidents through improved controls', 'Amount of PPE issued', 'Number of safety observations recorded'], answer: 1 },
  { question: 'During nitrogen purging, what is the biggest hidden hazard?', options: ['High-pressure release', 'Oxygen deficiency causing unconsciousness', 'Low-temperature exposure', 'Increased fire risk'], answer: 1 },
  { question: 'A worker repeatedly violates safety procedures despite training. What is the next step?', options: ['Provide another toolbox talk only', 'Investigate behavioural and system causes', 'Increase PPE requirements', 'Ignore it if no incident happened'], answer: 1 },
] as const

export const premiumQuestions = [...entryLevelPremiumQuestions, ...additionalPremiumQuestions] as const

export const testimonials = [
  {
    name: 'Madan Mohan Kodamanchili',
    role: 'CSP® | NEBOSH IDip | ISO Lead Auditor | Sr. OHS Practitioner-ADPHC',
    quote:
      'I had the privilege of working with Shadab Sami, and I can confidently say he is an exceptional HSE professional. His deep knowledge of health, safety, and environmental regulations, combined with his proactive approach, has made a significant impact on workplace safety. One of Shadab’s greatest strengths is his ability to create a safety-first culture. I’ve seen him conduct thorough risk assessments, implement effective safety protocols, and lead training sessions that truly engage teams. His dedication was evident when he successfully led a compliance audit, ensuring our organization met the highest industry standards. Beyond his technical expertise, Shadab is a great team player and a problem-solver. His ability to communicate complex safety procedures in a clear and practical manner makes him an invaluable asset to any company. I highly recommend Shadab Sami for any role that requires strong HSE leadership. His commitment to workplace safety and excellence is truly commendable!',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQEgrizX8ahVIQ/profile-displayphoto-scale_100_100/B4DZ4qOm.eHIAY-/0/1778824934193?e=1790812800&v=beta&t=hf4LG7j5QZ28qicZXwRY3aqFNJcIufD4ZYTtxbok7Ug',
    link: 'https://www.linkedin.com/in/madan-mohan-kodamanchili-csp%C2%AE-nebosh-idip-iso-lead-auditor-sr-ohs-practitioner-adphc-78a07b148/',
  },
  {
    name: 'Pankaj Koli',
    role: 'Industrial Automation (PLC, SCADA, DCS) Engineer | BMS Engineer | Energy Management | NEBOSH Certified',
    quote:
      'I had the pleasure of working with Shadab as our HSE professional at EMDAD. Shadab consistently demonstrated a strong understanding of safety protocols and took a proactive approach to risk management. They effectively communicated complex safety measures, ensuring our team was always compliant and informed. Shadab\'s dedication to fostering a safe work environment and their ability to solve problems quickly made them an invaluable asset to our team. I highly recommend Shadab for any organization seeking a reliable and knowledgeable HSE professional.',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQGfgw8YuYhraA/profile-displayphoto-shrink_100_100/B4DZZeqbqfGgAU-/0/1745344911187?e=1790812800&v=beta&t=f79f_Sje0hbNPkbWJxa__kGEIOATXEj29HjCkucNUMU',
    link: 'https://www.linkedin.com/in/pankaj-koli-a573ba21/',
  },
  {
    name: 'Haider Ali',
    role: 'Environment, Health and Safety Manager at A-HAK AL BAWANI PIPELINE MGS III PKG 09',
    quote:
      'I had the pleasure of studying alongside Mr. Shadab Sami during our NEBOSH International Diploma (IDip) course last year. Throughout our time together, Shadab Sami consistently demonstrated a deep understanding of health and safety principles and a strong commitment to excellence. Shadab Sami possesses a unique blend of technical knowledge and practical skills, making him an invaluable asset in any health and safety role. His ability to analyze complex situations, identify potential risks, and implement effective solutions is truly commendable. In addition to his technical expertise, Shadab Sami is an excellent communicator and a collaborative team player. He has a natural ability to engage with colleagues at all levels, fostering a culture of safety and continuous improvement. I highly recommend Shadab Sami for any professional opportunities in the health and safety field. His dedication, expertise, and proactive approach will undoubtedly contribute to the success of any organization.',
    image:
      'https://media.licdn.com/dms/image/v2/C4E03AQHL3OKGK3op2Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516628258902?e=1790812800&v=beta&t=LxEcEJRIrRAXZwmZReGILfA_AkSBjhTAflZ-DM3H_Lo',
    link: 'https://www.linkedin.com/in/haider-ali-csp%C2%AE-tsp%C2%AE-taproot%C2%AE-idipnebosh-iso-ohsms-ems-osha-63882a77/',
  },
  {
    name: 'Mohammad Mokhtarul Haque',
    role: 'CMIOSH | CSP® | IdipNebosh | QHSE Management Professional',
    quote:
      'Shadab is a very dedicated HSE professional. He is young, dynamic and holds very strong knowledge and leadership quality at a young age. He has been working in the oil and gas industry as an HSE professional and helped the team manage complex turnarounds and maintenance projects safely and successfully. Shadab also holds excellent communication and training skills.',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQGokwn-C7izvQ/profile-displayphoto-scale_100_100/B4DaAMGBoNGYAY-/0/1786909302153?e=1790812800&v=beta&t=4kdWXlB1sCkoxsx-ZYeFAwuHpD12d1i7w7g4574b6E0',
    link: 'https://www.linkedin.com/in/mohammad-mokhtarul-haque-cmiosh-csp%C2%AE-idipnebosh-3856037a/',
  },
  {
    name: 'Akshay Lal',
    role: 'HSE Professional | ADNOC Group Approved | NEBOSH Certified | ISO 45001:2018 Lead Auditor',
    quote:
      'I have had the privilege of working with Shadab Sami, and I can confidently say that his dedication and motivation are unmatched. Shadab is not only extremely focused and driven in his career but also continually seeks opportunities to grow and expand his skills. His proactive approach to self-improvement is truly inspiring. What sets Shadab apart is his unwavering support for his coworkers. He is always ready to lend a helping hand, provide guidance, and foster a collaborative work environment.',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQGdO9jQHAsPNg/profile-displayphoto-shrink_100_100/B4DZQC_PDyHYAU-/0/1735216928555?e=1790812800&v=beta&t=CiL_WcovHQgNKOQ7sMa15c4rM26gbdA34wzq0YOEZnk',
    link: 'https://www.linkedin.com/in/akshay-lal-2b3624166/',
  },
] as const

export const contactMethods = [
  {
    label: 'WhatsApp',
    value: '+91 86177 50510',
    href: 'https://wa.me/918617750510',
  },
  {
    label: 'Phone',
    value: '+91 86177 50510',
    href: 'tel:+918617750510',
  },
  {
    label: 'Email',
    value: 'safetroxhse@gmail.com',
    href: 'mailto:safetroxhse@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'Mohammad Shadab Sami',
    href: 'https://www.linkedin.com/in/mohammadshadabsami/',
  },
] as const

export const gallery = [
  { title: 'Industrial Training', image: trainingImage1 },
  { title: 'Classroom Sessions', image: trainingImage2 },
  { title: 'Site Inspections', image: trainingImage3 },
  { title: 'Safety Campaigns', image: trainingImage4 },
  { title: 'Certifications', image: trainingImage5 },
  { title: 'Award Ceremonies', image: trainingImage6 },
] as const

export const safetyNews = [
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
] as const

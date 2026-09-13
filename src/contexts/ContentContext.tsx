import { createContext, useContext, useEffect, useState } from 'react'

import { services as defaultServices, testimonials as defaultTestimonials } from '../data/siteData'
import { subscribeToAdminContent } from '../firebaseData'

type SiteContent = {
  siteName: string
  tagline: string
  navItems: Array<{ name: string; path: string }>
  heroTitle: string
  heroText: string
  heroImage: string
  founderName: string
  aboutHeading: string
  aboutText: string
  footerText: string
  footerCtaTitle: string
  footerCtaText: string
  services: typeof defaultServices
  testimonials: typeof defaultTestimonials
  adminQuestions: Array<{ question: string; options: string[]; answer?: number }>
}

const defaultContent: SiteContent = {
  siteName: 'Safetrox',
  tagline: 'For Safer Tomorrow',
  navItems: [
    { name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Course Enquiry', path: '/services' },
    { name: 'Gallery', path: '/gallery' }, { name: 'Recommendations', path: '/recommendations' },
    { name: 'Quiz', path: '/quiz' }, { name: 'News', path: '/news' }, { name: 'Contact', path: '/contact' },
  ],
  heroTitle: 'Empowering Safety Professionals For Safer Tomorrow',
  heroText: 'Learn from an internationally certified HSE professional with over 9 years of industry experience in EPC projects, turnaround and maintenance, and Oil & Gas operations across the UAE and India, as well as other industrial sectors.',
  heroImage: '',
  founderName: 'Mohammad Shadab Sami',
  aboutHeading: 'We help learners and teams build confidence through practical HSE training and career-ready preparation.',
  aboutText: 'Safetrox brings together modern learning methods, real-world safety insight, and professionally structured courses for individuals and organizations.',
  footerText: 'Professional HSE training, Advance HSE Diploma level training, Career consultancy, HSE Interview Preparation and NEBOSH preparation.',
  footerCtaTitle: 'Build safer teams',
  footerCtaText: 'Start with practical HSE learning, structured preparation, and confident workplace readiness.',
  services: defaultServices,
  testimonials: defaultTestimonials,
  adminQuestions: [],
}

const ContentContext = createContext<SiteContent>(defaultContent)

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState(defaultContent)

  useEffect(() => {
    const applySavedContent = (saved: Record<string, unknown> | null) => {
      if (!saved) return
      let nextServices = defaultServices
      let nextTestimonials = defaultTestimonials
      let nextQuestions: SiteContent['adminQuestions'] = []
      try {
        if (typeof saved.servicesJson === 'string') nextServices = JSON.parse(saved.servicesJson)
        if (typeof saved.testimonialsJson === 'string') nextTestimonials = JSON.parse(saved.testimonialsJson)
        if (typeof saved.questionsJson === 'string' && saved.questionsJson.trim()) nextQuestions = JSON.parse(saved.questionsJson)
      } catch {
        return
      }
      setContent({
        siteName: typeof saved.siteName === 'string' ? saved.siteName : defaultContent.siteName,
        tagline: typeof saved.tagline === 'string' ? saved.tagline : defaultContent.tagline,
        navItems: Array.isArray(saved.navItems) ? saved.navItems : defaultContent.navItems,
        heroTitle: typeof saved.heroTitle === 'string' ? saved.heroTitle : defaultContent.heroTitle,
        heroText: typeof saved.heroText === 'string' ? saved.heroText : defaultContent.heroText,
        heroImage: typeof saved.heroImage === 'string' ? saved.heroImage : defaultContent.heroImage,
        founderName: typeof saved.founderName === 'string' ? saved.founderName : defaultContent.founderName,
        aboutHeading: typeof saved.aboutHeading === 'string' ? saved.aboutHeading : defaultContent.aboutHeading,
        aboutText: typeof saved.aboutText === 'string' ? saved.aboutText : defaultContent.aboutText,
        footerText: typeof saved.footerText === 'string' ? saved.footerText : defaultContent.footerText,
        footerCtaTitle: typeof saved.footerCtaTitle === 'string' ? saved.footerCtaTitle : defaultContent.footerCtaTitle,
        footerCtaText: typeof saved.footerCtaText === 'string' ? saved.footerCtaText : defaultContent.footerCtaText,
        services: nextServices,
        testimonials: nextTestimonials,
        adminQuestions: nextQuestions,
      })
    }

    return subscribeToAdminContent(applySavedContent)
  }, [])

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
}

export function useContent() {
  return useContext(ContentContext)
}

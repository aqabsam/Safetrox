import { useEffect, useState } from 'react'
import { BarChart3, BookOpenCheck, FileText, LayoutDashboard, LogOut, MessageSquareQuote, PlusCircle, Save, Settings, ShoppingBag, Trash2, Pencil } from 'lucide-react'

import { useAuth } from '../contexts/AuthContext'
import { loadAdminContent, saveAdminContent } from '../firebaseData'
import { services, testimonials } from '../data/siteData'
import { getAdminUids, PRIMARY_ADMIN_UID } from '../adminConfig'

const initialContent = {
  siteName: 'Safetrox',
  tagline: 'For Safer Tomorrow',
  navItemsJson: JSON.stringify([
    { name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Course Enquiry', path: '/services' },
    { name: 'Gallery', path: '/gallery' }, { name: 'Recommendations', path: '/recommendations' },
    { name: 'Quiz', path: '/quiz' }, { name: 'News', path: '/news' }, { name: 'Contact', path: '/contact' },
  ], null, 2),
  heroTitle: 'Practical HSE learning for safer workplaces',
  heroText: 'Learn from an internationally certified HSE professional with over 9 years of industry experience in EPC projects, turnaround and maintenance, and Oil & Gas operations across the UAE and India, as well as other industrial sectors.',
  heroImage: '',
  founderName: 'Mohammad Shadab Sami',
  aboutHeading: 'We help learners and teams build confidence through practical HSE training and career-ready preparation.',
  aboutText: 'Safetrox brings together modern learning methods, real-world safety insight, and professionally structured courses for individuals and organizations.',
  footerText: 'Professional HSE training, Advance HSE Diploma level training, Career consultancy, HSE Interview Preparation and NEBOSH preparation.',
  footerCtaTitle: 'Build safer teams',
  footerCtaText: 'Start with practical HSE learning, structured preparation, and confident workplace readiness.',
  resourcesJson: '[]',
  servicesJson: JSON.stringify(services, null, 2),
  testimonialsJson: JSON.stringify(testimonials, null, 2),
  questionsJson: '',
}

export default function AdminPage() {
  const { user, loading, firebaseConfigured, signIn } = useAuth()
  const isAdmin = Boolean(user && getAdminUids().includes(user.uid))
  const [content, setContent] = useState(initialContent)
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)
  const [adminEmail, setAdminEmail] = useState('')
  const [adminPassword, setAdminPassword] = useState('')
  const [activePanel, setActivePanel] = useState('overview')
  const [questionForm, setQuestionForm] = useState({ question: '', options: '', answer: '0' })
  const [editingQuestionIndex, setEditingQuestionIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!isAdmin) return
    void loadAdminContent().then((saved) => {
      if (!saved) return
      setContent((current) => ({
        ...current,
        siteName: typeof saved.siteName === 'string' ? saved.siteName : current.siteName,
        tagline: typeof saved.tagline === 'string' ? saved.tagline : current.tagline,
        navItemsJson: Array.isArray(saved.navItems) ? JSON.stringify(saved.navItems, null, 2) : current.navItemsJson,
        heroTitle: typeof saved.heroTitle === 'string' ? saved.heroTitle : current.heroTitle,
        heroText: typeof saved.heroText === 'string' ? saved.heroText : current.heroText,
        heroImage: typeof saved.heroImage === 'string' ? saved.heroImage : current.heroImage,
        founderName: typeof saved.founderName === 'string' ? saved.founderName : current.founderName,
        aboutHeading: typeof saved.aboutHeading === 'string' ? saved.aboutHeading : current.aboutHeading,
        aboutText: typeof saved.aboutText === 'string' ? saved.aboutText : current.aboutText,
        footerText: typeof saved.footerText === 'string' ? saved.footerText : current.footerText,
        footerCtaTitle: typeof saved.footerCtaTitle === 'string' ? saved.footerCtaTitle : current.footerCtaTitle,
        footerCtaText: typeof saved.footerCtaText === 'string' ? saved.footerCtaText : current.footerCtaText,
        resourcesJson: typeof saved.resourcesJson === 'string' ? saved.resourcesJson : current.resourcesJson,
        servicesJson: typeof saved.servicesJson === 'string' ? saved.servicesJson : current.servicesJson,
        testimonialsJson: typeof saved.testimonialsJson === 'string' ? saved.testimonialsJson : current.testimonialsJson,
        questionsJson: typeof saved.questionsJson === 'string' ? saved.questionsJson : current.questionsJson,
      }))
    }).catch(() => setMessage('Unable to load saved admin content.'))
  }, [isAdmin])

  if (loading) return <section className="section page-shell"><p>Checking admin access...</p></section>
  if (!firebaseConfigured) return <section className="section page-shell admin-page"><p className="eyebrow">Admin</p><h2>Connect Firebase first.</h2><p>Configure Firebase Authentication and Firestore before using the admin section.</p></section>
  if (!user) return <section className="section page-shell admin-page admin-access-message"><p className="eyebrow">Admin control room</p><h2>Admin sign in</h2><p>Use the Firebase email and password for the admin account.</p><form className="admin-login-form" onSubmit={async (event) => { event.preventDefault(); setMessage(''); setBusy(true); try { await signIn(adminEmail, adminPassword) } catch (error) { setMessage(error instanceof Error ? error.message.replace('Firebase: ', '') : 'Admin sign-in failed.') } finally { setBusy(false) } }}><label htmlFor="admin-email">Admin email</label><input id="admin-email" type="email" required value={adminEmail} onChange={(event) => setAdminEmail(event.target.value)} /><label htmlFor="admin-password">Admin password</label><input id="admin-password" type="password" required value={adminPassword} onChange={(event) => setAdminPassword(event.target.value)} />{message ? <p className="form-message form-message--error">{message}</p> : null}<button className="primary-button" type="submit" disabled={busy}>{busy ? 'Signing in...' : 'Sign in as admin'}</button></form><p className="admin-uid"><strong>Admin UID:</strong> {PRIMARY_ADMIN_UID}</p></section>
  if (!isAdmin) return <section className="section page-shell admin-page admin-access-message"><p className="eyebrow">Admin control room</p><h2>This account does not have admin access.</h2><p>Sign out and use the Firebase account assigned to the admin UID below.</p><p className="admin-uid"><strong>Your UID:</strong> {user.uid}</p><p className="admin-uid"><strong>Admin UID:</strong> {PRIMARY_ADMIN_UID}</p></section>

  const update = (field: keyof typeof initialContent, value: string) => setContent((current) => ({ ...current, [field]: value }))
  const save = async (event: React.FormEvent) => {
    event.preventDefault()
    setMessage('')
    try {
      JSON.parse(content.servicesJson)
      JSON.parse(content.testimonialsJson)
      const navItems = JSON.parse(content.navItemsJson)
      JSON.parse(content.resourcesJson)
      if (content.questionsJson.trim()) JSON.parse(content.questionsJson)
      setBusy(true)
      await saveAdminContent({ ...content, navItems })
      setMessage('Content saved to Firebase.')
    } catch (error) {
      setMessage(error instanceof Error && error.message.includes('Unexpected') ? 'Check that each JSON field is valid.' : 'Unable to save content.')
    } finally {
      setBusy(false)
    }
  }


  const serviceCount = (() => { try { return JSON.parse(content.servicesJson).length } catch { return 0 } })()
  const recommendationCount = (() => { try { return JSON.parse(content.testimonialsJson).length } catch { return 0 } })()
  const questionCount = (() => { try { return content.questionsJson.trim() ? JSON.parse(content.questionsJson).length : 0 } catch { return 0 } })()
  const questionItems = (() => { try { return content.questionsJson.trim() ? JSON.parse(content.questionsJson) as Array<{ question: string; options: string[]; answer?: number }> : [] } catch { return [] } })()

  const saveQuestion = (event: React.FormEvent | React.MouseEvent) => {
    event.preventDefault()
    const options = questionForm.options.split('\n').map((option) => option.trim()).filter(Boolean)
    if (!questionForm.question.trim() || options.length < 2) return
    const nextQuestion = { question: questionForm.question.trim(), options, answer: Math.max(0, Math.min(options.length - 1, Number(questionForm.answer) || 0)) }
    const nextQuestions = [...questionItems]
    if (editingQuestionIndex === null) nextQuestions.unshift(nextQuestion)
    else nextQuestions[editingQuestionIndex] = nextQuestion
    update('questionsJson', JSON.stringify(nextQuestions, null, 2))
    setQuestionForm({ question: '', options: '', answer: '0' })
    setEditingQuestionIndex(null)
  }

  const editQuestion = (index: number) => {
    const item = questionItems[index]
    setQuestionForm({ question: item.question, options: item.options.join('\n'), answer: String(item.answer ?? 0) })
    setEditingQuestionIndex(index)
  }

  const deleteQuestion = (index: number) => {
    update('questionsJson', JSON.stringify(questionItems.filter((_, itemIndex) => itemIndex !== index), null, 2))
    if (editingQuestionIndex === index) setEditingQuestionIndex(null)
  }

  const panels = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'website', label: 'Website content', icon: Settings },
    { id: 'services', label: 'Services & pricing', icon: ShoppingBag },
    { id: 'recommendations', label: 'Recommendations', icon: MessageSquareQuote },
    { id: 'questions', label: 'Quiz questions', icon: BookOpenCheck },
    { id: 'resources', label: 'Resources', icon: FileText },
  ]

  return <section className="section page-shell admin-page admin-dashboard">
    <div className="admin-dashboard-header"><div><p className="eyebrow">Safetrox Admin</p><h2>Global Content Manager</h2><p>Manage your website from one place. Save changes to update the public website through Firebase.</p></div><button className="secondary-button" type="button" onClick={() => window.location.reload()}><LogOut size={17} /> Refresh session</button></div>
    <div className="admin-stat-grid"><div><BarChart3 size={20} /><strong>Live CMS</strong><span>Firestore synced</span></div><div><ShoppingBag size={20} /><strong>{serviceCount} services</strong><span>Pricing and details</span></div><div><MessageSquareQuote size={20} /><strong>{recommendationCount} profiles</strong><span>Recommendations</span></div><div><BookOpenCheck size={20} /><strong>{questionCount} added questions</strong><span>Quiz bank</span></div></div>
    <div className="admin-workspace">
      <aside className="admin-sidebar">{panels.map((panel) => { const Icon = panel.icon; return <button key={panel.id} className={activePanel === panel.id ? 'is-active' : ''} type="button" onClick={() => setActivePanel(panel.id)}><Icon size={17} /> {panel.label}</button> })}</aside>
      <div className="admin-editor-area">
        {activePanel === 'overview' ? <div className="admin-welcome-card"><p className="eyebrow">Workspace overview</p><h3>Everything is ready to manage.</h3><p>Choose a section from the left to edit content. Website changes, service pricing, recommendations, quiz questions, and resource links are saved to Firestore.</p><div className="admin-overview-actions"><button className="primary-button" type="button" onClick={() => setActivePanel('website')}>Edit website content</button><button className="secondary-button" type="button" onClick={() => setActivePanel('services')}>Manage services</button></div></div> : null}
        <form className={`admin-form${activePanel === 'overview' ? ' admin-form--hidden' : ''}`} onSubmit={save}>
      {activePanel === 'website' ? <div className="admin-editor-card"><div className="admin-card-heading"><Settings size={19} /><div><h3>Website content</h3><p>Branding, navigation, hero, about, and footer content.</p></div></div>
      <label htmlFor="admin-site-name">Site name</label>
      <input id="admin-site-name" value={content.siteName} onChange={(event) => update('siteName', event.target.value)} />
      <label htmlFor="admin-tagline">Brand tagline</label>
      <input id="admin-tagline" value={content.tagline} onChange={(event) => update('tagline', event.target.value)} />
      <label htmlFor="admin-nav-items">Navigation links (JSON)</label>
      <textarea id="admin-nav-items" className="admin-code-field" rows={8} value={content.navItemsJson} onChange={(event) => update('navItemsJson', event.target.value)} />
      <label htmlFor="admin-hero-title">Hero heading</label>
      <input id="admin-hero-title" value={content.heroTitle} onChange={(event) => update('heroTitle', event.target.value)} />
      <label htmlFor="admin-hero-text">Hero description</label>
      <textarea id="admin-hero-text" rows={3} value={content.heroText} onChange={(event) => update('heroText', event.target.value)} />
      <label htmlFor="admin-hero-image">Hero image URL</label>
      <input id="admin-hero-image" value={content.heroImage} onChange={(event) => update('heroImage', event.target.value)} placeholder="Paste a hosted image URL" />
      <label htmlFor="admin-founder-name">Founder name</label>
      <input id="admin-founder-name" value={content.founderName} onChange={(event) => update('founderName', event.target.value)} />
      <label htmlFor="admin-about-heading">About heading</label>
      <textarea id="admin-about-heading" rows={2} value={content.aboutHeading} onChange={(event) => update('aboutHeading', event.target.value)} />
      <label htmlFor="admin-about-text">About description</label>
      <textarea id="admin-about-text" rows={3} value={content.aboutText} onChange={(event) => update('aboutText', event.target.value)} />
      <label htmlFor="admin-footer-text">Footer description</label>
      <textarea id="admin-footer-text" rows={3} value={content.footerText} onChange={(event) => update('footerText', event.target.value)} />
      <label htmlFor="admin-footer-cta-title">Footer CTA title</label>
      <input id="admin-footer-cta-title" value={content.footerCtaTitle} onChange={(event) => update('footerCtaTitle', event.target.value)} />
      <label htmlFor="admin-footer-cta-text">Footer CTA text</label>
      <textarea id="admin-footer-cta-text" rows={2} value={content.footerCtaText} onChange={(event) => update('footerCtaText', event.target.value)} />
      </div> : null}
      {activePanel === 'services' ? <div className="admin-editor-card"><div className="admin-card-heading"><ShoppingBag size={19} /><div><h3>Services and pricing</h3><p>Add, edit, or remove course cards and pricing in one saved collection.</p></div></div><label htmlFor="admin-services">Services data</label><textarea id="admin-services" className="admin-code-field" rows={22} value={content.servicesJson} onChange={(event) => update('servicesJson', event.target.value)} /></div> : null}
      {activePanel === 'recommendations' ? <div className="admin-editor-card"><div className="admin-card-heading"><MessageSquareQuote size={19} /><div><h3>Recommendations</h3><p>Manage names, roles, real profile photo URLs, links, and recommendation text.</p></div></div><label htmlFor="admin-testimonials">Recommendation data</label><textarea id="admin-testimonials" className="admin-code-field" rows={24} value={content.testimonialsJson} onChange={(event) => update('testimonialsJson', event.target.value)} /></div> : null}
      {activePanel === 'questions' ? <div className="admin-editor-card"><div className="admin-card-heading"><BookOpenCheck size={19} /><div><h3>Quiz questions</h3><p>Add, edit, or delete questions without touching the code.</p></div></div><div className="admin-inline-form"><label htmlFor="question-text">Question</label><textarea id="question-text" rows={3} value={questionForm.question} onChange={(event) => setQuestionForm({ ...questionForm, question: event.target.value })} placeholder="Write the question" required /><label htmlFor="question-options">Answer options, one per line</label><textarea id="question-options" rows={5} value={questionForm.options} onChange={(event) => setQuestionForm({ ...questionForm, options: event.target.value })} placeholder={'Correct answer\nWrong answer\nAnother answer'} required /><label htmlFor="question-answer">Correct option number</label><input id="question-answer" type="number" min="0" value={questionForm.answer} onChange={(event) => setQuestionForm({ ...questionForm, answer: event.target.value })} /><button className="primary-button" type="button" onClick={saveQuestion}><PlusCircle size={17} /> {editingQuestionIndex === null ? 'Add question' : 'Update question'}</button></div><div className="admin-record-list">{questionItems.map((item, index) => <article key={`${item.question}-${index}`}><div><strong>{index + 1}. {item.question}</strong><span>{item.options.length} options · Correct: {Number(item.answer ?? 0) + 1}</span></div><div className="admin-record-actions"><button type="button" onClick={() => editQuestion(index)} aria-label="Edit question"><Pencil size={16} /></button><button type="button" onClick={() => deleteQuestion(index)} aria-label="Delete question"><Trash2 size={16} /></button></div></article>)}</div><button className="primary-button admin-save-button" type="submit" disabled={busy} onClick={save}><Save size={17} /> Save question changes</button></div> : null}
      {activePanel === 'resources' ? <div className="admin-editor-card"><div className="admin-card-heading"><FileText size={19} /><div><h3>PDF, PPT and notes links</h3><p>Add, edit, or delete links to externally hosted resources. Firebase Storage is disabled to avoid charges.</p></div></div><label htmlFor="admin-resources">Resource links</label><textarea id="admin-resources" className="admin-code-field" rows={16} placeholder='[{"name":"Course.pdf","url":"https://...","type":"application/pdf"}]' value={content.resourcesJson} onChange={(event) => update('resourcesJson', event.target.value)} /></div> : null}
      {activePanel !== 'overview' ? <button className="primary-button admin-save-button" type="submit" disabled={busy}><Save size={17} /> {busy ? 'Saving...' : 'Save changes to website'}</button> : null}
    </form>
      </div>
    </div>
    {message ? <p className="form-message">{message}</p> : null}
  </section>
}

import { useEffect, useState } from 'react'
import { Award, BookOpenCheck, Eye, EyeOff, Mail, Phone, UserRound } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { loadUserEnrollments, loadUserProfile } from '../firebaseData'

function getAuthMessage(error: unknown) {
  const code = typeof error === 'object' && error && 'code' in error ? String(error.code) : ''
  const messages: Record<string, string> = {
    'auth/email-already-in-use': 'This email already has an account. Switch to Sign in.',
    'auth/invalid-credential': 'Email or password is incorrect.',
    'auth/invalid-login-credentials': 'Email or password is incorrect.',
    'auth/weak-password': 'Use a stronger password with at least 6 characters.',
    'auth/too-many-requests': 'Too many attempts. Please wait and try again.',
    'auth/operation-not-allowed': 'Enable Email/Password sign-in in Firebase Authentication.',
    'auth/network-request-failed': 'Network error. Check your connection and try again.',
  }
  return messages[code] ?? (error instanceof Error ? error.message.replace('Firebase: ', '') : 'Unable to complete account request.')
}

export default function AccountPage() {
  const { user, loading, firebaseConfigured, signIn, signUp, logOut } = useAuth()
  const [mode, setMode] = useState<'signin' | 'signup'>('signup')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)
  const [profile, setProfile] = useState<{ name?: string; phone?: string; email?: string } | null>(null)
  const [enrollments, setEnrollments] = useState<Array<{ serviceTitle?: string; status?: string }>>([])
  const [accountLoading, setAccountLoading] = useState(false)

  useEffect(() => {
    if (!user) return
    setAccountLoading(true)
    Promise.all([loadUserProfile(user.uid), loadUserEnrollments(user.uid)])
      .then(([nextProfile, nextEnrollments]) => {
        setProfile(nextProfile as { name?: string; phone?: string; email?: string } | null)
        setEnrollments(nextEnrollments as Array<{ serviceTitle?: string; status?: string }>)
      })
      .catch(() => setMessage('Your account is active, but purchase details could not be loaded yet.'))
      .finally(() => setAccountLoading(false))
  }, [user])

  if (loading) return <section className="section page-shell"><p>Loading account...</p></section>
  if (user) {
    return <section className="section page-shell account-page">
      <div className="account-dashboard-heading"><p className="eyebrow">Learner dashboard</p><h2>Welcome, {profile?.name || user.displayName || user.email}</h2><p>Review your account details, course access, and enrolment requests.</p></div>
      <div className="account-dashboard-grid">
        <article className="account-info-card"><p className="eyebrow"><UserRound size={15} /> Your details</p><h3>Profile</h3><dl><div><dt><UserRound size={15} /> Name</dt><dd>{profile?.name || user.displayName || 'Not added'}</dd></div><div><dt><Mail size={15} /> Email</dt><dd>{profile?.email || user.email}</dd></div><div><dt><Phone size={15} /> Phone</dt><dd>{profile?.phone || 'Not added'}</dd></div></dl></article>
        <article className="account-info-card"><p className="eyebrow"><Award size={15} /> Free access</p><h3>Available now</h3><ul className="account-access-list"><li><BookOpenCheck size={17} /> Quiz practice tests</li><li><Award size={17} /> Instant score review</li><li><BookOpenCheck size={17} /> Course information and learning resources</li></ul></article>
      </div>
      <article className="account-purchases"><div className="account-purchases-heading"><div><p className="eyebrow">My learning</p><h3>Purchases and enrolments</h3></div><span>{enrollments.length} request{enrollments.length === 1 ? '' : 's'}</span></div>{accountLoading ? <p>Loading your learning access...</p> : enrollments.length === 0 ? <p>No course enrolments yet. Visit Services to choose a course.</p> : <div className="account-enrolment-list">{enrollments.map((enrollment, index) => <div key={`${enrollment.serviceTitle}-${index}`}><strong>{enrollment.serviceTitle || 'Safetrox course'}</strong><span>{enrollment.status || 'pending'}</span></div>)}</div>}</article>
      {message ? <p className="form-message form-message--error">{message}</p> : null}
      <button className="primary-button account-signout" type="button" onClick={() => void logOut()}>Sign out</button>
    </section>
  }

  const submit = async (event: React.FormEvent) => {
    event.preventDefault()
    setMessage('')
    setBusy(true)
    try {
      if (mode === 'signup') await signUp(name, phone, email, password)
      else await signIn(email, password)
    } catch (error) {
      setMessage(getAuthMessage(error))
    } finally {
      setBusy(false)
    }
  }

  if (!firebaseConfigured) return <section className="section page-shell account-page"><p className="eyebrow">Account setup</p><h2>Connect Firebase to enable enrolment.</h2><p>Add the VITE_FIREBASE_* values to your deployment environment, then enable Email/Password sign-in in Firebase Authentication.</p></section>

  return <section className="section page-shell account-page">
    <div className="section-heading"><p className="eyebrow">Learner account</p><h2>{mode === 'signup' ? 'Create your Safetrox account' : 'Welcome back'}</h2><p>Create an account before enrolling in a course. Your enrolment requests will be stored securely in Firebase.</p></div>
    <div className="account-auth-layout">
      <form className="account-form" onSubmit={submit}>
        {mode === 'signup' ? <>
          <label htmlFor="account-name">Full name</label>
          <input id="account-name" type="text" required value={name} onChange={(event) => setName(event.target.value)} />
          <label htmlFor="account-phone">Phone number</label>
          <input id="account-phone" type="tel" required value={phone} onChange={(event) => setPhone(event.target.value)} />
        </> : null}
        <label htmlFor="account-email">Email address</label>
        <input id="account-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="account-password">Password</label>
        <div className="password-field">
          <input id="account-password" type={showPassword ? 'text' : 'password'} minLength={6} required value={password} onChange={(event) => setPassword(event.target.value)} />
          <button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
        </div>
        {message ? <p className="form-message form-message--error">{message}</p> : null}
        <div className="account-switch">
          <span>{mode === 'signup' ? 'Already have an account?' : 'Need an account?'}</span>
          <button className="text-button" type="button" onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')}>{mode === 'signup' ? 'Sign in' : 'Create one'}</button>
        </div>
        <button className="primary-button" type="submit" disabled={busy}>{busy ? 'Please wait...' : mode === 'signup' ? 'Create account' : 'Sign in'}</button>
      </form>
    </div>
  </section>
}
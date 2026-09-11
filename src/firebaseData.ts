import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, serverTimestamp, setDoc, where } from 'firebase/firestore'

import { db } from './firebase'

export async function createEnrollment(uid: string, serviceTitle: string) {
  if (!db) throw new Error('Firebase is not configured yet.')
  await addDoc(collection(db, 'enrollments'), {
    uid,
    serviceTitle,
    status: 'pending',
    createdAt: serverTimestamp(),
  })
}

export async function saveAdminContent(content: Record<string, unknown>) {
  if (!db) throw new Error('Firebase is not configured yet.')
  await setDoc(doc(db, 'siteContent', 'main'), { ...content, updatedAt: serverTimestamp() }, { merge: true })
}

export async function loadAdminContent() {
  if (!db) return null
  const snapshot = await getDoc(doc(db, 'siteContent', 'main'))
  return snapshot.exists() ? snapshot.data() : null
}

export function subscribeToAdminContent(onChange: (content: Record<string, unknown> | null) => void) {
  if (!db) return () => undefined
  return onSnapshot(doc(db, 'siteContent', 'main'), (snapshot) => {
    onChange(snapshot.exists() ? snapshot.data() : null)
  })
}

export async function loadUserProfile(uid: string) {
  if (!db) return null
  const snapshot = await getDoc(doc(db, 'userProfiles', uid))
  return snapshot.exists() ? snapshot.data() : null
}

export async function loadUserEnrollments(uid: string) {
  if (!db) return []
  const snapshot = await getDocs(query(collection(db, 'enrollments'), where('uid', '==', uid)))
  return snapshot.docs.map((item) => item.data())
}
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, type User } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'

import { auth, db } from '../firebase'

type AuthContextValue = {
  user: User | null
  loading: boolean
  firebaseConfigured: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, phone: string, email: string, password: string) => Promise<void>
  logOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!auth) {
      setLoading(false)
      return undefined
    }
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser)
      setLoading(false)
    })
  }, [])

  const value: AuthContextValue = {
    user,
    loading,
    firebaseConfigured: Boolean(auth),
    signIn: (email, password) => {
      if (!auth) return Promise.reject(new Error('Firebase is not configured yet.'))
      return signInWithEmailAndPassword(auth, email, password).then(() => undefined)
    },
    signUp: async (name, phone, email, password) => {
      if (!auth) return Promise.reject(new Error('Firebase is not configured yet.'))
      const credential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(credential.user, { displayName: name })
      try {
        await setDoc(doc(db as NonNullable<typeof db>, 'userProfiles', credential.user.uid), {
          uid: credential.user.uid,
          name,
          phone,
          email,
          createdAt: serverTimestamp(),
        })
      } catch {
        // Authentication should still succeed if Firestore rules have not been deployed yet.
      }
    },
    logOut: () => auth ? signOut(auth) : Promise.resolve(),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
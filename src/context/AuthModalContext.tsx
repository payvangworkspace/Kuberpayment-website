import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface AuthModalContextValue {
  isSignInOpen: boolean
  openSignIn: () => void
  closeSignIn: () => void
}

const AuthModalContext = createContext<AuthModalContextValue | null>(null)

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [isSignInOpen, setIsSignInOpen] = useState(false)

  const openSignIn = useCallback(() => setIsSignInOpen(true), [])
  const closeSignIn = useCallback(() => setIsSignInOpen(false), [])

  return (
    <AuthModalContext.Provider value={{ isSignInOpen, openSignIn, closeSignIn }}>
      {children}
    </AuthModalContext.Provider>
  )
}

export function useAuthModal() {
  const ctx = useContext(AuthModalContext)
  if (!ctx) throw new Error('useAuthModal must be used within AuthModalProvider')
  return ctx
}

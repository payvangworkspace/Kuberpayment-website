import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useAuthModal } from '../context/AuthModalContext'
import { Toast } from './Toast'

export function SignInModal() {
  const { isSignInOpen, closeSignIn } = useAuthModal()
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isSignInOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isSignInOpen])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
    closeSignIn()
    setShowToast(true)
  }

  return (
    <>
      {isSignInOpen && (
        <div
          className="auth-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sign-in-title"
          onClick={closeSignIn}
        >
          <div className="auth-modal__content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="auth-modal__close"
              onClick={closeSignIn}
              aria-label="Close"
            >
              ×
            </button>
            <h2 id="sign-in-title">Sign In</h2>
            <p className="auth-modal__subtitle">Access your KuberPayment account</p>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="signInEmail">Email</label>
                <input type="email" id="signInEmail" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="signInPassword">Password</label>
                <input type="password" id="signInPassword" name="password" required />
              </div>
              <button type="submit" className="btn btn--primary auth-form__submit">
                Sign In
              </button>
            </form>
            <p className="auth-modal__footer">
              Don&apos;t have an account?{' '}
              <Link to="/register" onClick={closeSignIn}>
                Register
              </Link>
            </p>
          </div>
        </div>
      )}

      {showToast && (
        <Toast
          message="Signed in successfully"
          detail="Welcome back to KuberPayment."
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
}

import { useState, type FormEvent } from 'react'
import { Breadcrumb } from '../components/Breadcrumb'
import { Toast } from '../components/Toast'
import { useAuthModal } from '../context/AuthModalContext'

export function RegisterPage() {
  const { openSignIn } = useAuthModal()
  const [showToast, setShowToast] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
    setShowToast(true)
  }

  return (
    <>
      <div className="page-header">
        <div className="container container--narrow">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Register' }]} />
          <h1>Create your account</h1>
          <p>Register to access insights, updates, and personalized content from KuberPayment.</p>
        </div>
      </div>

      <section className="section">
        <div className="container container--narrow">
          <div className="auth-page">
            <form className="auth-form auth-form--wide" onSubmit={handleSubmit}>
              <div className="auth-form__row">
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="registerEmail">Email</label>
                <input type="email" id="registerEmail" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" />
              </div>
              <div className="auth-form__row">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>
              </div>
              <button type="submit" className="btn btn--primary auth-form__submit">
                Register
              </button>
            </form>
            <p className="auth-page__footer">
              Already have an account?{' '}
              <button type="button" className="auth-page__link" onClick={openSignIn}>
                Sign in
              </button>
            </p>
          </div>
        </div>
      </section>

      {showToast && (
        <Toast
          message="Registered successfully"
          detail="Your account has been created. Welcome to KuberPayment."
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
}

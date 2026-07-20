import { Outlet } from 'react-router-dom'
import { MenuProvider } from '../context/MenuContext'
import { AuthModalProvider } from '../context/AuthModalContext'
import { Header } from './Header'
import { Footer } from './Footer'
import { MenuOverlay } from './MenuOverlay'
import { SignInModal } from './SignInModal'

export function Layout() {
  return (
    <MenuProvider>
      <AuthModalProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <MenuOverlay />
        <SignInModal />
      </AuthModalProvider>
    </MenuProvider>
  )
}

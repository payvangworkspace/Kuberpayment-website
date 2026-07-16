import { Outlet } from 'react-router-dom'
import { MenuProvider } from '../context/MenuContext'
import { Header } from './Header'
import { Footer } from './Footer'
import { MenuOverlay } from './MenuOverlay'

export function Layout() {
  return (
    <MenuProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MenuOverlay />
    </MenuProvider>
  )
}

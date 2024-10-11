import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { MinFooter } from './components/minFooter'

export function App() {
  const location = useLocation()

  return (
    <div className="flex flex-col h-screen w-screen px-6">
      <Header />

      <Outlet />

      {location.pathname === '/signup' ? <MinFooter /> : <Footer />}
    </div>
  )
}

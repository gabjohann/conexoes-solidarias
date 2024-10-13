import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { MinFooter } from './components/min-footer'

export function App() {
  const location = useLocation()

  return (
    <div className="flex flex-col w-screen h-screen px-6">
      <Header />

      <Outlet />

      {location.pathname === '/' ? <Footer /> : <MinFooter />}
    </div>
  )
}

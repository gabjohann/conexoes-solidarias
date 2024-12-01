import { Toaster } from 'sonner'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { MinFooter } from './components/min-footer'
import { useEffect } from 'react'

export function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem('conexoes-solidariasLogin') === 'true'

    isLoggedIn
      ? navigate('/registeredCompanies', { replace: true })
      : navigate('/', { replace: true })
  }, [navigate])

  return (
    <div className="flex flex-col w-screen h-screen px-6">
      <Toaster />
      <Header />

      <Outlet />

      {location.pathname === '/' ? <MinFooter /> : <Footer />}
    </div>
  )
}

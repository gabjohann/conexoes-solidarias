import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImg from '../assets/logo.svg'

interface NavMenuType {
  title: string
  link: string
}

const navMenuItems: NavMenuType[] = [
  {
    title: 'entrar',
    link: '/login',
  },
  {
    title: 'cadastrar',
    link: '/signup',
  },
]

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const isLoggedIn = localStorage.getItem('conexoes-solidariasLogin') === 'true'

  function handleLogOut() {
    localStorage.removeItem('conexoes-solidariasLogin')
    navigate('/', { replace: true })
  }

  return (
    <header className="flex items-center justify-between py-8">
      <Link to={'/'}>
        <img src={logoImg} alt="hug" width={32} />
      </Link>

      {!isLoggedIn ? (
        <ul className="flex gap-4">
          {navMenuItems.map(({ title, link }) => {
            const isActive = location.pathname === link

            return (
              <li
                key={title}
                className={`px-4 py-1 rounded-full cursor-pointer ${isActive ? 'bg-laranjaSenac' : 'bg-laranjaSenac/70'} hover:bg-laranjaSenac`}
              >
                <Link
                  to={link}
                  className={`font-medium capitalize text-azulSenac ${isActive && 'font-semibold'}`}
                >
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <button
          type="button"
          onClick={handleLogOut}
          className="px-4 py-1 font-medium capitalize rounded-full cursor-pointer bg-laranjaSenac hover:bg-laranjaSenac/70 text-azulSenac"
        >
          Sair
        </button>
      )}
    </header>
  )
}

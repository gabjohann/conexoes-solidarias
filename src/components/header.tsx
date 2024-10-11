import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.svg'

interface NavMenuType {
  title: string
  link: string
}

const navMenuItems: NavMenuType[] = [
  {
    title: 'sobre',
    link: '/',
  },
  {
    title: 'empresas parceiras',
    link: '/registeredCompanies',
  },
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
  const location = useLocation()

  const startIndex = location.pathname === '/' ? 1 : 0

  return (
    <header className="flex items-center justify-between py-8">
      <Link to={'/'}>
        <img src={logoImg} alt="hug" width={32} />
      </Link>

      <ul className="flex gap-4">
        {navMenuItems.slice(startIndex).map(({ title, link }) => {
          return (
            <li
              key={title}
              className="px-4 py-1 rounded-full cursor-pointer bg-laranjaSenac/70 hover:bg-laranjaSenac"
            >
              <Link to={link} className="font-medium capitalize text-azulSenac">
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

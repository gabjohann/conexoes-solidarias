import { Link } from 'react-router-dom'
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
    link: '/',
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
  return (
    <header className="flex items-center justify-between py-8">
      <Link to={'/'}>
        <img src={logoImg} alt="hug" width={32} />
      </Link>

      <ul className="flex gap-4">
        {navMenuItems.map(({ title, link }) => {
          return (
            <li
              key={title}
              className="cursor-pointer bg-laranjaSenac/70 px-4 py-1 rounded-full hover:bg-laranjaSenac"
            >
              <Link to={link} className="capitalize text-azulSenac font-medium">
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

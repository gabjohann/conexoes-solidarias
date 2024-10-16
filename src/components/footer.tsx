import { Separator } from './ui/separator'
import logoImg from '../assets/logo.svg'
import { Link } from 'react-router-dom'

interface FooterMenuType {
  title: string
  link: string
}

const footerMenuItems: FooterMenuType[] = [
  {
    title: 'se cadastre',
    link: '/signup',
  },
  {
    title: 'nossos parceiros',
    link: '/registeredCompanies',
  },
]

export function Footer() {
  return (
    <footer className="py-8">
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <img src={logoImg} alt="hug" width={18} />
            <h1 className="text-2xl font-semibold text-laranjaSenac">
              Conexões Solidárias
            </h1>
          </div>
          <p className="text-white/70">Conectando pessoas e empresas.</p>
          <p className="text-white/70">Reconstruindo o Rio Grande do Sul.</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-3 text-lg font-medium text-white">Links úteis</p>
          <ul className="space-y-3 text-white/70">
            {footerMenuItems.map(({ title, link }) => (
              <li
                key={title}
                className="capitalize hover:text-white hover:font-medium"
              >
                <Link to={link} className="cursor-pointer">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="my-8 bg-laranjaSenac" />

      <div className="flex items-center justify-between">
        <p className="font-extralight text-white/70">
          Copyright &copy; 2024 - Senac Canoas
        </p>

        <p className="font-extralight text-white/70">
          Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  )
}

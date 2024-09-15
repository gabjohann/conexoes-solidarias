import { Separator } from './ui/separator'
import logoImg from '../assets/logo.svg'

interface FooterMenuType {
  title: string
  link: string
}

const footerMenuItems: FooterMenuType[] = [
  {
    title: 'quem somos',
    link: '/',
  },
  {
    title: 'se cadastre',
    link: '/',
  },
  {
    title: 'nossos parceiros',
    link: '/',
  },
  {
    title: 'seja um parceiro',
    link: '/',
  },
]

const [firstList, secondList] = [
  footerMenuItems.slice(0, 2),
  footerMenuItems.slice(2),
]

export function Footer() {
  return (
    <footer className="py-8">
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <img src={logoImg} alt="hug" width={18} />
            <h1 className="text-laranjaSenac font-semibold text-2xl">
              Conexões Solidárias
            </h1>
          </div>
          <p className="text-white/70">Conectando pessoas e empresas.</p>
          <p className="text-white/70">Reconstruindo o Rio Grande do Sul.</p>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="font-medium text-lg text-white mb-3">Links úteis</p>
          <ul className="space-y-3 text-white/70">
            {firstList.map(({ title, link }) => (
              <li key={title} className="capitalize">
                <a href={link} className="cursor-pointer">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-lg text-white mb-3">Links úteis</p>
          <ul className="space-y-3 text-white/70">
            {secondList.map(({ title, link }) => (
              <li key={title} className="capitalize">
                <a href={link} className="cursor-pointer">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="my-8 bg-laranjaSenac" />

      <div className="flex items-center justify-between">
        <p className="font-extralight text-white/70">
          Copyright © 2024 - Senac Canoas
        </p>

        <p className="font-extralight text-white/70">
          Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  )
}

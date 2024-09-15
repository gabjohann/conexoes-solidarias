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
    title: 'cadastrar',
    link: '/',
  },
  {
    title: 'empresas parceiras',
    link: '/',
  },
]

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <img src={logoImg} alt="hug" width={32} />

      <ul className="flex gap-4">
        {navMenuItems.map(({ title, link }) => {
          return (
            <li
              key={title}
              className="cursor-pointer bg-laranjaSenac/70 px-4 py-1 rounded-full hover:bg-laranjaSenac"
            >
              <a href={link} className="capitalize text-azulSenac font-medium">
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

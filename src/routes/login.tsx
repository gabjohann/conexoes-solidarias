import { Input } from '@/components/input'
import { Link } from 'react-router-dom'

export function LoginForm() {
  return (
    <div className="flex items-center justify-center flex-1">
      <form className="flex flex-col gap-4 w-96">
        <label htmlFor="" className="text-lg text-white">
          Login
        </label>

        <Input type="text" placeholder="E-mail" className="flex-1" />

        <Input type="password" placeholder="Senha" className="flex-1" />

        <button
          type="submit"
          className="py-3 mt-2 font-semibold rounded-full bg-laranjaSenac text-azulSenac hover:font-bold hover:bg-laranjaSenac/70"
        >
          Enviar
        </button>

        <Link to="/" className="text-white underline">
          Esqueci minha senha
        </Link>
      </form>
    </div>
  )
}

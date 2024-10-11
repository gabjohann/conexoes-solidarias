import { Input } from '@/components/input'

export function LoginForm() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <form className="flex flex-col gap-4 w-96">
        <label htmlFor="" className="text-white text-lg">
          Login
        </label>

        <Input type="text" placeholder="E-mail" className="flex-1" />

        <Input type="password" placeholder="Senha" className="flex-1" />

        <button
          type="submit"
          className="bg-laranjaSenac rounded-full py-3 mt-2 text-azulSenac font-semibold hover:font-bold hover:bg-laranjaSenac/70"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

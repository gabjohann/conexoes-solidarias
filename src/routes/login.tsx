import { Input } from '@/components/input'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

type LoginFormData = {
  email: string
  password: string
}

export function LoginForm() {
  const userMail = 'marcelo@mail.com'
  const userPassword = '1234'

  const { register, handleSubmit } = useForm<LoginFormData>()

  const navigate = useNavigate()

  function handleLogin(data: LoginFormData) {
    if (data.email === userMail && data.password === userPassword) {
      localStorage.setItem('conexoes-solidariasLogin', 'true')
      navigate('/registeredCompanies', { replace: true })
    } else {
      toast.error('E-mail ou senha incorretos!', {
        position: 'top-right',
      })
    }
  }

  return (
    <div className="flex items-center justify-center flex-1">
      <form
        className="flex flex-col gap-4 w-96"
        onSubmit={handleSubmit(handleLogin)}
      >
        <label htmlFor="" className="text-lg text-white">
          Login
        </label>

        <Input
          type="text"
          placeholder="E-mail"
          className="flex-1"
          {...register('email')}
        />

        <Input
          type="password"
          placeholder="Senha"
          className="flex-1"
          {...register('password')}
        />

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

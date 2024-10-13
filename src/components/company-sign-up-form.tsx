import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const registerEnterpriseFormSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  lastName: z.string().min(1, 'O sobrenome é obrigatório'),
  cpf: z.number().min(1, 'O CPF é obrigatório'),
  celphone: z.number().min(1, 'O CPF é obrigatório'),
  email: z.string().email('Formato de e-mail inválido!'),
  password: z.string().min(1, 'O celular é obrigatório'),
  confirm_password: z.string(),
  postalcode: z.number().min(1, 'O CEP é obrigatório').max(8),
})

type RegisterEnterpriseFormData = z.infer<typeof registerEnterpriseFormSchema>

export function CompanySignUpForm() {
  const { register, handleSubmit } = useForm<RegisterEnterpriseFormData>({
    resolver: zodResolver(registerEnterpriseFormSchema),
  })

  function registerEnterprise(data: RegisterEnterpriseFormData) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(registerEnterprise)}
      className="flex flex-col flex-1"
    >
      <div className="flex items-start justify-between flex-1">
        <div className="flex flex-col gap-4">
          <label htmlFor="" className="text-lg text-white">
            Dados pessoais
          </label>
          <div className="flex items-center justify-between gap-3">
            <Input
              type="text"
              placeholder="Nome"
              className="flex-1"
              {...register('name')}
            />
            <Input type="text" placeholder="Sobrenome" className="flex-1" />
          </div>

          <div className="flex items-center gap-3">
            <Input type="number" placeholder="CPF" className="flex-1" />
            <Input type="number" placeholder="Celular" className="flex-1" />
          </div>
          <div className="flex items-center gap-3">
            <Input
              type="number"
              placeholder="Digite sua senha"
              className="flex-1"
            />
            <Input
              type="number"
              placeholder="Confirme a senha"
              className="flex-1"
            />
          </div>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            className="flex-1"
          />
          <div className="flex items-end gap-3">
            <label htmlFor="typeOfHelp" className="text-white">
              Informe seu cargo na empresa:
            </label>
            <Select>
              <SelectTrigger className="flex-1 border-laranjaSenac text-white/70">
                <SelectValue placeholder="Cargo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ceo">Dono</SelectItem>
                <SelectItem value="cto">Sócio</SelectItem>
                <SelectItem value="hr">RH</SelectItem>
                <SelectItem value="other">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="" className="text-lg text-white">
            Dados da empresa
          </label>
          <div className="flex items-center justify-between">
            <div className="flex items-end gap-3">
              <Input type="number" placeholder="CEP" className="max-w-56" />
              <a
                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                target="blank"
                className="underline text-white/70 hover:text-white"
              >
                Não sei meu CEP
              </a>
            </div>
          </div>

          <div className="flex gap-3">
            <Input type="text" placeholder="Endereço" className="flex-1" />
            <Input type="number" placeholder="Número" className="max-w-28" />
          </div>

          <div className="flex gap-3">
            <Input type="text" placeholder="Bairro" className="max-w-60" />
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="Estado" className="max-w-28" />
          </div>

          <div className="flex items-center gap-3">
            <Input type="number" placeholder="CNPJ" className="flex-1" />
            <Input type="text" placeholder="Razão social" className="flex-1" />
          </div>

          <div className="flex items-end gap-3">
            <label htmlFor="typeOfHelp" className="text-white">
              Informe o serviço prestado:
            </label>
            <Select>
              <SelectTrigger className="flex-1 border-laranjaSenac text-white/70">
                <SelectValue placeholder="Serviço prestado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="discount">Desconto</SelectItem>
                <SelectItem value="donation">Doação</SelectItem>
                <SelectItem value="volunteering">Voluntariado</SelectItem>
                <SelectItem value="psychologicalCare">
                  Atendimento Psicológico
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <button
          type="submit"
          className="px-56 py-3 font-semibold rounded-full mt-14 bg-laranjaSenac text-azulSenac hover:font-bold hover:bg-laranjaSenac/70"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

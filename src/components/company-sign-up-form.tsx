import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/input'

const registerEnterpriseFormSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  lastName: z.string().min(1, 'O sobrenome é obrigatório'),
  cpf: z.string().min(1, 'O CPF é obrigatório'),
  phoneNumber: z.string().min(1, 'O telefone é obrigatório'),
  email: z.string().email('Formato de e-mail inválido!'),
  password: z.string().min(1, 'A senha é obrigatória'),
  confirm_password: z.string().min(1, 'A confirmação é obrigatória'),
  postalCode: z.string().min(1, 'O CEP é obrigatório').max(8),
  address: z.string().min(1, 'O endereço é obrigatório'),
  number: z.string().min(1, 'O número é obrigatório'),
  neighborhood: z.string().min(1, 'O bairro é obrigatório'),
  city: z.string().min(1, 'A cidade é obrigatória'),
  state: z.string().min(1, 'O estado é obrigatório'),
  cnpj: z.string().min(1, 'O CNPJ é obrigatório'),
  typeOfHelp: z.string().min(1, 'O tipo de ajuda é obrigatório'),
  socialReason: z.string().min(1, 'A razão social é obrigatória'),
  serviceProvided: z.string().min(1, 'O serviço prestado é obrigatório'),
})

type RegisterEnterpriseFormData = z.infer<typeof registerEnterpriseFormSchema>

export function CompanySignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterEnterpriseFormData>({
    resolver: zodResolver(registerEnterpriseFormSchema),
  })

  async function registerEnterprise(data: RegisterEnterpriseFormData) {
    console.log(data)

    localStorage.setItem('registerCompany', JSON.stringify(data))
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
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-3">
              <Input
                type="text"
                placeholder="Nome"
                className="flex-1"
                {...register('name')}
              />

              <Input
                type="text"
                placeholder="Sobrenome"
                className="flex-1"
                {...register('lastName')}
              />
            </div>
            <div className="flex justify-around flex-1">
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Input
                type="text"
                placeholder="CPF"
                className="flex-1"
                {...register('cpf')}
              />

              <Input
                type="text"
                placeholder="Celular"
                className="flex-1"
                {...register('phoneNumber')}
              />
            </div>

            <div className="flex justify-around gap-1">
              {errors.cpf && (
                <span className="text-red-500">{errors.cpf.message}</span>
              )}
              {errors.phoneNumber && (
                <span className="text-red-500">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Input
                type="password"
                placeholder="Digite sua senha"
                className="flex-1"
                {...register('password')}
              />

              <Input
                type="password"
                placeholder="Confirme a senha"
                className="flex-1"
                {...register('confirm_password')}
              />
            </div>
            <div className="flex justify-around gap-1">
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              {errors.confirm_password && (
                <span className="text-red-500">
                  {errors.confirm_password.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              className="flex-1"
              {...register('email')}
            />

            {errors.email && (
              <span className="text-center text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex items-end gap-3">
            <label htmlFor="typeOfHelp" className="text-white">
              Informe seu cargo na empresa:
            </label>
            <select
              className="flex-1 px-3 py-1 bg-transparent border rounded-md border-laranjaSenac text-white/70"
              id="servicesProvided"
              {...register('serviceProvided')}
            >
              <option value="" disabled selected hidden>
                Cargo
              </option>
              <option className="border bg-azulSena" value="discount">
                Dono
              </option>
              <option className="bg-azulSenac" value="donation">
                Sócio
              </option>
              <option className="bg-azulSenac" value="volunteering">
                RH
              </option>
              <option className="bg-azulSenac" value="psychologicalCare">
                Outro
              </option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="" className="text-lg text-white">
            Dados da empresa
          </label>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-end gap-3">
                <Input
                  type="number"
                  placeholder="CEP"
                  className="max-w-56"
                  {...register('postalCode')}
                />
                <a
                  href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                  target="blank"
                  className="underline text-white/70 hover:text-white"
                >
                  Não sei meu CEP
                </a>
              </div>

              {errors.postalCode && (
                <span className="text-red-500">
                  {errors.postalCode.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Endereço"
                className="flex-1"
                {...register('address')}
              />

              <Input
                type="text"
                placeholder="Número"
                className="max-w-28"
                {...register('number')}
              />
            </div>
            <div className="flex justify-around flex-1">
              {errors.address && (
                <span className="text-red-500">{errors.address.message}</span>
              )}
              {errors.number && (
                <span className="text-red-500">{errors.number.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Bairro"
                className="max-w-60"
                {...register('neighborhood')}
              />
              <Input type="text" placeholder="Cidade" {...register('city')} />
              <Input
                type="text"
                placeholder="Estado"
                className="max-w-28"
                {...register('state')}
              />
            </div>

            <div className="flex justify-around flex-1">
              {errors.neighborhood && (
                <span className="text-red-500">
                  {errors.neighborhood.message}
                </span>
              )}
              {errors.city && (
                <span className="text-red-500">{errors.city.message}</span>
              )}
              {errors.state && (
                <span className="text-red-500">{errors.state.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Input
                type="text"
                placeholder="CNPJ"
                className="flex-1"
                {...register('cnpj')}
              />
              <Input
                type="text"
                placeholder="Razão social"
                className="flex-1"
                {...register('socialReason')}
              />
            </div>

            <div className="flex justify-around flex-1">
              {errors.cnpj && (
                <span className="text-red-500">{errors.cnpj.message}</span>
              )}
              {errors.socialReason && (
                <span className="text-red-500">
                  {errors.socialReason.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-end gap-3">
            <label htmlFor="services" className="text-white">
              Informe o serviço prestado:
            </label>
            <select
              className="flex-1 px-3 py-1 bg-transparent border rounded-md border-laranjaSenac text-white/70"
              id="servicesProvided"
              {...register('serviceProvided')}
            >
              <option value="" disabled selected hidden>
                Serviço prestado
              </option>
              <option className="border bg-azulSena" value="discount">
                Desconto
              </option>
              <option className="bg-azulSenac" value="donation">
                Doação
              </option>
              <option className="bg-azulSenac" value="volunteering">
                Voluntariado
              </option>
              <option className="bg-azulSenac" value="psychologicalCare">
                Atendimento Psicológico
              </option>
            </select>
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

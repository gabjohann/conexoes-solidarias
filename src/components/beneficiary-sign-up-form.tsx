import { Input } from './input'

export function BeneficiarySignUpForm() {
  return (
    <form>
      <div className="pb-4">
        <label htmlFor="" className="text-lg text-white">
          Dados pessoais
        </label>
      </div>
      <div className="flex items-center justify-between flex-1">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <Input type="text" placeholder="Nome" className="flex-1" />
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
        </div>

        <div className="flex flex-col gap-4">
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
          <div className="h-[38px]" />
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

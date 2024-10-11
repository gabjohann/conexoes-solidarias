export function Home() {
  return (
    <div className="flex flex-1 flex-col gap-10 text-white font-light justify-center max-w-[700px] pl-24">
      <h1 className="font-semibold text-2xl">Conexões Solidárias</h1>
      <p className="leading-8">
        Uma iniciativa do{' '}
        <span className="font-semibold text-laranjaSenac">
          Conexão Senac Canoas
        </span>
        , que busca unir pessoas afetadas pela enchente que atingiu o{' '}
        <span className="font-semibold text-laranjaSenac">
          Rio Grande do Sul
        </span>{' '}
        com empresas, ONGs, entidades médicas e outros setores. <br /> O
        objetivo é fornecer apoio na reestruturação das suas vidas pessoais,
        profissionais e psicológicas.
      </p>
    </div>
  )
}

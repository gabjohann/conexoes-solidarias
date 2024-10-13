import { Separator } from './ui/separator'

export function MinFooter() {
  return (
    <footer className="py-4">
      <Separator className="my-3 bg-laranjaSenac" />

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

import { forwardRef } from 'react'
import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute
  placeholder: string
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, className, ...rest }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={twMerge(
          'bg-transparent border border-laranjaSenac rounded-md px-3 py-2 outline-none text-white text-sm',
          className
        )}
        {...rest} // Passa as outras props
      />
    )
  }
)

Input.displayName = 'Input' // Ajuda na depuração

export { Input }

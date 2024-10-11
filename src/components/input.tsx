import type { HTMLInputTypeAttribute } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps {
  type: HTMLInputTypeAttribute
  placeholder: string
  className?: string
}

export function Input({ type, placeholder, className }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={twMerge(
        'bg-transparent border border-laranjaSenac rounded-md px-3 py-2 outline-none text-white text-sm',
        className
      )}
    />
  )
}

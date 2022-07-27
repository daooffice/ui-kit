import { clsx } from 'clsx'
import { forwardRef, ReactNode } from 'react'

type Styles = {
  [key: string]: string
}

type VariantsMap = {
  [key: string]: any
}

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-4 py-2',
    large: 'px-8 py-3 text-lg'
  },
  variant: {
    primary:
      'bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white'
  }
}

const sizesMap: Styles = {
  sm: 'h-6 text-sm px-2',
  md: 'rounded justify-center text-md py-1.5 px-4',
  lg: 'h-10 text-lg px-4'
}
const colorsMap: Styles = {
  lime: 'bg-lime-700  ',
  red: 'bg-red-500 text-white hover:bg-red-700 rounded-lg'
}

const variantsMap: VariantsMap = {
  color: 'bg-Emerald-600',
  flat: { interactive: 'bg-gray-200 hover:bg-gray-400 text-gray-700' },
  outline: { interactive: 'border-1 border-gray-200 hover:border-gray-200' }
}

type Props = {
  size?: string
  variant?: string
  className?: string
  disabled?: boolean
  children?: ReactNode
  color?: string
  type?: 'submit' | 'button'
}

export type Ref = HTMLButtonElement

export const Button = forwardRef<Ref, Props>(
  (
    {
      children,
      size = 'md',
      type = 'button',
      variant = 'outline',
      color = 'red',
      className,
      disabled = false
    },
    ref
  ) => (
    <button
      ref={ref}
      className={clsx(
        'some-base-classes',
        sizesMap[size],
        !disabled && variantsMap[variant].interactive,
        colorsMap[color],
        className
      )}
      type={type}>
      {children}
    </button>
  )
)

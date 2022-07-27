import * as SwitchPrimitive from '@radix-ui/react-switch'
import { useState } from 'react'
import style from './switch.module.css'
import { clsx } from 'clsx'

type Props = {
  switchColor?: string
  checked?: boolean
  onCheckedChange?: () => void
}

export const Switch = ({ switchColor, checked, onCheckedChange }: Props) => {
  return (
    <SwitchPrimitive.Root
      className={clsx(
        'group',
        'relative',
        'radix-state-checked:',
        switchColor,
        'radix-state-unchecked:bg-green-700',
        'relative inline-flex h-[25px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
      )}
      checked={checked}
      onCheckedChange={onCheckedChange}>
      <SwitchPrimitive.Thumb className={style['switch-thumb']} />
    </SwitchPrimitive.Root>
  )
}

const useSwitch = () => {
  const [checked, setChecked] = useState(false)

  return { checked, setChecked }
}

Switch.hooks = {
  useSwitch
}

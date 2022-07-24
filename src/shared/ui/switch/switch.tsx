import * as SwitchPrimitive from '@radix-ui/react-switch'
import { useState } from 'react'
import style from './switch.module.css'

type Props = {
  checked?: boolean
  onCheckedChange?: () => void
}

export const Switch = ({ checked, onCheckedChange }: Props) => {
  return (
    <SwitchPrimitive.Root
      className={style['switch-root']}
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

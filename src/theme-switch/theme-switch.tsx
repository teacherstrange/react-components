import React from 'react'
import { IconNames } from '../icons/types'
import { Select, SelectProps } from '../'
import { Except } from 'type-fest'

import clsx from 'clsx'

export type ThemeSwitchProps = Except<SelectProps, 'children'> & {
  currentTheme?: string;
  onChange: SelectProps['onChange'];
}

export const ThemeSwitch = ({
  className,
  currentTheme = 'system',
  onChange,
  dimension
}: ThemeSwitchProps) => {
  const icon = {
    light: 'sun-bright' as IconNames,
    system: 'pc' as IconNames,
    dark: 'moon' as IconNames
  }

  return (
    <Select
      dimension={dimension}
      onChange={onChange}
      icon={currentTheme === 'system' ? icon.system : icon[currentTheme]}
      defaultValue={currentTheme}
      className={clsx(className)}
      aria-label="Change color scheme"
    >
      <option value="light">Light</option>
      <option value="system">System</option>
      <option value="dark">Dark</option>
    </Select>
  )
}

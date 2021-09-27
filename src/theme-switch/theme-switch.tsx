import React from 'react'
import { Select, SelectProps } from '../select'
import { Except } from 'type-fest'

import clsx from 'clsx'
import { IconNames } from 'src/icons/types'

export type ThemeSwitchProps = Except<SelectProps, 'children'> & {
  currentTheme?: string;
  onChange: SelectProps['onChange'];
}

export const ThemeSwitch = ({
  className,
  currentTheme = 'system',
  onChange
}: ThemeSwitchProps) => {
  const icon = {
    light: 'sun-bright' as IconNames,
    system: 'pc' as IconNames,
    dark: 'moon' as IconNames
  }

  return (
    <Select
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

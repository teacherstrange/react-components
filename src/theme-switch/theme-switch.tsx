import React, { useCallback } from 'react'
import { Select, SelectProps } from '../select'
import { ThemeType } from './theme-provider'
import { Except } from 'type-fest'
import { useThemeContext } from './use-theme-context'

import clsx from 'clsx'
import { IconNames } from 'src/icons/types'

export type ThemeSwitchProps = Except<SelectProps, 'children'>

export const ThemeSwitch = ({
  className,
  ...props
}: ThemeSwitchProps) => {
  const { theme, setTheme } = useThemeContext()

  const changeTheme = useCallback(
    (theme) => {
      setTheme(theme as ThemeType)
    },
    [setTheme]
  )

  const icon = {
    light: 'sun-bright' as IconNames,
    auto: 'pc' as IconNames,
    dark: 'moon' as IconNames
  }

  return (
    <Select
      onChange={({ currentTarget }) => changeTheme(currentTarget.value)}
      value={theme}
      icon={theme ? icon[theme] : icon.auto}
      className={clsx(className)}
      aria-label="Change color scheme"
      {...props}
    >
      <option value="light">Light</option>
      <option value="auto">System</option>
      <option value="dark">Dark</option>
    </Select>
  )
}

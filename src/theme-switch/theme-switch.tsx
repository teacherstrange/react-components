import React, { useCallback } from 'react'
import { Select } from '../select'
import { ThemeType } from './theme-provider'
import { useThemeContext } from './use-theme-context'

import clsx from 'clsx'
import { IconNames } from 'src/icons/types'

export const ThemeSwitch = ({
  className,
  ...props
}: PropsWithClass) => {
  const { theme, setTheme } = useThemeContext()

  const changeTheme = useCallback(
    (theme) => {
      setTheme(theme as ThemeType)
    },
    [setTheme]
  )

  const icon = {
    light: 'sun-bright' as IconNames,
    auto: 'wand-magic-sparkles' as IconNames,
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

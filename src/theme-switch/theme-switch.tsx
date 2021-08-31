import React, { useCallback, useEffect } from 'react'
import { Select } from '../select'
import { ThemeType } from './theme-provider'
import { useThemeContext } from './use-theme-context'

import clsx from 'clsx'
import { IconNames } from 'src/icons/types'

export type ThemeSwitchProps = PropsWithClass & {
  defaultTheme?: ThemeType;
}

export const ThemeSwitch = ({
  className,
  defaultTheme,
  ...props
}: ThemeSwitchProps) => {
  const { theme, setTheme } = useThemeContext()

  const changeTheme = useCallback(
    (theme) => {
      if (typeof setTheme === 'function') {
        setTheme(theme as ThemeType)
      }
    },
    [setTheme]
  )

  useEffect(() => {
    if (typeof setTheme === 'function') {
      setTheme(defaultTheme)
    }
  }, [defaultTheme, setTheme])

  const icon = {
    light: 'sun-bright' as IconNames,
    auto: 'wand-magic-sparkles' as IconNames,
    dark: 'moon' as IconNames
  }

  return (
    <Select
      onChange={({ currentTarget }) => changeTheme(currentTarget.value)}
      value={theme || defaultTheme}
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

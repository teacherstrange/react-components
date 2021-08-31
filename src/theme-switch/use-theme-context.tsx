import { useContext } from 'react'
import { ThemeContext } from './theme-provider'

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(
      'To use `useThemeContext`, component must be within a ThemeProvider'
    )
  }
  return context
}

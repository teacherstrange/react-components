import React, {
  createContext, useState, FunctionComponent, useEffect
} from 'react'

export type ThemeType = 'light' | 'dark' | 'auto' | undefined;

export type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

type ThemeProviderProps = {
  theme?: ThemeType;
  persistState?: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: 'auto', setTheme: () => {} })

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
  theme: initialTheme = 'auto',
  persistState = true
}) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme)

  const value: ThemeContextType = { theme, setTheme }

  useEffect(() => {
    if (persistState) {
      const persistedTheme = localStorage.getItem('theme') as ThemeType
      if (persistedTheme) {
        setTheme(persistedTheme)
      }
    }
  }, [persistState])

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme
      if (persistState) {
        localStorage.setItem('theme', theme)
      }
    }
  }, [persistState, theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

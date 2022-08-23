import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { Theme } from './types'
import { THEMES } from './themes'

export type ThemeType = 'light'

type ThemeProviderProps = {
  children: ReactNode
}

type ThemeContextProps = {
  themeType: ThemeType
  theme: Theme
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'light',
  theme: THEMES['light'],
} as ThemeContextProps)

export const LibraryThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light')
  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

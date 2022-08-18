import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './light-theme'

type LibraryThemeProviderProps = {
  children: ReactNode
}

export const LibraryThemeProvider = ({ children }: LibraryThemeProviderProps) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
}

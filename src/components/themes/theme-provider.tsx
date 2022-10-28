import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { THEMES } from './themes'

export type ThemeType = 'light'

type ThemeProviderProps = {
  children: ReactNode | ReactElement
}

export const LibraryThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider theme={THEMES['light']}>{children}</ThemeProvider>
}

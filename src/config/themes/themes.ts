import { lightTheme } from './light-theme'
import { ThemeType } from './theme-provider'
import { DefaultTheme } from 'styled-components'

export const THEMES: Record<ThemeType, DefaultTheme> = {
  light: lightTheme,
}

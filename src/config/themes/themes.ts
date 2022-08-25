import { lightTheme } from './light-theme'
import { ThemeType } from './theme-provider'
import { Theme } from './types'

export const THEMES: Record<ThemeType, Theme> = {
  light: lightTheme,
}

import { lightTheme } from './light-theme'
import { ThemeType } from './theme-context'
import { Theme } from './types'

export const THEMES: Record<ThemeType, Theme> = {
  light: lightTheme,
}

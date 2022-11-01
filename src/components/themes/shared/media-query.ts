import { MediaQuery } from '../types'
import { breakpoints } from './breakpoints'

export const mediaQuery: MediaQuery = {
  small: breakpoints.sm,
  medium: breakpoints.md,
  large: breakpoints.lg,
  xLarge: breakpoints.xl,
  xXLarge: breakpoints.xxl,
}

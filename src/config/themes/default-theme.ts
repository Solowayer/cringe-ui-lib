import 'styled-components'
import { Colors, Typography, Borders, Effects, Sizing } from './types'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    typography: Typography
    borders: Borders
    sizing: Sizing
    effects: Effects
  }
}

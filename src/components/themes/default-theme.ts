import 'styled-components'
import {
  Typography,
  Borders,
  Lighting,
  Sizing,
  Base,
  Background,
  Component,
  Content,
} from './types'

type Colors = Base & Background & Content & Component

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    typography: Typography
    borders: Borders
    sizing: Sizing
    lighting: Lighting
  }
}

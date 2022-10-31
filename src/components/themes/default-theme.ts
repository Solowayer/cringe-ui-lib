import 'styled-components'
import {
  Typography,
  Borders,
  Lighting,
  Sizing,
  ColorTokens,
  BackgroundColorTokens,
  ComponentColorTokens,
  ContentColorTokens,
} from './types'

type Colors = ColorTokens & BackgroundColorTokens & ContentColorTokens & ComponentColorTokens

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    typography: Typography
    borders: Borders
    sizing: Sizing
    lighting: Lighting
  }
}

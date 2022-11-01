import 'styled-components'
import {
  ColorTokens,
  BackgroundColorTokens,
  ComponentColorTokens,
  ContentColorTokens,
  Typography,
  Borders,
  Lighting,
  Sizing,
  ZIndex,
  MediaQuery,
} from './types'

type Colors = ColorTokens & BackgroundColorTokens & ContentColorTokens & ComponentColorTokens

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    typography: Typography
    borders: Borders
    sizing: Sizing
    lighting: Lighting
    zIndex: ZIndex
    mediaQuery: MediaQuery
  }
}

import 'styled-components'
import { Typography, Borders, Effects, Sizing, Base, Background, Component, Content } from './types'

type Colors = Base & Background & Content & Component

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    typography: Typography
    borders: Borders
    sizing: Sizing
    effects: Effects
  }
}

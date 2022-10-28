import 'styled-components'
import { Typography, Borders, Lighting, Sizing, Background, Component, Content } from './types'
import { BaseColors } from '../tokens/types'

type Colors = BaseColors & Background & Content & Component

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    typography: Typography
    borders: Borders
    sizing: Sizing
    lighting: Lighting
  }
}

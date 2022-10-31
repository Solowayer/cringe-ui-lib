import { DefaultTheme } from 'styled-components'
import { colorTokens } from '../shared/color-tokens'
import { backgroundColorTokens } from './background-color-tokens'
import { contentColorTokens } from './content-color-tokens'
import { componentColorTokens } from './component-color-tokens'
import { typography } from '../shared/typography'
import { borders } from './borders'
import { sizing } from '../shared/sizing'
import { lighting } from './lighting'

export const lightTheme: DefaultTheme = {
  colors: {
    ...colorTokens,
    ...backgroundColorTokens,
    ...contentColorTokens,
    ...componentColorTokens,
  },
  borders: borders,
  typography: typography,
  sizing: sizing,
  lighting: lighting,
}

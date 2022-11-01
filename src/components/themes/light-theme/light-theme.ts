import { DefaultTheme } from 'styled-components'
import { backgroundColorTokens } from './background-color-tokens'
import { contentColorTokens } from './content-color-tokens'
import { componentColorTokens } from './component-color-tokens'
import { borders } from './borders'
import { lighting } from './lighting'

import { colorTokens } from '../shared/color-tokens'
import { typography } from '../shared/typography'
import { zIndex } from '../shared/z-Index'
import { sizing } from '../shared/sizing'
import { mediaQuery } from '../shared/media-query'

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
  zIndex: zIndex,
  mediaQuery: mediaQuery,
}

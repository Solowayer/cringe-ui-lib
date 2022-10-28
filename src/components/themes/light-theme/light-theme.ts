import { DefaultTheme } from 'styled-components'
import { baseColors } from '../shared/base-colors'
import { backgroundColors } from './background-colors'
import { contentColors } from './content-colors'
import { componentColors } from './component-colors'
import { typography } from '../shared/typography'
import { borders } from './borders'
import { sizing } from '../shared/sizing'
import { lighting } from './lighting'

export const lightTheme: DefaultTheme = {
  colors: {
    ...baseColors,
    ...backgroundColors,
    ...contentColors,
    ...componentColors,
  },
  borders: borders,
  typography: typography,
  sizing: sizing,
  lighting: lighting,
}

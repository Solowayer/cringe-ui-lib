import { Theme } from '../types'

import { baseColors } from '../shared/base-colors'
import { backgroundColors } from './background-colors'
import { contentColors } from './content-colors'
import { componentColors } from './component-colors'
import { typography } from '../shared/typography'
import { borders } from './borders'
import { sizing } from '../shared/sizing'

export const lightTheme: Theme = {
  colors: {
    ...baseColors,
    ...backgroundColors,
    ...contentColors,
    ...componentColors,
  },
  borders: borders,
  typography: typography,
  sizing: sizing,
}

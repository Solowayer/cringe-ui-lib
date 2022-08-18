import { Theme } from '../types'

import { baseColors } from '../base-colors'
import { backgroundColors } from './background-colors'
import { contentColors } from './content-colors'
import { componentColors } from './component-colors'
import { typography } from '../shared/typography'
import { borders } from './borders'

export const lightTheme: Theme = {
  title: 'light-theme',
  colors: {
    ...baseColors,
    ...backgroundColors,
    ...contentColors,
    ...componentColors,
  },
  typography: typography,
  borders: borders,
}

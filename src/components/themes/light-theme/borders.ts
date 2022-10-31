import { Borders } from '../types'
import { colorTokens } from '../shared/color-tokens'

export const borders: Borders = {
  default: {
    width: '2px',
    style: 'solid',
    color: colorTokens.gray200,
  },
  selected: {
    width: '2px',
    style: 'solid',
    color: colorTokens.black,
  },
  accent: {
    width: '2px',
    style: 'solid',
    color: colorTokens.blue300,
  },
  success: {
    width: '2px',
    style: 'solid',
    color: colorTokens.green300,
  },
  warning: {
    width: '2px',
    style: 'solid',
    color: colorTokens.orange300,
  },
  danger: {
    width: '2px',
    style: 'solid',
    color: colorTokens.red300,
  },
  disabled: {
    width: '2px',
    style: 'solid',
    color: colorTokens.gray50,
  },
  radius4: '4px',
  radius16: '16px',
  radius32: '32px',
  radiusCircle: '50%',
}

import { Borders } from '../types'
import { colorTokens } from '../shared/color-tokens'

export const borders: Borders = {
  default: {
    width: '1px',
    style: 'solid',
    color: colorTokens.gray200,
  },
  selected: {
    width: '1px',
    style: 'solid',
    color: colorTokens.black,
  },
  accent: {
    width: '1px',
    style: 'solid',
    color: colorTokens.blue300,
  },
  success: {
    width: '1px',
    style: 'solid',
    color: colorTokens.green300,
  },
  warning: {
    width: '1px',
    style: 'solid',
    color: colorTokens.orange300,
  },
  danger: {
    width: '1px',
    style: 'solid',
    color: colorTokens.red300,
  },
  disabled: {
    width: '1px',
    style: 'solid',
    color: colorTokens.gray50,
  },
  radius4: '4px',
  radius16: '16px',
  radius32: '32px',
  radiusCircle: '50%',
}

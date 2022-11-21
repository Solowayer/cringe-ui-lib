import { Borders } from '../types'
import { colorTokens } from '../shared/color-tokens'

export const borders: Borders = {
  default: colorTokens.gray200,
  selected: colorTokens.black,
  accent: colorTokens.blue300,
  success: colorTokens.green300,
  warning: colorTokens.orange300,
  danger: colorTokens.red300,
  disabled: colorTokens.gray100,
  width1: '1px',
  width2: '2px',
  width4: '4px',
  solid: 'solid',
  dashed: 'dashed',
  radius2: '2px',
  radius4: '4px',
  radius16: '16px',
  radius32: '32px',
  radiusCircle: '50%',
}

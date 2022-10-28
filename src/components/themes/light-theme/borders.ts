import { Borders } from '../types'
import { baseColors } from '../../tokens/colors'

export const borders: Borders = {
  default: {
    width: '2px',
    style: 'solid',
    color: baseColors.gray200,
  },
  selected: {
    width: '2px',
    style: 'solid',
    color: baseColors.black,
  },
  accent: {
    width: '2px',
    style: 'solid',
    color: baseColors.blue300,
  },
  success: {
    width: '2px',
    style: 'solid',
    color: baseColors.green300,
  },
  warning: {
    width: '2px',
    style: 'solid',
    color: baseColors.orange300,
  },
  danger: {
    width: '2px',
    style: 'solid',
    color: baseColors.red300,
  },
  disabled: {
    width: '2px',
    style: 'solid',
    color: baseColors.gray50,
  },
  radius4: '4px',
  radius16: '16px',
  radius32: '32px',
  radiusCircle: '50%',
}

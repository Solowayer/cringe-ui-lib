import { css } from 'styled-components'
import { Font } from './themes'

export const FontSize = ({ fontWeight, fontSize, lineHeight }: Font) => css`
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  line-height: ${lineHeight};
`

import styled from 'styled-components'
import { ButtonProps } from './button'
import { SHAPE, SIZE, KIND } from './constants'

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${getBackgroundColor};
  color: white;
  ${getSize}

  ${getBackgroundColor}

  font-size: '';
  /* padding: ''; */

  border-radius: '';

  &:hover {
  }
`

function getBackgroundColor({ kind }: ButtonProps) {
  switch (kind) {
    case KIND.primary:
      return 'black'
    case KIND.secondary:
      return 'green'
    case KIND.tertiary:
      return 'orange'
    default:
      return ''
  }
}

function getSize({ size }: ButtonProps) {
  switch (size) {
    case SIZE.small:
      return 'padding: 12px 24px; font-size: 12px;'
    case SIZE.medium:
      return 'padding: 16px 32px; font-size: 16px;'
    case SIZE.large:
      return 'padding: 24px 48px; font-size: 18px;'
    default:
      return ''
  }
}

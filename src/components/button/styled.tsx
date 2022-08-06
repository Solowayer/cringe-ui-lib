import styled from 'styled-components'
import { ButtonProps } from './button'
import { SHAPE, SIZE, KIND } from './constants'

function getBackgroundColor({ kind }: ButtonProps) {
  switch (kind) {
    case KIND.primary:
      return 'red'
    case KIND.secondary:
      return 'green'
    case KIND.tertiary:
      return 'black'
    default:
      return 'red'
  }
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  background-color: ${getBackgroundColor};
  color: '';

  font-size: '';
  padding: '';

  border-radius: '';

  &:hover {
  }

  /* ${(props) => (props.kind === 'primary' ? `background: green; color: white;` : '')}
  ${(props) => (props.kind === 'tertiary' ? `background: #aa3333;` : '')} */
`

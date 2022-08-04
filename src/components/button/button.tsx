import { ReactNode } from 'react'
import { StyledButton } from './styled'

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'tretiary' | 'disabled'
  children: ReactNode
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props
  return <StyledButton>{children}</StyledButton>
}

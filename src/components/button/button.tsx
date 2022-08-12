import { MouseEventHandler, ReactNode } from 'react'
import { StyledButton } from './styled'
import { SHAPE, SIZE, KIND } from './constants'

export type ButtonProps = {
  kind?: keyof typeof KIND
  size?: keyof typeof SIZE
  shape?: keyof typeof SHAPE
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  disabled?: boolean
  loading?: boolean
  // iconLeft?: ElementType
  // iconRight?: ElementType
}

export const Button = (props: ButtonProps) => {
  const {
    kind = 'primary',
    size = 'medium',
    shape = 'rectangle',
    children,
    onClick,
    className,
    disabled,
    loading,
  } = props
  return (
    <StyledButton
      kind={kind}
      size={size}
      shape={shape}
      onClick={onClick}
      className={className}
      disabled={disabled}
      loading={loading}
    >
      {children}
    </StyledButton>
  )
}

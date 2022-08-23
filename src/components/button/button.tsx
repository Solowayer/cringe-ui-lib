import { MouseEventHandler, ReactElement, ReactNode } from 'react'
import { StyledButton } from './styled'
import { SHAPE, SIZE, VARIANT } from './constants'
import { StyledIconLeft, StyledIconRight } from './styled'
import { Spinner } from '../spinner'

export type ButtonProps = {
  variant?: keyof typeof VARIANT
  size?: keyof typeof SIZE
  shape?: keyof typeof SHAPE
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  disabled?: boolean
  isLoading?: boolean
  children: ReactNode
  iconLeft?: ReactElement
  iconRight?: ReactElement
}

export const Button = (props: ButtonProps) => {
  const {
    variant = 'primary',
    size = 'medium',
    shape = 'rectangle',
    onClick,
    className,
    disabled,
    isLoading,
    children,
    iconLeft,
    iconRight,
  } = props

  return (
    <StyledButton
      variant={variant}
      size={size}
      shape={shape}
      onClick={onClick}
      className={className}
      disabled={disabled}
      isLoading={isLoading}
    >
      {iconLeft && <StyledIconLeft>{iconLeft}</StyledIconLeft>}
      {isLoading && <Spinner />}
      {children}
      {iconRight && <StyledIconRight>{iconRight}</StyledIconRight>}
    </StyledButton>
  )
}

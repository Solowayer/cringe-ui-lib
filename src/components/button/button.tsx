import { MouseEventHandler, ReactElement, ReactNode } from 'react'
import { StyledButton } from './styled'
import { SHAPE, SIZE, VARIANT } from './constants'
import { StyledIconLeft, StyledIconRight } from './styled'
import { Spinner } from '../spinner'
import { useTheme } from '../../config/themes/theme-context'
import { Theme } from '../../config/themes'

export type ButtonProps = {
  theme: Theme
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
  const { theme } = useTheme()

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
      theme={theme}
      variant={variant}
      size={size}
      shape={shape}
      onClick={onClick}
      className={className}
      disabled={isLoading || disabled}
      isLoading={isLoading}
    >
      {iconLeft && <StyledIconLeft>{iconLeft}</StyledIconLeft>}
      {isLoading && <Spinner />}
      {children}
      {iconRight && <StyledIconRight>{iconRight}</StyledIconRight>}
    </StyledButton>
  )
}

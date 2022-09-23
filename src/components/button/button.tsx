import { MouseEventHandler, ReactNode, ReactElement } from 'react'
import { StyledButton, StyledIconLeft, StyledIconRight } from './styled'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { VARIANT, SIZE, SHAPE } from './constants'
import { Spinner } from '../spinner'

export type ButtonProps = {
  variant?: keyof typeof VARIANT
  size?: keyof typeof SIZE
  shape?: keyof typeof SHAPE
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  disabled?: boolean
  isLoading?: boolean
  children?: ReactNode | null
  iconLeft?: ReactElement
  iconRight?: ReactElement
}

export const Button = (props: ButtonProps) => {
  const {
    variant = VARIANT.primary,
    size = SIZE.medium,
    shape = SHAPE.rectangle,
    onClick,
    className,
    disabled,
    isLoading,
    children,
    iconLeft,
    iconRight,
  } = props

  return (
    <LibraryThemeProvider>
      <StyledButton
        variant={variant}
        size={size}
        shape={shape}
        onClick={onClick}
        className={className}
        disabled={isLoading || disabled}
        isLoading={isLoading}
      >
        {iconLeft && <StyledIconLeft>{iconLeft}</StyledIconLeft>}
        {isLoading && <Spinner size={size} />}
        {children}
        {iconRight && <StyledIconRight>{iconRight}</StyledIconRight>}
      </StyledButton>
    </LibraryThemeProvider>
  )
}

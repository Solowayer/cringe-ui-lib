import { ComponentType, MouseEventHandler, ReactNode } from 'react'
import { StyledButton } from './styled'
import { SHAPE, SIZE, VARIANT } from './constants'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { Theme } from '../../config/themes'
import { Close, Delete } from '../icon'

export type ButtonProps = {
  theme: Theme
  variant?: keyof typeof VARIANT
  size?: keyof typeof SIZE
  shape?: keyof typeof SHAPE
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  disabled?: boolean
  isLoading?: boolean
  iconLeft?: ComponentType<any>
  iconRight?: ComponentType<any>
}

export const Button = (props: ButtonProps) => {
  const {
    theme,
    variant = 'primary',
    size = 'medium',
    shape = 'rectangle',
    children,
    onClick,
    className,
    disabled,
    isLoading,
    iconLeft,
    iconRight,
  } = props

  return (
    <LibraryThemeProvider>
      <StyledButton
        theme={theme}
        variant={variant}
        size={size}
        shape={shape}
        onClick={onClick}
        className={className}
        disabled={disabled}
        isLoading={isLoading}
        iconLeft={iconLeft}
        iconRight={iconRight}
      >
        <Close />
        {children}
        <Delete />
      </StyledButton>
    </LibraryThemeProvider>
  )
}

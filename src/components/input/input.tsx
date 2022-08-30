import { ChangeEventHandler, FocusEventHandler, HTMLAttributes, ReactElement } from 'react'
import { SIZE } from './constants'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledInputWrapper, StyledInputIcon, StyledInputControls, StyledInput } from './styled'
import { VisibilityOn, Close } from '../icon'
import React from 'react'

export interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange'> {
  type?: 'text' | 'password'
  value?: string
  scale?: keyof typeof SIZE
  onChange?: ChangeEventHandler<HTMLInputElement>
  isFocused?: FocusEventHandler<HTMLInputElement>
  icon?: ReactElement
  clearable?: boolean
  disabled?: boolean
  error?: boolean
  success?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type = 'text',
    value,
    scale = 'medium',
    onChange,
    isFocused,
    icon,
    clearable = false,
    disabled = false,
    error,
    success,
    ...rest
  } = props
  return (
    <LibraryThemeProvider>
      <StyledInputWrapper>
        {icon && <StyledInputIcon>{icon}</StyledInputIcon>}
        <StyledInput
          ref={ref}
          placeholder="Type here"
          type={type}
          scale={scale}
          value={value}
          onChange={onChange}
          isFocused={isFocused}
          icon={icon}
          clearable={clearable}
          disabled={disabled}
          error={error}
          success={success}
          {...rest}
        />
        <StyledInputControls>
          <Close />
          <VisibilityOn />
        </StyledInputControls>
      </StyledInputWrapper>
    </LibraryThemeProvider>
  )
})

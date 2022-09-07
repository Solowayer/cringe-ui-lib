import React, { useState } from 'react'
import { ChangeEventHandler, FocusEventHandler, HTMLAttributes, ReactElement } from 'react'
import { SIZE } from './constants'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import {
  StyledInputWrapper,
  StyledInputIcon,
  StyledInputControls,
  StyledInput,
  StyledClearIcon,
  StyledVisibilityIcon,
} from './styled'
import { Close, Show, Hide } from '../icon'

export interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange'> {
  value?: string
  type?: 'text' | 'password'
  scale?: keyof typeof SIZE
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  autoFocus?: boolean
  icon?: ReactElement | string
  clearable?: boolean
  disabled?: boolean
  error?: boolean
  success?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [isMasked, setMask] = useState(true)

  const {
    value,
    type = 'text',
    scale = SIZE.medium,
    onChange,
    icon,
    clearable = false,
    disabled = false,
    error,
    success,
    ...rest
  } = props

  function getInputType() {
    if (type === 'password') {
      return isMasked ? 'password' : 'text'
    } else {
      return type
    }
  }

  return (
    <LibraryThemeProvider>
      <StyledInputWrapper>
        {icon && <StyledInputIcon disabled={disabled}>{icon}</StyledInputIcon>}
        <StyledInput
          ref={ref}
          placeholder="Type here"
          value={value}
          type={getInputType()}
          scale={scale}
          onChange={onChange}
          icon={icon}
          clearable={clearable}
          disabled={disabled}
          error={error}
          success={success}
          {...rest}
        />
        <StyledInputControls>
          {clearable && (
            <StyledClearIcon>
              <Close />
            </StyledClearIcon>
          )}
          {type === 'password' && (
            <StyledVisibilityIcon onClick={() => setMask(!isMasked)}>
              {isMasked ? <Show /> : <Hide />}
            </StyledVisibilityIcon>
          )}
        </StyledInputControls>
      </StyledInputWrapper>
    </LibraryThemeProvider>
  )
})

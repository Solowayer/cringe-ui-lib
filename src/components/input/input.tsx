import React, { useState } from 'react'
import { ChangeEventHandler, HTMLAttributes, ReactElement } from 'react'
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

type InputTypes = 'text' | 'password'

export interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange'> {
  value?: string
  type?: InputTypes
  width?: string
  scale?: keyof typeof SIZE
  onChange?: ChangeEventHandler<HTMLInputElement>
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
    width = '100%',
    scale = SIZE.medium,
    onChange,
    icon,
    clearable = true,
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
      <StyledInputWrapper width={width} scale={scale}>
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
          {clearable && value && !disabled ? (
            <StyledClearIcon
              onClick={() => onChange && onChange({ currentTarget: { value: '' } } as any)}
            >
              <Close size="16" />
            </StyledClearIcon>
          ) : null}
          {type === 'password' && (
            <StyledVisibilityIcon onClick={() => setMask(!isMasked)}>
              {isMasked ? <Show size="16" /> : <Hide size="16" />}
            </StyledVisibilityIcon>
          )}
        </StyledInputControls>
      </StyledInputWrapper>
    </LibraryThemeProvider>
  )
})

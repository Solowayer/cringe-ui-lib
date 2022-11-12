import React, { useState } from 'react'
import { ChangeEventHandler, HTMLAttributes, ReactElement } from 'react'
import { SIZE } from './constants'
import { LibraryThemeProvider } from '../themes/theme-provider'
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

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value?: string
  type?: InputTypes
  width?: string
  inputSize?: keyof typeof SIZE
  onChange?: ChangeEventHandler<HTMLInputElement>
  startIcon?: ReactElement
  endContent?: ReactElement | string
  clearable?: boolean
  disabled?: boolean
  error?: boolean
  success?: boolean
  readonly?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [isMasked, setMask] = useState(true)

  const {
    value,
    type = 'text',
    width = '100%',
    inputSize = SIZE.medium,
    onChange,
    startIcon,
    endContent,
    clearable = false,
    disabled = false,
    error,
    success,
    readonly,
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
      <StyledInputWrapper width={width} inputSize={inputSize}>
        {startIcon && <StyledInputIcon disabled={disabled}>{startIcon}</StyledInputIcon>}
        <StyledInput
          ref={ref}
          value={value}
          type={getInputType()}
          inputSize={inputSize}
          onChange={onChange}
          startIcon={startIcon}
          endContent={endContent}
          clearable={clearable}
          disabled={disabled}
          error={error}
          success={success}
          readonly={readonly}
          {...rest}
        />
        <StyledInputControls disabled={disabled}>
          {clearable && value && !disabled ? (
            <StyledClearIcon
              onClick={(e) => {
                e.preventDefault()
                onChange && onChange({ currentTarget: { value: '' } } as any)
              }}
            >
              <Close size="16" />
            </StyledClearIcon>
          ) : null}
          {type === 'password' && (
            <StyledVisibilityIcon onClick={() => setMask(!isMasked)}>
              {isMasked ? <Show size="16" /> : <Hide size="16" />}
            </StyledVisibilityIcon>
          )}
          {endContent}
        </StyledInputControls>
      </StyledInputWrapper>
    </LibraryThemeProvider>
  )
})

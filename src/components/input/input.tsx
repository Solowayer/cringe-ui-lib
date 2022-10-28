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

export interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange'> {
  value?: string
  type?: InputTypes
  width?: string
  scale?: keyof typeof SIZE
  onChange?: ChangeEventHandler<HTMLInputElement>
  clearButtonClick?: () => void
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
    scale = SIZE.medium,
    onChange,
    clearButtonClick,
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
      <StyledInputWrapper width={width} scale={scale}>
        {startIcon && <StyledInputIcon disabled={disabled}>{startIcon}</StyledInputIcon>}
        <StyledInput
          ref={ref}
          value={value}
          type={getInputType()}
          scale={scale}
          onChange={onChange}
          clearButtonClick={clearButtonClick}
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
            <StyledClearIcon onClick={clearButtonClick}>
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

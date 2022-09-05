import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLAttributes,
  ReactElement,
  useState,
} from 'react'
import { SIZE } from './constants'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import {
  StyledInputWrapper,
  StyledInputIcon,
  StyledInputControls,
  StyledInput,
  StyledClearIcon,
} from './styled'
import { Show, Hide, Close } from '../icon'
import React from 'react'

type InputType = 'text' | 'password'

export interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange'> {
  type?: InputType
  value?: string
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
  const [visibility, setVisibility] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const {
    type = 'text',
    value,
    scale = SIZE.medium,
    onChange,
    onFocus,
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
        {icon && <StyledInputIcon disabled={disabled}>{icon}</StyledInputIcon>}
        <StyledInput
          ref={ref}
          placeholder="Type here"
          type={type}
          scale={scale}
          value={inputValue}
          onChange={onChange}
          onFocus={onFocus}
          icon={icon}
          clearable={clearable}
          disabled={disabled}
          error={error}
          success={success}
          {...rest}
        />
        <StyledInputControls>
          <StyledClearIcon>
            <Close onClick={() => setInputValue('')} />
          </StyledClearIcon>
          {visibility ? <Hide /> : <Show />}
        </StyledInputControls>
      </StyledInputWrapper>
    </LibraryThemeProvider>
  )
})

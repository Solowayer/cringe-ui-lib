import { ChangeEventHandler, HTMLAttributes, ReactElement } from 'react'
import { SIZE } from './constants'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledInputWrapper, StyledInputIcon, StyledInputControls, StyledInput } from './styled'
import { VisibilityOn, Close } from '../icon'

export interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange'> {
  type?: 'text' | 'password'
  value?: string
  size?: keyof typeof SIZE
  onChange?: ChangeEventHandler<HTMLInputElement>
  icon?: ReactElement
  clearable?: boolean
  disabled?: boolean
  error?: boolean
  success?: boolean
}

export const Input = (props: InputProps) => {
  const { type = 'text', value, size = 'medium', onChange, icon } = props
  return (
    <LibraryThemeProvider>
      <StyledInputWrapper>
        {icon && <StyledInputIcon>{icon}</StyledInputIcon>}
        <StyledInput
          type={type}
          size={size}
          value={value}
          onChange={onChange}
          placeholder="Type here"
        />
        <StyledInputControls>
          <Close />
          <VisibilityOn />
        </StyledInputControls>
      </StyledInputWrapper>
    </LibraryThemeProvider>
  )
}

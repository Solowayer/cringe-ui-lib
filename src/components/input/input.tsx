import { ChangeEventHandler, ElementType } from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledInput } from './styled'

export type InputProps = {
  size?: string
  value?: string
  error?: boolean
  success?: boolean
  disabled?: boolean
  cleareble?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  icon?: ElementType
}

export const Input = (props: InputProps) => {
  const { value } = props
  return (
    <LibraryThemeProvider>
      <StyledInput value={value} />
    </LibraryThemeProvider>
  )
}

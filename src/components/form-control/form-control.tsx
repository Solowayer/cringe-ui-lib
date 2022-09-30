import React, { ReactNode } from 'react'
import { StyledFormControl, StyledLabel, StyledHint, StyledError, StyledSuccess } from './styled'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'

export type FormControlProps = {
  label?: string
  htmlFor?: string
  hint?: string
  error?: string
  success?: string
  children?: ReactNode
}

export const FormControl = (props: FormControlProps) => {
  const { label, htmlFor, hint, error, success, children } = props
  return (
    <LibraryThemeProvider>
      <StyledFormControl>
        <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
        {children}
        {error ? (
          <StyledError>{error}</StyledError>
        ) : success ? (
          <StyledSuccess>{success}</StyledSuccess>
        ) : hint ? (
          <StyledHint>{hint}</StyledHint>
        ) : null}
      </StyledFormControl>
    </LibraryThemeProvider>
  )
}

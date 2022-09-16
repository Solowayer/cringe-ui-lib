import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledTypo } from './styled'
import { ElementType } from 'react'
import { Typography } from '../../config/themes'

export interface TypoProps {
  type?: keyof Omit<Typography, 'defaultFontFamily'>
  color?: string
  as?: ElementType
  children?: string
}

export const Typo = (props: TypoProps) => {
  const { type = 'paragraphMedium', as, children, color } = props

  return (
    <LibraryThemeProvider>
      <StyledTypo type={type} as={as} color={color}>
        {children}
      </StyledTypo>
    </LibraryThemeProvider>
  )
}

import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledTypo } from './styled'
import { Typography } from '../../config/themes'
import { ReactNode } from 'react'

export interface TypoProps {
  type?: keyof Omit<Typography, 'defaultFontFamily'>
  color?: string | 'secondary'
  children?: ReactNode
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
}

export const Typo = (props: TypoProps) => {
  const {
    type = 'paragraphMedium',
    children,
    color,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  } = props

  return (
    <LibraryThemeProvider>
      <StyledTypo
        type={type}
        color={color}
        marginTop={marginTop || '0'}
        marginBottom={marginBottom || '0'}
        marginLeft={marginLeft || '0'}
        marginRight={marginRight || '0'}
      >
        {children}
      </StyledTypo>
    </LibraryThemeProvider>
  )
}

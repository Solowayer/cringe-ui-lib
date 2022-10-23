import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledTypo } from './styled'
import { Typography } from '../../config/themes'
import { ReactNode } from 'react'

export interface TypoProps {
  type?: keyof Typography
  line?: number
  children?: ReactNode
  color?: string | 'secondary'
  width?: string
  margin?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
}

export const Typo = ({
  type = 'paragraphMedium',
  line,
  children,
  color,
  width,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: TypoProps) => {
  return (
    <LibraryThemeProvider>
      <StyledTypo
        type={type}
        line={line}
        color={color}
        width={width}
        margin={margin}
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

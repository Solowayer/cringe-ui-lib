import { LibraryThemeProvider } from '../themes/theme-provider'
import { StyledTypo } from './styled'
import { Typography } from '../themes'
import { ReactNode } from 'react'
import { contentColors } from '../themes/light-theme/content-colors'

export type TypoColors = keyof typeof contentColors

export interface TypoProps {
  variant?: keyof Typography
  line?: number
  children?: ReactNode
  color?: string | TypoColors
  width?: string
  margin?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
}

export const Typo = ({
  variant = 'paragraphMedium',
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
        variant={variant}
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

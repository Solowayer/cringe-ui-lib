import React, { ReactNode } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { StyledCard } from './styled'
import { Styles } from '../types/shared'

export type CardStyles = Pick<Styles, 'margin' | 'width'>

export type CardProps = {
  children: ReactNode
} & CardStyles

export const Card = ({ children, ...styles }: CardProps) => {
  return (
    <LibraryThemeProvider>
      <StyledCard {...styles}>{children}</StyledCard>
    </LibraryThemeProvider>
  )
}

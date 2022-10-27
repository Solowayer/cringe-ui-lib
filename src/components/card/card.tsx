import React, { ReactNode } from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledCard } from './styled'

export type SizeProperties = {
  height?: string
  width?: string
}

export type CardProps = {
  thumbnail?: string
  children: ReactNode
} & SizeProperties

export const Card = ({ width, height, children }: CardProps) => {
  return (
    <LibraryThemeProvider>
      <StyledCard width={width} height={height}>
        {children}
      </StyledCard>
    </LibraryThemeProvider>
  )
}

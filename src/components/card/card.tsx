import React, { MouseEventHandler, ReactNode } from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledCard } from './styled'

export type CardProps = {
  height?: string
  width?: string
  thumbnail?: string
  children: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const Card = ({ width, height, children, onClick }: CardProps) => {
  return (
    <LibraryThemeProvider>
      <StyledCard width={width} height={height} onClick={onClick}>
        {children}
      </StyledCard>
    </LibraryThemeProvider>
  )
}

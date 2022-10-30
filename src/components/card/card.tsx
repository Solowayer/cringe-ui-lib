import React, { HTMLAttributes, ElementType, ReactNode } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { StyledCard } from './styled'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  children: ReactNode
}

export const Card = ({ as = 'div', children, ...rest }: CardProps) => {
  return (
    <LibraryThemeProvider>
      <StyledCard as={as} {...rest}>
        {children}
      </StyledCard>
    </LibraryThemeProvider>
  )
}

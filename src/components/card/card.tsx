import React, { HTMLAttributes, ElementType, ReactNode } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { StyledCard } from './styled'
import { backgroundColorTokens } from '../themes/light-theme/background-color-tokens'

export type CardStyles = {
  backgroundColor?: string
  backgroundImage?: string
  height?: string
  hoverShadow?: boolean
}

export interface CardProps extends CardStyles, HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  children: ReactNode
}

export const Card = ({
  as = 'div',
  backgroundColor = backgroundColorTokens.backgroundPrimary,
  backgroundImage,
  height,
  hoverShadow,
  children,
  ...rest
}: CardProps) => {
  return (
    <LibraryThemeProvider>
      <StyledCard
        as={as}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        height={height}
        hoverShadow={hoverShadow}
        {...rest}
      >
        {children}
      </StyledCard>
    </LibraryThemeProvider>
  )
}

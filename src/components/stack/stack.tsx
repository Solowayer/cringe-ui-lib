import React from 'react'
import { StyledStack } from './styled'
import { LibraryThemeProvider } from '../themes/theme-provider'

type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
type Spacing = 0 | 0.5 | 1 | 2 | 3 | 4 | 8 | 12

export type StackProps = {
  horizontal?: boolean
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  spacing?: Spacing
  children: React.ReactNode
}

export const Stack = ({
  horizontal,
  alignItems,
  justifyContent,
  spacing,
  children,
}: StackProps) => {
  return (
    <LibraryThemeProvider>
      <StyledStack
        horizontal={horizontal}
        alignItems={alignItems}
        justifyContent={justifyContent}
        spacing={spacing}
      >
        {children}
      </StyledStack>
    </LibraryThemeProvider>
  )
}

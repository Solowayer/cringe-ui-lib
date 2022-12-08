import React from 'react'
import { StyledGridLayout } from './styled'
import { LibraryThemeProvider } from '../themes/theme-provider'

type GridLayoutProps = {
  children: React.ReactNode
}

export const GridLayout = ({ children }: GridLayoutProps) => {
  return (
    <LibraryThemeProvider>
      <StyledGridLayout>{children}</StyledGridLayout>
    </LibraryThemeProvider>
  )
}

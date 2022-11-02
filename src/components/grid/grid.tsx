import React, { ReactNode } from 'react'
import { StyledGrid } from './styled'
import { LibraryThemeProvider } from '../themes/theme-provider'

type Count<T> = [T, T, T, T]

export type GridProps = {
  rowGap?: string
  columnGap?: string
  columnCount?: Count<number>
  children: ReactNode
}

export const Grid = ({ columnCount, rowGap, columnGap, children }: GridProps) => {
  return (
    <LibraryThemeProvider>
      <StyledGrid rowGap={rowGap} columnGap={columnGap} columnCount={columnCount}>
        {children}
      </StyledGrid>
    </LibraryThemeProvider>
  )
}

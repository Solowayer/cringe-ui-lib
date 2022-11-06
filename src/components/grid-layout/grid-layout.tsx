import React from 'react'
import { StyledGridLayout } from './styled'

type GridLayoutProps = {
  children: React.ReactNode
}

export const GridLayout = ({ children }: GridLayoutProps) => {
  return <StyledGridLayout>{children}</StyledGridLayout>
}

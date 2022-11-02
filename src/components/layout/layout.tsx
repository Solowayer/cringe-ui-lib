import React, { ReactNode } from 'react'
import { StyledLayout } from './styled'

export type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>
}

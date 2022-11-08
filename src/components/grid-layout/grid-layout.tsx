import React from 'react'
import { StyledGridLayout } from './styled'
import { Container } from '../container'

type GridLayoutProps = {
  children: React.ReactNode
}

export const GridLayout = ({ children }: GridLayoutProps) => {
  return (
    <Container paddingLeft="40px" paddingRight="40px">
      <StyledGridLayout>{children}</StyledGridLayout>
    </Container>
  )
}

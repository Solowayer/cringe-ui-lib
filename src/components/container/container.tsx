import React, { ReactNode } from 'react'
import { StyledLayout } from './styled'

export type ContainerStyles = {
  maxWidth?: string
  paddingLeft?: string
  paddingRight?: string
}

export interface ContainerProps extends ContainerStyles {
  children: ReactNode
}

export const Container = ({ maxWidth, paddingRight, paddingLeft, children }: ContainerProps) => {
  return (
    <StyledLayout maxWidth={maxWidth} paddingRight={paddingRight} paddingLeft={paddingLeft}>
      {children}
    </StyledLayout>
  )
}

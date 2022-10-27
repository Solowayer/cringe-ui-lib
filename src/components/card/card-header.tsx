import React, { ReactNode } from 'react'
import { StyledCardHeader } from './styled'

export type CardHeaderProps = {
  children: ReactNode
}

export const CardHeader = ({ children }: CardHeaderProps) => {
  return <StyledCardHeader>{children}</StyledCardHeader>
}

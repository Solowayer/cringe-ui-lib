import React from 'react'
import { StyledDnDList } from './styled'

export type DnDListProps = {
  children: React.ReactNode | Array<React.ReactNode>
}

export const DnDList = ({ children }: DnDListProps) => {
  return <StyledDnDList>{children}</StyledDnDList>
}

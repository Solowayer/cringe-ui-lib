import React from 'react'
import { StyledDnDList } from './styled'

export type DndListProps = {
  children: React.ReactNode | Array<React.ReactNode>
}

export const DndList = ({ children }: DndListProps) => {
  return <StyledDnDList>{children}</StyledDnDList>
}

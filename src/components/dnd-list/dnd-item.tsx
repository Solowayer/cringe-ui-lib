import React from 'react'
import { StyledDnDItem } from './styled'

export type DndItemProps = {
  children: React.ReactNode
}

export const DndItem = React.forwardRef<HTMLLIElement, DndItemProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <StyledDnDItem ref={ref} draggable={true} {...rest}>
      {children}
    </StyledDnDItem>
  )
})

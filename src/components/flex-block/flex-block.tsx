import React, { ReactNode } from 'react'
import { StyledFlexBlock } from './styled'

type FlexProps = {
  children: ReactNode
}

export const FlexBlock = (props: FlexProps) => {
  const { children } = props
  return <StyledFlexBlock> {children}</StyledFlexBlock>
}

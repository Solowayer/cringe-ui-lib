import React, { ElementType, HTMLAttributes, ReactNode } from 'react'
import { StyledFlexBlock } from './styled'

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  position?: string
  overflow?: string
  flex?: string
  flexGrow?: string
  flexShrink?: string
  flexBasis?: string
  flexWrap?: string
  direction?: string
  alignItems?: string
  justifyContent?: string
  gap?: string
  width?: string
  minWidth?: string
  maxWidth?: string
  height?: string
  minHeight?: string
  maxHeight?: string
  margin?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  padding?: string
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
  children?: ReactNode
}

export const FlexBlock = (props: FlexProps) => {
  const {
    as = 'div',
    position,
    overflow,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    flexWrap,
    direction,
    alignItems,
    justifyContent,
    gap,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    children,
  } = props
  return (
    <StyledFlexBlock
      as={as}
      position={position}
      overflow={overflow}
      flex={flex}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      flexBasis={flexBasis}
      flexWrap={flexWrap}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
    >
      {children}
    </StyledFlexBlock>
  )
}

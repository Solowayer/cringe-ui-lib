import React, { ElementType, HTMLAttributes, ReactNode } from 'react'
import { StyledBox } from './styled'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  display?: string
  position?: string
  overflow?: string
  flex?: string
  flexGrow?: string
  flexShrink?: string
  flexBasis?: string
  flexWrap?: string
  flexDirection?: string
  alignItems?: string
  alignSelf?: string
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
  color?: string
  backgroundColor?: string
  backgroundImage?: string
  backgroundPosition?: string
  backgroundRepeat?: string
  children?: ReactNode
}

export const Box = (props: BoxProps) => {
  const {
    as = 'div',
    display,
    position,
    overflow,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    flexWrap,
    flexDirection,
    alignItems,
    alignSelf,
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
    color,
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    children,
  } = props
  return (
    <LibraryThemeProvider>
      <StyledBox
        as={as}
        display={display}
        position={position}
        overflow={overflow}
        flex={flex}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        flexBasis={flexBasis}
        flexWrap={flexWrap}
        flexDirection={flexDirection}
        alignItems={alignItems}
        alignSelf={alignSelf}
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
        color={color}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        backgroundPosition={backgroundPosition}
        backgroundRepeat={backgroundRepeat}
      >
        {children}
      </StyledBox>
    </LibraryThemeProvider>
  )
}

import styled from 'styled-components'
import { FlexProps } from './flex-block'

export const StyledFlexBlock = styled.div<FlexProps>`
  display: flex;
  font-family: ${({ theme }) => theme.typography.defaultFontFamily};
  position: ${({ position }) => position};
  overflow: ${({ overflow }) => overflow};
  flex: ${({ flex }) => flex};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  padding: ${({ padding }) => padding};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
`

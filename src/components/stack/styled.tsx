import styled, { css } from 'styled-components'
import { StackProps } from './stack'

export const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  justify-content: ${(props) => props.justifyContent};
  *:not(:first-child) {
    ${getSpacing}
  }
`

function getSpacing({ spacing, horizontal }: StackProps) {
  switch (spacing) {
    case 0:
      return css`
        margin-top: ${({ theme }) => (horizontal ? '' : '0')};
        margin-left: ${({ theme }) => (horizontal ? '0' : '')};
      `
    case 0.5:
      return css`
        margin-top: ${({ theme }) => (horizontal ? '' : theme.sizing.scale4)};
        margin-left: ${({ theme }) => (horizontal ? theme.sizing.scale4 : '')};
      `
    case 1:
      return css`
        margin-top: ${({ theme }) => (horizontal ? '' : theme.sizing.scale8)};
        margin-left: ${({ theme }) => (horizontal ? theme.sizing.scale8 : '')};
      `
    case 2:
      return css`
        margin-top: ${({ theme }) => (horizontal ? '' : theme.sizing.scale16)};
        margin-left: ${({ theme }) => (horizontal ? theme.sizing.scale16 : '')};
      `
    case 3:
      return css`
        margin-top: ${({ theme }) => (horizontal ? '' : theme.sizing.scale24)};
        margin-left: ${({ theme }) => (horizontal ? theme.sizing.scale24 : '')};
      `
    case 4:
      return css`
        margin-top: ${({ theme }) => (horizontal ? '' : theme.sizing.scale32)};
        margin-left: ${({ theme }) => (horizontal ? theme.sizing.scale32 : '')};
      `
    case 8:
      return css`
        margin-top: ${({ theme }) => (horizontal ? '' : theme.sizing.scale64)};
        margin-left: ${({ theme }) => (horizontal ? theme.sizing.scale64 : '')};
      `
    case 12:
      return css`
        margin-top: ${({ theme }) => (horizontal ? '' : theme.sizing.scale96)};
        margin-left: ${({ theme }) => (horizontal ? theme.sizing.scale96 : '')};
      `
    default:
      return css`
        margin-top: ${({ theme }) => (horizontal ? '' : '0')};
        margin-left: ${({ theme }) => (horizontal ? '0' : '')};
      `
  }
}

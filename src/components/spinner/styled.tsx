import styled from 'styled-components'
import { SpinnerProps } from './spinner'
import { Theme } from '../../config/themes/types'
import { SIZE } from './constants'

interface StyledSpinnerProps extends SpinnerProps {
  theme: Theme
}

export const StyledSpinner = styled.span<StyledSpinnerProps>`
  position: absolute;
  box-sizing: border-box;
  display: block;
  border-width: 2px;
  border-radius: 50px;
  ${getSize}
  ${getColor}

  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

function getColor() {
  return `
        border-top-color: green;
        border-left-color: gray;
        border-bottom-color: gray;
        border-right-color: gray;
        border-style: solid;
      `
}

function getSize({ size, theme }: StyledSpinnerProps) {
  switch (size) {
    case SIZE.small:
      return `
        width: ${theme.sizing.scale16};
        height: ${theme.sizing.scale16};
        border-width: ${theme.sizing.scale4};
      `
    case SIZE.medium:
      return `
        width: ${theme.sizing.scale32};
        height: ${theme.sizing.scale32};
      `
    case SIZE.large:
      return `
        width: ${theme.sizing.scale64};
        height: ${theme.sizing.scale64};
      `
    default:
      return ''
  }
}

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

function getColor({ theme }: StyledSpinnerProps) {
  return `
        border-top-color: ${theme.colors.blue500};
        border-left-color: ${theme.colors.gray100};
        border-bottom-color: ${theme.colors.gray100};
        border-right-color: ${theme.colors.gray100};
        border-style: solid;
      `
}

function getSize({ size, theme }: StyledSpinnerProps) {
  switch (size) {
    case SIZE.small:
      return `
        width: ${theme.sizing.scale24};
        height: ${theme.sizing.scale24};
        border-width: ${theme.sizing.scale2};
      `
    case SIZE.medium:
      return `
        width: ${theme.sizing.scale32};
        height: ${theme.sizing.scale32};
        border-width: ${theme.sizing.scale4};
      `
    case SIZE.large:
      return `
        width: ${theme.sizing.scale40};
        height: ${theme.sizing.scale40};
        border-width: ${theme.sizing.scale4};
      `
    default:
      return ''
  }
}

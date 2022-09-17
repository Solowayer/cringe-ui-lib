import styled, { css } from 'styled-components'
import { SpinnerProps } from './spinner'
import { SIZE } from './constants'

export const StyledSpinner = styled.span<SpinnerProps>`
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
  return css`
    border-top-color: ${({ theme }) => theme.colors.blue500};
    border-left-color: ${({ theme }) => theme.colors.gray100};
    border-bottom-color: ${({ theme }) => theme.colors.gray100};
    border-right-color: ${({ theme }) => theme.colors.gray100};
    border-style: solid;
  `
}

function getSize({ size }: SpinnerProps) {
  switch (size) {
    case SIZE.small:
      return css`
        width: ${({ theme }) => theme.sizing.scale16};
        height: ${({ theme }) => theme.sizing.scale16};
        border-width: ${({ theme }) => theme.sizing.scale2};
      `
    case SIZE.medium:
      return css`
        width: ${({ theme }) => theme.sizing.scale24};
        height: ${({ theme }) => theme.sizing.scale24};
        border-width: ${({ theme }) => theme.sizing.scale4};
      `
    case SIZE.large:
      return css`
        width: ${({ theme }) => theme.sizing.scale32};
        height: ${({ theme }) => theme.sizing.scale32};
        border-width: ${({ theme }) => theme.sizing.scale6};
      `
    default:
      return ''
  }
}

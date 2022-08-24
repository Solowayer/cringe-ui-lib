import styled from 'styled-components'
import { SpinnerProps } from './spinner'
// import { lightTheme as theme } from '../../config/themes/light-theme'

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

function getColor({ type }: SpinnerProps) {
  return `
        border-top-color: green;
        border-left-color: white;
        border-bottom-color: white;
        border-right-color: white;
        border-style: solid;
      `
}

function getSize({ size }: SpinnerProps) {
  return `
    width: 24px;
    height: 24px;
  `
}

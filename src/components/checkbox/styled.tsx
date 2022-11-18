import styled, { css } from 'styled-components'
import { CheckboxProps } from './checkbox'

const check = encodeURIComponent(`
<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.50002 12.6L0.400024 6.60002L2.60002 4.40002L6.50002 8.40002L13.9 0.900024L16.1 3.10002L6.50002 12.6Z" fill="#ffffff"/>
</svg>
`)

export const StyledLabel = styled.label<CheckboxProps>`
  display: flex;
  align-items: flex-start;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`

export const StyledCheckmark = styled.span<CheckboxProps>`
  display: flex;
  width: ${({ theme }) => theme.sizing.scale16};
  height: ${({ theme }) => theme.sizing.scale16};
  transition: 0.4s;
  flex: 0 0 auto;

  outline-width: 2px;
  outline-style: ${({ theme }) => theme.borders.default.style};
  outline-color: ${({ theme }) => theme.borders.default.color};
  &:hover {
    outline-color: ${({ theme, disabled }) =>
      disabled ? theme.borders.disabled.color : theme.borders.selected.color};
  }
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  ${getCheckmarkStyles}
`

export const StyledTrack = styled.div<CheckboxProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.sizing.scale40};
  height: ${({ theme }) => theme.sizing.scale24};
  background-color: grey;
  border-radius: ${({ theme }) => theme.borders.radius16};
  flex: 0 0 auto;
  box-shadow: ${({ theme }) => theme.lighting.shadow1};
  transition: 0.2s;
  ${getTrackStyles}
`

export const StyledSlider = styled.div<CheckboxProps>`
  background-color: white;
  width: ${({ theme }) => theme.sizing.scale16};
  height: ${({ theme }) => theme.sizing.scale16};
  border-radius: 50%;
  flex: 0 0 auto;
  margin-left: ${({ theme }) => theme.sizing.scale4};
  transition: 0.2s;
  ${getSliderStyles}
`

function getCheckmarkStyles({ disabled, checked }: CheckboxProps) {
  if (checked) {
    return css`
      outline-color: ${({ theme }) => theme.borders.selected.color};
      background-image: url('data:image/svg+xml,${check}');
      background-color: ${({ theme }) => theme.colors.black};
    `
  }
  if (disabled) {
    return css`
      outline-color: ${({ theme }) => theme.borders.disabled.color};
    `
  }
}

function getSliderStyles({ checked }: CheckboxProps) {
  if (checked) {
    return css`
      transform: translateX(16px);
    `
  }
}

function getTrackStyles({ checked }: CheckboxProps) {
  if (checked) {
    return css`
      background-color: black;
    `
  }
}

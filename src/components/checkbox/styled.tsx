import styled, { css } from 'styled-components'
import { CheckboxProps } from './checkbox'

const check = encodeURIComponent(`
<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.50002 12.6L0.400024 6.60002L2.60002 4.40002L6.50002 8.40002L13.9 0.900024L16.1 3.10002L6.50002 12.6Z" fill="#ffffff"/>
</svg>
`)

const indeterminate = encodeURIComponent(`
<svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 0.5H0V3.5H14V0.5Z" fill="#ffffff"/>
</svg>
`)

export const StyledLabel = styled.label<CheckboxProps>`
  display: inline-flex;
  align-items: ${({ alignItems }) => alignItems};
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
  border-radius: ${({ theme }) => theme.borders.radius2};
  transition: 0.4s;
  flex: 0 0 auto;
  outline-width: ${({ theme }) => theme.borders.width2};
  outline-style: ${({ theme }) => theme.borders.solid};
  outline-color: ${({ theme }) => theme.colors.checkboxBorder};
  &:hover {
    outline-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.checkboxBorderDisabled : theme.colors.checkboxBorderHover};
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
  background-color: ${({ theme }) => theme.colors.toggleTrackOff};
  border-radius: ${({ theme }) => theme.borders.radius16};
  flex: 0 0 auto;
  transition: 0.2s;
  ${getTrackStyles}
`

export const StyledSlider = styled.div<CheckboxProps>`
  background-color: ${({ theme }) => theme.colors.toggleSlider};
  width: ${({ theme }) => theme.sizing.scale16};
  height: ${({ theme }) => theme.sizing.scale16};
  border-radius: 50%;
  flex: 0 0 auto;
  margin-left: ${({ theme }) => theme.sizing.scale4};
  transition: 0.2s;
  box-shadow: ${({ theme }) => theme.lighting.shadow1};
  ${getSliderStyles}
`

export const StyledIcon = styled.div<CheckboxProps>`
  display: flex;
  ${getIconStyles}
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`

function getCheckmarkStyles({ disabled, checked, isIndeterminate }: CheckboxProps) {
  if (checked) {
    return css`
      outline-color: ${({ theme }) => theme.colors.checkboxChecked};
      background-image: url('data:image/svg+xml,${check}');
      background-color: ${({ theme }) => theme.colors.checkboxChecked};
    `
  }
  if (disabled) {
    return css`
      outline-color: ${({ theme }) => theme.colors.checkboxBorderDisabled};
    `
  }
  if (isIndeterminate) {
    return css`
      outline-color: ${({ theme }) => theme.colors.checkboxChecked};
      background-image: url('data:image/svg+xml,${indeterminate}');
      background-color: ${({ theme }) => theme.colors.checkboxChecked};
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

function getTrackStyles({ checked, disabled }: CheckboxProps) {
  if (checked) {
    return css`
      background-color: ${({ theme }) => theme.colors.toggleTrackOn};
    `
  }
  if (disabled) {
    return css`
      background-color: ${({ theme }) => theme.colors.toggleTrackDisabled};
    `
  }
}

function getIconStyles({ checked }: CheckboxProps) {
  if (checked) {
    return css`
      color: ${({ theme }) => theme.colors.red500};
    `
  }
}

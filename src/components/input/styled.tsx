import styled, { css } from 'styled-components'
import { InputProps } from './input'
import { SIZE } from './constants'

export const StyledInputWrapper = styled.div<InputProps>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  width: ${(props) => props.width};
  ${getHeightStyles}
`

export const StyledInput = styled.input<InputProps>`
  display: flex;
  width: 100%;
  height: 100%;
  border: none;
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  border-radius: ${(props) => props.theme.sizing.scale4};
  background-color: ${({ theme }) => theme.colors.inputFill};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
  &:focus {
    outline-width: ${({ theme }) => theme.colors.inputBorderFocus.width};
    outline-style: ${({ theme }) => theme.colors.inputBorderFocus.style};
    outline-color: ${({ theme }) => theme.colors.inputBorderFocus.color};
    background-color: ${({ theme }) => theme.colors.inputFocusFill};
  }
  padding-right: ${({ theme }) => theme.sizing.scale64};
  ${getBackgroundStyles}
  ${getPaddingStyles}
  ${getFontStyles}
`

export const StyledInputIcon = styled.div<InputProps>`
  position: absolute;
  display: flex;
  left: ${({ theme }) => theme.sizing.scale16};
  pointer-events: none;
  color: ${(props) =>
    props.disabled ? props.theme.colors.inputContentDisabled : props.theme.colors.inputContent};
`

export const StyledInputControls = styled.div<InputProps>`
  position: absolute;
  display: flex;
  align-items: center;
  right: 16px;
  color: ${({ theme }) => theme.colors.inputControls};
`

export const StyledClearIcon = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const StyledVisibilityIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.sizing.scale8};
  &:hover {
    cursor: pointer;
  }
`

function getBackgroundStyles({ disabled, error, success }: InputProps) {
  if (disabled) {
    return css`
      color: ${({ theme }) => theme.colors.inputContentDisabled};
      background-color: ${({ theme }) => theme.colors.inputDisabledFill};
      &::placeholder {
        color: ${({ theme }) => theme.colors.inputPlaceholderDisabled};
      }
    `
  }
  if (error) {
    return css`
      outline-width: ${({ theme }) => theme.colors.inputBorderError.width};
      outline-style: ${({ theme }) => theme.colors.inputBorderError.style};
      outline-color: ${({ theme }) => theme.colors.inputBorderError.color};
      background-color: ${({ theme }) => theme.colors.inputErrorFill};
      &:focus {
        outline-color: ${({ theme }) => theme.colors.inputBorderError.color};
        background-color: ${({ theme }) => theme.colors.inputErrorFill};
      }
    `
  }
  if (success) {
    return css`
      outline-width: ${({ theme }) => theme.colors.inputBorderSuccess.width};
      outline-style: ${({ theme }) => theme.colors.inputBorderSuccess.style};
      outline-color: ${({ theme }) => theme.colors.inputBorderSuccess.color};
      background-color: ${({ theme }) => theme.colors.inputSuccessFill};
      &:focus {
        outline-color: ${({ theme }) => theme.colors.inputBorderSuccess.color};
        background-color: ${({ theme }) => theme.colors.inputSuccessFill};
      }
    `
  }
}

function getHeightStyles({ scale }: InputProps) {
  switch (scale) {
    case SIZE.small:
      return css`
        height: ${({ theme }) => theme.sizing.scale32};
      `
    case SIZE.medium:
      return css`
        height: ${({ theme }) => theme.sizing.scale40};
      `
    case SIZE.large:
      return css`
        height: ${({ theme }) => theme.sizing.scale48};
      `
    default:
      return ``
  }
}

function getPaddingStyles({ icon, scale }: InputProps) {
  switch (scale) {
    case SIZE.small:
      return css`
        padding-left: ${icon ? '48px' : ({ theme }) => theme.sizing.scale16};
      `
    case SIZE.medium:
      return css`
        padding-left: ${icon ? '52px' : ({ theme }) => theme.sizing.scale16};
      `
    case SIZE.large:
      return css`
        padding-left: ${icon ? '56px' : ({ theme }) => theme.sizing.scale16};
      `
    default:
      return ``
  }
}

function getFontStyles({ scale }: InputProps) {
  switch (scale) {
    case SIZE.small:
      return css`
        font-size: ${({ theme }) => theme.typography.paragraphSmall.fontSize};
        font-weight: ${({ theme }) => theme.typography.paragraphSmall.fontWeight};
        line-height: ${({ theme }) => theme.typography.paragraphSmall.lineHeight};
      `
    case SIZE.medium:
      return css`
        font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
        font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
        line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};
      `
    case SIZE.large:
      return css`
        font-size: ${({ theme }) => theme.typography.paragraphLarge.fontSize};
        font-weight: ${({ theme }) => theme.typography.paragraphLarge.fontWeight};
        line-height: ${({ theme }) => theme.typography.paragraphLarge.lineHeight};
      `
    default:
      return ``
  }
}

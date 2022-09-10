import styled, { css } from 'styled-components'
import { InputProps } from './input'
import { SIZE } from './constants'
import { Theme } from '../../config/themes/types'

interface StyledInputProps extends InputProps {
  theme: Theme
}

export const StyledInputWrapper = styled.div<StyledInputProps>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  width: ${(props) => props.width};
  ${getHeightStyles}
`

export const StyledInput = styled.input<StyledInputProps>`
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

export const StyledInputIcon = styled.div<StyledInputProps>`
  position: absolute;
  display: flex;
  left: ${({ theme }) => theme.sizing.scale16};
  pointer-events: none;
  color: ${(props) =>
    props.disabled ? props.theme.colors.inputContentDisabled : props.theme.colors.inputContent};
`

export const StyledInputControls = styled.div<StyledInputProps>`
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

function getBackgroundStyles({ theme, disabled, error, success }: StyledInputProps) {
  if (disabled) {
    return css`
      color: ${theme.colors.inputContentDisabled};
      background-color: ${theme.colors.inputDisabledFill};
      &::placeholder {
        color: ${theme.colors.inputPlaceholderDisabled};
      }
    `
  }
  if (error) {
    return css`
      outline-width: ${theme.colors.inputBorderError.width};
      outline-style: ${theme.colors.inputBorderError.style};
      outline-color: ${theme.colors.inputBorderError.color};
      background-color: ${theme.colors.inputErrorFill};
      &:focus {
        outline-color: ${theme.colors.inputBorderError.color};
        background-color: ${theme.colors.inputErrorFill};
      }
    `
  }
  if (success) {
    return css`
      outline-width: ${theme.colors.inputBorderSuccess.width};
      outline-style: ${theme.colors.inputBorderSuccess.style};
      outline-color: ${theme.colors.inputBorderSuccess.color};
      background-color: ${theme.colors.inputSuccessFill};
      &:focus {
        outline-color: ${theme.colors.inputBorderSuccess.color};
        background-color: ${theme.colors.inputSuccessFill};
      }
    `
  }
}

function getHeightStyles({ theme, scale }: StyledInputProps) {
  switch (scale) {
    case SIZE.small:
      return css`
        height: ${theme.sizing.scale32};
      `
    case SIZE.medium:
      return css`
        height: ${theme.sizing.scale40};
      `
    case SIZE.large:
      return css`
        height: ${theme.sizing.scale48};
      `
    default:
      return ``
  }
}

function getPaddingStyles({ theme, icon, scale }: StyledInputProps) {
  switch (scale) {
    case SIZE.small:
      return css`
        padding-left: ${icon ? '48px' : theme.sizing.scale16};
      `
    case SIZE.medium:
      return css`
        padding-left: ${icon ? '52px' : theme.sizing.scale16};
      `
    case SIZE.large:
      return css`
        padding-left: ${icon ? '56px' : theme.sizing.scale16};
      `
    default:
      return ``
  }
}

function getFontStyles({ theme, scale }: StyledInputProps) {
  switch (scale) {
    case SIZE.small:
      return css`
        font-size: ${theme.typography.paragraphSmall.fontSize};
        font-weight: ${theme.typography.paragraphSmall.fontWeight};
        line-height: ${theme.typography.paragraphSmall.lineHeight};
      `
    case SIZE.medium:
      return css`
        font-size: ${theme.typography.paragraphMedium.fontSize};
        font-weight: ${theme.typography.paragraphMedium.fontWeight};
        line-height: ${theme.typography.paragraphMedium.lineHeight};
      `
    case SIZE.large:
      return css`
        font-size: ${theme.typography.paragraphLarge.fontSize};
        font-weight: ${theme.typography.paragraphLarge.fontWeight};
        line-height: ${theme.typography.paragraphLarge.lineHeight};
      `
    default:
      return ``
  }
}

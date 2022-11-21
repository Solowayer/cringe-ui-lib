import styled, { css } from 'styled-components'
import { InputProps } from './input'
import { SIZE } from './constants'

type StyledInputProps = {
  inputSize?: keyof typeof SIZE
  width?: string
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

export const StyledInput = styled.input<InputProps>`
  display: flex;
  width: 100%;
  min-height: 100%;
  border: none;
  border-radius: ${(props) => props.theme.sizing.scale4};
  background-color: ${({ theme }) => theme.colors.inputFill};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  outline-width: ${({ theme }) => theme.borders.width2};
  outline-style: ${({ theme }) => theme.borders.solid};
  outline-color: transparent;
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
  &:focus {
    outline-color: ${({ theme }) => theme.colors.inputBorderFocus};
    background-color: ${({ theme }) => theme.colors.inputFocus};
  }
  padding-top: 0;
  padding-bottom: 0;
  padding-right: ${({ theme }) => theme.sizing.scale64};
  ${getColorStyles}
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
  gap: ${({ theme }) => theme.sizing.scale8};
  right: 16px;
  color: ${(props) =>
    props.disabled ? props.theme.colors.inputContentDisabled : props.theme.colors.inputControls};
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
  &:hover {
    cursor: pointer;
  }
`

function getColorStyles({ disabled, error, success }: InputProps) {
  if (disabled) {
    return css`
      color: ${({ theme }) => theme.colors.inputContentDisabled};
      background-color: ${({ theme }) => theme.colors.inputDisabled};
      &::placeholder {
        color: ${({ theme }) => theme.colors.inputPlaceholderDisabled};
      }
    `
  }
  if (error) {
    return css`
      outline-color: ${({ theme }) => theme.colors.inputBorderError};
      background-color: ${({ theme }) => theme.colors.inputError};
    `
  }
  if (success) {
    return css`
      outline-color: ${({ theme }) => theme.colors.inputBorderSuccess};
      background-color: ${({ theme }) => theme.colors.inputSuccess};
    `
  }
}

function getHeightStyles({ inputSize }: InputProps) {
  switch (inputSize) {
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

function getPaddingStyles({ startIcon, inputSize }: InputProps) {
  switch (inputSize) {
    case SIZE.small:
      return css`
        padding-left: ${startIcon ? '48px' : ({ theme }) => theme.sizing.scale16};
      `
    case SIZE.medium:
      return css`
        padding-left: ${startIcon ? '52px' : ({ theme }) => theme.sizing.scale16};
      `
    case SIZE.large:
      return css`
        padding-left: ${startIcon ? '56px' : ({ theme }) => theme.sizing.scale16};
      `
    default:
      return ``
  }
}

function getFontStyles({ inputSize }: InputProps) {
  switch (inputSize) {
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

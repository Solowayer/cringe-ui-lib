import styled, { css } from 'styled-components'
import { InputProps } from './input'
import { SIZE } from './constants'
import { Theme } from '../../config/themes/types'

interface StyledInputProps extends InputProps {
  theme: Theme
}

export type WrapperProps = {
  width?: string
  height: '32px' | '40px' | '48px'
}

export const StyledInputWrapper = styled.div<StyledInputProps>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  width: 100%;
  height: 40px;
`

export const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  border-radius: ${(props) => props.theme.sizing.scale4};
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
  background-color: ${({ theme }) => theme.colors.inputFill};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 16px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: ${(props) => (props.icon ? '48px' : '16px')};
  padding-right: 64px;
  border: none;
  &:focus {
    outline-width: ${({ theme }) => theme.colors.inputBorderFocus.width};
    outline-style: ${({ theme }) => theme.colors.inputBorderFocus.style};
    outline-color: ${({ theme }) => theme.colors.inputBorderFocus.color};
    background-color: ${({ theme }) => theme.colors.inputFocusFill};
  }

  ${getBackgroundStyles}
`

export const StyledInputIcon = styled.div<StyledInputProps>`
  position: absolute;
  display: flex;
  left: 16px;
  pointer-events: none;
  color: ${(props) =>
    props.disabled ? props.theme.colors.inputContentDisabled : props.theme.colors.inputContent};
`

export const StyledInputControls = styled.div<StyledInputProps>`
  position: absolute;
  display: flex;
  align-items: center;
  right: 16px;
  svg:nth-child(2) {
    margin-left: 8px;
  }
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
  margin-left: 8px;
  &:hover {
    cursor: pointer;
  }
`

function getBackgroundStyles({ theme, disabled, success, error }: StyledInputProps) {
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
    `
  }
  if (success) {
    return css`
      outline-width: ${theme.colors.inputBorderSuccess.width};
      outline-style: ${theme.colors.inputBorderSuccess.style};
      outline-color: ${theme.colors.inputBorderSuccess.color};
      background-color: ${theme.colors.inputSuccessFill};
    `
  }
}

function getPaddingStyles({ theme, scale }: StyledInputProps) {
  switch (scale) {
    case SIZE.large:
      return `

      `
  }
}

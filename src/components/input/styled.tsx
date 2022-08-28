import styled from 'styled-components'
import { InputProps } from './input'
import { Theme } from '../../config/themes/types'

interface StyledInputProps extends InputProps {
  theme: Theme
}

export type WrapperProps = {
  width?: string
  height: '32px' | '40px' | '48px'
}

export const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.inputFill};
  width: 450px;
  height: 40px;
  &:focus {
    outline-width: ${({ theme }) => theme.colors.inputBorderFocus.width};
    outline-style: ${({ theme }) => theme.colors.inputBorderFocus.style};
    outline-color: ${({ theme }) => theme.colors.inputBorderFocus.color};
    background-color: ${({ theme }) => theme.colors.inputFocusFill};
  }
`

export const StyledInputIcon = styled.div`
  display: flex;
  margin-left: 16px;
  cursor: pointer;
`

export const StyledInputControls = styled.div`
  color: #808080;
  display: flex;
  padding-right: 16px;
  svg {
    &:hover {
      cursor: pointer;
    }
  }
  svg:nth-child(2) {
    margin-left: 8px;
  }
`

export const StyledInput = styled.input<StyledInputProps>`
  position: relative;
  display: flex;
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  &:focus {
    background-color: ${({ theme }) => theme.colors.inputFocusFill};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 16px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 16px;
  padding-right: 16px;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`

function getPaddingStyles({ theme }: StyledInputProps) {
  return `

  `
}

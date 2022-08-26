import styled from 'styled-components'
import { ButtonProps } from './button'
import { SHAPE, SIZE, VARIANT } from './constants'
import { Theme } from '../../config/themes/types'

export interface StyledButtonProps extends ButtonProps {
  theme: Theme
}

export const StyledIconLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`

export const StyledIconRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  ${(props) => (props.disabled ? getDisabled : getBackgroundColor)}
  ${getDisabled}
  color: ${(props) => (props.isLoading ? 'transparent' : '')};
  ${getFontFamily}
  ${getSize}
  ${getShape}
`

function getDisabled({ theme, disabled }: StyledButtonProps) {
  if (disabled) {
    return `
      border: none; 
      color: ${theme.colors.buttonDisabledContent};
      background: ${theme.colors.buttonDisabledFill};
  `
  }
}

function getFontFamily({ theme }: StyledButtonProps) {
  return `
    font-family: ${theme.typography.defaultFontFamily};
  `
}

function getSize({ theme, size }: StyledButtonProps) {
  switch (size) {
    case SIZE.small:
      return `
        padding: 8px 16px;
        font-size: ${theme.typography.labelSmall.fontSize};
        font-weight: ${theme.typography.labelSmall.fontWeight};
        line-height: ${theme.typography.labelSmall.lineHeight}; 
      `
    case SIZE.medium:
      return `
        padding: 12px 16px;
        font-size: ${theme.typography.labelMedium.fontSize};
        font-weight: ${theme.typography.labelMedium.fontWeight};
        line-height: ${theme.typography.labelMedium.lineHeight};
      `
    case SIZE.large:
      return `
        padding: 12px 24px;
        font-size: ${theme.typography.labelLarge.fontSize};
        font-weight: ${theme.typography.labelLarge.fontWeight};
        line-height: ${theme.typography.labelLarge.lineHeight};
      `
    default:
      return ''
  }
}

function getShape({ theme, shape }: StyledButtonProps) {
  switch (shape) {
    case SHAPE.rectangle:
      return `
        border-radius: ${theme.borders.radius4}
      `
    case SHAPE.round:
      return `
        border-radius: ${theme.borders.radius32}
      `
    case SHAPE.circle:
      return `
        border-radius: ${theme.borders.radiusCircle}
      `
  }
}

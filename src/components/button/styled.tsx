import styled from 'styled-components'
import { ButtonProps } from './button'
import { SHAPE, SIZE, VARIANT } from './constants'

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

export const StyledButton = styled.button<ButtonProps>`
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

function getBackgroundColor({ variant, theme }: ButtonProps) {
  switch (variant) {
    case VARIANT.primary:
      return `
        color: ${theme.colors.buttonPrimaryContent};
        background-color: ${theme.colors.buttonPrimaryFill};
        &:hover {
          background-color: ${theme.colors.buttonPrimaryHover}
        }
        &:active {
          background-color: ${theme.colors.buttonPrimaryActive}
        } 
      `
    case VARIANT.secondary:
      return `
        outline-width: ${theme.colors.buttonSecondaryBorder.width}; 
        outline-style: ${theme.colors.buttonSecondaryBorder.style}; 
        outline-color: ${theme.colors.buttonSecondaryBorder.color};
        color: ${theme.colors.buttonSecondaryContent};
        background-color: ${theme.colors.buttonSecondaryFill};
        &:hover {
          background-color: ${theme.colors.buttonSecondaryHover};
        }
        &:active {
          background-color: ${theme.colors.buttonSecondaryActive}; 
        }
      `
    case VARIANT.tertiary:
      return `
        color: ${theme.colors.buttonTertiaryContent};
        background-color: ${theme.colors.buttonTertiaryFill};
        &:hover {
          background-color: ${theme.colors.buttonTertiaryHover};
        }
        &:active {
          background-color: ${theme.colors.buttonTertiaryActive}; 
        }
      `
    case VARIANT.ghost:
      return `
        color: ${theme.colors.buttonGhostContent};
        background-color: ${theme.colors.buttonGhostFill};
        &:hover {
          background-color: ${theme.colors.buttonGhostHover};
        }
        &:active {
          background-color: ${theme.colors.buttonGhostActive}; 
        }
      `
    case VARIANT.clear:
      return `
        color: ${theme.colors.buttonClearContent};
        background-color: ${theme.colors.buttonClearFill};
        &:hover {
          background-color: ${theme.colors.buttonClearHover};
        }
        &:active {
          background-color: ${theme.colors.buttonClearActive}; 
        }
      `
    case VARIANT.danger:
      return ` 
        color: ${theme.colors.buttonDangerContent};
        background-color: ${theme.colors.buttonDangerFill};
        &:hover {
          background-color: ${theme.colors.buttonDangerHover};
        }
        &:active {
          background-color: ${theme.colors.buttonDangerActive}; 
        }
      `
    default:
      return ``
  }
}

function getDisabled({ theme, disabled }: ButtonProps) {
  if (disabled) {
    return `
      border: none; 
      color: ${theme.colors.buttonDisabledContent};
      background: ${theme.colors.buttonDisabledFill};
  `
  }
}

function getFontFamily({ theme }: ButtonProps) {
  return `
    font-family: ${theme.typography.defaultFontFamily};
  `
}

function getSize({ theme, size }: ButtonProps) {
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

function getShape({ theme, shape }: ButtonProps) {
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

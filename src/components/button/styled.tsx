import styled from 'styled-components'
import { ButtonProps } from './button'
import { SHAPE, SIZE, VARIANT } from './constants'

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  ${getFontFamily}
  ${getBackgroundColor}
  ${getSize}
  ${getShape}
`

function getFontFamily({ theme }: ButtonProps) {
  return `
    font-family: ${theme.typography.defaultFontFamily};
  `
}

function getBackgroundColor({ variant, theme }: ButtonProps) {
  switch (variant) {
    case VARIANT.primary:
      return `
        border: none;
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
        border-width: ${theme.colors.buttonSecondaryBorder.width}; 
        border-style: ${theme.colors.buttonSecondaryBorder.style}; 
        border-color: ${theme.colors.buttonSecondaryBorder.color};
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
        border: none; 
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
        border: none; 
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
        border: none; 
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
        border: none; 
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

function getSize({ size, theme }: ButtonProps) {
  switch (size) {
    case SIZE.small:
      return `
        font-size: ${theme.typography.labelSmall.fontSize};
        font-weight: ${theme.typography.labelMedium.fontWeight};
        line-height: ${theme.typography.labelSmall.lineHeight};
        padding: 8px 16px;
      `
    case SIZE.medium:
      return `
        font-size: ${theme.typography.labelMedium.fontSize};
        font-weight: ${theme.typography.labelMedium.fontWeight};
        line-height: ${theme.typography.labelMedium.lineHeight};
        padding: 12px 16px;
      `
    case SIZE.large:
      return `
        font-size: ${theme.typography.labelLarge.fontSize};
        font-weight: ${theme.typography.labelLarge.fontWeight};
        line-height: ${theme.typography.labelLarge.lineHeight};
        padding: 12px 24px;
      `
    default:
      return ''
  }
}

function getShape({ shape, theme }: ButtonProps) {
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

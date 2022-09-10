import styled, { css } from 'styled-components'
import { ButtonProps } from './button'
import { SHAPE, SIZE, VARIANT } from './constants'
import { Theme } from '../../config/themes/types'

export interface StyledButtonProps extends ButtonProps {
  theme: Theme
}

export const StyledIconLeft = styled.div<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`

export const StyledIconRight = styled.div<StyledButtonProps>`
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
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  ${(props) => (props.disabled ? getDisabledStyles : getBackgroundStyles)}
  ${getDisabledStyles}
  color: ${(props) => (props.isLoading ? 'transparent' : '')};
  ${getFontStyles}
  ${getPaddingStyles}
  ${getBorderRadiusStyles}
`

function getBackgroundStyles({ theme, variant }: StyledButtonProps) {
  switch (variant) {
    case VARIANT.primary:
      return css`
        color: ${theme.colors.buttonPrimaryContent};
        background-color: ${theme.colors.buttonPrimaryFill};
        &:hover {
          background-color: ${theme.colors.buttonPrimaryHover};
        }
        &:active {
          background-color: ${theme.colors.buttonPrimaryActive};
        }
      `
    case VARIANT.secondary:
      return css`
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
      return css`
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
      return css`
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
      return css`
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
      return css`
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

function getDisabledStyles({ theme, disabled }: StyledButtonProps) {
  if (disabled) {
    return css`
      border: none;
      color: ${theme.colors.buttonDisabledContent};
      background: ${theme.colors.buttonDisabledFill};
    `
  }
}

function getFontStyles({ theme, size }: StyledButtonProps) {
  switch (size) {
    case SIZE.small:
      return css`
        font-size: ${theme.typography.labelSmall.fontSize};
        font-weight: ${theme.typography.labelSmall.fontWeight};
        line-height: ${theme.typography.labelSmall.lineHeight};
      `
    case SIZE.medium:
      return css`
        font-size: ${theme.typography.labelMedium.fontSize};
        font-weight: ${theme.typography.labelMedium.fontWeight};
        line-height: ${theme.typography.labelMedium.lineHeight};
      `
    case SIZE.large:
      return css`
        font-size: ${theme.typography.labelLarge.fontSize};
        font-weight: ${theme.typography.labelLarge.fontWeight};
        line-height: ${theme.typography.labelLarge.lineHeight};
      `
    default:
      return ''
  }
}

function getBorderRadiusStyles({ theme, shape }: StyledButtonProps) {
  switch (shape) {
    case SHAPE.rectangle:
      return css`
        border-radius: ${theme.borders.radius4};
      `
    case SHAPE.round:
      return css`
        border-radius: ${theme.borders.radius32};
      `
    case SHAPE.square:
      return css`
        border-radius: ${theme.borders.radius4};
      `
    case SHAPE.circle:
      return css`
        border-radius: ${theme.borders.radiusCircle};
      `
  }
}

function getPaddingStyles({ theme, size, shape }: StyledButtonProps) {
  const iconShape = shape === SHAPE.circle || shape === SHAPE.square
  switch (size) {
    case SIZE.small:
      return css`
        padding-top: ${theme.sizing.scale8};
        padding-bottom: ${theme.sizing.scale8};
        padding-right: ${iconShape ? theme.sizing.scale8 : theme.sizing.scale12};
        padding-left: ${iconShape ? theme.sizing.scale8 : theme.sizing.scale12};
      `
    case SIZE.medium:
      return css`
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: ${iconShape ? theme.sizing.scale12 : theme.sizing.scale16};
        padding-left: ${iconShape ? theme.sizing.scale12 : theme.sizing.scale16};
      `
    case SIZE.large:
      return css`
        padding-top: ${theme.sizing.scale12};
        padding-bottom: ${theme.sizing.scale12};
        padding-right: ${iconShape ? theme.sizing.scale16 : theme.sizing.scale20};
        padding-left: ${iconShape ? theme.sizing.scale16 : theme.sizing.scale20};
      `
    default:
      return ''
  }
}

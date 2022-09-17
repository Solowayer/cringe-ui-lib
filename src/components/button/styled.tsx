import styled, { css } from 'styled-components'
import { ButtonProps } from './button'
import { SHAPE, SIZE, VARIANT } from './constants'

export const StyledIconLeft = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`

export const StyledIconRight = styled.div<ButtonProps>`
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
  font-family: ${({ theme }) => theme.typography.defaultFontFamily};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  ${(props) => (props.disabled ? getDisabledStyles : getBackgroundStyles)}
  ${getDisabledStyles}
  color: ${(props) => (props.isLoading ? 'transparent' : '')};
  ${getFontStyles}
  ${getPaddingStyles}
  ${getBorderRadiusStyles}
`

function getBackgroundStyles({ variant }: ButtonProps) {
  switch (variant) {
    case VARIANT.primary:
      return css`
        color: ${({ theme }) => theme.colors.buttonPrimaryContent};
        background-color: ${({ theme }) => theme.colors.buttonPrimaryFill};
        &:hover {
          background-color: ${({ theme }) => theme.colors.buttonPrimaryHover};
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.buttonPrimaryActive};
        }
      `
    case VARIANT.secondary:
      return css`
        outline-width: ${({ theme }) => theme.colors.buttonSecondaryBorder.width};
        outline-style: ${({ theme }) => theme.colors.buttonSecondaryBorder.style};
        outline-color: ${({ theme }) => theme.colors.buttonSecondaryBorder.color};
        color: ${({ theme }) => theme.colors.buttonSecondaryContent};
        background-color: ${({ theme }) => theme.colors.buttonSecondaryFill};
        &:hover {
          background-color: ${({ theme }) => theme.colors.buttonSecondaryHover};
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.buttonSecondaryActive};
        }
      `
    case VARIANT.tertiary:
      return css`
        color: ${({ theme }) => theme.colors.buttonTertiaryContent};
        background-color: ${({ theme }) => theme.colors.buttonTertiaryFill};
        &:hover {
          background-color: ${({ theme }) => theme.colors.buttonTertiaryHover};
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.buttonTertiaryActive};
        }
      `
    case VARIANT.ghost:
      return css`
        color: ${({ theme }) => theme.colors.buttonGhostContent};
        background-color: ${({ theme }) => theme.colors.buttonGhostFill};
        &:hover {
          background-color: ${({ theme }) => theme.colors.buttonGhostHover};
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.buttonGhostActive};
        }
      `
    case VARIANT.clear:
      return css`
        color: ${({ theme }) => theme.colors.buttonClearContent};
        background-color: ${({ theme }) => theme.colors.buttonClearFill};
        &:hover {
          background-color: ${({ theme }) => theme.colors.buttonClearHover};
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.buttonClearActive};
        }
      `
    case VARIANT.danger:
      return css`
        color: ${({ theme }) => theme.colors.buttonDangerContent};
        background-color: ${({ theme }) => theme.colors.buttonDangerFill};
        &:hover {
          background-color: ${({ theme }) => theme.colors.buttonDangerHover};
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.buttonDangerActive};
        }
      `
    default:
      return ``
  }
}

function getDisabledStyles({ disabled }: ButtonProps) {
  if (disabled) {
    return css`
      border: none;
      color: ${({ theme }) => theme.colors.buttonDisabledContent};
      background: ${({ theme }) => theme.colors.buttonDisabledFill};
    `
  }
}

function getFontStyles({ size }: ButtonProps) {
  switch (size) {
    case SIZE.small:
      return css`
        font-size: ${({ theme }) => theme.typography.labelSmall.fontSize};
        font-weight: ${({ theme }) => theme.typography.labelSmall.fontWeight};
        line-height: ${({ theme }) => theme.typography.labelSmall.lineHeight};
      `
    case SIZE.medium:
      return css`
        font-size: ${({ theme }) => theme.typography.labelMedium.fontSize};
        font-weight: ${({ theme }) => theme.typography.labelMedium.fontWeight};
        line-height: ${({ theme }) => theme.typography.labelMedium.lineHeight};
      `
    case SIZE.large:
      return css`
        font-size: ${({ theme }) => theme.typography.labelLarge.fontSize};
        font-weight: ${({ theme }) => theme.typography.labelLarge.fontWeight};
        line-height: ${({ theme }) => theme.typography.labelLarge.lineHeight};
      `
    default:
      return ''
  }
}

function getBorderRadiusStyles({ shape }: ButtonProps) {
  switch (shape) {
    case SHAPE.rectangle:
      return css`
        border-radius: ${({ theme }) => theme.borders.radius4};
      `
    case SHAPE.round:
      return css`
        border-radius: ${({ theme }) => theme.borders.radius32};
      `
    case SHAPE.square:
      return css`
        border-radius: ${({ theme }) => theme.borders.radius4};
      `
    case SHAPE.circle:
      return css`
        border-radius: ${({ theme }) => theme.borders.radiusCircle};
      `
  }
}

function getPaddingStyles({ size, shape }: ButtonProps) {
  const iconShape = shape === SHAPE.circle || shape === SHAPE.square
  switch (size) {
    case SIZE.small:
      return css`
        padding-top: ${({ theme }) => theme.sizing.scale8};
        padding-bottom: ${({ theme }) => theme.sizing.scale8};
        padding-right: ${iconShape
          ? ({ theme }) => theme.sizing.scale8
          : ({ theme }) => theme.sizing.scale12};
        padding-left: ${iconShape
          ? ({ theme }) => theme.sizing.scale8
          : ({ theme }) => theme.sizing.scale12};
      `
    case SIZE.medium:
      return css`
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: ${iconShape
          ? ({ theme }) => theme.sizing.scale12
          : ({ theme }) => theme.sizing.scale16};
        padding-left: ${iconShape
          ? ({ theme }) => theme.sizing.scale12
          : ({ theme }) => theme.sizing.scale16};
      `
    case SIZE.large:
      return css`
        padding-top: ${({ theme }) => theme.sizing.scale12};
        padding-bottom: ${({ theme }) => theme.sizing.scale12};
        padding-right: ${iconShape
          ? ({ theme }) => theme.sizing.scale16
          : ({ theme }) => theme.sizing.scale20};
        padding-left: ${iconShape
          ? ({ theme }) => theme.sizing.scale16
          : ({ theme }) => theme.sizing.scale20};
      `
    default:
      return ''
  }
}

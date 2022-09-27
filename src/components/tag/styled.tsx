import styled, { css } from 'styled-components'
import { TagProps } from './tag'
import { COLOR, VARIANT } from './constants'

export const StyledTag = styled.span<TagProps>`
  display: inline-flex;
  align-items: center;
  cursor: default;
  font-family: ${({ theme }) => theme.typography.defaultFontFamily};
  font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};
  gap: ${({ theme }) => theme.sizing.scale8};
  padding-top: ${({ theme }) => theme.sizing.scale4};
  padding-bottom: ${({ theme }) => theme.sizing.scale4};
  padding-left: ${({ theme }) => theme.sizing.scale8};
  padding-right: ${({ theme }) => theme.sizing.scale8};
  border-radius: ${({ theme }) => theme.borders.radius16};
  ${(props) => (props.variant === VARIANT.solid ? getSolidStyles : getOutlinedStyles)}
`

export const Control = styled.span<TagProps>`
  display: flex;
  cursor: pointer;
`

function getSolidStyles({ color }: TagProps) {
  switch (color) {
    case COLOR.default:
      return css`
        color: ${({ theme }) => theme.colors.tagSolidDefaultContent};
        background-color: ${({ theme }) => theme.colors.tagSolidDefaultFill};
      `
    case COLOR.positive:
      return css`
        color: ${({ theme }) => theme.colors.tagSolidPositiveContent};
        background-color: ${({ theme }) => theme.colors.tagSolidPositiveFill};
      `
    default:
      return ``
  }
}

function getOutlinedStyles({ color }: TagProps) {
  switch (color) {
    case COLOR.default:
      return css`
        color: ${({ theme }) => theme.colors.tagOutlinedDefaultContent};
        outline-width: ${({ theme }) => theme.colors.tagOutlinedDefaultBorder.width};
        outline-style: ${({ theme }) => theme.colors.tagOutlinedDefaultBorder.style};
        outline-color: ${({ theme }) => theme.colors.tagOutlinedDefaultBorder.color};
      `
    case COLOR.positive:
      return css`
        color: ${({ theme }) => theme.colors.tagOutlinedPositiveContent};
        outline-width: ${({ theme }) => theme.colors.tagOutlinedPositiveBorder.width};
        outline-style: ${({ theme }) => theme.colors.tagOutlinedPositiveBorder.style};
        outline-color: ${({ theme }) => theme.colors.tagOutlinedPositiveBorder.color};
      `
    default:
      return ``
  }
}

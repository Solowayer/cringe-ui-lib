import styled, { css } from 'styled-components'
import { TagProps } from './tag'
import { COLOR, VARIANT } from './constants'

export const StyledTag = styled.span<TagProps>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};
  gap: ${({ theme }) => theme.sizing.scale8};
  padding-top: ${({ theme }) => theme.sizing.scale4};
  padding-bottom: ${({ theme }) => theme.sizing.scale4};
  padding-left: ${({ theme }) => theme.sizing.scale8};
  padding-right: ${({ theme }) => theme.sizing.scale8};
  border-radius: ${({ theme }) => theme.borders.radius16};
  border-style: ${({ theme }) => theme.borders.solid};
  border-width: ${({ theme }) => theme.borders.width2};
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
        border-color: ${({ theme }) => theme.colors.tagOutlinedDefaultBorder};
      `
    case COLOR.positive:
      return css`
        color: ${({ theme }) => theme.colors.tagOutlinedPositiveContent};
        border-color: ${({ theme }) => theme.colors.tagOutlinedPositiveBorder};
      `
    default:
      return ``
  }
}

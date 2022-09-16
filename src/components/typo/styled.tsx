import styled, { css } from 'styled-components'
import { Theme } from '../../config/themes'
import { TypoProps } from './typo'

interface StyledTypoProps extends TypoProps {
  theme: Theme
}

export const StyledTypo = styled.div<StyledTypoProps>`
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  color: ${(props) => props.color || props.theme.colors.black};
  margin: 0;
  ${fontStyles}
`

function fontStyles({ theme, type }: StyledTypoProps) {
  switch (type) {
    case 'labelSmall':
      return css`
        font-size: ${theme.typography.labelSmall.fontSize};
        font-weight: ${theme.typography.labelSmall.fontWeight};
        line-height: ${theme.typography.labelSmall.lineHeight};
      `
    case 'labelMedium':
      return css`
        font-size: ${theme.typography.labelMedium.fontSize};
        font-weight: ${theme.typography.labelMedium.fontWeight};
        line-height: ${theme.typography.labelMedium.lineHeight};
      `
    case 'labelLarge':
      return css`
        font-size: ${theme.typography.labelLarge.fontSize};
        font-weight: ${theme.typography.labelLarge.fontWeight};
        line-height: ${theme.typography.labelLarge.lineHeight};
      `
    case 'paragraphSmall':
      return css`
        font-size: ${theme.typography.paragraphSmall.fontSize};
        font-weight: ${theme.typography.paragraphSmall.fontWeight};
        line-height: ${theme.typography.paragraphSmall.lineHeight};
      `
    case 'paragraphMedium':
      return css`
        font-size: ${theme.typography.paragraphMedium.fontSize};
        font-weight: ${theme.typography.paragraphMedium.fontWeight};
        line-height: ${theme.typography.paragraphMedium.lineHeight};
      `
    case 'paragraphLarge':
      return css`
        font-size: ${theme.typography.paragraphLarge.fontSize};
        font-weight: ${theme.typography.paragraphLarge.fontWeight};
        line-height: ${theme.typography.paragraphLarge.lineHeight};
      `
    case 'headingXSmall':
      return css`
        font-size: ${theme.typography.headingXSmall.fontSize};
        font-weight: ${theme.typography.headingXSmall.fontWeight};
        line-height: ${theme.typography.headingXSmall.lineHeight};
      `
    case 'headingSmall':
      return css`
        font-size: ${theme.typography.headingSmall.fontSize};
        font-weight: ${theme.typography.headingSmall.fontWeight};
        line-height: ${theme.typography.headingSmall.lineHeight};
      `
    case 'headingMedium':
      return css`
        font-size: ${theme.typography.headingMedium.fontSize};
        font-weight: ${theme.typography.headingMedium.fontWeight};
        line-height: ${theme.typography.headingMedium.lineHeight};
      `
    case 'headingLarge':
      return css`
        font-size: ${theme.typography.headingLarge.fontSize};
        font-weight: ${theme.typography.headingLarge.fontWeight};
        line-height: ${theme.typography.headingLarge.lineHeight};
      `
    case 'headingXLarge':
      return css`
        font-size: ${theme.typography.headingXLarge.fontSize};
        font-weight: ${theme.typography.headingXLarge.fontWeight};
        line-height: ${theme.typography.headingXLarge.lineHeight};
      `
    default:
      return ''
  }
}

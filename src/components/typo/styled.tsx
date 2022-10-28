import styled, { css } from 'styled-components'
import { TypoProps } from './typo'

export const StyledTypo = styled.p<TypoProps>`
  display: ${(props) => (props.line ? '-webkit-box' : 'inline-block')};
  -webkit-line-clamp: ${(props) => (props.line ? props.line : '')};
  -webkit-box-orient: ${(props) => (props.line ? 'vertical' : '')};
  overflow: ${(props) => (props.line ? 'hidden' : '')};
  width: ${(props) => props.width};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin: ${(props) => props.margin};
  ${fontStyles}
  ${colorStyles}
  color: ${(props) => props.color};
`

function fontStyles({ variant }: TypoProps) {
  switch (variant) {
    case 'labelSmall':
      return css`
        font-size: ${({ theme }) => theme.typography.labelSmall.fontSize};
        font-weight: ${({ theme }) => theme.typography.labelSmall.fontWeight};
        line-height: ${({ theme }) => theme.typography.labelSmall.lineHeight};
      `
    case 'labelMedium':
      return css`
        font-size: ${({ theme }) => theme.typography.labelMedium.fontSize};
        font-weight: ${({ theme }) => theme.typography.labelMedium.fontWeight};
        line-height: ${({ theme }) => theme.typography.labelMedium.lineHeight};
      `
    case 'labelLarge':
      return css`
        font-size: ${({ theme }) => theme.typography.labelLarge.fontSize};
        font-weight: ${({ theme }) => theme.typography.labelLarge.fontWeight};
        line-height: ${({ theme }) => theme.typography.labelLarge.lineHeight};
      `
    case 'paragraphSmall':
      return css`
        font-size: ${({ theme }) => theme.typography.paragraphSmall.fontSize};
        font-weight: ${({ theme }) => theme.typography.paragraphSmall.fontWeight};
        line-height: ${({ theme }) => theme.typography.paragraphSmall.lineHeight};
      `
    case 'paragraphMedium':
      return css`
        font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
        font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
        line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};
      `
    case 'paragraphLarge':
      return css`
        font-size: ${({ theme }) => theme.typography.paragraphLarge.fontSize};
        font-weight: ${({ theme }) => theme.typography.paragraphLarge.fontWeight};
        line-height: ${({ theme }) => theme.typography.paragraphLarge.lineHeight};
      `
    case 'headingXSmall':
      return css`
        font-size: ${({ theme }) => theme.typography.headingXSmall.fontSize};
        font-weight: ${({ theme }) => theme.typography.headingXSmall.fontWeight};
        line-height: ${({ theme }) => theme.typography.headingXSmall.lineHeight};
      `
    case 'headingSmall':
      return css`
        font-size: ${({ theme }) => theme.typography.headingSmall.fontSize};
        font-weight: ${({ theme }) => theme.typography.headingSmall.fontWeight};
        line-height: ${({ theme }) => theme.typography.headingSmall.lineHeight};
      `
    case 'headingMedium':
      return css`
        font-size: ${({ theme }) => theme.typography.headingMedium.fontSize};
        font-weight: ${({ theme }) => theme.typography.headingMedium.fontWeight};
        line-height: ${({ theme }) => theme.typography.headingMedium.lineHeight};
      `
    case 'headingLarge':
      return css`
        font-size: ${({ theme }) => theme.typography.headingLarge.fontSize};
        font-weight: ${({ theme }) => theme.typography.headingLarge.fontWeight};
        line-height: ${({ theme }) => theme.typography.headingLarge.lineHeight};
      `
    case 'headingXLarge':
      return css`
        font-size: ${({ theme }) => theme.typography.headingXLarge.fontSize};
        font-weight: ${({ theme }) => theme.typography.headingXLarge.fontWeight};
        line-height: ${({ theme }) => theme.typography.headingXLarge.lineHeight};
      `
    default:
      return ''
  }
}

function colorStyles({ color }: TypoProps) {
  switch (color) {
    case 'contentPrimary':
      return css`
        color: ${({ theme }) => theme.colors.contentPrimary};
      `
    case 'contentSecondary':
      return css`
        color: ${({ theme }) => theme.colors.contentSecondary};
      `
    case 'contentTertiary':
      return css`
        color: ${({ theme }) => theme.colors.contentTertiary};
      `
    case 'contentOnColor':
      return css`
        color: ${({ theme }) => theme.colors.contentOnColor};
      `
    case 'contentAccent':
      return css`
        color: ${({ theme }) => theme.colors.contentAccent};
      `
    case 'contentSuccess':
      return css`
        color: ${({ theme }) => theme.colors.contentSuccess};
      `
    case 'contentWarning':
      return css`
        color: ${({ theme }) => theme.colors.contentWarning};
      `
    case 'contentDanger':
      return css`
        color: ${({ theme }) => theme.colors.contentDanger};
      `
    case 'contentDisabled':
      return css`
        color: ${({ theme }) => theme.colors.contentDisabled};
      `
    default:
      return css`
        color: ${({ theme }) => theme.colors.contentPrimary};
      `
  }
}

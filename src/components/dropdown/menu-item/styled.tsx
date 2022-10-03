import styled, { css } from 'styled-components'
import { MenuItemProps } from './menu-item'

export const StyledMenuItem = styled.li<MenuItemProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizing.scale8};
  width: 100%;
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  box-sizing: border-box;
  list-style: none;
  padding-top: ${({ theme }) => theme.sizing.scale12};
  padding-bottom: ${({ theme }) => theme.sizing.scale12};
  padding-left: ${({ theme }) => theme.sizing.scale16};
  padding-right: ${({ theme }) => theme.sizing.scale16};
  font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.menuItemContentDisabled : theme.colors.menuItemContent};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? 'transparent' : theme.colors.menuItemHover};
  }
  ${dangerStyles}
`

export const StyledContainer = styled.div<MenuItemProps>`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.sizing.scale8};
`

function dangerStyles({ danger }: MenuItemProps) {
  if (danger) {
    return css`
      color: ${({ theme }) => theme.colors.menuItemContentDanger};
      &:hover {
        background-color: ${({ theme }) => theme.colors.menuItemHoverDanger};
      }
    `
  }
}

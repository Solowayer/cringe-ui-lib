import styled from 'styled-components'
import { MenuItemProfileProps } from './menu-item-profile'

export const StyledMenuItemProfile = styled.li<MenuItemProfileProps>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  list-style: none;
  padding-top: ${({ theme }) => theme.sizing.scale12};
  padding-bottom: ${({ theme }) => theme.sizing.scale12};
  padding-left: ${({ theme }) => theme.sizing.scale16};
  padding-right: ${({ theme }) => theme.sizing.scale16};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  img {
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  }
  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? 'transparent' : theme.colors.menuItemHover};
  }
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.menuItemContentDisabled : theme.colors.menuItemContent};
`

export const StyledProfileImg = styled.img<MenuItemProfileProps>`
  width: ${({ theme }) => theme.sizing.scale48};
  height: ${({ theme }) => theme.sizing.scale48};
  border-radius: 50%;
  object-fit: cover;
`

export const StyledProfileContainer = styled.div<MenuItemProfileProps>`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.sizing.scale8};
`

export const StyledProfileTitle = styled.p<MenuItemProfileProps>`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.sizing.scale4};
  margin-left: 0;
  margin-right: 0;
  font-size: ${({ theme }) => theme.typography.labelMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.labelMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.labelMedium.lineHeight};
`

export const StyledProfileSubTitle = styled.p<MenuItemProfileProps>`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.paragraphSmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphSmall.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphSmall.lineHeight};
`

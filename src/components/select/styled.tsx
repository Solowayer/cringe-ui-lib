import styled from 'styled-components'
import { SelectProps } from './select'

export const StyledSelectWrapper = styled.div<SelectProps>`
  display: flex;
  width: ${({ width }) => width};
  flex-direction: column;
  gap: ${({ theme }) => theme.sizing.scale4};
`

export const StyledHeader = styled.div`
  display: flex;
  width: 100%;
`

export const StyledDropdown = styled.div`
  display: flex;
  width: 100%;
`

export const StyledList = styled.ul<SelectProps>`
  display: ${(props) => (props.isDropdownOpen ? 'flex' : 'none')};
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: ${({ maxDropdownHeight }) => maxDropdownHeight};
  width: ${({ width }) => width};
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  background-color: ${({ theme }) => theme.colors.dropdownFill};
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: ${({ theme }) => theme.sizing.scale8};
  padding-bottom: ${({ theme }) => theme.sizing.scale8};
  box-shadow: ${({ theme }) => theme.effects.shadow2};
  border-radius: ${({ theme }) => theme.sizing.scale4};
`

export const StyledOption = styled.li<SelectProps>`
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
`

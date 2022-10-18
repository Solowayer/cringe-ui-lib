import styled from 'styled-components'
import { SelectProps, Value } from './select'

interface StyledSelectProps extends Omit<SelectProps, 'options' | 'value' | 'onChange'> {}

export const StyledSelectWrapper = styled.div<StyledSelectProps>`
  position: relative;
  display: flex;
  width: ${({ width }) => width};
  flex-direction: column;
  gap: ${({ theme }) => theme.sizing.scale4};
`

export const StyledDropdown = styled.ul<StyledSelectProps>`
  position: absolute;
  top: 44px;
  width: 100%;
  display: ${(props) => (props.isDropdownOpen ? 'flex' : 'none')};
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: ${({ maxDropdownHeight }) => maxDropdownHeight};
  width: ${({ width }) => width};
  background-color: ${({ theme }) => theme.colors.dropdownFill};
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: ${({ theme }) => theme.sizing.scale8};
  padding-bottom: ${({ theme }) => theme.sizing.scale8};
  box-shadow: ${({ theme }) => theme.effects.shadow2};
  border-radius: ${({ theme }) => theme.sizing.scale4};
`

export const StyledOption = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizing.scale8};
  width: 100%;
  box-sizing: border-box;
  list-style: none;
  padding-top: ${({ theme }) => theme.sizing.scale12};
  padding-bottom: ${({ theme }) => theme.sizing.scale12};
  padding-left: ${({ theme }) => theme.sizing.scale16};
  padding-right: ${({ theme }) => theme.sizing.scale16};
  font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};
  color: ${({ theme }) => theme.colors.menuItemContent};
  cursor: 'pointer';
  &:hover {
    background-color: ${({ theme }) => theme.colors.menuItemHover};
  }
`

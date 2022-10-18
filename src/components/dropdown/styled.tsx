import styled from 'styled-components'
import { DropdownProps } from './dropdown'

export const StyledList = styled.ul<DropdownProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: ${({ maxHeight }) => maxHeight};
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

export const StyledDivider = styled.li`
  display: flex;
  max-width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.borders.default.color};
  margin-top: ${({ theme }) => theme.sizing.scale4};
  margin-bottom: ${({ theme }) => theme.sizing.scale4};
  margin-left: ${({ theme }) => theme.sizing.scale16};
  margin-right: ${({ theme }) => theme.sizing.scale16};
`

export const NoResults = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.contentTertiary};
  padding-top: ${({ theme }) => theme.sizing.scale24};
  padding-bottom: ${({ theme }) => theme.sizing.scale24};
  cursor: not-allowed;
`

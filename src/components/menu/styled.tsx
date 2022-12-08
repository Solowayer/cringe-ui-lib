import styled from 'styled-components'
import { MenuProps } from './menu'

export const StyledMenu = styled.ul<MenuProps>`
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
  box-shadow: ${({ theme }) => theme.lighting.shadow2};
  border-radius: ${({ theme }) => theme.sizing.scale4};
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

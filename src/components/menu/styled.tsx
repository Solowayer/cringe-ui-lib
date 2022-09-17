import styled from 'styled-components'
import { MenuProps } from './menu'

export const StyledList = styled.ul<MenuProps>`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: ${({ maxHeight }) => maxHeight};
  width: ${({ width }) => width};
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  background-color: white;
  box-sizing: border-box;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: ${({ theme }) => theme.sizing.scale8};
  padding-bottom: ${({ theme }) => theme.sizing.scale8};
  box-shadow: ${({ theme }) => theme.effects.shadow2};
  border-radius: ${({ theme }) => theme.sizing.scale4};
`

export const StyledItem = styled.li`
  display: flex;
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  padding-left: ${(props) => props.theme.sizing.scale16};
  padding-right: ${({ theme }) => theme.sizing.scale16};
  padding-top: ${({ theme }) => theme.sizing.scale12};
  padding-bottom: ${({ theme }) => theme.sizing.scale12};
  font-size: 14px;
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`

export const NoResults = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.tertiary};
  padding-top: ${({ theme }) => theme.sizing.scale24};
  padding-bottom: ${({ theme }) => theme.sizing.scale24};
  cursor: not-allowed;
`

export const StyledIcon = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-right: ${({ theme }) => theme.sizing.scale8};
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

export const StyledProfileImg = styled.img`
  width: ${({ theme }) => theme.sizing.scale64};
  height: ${({ theme }) => theme.sizing.scale64};
  border-radius: 50%;
  object-fit: cover;
`

export const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.sizing.scale8};
`

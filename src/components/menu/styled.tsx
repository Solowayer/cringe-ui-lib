import styled from 'styled-components'
import { ListProps } from './menu'

export const StyledList = styled.ul<ListProps>`
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
  padding-top: 8px;
  padding-bottom: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  padding-left: ${(props) => props.theme.sizing.scale16};
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`

export const StyledIcon = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-right: 8px;
`

export const StyledDivider = styled.li`
  display: flex;
  height: 1px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 16px;
  margin-right: 16px;
  background-color: lightgray;
  max-width: 100%;
`

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`

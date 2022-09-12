import styled from 'styled-components'
import { ListProps } from './menu'

export const StyledList = styled.ul<ListProps>`
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  background-color: white;
  box-sizing: border-box;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
  width: 450px;
  border-radius: 4px;
`

export const StyledOption = styled.li`
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

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`

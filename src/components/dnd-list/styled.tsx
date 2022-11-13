import styled from 'styled-components'

export const StyledDnDList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
  gap: 0px;
`

export const StyledDnDItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background-color: white;
  cursor: grab;
  &:hover {
    outline: 2px solid black;
  }
  &:active {
    cursor: grabbing;
  }
`

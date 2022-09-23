import styled from 'styled-components'

export const StyledMenuItem = styled.li`
  width: 100%;
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  list-style: none;
  padding-top: ${({ theme }) => theme.sizing.scale12};
  padding-bottom: ${({ theme }) => theme.sizing.scale12};
  padding-left: ${({ theme }) => theme.sizing.scale16};
  padding-right: ${({ theme }) => theme.sizing.scale16};
  /* font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight}; */
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`

export const StyledIcon = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-right: ${({ theme }) => theme.sizing.scale8};
`

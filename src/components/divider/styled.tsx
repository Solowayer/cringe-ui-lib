import styled from 'styled-components'

export const StyledDivider = styled.div`
  display: flex;
  max-width: 100%;
  height: ${({ theme }) => theme.borders.width1};
  background-color: ${({ theme }) => theme.borders.default};
  margin-top: ${({ theme }) => theme.sizing.scale4};
  margin-bottom: ${({ theme }) => theme.sizing.scale4};
  margin-left: ${({ theme }) => theme.sizing.scale16};
  margin-right: ${({ theme }) => theme.sizing.scale16};
`

import styled from 'styled-components'
import { GridProps } from './grid'

type StyledGridProps = Omit<GridProps, 'children'>

export const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columnCount }) => columnCount[3]}, 1fr);
  column-gap: ${({ rowGap }) => rowGap};
  row-gap: ${({ columnGap }) => columnGap};
  @media (max-width: ${(props) => props.theme.mediaQuery.large}) {
    display: grid;
    grid-template-columns: repeat(${({ columnCount }) => columnCount[2]}, 1fr);
  }
  @media (max-width: ${(props) => props.theme.mediaQuery.medium}) {
    display: grid;
    grid-template-columns: repeat(${({ columnCount }) => columnCount[1]}, 1fr);
  }
  @media (max-width: ${(props) => props.theme.mediaQuery.small}) {
    display: grid;
    grid-template-columns: repeat(${({ columnCount }) => columnCount[0]}, 1fr);
  }
`

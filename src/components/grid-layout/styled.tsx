import styled from 'styled-components'

type Count<T> = [T, T, T, T]

type CellProps = {
  skip?: number
  span?: number | Count<number>
}

export const StyledGridLayout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 8px;
  column-gap: 40px;
  margin-right: 40px;
  margin-left: 40px;
  @media (max-width: 1136px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const StyledCell = styled.div<CellProps>`
  grid-column-start: ${(props) => props.skip};
  grid-column-end: span ${(props) => props.span};
  @media (max-width: 1136px) {
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 420px) {
  }
`

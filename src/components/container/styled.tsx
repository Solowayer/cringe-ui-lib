import styled from 'styled-components'
import { ContainerStyles } from './container'

export const StyledLayout = styled.div<ContainerStyles>`
  margin: 0 auto;
  max-width: ${({ maxWidth }) => maxWidth};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
`

import styled from 'styled-components'
import { LinkProps } from './link'

export const StyledLink = styled.a<LinkProps>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contentAccent};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

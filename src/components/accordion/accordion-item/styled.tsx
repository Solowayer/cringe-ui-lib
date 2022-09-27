import styled from 'styled-components'
import { AccordionItemProps } from './accordion-item'

export const StyledAccordionItem = styled.li<AccordionItemProps>`
  display: flex;
  list-style: none;
`
export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: ${({ theme }) => theme.sizing.scale16};
`

export const Heading = styled.p``

export const Content = styled.div``

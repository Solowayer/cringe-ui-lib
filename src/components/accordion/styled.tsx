import styled from 'styled-components'
import { AccordionProps } from './accordion'

export const StyledAccordion = styled.ul<AccordionProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: ${({ width }) => width};
  padding: 0;
  margin: 0;
`

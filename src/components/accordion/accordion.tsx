import React from 'react'
import { StyledAccordion } from './styled'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { AccordionItem } from './accordion-item'
import { AccordionItemProps } from './accordion-item/accordion-item'

export type AccordionProps = {
  items?: AccordionItemProps[]
  width?: string
}

export const Accordion = (props: AccordionProps) => {
  const { items, width } = props
  return (
    <LibraryThemeProvider>
      <StyledAccordion width={width}>
        {items?.map((item) => (
          <AccordionItem title={item.title} subTitle={item.subTitle} />
        ))}
      </StyledAccordion>
    </LibraryThemeProvider>
  )
}

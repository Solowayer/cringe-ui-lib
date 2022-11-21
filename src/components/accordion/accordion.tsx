import React, { useState } from 'react'
import { StyledAccordion } from './styled'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { Collapse } from '../collapse'
import { CollapseProps } from '../collapse/collapse'

export type AccordionProps = {
  items?: CollapseProps[]
  width?: string
}

export const Accordion = ({ items, width }: AccordionProps) => {
  const [currentIdx, setCurrentIdx] = useState(-1)
  const handleClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1))
  }
  console.log(currentIdx)

  return (
    <LibraryThemeProvider>
      <StyledAccordion width={width}>
        {items?.map((item, idx) => (
          <Collapse
            title={item.title}
            subTitle={item.subTitle}
            expanded={idx === currentIdx}
            onClick={() => handleClick(idx)}
            content={item.content}
          />
        ))}
      </StyledAccordion>
    </LibraryThemeProvider>
  )
}

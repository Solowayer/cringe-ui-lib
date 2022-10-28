import React, { useState } from 'react'
import { StyledAccordion } from './styled'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { Panel } from './panel'
import { PanelProps } from './panel/panel'

export type AccordionProps = {
  items?: PanelProps[]
  width?: string
}

export const Accordion = (props: AccordionProps) => {
  const [currentIdx, setCurrentIdx] = useState(-1)
  const { items, width } = props
  const handleClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1))
  }
  console.log(currentIdx)

  return (
    <LibraryThemeProvider>
      <StyledAccordion width={width}>
        {items?.map((item, idx) => (
          <Panel
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

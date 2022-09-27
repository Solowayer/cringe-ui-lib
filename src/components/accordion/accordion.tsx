import React from 'react'
import { StyledAccordion } from './styled'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'

export const Accordion = () => {
  return (
    <LibraryThemeProvider>
      <StyledAccordion>Accordion</StyledAccordion>
    </LibraryThemeProvider>
  )
}

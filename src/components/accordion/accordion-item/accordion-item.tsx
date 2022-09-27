import React, { ReactNode } from 'react'
import { LibraryThemeProvider } from '../../../config/themes/theme-provider'
import { StyledAccordionItem, ItemHeader, Heading, Content } from './styled'
import { ExpandLess, ExpandMore } from '../../icon'

export type AccordionItemProps = {
  title?: string
  expanded?: boolean
  children?: ReactNode
  onClick?: () => void
}

export const AccordionItem = (props: AccordionItemProps) => {
  const { title, expanded = false, children, onClick } = props
  const icon = expanded ? <ExpandLess size="24" /> : <ExpandMore size="24" />
  return (
    <LibraryThemeProvider>
      <StyledAccordionItem expanded={expanded} onClick={onClick}>
        <ItemHeader>
          <Heading>{title}</Heading>
          {icon}
        </ItemHeader>
        <Content>{children}</Content>
      </StyledAccordionItem>
    </LibraryThemeProvider>
  )
}

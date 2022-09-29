import React, { ReactNode, useState } from 'react'
import { LibraryThemeProvider } from '../../../config/themes/theme-provider'
import { StyledAccordionItem, ItemHeader, Heading, Content, Title, SubTitle } from './styled'
import { ExpandLess, ExpandMore } from '../../icon'

export type AccordionItemProps = {
  title?: string
  subTitle?: string
  content?: ReactNode
  expanded?: boolean
  onClick?: () => void
}

export const AccordionItem = (props: AccordionItemProps) => {
  const { title, subTitle, content, expanded = false } = props
  const icon = expanded ? <ExpandLess size="24" /> : <ExpandMore size="24" />
  return (
    <LibraryThemeProvider>
      <StyledAccordionItem expanded={expanded}>
        <ItemHeader>
          <Heading>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </Heading>
          {icon}
        </ItemHeader>
        {expanded && <Content>{content}</Content>}
      </StyledAccordionItem>
    </LibraryThemeProvider>
  )
}

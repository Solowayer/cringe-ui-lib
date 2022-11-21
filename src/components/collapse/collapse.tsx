import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import {
  StyledCollapse,
  Header,
  Heading,
  Content,
  ContentContainer,
  Title,
  SubTitle,
} from './styled'
import { ExpandMore } from '../icon'

export type CollapseProps = {
  title?: string
  subTitle?: string
  content?: ReactNode
  expanded?: boolean
  onClick?: () => void
}

export const Collapse = ({
  title,
  subTitle,
  content,
  expanded = false,
  onClick,
}: CollapseProps) => {
  const [height, setHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (expanded) {
      const contentEl = contentRef.current as HTMLDivElement
      setHeight(contentEl.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [expanded])

  return (
    <LibraryThemeProvider>
      <StyledCollapse>
        <Header onClick={onClick} expanded={expanded}>
          <Heading>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </Heading>
          <ExpandMore size="24" />
        </Header>
        <ContentContainer style={{ height }}>
          <Content expanded={expanded} ref={contentRef}>
            {content}
          </Content>
        </ContentContainer>
      </StyledCollapse>
    </LibraryThemeProvider>
  )
}

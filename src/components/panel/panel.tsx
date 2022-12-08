import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { StyledPanel, Header, Heading, Content, Container, Title, SubTitle } from './styled'
import { ExpandMore } from '../icon'

export type PanelProps = {
  title?: string
  subTitle?: string
  content?: ReactNode
  expanded?: boolean
  onClick?: () => void
}

export const Panel = ({ title, subTitle, content, expanded = false, onClick }: PanelProps) => {
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
      <StyledPanel>
        <Header onClick={onClick} expanded={expanded}>
          <Heading>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </Heading>
          <ExpandMore size="24" />
        </Header>
        <Container style={{ height }}>
          <Content expanded={expanded} ref={contentRef}>
            {content}
          </Content>
        </Container>
      </StyledPanel>
    </LibraryThemeProvider>
  )
}

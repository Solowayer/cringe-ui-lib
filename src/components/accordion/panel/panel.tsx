import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { LibraryThemeProvider } from '../../../config/themes/theme-provider'
import {
  StyledPanel,
  ItemHeader,
  Heading,
  Content,
  ContentContainer,
  Title,
  SubTitle,
} from './styled'
import { ExpandMore } from '../../icon'

export type PanelProps = {
  title?: string
  subTitle?: string
  content?: ReactNode
  expanded?: boolean
  onClick?: () => void
}

export const Panel = (props: PanelProps) => {
  const { title, subTitle, content, expanded = false, onClick } = props
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
        <ItemHeader onClick={onClick} expanded={expanded}>
          <Heading>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </Heading>
          <ExpandMore size="24" />
        </ItemHeader>
        <ContentContainer style={{ height }}>
          <Content expanded={expanded} ref={contentRef}>
            {content}
          </Content>
        </ContentContainer>
      </StyledPanel>
    </LibraryThemeProvider>
  )
}

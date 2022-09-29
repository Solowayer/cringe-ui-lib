import styled from 'styled-components'
import { AccordionItemProps } from './accordion-item'

export const StyledAccordionItem = styled.li<AccordionItemProps>`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  list-style: none;
  min-width: 100%;
  border-bottom: 1px solid lightgray;
`
export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: ${({ theme }) => theme.sizing.scale16};
`

export const Heading = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizing.scale8};
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.defaultFontFamily};
`

export const Title = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.headingXSmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.headingXSmall.fontWeight};
  line-height: ${({ theme }) => theme.typography.headingXSmall.lineHeight};
`
export const SubTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};
`

export const Content = styled.div<AccordionItemProps>`
  padding: ${({ theme }) => theme.sizing.scale16};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.defaultFontFamily};
  font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};
`

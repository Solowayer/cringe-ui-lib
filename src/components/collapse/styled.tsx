import styled from 'styled-components'
import { CollapseProps } from './collapse'

export const StyledCollapse = styled.li<CollapseProps>`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  list-style: none;
  border-bottom: 1px solid lightgray;
`
export const Header = styled.div<CollapseProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: ${({ theme }) => theme.sizing.scale16};
  svg {
    transition: transform 0.2s ease-in-out;
    transform: ${(props) => (props.expanded ? 'rotate(180deg)' : 'rotate(0)')};
  }
`

export const Heading = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizing.scale8};
  flex-direction: column;
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

export const ContentContainer = styled.div`
  overflow: hidden;
  transition: height 0.2s ease-in-out;
`

export const Content = styled.div<CollapseProps>`
  display: flex;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.expanded ? 1 : 0)};
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.sizing.scale16};
  font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};
`

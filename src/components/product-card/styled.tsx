import styled from 'styled-components'

export const StyledProductCard = styled.div`
  display: flex;
  position: relative;
  flex: 0 0 33.3%;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: ${(props) => props.theme.effects.shadow2};
  }
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`

export const StyledCardImage = styled.div<{ image: string }>`
  width: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 192px;
`

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.sizing.scale16};
  gap: ${({ theme }) => theme.sizing.scale8};
`

export const StyledDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};
  color: ${({ theme }) => theme.colors.gray500};
`

export const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizing.scale8};
  color: ${({ theme }) => theme.colors.contentSecondary};
  margin-left: ${({ theme }) => theme.sizing.scale16};
  margin-right: ${({ theme }) => theme.sizing.scale16};
  margin-bottom: ${({ theme }) => theme.sizing.scale16};
`

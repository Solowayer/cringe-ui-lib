import styled from 'styled-components'

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: ${(props) => props.theme.effects.shadow2};
  }
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`
export const StyledCardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 192px;
`

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
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
  gap: 8px;
`

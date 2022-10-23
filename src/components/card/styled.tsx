import styled from 'styled-components'

export const StyledProductCard = styled.div`
  display: flex;
  position: relative;
  width: 400px;

  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: ${(props) => props.theme.effects.shadow2};
  }
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`

export const StyledCardImage = styled.div<{ headerImage: string }>`
  width: 100%;
  background-image: url(${(props) => props.headerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 192px;
`

export const StyledCardThumbnail = styled.img`
  align-self: flex-end;
  min-width: 96px;
  max-height: 96px;
  object-fit: cover;
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin: ${({ theme }) => theme.sizing.scale16};
`

export const StyledCardAction = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizing.scale8};
  color: ${({ theme }) => theme.colors.contentSecondary};
  margin-left: ${({ theme }) => theme.sizing.scale16};
  margin-right: ${({ theme }) => theme.sizing.scale16};
  margin-bottom: ${({ theme }) => theme.sizing.scale16};
`

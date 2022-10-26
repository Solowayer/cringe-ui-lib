import styled from 'styled-components'

export const StyledCard = styled.div<{ width: string; height: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: ${(props) => props.theme.effects.shadow2};
    z-index: 10;
  }
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`

export const StyledCardActionArea = styled.div`
  cursor: pointer;
`

export const StyledCardHeaderImage = styled.div<{ headerImage: string }>`
  width: 100%;
  background-image: url(${(props) => props.headerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 192px;
`

export const StyledCardThumbnail = styled.img`
  width: 96px;
  height: 96px;
  object-fit: cover;
  margin-top: ${({ theme }) => theme.sizing.scale16};
  margin-right: ${({ theme }) => theme.sizing.scale16};
`

export const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizing.scale8};
  margin: ${({ theme }) => theme.sizing.scale16};
`

export const StyledCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizing.scale8};
  color: ${({ theme }) => theme.colors.contentSecondary};
  margin-left: ${({ theme }) => theme.sizing.scale16};
  margin-right: ${({ theme }) => theme.sizing.scale16};
  margin-bottom: ${({ theme }) => theme.sizing.scale16};
`

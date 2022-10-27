import styled from 'styled-components'
import { CardImageProps } from './card-image'

export const StyledCard = styled.div<{ width: string; height: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 8px;
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

export const StyledCardImage = styled.div<CardImageProps>`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const StyledCardHeader = styled.div``

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
  padding: ${({ theme }) => theme.sizing.scale16};
`

export const StyledCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizing.scale8};
  color: ${({ theme }) => theme.colors.contentSecondary};
  padding-top: ${({ theme }) => theme.sizing.scale8};
  padding-bottom: ${({ theme }) => theme.sizing.scale16};
  padding-right: ${({ theme }) => theme.sizing.scale16};
  padding-left: ${({ theme }) => theme.sizing.scale16};
`

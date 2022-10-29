import styled from 'styled-components'
import { CardImageProps } from './card-image'

export const StyledCard = styled.div<{ width: string; height: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${(props) => props.width};
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: ${({ theme }) => theme.lighting.shadow2};
  }
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`

export const StyledCardActionArea = styled.div`
  display: flex;
  flex-direction: column;
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

export const StyledCardContent = styled.div`
  display: flex;
  width: 100%;
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

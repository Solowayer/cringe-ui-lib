import styled from 'styled-components'
import { CardImageStyles } from './card-image'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: ${(props) => props.theme.sizing.scale4};
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: ${({ theme }) => theme.lighting.shadow2};
  }
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  list-style: none;
`

export const StyledCardActionArea = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

export const StyledCardImage = styled.img<CardImageStyles>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
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

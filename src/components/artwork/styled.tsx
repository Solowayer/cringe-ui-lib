import styled, { css } from 'styled-components'
import { ArtworkProps } from './artwork'
import { SHAPE, SIZE } from './constants'

export const StyledArtwork = styled.img<ArtworkProps>`
  object-fit: cover;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  ${getSize}
  ${getShape}
`

function getSize({ size }: ArtworkProps) {
  if (size === SIZE.small) {
    return css`
      width: ${({ theme }) => theme.sizing.scale24};
      height: ${({ theme }) => theme.sizing.scale24};
    `
  }
  if (size === SIZE.medium) {
    return css`
      width: ${({ theme }) => theme.sizing.scale40};
      height: ${({ theme }) => theme.sizing.scale40};
    `
  }
  if (size === SIZE.large) {
    return css`
      width: ${({ theme }) => theme.sizing.scale64};
      height: ${({ theme }) => theme.sizing.scale64};
    `
  }
}

function getShape({ shape }: ArtworkProps) {
  if (shape === SHAPE.circle) {
    return css`
      border-radius: 50%;
    `
  }
  if (shape === SHAPE.rectangle) {
    return css`
      border-radius: 0;
    `
  }
}

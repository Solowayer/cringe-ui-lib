import styled, { css } from 'styled-components'
import { ArtworkProps } from './artwork'

export const StyledArtwork = styled.img<ArtworkProps>`
  border-radius: 50%;
  object-fit: cover;
  ${getSize}
`

function getSize({ size }: ArtworkProps) {
  if (size === 'medium') {
    return css`
      width: ${({ theme }) => theme.sizing.scale96};
      height: ${({ theme }) => theme.sizing.scale96};
    `
  }
}

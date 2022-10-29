import React from 'react'
import { StyledArtwork } from './styled'
import { LibraryThemeProvider } from '../themes/theme-provider'

export type ArtworkProps = {
  size?: 'medium'
  shape?: 'circle'
  src: string
}

export const Artwork = ({ src, size = 'medium' }: ArtworkProps) => {
  return (
    <LibraryThemeProvider>
      <StyledArtwork src={src} size={size} />
    </LibraryThemeProvider>
  )
}

import React from 'react'
import { StyledArtwork } from './styled'
import { LibraryThemeProvider } from '../themes/theme-provider'

export type ArtworkProps = {
  size?: 'medium'
}

export const Artwork = ({ size }: ArtworkProps) => {
  return (
    <LibraryThemeProvider>
      <StyledArtwork size={size} />
    </LibraryThemeProvider>
  )
}

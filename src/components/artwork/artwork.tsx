import React, { HTMLAttributes } from 'react'
import { StyledArtwork } from './styled'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { SIZE, SHAPE } from './constants'

export interface ArtworkProps extends HTMLAttributes<HTMLImageElement> {
  size?: string | keyof typeof SIZE
  shape?: keyof typeof SHAPE
}

export const Artwork = ({ size = SIZE.medium, shape = SHAPE.circle, ...rest }: ArtworkProps) => {
  return (
    <LibraryThemeProvider>
      <StyledArtwork size={size} shape={shape} {...rest} />
    </LibraryThemeProvider>
  )
}

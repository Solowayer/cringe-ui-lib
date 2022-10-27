import React from 'react'
import { StyledCardImage } from './styled'

export type CardImageProps = {
  width?: string
  minWidth?: string
  maxWidth?: string
  height?: string
  minHeight?: string
  maxHeight?: string
  image?: string
}

export const CardImage = ({
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  image,
}: CardImageProps) => {
  return (
    <StyledCardImage
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      image={image}
    />
  )
}

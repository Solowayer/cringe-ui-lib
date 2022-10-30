import React, { HTMLAttributes } from 'react'
import { StyledCardImage } from './styled'

export type CardImageStyles = {
  height?: string
  width?: string
}

export interface CardImageProps extends CardImageStyles, HTMLAttributes<HTMLImageElement> {
  image?: string
}

export const CardImage = ({ image, height, width, ...rest }: CardImageProps) => {
  return <StyledCardImage src={image} height={height} width={width} {...rest} />
}

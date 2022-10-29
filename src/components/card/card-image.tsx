import React from 'react'
import { StyledCardImage } from './styled'
import { Styles } from '../types/shared'

export type CardImageStyles = Pick<
  Styles,
  'width' | 'minWidth' | 'maxWidth' | 'height' | 'minHeight' | 'maxHeight'
>

export type CardImageProps = {
  image?: string
} & CardImageStyles

export const CardImage = ({ image, ...styles }: CardImageProps) => {
  return <StyledCardImage image={image} {...styles} />
}

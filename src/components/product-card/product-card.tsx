import React from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledProductCard } from './styled'

export type ProductCardProps = {
  insideCart?: boolean
}

export const ProductCard = ({ insideCart }: ProductCardProps) => {
  return (
    <LibraryThemeProvider>
      <StyledProductCard>CardProduct</StyledProductCard>
    </LibraryThemeProvider>
  )
}

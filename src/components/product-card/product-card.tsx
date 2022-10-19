import React from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { Typo } from '../typo'
import {
  StyledProductCard,
  StyledCardImage,
  StyledCardBody,
  StyledDescription,
  StyledCardFooter,
} from './styled'

export type ProductCardProps = {
  id?: string
  image?: string
  title: string
  description?: string
  price: number
  weight?: number
  calories?: number
  amount?: number
}

export const ProductCard = ({
  image,
  title,
  description,
  price,
  weight,
  calories,
  amount,
}: ProductCardProps) => {
  return (
    <LibraryThemeProvider>
      <StyledProductCard>
        {image && <StyledCardImage src={image} />}
        <StyledCardBody>
          <Typo type="labelLarge">{title}</Typo>
          {description && <StyledDescription>{description}</StyledDescription>}
          <StyledCardFooter>
            {<Typo type="labelLarge">{price} грн</Typo>}
            {weight ? (
              <React.Fragment>
                <span>•</span>
                <Typo color="secondary">{weight} гр</Typo>
              </React.Fragment>
            ) : null}
            {calories ? (
              <React.Fragment>
                <span>•</span>
                <Typo color="secondary">{calories} кал</Typo>
              </React.Fragment>
            ) : null}
          </StyledCardFooter>
        </StyledCardBody>
      </StyledProductCard>
    </LibraryThemeProvider>
  )
}

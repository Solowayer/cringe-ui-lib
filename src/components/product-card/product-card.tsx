import React, { MouseEventHandler } from 'react'
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
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const ProductCard = ({
  image,
  title,
  description,
  price,
  weight,
  calories,
}: ProductCardProps) => {
  const [startAmount, setAmount] = React.useState(0)

  return (
    <LibraryThemeProvider>
      <StyledProductCard onClick={() => setAmount(startAmount + 1)}>
        {image && <StyledCardImage image={image} />}
        <StyledCardBody>
          {startAmount !== 0 && (
            <Typo type="labelMedium" color="green">
              {startAmount}
            </Typo>
          )}
          <Typo type="labelLarge">{title}</Typo>
          {description && <StyledDescription>{description}</StyledDescription>}
        </StyledCardBody>
        <StyledCardFooter>
          {<Typo type="labelLarge">{price} грн</Typo>}
          {weight ? <Typo color="secondary">{weight} кг</Typo> : null}
          {calories ? <Typo color="secondary">{calories} кал</Typo> : null}
        </StyledCardFooter>
      </StyledProductCard>
    </LibraryThemeProvider>
  )
}

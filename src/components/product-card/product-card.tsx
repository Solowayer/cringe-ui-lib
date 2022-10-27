import React, { MouseEventHandler } from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { Typo } from '../typo'
import { Box } from '../box'
import {
  Card,
  CardImage,
  CardActionArea,
  CardHeader,
  CardContent,
  CardThumbnail,
  CardActions,
} from '../card'
import { Button } from '../button'

export type ProductCardProps = {
  id?: string
  image?: string
  thumbnail?: string
  title: string
  description?: string
  price: number
  weight?: number
  calories?: number
  amount?: number
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const ProductCard = ({
  thumbnail,
  image,
  title,
  description,
  price,
  weight,
  calories,
}: ProductCardProps) => {
  return (
    <LibraryThemeProvider>
      <Card>
        <CardImage height="300px" image={image} />
        <Box display="flex" alignItems="flex-start" gap="16px">
          <CardContent>
            <Typo variant="labelLarge" line={2}>
              {title}
            </Typo>
            {description && (
              <Typo variant="paragraphMedium" line={2}>
                {description}
              </Typo>
            )}
            <Box display="flex" alignItems="flex-end" gap="8px">
              {<Typo variant="labelLarge">{price} грн</Typo>}
              {weight ? <Typo color="secondary">{weight} кг</Typo> : null}
              {calories ? <Typo color="secondary">{calories} кал</Typo> : null}
            </Box>
          </CardContent>
          {thumbnail && <CardThumbnail src={thumbnail} />}
        </Box>
        <CardActions>
          <Button>Купити</Button>
        </CardActions>
      </Card>
    </LibraryThemeProvider>
  )
}

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

export const ProductCard = ({ thumbnail, image, title, description, price }: ProductCardProps) => {
  return (
    <LibraryThemeProvider>
      <Card>
        <CardActionArea onClick={() => alert('clicked')}>
          <Box display="flex" alignItems="flex-start">
            <CardContent>
              <Typo variant="labelLarge" line={2} marginBottom="8px">
                {title}
              </Typo>
              {description && (
                <Typo variant="paragraphMedium" line={2} marginBottom="8px">
                  {description}
                </Typo>
              )}
              <Box display="flex" alignItems="flex-end">
                <Typo variant="labelLarge">{price} грн</Typo>
              </Box>
            </CardContent>
            {thumbnail && <CardThumbnail src={thumbnail} />}
          </Box>
        </CardActionArea>
      </Card>
    </LibraryThemeProvider>
  )
}

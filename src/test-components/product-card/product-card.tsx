/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { MouseEventHandler } from 'react'
import { LibraryThemeProvider } from '../../components/themes/theme-provider'
import { Typo } from '../../components/typo'
import { Box } from '../../components/box'
import { Card, CardImage, CardActionArea, CardContent, CardActions } from '../../components/card'
import { Button } from '../../components/button'
import { Artwork } from '../../components'
import { sizing } from '../../components/themes/shared/sizing'
import { baseColors } from '../../components/tokens/colors'

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
      <Card width="calc(25% - 6px)">
        <CardActionArea onClick={() => alert('clicked')}>
          <CardImage image={image} minHeight="160px" width="100%" />
          <Box display="flex" alignItems="flex-start">
            <CardContent>
              <Typo variant="labelLarge" line={2} marginBottom={sizing.scale8}>
                {title}
              </Typo>
              {description && (
                <Typo
                  variant="paragraphMedium"
                  color="contentSecondary"
                  line={2}
                  marginBottom={sizing.scale8}
                >
                  {description}
                </Typo>
              )}
              <Typo variant="labelLarge">{price} грн</Typo>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    </LibraryThemeProvider>
  )
}

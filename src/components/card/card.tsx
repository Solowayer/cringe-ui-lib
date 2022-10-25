import React, { MouseEventHandler, ReactNode } from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { Typo } from '../typo'
import {
  StyledProductCard,
  StyledCardImage,
  StyledCardThumbnail,
  StyledBody,
  StyledContent,
} from './styled'

export type CardProps = {
  id?: string
  headerImage?: string
  height?: string
  width?: string
  thumbnail?: string
  title: string
  titleStyle?: string
  children: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const Card = ({ headerImage, thumbnail, title, children, onClick }: CardProps) => {
  return (
    <LibraryThemeProvider>
      <StyledProductCard onClick={onClick}>
        {headerImage && <StyledCardImage headerImage={headerImage} />}
        <StyledBody>
          <StyledContent>
            <Typo variant="labelLarge" line={2}>
              {title}
            </Typo>
            {children}
          </StyledContent>
          {thumbnail && <StyledCardThumbnail src={thumbnail} />}
        </StyledBody>
      </StyledProductCard>
    </LibraryThemeProvider>
  )
}

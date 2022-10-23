import React, { MouseEventHandler, ReactNode } from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { Typo } from '../typo'
import {
  StyledProductCard,
  StyledCardImage,
  StyledCardThumbnail,
  StyledCardBody,
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
        <StyledContent>
          <Typo type="labelLarge" line={2} marginLeft="16px" marginTop="16px">
            {title}
          </Typo>
          {children}
        </StyledContent>
        {thumbnail && <StyledCardThumbnail src={thumbnail} />}
      </StyledProductCard>
    </LibraryThemeProvider>
  )
}

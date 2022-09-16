import React from 'react'
import { StyledItem, StyledProfileImg, StyledDivider, StyledProfileContainer } from './styled'

export type ItemProfileProps = {
  imgUrl?: string
  title?: string
  subTitle?: string
  divider?: boolean
}

export const ItemProfile = (props: ItemProfileProps) => {
  const { imgUrl, title, subTitle, divider } = props
  return (
    <>
      {divider ? (
        <StyledDivider />
      ) : (
        <StyledItem>
          <StyledProfileImg src={imgUrl} />
          <StyledProfileContainer>
            <span>{title}</span>
            <span>{subTitle}</span>
          </StyledProfileContainer>
        </StyledItem>
      )}
    </>
  )
}

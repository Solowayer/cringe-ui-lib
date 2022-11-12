import React from 'react'
import { StyledListItemText } from './styled'
import { Typo } from '../typo'

export type ListItemTextProps = {
  title: string
  subTitle?: string
}

export const ListItemText = ({ title, subTitle }) => {
  return (
    <StyledListItemText>
      <Typo>{title}</Typo>
      <Typo variant="paragraphSmall" color="contentSecondary">
        {subTitle}
      </Typo>
    </StyledListItemText>
  )
}

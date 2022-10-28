import React from 'react'
import { HTMLAttributes } from 'react'
import { LibraryThemeProvider } from '../../themes/theme-provider'
import { StyledDivider } from '../styled'
import {
  StyledMenuItemProfile,
  StyledProfileImg,
  StyledProfileContainer,
  StyledProfileTitle,
  StyledProfileSubTitle,
} from './styled'

export interface MenuItemProfileProps extends Omit<HTMLAttributes<HTMLLIElement>, 'disabled'> {
  divider?: boolean
  imgUrl?: string
  title?: string
  subTitle?: string
  disabled?: boolean
}

export const MenuItemProfile = React.forwardRef<HTMLLIElement, MenuItemProfileProps>(
  (props, ref) => {
    const { divider, imgUrl, title, subTitle, disabled } = props

    return (
      <LibraryThemeProvider>
        {divider ? (
          <StyledDivider />
        ) : (
          <StyledMenuItemProfile ref={ref} disabled={disabled}>
            {imgUrl && <StyledProfileImg src={imgUrl} />}
            <StyledProfileContainer>
              <StyledProfileTitle>{title}</StyledProfileTitle>
              <StyledProfileSubTitle>{subTitle}</StyledProfileSubTitle>
            </StyledProfileContainer>
          </StyledMenuItemProfile>
        )}
      </LibraryThemeProvider>
    )
  }
)

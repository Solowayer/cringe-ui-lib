import { LibraryThemeProvider } from '../../../config/themes/theme-provider'
import { StyledDivider } from '../styled'
import {
  StyledMenuItemProfile,
  StyledProfileImg,
  StyledProfileContainer,
  StyledProfileTitle,
  StyledProfileSubTitle,
} from './styled'

export interface MenuItemProfileProps {
  divider?: boolean
  imgUrl?: string
  title?: string
  subTitle?: string
  disabled?: boolean
}

export const MenuItemProfile = (props: MenuItemProfileProps) => {
  const { divider, imgUrl, title, subTitle, disabled } = props

  return (
    <LibraryThemeProvider>
      {divider ? (
        <StyledDivider />
      ) : (
        <StyledMenuItemProfile disabled={disabled}>
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

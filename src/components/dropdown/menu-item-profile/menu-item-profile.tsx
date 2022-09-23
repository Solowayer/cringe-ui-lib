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
}

export const MenuItemProfile = (props: MenuItemProfileProps) => {
  const { imgUrl, title, subTitle, divider } = props

  return (
    <LibraryThemeProvider>
      {divider ? (
        <StyledDivider />
      ) : (
        <StyledMenuItemProfile>
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

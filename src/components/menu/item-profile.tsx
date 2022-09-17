import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledItem, StyledProfileImg, StyledDivider, StyledProfileContainer } from './styled'
import { Typo } from '../typo'

export type ItemProfileProps = {
  imgUrl?: string
  title?: string
  subTitle?: string
  divider?: boolean
  disabled?: boolean
}

export const ItemProfile = (props: ItemProfileProps) => {
  const { imgUrl, title, subTitle, divider } = props

  return (
    <LibraryThemeProvider>
      {divider ? (
        <StyledDivider />
      ) : (
        <StyledItem>
          {imgUrl && <StyledProfileImg src={imgUrl} />}
          <StyledProfileContainer>
            <Typo type="labelLarge" marginBottom="4px">
              {title}
            </Typo>
            <Typo type="paragraphMedium">{subTitle}</Typo>
          </StyledProfileContainer>
        </StyledItem>
      )}
    </LibraryThemeProvider>
  )
}

import { HTMLAttributes, ReactElement } from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledIcon, StyledOption, StyledList, ProfileImg } from './styled'

type ListItemProps = {
  icon?: ReactElement
  label?: string
  divider?: boolean
}

type ListItemProfileProps = {
  imgUrl?: string
  title?: string
  subTitle?: string
}

export interface ListProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'classname' | 'width' | 'onChange'> {
  width?: string
  listItems?: ListItemProps[]
  listItemsProfile?: ListItemProfileProps[]
}

export const Menu = (props: ListProps) => {
  const { width, listItems, listItemsProfile } = props

  return (
    <LibraryThemeProvider>
      <StyledList width={width}>
        {listItems &&
          listItems?.map((option) => (
            <StyledOption>
              {option.icon && <StyledIcon>{option.icon}</StyledIcon>}
              {option.label}
            </StyledOption>
          ))}
        {listItemsProfile &&
          listItemsProfile?.map((option) => (
            <StyledOption>
              <ProfileImg src={option.imgUrl} />
              {option.title}
            </StyledOption>
          ))}
      </StyledList>
    </LibraryThemeProvider>
  )
}

import { HTMLAttributes } from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledList, NoResults } from './styled'
import { MenuItem, MenuItemProfile } from '.'
import { MenuItemProps } from './menu-item/menu-item'
import { MenuItemProfileProps } from './menu-item-profile/menu-item-profile'

export interface DropdownProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'classname' | 'width' | 'onChange'> {
  width?: string
  maxHeight?: string
  items?: MenuItemProps[]
  itemsProfile?: MenuItemProfileProps[]
}

export const Dropdown = (props: DropdownProps) => {
  const { width, maxHeight, items, itemsProfile } = props

  const itemsArray = items || itemsProfile

  if (!items && !itemsProfile) {
    return (
      <LibraryThemeProvider>
        <StyledList width={width}>
          <NoResults>No results</NoResults>
        </StyledList>
      </LibraryThemeProvider>
    )
  }

  return (
    <LibraryThemeProvider>
      <StyledList width={width} maxHeight={maxHeight}>
        {items &&
          items?.map((item) => (
            <MenuItem divider={item.divider} icon={item.icon} label={item.label} />
          ))}
        {itemsProfile &&
          itemsProfile?.map((item) => (
            <MenuItemProfile
              divider={item.divider}
              imgUrl={item.imgUrl}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        {itemsArray?.length === 0 ? <NoResults>No results</NoResults> : null}
      </StyledList>
    </LibraryThemeProvider>
  )
}

import { HTMLAttributes } from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledList, Nothing } from './styled'
import { Item, ItemProfile } from './'
import { ItemProps } from './item'
import { ItemProfileProps } from './item-profile'

export interface MenuProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'classname' | 'width' | 'onChange'> {
  width?: string
  maxHeight?: string
  itemType?: 'item' | 'profile'
  items?: ItemProps[]
  itemsProfile?: ItemProfileProps[]
}

export const Menu = (props: MenuProps) => {
  const { width, maxHeight, items, itemsProfile } = props

  const itemsArray = items || itemsProfile

  if (!items && !itemsProfile) {
    return (
      <LibraryThemeProvider>
        <StyledList>
          <Nothing>Cringe</Nothing>
        </StyledList>
      </LibraryThemeProvider>
    )
  }

  return (
    <LibraryThemeProvider>
      <StyledList width={width} maxHeight={maxHeight}>
        {items &&
          items?.map((item) => <Item divider={item.divider} icon={item.icon} label={item.label} />)}
        {itemsProfile &&
          itemsProfile?.map((item) => (
            <ItemProfile
              divider={item.divider}
              imgUrl={item.imgUrl}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        {itemsArray?.length === 0 ? <Nothing>No results</Nothing> : null}
      </StyledList>
    </LibraryThemeProvider>
  )
}

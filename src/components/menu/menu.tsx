import React from 'react'
import { HTMLAttributes, ReactElement } from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledIcon, StyledItem, StyledList, StyledDivider } from './styled'

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
  maxHeight?: string
  listItemsProfile?: ListItemProfileProps[]
  listItems?: ListItemProps[]
}

export const Menu = (props: ListProps) => {
  const { width, maxHeight, listItems, listItemsProfile } = props

  return (
    <LibraryThemeProvider>
      <StyledList width={width} maxHeight={maxHeight}>
        {listItems &&
          listItems?.map((item) => (
            <>
              {item.divider ? (
                <StyledDivider />
              ) : (
                <StyledItem onClick={() => alert('lkl')}>
                  {item.icon && <StyledIcon>{item.icon}</StyledIcon>}
                  {item.label}
                </StyledItem>
              )}
            </>
          ))}
        {/* {listItemsProfile &&
          listItemsProfile?.map((item) => (
            <StyledOption>
              <ProfileImg src={item.imgUrl} />
              {item.title}
            </StyledOption>
          ))} */}
      </StyledList>
    </LibraryThemeProvider>
  )
}

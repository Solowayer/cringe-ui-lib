import React from 'react'
import { HTMLAttributes } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { StyledList, NoResults } from './styled'
import { MenuItem } from '.'
import { MenuItemProps } from './menu-item/menu-item'

export interface DropdownProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'classname' | 'width' | 'onChange'> {
  isOpen?: boolean
  width?: string
  maxHeight?: string
  items?: MenuItemProps[]
  onItemClick?: () => void
}

export const Dropdown = React.forwardRef<HTMLUListElement, DropdownProps>((props, ref) => {
  const { isOpen = false, width, maxHeight, items, onItemClick } = props

  if (!items || items?.length === 0) {
    return (
      <LibraryThemeProvider>
        <StyledList isOpen={isOpen} width={width}>
          <NoResults>No results</NoResults>
        </StyledList>
      </LibraryThemeProvider>
    )
  }

  return (
    <LibraryThemeProvider>
      <StyledList ref={ref} isOpen={isOpen} width={width} maxHeight={maxHeight}>
        {items &&
          items?.map((item) => (
            <MenuItem
              divider={item.divider}
              icon={item.icon}
              label={item.label}
              disabled={item.disabled}
              danger={item.danger}
              onClick={onItemClick}
            />
          ))}
      </StyledList>
    </LibraryThemeProvider>
  )
})

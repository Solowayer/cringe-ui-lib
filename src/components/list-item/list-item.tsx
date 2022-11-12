import React, { HTMLAttributes } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { StyledListItem } from './styled'
import { Divider } from '../divider'

export interface ListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'disabled'> {
  onClick?: React.MouseEventHandler<HTMLLIElement>
  divider?: boolean
  disabled?: boolean
  danger?: boolean
  children: React.ReactNode
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { divider, disabled = false, danger = false, onClick, children } = props

  return (
    <LibraryThemeProvider>
      {divider ? (
        <Divider />
      ) : (
        <StyledListItem ref={ref} disabled={disabled} danger={danger} onClick={onClick}>
          {children}
        </StyledListItem>
      )}
    </LibraryThemeProvider>
  )
})

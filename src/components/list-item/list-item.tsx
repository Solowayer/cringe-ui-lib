import React, { HTMLAttributes, ReactElement } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { StyledMenuItem } from './styled'
import { Divider } from '../divider'

export interface ListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'disabled'> {
  icon?: ReactElement
  label?: string
  value?: string
  onClick?: React.MouseEventHandler<HTMLLIElement>
  divider?: boolean
  disabled?: boolean
  danger?: boolean
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { icon, label, value, divider, disabled = false, danger = false, onClick } = props

  return (
    <LibraryThemeProvider>
      {divider ? (
        <Divider />
      ) : (
        <StyledMenuItem
          ref={ref}
          value={value}
          disabled={disabled}
          danger={danger}
          onClick={onClick}
        >
          {icon}
          {label}
        </StyledMenuItem>
      )}
    </LibraryThemeProvider>
  )
})

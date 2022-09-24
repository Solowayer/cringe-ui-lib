import React, { HTMLAttributes, ReactElement } from 'react'
import { LibraryThemeProvider } from '../../../config/themes/theme-provider'
import { StyledMenuItem } from './styled'
import { StyledDivider } from '../styled'

export interface MenuItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'disabled'> {
  icon?: ReactElement
  label?: string
  divider?: boolean
  disabled?: boolean
  danger?: boolean
}

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {
  const { icon, label, divider, disabled = false, danger = false } = props

  return (
    <LibraryThemeProvider>
      {divider ? (
        <StyledDivider />
      ) : (
        <StyledMenuItem ref={ref} disabled={disabled} danger={danger}>
          {icon}
          {label}
        </StyledMenuItem>
      )}
    </LibraryThemeProvider>
  )
})

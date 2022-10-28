import React, { HTMLAttributes, ReactElement } from 'react'
import { LibraryThemeProvider } from '../../themes/theme-provider'
import { StyledMenuItem } from './styled'
import { StyledDivider } from '../styled'

export interface MenuItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'disabled'> {
  icon?: ReactElement
  label?: string
  value?: string
  onClick?: () => void
  divider?: boolean
  disabled?: boolean
  danger?: boolean
}

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {
  const { icon, label, value, divider, disabled = false, danger = false, onClick } = props

  return (
    <LibraryThemeProvider>
      {divider ? (
        <StyledDivider />
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

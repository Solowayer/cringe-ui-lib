import { LibraryThemeProvider } from '../../../config/themes/theme-provider'
import { ReactElement } from 'react'
import { StyledMenuItem, StyledIcon } from './styled'
import { StyledDivider } from '../styled'

export interface MenuItemProps {
  icon?: ReactElement
  label?: string
  divider?: boolean
  disabled?: boolean
}

export const MenuItem = (props: MenuItemProps) => {
  const { icon, label, divider } = props

  return (
    <LibraryThemeProvider>
      {divider ? (
        <StyledDivider />
      ) : (
        <StyledMenuItem>
          <StyledIcon>{icon}</StyledIcon>
          {label}
        </StyledMenuItem>
      )}
    </LibraryThemeProvider>
  )
}

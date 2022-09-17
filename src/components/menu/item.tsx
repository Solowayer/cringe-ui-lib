import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { ReactElement } from 'react'
import { StyledItem, StyledIcon, StyledDivider } from './styled'

export type ItemProps = {
  icon?: ReactElement
  label?: string
  divider?: boolean
  disabled?: boolean
}

export const Item = (props: ItemProps) => {
  const { icon, label, divider } = props

  return (
    <LibraryThemeProvider>
      {divider ? (
        <StyledDivider />
      ) : (
        <StyledItem>
          <StyledIcon>{icon}</StyledIcon>
          {label}
        </StyledItem>
      )}
    </LibraryThemeProvider>
  )
}

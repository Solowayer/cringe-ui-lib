import React from 'react'
import { HTMLAttributes } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { StyledDropdown } from './styled'

export interface DropdownProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'classname' | 'width' | 'onChange'> {
  isOpen?: boolean
  width?: string
  maxHeight?: string
  children: React.ReactNode | Array<React.ReactNode>
}

export const Dropdown = React.forwardRef<HTMLUListElement, DropdownProps>((props, ref) => {
  const { isOpen = false, width, maxHeight, children } = props

  return (
    <LibraryThemeProvider>
      <StyledDropdown ref={ref} isOpen={isOpen} width={width} maxHeight={maxHeight}>
        {children}
      </StyledDropdown>
    </LibraryThemeProvider>
  )
})

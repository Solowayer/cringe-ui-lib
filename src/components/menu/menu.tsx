import React from 'react'
import { HTMLAttributes } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { StyledMenu } from './styled'

export interface MenuProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'classname' | 'width' | 'onChange'> {
  isOpen?: boolean
  width?: string
  maxHeight?: string
  children: React.ReactNode | Array<React.ReactNode>
}

export const Menu = React.forwardRef<HTMLUListElement, MenuProps>((props, ref) => {
  const { isOpen = false, width, maxHeight, children } = props

  return (
    <LibraryThemeProvider>
      <StyledMenu ref={ref} isOpen={isOpen} width={width} maxHeight={maxHeight}>
        {children}
      </StyledMenu>
    </LibraryThemeProvider>
  )
})

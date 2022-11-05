import React, { ReactNode } from 'react'
import { StyledLink } from './styled'
import { LibraryThemeProvider } from '../themes/theme-provider'

export type LinkProps = {
  href?: string
  children: ReactNode
}

export const Link = ({ href, children }: LinkProps) => {
  return (
    <LibraryThemeProvider>
      <StyledLink href={href}>{children}</StyledLink>
    </LibraryThemeProvider>
  )
}

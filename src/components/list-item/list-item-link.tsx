import React, { HTMLAttributes } from 'react'
import { StyledListItemLink } from './styled'

export type ListItemLinkProps = {
  children: React.ReactNode
  href?: string
} & HTMLAttributes<HTMLAnchorElement>

export const ListItemLink = ({ children, href, ...rest }: ListItemLinkProps) => {
  return (
    <StyledListItemLink href={href} {...rest}>
      {children}
    </StyledListItemLink>
  )
}

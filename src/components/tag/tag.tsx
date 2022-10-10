import React, { MouseEventHandler, ReactNode } from 'react'
import { StyledTag, Control } from './styled'
import { COLOR, VARIANT } from './constants'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { Close } from '../icon'

export type TagProps = {
  variant?: keyof typeof VARIANT
  color?: keyof typeof COLOR
  closeable?: boolean
  onClick?: MouseEventHandler<HTMLSpanElement>
  children?: ReactNode
}

export const Tag = (props: TagProps) => {
  const { variant = VARIANT.outlined, color = COLOR.default, closeable, onClick, children } = props
  return (
    <LibraryThemeProvider>
      <StyledTag variant={variant} color={color} closeable={closeable}>
        {children}
        {closeable && (
          <Control onClick={onClick}>
            <Close size="16" />
          </Control>
        )}
      </StyledTag>
    </LibraryThemeProvider>
  )
}

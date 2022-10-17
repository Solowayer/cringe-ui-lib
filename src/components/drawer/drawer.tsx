import React, { ReactNode } from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { StyledDrawerWrapper, StyledClose, StyledDrawer } from './styled'
import { SIDE, SIZE } from './constants'
import { Button } from '../button'
import { Close } from '../icon/close'

export type DrawerProps = {
  isOpen?: boolean
  side?: keyof typeof SIDE
  size?: keyof typeof SIZE
  onClose?: () => void
  children?: ReactNode
}

export const Drawer = ({
  isOpen,
  side = 'right',
  size = 'default',
  onClose,
  children,
}: DrawerProps) => {
  return (
    <LibraryThemeProvider>
      <StyledDrawerWrapper isOpen={isOpen} side={side} onClick={onClose}>
        <StyledDrawer isOpen={isOpen} side={side} size={size} onClick={(e) => e.stopPropagation()}>
          <StyledClose onClick={onClose}>
            <Button size="small" variant="clear" shape="circle">
              <Close />
            </Button>
          </StyledClose>
          {children}
        </StyledDrawer>
      </StyledDrawerWrapper>
    </LibraryThemeProvider>
  )
}

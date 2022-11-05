import React, { ReactNode } from 'react'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { useHideScroll } from '../../hooks/useHideScroll'
import { StyledDrawerWrapper, StyledClose, StyledDrawer } from './styled'
import { ALIGNMENT, SIZE } from './constants'
import { Button } from '../button'
import { Close } from '../icon/close'

export type DrawerProps = {
  isOpen?: boolean
  alignment?: keyof typeof ALIGNMENT
  size?: keyof typeof SIZE
  onClose?: () => void
  children?: ReactNode
}

export const Drawer = ({
  isOpen,
  alignment = 'right',
  size = 'default',
  onClose,
  children,
}: DrawerProps) => {
  useHideScroll(isOpen)

  return (
    <LibraryThemeProvider>
      <StyledDrawerWrapper isOpen={isOpen} alignment={alignment} onClick={onClose}>
        <StyledDrawer
          isOpen={isOpen}
          alignment={alignment}
          size={size}
          onClick={(e) => e.stopPropagation()}
        >
          <StyledClose onClick={onClose}>
            <Button variant="clear" shape="circle">
              <Close />
            </Button>
          </StyledClose>
          {children}
        </StyledDrawer>
      </StyledDrawerWrapper>
    </LibraryThemeProvider>
  )
}

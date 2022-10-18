import React, { ReactNode, useEffect } from 'react'
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
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      setTimeout(() => {
        document.body.style.overflow = 'unset'
        document.body.style.paddingRight = '0px'
      }, 200)
    }
    // document.querySelector('html').style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <LibraryThemeProvider>
      <StyledDrawerWrapper isOpen={isOpen} side={side} onClick={onClose}>
        <StyledDrawer isOpen={isOpen} side={side} size={size} onClick={(e) => e.stopPropagation()}>
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

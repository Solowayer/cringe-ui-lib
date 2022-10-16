import React from 'react'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import {
  StyledDrawerWrapper,
  StyledClose,
  StyledDrawer,
  StyledDrawerHeader,
  StyledDrawerBody,
  StyledDrawerFooter,
} from './styled'
import { SIDE, SIZE } from './constants'
import { Button } from '../button'
import { Close } from '../icon/close'

export type DrawerProps = {
  isOpen?: boolean
  side?: keyof typeof SIDE
  size?: keyof typeof SIZE
  onClose?: () => void
}

export const Drawer = ({ isOpen, side = 'right', size = 'default', onClose }: DrawerProps) => {
  return (
    <LibraryThemeProvider>
      <StyledDrawerWrapper isOpen={isOpen} side={side} onClick={onClose}>
        <StyledDrawer isOpen={isOpen} size={size} side={side} onClick={(e) => e.stopPropagation()}>
          <StyledClose onClick={onClose}>
            <Button variant="clear" shape="circle">
              <Close />
            </Button>
          </StyledClose>
          <StyledDrawerHeader></StyledDrawerHeader>
          <StyledDrawerBody></StyledDrawerBody>
          <StyledDrawerFooter></StyledDrawerFooter>
        </StyledDrawer>
      </StyledDrawerWrapper>
    </LibraryThemeProvider>
  )
}

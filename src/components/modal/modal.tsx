import React, { ReactNode, useEffect } from 'react'
import { StyledModalWrapper, StyledModal, StyledClose, StyledModalImage } from './styled'
import { Close } from '../icon/'
import { Button } from '../button/button'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { IMAGE_SIZE, SIZE } from './constants'

export type ModalProps = {
  isOpen?: boolean
  image?: string
  imageSize?: keyof typeof IMAGE_SIZE
  showCloseButton?: boolean
  size?: keyof typeof SIZE
  children: ReactNode
  onClose?: () => void
}

export const Modal = ({
  isOpen,
  image,
  imageSize = IMAGE_SIZE.default,
  showCloseButton = true,
  size = SIZE.default,
  children,
  onClose,
}: ModalProps) => {
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
      <StyledModalWrapper isOpen={isOpen} onClick={onClose}>
        <StyledModal size={size} isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
          {showCloseButton && (
            <StyledClose>
              <Button variant={image ? 'tertiary' : 'clear'} shape="circle" onClick={onClose}>
                <Close />
              </Button>
            </StyledClose>
          )}
          {image && <StyledModalImage src={image} imageSize={imageSize} />}
          {children}
        </StyledModal>
      </StyledModalWrapper>
    </LibraryThemeProvider>
  )
}

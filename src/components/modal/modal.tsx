import React, { ReactNode, useEffect } from 'react'
import {
  StyledModalWrapper,
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledModalFooter,
  StyledHeading,
  StyledCloseButton,
  StyledModalImage,
} from './styled'
import { Close } from '../icon/'
import { Typo } from '../typo/typo'
import { Button } from '../button/button'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { IMAGE_SIZE, SIZE } from './constants'

export type ModalProps = {
  isOpen?: boolean
  image?: string
  imageSize?: keyof typeof IMAGE_SIZE
  heading?: string
  subHeading?: string
  size?: keyof typeof SIZE
  children: ReactNode
  onClose?: () => void
}

export const Modal = ({
  isOpen,
  image,
  imageSize = IMAGE_SIZE.default,
  heading,
  subHeading,
  size = SIZE.default,
  children,
  onClose,
}: ModalProps) => {
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <LibraryThemeProvider>
      <StyledModalWrapper isOpen={isOpen} onClick={onClose}>
        <StyledModal size={size} isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
          <StyledCloseButton>
            <Button variant={image ? 'tertiary' : 'clear'} shape="circle" onClick={onClose}>
              <Close />
            </Button>
          </StyledCloseButton>
          {image && <StyledModalImage src={image} imageSize={imageSize} />}
          <StyledModalHeader>
            <StyledHeading>
              <Typo type="headingSmall">{heading}</Typo>
              <Typo type="paragraphLarge" color="secondary">
                {subHeading}
              </Typo>
            </StyledHeading>
          </StyledModalHeader>
          <StyledModalBody>{children}</StyledModalBody>
          <StyledModalFooter>
            <Button>Submit</Button>
            <Button variant="ghost">Cancel</Button>
          </StyledModalFooter>
        </StyledModal>
      </StyledModalWrapper>
    </LibraryThemeProvider>
  )
}

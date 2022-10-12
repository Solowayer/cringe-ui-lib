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

export type ModalProps = {
  isOpen?: boolean
  image?: string
  children?: ReactNode
}

export const Modal = ({ isOpen, image, children }: ModalProps) => {
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <LibraryThemeProvider>
      <StyledModalWrapper isOpen={isOpen}>
        <StyledModal isOpen={isOpen}>
          <StyledCloseButton>
            <Button
              variant={image ? 'tertiary' : 'clear'}
              shape="circle"
              onClick={() => alert('close')}
            >
              <Close />
            </Button>
          </StyledCloseButton>
          {image && <StyledModalImage src={image} />}
          <StyledModalHeader>
            <StyledHeading>
              <Typo type="headingSmall">Heading</Typo>
              <Typo type="paragraphLarge">Sub-heading</Typo>
            </StyledHeading>
          </StyledModalHeader>
          <StyledModalBody>{children}</StyledModalBody>
          <StyledModalFooter>Footer</StyledModalFooter>
        </StyledModal>
      </StyledModalWrapper>
    </LibraryThemeProvider>
  )
}

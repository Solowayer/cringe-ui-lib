import styled from 'styled-components'
import { IMAGE_SIZE, SIZE } from './constants'

export const StyledModalWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: opacity 0.2s ease-in;
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  overflow-y: auto;
  z-index: 1000;
`

export const StyledModal = styled.div<{ isOpen: boolean; size: keyof typeof SIZE }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-color: white;
  width: ${(props) => (props.size === 'default' ? '480px' : '100%')};
  height: ${(props) => (props.size === 'default' ? '' : '100%')};
  border-radius: ${({ theme }) => theme.sizing.scale4};
  transition: transform 0.2s ease-in;
  transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(16px)')};
`

export const StyledCloseButton = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.sizing.scale16};
  top: ${({ theme }) => theme.sizing.scale16};
`

export const StyledModalImage = styled.img<{ imageSize: keyof typeof IMAGE_SIZE }>`
  width: 100%;
  object-fit: cover;
  height: ${(props) => (props.imageSize === IMAGE_SIZE.default ? '200px' : '400px')};
`

export const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sizing.scale16};
`

export const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizing.scale4};
`

export const StyledModalBody = styled.div`
  padding: ${({ theme }) => theme.sizing.scale16};
  height: 100%;
`

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.sizing.scale8};
  padding: ${({ theme }) => theme.sizing.scale16};
  bottom: 0;
  right: 0;
`

import styled from 'styled-components'
import { IMAGE_SIZE, SIZE } from './constants'

export const StyledModalWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.lighting.overlay2};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: opacity 0.2s ease-in;
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: ${({ theme }) => theme.zIndex.modal};
`

export const StyledModal = styled.div<{ isOpen: boolean; size: keyof typeof SIZE }>`
  display: flex;
  max-height: ${(props) => (props.size === 'full' ? '100%' : '90%')};
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-color: white;
  width: ${(props) => (props.size === 'default' ? '600px' : '100%')};
  height: ${(props) => (props.size === 'default' ? '' : '100%')};
  border-radius: ${({ theme }) => theme.sizing.scale4};
  transition: transform 0.2s ease-in;
  transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(16px)')};
`

export const StyledClose = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.sizing.scale12};
  top: ${({ theme }) => theme.sizing.scale12};
`

export const StyledModalImage = styled.img<{ imageSize: keyof typeof IMAGE_SIZE }>`
  width: 100%;
  object-fit: cover;
  height: ${(props) => (props.imageSize === IMAGE_SIZE.default ? '200px' : '400px')};
`

export const StyledModalHeader = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  min-height: ${({ theme }) => theme.sizing.scale64};
  margin-left: ${({ theme }) => theme.sizing.scale24};
  margin-right: ${({ theme }) => theme.sizing.scale64};
`

export const StyledModalBody = styled.div`
  padding-left: ${({ theme }) => theme.sizing.scale24};
  padding-right: ${({ theme }) => theme.sizing.scale24};
  padding-top: ${({ theme }) => theme.sizing.scale16};
  padding-bottom: ${({ theme }) => theme.sizing.scale24};
  height: 100%;
  overflow-y: auto;
`

export const StyledModalFooter = styled.div`
  padding-left: ${({ theme }) => theme.sizing.scale24};
  padding-right: ${({ theme }) => theme.sizing.scale24};
  padding-top: ${({ theme }) => theme.sizing.scale16};
  padding-bottom: ${({ theme }) => theme.sizing.scale16};
  box-shadow: ${({ theme }) => theme.lighting.shadow1};
`

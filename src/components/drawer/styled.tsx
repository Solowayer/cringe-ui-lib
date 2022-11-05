import styled, { css } from 'styled-components'
import { DrawerProps } from './drawer'
import { ALIGNMENT, SIZE } from './constants'

export const StyledDrawerWrapper = styled.div<{
  isOpen: boolean
  alignment: keyof typeof ALIGNMENT
}>`
  display: flex;
  justify-content: ${(props) =>
    props.alignment === ALIGNMENT.right
      ? 'flex-end'
      : props.alignment === ALIGNMENT.left
      ? 'flex-start'
      : ''};
  align-items: ${(props) =>
    props.alignment === ALIGNMENT.top
      ? 'flex-start'
      : props.alignment === ALIGNMENT.bottom
      ? 'flex-end'
      : ''};
  position: fixed;
  background-color: ${({ theme }) => theme.lighting.overlay2};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: opacity 0.2s ease-in;
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: ${({ theme }) => theme.zIndex.drawer};
`

export const StyledDrawer = styled.div<{
  isOpen: boolean
  size: keyof typeof SIZE
  alignment: keyof typeof ALIGNMENT
}>`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  transition: transform 0.4s ease-in-out;
  background-color: white;
  ${getSide}
`

export const StyledClose = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.sizing.scale12};
  top: ${({ theme }) => theme.sizing.scale12};
`

export const StyledDrawerHeader = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  min-height: ${({ theme }) => theme.sizing.scale64};
  margin-left: ${({ theme }) => theme.sizing.scale24};
  margin-right: ${({ theme }) => theme.sizing.scale64};
`

export const StyledDrawerBody = styled.div`
  height: 100%;
  overflow-y: auto;
  margin-left: ${({ theme }) => theme.sizing.scale24};
  margin-right: ${({ theme }) => theme.sizing.scale24};
  margin-top: ${({ theme }) => theme.sizing.scale24};
  margin-bottom: ${({ theme }) => theme.sizing.scale24};
`

export const StyledDrawerFooter = styled.div`
  padding-left: ${({ theme }) => theme.sizing.scale24};
  padding-right: ${({ theme }) => theme.sizing.scale24};
  padding-top: ${({ theme }) => theme.sizing.scale16};
  padding-bottom: ${({ theme }) => theme.sizing.scale16};
  box-shadow: ${({ theme }) => theme.lighting.shadow1};
`

function getSide({ size, alignment, isOpen }: DrawerProps) {
  const getSize =
    size === SIZE.default
      ? '400px'
      : size === SIZE.large
      ? '600px'
      : size === SIZE.full
      ? '100%'
      : 'auto'

  switch (alignment) {
    case ALIGNMENT.left:
      return css`
        width: ${getSize};
        height: 100%;
        transform: ${isOpen ? 'translateX(0)' : `translateX(-${getSize})`};
      `
    case ALIGNMENT.right:
      return css`
        width: ${getSize};
        height: 100%;
        transform: ${isOpen ? 'translateX(0)' : `translateX(${getSize})`};
      `
    case ALIGNMENT.top:
      return css`
        width: 100%;
        height: ${getSize};
        transform: ${isOpen ? 'translateY(0)' : `translateY(-${getSize})`};
      `
    case ALIGNMENT.bottom:
      return css`
        width: 100%;
        height: ${getSize};
        transform: ${isOpen ? 'translateY(0)' : `translateY(${getSize})`};
      `
    default:
      return ''
  }
}

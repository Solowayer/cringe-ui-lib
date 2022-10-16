import styled, { css } from 'styled-components'
import { DrawerProps } from './drawer'
import { SIDE, SIZE } from './constants'

export const StyledDrawerWrapper = styled.div<{ isOpen: boolean; side: keyof typeof SIDE }>`
  display: flex;
  justify-content: ${(props) =>
    props.side === SIDE.right ? 'flex-end' : props.side === SIDE.left ? 'flex-start' : ''};
  align-items: ${(props) =>
    props.side === SIDE.top ? 'flex-start' : props.side === SIDE.bottom ? 'flex-end' : ''};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: opacity 0.4s ease-in;
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: 1000;
`

export const StyledDrawer = styled.div<{
  isOpen: boolean
  size: keyof typeof SIZE
  side: keyof typeof SIDE
}>`
  position: relative;
  transition: transform 0.2s ease-in;
  /* height: 100%; */
  background-color: white;
  ${getSide}
`

export const StyledClose = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.sizing.scale16};
  top: ${({ theme }) => theme.sizing.scale16};
`

export const StyledDrawerHeader = styled.div``

export const StyledDrawerBody = styled.div``

export const StyledDrawerFooter = styled.div``

function getSide({ size, side, isOpen }: DrawerProps) {
  const getSize =
    size === SIZE.default
      ? '400px'
      : size === SIZE.large
      ? '600px'
      : size === SIZE.full
      ? '100%'
      : ''

  switch (side) {
    case SIDE.left:
      return css`
        width: ${getSize};
        height: 100%;
        transform: ${isOpen ? 'translateX(0)' : `translateX(-${getSize})`};
      `
    case SIDE.right:
      return css`
        width: ${getSize};
        height: 100%;
        transform: ${isOpen ? 'translateX(0)' : `translateX(${getSize})`};
      `
    case SIDE.top:
      return css`
        width: 100%;
        height: ${getSize};
        transform: ${isOpen ? 'translateY(0)' : `translateY(-${getSize})`};
      `
    case SIDE.bottom:
      return css`
        width: 100%;
        height: ${getSize};
        transform: ${isOpen ? 'translateY(0)' : `translateY(${getSize})`};
      `
    default:
      return ''
  }
}

import styled from 'styled-components'

export const StyledModalWrapper = styled.div<{ isOpen }>`
  position: fixed;
  display: flex;
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
`

export const StyledModal = styled.div<{ isOpen }>`
  overflow: hidden;
  position: relative;
  background-color: white;
  width: 500px;
  border-radius: 4px;
  transition: transform 0.2s ease-in;
  transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(16px)')};
`

export const StyledCloseButton = styled.div`
  display: flex;
  position: absolute;
  right: 16px;
  top: 16px;
`

export const StyledModalImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`

export const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`

export const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyledModalBody = styled.div``

export const StyledModalFooter = styled.div``

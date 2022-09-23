import styled from 'styled-components'

export const StyledMenuItemProfile = styled.li`
  width: 100%;
  font-family: ${(props) => props.theme.typography.defaultFontFamily};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  list-style: none;
  padding-top: ${({ theme }) => theme.sizing.scale12};
  padding-bottom: ${({ theme }) => theme.sizing.scale12};
  padding-left: ${({ theme }) => theme.sizing.scale16};
  padding-right: ${({ theme }) => theme.sizing.scale16};
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`

export const StyledProfileImg = styled.img`
  width: ${({ theme }) => theme.sizing.scale48};
  height: ${({ theme }) => theme.sizing.scale48};
  border-radius: 50%;
  object-fit: cover;
`

export const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.sizing.scale8};
`

export const StyledProfileTitle = styled.p`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.sizing.scale4};
  margin-left: 0;
  margin-right: 0;
  font-size: ${({ theme }) => theme.typography.labelMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.labelMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.labelMedium.lineHeight};
`

export const StyledProfileSubTitle = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};
`

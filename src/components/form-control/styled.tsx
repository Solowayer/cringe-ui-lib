import styled from 'styled-components'
import { FormControlProps } from './form-control'

export const StyledFormControl = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizing.scale8};
  flex-direction: column;
`

export const StyledLabel = styled.label<FormControlProps>`
  font-size: ${({ theme }) => theme.typography.labelMedium.fontSize};
  font-weight: ${({ theme }) => theme.typography.labelMedium.fontWeight};
  line-height: ${({ theme }) => theme.typography.labelMedium.lineHeight};
  color: ${({ theme }) => theme.colors.black};
`

export const StyledHint = styled.span<FormControlProps>`
  font-size: ${({ theme }) => theme.typography.paragraphSmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.paragraphSmall.fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraphSmall.lineHeight};
  color: ${({ theme }) => theme.colors.gray500};
`

export const StyledError = styled(StyledHint)`
  color: ${({ theme }) => theme.colors.red500};
`

export const StyledSuccess = styled(StyledHint)`
  color: ${({ theme }) => theme.colors.green500};
`

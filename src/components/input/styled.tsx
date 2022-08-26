import styled from 'styled-components'
import { InputProps } from './input'
import { Theme } from '../../config/themes/types'

interface StyledInputProps extends InputProps {
  theme: Theme
}

export const StyledInput = styled.input<StyledInputProps>``

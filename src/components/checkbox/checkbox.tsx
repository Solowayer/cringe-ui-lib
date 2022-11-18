import React from 'react'
import { StyledLabel, StyledCheckmark, StyledSlider, StyledTrack } from './styled'
import { Typo } from '../typo'
import { LibraryThemeProvider } from '../themes/theme-provider'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  required?: boolean
  checkmarkType?: 'checkmark' | 'toggle' | 'icon'
  id?: string
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({
  checked,
  disabled,
  checkmarkType = 'checkmark',
  id,
  label,
  onChange,
}: CheckboxProps) => {
  return (
    <LibraryThemeProvider>
      <StyledLabel htmlFor={id} disabled={disabled}>
        {checkmarkType === 'toggle' && (
          <StyledTrack checked={checked}>
            <StyledSlider checked={checked} />
          </StyledTrack>
        )}
        {checkmarkType === 'checkmark' && <StyledCheckmark checked={checked} disabled={disabled} />}
        <input type="checkbox" id={id} disabled={disabled} checked={checked} onChange={onChange} />
        <Typo
          marginLeft="16px"
          variant="labelMedium"
          color={disabled ? 'contentDisabled' : 'contentPrimary'}
        >
          {label}
        </Typo>
      </StyledLabel>
    </LibraryThemeProvider>
  )
}

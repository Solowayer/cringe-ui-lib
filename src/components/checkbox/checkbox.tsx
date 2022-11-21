import React, { HTMLAttributes } from 'react'
import { StyledLabel, StyledCheckmark, StyledSlider, StyledTrack, StyledIcon } from './styled'
import { Typo } from '../typo'
import { LibraryThemeProvider } from '../themes/theme-provider'

type AlignItems = 'center' | 'flex-start' | 'flex-end'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  required?: boolean
  isIndeterminate?: boolean
  checkmarkType?: 'checkmark' | 'toggle' | 'icon'
  id?: string
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactElement
  checkedIcon?: React.ReactElement
  alignItems?: AlignItems
}

export const Checkbox = ({
  checked,
  disabled,
  isIndeterminate,
  checkmarkType = 'checkmark',
  id,
  label,
  onChange,
  icon,
  checkedIcon,
  alignItems = 'flex-start',
}: CheckboxProps) => {
  return (
    <LibraryThemeProvider>
      <StyledLabel alignItems={alignItems} htmlFor={id} disabled={disabled}>
        {checkmarkType === 'icon' &&
          (checked === true ? (
            <StyledIcon checked={checked}>{checkedIcon}</StyledIcon>
          ) : (
            <StyledIcon>{icon}</StyledIcon>
          ))}
        {checkmarkType === 'toggle' && (
          <StyledTrack checked={checked} disabled={disabled}>
            <StyledSlider checked={checked} />
          </StyledTrack>
        )}
        {checkmarkType === 'checkmark' && (
          <StyledCheckmark
            checked={checked}
            disabled={disabled}
            isIndeterminate={isIndeterminate}
          />
        )}
        <input type="checkbox" id={id} disabled={disabled} checked={checked} onChange={onChange} />
        {label && (
          <Typo
            marginLeft="16px"
            variant="labelMedium"
            color={disabled ? 'contentDisabled' : 'contentPrimary'}
          >
            {label}
          </Typo>
        )}
      </StyledLabel>
    </LibraryThemeProvider>
  )
}

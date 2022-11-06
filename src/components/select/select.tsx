import React, { useEffect, useRef, useState } from 'react'
import { StyledSelectWrapper, StyledDropdown, StyledOption } from './styled'
import { LibraryThemeProvider } from '../themes/theme-provider'
import { Input } from '../input'
import { ExpandMore } from '../icon'

export type SelectStyles = {
  width?: string
  maxDropdownHeight?: string
}

export type Value = {
  label: string
  value: string
}

export type SelectProps = {
  isDropdownOpen?: boolean
  value?: Value
  options: Value[]
  onChange?: (option: Value | undefined) => void
} & SelectStyles

export const Select = ({
  width,
  maxDropdownHeight,
  isDropdownOpen,
  value,
  options,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  isDropdownOpen = isOpen

  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)

  function selectOption(option: Value) {
    onChange(option)
    setIsOpen(false)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isOptionSelected = (option: Value) => {
    return option === value
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        dropdownRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [inputRef, dropdownRef, setIsOpen])

  return (
    <LibraryThemeProvider>
      <StyledSelectWrapper width={width}>
        <Input
          ref={inputRef}
          onClick={() => setIsOpen(!isOpen)}
          width="100%"
          placeholder="Select some cringe..."
          endContent={<ExpandMore />}
          value={value?.label}
          clearButtonClick={() => onChange({ label: '', value: '' })}
          clearable
        />
        <StyledDropdown
          ref={dropdownRef}
          isDropdownOpen={isDropdownOpen}
          maxDropdownHeight={maxDropdownHeight}
        >
          {options?.map((option) => (
            <StyledOption key={option.value} onClick={() => selectOption(option)}>
              {option.label}
            </StyledOption>
          ))}
        </StyledDropdown>
      </StyledSelectWrapper>
    </LibraryThemeProvider>
  )
}

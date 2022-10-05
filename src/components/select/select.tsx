import React, { useEffect, useRef, useState } from 'react'
import { StyledSelectWrapper, StyledHeader, StyledList, StyledOption } from './styled'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { Input } from '../input'
import { ExpandMore } from '../icon'

export type Value = {
  label: string
  value: string
}

export interface SelectProps {
  width?: string
  maxDropdownHeight?: string
  isDropdownOpen?: boolean
  value?: Value
  options?: Value[]
  disabled?: boolean
  onChange?: (option: Value | undefined) => void
}

export const Select = (props: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    width,
    maxDropdownHeight,
    isDropdownOpen = isOpen,
    value,
    options,
    disabled,
    onChange,
  } = props

  const headerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        dropdownRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [headerRef, dropdownRef, setIsOpen])

  const onOptionClick = (option: Value) => {
    onChange(option)
    setIsOpen(false)
  }

  return (
    <LibraryThemeProvider>
      <StyledSelectWrapper width={width}>
        <StyledHeader ref={headerRef}>
          <Input
            onClick={() => setIsOpen(!isOpen)}
            width="100%"
            placeholder="Select some cringe..."
            endContent={<ExpandMore />}
            value={value ? value?.label : ''}
            disabled={disabled}
            clearable
          />
        </StyledHeader>
        <StyledList
          isDropdownOpen={isDropdownOpen}
          maxDropdownHeight={maxDropdownHeight}
          ref={dropdownRef}
        >
          {options?.map((option) => (
            <StyledOption key={option.value} onClick={() => onOptionClick(option)}>
              {option.label}
            </StyledOption>
          ))}
        </StyledList>
      </StyledSelectWrapper>
    </LibraryThemeProvider>
  )
}

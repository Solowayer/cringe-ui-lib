import React, { useEffect, useRef, useState } from 'react'
import { StyledSelectWrapper, StyledHeader, StyledList, StyledOption } from './styled'
import { LibraryThemeProvider } from '../../config/themes/theme-provider'
import { Input } from '../input'
import { ExpandMore } from '../icon'
import { MenuItemProps } from '../dropdown/menu-item/menu-item'

export type SelectOption = {
  label: string
  value: string
}

export interface SelectProps {
  width?: string
  maxDropdownHeight?: string
  isDropdownOpen?: boolean
  option?: SelectOption
  options?: SelectOption[]
  disabled?: boolean
  onChange?: (option: SelectOption | undefined) => void
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    width,
    maxDropdownHeight,
    isDropdownOpen = isOpen,
    option,
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

  return (
    <LibraryThemeProvider>
      <StyledSelectWrapper width={width} ref={ref}>
        <StyledHeader ref={headerRef} onClick={() => setIsOpen(!isOpen)}>
          <Input
            width="100%"
            endContent={<ExpandMore />}
            value={option?.label}
            disabled={disabled}
          />
        </StyledHeader>
        <StyledList
          isDropdownOpen={isDropdownOpen}
          maxDropdownHeight={maxDropdownHeight}
          ref={dropdownRef}
        >
          {options?.map((option) => (
            <StyledOption key={option.value}>{option.label}</StyledOption>
          ))}
        </StyledList>
      </StyledSelectWrapper>
    </LibraryThemeProvider>
  )
})

export type Background = {
  backgroundPrimary: string
  backgroundSecondary: string
  backgroundAccent: string
  backgroundSuccess: string
  backgroundWarning: string
  backgroundDanger: string
  backgroundAccentLight: string
  backgroundSuccessLight: string
  backgroundWarningLight: string
  backgroundDangerLight: string
}

export type Content = {
  contentPrimary: string
  contentSecondary: string
  contentTertiary: string
  contentOnColor: string
  contentAccent: string
  contentSuccess: string
  contentWarning: string
  contentDanger: string
  contentDisabled: string
}

export type Component = {
  // Buttons
  buttonPrimaryFill: string
  buttonPrimaryHover: string
  buttonPrimaryActive: string
  buttonPrimaryContent: string

  buttonSecondaryHover: string
  buttonSecondaryActive: string
  buttonSecondaryContent: string
  buttonSecondaryBorder: Border

  buttonTertiaryFill: string
  buttonTertiaryHover: string
  buttonTertiaryActive: string
  buttonTertiaryContent: string

  buttonGhostFill: string
  buttonGhostHover: string
  buttonGhostActive: string
  buttonGhostContent: string

  buttonClearHover: string
  buttonClearActive: string
  buttonClearContent: string

  buttonDangerFill: string
  buttonDangerHover: string
  buttonDangerActive: string
  buttonDangerContent: string

  buttonDisabledFill: string
  buttonDisabledContent: string

  // Spinner
  spinnerFill: string
  spinnerForeground: string

  // Inputs
  inputFill: string
  inputFocusFill: string
  inputSuccessFill: string
  inputErrorFill: string
  inputDisabledFill: string

  inputPlaceholder: string
  inputPlaceholderDisabled: string
  inputContent: string
  inputContentDisabled: string
  inputControls: string

  inputBorderHover: Border
  inputBorderFocus: Border
  inputBorderSuccess: Border
  inputBorderError: Border
  inputBorderDisabled: Border

  // Dropdown
  dropdownFill: string
  menuItemHover: string
  menuItemHoverDanger: string
  menuItemContent: string
  menuItemContentDanger: string
  menuItemContentDisabled: string
  menuItemSubTitle: string

  // Tag
  tagSolidDefaultFill: string
  tagSolidDefaultContent: string
  tagSolidPositiveFill: string
  tagSolidPositiveContent: string
  tagOutlinedDefaultBorder: Border
  tagOutlinedDefaultContent: string
  tagOutlinedPositiveBorder: Border
  tagOutlinedPositiveContent: string
}

export type Sizing = {
  scale2: string
  scale4: string
  scale6: string
  scale8: string
  scale10: string
  scale12: string
  scale14: string
  scale16: string
  scale18: string
  scale20: string
  scale22: string
  scale24: string
  scale28: string
  scale32: string
  scale36: string
  scale40: string
  scale48: string
  scale56: string
  scale64: string
  scale96: string
}

export type Font = {
  fontSize: string
  fontWeight: number
  lineHeight: string
}

export type Typography = {
  paragraphSmall: Font
  paragraphMedium: Font
  paragraphLarge: Font

  labelSmall: Font
  labelMedium: Font
  labelLarge: Font

  headingXSmall: Font
  headingSmall: Font
  headingMedium: Font
  headingLarge: Font
  headingXLarge: Font
}

export type Border = {
  width: string
  style: 'solid' | 'dashed'
  color: string
}

export type Borders = {
  default: Border
  selected: Border
  accent: Border
  success: Border
  warning: Border
  danger: Border
  disabled: Border
  radius4: string
  radius16: string
  radius32: string
  radiusCircle: string
}

export type Lighting = {
  overlay1: string
  shadow1: string
  shadow2: string
  shadow3: string
}

export type ColorTokens = {
  black: string
  white: string
  // Gray
  gray50: string
  gray100: string
  gray200: string
  gray300: string
  gray400: string
  gray500: string
  gray600: string
  gray700: string
  gray800: string
  gray900: string
  // Red
  red50: string
  red100: string
  red200: string
  red300: string
  red400: string
  red500: string
  red600: string
  red700: string
  // Orange
  orange50: string
  orange100: string
  orange200: string
  orange300: string
  orange400: string
  orange500: string
  orange600: string
  orange700: string
  //Green
  green50: string
  green100: string
  green200: string
  green300: string
  green400: string
  green500: string
  green600: string
  green700: string
  //Blue
  blue50: string
  blue100: string
  blue200: string
  blue300: string
  blue400: string
  blue500: string
  blue600: string
  blue700: string
}

export type BackgroundColorTokens = {
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

export type ContentColorTokens = {
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

export type ComponentColorTokens = {
  // Buttons
  buttonPrimaryFill: string
  buttonPrimaryHover: string
  buttonPrimaryActive: string
  buttonPrimaryContent: string

  buttonSecondaryHover: string
  buttonSecondaryActive: string
  buttonSecondaryContent: string
  buttonSecondaryBorder: string

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
  inputFocus: string
  inputSuccess: string
  inputError: string
  inputDisabled: string

  inputPlaceholder: string
  inputPlaceholderDisabled: string
  inputContent: string
  inputContentDisabled: string
  inputControls: string

  inputBorderHover: string
  inputBorderFocus: string
  inputBorderSuccess: string
  inputBorderError: string
  inputBorderDisabled: string

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
  tagOutlinedDefaultBorder: string
  tagOutlinedDefaultContent: string
  tagOutlinedPositiveBorder: string
  tagOutlinedPositiveContent: string

  // Checkbox
  checkboxChecked: string
  checkboxContent: string
  checkboxBorder: string
  checkboxBorderHover: string
  checkboxBorderChecked: string
  checkboxBorderDisabled: string

  // Toggle
  toggleTrackOn: string
  toggleTrackOff: string
  toggleTrackDisabled: string
  toggleSlider: string

  // Divider
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

export type Borders = {
  default: string
  selected: string
  accent: string
  success: string
  warning: string
  danger: string
  disabled: string
  width1: string
  width2: string
  width4: string
  solid: string
  dashed: string
  radius2: string
  radius4: string
  radius16: string
  radius32: string
  radiusCircle: string
}

export type Lighting = {
  overlay1: string
  overlay2: string
  overlay3: string
  shadow1: string
  shadow2: string
  shadow3: string
}

export type MediaQuery = {
  small: string
  medium: string
  large: string
  xLarge: string
}

export type ZIndex = {
  dropdown: number
  drawer: number
  modal: number
}

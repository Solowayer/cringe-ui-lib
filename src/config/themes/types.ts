export type Base = {
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

export type Background = {
  primary: string
  secondary: string
  accent: string
  success: string
  warning: string
  danger: string
  accentLight: string
  successLight: string
  warningLight: string
  dangerLight: string
}

export type Content = {
  primary: string
  secondary: string
  tertiary: string
  onColor: string
  accent: string
  success: string
  warning: string
  danger: string
  disabled: string
}

export type Component = {
  // Buttons
  buttonPrimaryFill: string
  buttonPrimaryHover: string
  buttonPrimaryActive: string
  buttonPrimaryContent: string

  buttonSecondaryFill: string
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

  buttonClearFill: string
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
  // spinnerPrimaryFill: string
  // spinnerForeground: string
  // spinnerDisabledFill: string

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
}

export type Sizing = {
  scale2: string
  scale4: string
  scale6: string
  scale8: string
  scale12: string
  scale16: string
  scale24: string
  scale32: string
  scale40: string
  scale48: string
  scale56: string
  scale64: string
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

  defaultFontFamily: string
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

export type Effects = {
  shadow1: string
  shadow2: string
  shadow3: string
}

type Colors = Base & Background & Content & Component

export type Theme = {
  colors: Colors
  typography: Typography
  borders: Borders
  effects?: Effects
  sizing: Sizing
}

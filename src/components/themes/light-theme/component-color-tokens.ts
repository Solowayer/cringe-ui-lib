import { ComponentColorTokens } from '../types'
import { colorTokens } from '../shared/color-tokens'

export const componentColorTokens: ComponentColorTokens = {
  // Buttons
  buttonPrimaryFill: colorTokens.green500,
  buttonPrimaryHover: colorTokens.green600,
  buttonPrimaryActive: colorTokens.green700,
  buttonPrimaryContent: colorTokens.white,

  buttonSecondaryHover: colorTokens.green100,
  buttonSecondaryActive: colorTokens.green200,
  buttonSecondaryContent: colorTokens.green500,
  buttonSecondaryBorder: colorTokens.green500,

  buttonTertiaryFill: colorTokens.black,
  buttonTertiaryHover: colorTokens.gray700,
  buttonTertiaryActive: colorTokens.gray500,
  buttonTertiaryContent: colorTokens.white,

  buttonGhostFill: colorTokens.gray100,
  buttonGhostHover: colorTokens.gray200,
  buttonGhostActive: colorTokens.gray300,
  buttonGhostContent: colorTokens.black,

  buttonClearHover: colorTokens.gray200,
  buttonClearActive: colorTokens.gray300,
  buttonClearContent: colorTokens.black,

  buttonDangerFill: colorTokens.red500,
  buttonDangerHover: colorTokens.red600,
  buttonDangerActive: colorTokens.red700,
  buttonDangerContent: colorTokens.white,

  buttonDisabledFill: colorTokens.gray50,
  buttonDisabledContent: colorTokens.gray300,

  // Spinner
  spinnerFill: colorTokens.gray100,
  spinnerForeground: colorTokens.blue500,

  // Inputs
  inputFill: colorTokens.gray100,
  inputFocus: colorTokens.white,
  inputSuccess: colorTokens.green50,
  inputError: colorTokens.red50,
  inputDisabled: colorTokens.gray50,
  inputPlaceholder: colorTokens.gray500,
  inputPlaceholderDisabled: colorTokens.gray300,
  inputContent: colorTokens.black,
  inputContentDisabled: colorTokens.gray300,
  inputControls: colorTokens.gray500,
  inputBorderHover: colorTokens.gray200,
  inputBorderFocus: colorTokens.black,
  inputBorderSuccess: colorTokens.green300,
  inputBorderError: colorTokens.red300,
  inputBorderDisabled: colorTokens.gray50,

  // Dropdown
  dropdownFill: colorTokens.white,
  menuItemHover: colorTokens.gray200,
  menuItemHoverDanger: colorTokens.red50,
  menuItemContent: colorTokens.black,
  menuItemContentDanger: colorTokens.red500,
  menuItemContentDisabled: colorTokens.gray300,
  menuItemSubTitle: colorTokens.gray500,

  // Tag Solid
  tagSolidDefaultFill: colorTokens.black,
  tagSolidDefaultContent: colorTokens.white,
  tagSolidPositiveFill: colorTokens.green500,
  tagSolidPositiveContent: colorTokens.white,

  // Tag Outlined
  tagOutlinedDefaultBorder: colorTokens.gray200,
  tagOutlinedDefaultContent: colorTokens.black,
  tagOutlinedPositiveBorder: colorTokens.green300,
  tagOutlinedPositiveContent: colorTokens.green500,

  // Checkbox
  checkboxChecked: colorTokens.black,
  checkboxContent: colorTokens.white,
  checkboxBorder: colorTokens.gray200,
  checkboxBorderHover: colorTokens.black,
  checkboxBorderChecked: colorTokens.black,
  checkboxBorderDisabled: colorTokens.gray100,

  // Toggle
  toggleTrackOn: colorTokens.black,
  toggleTrackOff: colorTokens.gray200,
  toggleTrackDisabled: colorTokens.gray50,
  toggleSlider: colorTokens.white,
}

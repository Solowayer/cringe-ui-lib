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
  buttonSecondaryBorder: {
    width: '2px',
    style: 'solid',
    color: colorTokens.green500,
  },

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
  inputFocusFill: colorTokens.white,
  inputSuccessFill: colorTokens.green50,
  inputErrorFill: colorTokens.red50,
  inputDisabledFill: colorTokens.gray50,
  inputPlaceholder: colorTokens.gray500,
  inputPlaceholderDisabled: colorTokens.gray300,
  inputContent: colorTokens.black,
  inputContentDisabled: colorTokens.gray300,
  inputControls: colorTokens.gray500,
  inputBorderHover: {
    width: '2px',
    style: 'solid',
    color: colorTokens.gray200,
  },
  inputBorderFocus: {
    width: '2px',
    style: 'solid',
    color: colorTokens.black,
  },
  inputBorderSuccess: {
    width: '2px',
    style: 'solid',
    color: colorTokens.green300,
  },
  inputBorderError: {
    width: '2px',
    style: 'solid',
    color: colorTokens.red300,
  },
  inputBorderDisabled: {
    width: '2px',
    style: 'solid',
    color: colorTokens.gray50,
  },

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
  tagOutlinedDefaultBorder: {
    width: '2px',
    style: 'solid',
    color: colorTokens.gray200,
  },
  tagOutlinedDefaultContent: colorTokens.black,
  tagOutlinedPositiveBorder: {
    width: '2px',
    style: 'solid',
    color: colorTokens.green300,
  },
  tagOutlinedPositiveContent: colorTokens.green500,
}

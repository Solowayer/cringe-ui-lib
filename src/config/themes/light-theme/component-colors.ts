import { Component } from '../types'
import { baseColors } from '../shared/base-colors'

export const componentColors: Component = {
  // Buttons
  buttonPrimaryFill: baseColors.green500,
  buttonPrimaryHover: baseColors.green600,
  buttonPrimaryActive: baseColors.green700,
  buttonPrimaryContent: baseColors.white,

  buttonSecondaryFill: 'transparent',
  buttonSecondaryHover: baseColors.green100,
  buttonSecondaryActive: baseColors.green200,
  buttonSecondaryContent: baseColors.green500,
  buttonSecondaryBorder: {
    width: '2px',
    style: 'solid',
    color: baseColors.green500,
  },

  buttonTertiaryFill: baseColors.black,
  buttonTertiaryHover: baseColors.gray700,
  buttonTertiaryActive: baseColors.gray500,
  buttonTertiaryContent: baseColors.white,

  buttonGhostFill: baseColors.gray100,
  buttonGhostHover: baseColors.gray200,
  buttonGhostActive: baseColors.gray300,
  buttonGhostContent: baseColors.black,

  buttonClearFill: 'transparent',
  buttonClearHover: baseColors.gray200,
  buttonClearActive: baseColors.gray300,
  buttonClearContent: baseColors.black,

  buttonDangerFill: baseColors.red500,
  buttonDangerHover: baseColors.red600,
  buttonDangerActive: baseColors.red700,
  buttonDangerContent: baseColors.white,

  buttonDisabledFill: baseColors.gray50,
  buttonDisabledContent: baseColors.gray300,

  // Spinner
  spinnerFill: baseColors.gray100,
  spinnerForeground: baseColors.blue500,

  // Inputs
  inputFill: baseColors.gray100,
  inputFocusFill: baseColors.white,
  inputSuccessFill: baseColors.green50,
  inputErrorFill: baseColors.red50,
  inputDisabledFill: baseColors.gray50,
  inputPlaceholder: baseColors.gray500,
  inputPlaceholderDisabled: baseColors.gray300,
  inputContent: baseColors.black,
  inputContentDisabled: baseColors.gray300,
  inputControls: baseColors.gray500,
  inputBorderHover: {
    width: '2px',
    style: 'solid',
    color: baseColors.gray200,
  },
  inputBorderFocus: {
    width: '2px',
    style: 'solid',
    color: baseColors.black,
  },
  inputBorderSuccess: {
    width: '2px',
    style: 'solid',
    color: baseColors.green300,
  },
  inputBorderError: {
    width: '2px',
    style: 'solid',
    color: baseColors.red300,
  },
  inputBorderDisabled: {
    width: '2px',
    style: 'solid',
    color: baseColors.gray50,
  },

  // Menu
  menuFill: baseColors.white,
  menuItemFill: 'transparent',
  menuItemHover: baseColors.gray200,
  menuItemHoverDanger: baseColors.red50,
  menuItemContent: baseColors.black,
  menuItemContentDanger: baseColors.red500,
  menuItemContentDisabled: baseColors.gray50,
  menuItemSubTitle: baseColors.gray500,
}

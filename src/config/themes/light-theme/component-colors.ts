import { Component } from '../types'
import { baseColors } from '../base-colors'

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

  buttonGhostFill: baseColors.gray50,
  buttonGhostHover: baseColors.gray100,
  buttonGhostActive: baseColors.gray200,
  buttonGhostContent: baseColors.black,

  buttonClearFill: 'transparent',
  buttonClearHover: baseColors.gray100,
  buttonClearActive: baseColors.gray200,
  buttonClearContent: baseColors.black,

  buttonDangerFill: baseColors.red500,
  buttonDangerHover: baseColors.red600,
  buttonDangerActive: baseColors.red700,
  buttonDangerContent: baseColors.white,

  buttonDisabledFill: baseColors.gray50,
  buttonDisabledContent: baseColors.gray300,

  // Inputs
  inputFill: baseColors.gray50,
  inputSuccessFill: baseColors.green50,
  inputErrorFill: baseColors.red50,
  inputDisabledFill: baseColors.gray50,
  inputPlaceholder: baseColors.gray500,
  inputPlaceholderDisabled: baseColors.gray300,
  inputContent: baseColors.black,
  inputContentDisabled: baseColors.gray300,
  inputControls: baseColors.gray500,
  inputBorderHover: baseColors.gray200,
  inputBorderFocus: baseColors.black,
  inputBorderSuccess: baseColors.green300,
  inputBorderError: baseColors.red300,
  inputBorderDisabled: baseColors.gray50,
}

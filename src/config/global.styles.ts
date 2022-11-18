import { createGlobalStyle } from 'styled-components'
import './fonts/styles.css'

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

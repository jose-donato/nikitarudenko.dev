import { css, createGlobalStyle } from 'styled-components'

import minireset from './minireset'
import theme from './theme'

const GlobalStyles = css`
  ${minireset}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px; 10px/16px = 62.5% */
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-weight: ${theme.font.weight.medium};
    font-family: ${theme.font.family.display};
    font-size: ${theme.font.size.body};
    background-color: ${theme.colors.charcoalBlack};
  }
`

export default createGlobalStyle`${GlobalStyles}`

import { css, createGlobalStyle } from 'styled-components'

import minireset from './minireset'

const GlobalStyles = css`
  ${minireset}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
  }
`

export default createGlobalStyle`${GlobalStyles}`

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;
  }

  p,
  span,
  h1,
  h2,
  h3,
  h4,
  a {
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
  }
  /*--------------
   show element only on mobile
  --------------*/
  .mobileOnly {
    display: none !important;
    @media (max-width: $md) {
      display: block !important;
    }
  }

  /*--------------
   hide element on mobile
  --------------*/
  .noMobile {
    @media (max-width: $md) {
      display: none !important;
    }
  }
  /*--------------
   Text selection colors
  --------------*/
  //::-moz-selection { /* Code for Firefox */
  //  background: $white;
  //  color: $black;
  //}
  //::selection {
  //  background: $white;
  //  color: $black;
  //}

  /*--------------
   disable touch
   blue layer on
   mobile devices
  --------------*/
  input,
  textarea,
  button,
  select,
  a,
  div,
  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 1.6rem;
    overflow-x: hidden;
    position: relative;
  }

  strong {
    font-weight: 900;
  }

  @media screen and (min-width: 1921px) {
    html {
      font-size: 75%;
    }
  }

  @media screen and (max-width: 1600px) {
    html {
      font-size: 55%;
    }
  }

  @media screen and (max-width: 1440px) {
    html {
      font-size: 50%;
    }
  }
`

export default GlobalStyles

import * as React from "react"
import GlobalStyles from "../assets/styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "../assets/styles/themes/theme"

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div> navbar</div>
    {children}
    <div> footer</div>
  </ThemeProvider>
)

export default MainLayout

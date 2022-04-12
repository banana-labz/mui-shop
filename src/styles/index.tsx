import React from "react"
import { createTheme, ThemeProvider as Provider } from "@mui/material/styles"
import { StyledEngineProvider } from "@mui/styled-engine"

import { CssBaseline } from "./css-baseline"

import { palette } from "./palette"
import { typography } from "./typography"
import { shape } from "./shape"
import { breakpoints } from "./breakpoints"

interface ThemeProviderProps {
  children: React.ReactNode
}

export type { Theme } from "./theme"

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = createTheme({
    palette,
    typography,
    shape,
    breakpoints,
  })
  
  return (
    <Provider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline/>
        {children}
      </StyledEngineProvider>
    </Provider>
  )
}
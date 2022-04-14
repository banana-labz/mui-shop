import React from "react"
import { Box } from "@mui/material"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <Box sx={mainStyle}>
    {children}
  </Box>
)

const mainStyle = { 
  padding: "20px",
  height: "calc(100vh - 64px)"
}
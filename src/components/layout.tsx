import React from "react"

import { useState } from "react"
import { Box } from "@mui/material"

import { Header } from "./header"
import { Order } from "./order"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false)

  return (
    <>
      <Header openOrder={() => setIsOrderOpen(true)}/>
      <Box sx={mainStyle}>
        {children}
      </Box>
      <Order isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)}/>
    </>
  )
}

const mainStyle = { 
  padding: "20px",
  height: "calc(100vh - 64px)"
}
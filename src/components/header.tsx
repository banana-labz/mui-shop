import React from "react"

import { useNavigate } from "react-router"
import { AppBar, Badge, Button, IconButton, Toolbar } from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"


import { useOrder } from "../hooks"

interface HeaderProps {
  openOrder: () => void
}

export const Header = ({ openOrder }: HeaderProps) => {
  const { items } = useOrder()
  const navigate = useNavigate()
  const handleClickLogo = () => {
    navigate("/")
  }

  return (
    <AppBar position="static">
      <Toolbar sx={style.toolbar}>
        <Button onClick={handleClickLogo} sx={style.logo}>
          MUI Shop
        </Button>
        <IconButton color="inherit" onClick={() => openOrder()}>
          <Badge color="secondary" badgeContent={items.length}>
            <ShoppingCartIcon/>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

const style = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    color:"white",
    cursor: "pointer"
  }
}
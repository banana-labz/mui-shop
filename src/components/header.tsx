import React from "react"
import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { RootState, OrderState } from "../reducers"

import { useOrder } from "../hooks"
import { useNavigate } from "react-router"
import { Box } from "@mui/system"

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

/*
  import LoginIcon from "@mui/icons-material/Login"
  <IconButton color="inherit">
  <LoginIcon/>
  </IconButton>
*/
import React from "react"
import { useSelector } from "react-redux"
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { RootState, OrderState } from "../reducers"

interface HeaderProps {
  openOrder: () => void
}

export const Header = ({ openOrder }: HeaderProps) => {
  const { items } = useSelector<RootState, OrderState>(state => state.order)
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="span" sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton color="inherit" onClick={() => openOrder()}>
          <Badge color="secondary" badgeContent={items.length}>
            <ShoppingCartIcon/>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

/*
  import LoginIcon from "@mui/icons-material/Login"
  <IconButton color="inherit">
  <LoginIcon/>
  </IconButton>
*/
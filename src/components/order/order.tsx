import React from "react"
import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { ItemsView } from "./items-view"

interface OrderProps {
  isOpen: boolean,
  onClose: () => void
}

export const Order = ({ isOpen, onClose }: OrderProps) => (
  <Drawer anchor="right" open={isOpen} onClose={onClose}>
    <List sx={{ width: "400px" }}>
      <ListItem>
        <ShoppingCartIcon/>
        <ListItemText primary="Order"/>
      </ListItem>
      <Divider/>
      <ItemsView/>
    </List>
  </Drawer>
)
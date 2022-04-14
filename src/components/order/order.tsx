import React from "react"

import { useActions } from "react-redux-actions-hook"
import { Divider, Drawer } from "@mui/material"
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { ItemsView } from "./items-view"
import { Summary } from "./summary"

import { orderClear, orderRemove } from "../../actions"

import { useOrder } from "../../hooks"

interface OrderProps {
  isOpen: boolean,
  onClose: () => void
}

export const Order = ({ isOpen, onClose }: OrderProps) => {
  const { items, cost } = useOrder()
  const onClear = useActions(orderClear)
  const onRemove = useActions(orderRemove)

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <List sx={{ width: "400px" }}>
        <ListItem>
          <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
          <ListItemText primary="Order"/>
        </ListItem>
        <Divider/>
        <ItemsView items={items} onRemove={onRemove}/>
        <Divider/>
        {items.length ? <Summary cost={cost} onClear={onClear}/> : <></>}
      </List>
    </Drawer>
  )
}
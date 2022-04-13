import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { Divider, Drawer } from "@mui/material"
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { ItemsView } from "./items-view"
import { Summary } from "./summary"

import { orderClear, orderRemove } from "../../actions"

import { RootState } from "../../reducers"

interface OrderProps extends InjectedProps {
  isOpen: boolean,
  onClose: () => void
}

export const OrderLogic = ({ isOpen, onClose, items, cost, orderClear, orderRemove }: OrderProps) => (
  <Drawer anchor="right" open={isOpen} onClose={onClose}>
    <List sx={{ width: "400px" }}>
      <ListItem>
        <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
        <ListItemText primary="Order"/>
      </ListItem>
      <Divider/>
      <ItemsView items={items} onRemove={orderRemove}/>
      <Divider/>
      {items.length ? <Summary cost={cost} onClear={orderClear}/> : <></>}
    </List>
  </Drawer>
)

const connector = connect(
  ({ order: { items, cost } }: RootState) => ({ items, cost }),
  { orderClear, orderRemove }
)

type InjectedProps = ConnectedProps<typeof connector>

export const Order = connector(OrderLogic)
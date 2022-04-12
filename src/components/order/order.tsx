import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { RootState } from "../../reducers"
import { orderRemove, orderClear } from "../../actions"

interface OrderProps extends InjectedProps {
  isOpen: boolean,
  onClose: () => void
}

export const OrderLogic = ({ items, cost, orderRemove, orderClear, isOpen, onClose }: OrderProps) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <List>
        <ListItem>
          <ShoppingCartIcon/>
          <ListItemText primary="Order"/>
        </ListItem>
        <Divider/>{
          !items.length 
            ? <ListItem>Your order is empty</ListItem>
            : (<>
                {items.map(item => <Typography key={item.id}>{item.name}</Typography>)}
                <Divider/>
                <ListItem>
                  <Typography>
                    Cost: {cost}
                  </Typography>
                </ListItem>
              </>)
      }</List>
    </Drawer>
  )
}


const connector = connect(
  ({ order: { items, cost } }: RootState) => ({ items, cost }),
  { orderRemove, orderClear }
)

type InjectedProps = ConnectedProps<typeof connector>

export const Order = connector(OrderLogic)
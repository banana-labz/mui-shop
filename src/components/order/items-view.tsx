import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { Button, Divider, ListItem, Typography } from "@mui/material"

import { Item } from "./item"

import { RootState } from "../../reducers"
import { orderRemove, orderClear } from "../../actions"

export const ItemsViewLogic = ({ items, cost, orderRemove, orderClear }: InjectedProps) => {

  if (!items.length) {
    return <ListItem>Your order is empty</ListItem>
  }

  return (
    <>
      {items.map((item, i) => (
        <Item
          key={item.orderId}
          {...item}
          onRemove={() => orderRemove(i)}
        />
      ))
      }
      <Divider/>
      <ListItem>
        <Typography>Total cost:</Typography>
        <Typography>${cost}</Typography>
        <Button onClick={orderClear}>Clear</Button>
      </ListItem>
    </>
  )
}


const connector = connect(
  ({ order: { items, cost } }: RootState) => ({ items, cost }),
  { orderRemove, orderClear }
)

type InjectedProps = ConnectedProps<typeof connector>

export const ItemsView = connector(ItemsViewLogic)
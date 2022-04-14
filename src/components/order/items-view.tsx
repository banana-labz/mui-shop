import React from "react"
import { TransitionGroup } from "react-transition-group"
import { ListItem, Collapse } from "@mui/material"

import { Item } from "./item"

import { OrderData } from "../../reducers"

interface ItemsViewProps {
  items: OrderData[],
  onRemove: (id: string) => void
}

export const ItemsView = ({ items, onRemove }: ItemsViewProps) => {
  if (!items.length) {
    return <ListItem>Your order is empty</ListItem>
  }

  return (
    <TransitionGroup>{
      items.map(item => (
        <Collapse key={item.orderId}>
          <Item
            {...item}
            onRemove={() => onRemove(item.orderId)}
          />
        </Collapse>
      ))
    }</TransitionGroup>
  )
}
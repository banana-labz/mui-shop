import React from "react"
import { ListItem } from "@mui/material"

import { Item } from "./item"

import { OrderData } from "../../types"

interface ItemsViewProps {
  items: OrderData[],
  onRemove: (id: string) => void
}

export const ItemsView = ({ items, onRemove }: ItemsViewProps) => {
  if (!items.length) {
    return <ListItem>Your order is empty</ListItem>
  }

  return (
    <>{
      items.map(item => (
        <Item
          key={item.orderId}
          {...item}
          onRemove={() => onRemove(item.orderId)}
        />
      ))
    }</>
  )
}
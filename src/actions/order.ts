import { ActionCreator } from "redux"

import { OrderData, ProductData } from "../reducers"

export enum AOrderType {
  ORDER_ITEM_ADD = "ORDER_ITEM_ADD",
  ORDER_ITEM_REMOVE = "ORDER_ITEM_REMOVE",
  ORDER_CLEAR = "ORDER_CLEAR"
}

interface AAdd {
  type: AOrderType.ORDER_ITEM_ADD,
  payload: OrderData
}

interface ARemove {
  type: AOrderType.ORDER_ITEM_REMOVE,
  payload: string
}

interface AClear {
  type: AOrderType.ORDER_CLEAR,
}

export type AOrder = AAdd | ARemove | AClear

export const orderAdd: ActionCreator<AAdd> = ({ id, imageUrl, name, price, rating }: ProductData) => ({
  type: AOrderType.ORDER_ITEM_ADD,
  payload: ({
    itemId: id,
    orderId: Math.random().toString(35).substring(2, 9),
    imageUrl, name, price, rating
  })
})

export const orderRemove: ActionCreator<ARemove> = (orderId: string) => ({
  type: AOrderType.ORDER_ITEM_REMOVE,
  payload: orderId
})

export const orderClear: ActionCreator<AClear> = () => ({
  type: AOrderType.ORDER_CLEAR
})
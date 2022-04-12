import { ActionCreator } from "redux"

import { ProductData } from "../types"

export enum AOrderType {
  ORDER_ITEM_ADD = "ORDER_ITEM_ADD",
  ORDER_ITEM_REMOVE = "ORDER_ITEM_REMOVE",
  ORDER_CLEAR = "ORDER_CLEAR"
}

interface AAdd {
  type: AOrderType.ORDER_ITEM_ADD,
  payload: ProductData
}

interface ARemove {
  type: AOrderType.ORDER_ITEM_REMOVE,
  payload: number
}

interface AClear {
  type: AOrderType.ORDER_CLEAR,
}

export type AOrder = AAdd | ARemove | AClear

export const orderAdd: ActionCreator<AAdd> = (data: ProductData) => ({
  type: AOrderType.ORDER_ITEM_ADD,
  payload: data
})

export const orderRemove: ActionCreator<ARemove> = (index: number) => ({
  type: AOrderType.ORDER_ITEM_REMOVE,
  payload: index
})

export const orderClear: ActionCreator<AClear> = () => ({
  type: AOrderType.ORDER_CLEAR
})
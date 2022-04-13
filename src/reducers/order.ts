import { ProductData, OrderData } from './../types';
import { AOrderType } from './../actions/order';
import { Reducer } from "redux"

import { OrderState } from "./types"
import { initialOrder } from "./initial"

import { AType } from "../actions"

const countCost = (items: OrderData[]): number => items.reduce((price, item) => price + item.price, 0)

export const updateOrder: Reducer<OrderState, AType> = (state = initialOrder, action) => {
  switch (action.type) {
    case AOrderType.ORDER_ITEM_ADD: {
      const { items } = state
      const newItems = [...items, action.payload]
      return { items: newItems, cost: countCost(newItems) }
    }
    case AOrderType.ORDER_ITEM_REMOVE: {
      const { items } = state
      const { payload } = action
      const result = items.filter(({ orderId }) => orderId !== payload)
      return { items: result, cost: countCost(result) }
    }
    case AOrderType.ORDER_CLEAR: {
      return { items: [], cost: 0 }
    }
    default: {
      return state
    }
  }
}
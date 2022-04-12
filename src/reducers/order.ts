import { AOrderType } from './../actions/order';
import { Reducer } from "redux"

import { OrderState } from "./types"
import { initialOrder } from "./initial"

import { AType } from "../actions"

export const updateOrder: Reducer<OrderState, AType> = (state = initialOrder, action) => {
  switch (action.type) {
    case AOrderType.ORDER_ITEM_ADD: {
      const { items, cost } = state
      const item = action.payload
      return { items: [...items, item], cost: cost + item.price }
    }
    case AOrderType.ORDER_ITEM_REMOVE: {
      const { items, cost } = state
      const { payload: index } = action
      const deletedPrice = items[index].price
      const result = items.filter((v, i) => i !== index)
      return { items: result, cost: cost - deletedPrice }
    }
    case AOrderType.ORDER_CLEAR: {
      return { items: [], cost: 0 }
    }
    default: {
      return state
    }
  }
}
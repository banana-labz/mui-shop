import { combineReducers } from "redux"

import { OrderData, ProductData, CatalogueState, OrderState } from "./types"
import { updateCatalogue } from "./catalogue"
import { updateOrder } from "./order"

export const reducer = combineReducers({
  catalogue: updateCatalogue,
  order: updateOrder
})

export type { ProductData, OrderData, CatalogueState, OrderState }
import { combineReducers, Reducer } from "redux"

import { CatalogueState, OrderState, RootState } from "./types"
import { updateCatalogue } from "./catalogue"
import { updateOrder } from "./order"

import { AType } from "../actions"

export const reducer: Reducer<RootState, AType> = combineReducers({
  catalogue: updateCatalogue,
  order: updateOrder
})

export type { CatalogueState, OrderState, RootState }
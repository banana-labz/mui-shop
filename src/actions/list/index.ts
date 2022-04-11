import { Dispatch } from "react"

import { AFetch, itemsRequest, itemsSuccess, itemsError } from "./fetch"
import { AItems, itemsSort } from "./items"

import api from "../../services/shop-service"

export { AFetchType } from "./fetch"
export { AItemsType } from "./items"
export type AList = AItems | AFetch

export { itemsSortChange, itemsAdd, itemsRemove, itemsEdit, itemsSort } from "./items"
export const fetchItems = (dispatch: Dispatch<AList>) => {
  dispatch(itemsRequest())
  api.getAllItems()
    .then(data => {
      dispatch(itemsSuccess(data))
      dispatch(itemsSort())
    })
    .catch(err => dispatch(itemsError(err)))
}
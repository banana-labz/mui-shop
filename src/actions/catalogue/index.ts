import { Dispatch } from "react"

import { AFetch, itemsRequest, itemsSuccess, itemsError } from "./fetch"
import { AItems } from "./items"

import api from "../../services/shop-service"

export { AFetchType } from "./fetch"
export { AItemsType } from "./items"
export type ACatalogue = AItems | AFetch

export { itemsAdd, itemsRemove, itemsEdit, itemsSort } from "./items"
export const fetchItems = () => (dispatch: Dispatch<ACatalogue>) => {
  dispatch(itemsRequest())
  api.getAllItems()
    .then(data => dispatch(itemsSuccess(data)))
    .catch(err => dispatch(itemsError(err)))
}
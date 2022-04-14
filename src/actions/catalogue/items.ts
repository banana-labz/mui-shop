import { ActionCreator } from "redux"

import { ProductData } from "../../reducers"
import { SortType } from "../../utils/sort"

export enum AItemsType {
  ITEMS_SORT = "ITEMS_SORT",
  ITEMS_ADD = "ITEMS_ADD",
  ITEMS_REMOVE = "ITEMS_REMOVE",
  ITEMS_EDIT = "ITEMS_EDIT"
}

interface AItemsSort {
  type: AItemsType.ITEMS_SORT,
  payload: SortType
}

interface AItemsAdd {
  type: AItemsType.ITEMS_ADD,
  payload: ProductData
}

interface AItemsRemove {
  type: AItemsType.ITEMS_REMOVE,
  payload: string
}

interface AItemsEdit {
  type: AItemsType.ITEMS_EDIT,
  payload: {
      id: string,
      item: ProductData
  }
}

export type AItems = AItemsSort | AItemsAdd | AItemsRemove | AItemsEdit

export const itemsSort: ActionCreator<AItemsSort> = (method: SortType) => ({
  type: AItemsType.ITEMS_SORT,
  payload: method
})

export const itemsAdd: ActionCreator<AItemsAdd> = item => ({
  type: AItemsType.ITEMS_ADD,
  payload: item
})

export const itemsRemove: ActionCreator<AItemsRemove> = id => ({
  type: AItemsType.ITEMS_REMOVE,
  payload: id
})

export const itemsEdit: ActionCreator<AItemsEdit> = (id, item) => ({
  type: AItemsType.ITEMS_EDIT,
  payload: { id, item }
})
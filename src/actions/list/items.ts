import { ActionCreator } from "redux"

import { ProductData } from "../../types"
import { SortType } from "../../utils/sort"

export enum AItemsType {
  ITEMS_SORT = "ITEMS_SORT",
  ITEMS_SORT_CHANGE = "ITEMS_SORT_CHANGE",
  ITEMS_ADD = "ITEMS_ADD",
  ITEMS_REMOVE = "ITEMS_REMOVE",
  ITEMS_EDIT = "ITEMS_EDIT"
}

interface AItemsSortChange {
  type: AItemsType.ITEMS_SORT_CHANGE,
  payload: SortType
}

interface AItemsSort {
  type: AItemsType.ITEMS_SORT
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

export type AItems = AItemsSortChange | AItemsSort | AItemsAdd | AItemsRemove | AItemsEdit


export const itemsSortChange: ActionCreator<AItemsSortChange> = (sortType: SortType) => ({
  type: AItemsType.ITEMS_SORT_CHANGE,
  payload: sortType
})

export const itemsSort: ActionCreator<AItemsSort> = () => ({
  type: AItemsType.ITEMS_SORT
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
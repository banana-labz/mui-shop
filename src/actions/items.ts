import type { ActionCreator } from "redux"
import type { SortType, ProductData } from "../types"

enum AItemsType {
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
    payload: number
}

interface AItemsEdit {
    type: AItemsType.ITEMS_EDIT,
    payload: {
        index: number,
        item: ProductData
    }
}

const itemsSort: ActionCreator<AItemsSort> = sortType => ({
    type: AItemsType.ITEMS_SORT,
    payload: sortType
})

const itemsAdd: ActionCreator<AItemsAdd> = item => ({
    type: AItemsType.ITEMS_ADD,
    payload: item
})

const itemsRemove: ActionCreator<AItemsRemove> = idx => ({
    type: AItemsType.ITEMS_REMOVE,
    payload: idx
})

const itemsEdit: ActionCreator<AItemsEdit> = data => ({
    type: AItemsType.ITEMS_EDIT,
    payload: data
})

type AItems = AItemsSort | AItemsAdd | AItemsRemove | AItemsEdit

export type { AItems }
export { AItemsType }
export { itemsSort, itemsAdd, itemsRemove, itemsEdit }

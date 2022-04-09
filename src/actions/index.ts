<<<<<<< HEAD
import type { AList } from "./list"
import { 
    AItemsType,
    AFetchType,
    fetchItems,
    itemsSortChange,
    itemsSort,
    itemsAdd,
    itemsRemove,
    itemsEdit
} from "./list"

export type AType = AList // | ...

export { 
    AItemsType,
    AFetchType,
    fetchItems,
    itemsSortChange,
    itemsSort,
    itemsAdd,
    itemsRemove,
    itemsEdit
=======
import type { Dispatch } from "react"
import type { AFetch } from "./fetch"
import type { AItems } from "./items"
import type { ASort } from "./sort"
import type { AModal } from "./modal"
import { AFetchType } from "./fetch"
import { AItemsType } from "./items"
import { ASortType } from "./sort"
import { AModalType } from "./modal"
import { sortChange } from "./sort"
import { itemsRequest, itemsSuccess, itemsError } from "./fetch"
import { itemsSort, itemsAdd, itemsRemove, itemsEdit } from "./items"
import { modalAdd, modalRemove, modalEdit, modalClose } from "./modal"
import { Service } from "../services/shop-service"

const fetchItems = (dispatch: Dispatch<AFetch>) => {
    dispatch(itemsRequest())
    Service.getItems()
        .then(data => dispatch(itemsSuccess(data)))
        .catch(err => dispatch(itemsError(err)))
}

type AType = AItems | AModal | AFetch | ASort

export type { AItems, AModal, AFetch, ASort, AType }
export { AItemsType, AModalType, AFetchType, ASortType }
export { 
    sortChange, fetchItems, itemsSort, itemsAdd, itemsRemove, 
    itemsEdit, modalAdd, modalRemove, modalEdit, modalClose
>>>>>>> e27aefed1ede6b09838ceafc1c4d430ae609a035
}
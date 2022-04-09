import type { Dispatch } from "react"
import type { AFetch } from "./fetch"
import type { AItems } from "./items"
import { Service } from "../../services/shop-service"
import { 
    AFetchType,
    itemsRequest,
    itemsSuccess,
    itemsError
} from "./fetch"
import { 
    AItemsType,
    itemsSortChange,
    itemsSort,
    itemsAdd,
    itemsRemove,
    itemsEdit
} from "./items"

export type AList = AItems | AFetch

const fetchItems = (dispatch: Dispatch<AList>) => {
    dispatch(itemsRequest())
    Service.getItems()
        .then(data => {
            dispatch(itemsSuccess(data))
            dispatch(itemsSort())
        })
        .catch(err => dispatch(itemsError(err)))
}

export { 
    AItemsType, 
    AFetchType,
    fetchItems,
    itemsSortChange,
    itemsSort,
    itemsAdd,
    itemsRemove,
    itemsEdit
}
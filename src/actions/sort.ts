import type { ActionCreator } from "redux"
import { SortType } from "../types"

enum ASortType {
    SORT_CHANGE = "SORT_CHANGE"
}

interface ASort {
    type: ASortType.SORT_CHANGE,
    payload: SortType
}

const sortChange: ActionCreator<ASort> = sortType => ({
    type: ASortType.SORT_CHANGE,
    payload: sortType
})

export type { ASort }
export { ASortType }
export { sortChange }
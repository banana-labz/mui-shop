import type { Reducer } from "redux"
import { initialSort } from "./initial"
import { ASortType, AType } from "../actions"
import {  SortType } from "../types"

export const updateSort: Reducer<SortType, AType> = (state = initialSort, action) => {
    switch (action.type) {
        case ASortType.SORT_CHANGE:
            return action.payload
        default:
            return state
    }
}
import type { Reducer } from "redux"
import type { ListState } from "./types"
<<<<<<< HEAD
import { SortOptions } from "../utils/sort"
import { AItemsType, AFetchType, AType } from "../actions"
import { initialList } from "./initial"

export const updateList: Reducer<ListState, AType> = (state = initialList, action) => {
    switch (action.type) {
        case AFetchType.FETCH_ITEMS_REQUEST: {
            return { ...state, items: [], loading: true, error: null }
        }
        case AFetchType.FETCH_ITEMS_SUCCESS: {
            return { ...state, items: action.payload, loading: false, error: null }
        }
        case AFetchType.FETCH_ITEMS_FAILURE: {
            return { ...state, items: [], loading: false, error: action.payload }
        }
        case AItemsType.ITEMS_SORT_CHANGE: {
            return { ...state, sort: action.payload }
        }
        case AItemsType.ITEMS_SORT: {
            const { sort: method } = state
            if (method in SortOptions) {
                const sorted = [...state.items].sort(SortOptions[method])   
=======
import { initialList } from "./initial"
import { sortOptions } from "../utils/sort-options"
import { AItemsType, AFetchType, AType } from "../actions"

export const updateList: Reducer<ListState, AType> = (state = initialList, action) => {
    switch (action.type) {
        case AFetchType.FETCH_ITEMS_REQUEST:
            return { items: [], loading: true, error: null }
        case AFetchType.FETCH_ITEMS_SUCCESS:
            return { items: action.payload, loading: false, error: null }
        case AFetchType.FETCH_ITEMS_FAILURE:
            return { items: [], loading: false, error: action.payload }
        case AItemsType.ITEMS_ADD:
            return { ...state, items: [...state.items, action.payload] }
        case AItemsType.ITEMS_SORT: {
            const { payload: method } = action
            if (method in sortOptions) {
                const sorted = [...state.items].sort(sortOptions[method])   
>>>>>>> e27aefed1ede6b09838ceafc1c4d430ae609a035
                return { ...state, items: sorted }
            }
            else {
                return state
            }
        }
<<<<<<< HEAD
        case AItemsType.ITEMS_ADD: {
            return { ...state, items: [...state.items, action.payload] }
        }
        case AItemsType.ITEMS_REMOVE: { 
            const { payload: id } = action
            const result = state.items.filter(v => v.id !== id)
            return { ...state, items: result }
        }
        case AItemsType.ITEMS_EDIT: {
            const { payload: { id, item } } = action
            const result = state.items.map(v => v.id === id ? item : v)
            return { ...state, items: result }
        }
        default: {
            return state
        }
=======
        case AItemsType.ITEMS_REMOVE: {
            const { items } = state
            const len = items.length
            const { payload: i } = action
            return i >= 0 && i < len 
                ? { ...state, items: [...items.slice(0, i), ...items.slice(i + 1, len)] }
                : state
        }
        case AItemsType.ITEMS_EDIT: {
            const { items } = state
            const len = items.length
            const { payload: {index, item } } = action
            return index >= 0 && index < len
                ? { ...state, items: [...items.slice(0, index), item, ...items.slice(index + 1, len)] }
                : state
        }
        default:
            return state
>>>>>>> e27aefed1ede6b09838ceafc1c4d430ae609a035
    }
}
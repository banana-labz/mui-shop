import { Reducer } from "redux"

import { ListState } from "./types"
import { initialList } from "./initial"

import { SortOptions } from "../utils/sort"
import { AItemsType, AFetchType, AType } from "../actions"

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
        return { ...state, items: sorted }
      }
      else {
        return state
      }
    }
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
  }
}
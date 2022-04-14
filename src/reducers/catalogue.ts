import { Reducer } from "redux"

import { CatalogueState } from "./types"

import { SortOptions, SortType } from "../utils/sort"
import { AItemsType, AFetchType, AType } from "../actions"

const initialCatalogue: CatalogueState = {
  items: [],
  loading: true,
  error: null
}

export const updateCatalogue: Reducer<CatalogueState, AType> = (state = initialCatalogue, action) => {
  switch (action.type) {
    case AFetchType.FETCH_ITEMS_REQUEST: {
      return { items: [], loading: true, error: null }
    }
    case AFetchType.FETCH_ITEMS_SUCCESS: {
      return { items: action.payload, loading: false, error: null }
    }
    case AFetchType.FETCH_ITEMS_FAILURE: {
      return { items: [], loading: false, error: action.payload }
    }
    case AItemsType.ITEMS_SORT: {
      const { payload } = action
      if (payload in SortOptions) {
        const sorted = [...state.items].sort(SortOptions[payload])
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
      const { payload } = action
      const result = state.items.filter(item => item.id !== payload)
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
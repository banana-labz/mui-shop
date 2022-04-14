import { Reducer } from "redux"

import { CatalogueState } from "./types"

import { SortOptions, SortType } from "../utils/sort"
import { AItemsType, AFetchType, AType } from "../actions"

const initialCatalogue: CatalogueState = {
  items: [],
  loading: true,
  error: null,
  sort: SortType.ALPHABETIC
}

export const updateCatalogue: Reducer<CatalogueState, AType> = (state = initialCatalogue, action) => {
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
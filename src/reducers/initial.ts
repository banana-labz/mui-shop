import { CatalogueState, OrderState } from "./types"

import { SortType } from "../utils/sort"

export const initialCatalogue: CatalogueState = {
  items: [],
  loading: true,
  error: null,
  sort: SortType.ALPHABETIC
}

export const initialOrder: OrderState = {
  items: [],
  cost: 0
}
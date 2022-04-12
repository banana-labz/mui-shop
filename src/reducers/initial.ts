import { CatalogueState, RootState } from "./types"

import { SortType } from "../utils/sort"

export const initialCatalogue: CatalogueState = {
  items: [],
  loading: true,
  error: null,
  sort: SortType.ALPHABETIC
}

export const initialRoot: RootState = {
  catalogue: initialCatalogue
  /// to be continued
}
import { ListState, RootState } from "./types"

import { SortType } from "../utils/sort"

export const initialList: ListState = {
  items: [],
  loading: true,
  error: null,
  sort: SortType.ALPHABETIC
}

export const initialRoot: RootState = {
  list: initialList
  /// to be continued
}
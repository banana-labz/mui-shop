import type { ProductData } from "../types"
import { SortType } from "../utils/sort"

export interface ListState {
    items: ProductData[],
    loading: boolean,
    error: Error | null,
    sort: SortType
}

export interface RootState {
    list: ListState,
    // to be continued
}
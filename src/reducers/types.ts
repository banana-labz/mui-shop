import { ProductData } from "../types"
import { SortType } from "../utils/sort"

export interface CatalogueState {
  items: ProductData[],
  loading: boolean,
  error: Error | null,
  sort: SortType
}

export interface OrderState {
  items: ProductData[],
  cost: number
}

export interface RootState {
  catalogue: CatalogueState,  
  order: OrderState
}
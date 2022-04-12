import { ProductData } from "../types"
import { SortType } from "../utils/sort"

export interface CatalogueState {
  items: ProductData[],
  loading: boolean,
  error: Error | null,
  sort: SortType
}

export interface RootState {
  catalogue: CatalogueState,  
  // to be continued
}
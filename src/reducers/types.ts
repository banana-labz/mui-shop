<<<<<<< HEAD
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
=======
import type { SortType, ProductData } from "../types"
import { ModalType } from "../types"

interface ListState {
    items: ProductData[],
    loading: boolean,
    error: Error | null,
}

interface ModalState {
    type: ModalType
    index: number
}

interface RootState {
    list: ListState,
    sort: SortType,
    modal: ModalState
}

export type { ListState, ModalState, RootState }
>>>>>>> e27aefed1ede6b09838ceafc1c4d430ae609a035

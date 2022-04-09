<<<<<<< HEAD
import type { ListState, RootState } from "./types"
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
=======
import type { ListState, ModalState, RootState } from "./types"
import { SortType, ModalType } from "../types"

const initialModal: ModalState = { 
    type: ModalType.NONE,
    index: 0
}

const initialSort = SortType.ALPHABETIC

const initialList: ListState = {
    items: [],
    loading: true,
    error: null
}

const initialRoot: RootState = {
    list: initialList,
    sort: SortType.ALPHABETIC,
    modal: initialModal
}

export {
    initialList,
    initialSort,
    initialModal,
    initialRoot
>>>>>>> e27aefed1ede6b09838ceafc1c4d430ae609a035
}
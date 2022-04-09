<<<<<<< HEAD
import type { ListState, RootState } from "./types"
import type { Reducer } from "redux"
import type { AType } from "../actions"
import { updateList } from "./list"
=======
import type { ListState, ModalState, RootState } from "./types"
import type { Reducer } from "redux"
import type { AType } from "../actions"
import { updateList } from "./list"
import { updateModal } from "./modal"
import { updateSort } from "./sort"
>>>>>>> e27aefed1ede6b09838ceafc1c4d430ae609a035
import { initialRoot } from "./initial"

export const reducer: Reducer<RootState, AType> = (state = initialRoot, action) => ({
    list: updateList(state.list, action),
<<<<<<< HEAD
    // to be continued
})

export type { ListState, RootState }
=======
    sort: updateSort(state.sort, action),
    modal: updateModal(state.modal, action)
})

export type { ListState, ModalState, RootState }
>>>>>>> e27aefed1ede6b09838ceafc1c4d430ae609a035

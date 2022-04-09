import type { ListState, RootState } from "./types"
import type { Reducer } from "redux"
import type { AType } from "../actions"
import { updateList } from "./list"

import { initialRoot } from "./initial"

export const reducer: Reducer<RootState, AType> = (state = initialRoot, action) => ({
    list: updateList(state.list, action),
    // to be continued
})

export type { ListState, RootState }
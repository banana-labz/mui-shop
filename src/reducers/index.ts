import { Reducer } from "redux"

import { ListState, RootState } from "./types"
import { updateList } from "./list"
import { initialRoot } from "./initial"

import { AType } from "../actions"

export const reducer: Reducer<RootState, AType> = (state = initialRoot, action) => ({
  list: updateList(state.list, action),
  // to be continued
})

export type { ListState, RootState }
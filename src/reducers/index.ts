import { Reducer } from "redux"

import { CatalogueState, RootState } from "./types"
import { updateCatalogue } from "./catalogue"
import { initialRoot } from "./initial"

import { AType } from "../actions"

export const reducer: Reducer<RootState, AType> = (state = initialRoot, action) => ({
  catalogue: updateCatalogue(state.catalogue, action),
  // to be continued
})

export type { CatalogueState, RootState }
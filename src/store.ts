import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

import { reducer } from "./reducers"

export const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof store.getState>
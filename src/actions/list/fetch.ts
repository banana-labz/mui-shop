import type { ActionCreator } from "redux"
import type { ProductData } from "../../types"

export enum AFetchType {
    FETCH_ITEMS_REQUEST = "FETCH_ITEMS_REQUEST",
    FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS",
    FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE"
}

interface ARequest {
    type: AFetchType.FETCH_ITEMS_REQUEST
}

interface ASuccess {
    type: AFetchType.FETCH_ITEMS_SUCCESS,
    payload: ProductData[]
}

interface AError {
    type: AFetchType.FETCH_ITEMS_FAILURE,
    payload: Error | null
}

export type AFetch = ARequest | ASuccess | AError

export const itemsRequest: ActionCreator<ARequest> = () => ({
    type: AFetchType.FETCH_ITEMS_REQUEST
})

export const itemsSuccess: ActionCreator<ASuccess> = items => ({
    type: AFetchType.FETCH_ITEMS_SUCCESS,
    payload: items
})

export const itemsError: ActionCreator<AError> = error => ({
    type: AFetchType.FETCH_ITEMS_FAILURE,
    payload: error
})
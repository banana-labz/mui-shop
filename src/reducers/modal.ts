import type { Reducer } from "redux"
import type { ModalState } from "./types"
import { initialModal } from "./initial"
import { AModalType, AType } from "../actions"
import { ModalType } from "../types"

export const updateModal: Reducer<ModalState, AType> = (state = initialModal, action) => {
    switch (action.type) {
        case AModalType.MODAL_ITEM_EDIT: {
            return { type: ModalType.MODAL_ITEM_EDIT, index: action.payload }
        }
        case AModalType.MODAL_ITEM_REMOVE: {
            return { type: ModalType.MODAL_ITEM_REMOVE, index: action.payload }
        }
        case AModalType.MODAL_ITEM_ADD: {
            return { type: ModalType.MODAL_ITEM_ADD, index: 0 }
        }
        case AModalType.MODAL_CLOSE: {
            return { type: ModalType.NONE, index: 0 }
        }
        default:
            return state
    }
}
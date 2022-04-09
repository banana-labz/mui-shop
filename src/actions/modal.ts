import type { ActionCreator } from "redux"

enum AModalType {
    MODAL_ITEM_EDIT = "MODAL_ITEM_EDIT",
    MODAL_ITEM_REMOVE = "MODAL_ITEM_REMOVE",
    MODAL_ITEM_ADD = "MODAL_ITEM_ADD",
    MODAL_CLOSE = "MODAL_CLOSE"
}

interface AModalEdit {
    type: AModalType.MODAL_ITEM_EDIT,
    payload: number
}

interface AModalRemove {
    type: AModalType.MODAL_ITEM_REMOVE,
    payload: number
}

interface AModalAdd {
    type: AModalType.MODAL_ITEM_ADD
}

interface AModalClose {
    type: AModalType.MODAL_CLOSE
}

const modalEdit: ActionCreator<AModalEdit> = number => ({
    type: AModalType.MODAL_ITEM_EDIT,
    payload: number
})

const modalRemove: ActionCreator<AModalRemove> = number => ({
    type: AModalType.MODAL_ITEM_REMOVE,
    payload: number
})

const modalAdd: ActionCreator<AModalAdd> = number => ({
    type: AModalType.MODAL_ITEM_ADD,
    payload: number
})

const modalClose: ActionCreator<AModalClose> = () => ({
    type: AModalType.MODAL_CLOSE
})

type AModal = AModalAdd | AModalRemove | AModalEdit | AModalClose

export type { AModal }
export { AModalType }
export { modalEdit, modalRemove, modalAdd, modalClose }
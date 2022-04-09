import type { FC } from "react"
import type { ModalState, RootState } from "../reducers"
import { Fragment } from "react"
import { ModalType } from "../types"
import { useSelector } from "react-redux"
import { ItemAdd } from "./item-add"
import { ItemRemove } from "./item-remove"
import { ItemEdit } from "./item-edit"

const EmptyComponent: FC<any> = () => (
    <Fragment></Fragment>
)

const WINDOWS = {
    [ModalType.MODAL_ITEM_ADD]: ItemAdd,
    [ModalType.MODAL_ITEM_REMOVE]: ItemRemove,
    [ModalType.MODAL_ITEM_EDIT]: ItemEdit,
    [ModalType.NONE]: EmptyComponent
}

export const Modal: FC<{}> = () => {
    const modal = useSelector<RootState, ModalState>(state => state.modal)
    const Component = WINDOWS[modal.type]
    return <Component {...modal}/>
}
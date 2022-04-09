import type { FC } from "react"
import type { ListState, ModalState, RootState } from "../reducers"
import type { ProductData } from "../types"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemsEdit, modalClose } from "../actions"

export const ItemEdit: FC<ModalState> = ({ index }) => {
    const { items } = useSelector<RootState, ListState>(state => state.list)
    const [item, setItem] = useState<ProductData>(items[index])
    const dispatch = useDispatch()

    const close = () => dispatch(modalClose())

    const onSave = () => {
        dispatch(itemsEdit({ index, item }))
        close()
    }

    return (
        <div className="modal-background" onClick={close}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>item edit</h2>
                <h5>inputs should be here</h5>
                <button onClick={onSave}>save</button>
                <button onClick={close}>cancel</button>
            </div>
        </div>
    )
}
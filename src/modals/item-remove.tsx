import type { FC } from "react"
import type { ModalState } from "../reducers"
import { useDispatch } from "react-redux"
import { itemsRemove, modalClose } from "../actions"

export const ItemRemove: FC<ModalState> = ({ index }) => {
    const dispatch = useDispatch()

    const close = () => dispatch(modalClose())

    const onDelete = () => {
        dispatch(itemsRemove(index))
        close()
    }

    return (
        <div className="modal-background" onClick={close}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>delete this item?</h2>
                <button onClick={onDelete}>yes</button>
                <button onClick={close}>no</button>
            </div>
        </div>
    )
}
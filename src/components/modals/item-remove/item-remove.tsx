import "./item-remove.css"
import type { FC } from "react"
import type { ModalProps } from "../../with-modal"
import { withModal } from "../../with-modal"

interface ItemRemoveProps extends ModalProps {
    id: string,
    remove: (id: string) => void
}

export const ItemRemove: FC<ItemRemoveProps> = withModal(({ id, close, remove }) => (
    <div className="remove-form">
        <h3 className="remove-form__header">You sure you want to delete this one?</h3>
        <div>
            <button className="remove-form__option" onClick={close}>Cancel</button>
            <button className="remove-form__option" onClick={() => remove(id)}>Accept</button>
        </div>
    </div>
))
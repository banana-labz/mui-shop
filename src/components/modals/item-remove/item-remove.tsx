import "./item-remove.css"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router"

import { ModalProps, withModal } from "../../with-modal"
import { itemsRemove } from "../../../actions"

export const ItemRemove = withModal(() => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const handleRemove = () => {
        dispatch(itemsRemove(id))
    }

    return (
        <div className="remove-form">
            <h3 className="remove-form__header">You sure you want to delete this one?</h3>
            <div>
                <button className="remove-form__option">Cancel</button>
                <button className="remove-form__option" onClick={handleRemove}>Accept</button>
            </div>
        </div>
    )
})
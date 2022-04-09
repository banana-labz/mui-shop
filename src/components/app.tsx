import { useDispatch } from "react-redux"
import { List } from "./list"
import { modalAdd } from "../actions"
import { Modal } from "../modals"

export const App = () => {
    const dispatch = useDispatch()
    const onAdd = () => dispatch(modalAdd())

    return (
        <div>
            <Modal/>
            <List/>
            <button onClick={onAdd}>add</button>
        </div>
    )
}
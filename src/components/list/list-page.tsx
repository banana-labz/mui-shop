import { useState } from "react"
import { useDispatch } from "react-redux"
import { itemsRemove, itemsAdd } from "../../actions"
import { ProductData } from "../../types"
import { ItemRemove, ItemAdd } from "../modals"
import { List } from "./list"

export const ListPage = () => {
    const dispatch = useDispatch()

    const [addState, setAddState] = useState<boolean>(false)
    
    const [removeState, setRemoveState] = useState<boolean>(false)
    const [removedId, setRemovedId] = useState<string>("")

    const openAdd = () => setAddState(true)
    const closeAdd = () => setAddState(false)
    const addItem = (data: ProductData) => {
        dispatch(itemsAdd(data))
        closeAdd()
    }

    const closeRemove = () => setRemoveState(false)
    const openRemove = (id: string) => {
        setRemoveState(true)
        setRemovedId(id)
    }
    const removeItem = (id: string) => {
        dispatch(itemsRemove(id))
        closeRemove()
    }

    return (
        <div>
            {addState && <ItemAdd close={closeAdd} add={addItem}/>}
            {removeState && <ItemRemove id={removedId} close={closeRemove} remove={removeItem}/>}
            <List openRemove={openRemove} openAdd={openAdd}/>
        </div>
    )
}
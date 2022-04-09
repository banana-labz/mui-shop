import type { FC } from "react"
import type { ListState, RootState } from "../reducers"
import type { ProductData } from "../types"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemsAdd, modalClose } from "../actions"
import { ModalState } from "../reducers"

type CreateProduct = (items: ProductData[]) => ProductData
const createProduct: CreateProduct = items => ({
    id: items.length + 1,
    imageUrl: "image-url",
    name: "name",
    count: 0,
    size: {
        width: 0,
        height: 0
    },
    weight: "0g",
    comments: []
})

export const ItemAdd: FC<ModalState> = () => {
    const { items } = useSelector<RootState, ListState>(state => state.list)
    const [item, setItem] = useState<ProductData>(createProduct(items))
    const dispatch = useDispatch()

    const close = () => dispatch(modalClose())

    const onSave = () => {
        dispatch(itemsAdd(item))
        close()
    }

    return (
        <div className="modal-background" onClick={close}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>new item</h2>
                <h5>inputs should be here</h5>
                <button onClick={onSave}>save</button>
                <button onClick={close}>cancel</button>
            </div>
        </div>
    )
}
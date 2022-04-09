import "./item-add.css"
import type { FC } from "react"
import type { ModalProps } from "../../with-modal"
import { useState } from "react"
import { withModal } from "../../with-modal"
import { ProductData } from "../../../types"

const initialData: ProductData = {
    id: Math.random().toString(),
    imageUrl: "",
    name: "name",
    count: 0,
    size: {
        width: 0,
        height: 0
    },
    weight: "0g",
    comments: []
}

interface ItemAddProps extends ModalProps {
    add: (data: ProductData) => void
}

export const ItemAdd: FC<ItemAddProps> = withModal(({ close, add }) => {
    const [data, setData] = useState<ProductData>(initialData)

    return (
        <form className="add-form">
            <h4 className="add-form__header">New item</h4>
            <input
                className="add-form__input"
                type="text" 
                placeholder="name" 
                value={data.name}
                onChange={e => setData({...data, name: e.target.value})}
            />
            <div>
                <button className="add-form__option" onClick={close}>Cancel</button>
                <button className="add-form__option" onClick={() => add(data)}>Save</button>
            </div>
        </form>
    )
})
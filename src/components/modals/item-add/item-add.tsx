import "./item-add.css"
import type { FC } from "react"
import type { ModalProps } from "../../with-modal"
import { useState } from "react"
import { withModal } from "../../with-modal"
import { ProductData } from "../../../types"

export const ItemAdd = withModal(() => {
    //const [data, setData] = useState<ProductData>()

    return (
        <form className="add-form">
            <h4 className="add-form__header">New item</h4>
            {/*<input
                className="add-form__input"
                type="text" 
                placeholder="name" 
                value={data.name}
                onChange={e => setData({...data, name: e.target.value})}
            />*/}
            <div>
                <button className="add-form__option">Cancel</button>
                <button className="add-form__option">Save</button>
            </div>
        </form>
    )
})
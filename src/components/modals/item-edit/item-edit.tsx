import type { FC } from "react"

export const ItemEdit: FC<{ index: string }> = ({ index }) => {
    return (
        <div className="modal">
            <h2>Item edit</h2>
            <h5>Inputs should be here</h5>
            <button>Save</button>
            <button>Cancel</button>
        </div>
    )
}
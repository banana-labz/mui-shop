import type { FC } from "react"
import type { ProductData } from "../types"
import type { ListState, RootState } from "../reducers"
import { useState } from "react"
import { Comment } from "./comment"
import { useDispatch, useSelector } from "react-redux"
import { modalRemove, modalEdit } from "../actions"

export const Item: FC<ProductData> = ({ id, imageUrl, name, count, size: { width, height }, weight, comments }) => {
    const [view, setView] = useState<boolean>(false)

    const { items } = useSelector<RootState, ListState>(state => state.list)
    const dispatch = useDispatch()

    const onDetails = () => setView(v => !v)
    const onRemove = () => dispatch(modalRemove(id))
    const onEdit = () => dispatch(modalEdit(id))

    return (
        <div>
            <h2>{name}</h2>
            <img 
                style={{width: "256px", height: "256px"}}
                alt={`${name}-icon`}
                src={imageUrl}
            />
            {view && (
                <div className="item-details">
                    <h4>Count: {count}</h4>
                    <h4>Size: {width}; {height}</h4>
                    <h4>Weight: {weight}</h4>
                    <h4>Comments:</h4>
                    <ul>{
                        comments.map((comment, i) => 
                            <Comment key={i} {...comment}/>
                        )
                    }</ul>
                </div>
            )}
            <button onClick={onEdit}>edit</button>
            <button onClick={onRemove}>remove</button>
            <button onClick={onDetails}>details</button>
        </div>
    )
}
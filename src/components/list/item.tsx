import "./item.css"
import type { FC } from "react"
import type { ProductData } from "../../types"

interface ItemProps extends ProductData {
    onRemove: () => void
}

export const Item: FC<ItemProps> = ({ name, imageUrl, onRemove }) => (
    <div className="item">
        <h4 className="item-header">{name}</h4>
        <img 
            className="item-icon"
            alt={`${name}-icon`}
            src={imageUrl}
        />
        <button className="item-remove" onClick={onRemove}>DELETE</button>
    </div>
)

/*
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
*/

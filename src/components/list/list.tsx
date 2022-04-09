import "./list.css"
import type { FC, ChangeEvent } from "react"
import type { ListState, RootState } from "../../reducers"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchItems, itemsSort, itemsSortChange } from "../../actions"
import { SortOptions } from "../../utils/sort"
import { Item } from "./item"

interface ListProps {
    openAdd: () => void
    openRemove: (id: string) => void
}

export const List: FC<ListProps> = ({ openAdd, openRemove }) => {
    const { items, loading, error, sort } = useSelector<RootState, ListState>(state => state.list)
    const dispatch = useDispatch()
    
    useEffect(() => fetchItems(dispatch), [dispatch])
    useEffect(() => {
        dispatch(itemsSort(sort))
    }, [dispatch, sort])

    const onChangeSort = (event : ChangeEvent<HTMLSelectElement>) => {
        dispatch(itemsSortChange(event.target.value))
    }

    if (loading) {
        return <div>LOADING</div>
    }
    if (error) {
        return <div>ERROR</div>
    }
    return (
        <div className="list">
            <select
                className="list-sort"
                name="sort-methods"
                value={sort}
                onChange={onChangeSort}
            >{
                Object.keys(SortOptions).map((key, i) => 
                    <option key={i} value={key}>{key}</option>
                )
            }</select>
            <button className="list-add" onClick={openAdd}>Add new</button>
            <ul className="list-container">{
                items.map(item => (
                    <Item {...item} key={item.id} onRemove={() => openRemove(item.id)}/>
                ))
            }</ul>
        </div>
    )
}
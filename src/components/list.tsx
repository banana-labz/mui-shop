import type { ListState, RootState } from "../reducers"
import type { ChangeEvent } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchItems, itemsSort, sortChange } from "../actions"
import { SortType } from "../types"
import { sortOptions } from "../utils/sort-options"
import { Item } from "./item"

export const List = () => {
    const { items, loading, error } = useSelector<RootState, ListState>(state => state.list)
    const sort = useSelector<RootState, SortType>(state => state.sort)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchItems(dispatch)
    }, [dispatch])

    useEffect(() => {
        dispatch(itemsSort(sort))
    }, [dispatch, sort])

    const onChangeSort = (event : ChangeEvent<HTMLSelectElement>) => dispatch(sortChange(event.target.value))

    if (loading) {
        return <div>LOADING</div>
    }
    if (error) {
        return <div>ERROR</div>
    }

    return (
        <div>
            <select name="sort-methods" value={sort} onChange={onChangeSort}>{
                Object.keys(sortOptions).map((key, i) => 
                    <option key={i} value={key}>{key}</option>
                )
            }</select>
            <ul>{
                items.map((item, i) => (
                    <Item key={item.id} {...item} id={i}/>
                ))
            }</ul>
        </div>
    )
}
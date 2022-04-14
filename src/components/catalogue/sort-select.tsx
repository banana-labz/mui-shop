import React from "react"

import { useEffect } from "react"
import { useActions } from "react-redux-actions-hook"
import { Select, SelectChangeEvent, MenuItem } from "@mui/material"

import { itemsSort, itemsSortChange } from "../../actions"
import { SortOptions } from "../../utils/sort"
import { useCatalogue } from "../../hooks"

export const SortSelect = () => {
  const { sort } = useCatalogue()
  const sortCatalogue = useActions(itemsSort)
  const changeSortType = useActions(itemsSortChange)

  useEffect(() => {
    sortCatalogue(sort)
  }, [sort])

  const handleChangeSort = (event: SelectChangeEvent) => {
    changeSortType(event.target.value)
  }

  return (
    <Select value={sort} onChange={handleChangeSort}>{
      Object.keys(SortOptions).map((key, i) =>
        <MenuItem
          key={i}
          value={key}
          children={key}
        />
      )
    }</Select>
  )
}
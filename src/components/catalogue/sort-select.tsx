import React from "react"

import { useState, useEffect } from "react"
import { useActions } from "react-redux-actions-hook"
import { Select, SelectChangeEvent, MenuItem } from "@mui/material"

import { itemsSort } from "../../actions"
import { SortOptions, SortType } from "../../utils/sort"

export const SortSelect = () => {
  const [sortType, setSortType] = useState<string>(SortType.ALPHABETIC as string)
  const sortCatalogue = useActions(itemsSort)

  useEffect(() => {
    sortCatalogue(sortType)
  }, [sortType])

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSortType(event.target.value)
  }

  return (
    <Select value={sortType} onChange={handleChangeSort}>{
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
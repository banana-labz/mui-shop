import React, { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import { Select, SelectChangeEvent, MenuItem } from "@mui/material"

import { RootState } from "../../reducers"
import { itemsSort, itemsSortChange } from "../../actions"
import { SortOptions } from "../../utils/sort"

const SortSelectLogic = ({ sort, itemsSort, itemsSortChange }: InjectedProps) => {
  useEffect(() => {
    itemsSort(sort)
  }, [sort])

  const handleChangeSort = (event: SelectChangeEvent) => {
    itemsSortChange(event.target.value)
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

const connector = connect(
  ({ catalogue: { sort } }: RootState) => ({ sort }),
  { itemsSort, itemsSortChange }
)

type InjectedProps = ConnectedProps<typeof connector>

export const SortSelect = connector(SortSelectLogic)
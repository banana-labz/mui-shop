import React, { useState } from "react"
import { Box } from "@mui/material"

import { SortSelect} from "./sort-select"
import { ItemsView } from "./items-view"
import { Search } from "./search"

export const Catalogue = () => {
  const [searchPattern, setSearchPattern] = useState<string>("")

  return (
    <Box sx={style.catalogue}>
      <Box sx={style.options}>
        <Search
          pattern={searchPattern}
          onChange={setSearchPattern}
        />
        <SortSelect/>
      </Box>
      <ItemsView pattern={searchPattern}/>
    </Box>
  )
}

const style = {
  catalogue: {
    padding: "20px"
  },
  options: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",

    marginBottom: "20px"
  }
}
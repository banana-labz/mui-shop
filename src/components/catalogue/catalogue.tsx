import { Box } from "@mui/material"

import { SortSelect} from "./sort-select"
import { ItemsView } from "./items-view"

export const Catalogue = () => {
  return (
    <Box sx={style.catalogue}>
      <Box sx={style.options}>
        <SortSelect/>
      </Box>
      <ItemsView/>
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
    height: "30px",
  
    marginBottom: "20px"
  },
  container: {
  }
}
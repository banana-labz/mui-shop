import { Grid, Box, List, CircularProgress } from "@mui/material"
import { Button, Select, SelectChangeEvent, MenuItem, InputLabel } from "@mui/material"

import { ChangeEvent, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Item } from "./item"

import { ListState, RootState } from "../../reducers"
import { fetchItems, itemsSort, itemsSortChange } from "../../actions"
import { SortOptions } from "../../utils/sort"

export const Catalogue = () => {
  const { items, loading, error, sort } = useSelector<RootState, ListState>(state => state.list)
    
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => fetchItems(dispatch), [dispatch])
  useEffect(() => {
    dispatch(itemsSort(sort))
  }, [dispatch, sort])

  const handleChangeSort = (event: SelectChangeEvent) => {
    dispatch(itemsSortChange(event.target.value))
  }

  const handleConfirmAdd = () => {
    navigate("./add")
  }
    
  const handleConfirmRemove = (id: string) => {
    navigate(`./remove/${id}`)
  }

    if (loading) {
        return <CircularProgress/>
    }
    if (error) {
        return <div>ERROR</div>
    }
    return (
      <Box padding="20px">
        <Box sx={optionsContainerStyle}>
          <Select value={sort} onChange={handleChangeSort}>
            {Object.keys(SortOptions).map((key, i) => <MenuItem key={i} value={key} children={key}/>)}
          </Select>
          <Button variant="contained" color="success" onClick={handleConfirmAdd}>Add new</Button>
        </Box>
        <Grid container spacing={2}>
          {items.map(item => <Item key={item.id} {...item}/>)}
        </Grid>
      </Box>
    )
}

const optionsContainerStyle = {
  display: "flex",
  flexDirection: "row",
  
  gap: "10px",
  height: "30px",

  marginBottom: "20px"
}
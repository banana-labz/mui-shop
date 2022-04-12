import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { bindActionCreators } from "redux"
import { connect, ConnectedProps } from "react-redux"
import { Grid, CircularProgress } from "@mui/material"

import { Item } from "./item"

import { RootState } from "../../reducers"
import { fetchItems } from "../../actions"

export const ItemsViewLogic = ({ items, loading, error, fetchItems }: ItemsViewLogicProps) => {  
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  if (loading) {
    return <CircularProgress/>
  }

  if (error) {
    navigate("/error")
  }
  return (
    <Grid container spacing={2}>{
      items.map(item => (
        <Grid item xs={12} md={3} key={item.id}>
          <Item {...item}/>
        </Grid>
      ))
    }</Grid>
  )
}

const connector = connect(
  ({ catalogue: { items, loading, error } }: RootState) => ({
    items, loading, error
  }),
  dispatch => (
    bindActionCreators({ fetchItems }, dispatch)
  )
)

type ItemsViewLogicProps = ConnectedProps<typeof connector>

export const ItemsView = connector(ItemsViewLogic)
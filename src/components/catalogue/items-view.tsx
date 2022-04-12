import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { connect, ConnectedProps } from "react-redux"
import { Grid, CircularProgress } from "@mui/material"

import { Item } from "./item"

import { RootState } from "../../reducers"
import { fetchItems } from "../../actions"
import { ProductData } from "../../types"

const filterByPattern = (items: ProductData[], pattern: string): ProductData[] => {
  const lcasePattern = pattern.toLowerCase()
  const copy = [...items]
  return copy.filter(({ name }) => (
    lcasePattern.length === 0 || name.toLowerCase().search(lcasePattern) !== -1
  ))
}

interface ItemsViewProps extends InjectedProps {
  pattern: string
}

export const ItemsViewLogic = ({ items, loading, error, pattern, fetchItems }: ItemsViewProps) => {  
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  if (loading) {
    return <CircularProgress/>
  }

  if (error) {
    navigate("../error")
  }

  return (
    <Grid container spacing={2}>{
      filterByPattern(items, pattern).map(item => (
        <Grid item xs={12} md={3} key={item.id}>
          <Item {...item}/>
        </Grid>
      ))
    }</Grid>
  )
}

const connector = connect(
  ({ catalogue: { items, loading, error } }: RootState) => ({ items, loading, error }),
  { fetchItems }
)

type InjectedProps = ConnectedProps<typeof connector>

export const ItemsView = connector(ItemsViewLogic)
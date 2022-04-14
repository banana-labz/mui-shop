import React from "react"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useActions } from "react-redux-actions-hook"
import { Grid, CircularProgress, Box } from "@mui/material"

import { Item } from "./item"

import { RootState } from "../../reducers"
import { fetchItems } from "../../actions"
import { ProductData } from "../../types"
import { useCatalogue } from "../../hooks"

const filterByPattern = (items: ProductData[], pattern: string): ProductData[] => {
  const lcasePattern = pattern.toLowerCase()
  const copy = [...items]
  return copy.filter(({ name }) => (
    lcasePattern.length === 0 || name.toLowerCase().search(lcasePattern) !== -1
  ))
}

interface ItemsViewProps {
  pattern: string
}

export const ItemsView = ({ pattern }: ItemsViewProps) => {
  const { items, loading, error } = useCatalogue()
  const fetchCatalogue = useActions(fetchItems)
  const navigate = useNavigate()

  useEffect(() => {
    fetchCatalogue()
  }, [])
  
  if (error) {
    navigate("../error")
  }

  if (loading) {
    return (
      <Box sx={{
        height: "calc(100% - 56px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <CircularProgress/>
      </Box>
    )
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
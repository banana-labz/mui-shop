import React from "react"

import { useNavigate } from "react-router"
import { useActions } from "react-redux-actions-hook"
import { toast as notify } from "material-react-toastify"
import { Button, Typography } from "@mui/material"
import { Card, CardMedia, CardContent, CardActions } from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { ProductData } from "../../reducers"
import { orderAdd } from "../../actions"


export const Item = (props: ProductData) => {
  const { id, imageUrl, name, price } = props

  const navigate = useNavigate()
  const addItem = useActions(orderAdd)

  const handleClickMedia = () => {
    navigate(`../details/${id}`)
  }
  
  const handleClickBuy = () => {
    // not the best solution but i don't want to rewrite it
    addItem(props)
    notify.success(`Added "${name}" to order`)
  }

  return (
    <Card sx={style.card}>
      <CardMedia
        image={imageUrl}
        component="img"
        sx={style.media}
        onClick={handleClickMedia}
      />
      
      <CardContent sx={style.content}>  
        <Typography>{name}</Typography>
        <Typography variant="h5">${price}</Typography>
      </CardContent>
      
      <CardActions sx={style.actions}>
        <Button 
          startIcon={<ShoppingCartIcon/>}
          color="info"
          variant="outlined"
          sx={style.button}
          children="buy"
          onClick={handleClickBuy}
        />
      </CardActions>
    </Card>
  )
}

const style = {
  card: {
    display: "grid",
    gridTemplateRows: "5fr 2fr 1fr",
    gridGap: "0",
    
    height: "100%",
  
    boxShadow: "0px 2px 8px rgba(24, 85, 130, 0.1)",
    padding: "10px",
  },
  media: {
    justifySelf: "center",
    objectFit: "scale-down",
    height: "256px",
    width: "256px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
  },
  actions: {
    padding: "10px"
  },
  button: {
    background: "#FFF",
    border: "1px solid"
  }
}
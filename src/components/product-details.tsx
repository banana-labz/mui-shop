import React from "react"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { Button, Rating, Typography } from "@mui/material"
import { Card, CardMedia, CardContent, CardActions } from "@mui/material"

import api from "../services/shop-service"

type ProductDetailsProps = {
  id: string
}

export const ProductDetails = ({ id }: ProductDetailsProps) => {
  const [image, setImage] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [price, setPrice] = useState<number>(0)
  const [rating, setRating] = useState<number>(0)
  
  const navigate = useNavigate()

  useEffect(() => {
    api.getItem(id)
      .then(({ imageUrl, name, price, rating }) => {
        setImage(imageUrl)
        setName(name)
        setPrice(price)
        setRating(rating)
      })
      .catch(() => navigate("/"))
  }, [])

  
  const handleClickMedia = () => {
    navigate(`../catalogue`)
  }

  return (
    <Card sx={style.card}>
      <CardMedia image={image} component="img" sx={style.media}/>
      
      <CardContent sx={style.content}>  
        <Typography>{name}</Typography>
        <Typography variant="h5">${price}</Typography>
        <Rating value={rating} max={10} disabled/>
      </CardContent>
      
      <CardActions>
        <Button
          color="info"
          variant="outlined"
          children="back to catalogue"
          onClick={handleClickMedia}
        />
      </CardActions>
    </Card>
  )
}

const style = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px"
  },
  media: {
    objectFit: "scale-down",
    borderRadius: "10px",
    height: "400px",
    width: "400px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
}
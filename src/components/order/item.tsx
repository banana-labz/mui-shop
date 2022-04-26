import React from "react"

import { useNavigate } from "react-router"
import { toast as notify } from "material-react-toastify"
import { Button, Typography, ListItem, IconButton } from "@mui/material"

import DeleteIcon from "@mui/icons-material/Delete"

import { OrderData } from "../../reducers"

interface ItemProps extends OrderData {
  onRemove: () => void
}

export const Item = ({ itemId, imageUrl, name, price, onRemove }: ItemProps) => {
  const navigate = useNavigate()

  const handleClickRemove = () => {
    notify.warning(`Removed "${name}" from order`)
    onRemove()
  }

  const handleClickDetails = () => {
    navigate(`../details/${itemId}`)
  }

  return (
    <ListItem sx={style.item}>
      <Button variant="text" onClick={handleClickDetails} sx={style.button}>
        {name}
      </Button>
      <Typography variant="h5">
        ${price}
      </Typography>
      <IconButton color="error" onClick={handleClickRemove}>
        <DeleteIcon/>
      </IconButton>
    </ListItem>
  )
}

const style = {
  item: {
    display: "grid",
    gridTemplateColumns: "6fr 1fr 1fr",
    gridGap: "10px",
  },
  button: {
    variant: "text",
    textTransform: "none",
    justifyContent: "left",
    textAlign: "left"
  }
}
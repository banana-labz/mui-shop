import React from "react"
import { useNavigate } from "react-router"
import { Button, Typography, ListItem, IconButton } from "@mui/material"
import { toast as notify } from "material-react-toastify"

import DeleteIcon from "@mui/icons-material/Delete"

import { OrderData } from "../../types"

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
    <ListItem sx={itemStyle}>
      <Button variant="text" onClick={handleClickDetails}>
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

const itemStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "10px"
}
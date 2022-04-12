import { Button, Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { ProductData } from "../../types"

export const Item = ({ imageUrl, name, price }: ProductData) => (
  <Card sx={style.card}>
    <CardMedia image={imageUrl} component="img" sx={style.media}/>
    <CardContent sx={style.content}>  
      <Typography>{name}</Typography>
      <Typography variant="h5">${price}</Typography>
    </CardContent>
    <CardActions sx={style.actions}>
      <Button startIcon={<ShoppingCartIcon/>} color="info" variant="outlined" sx={style.button}>
        buy
      </Button>

    </CardActions>
  </Card>
)

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


/*
import DescriptionIcon from "@mui/icons-material/Description"
import DeleteIcon from "@mui/icons-material/Delete"
<Button startIcon={<DeleteIcon/>} color="error" variant="outlined" sx={style.button}>
  delete
</Button>
<Button startIcon={<DescriptionIcon/>} color="info" variant="outlined" sx={style.button}>
  details
</Button>
*/
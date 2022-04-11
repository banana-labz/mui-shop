import { Grid, Box, Button, Typography } from "@mui/material"
import { Card, CardMedia, CardContent, CardActions } from "@mui/material"

import DeleteIcon from "@mui/icons-material/Delete"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import DescriptionIcon from "@mui/icons-material/Description"

import { ProductData } from "../../types"

export const Item = ({ imageUrl, name, price }: ProductData) => (
  <Grid item xs={12} md={3}>
    <Card sx={itemContainerStyle}>
      <CardMedia image={imageUrl} component="img" sx={{ objectFit: "scale-down" }} width="256" height="256"/>
      
      <CardContent>
        <Typography>{name}</Typography>
        <Typography variant="h5">${price}</Typography>
      </CardContent>
      <CardActions sx={buttonContainerStyle}>
        {/*<Button startIcon={<DeleteIcon/>} color="error" variant="outlined" sx={buttonStyle}>
          delete
        </Button>*/}
        <Button startIcon={<ShoppingCartIcon/>} color="info" variant="outlined" sx={buttonStyle}>
          buy
        </Button>
        {/*<Button startIcon={<DescriptionIcon/>} color="info" variant="outlined" sx={buttonStyle}>
          details
        </Button>*/}
      </CardActions>
    </Card>
  </Grid>
)

const buttonStyle = {
  background: "#FFF",
  border: "1px solid"
}

const buttonContainerStyle = {
  display: "flex",
  // justifyContent: "center",
  flexDirection: "row",
  gap: "20px",

  // marginTop: "20px"
}
const itemContainerStyle = {
  display: "flex",
  // justifyContent: "center",
  flexDirection: "column",

  height: "100%",

  boxShadow: "0px 2px 8px rgba(24, 85, 130, 0.1)",
  padding: "10px",
  // textAlign: "center",
}
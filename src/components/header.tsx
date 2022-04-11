import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography component="span" sx={{ flexGrow: 1 }}>
        MUI Shop
      </Typography>
      <IconButton color="inherit">
        <Badge color="secondary" badgeContent={1}>
          <ShoppingCartIcon/>
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
)
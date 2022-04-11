import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import LoginIcon from "@mui/icons-material/Login"

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography component="span" sx={{ flexGrow: 1 }}>
        MUI Shop
      </Typography>
      <IconButton color="inherit">
        <LoginIcon/>
      </IconButton>
      <IconButton color="inherit">
        <Badge color="secondary" badgeContent={1}>
          <ShoppingCartIcon/>
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
)
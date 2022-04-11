import "../assets/fonts/index.css"

import { withStyles } from "@mui/styles"

import { Theme } from "./theme"

const styles = (theme: Theme) => ({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      border: 0,
      boxSizing: "border-box",
      listStyle: "none",
      fontFamily: "Ubuntu, sans-serif",
    },
    a: {
      textDecoration: "none",
      color: "inherit",
    },
    div: {
      borderRadius: theme.shape.borderRadius,
    },
    img: {
      background: "#FFFFFF"
    }
  }
})

export const CssBaseline = withStyles(styles)(() => null)
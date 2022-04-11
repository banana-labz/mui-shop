import { TypographyOptions } from "@mui/material/styles/createTypography"

export const typography: TypographyOptions = {
  fontFamily: "Ubuntu, sans-serif",

  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  h1: {
    textTransform: "uppercase",
    color: "inherit",

    fontWeight: 700,
    lineHeight: "3.75rem",
    fontSize: "3.125rem",

    "@media (max-width: 768px)": {
      lineHeight: "3rem",
      fontSize: "2.5rem",
    },
  },
  h5: {
    color: "inherit",
    lineHeight: 1.5,
    fontWeight: 700,
    fontSize: "1.125rem",
  },
}

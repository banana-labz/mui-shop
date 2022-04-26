import React from "react"

import { Button, ListItem, Typography } from "@mui/material"

import CleaningServicesIcon from "@mui/icons-material/CleaningServices"

interface SummaryProps {
  cost: number,
  onClear: () => void
}

export const Summary = ({ cost, onClear }: SummaryProps) => {
  return (
    <>
      <ListItem sx={{ gap: "10px" }}>
        <Typography>Total cost:</Typography>
        <Typography>${Math.ceil(cost)}</Typography>
      </ListItem>
      <ListItem>
        <Button
          startIcon={<CleaningServicesIcon/>}
          variant="outlined"
          onClick={onClear}
          children="Clear"
        />
      </ListItem>
    </>
  )
}
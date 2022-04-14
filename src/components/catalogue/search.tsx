import React from "react"
import { ChangeEvent } from "react"
import { TextField } from "@mui/material"

interface SearchProps {
  pattern: string,
  onChange: (value: string) => void
}

export const Search = ({ pattern, onChange }: SearchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  
  return (
    <TextField
      label="search"
      type="text"
      value={pattern}
      onChange={handleChange}
    />
  )
}
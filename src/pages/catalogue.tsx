import React from "react"
import { Route, Routes } from "react-router"

import { Catalogue } from "../components/catalogue"

export const CataloguePage = () => {
  return (
    <>
      <Catalogue/>
      <Routes>
        <Route path="add" element={<></>}/>
        <Route path="remove/:id" element={<></>}/>
      </Routes>
    </>
  )
}
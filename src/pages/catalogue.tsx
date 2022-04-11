import { Route, Routes } from "react-router"

import { ItemRemove, ItemAdd } from "../components/modals"
import { Catalogue } from "../components/catalogue"

export const CataloguePage = () => {
  return (
    <>
      <Catalogue/>
      <Routes>
        <Route path="add" element={<ItemAdd/>}/>
        <Route path="remove/:id" element={<ItemRemove/>}/>
      </Routes>
    </>
  )
}
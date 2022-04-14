import React from "react"

import "material-react-toastify/dist/ReactToastify.css"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from "material-react-toastify"

import { Header } from "./header"
import { Layout } from "./layout"

import { ThemeProvider } from "../styles"
import { CataloguePage } from "../pages/catalogue"
import { ErrorPage } from "../pages/error"
import { DetailsPage } from "../pages/details"
import { Order } from "./order"

import { RemoveItemModal } from "./modals"
// import { Button } from "@mui/material"

export const App = () => {
  const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false)
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState<boolean>(false)

  return (
    <ThemeProvider>
      <Router>
        <Header openOrder={() => setIsOrderOpen(true)}/>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/catalogue"/>}/>
            <Route path="catalogue/*" element={<CataloguePage/>}/>
            <Route path="details/:id" element={<DetailsPage/>}/>
            <Route path="error" element={<ErrorPage/>}/>
          </Routes>
        </Layout>
        <Order isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)}/>
        <RemoveItemModal isOpen={isRemoveModalOpen} onClose={() => setIsRemoveModalOpen(false)}/>
        {/*<Button onClick={() => setIsRemoveModalOpen(true)}>Open Remove modal</Button>*/}
      </Router>
      <ToastContainer/>
    </ThemeProvider>
  )
}
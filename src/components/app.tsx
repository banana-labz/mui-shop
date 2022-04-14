import React from "react"

import "material-react-toastify/dist/ReactToastify.css"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from "material-react-toastify"

import { Layout } from "./layout"

import { ThemeProvider } from "../styles"
import { CataloguePage } from "../pages/catalogue"
import { ErrorPage } from "../pages/error"
import { DetailsPage } from "../pages/details"

export const App = () => {
  
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/catalogue"/>}/>
            <Route path="catalogue/*" element={<CataloguePage/>}/>
            <Route path="details/:id" element={<DetailsPage/>}/>
            <Route path="error" element={<ErrorPage/>}/>
          </Routes>
        </Layout>
      </Router>
      <ToastContainer/>
    </ThemeProvider>
  )
}

/*
import { Button } from "@mui/material"
import { RemoveItemModal } from "./modals"
  
const [isRemoveModalOpen, setIsRemoveModalOpen] = useState<boolean>(false)
const handleCloseModal = () => {
  setIsRemoveModalOpen(false)
}

<RemoveItemModal isOpen={isRemoveModalOpen} onClose={handleCloseModal}/>
<Button onClick={() => setIsRemoveModalOpen(true)}>Remove</Button>
*/
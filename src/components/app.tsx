import "material-react-toastify/dist/ReactToastify.css"

import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from "material-react-toastify"

import { Header } from "./header"

import { ThemeProvider } from "../styles"
import { CataloguePage } from "../pages/catalogue"
import { ErrorPage } from "../pages/error"
import { DetailsPage } from "../pages/details"
import { Order } from "./order"

export const App = () => {
  const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false)
  
  return (
    <ThemeProvider>
      <Header openOrder={() => setIsOrderOpen(true)}/>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/catalogue"/>}/>
          <Route path="catalogue/*" element={<CataloguePage/>}/>
          <Route path="details/:id" element={<DetailsPage/>}/>
          <Route path="error" element={<ErrorPage/>}/>
        </Routes>
      </Router>
      <Order isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)}/>
      <ToastContainer/>
    </ThemeProvider>
  )
}
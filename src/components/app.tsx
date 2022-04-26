import React from "react"

import "material-react-toastify/dist/ReactToastify.css"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from "material-react-toastify"

import { Layout } from "./layout"

import { ThemeProvider } from "../styles"
import { CataloguePage } from "../pages/catalogue"
import { ErrorPage } from "../pages/error"
import { DetailsPage } from "../pages/details"

export const App = () => (
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
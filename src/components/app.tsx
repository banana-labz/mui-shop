import "material-react-toastify/dist/ReactToastify.css"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from "material-react-toastify"

import { Header } from "./header"

import { ThemeProvider } from "../styles"
import { CataloguePage } from "../pages/catalogue"
import { ErrorPage } from "../pages/error"
import { DetailsPage } from "../pages/details"

export const App = () => (
  <ThemeProvider>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/catalogue"/>}/>
        <Route path="catalogue/*" element={<CataloguePage/>}/>
        <Route path="details/:id" element={<DetailsPage/>}/>
        <Route path="error" element={<ErrorPage/>}/>
      </Routes>
    </Router>
    <ToastContainer/>
  </ThemeProvider>
)
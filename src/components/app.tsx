import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import { Header } from "./header"

import { ThemeProvider } from "../styles"

import { CataloguePage } from "../pages/catalogue"
import { ErrorPage } from "../pages/error"

export const App = () => (
  <ThemeProvider>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/catalogue"/>}/>
        <Route path="catalogue/*" element={<CataloguePage/>}/>
        <Route path="error" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  </ThemeProvider>
)
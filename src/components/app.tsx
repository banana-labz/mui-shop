import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import { Header } from "./header"

import { ThemeProvider } from "../styles"
import { CataloguePage } from "../pages/catalogue"

export const App = () => (
  <ThemeProvider>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/catalogue"/>}/>
        <Route path="catalogue/*" element={<CataloguePage/>}/>
      </Routes>
    </Router>
  </ThemeProvider>
)
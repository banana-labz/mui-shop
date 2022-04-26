import React from "react"

import { Navigate, useParams } from "react-router"

import { ProductDetails } from "../components/product-details"

export const DetailsPage = () => {
  const { id } = useParams()

  return id ? <ProductDetails id={id}/> : <Navigate to="/"/>
}
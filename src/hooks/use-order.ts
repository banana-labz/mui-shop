import { useSelector } from "react-redux"
import { OrderState } from "../reducers"
import { RootState } from "../store"

export const useOrder = () => (
  useSelector<RootState, OrderState>(state => state.order)
)
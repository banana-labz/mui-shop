import { useSelector } from "react-redux"
import { RootState, OrderState } from "../reducers"

export const useOrder = () => (
  useSelector<RootState, OrderState>(state => state.order)
)
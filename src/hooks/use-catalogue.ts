import { useSelector } from "react-redux"
import { RootState, CatalogueState } from "../reducers"

export const useCatalogue = () => (
  useSelector<RootState, CatalogueState>(state => state.catalogue)
)
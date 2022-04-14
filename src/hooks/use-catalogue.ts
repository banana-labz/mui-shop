import { useSelector } from "react-redux"
import { CatalogueState } from "../reducers"
import { RootState } from "../store"

export const useCatalogue = () => (
  useSelector<RootState, CatalogueState>(state => state.catalogue)
)
import type { ProductData } from "../types"

export enum SortType {
  ALPHABETIC = "By name",
  BY_RATING = "By rating",
  BY_PRICE = "By price"
}

type SortMethod = (a: ProductData, b: ProductData) => number

export const SortOptions: { [key: string]: SortMethod } = {
  [SortType.ALPHABETIC]: (a, b) => a.name > b.name ? 1 : (a.name === b.name ? 0 : -1),
  [SortType.BY_RATING]: (a, b) => a.rating - b.rating,
  [SortType.BY_PRICE]: (a, b) => a.price - b.price
}
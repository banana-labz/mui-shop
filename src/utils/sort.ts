import type { ProductData } from "../types"

export enum SortType {
    ALPHABETIC = "From A to Z",
    REVERSE_ALPHABETIC = "From Z to A",
    BY_WIDTH = "By width"
}

type SortMethod = (a: ProductData, b: ProductData) => number

export const SortOptions: { [key: string]: SortMethod } = {
    [SortType.ALPHABETIC]: (a, b) => a.name > b.name ? 1 : (a.name === b.name ? a.count - b.count : -1),
    [SortType.REVERSE_ALPHABETIC]: (a, b) => a.name < b.name ? 1 : (b.name === a.name ? a.count - b.count : -1),
    [SortType.BY_WIDTH]: (a, b) => a.size.width - b.size.width
}
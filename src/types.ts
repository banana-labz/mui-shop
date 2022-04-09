import { CommentData } from "./utils/comment"

export interface ProductData {
    id: string,
    imageUrl: string,
    name: string,
    count: number,
    size: {
        width: number,
        height: number
    },
    weight: string,
    comments: CommentData[]
}
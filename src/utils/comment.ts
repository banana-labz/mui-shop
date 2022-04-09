interface CommentData {
    id: number,
    productId: number,
    description: string,
    date: string
}

type CommentCreator = (id: number, productId: number, description: string, date: string) => CommentData

const CreateComment: CommentCreator = (id, productId, description, date) => ({
    id, productId, description, date
})

export type { CommentData }
export { CreateComment }
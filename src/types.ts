import { CommentData } from "./utils/comment"

interface ProductData {
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

<<<<<<< HEAD
export type { ProductData }
=======
enum ModalType{
    NONE = "NONE",
    MODAL_ITEM_EDIT = "MODAL_ITEM_EDIT",
    MODAL_ITEM_REMOVE = "MODAL_ITEM_REMOVE",
    MODAL_ITEM_ADD = "MODAL_ITEM_ADD"
}

enum SortType {
    ALPHABETIC = "From A to Z",
    REVERSE_ALPHABETIC = "From Z to A",
    BY_WIDTH = "By width"
}

export type { ProductData }

export { ModalType, SortType }
>>>>>>> e27aefed1ede6b09838ceafc1c4d430ae609a035
